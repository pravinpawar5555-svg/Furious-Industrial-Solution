import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY, getWhatsAppUrl } from '../data/siteData';
import { WhatsAppIcon } from './Icons';

interface CTASectionProps {
  headline?: string;
  description?: string;
  whatsappContext?: string;
}

export function CTASection({
  headline = 'Experiencing Abnormal Vibration or Repeated Machinery Failure?',
  description = 'Discuss your machine condition with our reliability team.',
  whatsappContext,
}: CTASectionProps) {
  return (
    <section className="bg-[#0B1F33] text-white border-y border-[#1B3E60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#7AD0E0] mb-2">
              {COMPANY.titleName} <span className="text-slate-500 mx-1.5" aria-hidden="true">·</span> Direct Reliability Support
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {headline}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-200">
              <span className="font-semibold text-white">{COMPANY.owner}</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <a
                href={COMPANY.phoneHref}
                className="font-mono text-[#7AD0E0] hover:text-white transition-colors tabular-nums"
              >
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3.5">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DF6C12] hover:bg-[#BF5709] text-white text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call {COMPANY.owner}</span>
            </a>

            <a
              href={getWhatsAppUrl(whatsappContext)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#122E4A] hover:bg-[#1B3E60] border border-[#2E5E88] text-white text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#4ADE80]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
