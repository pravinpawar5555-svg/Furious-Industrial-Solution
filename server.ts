import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import express from 'express';
import type { Request, Response } from 'express';

const PORT = Number(process.env.PORT) || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

const ALLOWED_SERVICES = new Set([
  'Vibration Analysis',
  'Laser Shaft Alignment',
  'Dynamic Balancing',
  'Oil Analysis',
  'RCFA',
  'Machine Overhauling',
  'Other',
]);

const DATA_DIR = path.resolve(process.cwd(), 'data');
const REQUESTS_FILE = path.resolve(DATA_DIR, 'service-requests.json');

// Simple in-memory sliding-window rate limiter per client IP
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_REQUESTS = 15;
const ipHits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipHits.get(ip) ?? []).filter((ts) => now - ts < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX_REQUESTS) {
    ipHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  ipHits.set(ip, recent);
  return false;
}

function cleanString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function cleanMultiline(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

interface ServiceRequestRecord {
  referenceId: string;
  receivedAt: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  machineType: string;
  serviceRequired: string;
  message: string;
}

async function persistServiceRequest(record: ServiceRequestRecord): Promise<void> {
  if (!REQUESTS_FILE.startsWith(DATA_DIR + path.sep)) {
    throw new Error('Invalid storage path configuration');
  }
  await fs.mkdir(DATA_DIR, { recursive: true });
  let existing: ServiceRequestRecord[] = [];
  try {
    const raw = await fs.readFile(REQUESTS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      existing = parsed;
    }
  } catch {
    existing = [];
  }
  existing.push(record);
  await fs.writeFile(REQUESTS_FILE, JSON.stringify(existing, null, 2), 'utf8');
}

async function startServer() {
  const app = express();
  app.set('trust proxy', 1);
  app.disable('x-powered-by');
  app.use(express.json({ limit: '16kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });

  app.post('/api/service-request', async (req: Request, res: Response) => {
    const clientIp = req.ip || 'unknown';
    if (isRateLimited(clientIp)) {
      res.status(429).json({
        ok: false,
        error: 'Too many service requests submitted recently. Please wait a few minutes or call +91 98322227557 directly.',
      });
      return;
    }

    const body = req.body && typeof req.body === 'object' ? req.body : {};
    const name = cleanString(body.name, 100);
    const company = cleanString(body.company, 140);
    const email = cleanString(body.email, 160);
    const phone = cleanString(body.phone, 32);
    const machineType = cleanString(body.machineType, 120);
    const serviceRequired = cleanString(body.serviceRequired, 80);
    const message = cleanMultiline(body.message, 2000);

    const fieldErrors: Record<string, string> = {};

    if (name.length < 2) {
      fieldErrors.name = 'Please enter your full name.';
    }
    if (company.length < 2) {
      fieldErrors.company = 'Please enter your plant or company name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      fieldErrors.email = 'Please enter a valid work email address.';
    }
    if (!/^[+\d\s()-]{8,24}$/.test(phone) || phone.replace(/\D/g, '').length < 8) {
      fieldErrors.phone = 'Please enter a valid contact phone number.';
    }
    if (machineType.length < 2) {
      fieldErrors.machineType = 'Please specify the machine or equipment type.';
    }
    if (!ALLOWED_SERVICES.has(serviceRequired)) {
      fieldErrors.serviceRequired = 'Please select a valid service from the list.';
    }
    if (message.length < 10) {
      fieldErrors.message = 'Please describe the machine condition, symptoms, or service requirement (at least 10 characters).';
    }

    if (Object.keys(fieldErrors).length > 0) {
      res.status(400).json({
        ok: false,
        error: 'Please review the highlighted fields and try again.',
        fieldErrors,
      });
      return;
    }

    const now = new Date();
    const dateStamp = now.toISOString().slice(0, 10).replace(/-/g, '');
    const suffix = crypto.randomBytes(2).toString('hex').toUpperCase();
    const referenceId = `FIS-${dateStamp}-${suffix}`;

    const record: ServiceRequestRecord = {
      referenceId,
      receivedAt: now.toISOString(),
      name,
      company,
      email,
      phone,
      machineType,
      serviceRequired,
      message,
    };

    try {
      await persistServiceRequest(record);
      res.status(201).json({
        ok: true,
        referenceId: record.referenceId,
        receivedAt: record.receivedAt,
        summary: {
          name: record.name,
          company: record.company,
          machineType: record.machineType,
          serviceRequired: record.serviceRequired,
        },
      });
    } catch {
      res.status(500).json({
        ok: false,
        error: 'Unable to record the request at the moment. Please contact Ajit Patil directly at +91 98322227557 or via WhatsApp.',
      });
    }
  });

  if (!IS_PROD) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Furious Industrial Solution server running on port ${PORT}`);
  });
}

startServer();
