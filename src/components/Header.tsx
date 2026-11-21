import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { COMPANY } from '../data/siteData';
import { AppLink, useRouter } from '../lib/router';

interface NavItem {
  label: string;
  to: string;
  scrollToId?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Machines', to: '/machines' },
  { label: 'Why FIS', to: '/', scrollToId: 'why-fis' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const { pathname, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (item: NavItem) => {
    if (item.scrollToId) return false;
    if (item.to === '/') return pathname === '/';
    return pathname === item.to || pathname.startsWith(`${item.to}/`);
  };

  const handleRequestService = () => {
    setMobileMenuOpen(false);
    if (pathname === '/' || pathname.startsWith('/services/') || pathname === '/contact') {
      const contactEl = document.getElementById('contact-section');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    navigate('/contact', { scrollToId: 'contact-section' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#D8E1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 lg:h-[72px] flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Single-line brand mark */}
        <AppLink
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 shrink-0 whitespace-nowrap group"
          aria-label="Furious Industrial Solution (FIS) Home"
        >
          <img
            src={COMPANY.logoUrl}
            alt="FIS Logo"
            referrerPolicy="no-referrer"
            className="h-9 w-auto object-contain shrink-0"
          />
          <span className="font-display text-lg lg:text-xl font-bold tracking-tight text-[#0B1F33] group-hover:text-[#0F6B7D] transition-colors">
            {COMPANY.shortName}
          </span>
        </AppLink>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);
            return (
              <AppLink
                key={item.label}
                to={item.to}
                scrollToId={item.scrollToId}
                className={`text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 ${
                  active
                    ? 'text-[#0B1F33] border-[#0F6B7D]'
                    : 'text-slate-600 border-transparent hover:text-[#0B1F33] hover:border-slate-300'
                }`}
              >
                {item.label}
              </AppLink>
            );
          })}
        </nav>

        {/* Zone 3: Secondary Phone CTA + Primary Request Service CTA */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-[#0B1F33] hover:text-[#0F6B7D] transition-colors whitespace-nowrap shrink-0 tabular-nums"
          >
            <Phone className="w-4 h-4 text-[#0F6B7D]" aria-hidden="true" />
            <span>{COMPANY.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={handleRequestService}
            className="px-4 py-2.5 bg-[#DF6C12] hover:bg-[#BF5709] text-white text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request Service
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <a
            href={COMPANY.phoneHref}
            aria-label={`Call ${COMPANY.phoneDisplay}`}
            className="inline-flex items-center justify-center w-10 h-10 text-[#0B1F33] hover:text-[#0F6B7D] rounded-md"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex items-center justify-center w-10 h-10 text-[#0B1F33] hover:bg-[#F4F7F9] rounded-md cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D8E1E8] bg-white">
          <nav aria-label="Mobile Navigation" className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <AppLink
                  key={item.label}
                  to={item.to}
                  scrollToId={item.scrollToId}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? 'bg-[#EEF7F9] text-[#0B1F33] font-semibold'
                      : 'text-slate-700 hover:bg-[#F4F7F9] hover:text-[#0B1F33]'
                  }`}
                >
                  {item.label}
                </AppLink>
              );
            })}
            <div className="mt-3 pt-3 border-t border-[#D8E1E8] flex flex-col gap-2.5">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#D8E1E8] rounded-md text-sm font-mono font-medium text-[#0B1F33] tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#0F6B7D]" aria-hidden="true" />
                <span>{COMPANY.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={handleRequestService}
                className="w-full px-4 py-2.5 bg-[#DF6C12] hover:bg-[#BF5709] text-white text-sm font-semibold rounded-md transition-colors cursor-pointer"
              >
                Request Service
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
