import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { MACHINERY_ASSETS, type MachineAsset } from '../data/siteData';
import { useRouter } from '../lib/router';
import { MachineLineIcon } from './Icons';

interface MachineGridProps {
  compact?: boolean;
}

export function MachineGrid({ compact = false }: MachineGridProps) {
  const { navigate } = useRouter();
  const [selectedMachine, setSelectedMachine] = useState<MachineAsset>(MACHINERY_ASSETS[0]);

  const handleRequestForMachine = (asset: MachineAsset) => {
    const contactEl = document.getElementById('contact-section');
    const preset = {
      machineType: asset.name,
      service:
        asset.recommendedServices[0] === 'In-Situ Dynamic Balancing'
          ? 'Dynamic Balancing'
          : asset.recommendedServices[0] || 'Vibration Analysis',
      message: `Looking for condition monitoring / reliability support for our ${asset.name.toLowerCase()}.`,
    };

    if (contactEl) {
      navigate(window.location.pathname, {
        scrollToId: 'contact-section',
        inquiryPreset: preset,
      });
    } else {
      navigate('/contact', {
        scrollToId: 'contact-section',
        inquiryPreset: preset,
      });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {MACHINERY_ASSETS.map((asset) => {
          const isSelected = selectedMachine.id === asset.id;
          return (
            <button
              key={asset.id}
              type="button"
              onClick={() => setSelectedMachine(asset)}
              aria-pressed={isSelected}
              className={`group text-left rounded-lg p-4 border transition-colors duration-150 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#0B1F33] border-[#0B1F33] text-white'
                  : 'bg-white border-[#D8E1E8] text-[#0B1F33] hover:border-[#0F6B7D]'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-md flex items-center justify-center mb-3 transition-colors ${
                  isSelected
                    ? 'bg-[#122E4A] text-[#7AD0E0]'
                    : 'bg-[#F4F7F9] text-[#0F6B7D] group-hover:bg-[#EEF7F9]'
                }`}
              >
                <MachineLineIcon id={asset.id} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-sm sm:text-[15px] font-semibold leading-snug">
                  {asset.name}
                </h3>
                {!compact && (
                  <p
                    className={`mt-1 text-xs ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {asset.category}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected machine reliability focus panel */}
      <div className="mt-6 bg-white border border-[#D8E1E8] rounded-lg p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-start gap-4 max-w-3xl">
          <div className="w-12 h-12 rounded-md bg-[#EEF7F9] text-[#0F6B7D] flex items-center justify-center shrink-0">
            <MachineLineIcon id={selectedMachine.id} className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-slate-500">
              Selected Asset <span className="mx-1.5" aria-hidden="true">·</span> {selectedMachine.category}
            </p>
            <h3 className="font-display text-lg font-semibold text-[#0B1F33] mt-0.5">
              {selectedMachine.name} — Typical Diagnostic &amp; Reliability Focus
            </h3>
            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
              {selectedMachine.typicalFocus}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Common Services:{' '}
              <span className="text-[#0B1F33] font-medium">
                {selectedMachine.recommendedServices.join(' · ')}
              </span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => handleRequestForMachine(selectedMachine)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0B1F33] hover:bg-[#122E4A] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>Discuss {selectedMachine.name} Support</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
