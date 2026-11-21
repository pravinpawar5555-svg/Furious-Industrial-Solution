interface AssetsFetcher {
  fetch(request: Request): Promise<Response>;
}

interface WorkerEnv {
  ASSETS: AssetsFetcher;
  INQUIRY_WEBHOOK_URL?: string;
}

const ALLOWED_SERVICES = new Set([
  'Vibration Analysis',
  'Laser Shaft Alignment',
  'Dynamic Balancing',
  'Oil Analysis',
  'RCFA',
  'Machine Overhauling',
  'Other',
]);

const MAX_BODY_BYTES = 16 * 1024;

function cleanString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function cleanMultiline(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function generateReferenceId(date: Date): string {
  const dateStamp = date.toISOString().slice(0, 10).replace(/-/g, '');
  const bytes = new Uint8Array(2);
  crypto.getRandomValues(bytes);
  const suffix = Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
  return `FIS-${dateStamp}-${suffix}`;
}

async function handleServiceRequest(request: Request, env: WorkerEnv): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, error: 'Method not allowed.' }, 405);
  }

  const contentLengthHeader = request.headers.get('content-length');
  if (contentLengthHeader && Number(contentLengthHeader) > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, error: 'Request payload is too large.' }, 413);
  }

  let rawText: string;
  try {
    rawText = await request.text();
  } catch {
    return jsonResponse({ ok: false, error: 'Unable to read request payload.' }, 400);
  }

  if (new TextEncoder().encode(rawText).byteLength > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, error: 'Request payload is too large.' }, 413);
  }

  let body: Record<string, unknown>;
  try {
    const parsed = JSON.parse(rawText);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return jsonResponse({ ok: false, error: 'Invalid JSON body.' }, 400);
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid JSON body.' }, 400);
  }

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
    fieldErrors.message =
      'Please describe the machine condition, symptoms, or service requirement (at least 10 characters).';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return jsonResponse(
      {
        ok: false,
        error: 'Please review the highlighted fields and try again.',
        fieldErrors,
      },
      400
    );
  }

  const now = new Date();
  const referenceId = generateReferenceId(now);
  const record = {
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

  console.log(JSON.stringify({ event: 'fis_service_request', ...record }));

  if (env.INQUIRY_WEBHOOK_URL) {
    try {
      const webhookUrl = new URL(env.INQUIRY_WEBHOOK_URL);
      if (webhookUrl.protocol === 'https:') {
        await fetch(webhookUrl.toString(), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(record),
        });
      }
    } catch {
      console.error(`Webhook delivery failed for ${referenceId}`);
    }
  }

  return jsonResponse(
    {
      ok: true,
      referenceId: record.referenceId,
      receivedAt: record.receivedAt,
      summary: {
        name: record.name,
        company: record.company,
        machineType: record.machineType,
        serviceRequired: record.serviceRequired,
      },
    },
    201
  );
}

export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return jsonResponse({ status: 'ok' }, 200);
    }

    if (url.pathname === '/api/service-request') {
      return handleServiceRequest(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
