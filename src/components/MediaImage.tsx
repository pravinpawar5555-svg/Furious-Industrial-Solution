import React, { useState } from 'react';
import { COMPANY } from '../data/siteData';

interface MediaImageProps {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  caption?: string;
  priority?: boolean;
}

export function MediaImage({
  src,
  alt,
  aspectClass = 'aspect-[4/3]',
  className = '',
  caption,
  priority = false,
}: MediaImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative overflow-hidden bg-[#0B1F33] text-white flex flex-col items-center justify-center p-6 text-center border border-[#1B3E60] ${aspectClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center mb-3"
          aria-hidden="true"
        >
          <img
            src={COMPANY.logoUrl}
            alt=""
            className="w-10 h-10 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="font-display text-sm font-semibold text-white">{COMPANY.titleName}</p>
        <p className="text-xs text-slate-300 mt-1 max-w-xs">{caption || alt}</p>
      </div>
    );
  }

  return (
    <figure className={`relative overflow-hidden bg-[#0B1F33] ${aspectClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className="w-full h-full object-cover"
      />
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071524]/90 via-[#071524]/55 to-transparent px-4 pt-8 pb-3 text-xs text-slate-200">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
