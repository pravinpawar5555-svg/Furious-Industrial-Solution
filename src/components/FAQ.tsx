import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ServiceFAQ } from '../data/siteData';

interface FAQProps {
  items: ServiceFAQ[];
  heading?: string;
}

export function FAQ({ items, heading = 'Frequently Asked Technical Questions' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-6">
        {heading}
      </h2>
      <div className="divide-y divide-[#D8E1E8] border-y border-[#D8E1E8] bg-white">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${idx}`;
          const buttonId = `faq-button-${idx}`;
          return (
            <div key={item.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 px-4 sm:px-6 text-left flex items-center justify-between gap-4 hover:bg-[#F4F7F9] transition-colors cursor-pointer"
                >
                  <span className="font-display text-base font-semibold text-[#0B1F33]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0F6B7D] shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-4 sm:px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
