import React from 'react';
import { COMPANY, INDUSTRIES } from '../data/siteData';
import { useSEO } from '../lib/seo';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';
import { IndustryCard } from '../components/IndustryCard';

export function IndustriesPage() {
  useSEO({
    title: 'Industries Served | Furious Industrial Solution (FIS)',
    description:
      'Condition monitoring, vibration analysis, laser shaft alignment, dynamic balancing, oil analysis, and RCFA across chemical, power, steel, cement, pharma, automotive, paper, sugar, and process industries.',
    path: '/industries',
    keywords:
      'Industrial Condition Monitoring, Process Industry Predictive Maintenance, Chemical Plant Vibration Analysis, Power Plant Balancing, Steel Cement Machinery Reliability',
  });

  return (
    <>
      <section className="bg-[#0B1F33] text-white border-b border-[#1B3E60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm font-medium text-[#7AD0E0] mb-2">
            {COMPANY.titleName} · Industrial Sectors
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            Industries We Support
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            Condition monitoring, machinery diagnostics, precision alignment, in-situ balancing, and reliability maintenance for rotating equipment across process and manufacturing sectors.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.name} industry={industry} detailed />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <ContactForm
        heading="Discuss Reliability Support for Your Plant"
        subheading="Tell us about your plant sector and critical rotating equipment to plan condition monitoring or corrective maintenance."
      />
    </>
  );
}
