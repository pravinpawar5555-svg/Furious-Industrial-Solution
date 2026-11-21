import React from 'react';
import type { IndustrySector } from '../data/siteData';

interface IndustryCardProps {
  industry: IndustrySector;
  detailed?: boolean;
}

export function IndustryCard({ industry, detailed = false }: IndustryCardProps) {
  return (
    <div className="bg-white border border-[#D8E1E8] rounded-lg p-5 hover:border-[#0F6B7D] transition-colors duration-150 flex flex-col justify-between">
      <div>
        <h3 className="font-display text-base font-semibold text-[#0B1F33]">
          {industry.name}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {detailed ? industry.reliabilityFocus : industry.typicalEquipment}
        </p>
      </div>
      {detailed && (
        <div className="mt-4 pt-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            <span className="font-medium text-[#0B1F33]">Typical Assets:</span> {industry.typicalEquipment}
          </p>
        </div>
      )}
    </div>
  );
}
