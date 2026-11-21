import React from 'react';
import { Phone, Wrench } from 'lucide-react';
import { COMPANY, getWhatsAppUrl } from '../data/siteData';
import { useRouter } from '../lib/router';
import { WhatsAppIcon } from './Icons';

export function WhatsAppButton() {
  const { pathname, navigate } = useRouter();

  const handleRequestService = () => {
    if (pathname === '/' || pathname.startsWith('/services/') || pathname === '/contact') {
      const el = document.getElementById('contact-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    navigate('/contact', { scrollToId: 'contact-section' });
  };

  return (
    <>
      {/* Desktop / Tablet floating WhatsApp action */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Furious Industrial Solution on WhatsApp"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-4 py-3 bg-[#0F6B7D] hover:bg-[#0C5868] text-white text-sm font-semibold rounded-md shadow-lg border border-[#1E889C] transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap"
      >
        <WhatsAppIcon className="w-5 h-5 text-[#4ADE80]" />
        <span>WhatsApp FIS</span>
      </a>

      {/* Mobile compact sticky bottom action bar (h-14 = 56px; paired with h-14 mobile header stays <=15% viewport height) */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-[#0B1F33] border-t border-[#1B3E60] h-14 grid grid-cols-3 divide-x divide-[#1B3E60]">
        <a
          href={COMPANY.phoneHref}
          className="flex items-center justify-center gap-1.5 text-xs font-semibold text-white active:bg-[#122E4A] whitespace-nowrap"
        >
          <Phone className="w-4 h-4 text-[#7AD0E0]" aria-hidden="true" />
          <span>Call</span>
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-xs font-semibold text-white active:bg-[#122E4A] whitespace-nowrap"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#4ADE80]" />
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={handleRequestService}
          className="flex items-center justify-center gap-1.5 text-xs font-semibold bg-[#DF6C12] active:bg-[#BF5709] text-white whitespace-nowrap cursor-pointer"
        >
          <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Request</span>
        </button>
      </div>
    </>
  );
}
