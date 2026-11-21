/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { getServiceBySlug } from './data/siteData';
import { AppLink, RouterProvider, useRouter } from './lib/router';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { MachinesPage } from './pages/MachinesPage';
import { ServicePage } from './pages/ServicePage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';

function PageSwitch() {
  const { pathname } = useRouter();

  if (pathname === '/') {
    return <HomePage />;
  }
  if (pathname === '/about') {
    return <AboutPage />;
  }
  if (pathname === '/services') {
    return <ServicesOverviewPage />;
  }
  if (pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '');
    const service = getServiceBySlug(slug);
    if (service) {
      return <ServicePage service={service} />;
    }
  }
  if (pathname === '/industries') {
    return <IndustriesPage />;
  }
  if (pathname === '/machines') {
    return <MachinesPage />;
  }
  if (pathname === '/contact') {
    return <ContactPage />;
  }

  return (
    <section className="py-24 bg-[#F4F7F9]">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="font-mono text-sm text-[#0F6B7D]">404</p>
        <h1 className="font-display text-3xl font-bold text-[#0B1F33] mt-2">
          Page Not Found
        </h1>
        <p className="mt-3 text-base text-slate-600">
          The page you requested could not be found. Return to the Furious Industrial Solution homepage or browse our services.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <AppLink
            to="/"
            className="px-5 py-2.5 bg-[#0B1F33] hover:bg-[#122E4A] text-white text-sm font-semibold rounded-md transition-colors"
          >
            Back to Home
          </AppLink>
          <AppLink
            to="/services"
            className="px-5 py-2.5 border border-[#D8E1E8] bg-white hover:border-[#0F6B7D] text-[#0B1F33] text-sm font-semibold rounded-md transition-colors"
          >
            View Services
          </AppLink>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#0B1F33]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0B1F33] focus:text-white focus:rounded-md text-sm font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          <PageSwitch />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </RouterProvider>
  );
}
