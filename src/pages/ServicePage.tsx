import React from 'react';
import { ArrowLeft, ArrowRight, Check, Info, Phone } from 'lucide-react';
import { COMPANY, SERVICES, type ServiceDetail } from '../data/siteData';
import { AppLink } from '../lib/router';
import { useSEO } from '../lib/seo';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';
import { FAQ } from '../components/FAQ';
import { ServiceIcon } from '../components/Icons';
import { MediaImage } from '../components/MediaImage';

interface ServicePageProps {
  service: ServiceDetail;
}

export function ServicePage({ service }: ServicePageProps) {
  useSEO({
    title: service.seo.title,
    description: service.seo.description,
    path: service.route,
    keywords: service.seo.keywords,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.heroSummary,
        provider: {
          '@type': 'ProfessionalService',
          name: COMPANY.titleName,
          telephone: '+9198322227557',
        },
        serviceType: service.shortName,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  });

  const scrollToForm = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* 1. Service Hero */}
      <section className="bg-[#0B1F33] text-white border-b border-[#1B3E60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              <li>
                <AppLink to="/" className="hover:text-white transition-colors">
                  Home
                </AppLink>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <AppLink to="/services" className="hover:text-white transition-colors">
                  Services
                </AppLink>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#7AD0E0] font-medium" aria-current="page">
                {service.shortName}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2.5 text-sm text-[#7AD0E0] font-medium mb-3">
                <ServiceIcon slug={service.slug} className="w-5 h-5" />
                <span>
                  Service {service.index} · {COMPANY.titleName}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.14] tracking-tight text-white">
                {service.name}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                {service.heroSummary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DF6C12] hover:bg-[#BF5709] text-white text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#122E4A] hover:bg-[#1B3E60] border border-[#2A5378] text-white text-sm sm:text-base font-mono font-medium rounded-md transition-colors whitespace-nowrap tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#7AD0E0]" aria-hidden="true" />
                  <span>{COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <div className="w-full rounded-lg overflow-hidden border border-[#23486B] bg-[#071524]">
                <MediaImage
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  aspectClass="aspect-[4/3] lg:aspect-auto lg:h-full"
                  className="h-full min-h-[240px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Overview */}
      <section className="py-14 lg:py-20 bg-white border-b border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-[#0F6B7D] mb-2">Service Overview</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F33]">
                Engineering Purpose &amp; Field Approach
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {service.overview.map((paragraph) => (
                <p key={paragraph} className="text-base text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {service.scopeNote && (
                <div className="mt-5 p-4 bg-[#EEF7F9] border border-[#BBDDE5] rounded-md flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#0F6B7D] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-[#0B1F33] leading-relaxed font-medium">
                    {service.scopeNote}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problems Addressed & 4. Technical Scope */}
      <section className="py-14 lg:py-20 bg-[#F4F7F9] border-b border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problems Addressed */}
            <div className="bg-white border border-[#D8E1E8] rounded-lg p-6 sm:p-8">
              <p className="text-sm font-medium text-[#0F6B7D] mb-1.5">Problems Addressed</p>
              <h2 className="font-display text-2xl font-bold text-[#0B1F33]">
                Faults &amp; Reliability Issues Identified
              </h2>
              <ul className="mt-6 space-y-3">
                {service.problemsAddressed.map((problem) => (
                  <li key={problem} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-sm bg-[#DF6C12] shrink-0 mt-2.5" aria-hidden="true" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Scope */}
            <div className="bg-white border border-[#D8E1E8] rounded-lg p-6 sm:p-8">
              <p className="text-sm font-medium text-[#0F6B7D] mb-1.5">Technical Scope</p>
              <h2 className="font-display text-2xl font-bold text-[#0B1F33]">
                Key Service Activities &amp; Capabilities
              </h2>
              <ul className="mt-6 space-y-3">
                {service.technicalScope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <Check className="w-4 h-4 text-[#0F6B7D] shrink-0 mt-1" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Typical Applications */}
      <section className="py-14 lg:py-20 bg-white border-b border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-medium text-[#0F6B7D] mb-2">Typical Applications</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F33]">
              Rotating Equipment Covered Under {service.shortName}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {service.typicalApplications.map((app, idx) => (
              <div
                key={app}
                className="bg-[#F4F7F9] border border-[#D8E1E8] rounded-md px-4 py-3.5 flex items-center gap-3"
              >
                <span className="font-mono text-xs text-[#0F6B7D] tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium text-[#0B1F33]">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Service Methodology */}
      <section className="py-14 lg:py-20 bg-[#0B1F33] text-white border-b border-[#1B3E60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-medium text-[#7AD0E0] mb-2">Service Methodology</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Structured Field Execution Workflow
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              service.methodology.length === 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-5'
            } gap-4`}
          >
            {service.methodology.map((stage) => (
              <div
                key={stage.step}
                className="bg-[#08192A] border border-[#1B3E60] rounded-lg p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#EC7D22] tabular-nums">
                    Stage {stage.step}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white mt-2">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Benefits */}
      <section className="py-14 lg:py-20 bg-white border-b border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-[#0F6B7D] mb-2">Customer Benefits</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F33]">
                Practical Reliability Value for Plant Teams
              </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={benefit}
                  className="bg-[#F4F7F9] border border-[#D8E1E8] rounded-lg p-5 flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-[#0F6B7D] font-medium mt-0.5 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm sm:text-base text-[#0B1F33] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-14 lg:py-20 bg-[#F4F7F9] border-b border-[#D8E1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ
            items={service.faqs}
            heading={`${service.shortName} — Technical FAQ`}
          />
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="py-12 bg-white border-b border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="font-display text-xl font-bold text-[#0B1F33]">
              Other Reliability Services by {COMPANY.shortName}
            </h2>
            <AppLink
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F6B7D] hover:text-[#0B1F33]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>All Services</span>
            </AppLink>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {otherServices.map((other) => (
              <AppLink
                key={other.slug}
                to={other.route}
                className="p-4 bg-[#F4F7F9] hover:bg-[#EEF7F9] border border-[#D8E1E8] hover:border-[#0F6B7D] rounded-md transition-colors flex flex-col justify-between gap-2"
              >
                <span className="font-mono text-xs text-slate-500 tabular-nums">{other.index}</span>
                <span className="font-display text-sm font-semibold text-[#0B1F33]">
                  {other.shortName}
                </span>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Call to Action */}
      <CTASection
        headline={`Need ${service.shortName} Support at Your Plant?`}
        description="Speak directly with Ajit Patil to review your rotating equipment condition, fault symptoms, and service schedule."
        whatsappContext={`Hello Ajit Patil, I would like to discuss ${service.name} for our plant machinery.`}
      />

      {/* 10. Contact Form pre-selected for this service */}
      <ContactForm
        defaultService={service.formValue}
        heading={service.ctaLabel}
        subheading={`Provide your equipment type and operating issue below to request ${service.name} from Furious Industrial Solution.`}
      />
    </>
  );
}
