import React, { useState } from 'react';

interface CompanyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark' | 'auto';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'auto'
}) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  // Size dimensions
  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  }[size];

  const titleSizes = {
    sm: 'text-xs',
    md: 'text-sm sm:text-base',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl'
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Intricately Treated Circular Logo Emblem */}
      <div 
        className={`relative ${dimensions} rounded-full p-[2px] bg-gradient-to-tr from-blue-600 via-white to-blue-400 shadow-md shadow-blue-500/10 shrink-0 group-hover:scale-105 transition-transform duration-300`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border border-white/40 relative flex items-center justify-center">
          {imageLoaded ? (
            <img
              src="/image_796a6c7d.jpg"
              alt="SHILP BIM Solutions Pvt. Ltd. Official Logo — Ancient Indian Artisans Carving Pillar"
              onError={() => setImageLoaded(false)}
              className="w-full h-full object-cover filter contrast-110 brightness-105 hover:scale-110 transition-transform duration-500"
              loading="eager"
            />
          ) : (
            /* High-fidelity Vector Representation of the Uploaded Stone Carved Artisan Medallion */
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <circle cx="50" cy="50" r="48" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
              <circle cx="50" cy="50" r="44" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
              {/* Central Carved Pillar */}
              <rect x="52" y="18" width="10" height="52" fill="#94a3b8" rx="2" />
              <line x1="52" y1="28" x2="62" y2="28" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="52" y1="42" x2="62" y2="42" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="52" y1="56" x2="62" y2="56" stroke="#cbd5e1" strokeWidth="1" />
              {/* Left Artisan kneeling with chisel */}
              <circle cx="36" cy="38" r="5" fill="#38bdf8" />
              <path d="M 36 44 L 32 60 L 42 68 L 48 68" stroke="#38bdf8" strokeWidth="3" fill="none" />
              <line x1="38" y1="48" x2="52" y2="44" stroke="#f8fafc" strokeWidth="2" />
              {/* Right Artisan sitting */}
              <circle cx="72" cy="46" r="4" fill="#38bdf8" />
              <path d="M 72 50 L 74 65 L 66 70" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
              {/* Base Banner */}
              <path d="M 22 76 Q 50 82 78 76" stroke="#2563eb" strokeWidth="2" fill="none" />
              <text x="50" y="88" textAnchor="middle" fill="#f8fafc" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
                SHILP BIM
              </text>
            </svg>
          )}
        </div>

        {/* Small subtle red highlight dot on rim */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white" />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className={`font-display font-bold ${titleSizes} tracking-tight leading-tight flex items-center gap-1.5 ${
            variant === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            <span>SHILP BIM</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
              PVT. LTD.
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-wider text-slate-500 font-medium">
            Engineering Precision · Jamshedpur, India
          </span>
        </div>
      )}
    </div>
  );
};
