import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ServiceDetail } from '../data/siteData';
import { AppLink } from '../lib/router';
import { ServiceIcon } from './Icons';

interface ServiceCardProps {
  service: ServiceDetail;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <AppLink
      to={service.route}
      className="group flex flex-col justify-between bg-white border border-[#D8E1E8] hover:border-[#0F6B7D] rounded-lg p-6 transition-colors duration-150"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 rounded-md bg-[#EEF7F9] text-[#0F6B7D] flex items-center justify-center group-hover:bg-[#0F6B7D] group-hover:text-white transition-colors duration-150">
            <ServiceIcon slug={service.slug} className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs text-slate-400 tabular-nums">
            {service.index}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold text-[#0B1F33] group-hover:text-[#0F6B7D] transition-colors">
          {service.shortName}
        </h3>

        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {service.cardDescription}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#0F6B7D]">
        <span>Learn More</span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </AppLink>
  );
}
