import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY, SERVICES } from '../data/siteData';
import { AppLink } from '../lib/router';
import { useSEO } from '../lib/seo';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';
import { ProcessFlow } from '../components/ProcessFlow';
import { ServiceCard } from '../components/ServiceCard';

export function ServicesOverviewPage() {
  useSEO({
    title: 'Condition Monitoring & Reliability Services | Furious Industrial Solution (FIS)',
    description:
      'Explore vibration analysis, laser shaft alignment, in-situ dynamic balancing, oil analysis, root cause failure analysis (RCFA), and machine overhauling services.',
    path: '/services',
    keywords:
      'Condition Monitoring Services, Vibration Analysis Services, Laser Shaft Alignment Services, Dynamic Balancing Services, Oil Analysis Services, RCFA Services, Machine Overhauling Services',
  });

  return (
    <>
      <section className="bg-[#0B1F33] text-white border-b border-[#1B3E60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm font-medium text-[#7AD0E0] mb-2">
            {COMPANY.titleName} · Technical Capabilities
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            Condition Monitoring, Diagnostics &amp; Precision Maintenance Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            Six integrated reliability disciplines helping plant maintenance and reliability teams detect developing faults early, diagnose probable root causes, perform precision corrective work, and verify results.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {/* Service Selection Guide Table */}
          <div className="mt-16">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-6">
              Quick Service Selection Guide
            </h2>
            <div className="overflow-x-auto border border-[#D8E1E8] rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F4F7F9] border-b border-[#D8E1E8] text-xs font-semibold text-[#0B1F33]">
                    <th className="py-3.5 px-4">Service</th>
                    <th className="py-3.5 px-4">Primary Focus</th>
                    <th className="py-3.5 px-4">Typical Trigger</th>
                    <th className="py-3.5 px-4 text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D8E1E8] text-sm bg-white">
                  {SERVICES.map((service) => (
                    <tr key={service.slug} className="hover:bg-[#F8FAFC]">
                      <td className="py-4 px-4 font-semibold text-[#0B1F33] whitespace-nowrap">
                        <span className="font-mono text-xs text-slate-400 mr-2 tabular-nums">
                          {service.index}
                        </span>
                        {service.shortName}
                      </td>
                      <td className="py-4 px-4 text-slate-600">{service.cardDescription}</td>
                      <td className="py-4 px-4 text-slate-600">{service.problemsAddressed[0]}</td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <AppLink
                          to={service.route}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F6B7D] hover:text-[#0B1F33]"
                        >
                          <span>Inspect</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </AppLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <ProcessFlow />
      <CTASection />
      <ContactForm />
    </>
  );
}
