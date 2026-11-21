import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  COMMON_PROBLEMS,
  COMPANY,
  HOMEPAGE_HIGHLIGHT_SLUGS,
  INDUSTRIES,
  SERVICES,
  WHY_CHOOSE_FIS,
  getServiceBySlug,
} from '../data/siteData';
import { AppLink, useRouter } from '../lib/router';
import { useSEO } from '../lib/seo';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';
import { Hero } from '../components/Hero';
import { IndustryCard } from '../components/IndustryCard';
import { MachineGrid } from '../components/MachineCard';
import { MediaImage } from '../components/MediaImage';
import { ProcessFlow } from '../components/ProcessFlow';
import { ServiceCard } from '../components/ServiceCard';

export function HomePage() {
  const { navigate } = useRouter();

  useSEO({
    title: 'Furious Industrial Solution (FIS) | Condition Monitoring & Reliability Experts',
    description:
      'Industrial condition monitoring, vibration analysis, laser shaft alignment, in-situ dynamic balancing, oil analysis, RCFA, and machine overhauling services for rotating equipment.',
    path: '/',
    keywords:
      'Condition Monitoring Services, Vibration Analysis Services, Industrial Vibration Analysis, Laser Shaft Alignment Services, Dynamic Balancing Services, Oil Analysis Services, Root Cause Failure Analysis, RCFA Services, Machine Overhauling Services, Predictive Maintenance Services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: COMPANY.titleName,
      alternateName: COMPANY.shortName,
      description:
        'Condition monitoring, vibration diagnostics, laser shaft alignment, in-situ dynamic balancing, oil analysis, RCFA, and machine overhauling services.',
      slogan: COMPANY.tagline,
      telephone: '+9198322227557',
      founder: {
        '@type': 'Person',
        name: COMPANY.owner,
      },
    },
  });

  const highlightServices = HOMEPAGE_HIGHLIGHT_SLUGS.map((slug) => getServiceBySlug(slug)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s)
  );

  const featuredIndustries = INDUSTRIES.filter((ind) => ind.featuredOnHome);

  return (
    <>
      {/* Section 2 – Hero */}
      <Hero />

      {/* Section 3 – Key Capabilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#0F6B7D] mb-2">
                Core Capabilities
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B1F33]">
                Condition Monitoring &amp; Precision Maintenance Services
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Focused field services supporting industrial plants from early fault detection through precision mechanical correction and verification.
              </p>
            </div>
            <AppLink
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F6B7D] hover:text-[#0B1F33] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View All Service Details</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </AppLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 – Reliability Workflow */}
      <ProcessFlow />

      {/* Section 5 – Machinery Applications */}
      <section id="machines-section" className="py-16 lg:py-24 bg-[#F4F7F9] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#0F6B7D] mb-2">
                Machinery We Support
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B1F33]">
                Rotating Equipment Applications Across Plant Utilities &amp; Process Lines
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Select any equipment category below to review typical condition-monitoring parameters and corrective services.
              </p>
            </div>
            <AppLink
              to="/machines"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F6B7D] hover:text-[#0B1F33] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore All 15 Asset Categories</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </AppLink>
          </div>

          <MachineGrid />
        </div>
      </section>

      {/* Section 6 – Common Problems We Help Solve */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-medium text-[#0F6B7D] mb-2">
              When to Contact FIS
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B1F33]">
              Common Machinery Problems We Help Solve
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Early engineering intervention helps prevent recurring component failures, unplanned downtime, and avoidable mechanical damage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMMON_PROBLEMS.map((problem, index) => (
              <div
                key={problem.title}
                className="bg-[#F4F7F9] border border-[#D8E1E8] rounded-lg p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#0F6B7D] tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-base font-semibold text-[#0B1F33] mt-2">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {problem.symptom}
                  </p>
                  <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                    <span className="font-semibold text-[#0B1F33]">Approach:</span> {problem.diagnosticPath}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D8E1E8] flex items-center justify-between gap-2">
                  <AppLink
                    to={problem.serviceRoute}
                    className="text-xs font-semibold text-[#0F6B7D] hover:text-[#0B1F33] inline-flex items-center gap-1"
                  >
                    <span>Related Service</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </AppLink>
                  <button
                    type="button"
                    onClick={() =>
                      navigate('/', {
                        scrollToId: 'contact-section',
                        inquiryPreset: {
                          service: problem.serviceFormValue,
                          message: `We are experiencing ${problem.title.toLowerCase()} and would like to discuss condition monitoring / diagnostic support.`,
                        },
                      })
                    }
                    className="text-xs font-medium text-slate-600 hover:text-[#DF6C12] transition-colors cursor-pointer"
                  >
                    Discuss Issue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 – Service Detail Highlight (Alternating Image / Text) */}
      <section className="py-16 lg:py-24 bg-[#F4F7F9] border-t border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-[#0F6B7D] mb-2">
              Technical Service Spotlight
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B1F33]">
              Diagnostics &amp; Field Correction Built Around Engineering Evidence
            </h2>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {highlightServices.map((service, idx) => {
              const imageFirstOnDesktop = idx % 2 === 1;
              return (
                <article
                  key={service.slug}
                  className="bg-white border border-[#D8E1E8] rounded-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    <div
                      className={`lg:col-span-5 ${
                        imageFirstOnDesktop ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <MediaImage
                        src={service.imageUrl}
                        alt={service.imageAlt}
                        aspectClass="aspect-[4/3] lg:aspect-auto lg:h-full"
                        className="h-full min-h-[240px]"
                      />
                    </div>

                    <div
                      className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                        imageFirstOnDesktop ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-mono text-[#0F6B7D] mb-2 tabular-nums">
                          {service.index} · {service.shortName}
                        </p>
                        <h3 className="font-display text-2xl sm:text-[28px] font-bold text-[#0B1F33]">
                          {service.name}
                        </h3>
                        <p className="mt-3 text-base text-slate-600 leading-relaxed">
                          {service.heroSummary}
                        </p>

                        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                          {service.technicalScope.slice(0, 4).map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-slate-700"
                            >
                              <Check
                                className="w-4 h-4 text-[#0F6B7D] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-7 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-4">
                        <button
                          type="button"
                          onClick={() =>
                            navigate('/', {
                              scrollToId: 'contact-section',
                              inquiryPreset: { service: service.formValue },
                            })
                          }
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-[#DF6C12] hover:bg-[#BF5709] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer"
                        >
                          {service.ctaLabel}
                        </button>
                        <AppLink
                          to={service.route}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1F33] hover:text-[#0F6B7D] transition-colors whitespace-nowrap"
                        >
                          <span>Full Technical Scope</span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </AppLink>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 8 – Industries */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#D8E1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#0F6B7D] mb-2">
                Industries We Serve
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B1F33]">
                Reliability Support for Process &amp; Manufacturing Plants
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Supporting plant maintenance, utility, and reliability engineering teams across continuous-process and heavy industrial facilities.
              </p>
            </div>
            <AppLink
              to="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F6B7D] hover:text-[#0B1F33] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View All Industrial Sectors</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </AppLink>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredIndustries.map((industry) => (
              <IndustryCard key={industry.name} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 – Why Choose FIS */}
      <section id="why-fis" className="py-16 lg:py-24 bg-[#F4F7F9] border-t border-[#D8E1E8] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-medium text-[#0F6B7D] mb-2">
              Why Choose {COMPANY.shortName}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B1F33]">
              A Grounded Engineering Approach to Machinery Reliability
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Practical field diagnostics, precision corrective execution, and verifiable post-maintenance evidence under one technical roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_FIS.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#D8E1E8] rounded-lg p-6"
              >
                <span className="font-mono text-xs text-[#0F6B7D] tabular-nums">
                  {item.index}
                </span>
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

      {/* Section 10 – Call to Action */}
      <CTASection />

      {/* Section 11 – Contact */}
      <ContactForm />
    </>
  );
}
