import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  Layers, 
  Box, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Building2,
  Compass,
  CheckCircle2,
  GitBranch,
  Calendar
} from 'lucide-react';
import { CompanyLogo } from './CompanyLogo';
import { BackgroundDesignElements } from './BackgroundDesignElements';

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [activeDiscipline, setActiveDiscipline] = useState<'all' | 'arch' | 'struct' | 'mep'>('all');

  const marqueeKeywords = [
    'BIM Modeling',
    'Architectural BIM',
    'Structural BIM',
    'MEP Coordination',
    'Clash Detection',
    'Scan to BIM',
    'Digital Construction',
    'Shop Drawings',
    '4D Construction Simulation',
    'Revit Content Creation'
  ];

  // Headline words for word-by-word staggered reveal
  const headlinePart1 = ['Building', 'Better', 'with', 'BIM.'];
  const headlinePart2 = ['Delivering', 'with', 'Precision.'];

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between pt-28 pb-4 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Dynamic Moving Objects & Synchronized Dots in Background (White & Blue Only) */}
      <BackgroundDesignElements variant="hero" showIsometricCube={true} showLaserGrid={true} showDots={true} />

      {/* Floating Blueprint Wireframe Shapes & Engineering Accents */}
      <motion.div 
        animate={{ 
          y: [0, -14, 0],
          rotate: [12, 18, 12]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex flex-col items-center justify-center absolute top-28 left-8 w-28 h-28 border border-blue-400/30 rounded-2xl bg-white/40 backdrop-blur-xs pointer-events-none shadow-xs"
      >
        <Building2 className="w-8 h-8 text-blue-500/60" />
        <span className="text-[9px] font-mono text-blue-600/70 mt-1 font-bold">LOD 350</span>
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, 12, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex flex-col items-center justify-center absolute bottom-36 left-14 w-20 h-20 border border-blue-400/30 rounded-full bg-blue-50/40 backdrop-blur-xs pointer-events-none shadow-xs"
      >
        <GitBranch className="w-6 h-6 text-blue-500/70" />
        <span className="text-[8px] font-mono text-blue-600/80 mt-0.5 font-bold">0 CLASH</span>
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, -10, 0],
          rotate: [-6, 0, -6]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex flex-col items-center justify-center absolute top-36 right-10 w-32 h-32 border border-blue-500/25 rounded-2xl bg-white/40 backdrop-blur-xs pointer-events-none shadow-xs"
      >
        <Box className="w-9 h-9 text-blue-600/60" />
        <span className="text-[9px] font-mono text-blue-600 font-bold mt-1">DIGITAL TWIN</span>
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, 14, 0],
          rotate: [45, 52, 45]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute bottom-44 right-20 w-16 h-16 border border-slate-300 rounded-lg bg-white/30 backdrop-blur-xs pointer-events-none"
      />

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-7 my-auto">
        {/* Entrance Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-white border border-blue-200/90 shadow-md shadow-blue-500/5 group hover:border-blue-400 transition-all cursor-default"
        >
          <CompanyLogo size="sm" showText={false} />
          <span className="text-xs font-mono font-bold text-slate-800">
            SHILP BIM Solutions Pvt. Ltd.
          </span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="text-xs font-mono text-blue-600 font-medium">Jamshedpur, India</span>
          <span className="hidden sm:inline text-xs font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
            Global Delivery
          </span>
        </motion.div>

        {/* Word-by-Word Animated Hero Headline */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-slate-900 tracking-tight leading-[1.12]">
            {/* First phrase: Building Better with BIM */}
            <span className="inline-block">
              {headlinePart1.map((word, i) => (
                <motion.span
                  key={`part1-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="inline-block mr-2.5 sm:mr-3.5 text-blue-600"
                >
                  {word}
                </motion.span>
              ))}
            </span>{' '}
            <br className="hidden sm:inline" />
            {/* Second phrase: Delivering with Precision */}
            <span className="inline-block mt-1 sm:mt-0">
              {headlinePart2.map((word, i) => (
                <motion.span
                  key={`part2-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.4 + i * 0.1 }}
                  className={`inline-block mr-2.5 sm:mr-3.5 ${
                    word === 'Precision.'
                      ? 'text-blue-700 relative underline decoration-blue-400/50 decoration-wavy decoration-2'
                      : 'text-slate-900'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        {/* Animated Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-body leading-relaxed font-normal"
        >
          Integrated BIM solutions designed to improve coordination, visualization, and collaboration throughout the building lifecycle.
        </motion.p>

        {/* Primary and Secondary CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
          >
            <Calendar className="w-5 h-5 text-blue-200" />
            <span>Book Free 1:1 Consultation</span>
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-slate-800 hover:text-blue-600 border border-slate-300 hover:border-blue-400 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Discuss Project</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-blue-700 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
          </a>
        </motion.div>

        {/* Floating Technical Indicators with Staggered Entrance (White & Blue Only) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left"
        >
          <div className="p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
            <span className="text-[10px] font-mono text-blue-600 font-bold block">1:1 GOVERNANCE</span>
            <span className="text-xs font-bold text-slate-900 font-display">Dedicated PM</span>
            <span className="text-[11px] text-slate-500 block">Single Point Contact</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
            <span className="text-[10px] font-mono text-blue-600 font-bold block">PRECISION MATRIX</span>
            <span className="text-xs font-bold text-slate-900 font-display">Zero Clash</span>
            <span className="text-[11px] text-slate-500 block">Hard/Soft Validation</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
            <span className="text-[10px] font-mono text-blue-600 font-bold block">FULL LIFECYCLE</span>
            <span className="text-xs font-bold text-slate-900 font-display">LOD 100 to 500</span>
            <span className="text-[11px] text-slate-500 block">Digital Twin Ready</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
            <span className="text-[10px] font-mono text-blue-600 font-bold block">GLOBAL STANDARDS</span>
            <span className="text-xs font-bold text-slate-900 font-display">ISO 19650</span>
            <span className="text-[11px] text-slate-500 block">Common Data Env</span>
          </div>
        </motion.div>
      </div>

      {/* Continuously Moving Marquee Strip (White & Blue Only) */}
      <div className="w-full bg-slate-900 text-white py-3.5 border-y border-slate-800 overflow-hidden relative mt-10 z-20 shadow-inner">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-mono tracking-wider uppercase">
          {[...marqueeKeywords, ...marqueeKeywords].map((word, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span className={idx % 3 === 0 ? 'text-blue-400 font-bold' : idx % 3 === 1 ? 'text-sky-300 font-bold' : 'text-slate-200'}>
                {word}
              </span>
              <span className="text-slate-600" aria-hidden="true">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
