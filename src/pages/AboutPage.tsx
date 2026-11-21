import React from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';
import {
  COMPANY,
  RELIABILITY_WORKFLOW,
  TARGET_STAKEHOLDERS,
  WHY_CHOOSE_FIS,
  getWhatsAppUrl,
} from '../data/siteData';
import { AppLink } from '../lib/router';
import { useSEO } from '../lib/seo';
import { CTASection } from '../components/CTASection';
import { WhatsAppIcon } from '../components/Icons';
import { MediaImage } from '../components/MediaImage';

export function AboutPage() {
  useSEO({
    title: 'About Furious Industrial Solution (FIS) | Condition Monitoring Experts',
    description:
      'Learn about Furious Industrial Solution (FIS), led by Ajit Patil—providing condition monitoring, vibration diagnostics, precision alignment, balancing, oil analysis, RCFA, and machine overhauling.',
    path: '/about',
    keywords:
      'About Furious Industrial Solution, FIS Condition Monitoring, Machinery Reliability Consultant, Ajit Patil, Industrial Predictive Maintenance',
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white border-b border-[#1B3E60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm font-medium text-[#7AD0E0] mb-2">
            About {COMPANY.shortName} · {COMPANY.positioning}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            About {COMPANY.titleName}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            {COMPANY.tagline} — Practical field diagnostics and precision corrective maintenance designed for industrial rotating machinery.
          </p>
        </div>
      </section>

      {/* Core Grounded Description */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-[#0F6B7D] mb-2">Who We Are</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F33]">
                  Condition Data Paired with Practical Mechanical Evaluation
                </h2>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  Furious Industrial Solution provides condition-monitoring, machinery diagnostics and precision-maintenance services for industrial rotating equipment. Our approach combines condition data with practical engineering evaluation to help customers identify developing problems, plan corrective action and improve machinery reliability.
                </p>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  Rather than stopping at raw vibration readings or generic repair checklists, FIS connects measurement directly with probable fault diagnosis, precision corrective execution—including laser shaft alignment, in-situ dynamic balancing, and reliability-focused overhauling—and post-maintenance verification.
                </p>
              </div>

              <div className="mt-8 p-6 bg-[#F4F7F9] border border-[#D8E1E8] rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white border border-[#D8E1E8] rounded-md p-2 flex items-center justify-center shrink-0">
                    <img
                      src={COMPANY.logoUrl}
                      alt="FIS Brand Mark"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Owner / Technical Contact</p>
                    <p className="font-display text-lg font-bold text-[#0B1F33]">
                      {COMPANY.owner}
                    </p>
                    <a
                      href={COMPANY.phoneHref}
                      className="font-mono text-sm text-[#0F6B7D] hover:text-[#0B1F33] tabular-nums"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                    href={COMPANY.phoneHref}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#0B1F33] hover:bg-[#122E4A] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call</span>
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#0F6B7D] hover:bg-[#0C5868] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <div className="w-full rounded-lg overflow-hidden border border-[#D8E1E8]">
                <MediaImage
                  src={COMPANY.heroImageUrl}
                  alt="Furious Industrial Solution field vibration inspection on industrial rotating machinery"
                  aspectClass="aspect-[4/3] lg:aspect-auto lg:h-full"
                  className="h-full min-h-[260px]"
                  caption="Field-oriented diagnostics and precision maintenance for industrial rotating assets."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Philosophy */}
      <section className="py-16 lg:py-20 bg-[#F4F7F9] border-b border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-medium text-[#0F6B7D] mb-2">Reliability Discipline</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F33]">
              How FIS Supports Maintenance Decisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_FIS.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#D8E1E8] rounded-lg p-6"
              >
                <span className="font-mono text-xs text-[#0F6B7D] tabular-nums">{item.index}</span>
                <h3 className="font-display text-lg font-semibold text-[#0B1F33] mt-2">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With & Workflow Summary */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <p className="text-sm font-medium text-[#0F6B7D] mb-2">Industrial Stakeholders</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F33]">
                Built for Plant Engineering &amp; Maintenance Teams
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Our diagnostic reports, alignment documentation, and technical discussions are structured for industrial professionals responsible for asset availability and safe plant operation:
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TARGET_STAKEHOLDERS.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-2.5 text-sm font-medium text-[#0B1F33] py-2 px-3 bg-[#F4F7F9] border border-[#D8E1E8] rounded-md"
                  >
                    <Check className="w-4 h-4 text-[#0F6B7D] shrink-0" aria-hidden="true" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <p className="text-sm font-medium text-[#0F6B7D] mb-2">End-to-End Methodology</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F33]">
                Measure → Analyze → Diagnose → Correct → Verify
              </h2>
              <div className="mt-6 space-y-3">
                {RELIABILITY_WORKFLOW.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-4 bg-[#F4F7F9] border border-[#D8E1E8] rounded-md flex items-start gap-4"
                  >
                    <span className="font-mono text-xs font-medium text-[#0F6B7D] mt-1 tabular-nums">
                      {stage.step}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-[#0B1F33]">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <AppLink
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F6B7D] hover:text-[#0B1F33]"
                >
                  <span>Explore All FIS Technical Services</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </AppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
