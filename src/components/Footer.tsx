import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY, SERVICES, getWhatsAppUrl } from '../data/siteData';
import { AppLink } from '../lib/router';
import { WhatsAppIcon } from './Icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071524] text-slate-300 border-t border-[#1B3E60] pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <AppLink to="/" className="inline-flex items-center gap-3 group">
              <div className="bg-white rounded-md p-1.5 shrink-0">
                <img
                  src={COMPANY.logoUrl}
                  alt="Furious Industrial Solution Logo"
                  referrerPolicy="no-referrer"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-display text-base font-bold tracking-tight text-white">
                  {COMPANY.fullName}
                </p>
                <p className="text-xs text-[#7AD0E0] font-medium">
                  {COMPANY.positioning}
                </p>
              </div>
            </AppLink>

            <p className="mt-4 text-sm font-semibold text-white">
              {COMPANY.tagline}
            </p>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-sm">
              Industrial condition monitoring, machinery diagnostics, precision alignment, in-situ balancing, oil analysis, RCFA, and reliability-focused maintenance services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-sm font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <AppLink to="/" className="hover:text-white transition-colors">
                  Home
                </AppLink>
              </li>
              <li>
                <AppLink to="/about" className="hover:text-white transition-colors">
                  About FIS
                </AppLink>
              </li>
              <li>
                <AppLink to="/services" className="hover:text-white transition-colors">
                  Services
                </AppLink>
              </li>
              <li>
                <AppLink to="/industries" className="hover:text-white transition-colors">
                  Industries
                </AppLink>
              </li>
              <li>
                <AppLink to="/machines" className="hover:text-white transition-colors">
                  Machinery Supported
                </AppLink>
              </li>
              <li>
                <AppLink to="/contact" className="hover:text-white transition-colors">
                  Contact
                </AppLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-semibold text-white mb-4">
              Services
            </h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <AppLink
                    to={service.route}
                    className="hover:text-white transition-colors"
                  >
                    {service.shortName}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-semibold text-white mb-4">
              Contact
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-slate-400">Contact Person</p>
                <p className="font-semibold text-white mt-0.5">{COMPANY.owner}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 font-mono text-white hover:text-[#7AD0E0] transition-colors mt-0.5 tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#7AD0E0]" aria-hidden="true" />
                  <span>{COMPANY.phoneDisplay}</span>
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#122E4A] hover:bg-[#1B3E60] border border-[#2A5378] text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#4ADE80]" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#16324E] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
          <p>
            © {year} {COMPANY.fullName} ({COMPANY.shortName}). All rights reserved.
          </p>
          <p>{COMPANY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
