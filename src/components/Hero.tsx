import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY } from '../data/siteData';
import { useRouter } from '../lib/router';
import { MediaImage } from './MediaImage';

export function Hero() {
  const { navigate } = useRouter();

  const handleRequestSupport = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/contact', { scrollToId: 'contact-section' });
    }
  };

  return (
    <section className="bg-[#0B1F33] text-white border-b border-[#1B3E60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left column: Value proposition & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-[#7AD0E0] tracking-wide mb-4">
                {COMPANY.titleName} <span className="text-slate-500 mx-1.5" aria-hidden="true">·</span> {COMPANY.positioning}
              </p>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] tracking-tight text-white max-w-2xl">
                Precision Condition Monitoring for Reliable Rotating Machinery
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                Vibration diagnostics, precision alignment, dynamic balancing, oil analysis, RCFA and machinery maintenance services designed to detect problems early and improve equipment reliability.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={handleRequestSupport}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DF6C12] hover:bg-[#BF5709] text-white text-sm sm:text-base font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Request Technical Support</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#122E4A] hover:bg-[#1B3E60] border border-[#2A5378] text-white text-sm sm:text-base font-mono font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#7AD0E0]" aria-hidden="true" />
                  <span>Call {COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1B3E60] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-white">{COMPANY.tagline}</span>
              <span className="text-slate-500 hidden sm:inline" aria-hidden="true">|</span>
              <span>
                Direct Technical Contact: <strong className="text-white font-medium">{COMPANY.owner}</strong>
              </span>
            </div>
          </div>

          {/* Right column: Authentic industrial rotating machinery photograph */}
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-lg overflow-hidden border border-[#23486B] bg-[#071524] flex flex-col">
              <MediaImage
                src={COMPANY.heroImageUrl}
                alt="Condition-monitoring engineer measuring bearing vibration on an industrial coupled electric motor and centrifugal pump train"
                aspectClass="aspect-[16/10] lg:aspect-auto lg:h-full"
                className="flex-1 min-h-[260px]"
                caption="Field vibration diagnostics on coupled motor–pump rotating machinery."
                priority
              />
            </div>
          </div>
        </div>

        {/* Full-width technical baseline strip underneath the hero split */}
        <div className="mt-10 pt-6 border-t border-[#1B3E60] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-xs font-mono text-[#7AD0E0] mb-1">01 · Detect Early</p>
            <p className="text-sm text-slate-200">
              Vibration spectrum &amp; oil condition assessment before breakdown develops.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#7AD0E0] mb-1">02 · Diagnose Causes</p>
            <p className="text-sm text-slate-200">
              Practical fault diagnosis &amp; structured RCFA for recurring machinery problems.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#7AD0E0] mb-1">03 · Correct Precisely</p>
            <p className="text-sm text-slate-200">
              Laser shaft alignment, in-situ dynamic balancing, and reliability overhauling.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#7AD0E0] mb-1">04 · Verify Behavior</p>
            <p className="text-sm text-slate-200">
              Post-maintenance condition checks to confirm actual improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
