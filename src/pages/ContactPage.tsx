import React from 'react';
import { COMPANY } from '../data/siteData';
import { useSEO } from '../lib/seo';
import { ContactForm } from '../components/ContactForm';

export function ContactPage() {
  useSEO({
    title: 'Contact Furious Industrial Solution (FIS) | Request Service',
    description:
      'Contact Ajit Patil at Furious Industrial Solution (+91 98322227557) for vibration analysis, laser shaft alignment, in-situ dynamic balancing, oil analysis, RCFA, and machine overhauling.',
    path: '/contact',
    keywords:
      'Contact Furious Industrial Solution, Request Vibration Analysis, Laser Shaft Alignment Inquiry, Ajit Patil FIS',
  });

  return (
    <>
      <section className="bg-[#0B1F33] text-white border-b border-[#1B3E60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm font-medium text-[#7AD0E0] mb-2">
            {COMPANY.titleName} · Direct Contact
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            Contact Our Reliability Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            Discuss abnormal vibration, recurring bearing or seal failures, precision alignment, in-situ balancing, or planned machine overhauling directly with {COMPANY.owner}.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
