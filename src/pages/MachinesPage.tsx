import React from 'react';
import { COMPANY } from '../data/siteData';
import { useSEO } from '../lib/seo';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';
import { MachineGrid } from '../components/MachineCard';

export function MachinesPage() {
  useSEO({
    title: 'Machinery We Support | Furious Industrial Solution (FIS)',
    description:
      'Rotating machinery condition monitoring and precision maintenance for motors, pumps, fans, blowers, gearboxes, compressors, cooling towers, agitators, reactors, centrifuges, conveyors, and crushers.',
    path: '/machines',
    keywords:
      'Rotating Machinery Condition Monitoring, Motor Pump Vibration Analysis, Fan Blower Dynamic Balancing, Gearbox Oil Analysis, Industrial Machinery Reliability',
  });

  return (
    <>
      <section className="bg-[#0B1F33] text-white border-b border-[#1B3E60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm font-medium text-[#7AD0E0] mb-2">
            {COMPANY.titleName} · Equipment Capabilities
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            Machinery We Support
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            Select any rotating equipment category below to review typical fault mechanisms, monitoring priorities, and recommended FIS reliability services.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MachineGrid />
        </div>
      </section>

      <CTASection />
      <ContactForm
        heading="Request Diagnostic Support for Your Rotating Equipment"
        subheading="Specify the machine type, operating symptoms, and required service to schedule a technical discussion."
      />
    </>
  );
}
