import React from 'react';
import type { MachineIconKey, ServiceSlug } from '../data/siteData';

interface IconProps {
  className?: string;
}

export function ServiceIcon({ slug, className = 'w-6 h-6' }: { slug: ServiceSlug; className?: string }) {
  switch (slug) {
    case 'vibration-analysis':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M2 12h3l2.2-6 3.1 12 2.7-8 2.2 4.5L17.5 12H22" />
          <path d="M3 19h18" opacity="0.45" />
        </svg>
      );
    case 'laser-shaft-alignment':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="2" y="7" width="5" height="10" rx="1" />
          <rect x="17" y="7" width="5" height="10" rx="1" />
          <path d="M7 12h10" strokeDasharray="2 2" />
          <path d="M12 6v12" opacity="0.5" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'dynamic-balancing':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
          <path d="M17.6 6.4l1.9-1.9" />
        </svg>
      );
    case 'oil-analysis':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M12 3.5C12 3.5 6.5 10.2 6.5 14.5a5.5 5.5 0 0 0 11 0C17.5 10.2 12 3.5 12 3.5z" />
          <path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5" />
        </svg>
      );
    case 'rcfa':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.4 15.4L21 21" />
          <path d="M8 10.5h5M10.5 8v5" />
        </svg>
      );
    case 'machine-overhauling':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 2.5v2.3M12 19.2v2.3M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2.5 12h2.3M19.2 12h2.3M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
          <circle cx="12" cy="12" r="6.8" strokeDasharray="3.5 2.2" />
        </svg>
      );
  }
}

export function MachineLineIcon({ id, className = 'w-7 h-7' }: { id: MachineIconKey; className?: string }) {
  switch (id) {
    case 'motor':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="4" y="8" width="16" height="12" rx="1.5" />
          <path d="M8 8v12M12 8v12M16 8v12" opacity="0.5" />
          <path d="M20 12h4v4h-4" />
          <path d="M9 5h6v3H9z" />
          <path d="M6 20v3M18 20v3M4 23h16" />
        </svg>
      );
    case 'pump':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="14" cy="15" r="7" />
          <circle cx="14" cy="15" r="2.2" />
          <path d="M14 8V4h5" />
          <path d="M3 15h4" />
          <path d="M9 22l-2 2M19 22l2 2M6 24h16" />
        </svg>
      );
    case 'fan':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="14" cy="14" r="9.5" />
          <circle cx="14" cy="14" r="2.2" />
          <path d="M14 11.8c0-3.2 2.4-5.3 4.5-4.8 1.5.4 1.3 2.8-2.3 5.2" />
          <path d="M16.2 14c3.2 0 5.3 2.4 4.8 4.5-.4 1.5-2.8 1.3-5.2-2.3" />
          <path d="M14 16.2c0 3.2-2.4 5.3-4.5 4.8-1.5-.4-1.3-2.8 2.3-5.2" />
          <path d="M11.8 14c-3.2 0-5.3-2.4-4.8-4.5.4-1.5 2.8-1.3 5.2 2.3" />
        </svg>
      );
    case 'blower':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M13 22a8 8 0 1 1 8-8v-7h4v10a5 5 0 0 1-5 5H13z" />
          <circle cx="13" cy="14" r="3.2" />
          <path d="M8 22v2.5M18 22v2.5M6 24.5h14" />
        </svg>
      );
    case 'gearbox':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="5" y="6" width="18" height="16" rx="1.5" />
          <circle cx="11" cy="14" r="3.2" />
          <circle cx="17.5" cy="14" r="2.2" />
          <path d="M2 14h3M23 14h3M5 22h18" />
        </svg>
      );
    case 'compressor':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="4" y="13" width="20" height="8" rx="4" />
          <rect x="9" y="6" width="10" height="7" rx="1" />
          <path d="M12 6V4M16 6V4M8 21v3M20 21v3" />
        </svg>
      );
    case 'cooling-tower':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M8 5h12l2.5 18H5.5L8 5z" />
          <path d="M7.5 10h13M6.5 17h15M4 23h20" />
          <path d="M11 5V3h6v2" />
        </svg>
      );
    case 'agitator':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="10.5" y="3" width="7" height="4.5" rx="1" />
          <path d="M14 7.5V22" />
          <path d="M9 15h10M8 20l6 2 6-2" />
          <path d="M6 10h16v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10z" opacity="0.55" />
        </svg>
      );
    case 'reactor':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M8 9a6 6 0 0 1 12 0v10a6 6 0 0 1-12 0V9z" />
          <path d="M14 3v16M10.5 15.5h7" />
          <path d="M5 12h3M20 12h3" />
        </svg>
      );
    case 'centrifuge':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="5" y="8" width="18" height="11" rx="2" />
          <path d="M9 8v11M19 8v11" opacity="0.5" />
          <path d="M14 5v17M4 22h20" />
          <circle cx="14" cy="13.5" r="2.2" />
        </svg>
      );
    case 'conveyor':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="3" y="11" width="22" height="7" rx="3.5" />
          <circle cx="7" cy="14.5" r="1.5" />
          <circle cx="14" cy="14.5" r="1.5" />
          <circle cx="21" cy="14.5" r="1.5" />
          <path d="M7 18v5M21 18v5" />
        </svg>
      );
    case 'crusher':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M5 5h18l-4 10H9L5 5z" />
          <rect x="7" y="15" width="14" height="7" rx="1" />
          <circle cx="11.5" cy="18.5" r="1.6" />
          <circle cx="16.5" cy="18.5" r="1.6" />
          <path d="M5 24h18" />
        </svg>
      );
    case 'vibrating-screen':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M4 9l20 4v5L4 14V9z" />
          <path d="M8 17v5M20 19v3" />
          <path d="M6 22h4M18 22h4" />
          <path d="M10 6l2-2 2 2 2-2" opacity="0.65" />
        </svg>
      );
    case 'vacuum-pump':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="14" r="6.5" />
          <circle cx="13.5" cy="14" r="2.6" />
          <path d="M18.5 11h5.5v6h-5.5" />
          <path d="M6 22h16" />
        </svg>
      );
    case 'other-rotating':
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="14" cy="14" r="8" />
          <circle cx="14" cy="14" r="2.8" />
          <path d="M14 3v3M14 22v3M3 14h3M22 14h3" />
          <path d="M6.2 6.2l2.1 2.1M19.7 19.7l2.1 2.1M21.8 6.2l-2.1 2.1M8.3 19.7l-2.1 2.1" opacity="0.6" />
        </svg>
      );
  }
}

export function WhatsAppIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.81 13.97c-.24.68-1.41 1.3-1.95 1.38-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.69-.63-2.98-1.29-4.92-4.3-5.07-4.5-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.47.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.84 2.05.91 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.06 1.13 1.01 2.09 1.32 2.39 1.47.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.49.22.57.35.07.12.07.72-.17 1.4z" />
    </svg>
  );
}
