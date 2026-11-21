import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { RELIABILITY_WORKFLOW } from '../data/siteData';

export function ProcessFlow() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-16 lg:py-24 bg-[#0B1F33] text-white border-y border-[#1B3E60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#7AD0E0] mb-2">
            From Detection to Reliable Operation
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            From Measurement to Corrective Action
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Furious Industrial Solution goes beyond collecting vibration numbers. Every field engagement follows a disciplined engineering sequence—connecting condition data directly to root-cause diagnosis, precision corrective work, and post-maintenance verification.
          </p>
        </div>

        {/* 5-Stage Visual Process Flow */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4">
          {RELIABILITY_WORKFLOW.map((stage, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div key={stage.step} className="relative flex flex-col">
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-pressed={isActive}
                  className={`flex-1 text-left rounded-lg p-5 border transition-colors duration-150 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#122E4A] border-[#7AD0E0]'
                      : 'bg-[#08192A] border-[#1B3E60] hover:border-[#2E5E88]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`font-mono text-xs font-medium tabular-nums ${
                          isActive ? 'text-[#EC7D22]' : 'text-[#7AD0E0]'
                        }`}
                      >
                        Step {stage.step}
                      </span>
                      <span className="text-xs text-slate-400">{stage.shortTag}</span>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-white">
                      {stage.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1B3E60] flex items-center justify-between text-xs text-slate-400">
                    <span>
                      {idx < RELIABILITY_WORKFLOW.length - 1
                        ? `Next: ${RELIABILITY_WORKFLOW[idx + 1].title}`
                        : 'Loop closed with baseline'}
                    </span>
                    {idx < RELIABILITY_WORKFLOW.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#7AD0E0] shrink-0" aria-hidden="true" />
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Engineering Verification Visual: Pre-Correction vs Verified Post-Maintenance Spectrum */}
        <div className="mt-10 bg-[#08192A] border border-[#1B3E60] rounded-lg p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-mono text-[#7AD0E0] mb-1.5">
                Illustrative Reliability Cycle · Step {RELIABILITY_WORKFLOW[activeIndex].step} Focus
              </p>
              <h3 className="font-display text-xl font-semibold text-white">
                {RELIABILITY_WORKFLOW[activeIndex].title}: Why Verification Closes the Loop
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {activeIndex === 0 &&
                  'Reliable diagnostics start with repeatable sensor placement, stable operating load, and calibrated multi-axis vibration or lubricant measurements.'}
                {activeIndex === 1 &&
                  'FFT spectra and time waveforms separate dominant synchronous peaks (1×, 2×) from non-synchronous bearing defect or gear mesh frequencies.'}
                {activeIndex === 2 &&
                  'Correlating frequency signatures with machine geometry and inspection findings isolates probable unbalance, misalignment, looseness, or bearing wear.'}
                {activeIndex === 3 &&
                  'Targeted corrective maintenance—such as laser shaft alignment, in-situ dynamic balancing, or planned mechanical overhauling—addresses the root fault directly.'}
                {activeIndex === 4 &&
                  'Post-maintenance vibration verification compares as-left amplitude against the pre-correction baseline to confirm tangible mechanical improvement.'}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-[#EC7D22] inline-block" aria-hidden="true" />
                  <span>As-Found Fault Signature (Illustrative)</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-[#46B5C9] inline-block" aria-hidden="true" />
                  <span>Post-Maintenance Verified Baseline</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#061320] border border-[#1B3E60] rounded-md p-4">
                <svg
                  viewBox="0 0 600 180"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Illustrative FFT vibration spectrum comparing elevated as-found 1x and 2x harmonics before maintenance against reduced post-maintenance verified baseline"
                >
                  {/* Grid lines */}
                  <line x1="44" y1="25" x2="580" y2="25" stroke="#16324E" strokeWidth="1" />
                  <line x1="44" y1="65" x2="580" y2="65" stroke="#16324E" strokeWidth="1" />
                  <line x1="44" y1="105" x2="580" y2="105" stroke="#16324E" strokeWidth="1" />
                  <line x1="44" y1="145" x2="580" y2="145" stroke="#284F75" strokeWidth="1.2" />
                  <line x1="44" y1="18" x2="44" y2="145" stroke="#284F75" strokeWidth="1.2" />

                  {/* Axis labels */}
                  <text x="12" y="88" fill="#8FA8BF" fontSize="10" fontFamily="IBM Plex Mono, monospace" transform="rotate(-90 12 88)">
                    Amplitude
                  </text>
                  <text x="128" y="164" fill="#8FA8BF" fontSize="10" fontFamily="IBM Plex Mono, monospace" textAnchor="middle">
                    1× RPM
                  </text>
                  <text x="230" y="164" fill="#8FA8BF" fontSize="10" fontFamily="IBM Plex Mono, monospace" textAnchor="middle">
                    2× RPM
                  </text>
                  <text x="332" y="164" fill="#8FA8BF" fontSize="10" fontFamily="IBM Plex Mono, monospace" textAnchor="middle">
                    3× RPM
                  </text>
                  <text x="468" y="164" fill="#8FA8BF" fontSize="10" fontFamily="IBM Plex Mono, monospace" textAnchor="middle">
                    High-Freq Band
                  </text>

                  {/* As-found elevated spectrum (Orange) */}
                  <path
                    d="M44 143 L112 142 L124 38 L132 142 L216 142 L228 68 L238 142 L322 142 L332 114 L340 142 L448 140 L460 126 L472 138 L484 128 L496 141 L580 143"
                    fill="none"
                    stroke="#EC7D22"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />

                  {/* Post-maintenance verified spectrum (Technical Teal) */}
                  <path
                    d="M44 144 L116 143 L124 120 L132 143 L220 143 L228 130 L236 143 L325 143 L332 138 L339 143 L455 143 L472 141 L490 143 L580 144"
                    fill="none"
                    stroke="#46B5C9"
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                  />

                  {/* Peak callout annotations */}
                  <text x="136" y="42" fill="#FDBA74" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                    Unbalance / 1× Peak
                  </text>
                  <text x="242" y="72" fill="#FDBA74" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                    Misalignment / 2× Peak
                  </text>
                  <text x="405" y="114" fill="#7AD0E0" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                    Verified Post-Action Floor
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
