import React, { useState } from 'react';
import { motion } from 'motion/react';
import { industrySectors, IndustrySector } from '../data/industriesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrySector>(industrySectors[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden border-t border-slate-100 scroll-mt-20">
      <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header with Scroll-Triggered Reveal */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Sector Specialization</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight"
          >
            Industries We Serve
          </motion.h2>

          {/* Animated Blue & Red Accent Line */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scaleX: 0, originX: 0.5 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="h-1 w-24 bg-gradient-to-r from-blue-600 via-sky-500 to-red-500 rounded-full"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-body leading-relaxed"
          >
            Tailored BIM solutions engineered for the specific code constraints, technical densities, and operational demands of distinct built environment typologies.
          </motion.p>
        </div>

        {/* Interactive Industry Cards Grid with Staggered Scroll-Triggered Reveal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industrySectors.map((industry) => {
            const isSelected = industry.id === selectedIndustry.id;

            return (
              <motion.div
                key={industry.id}
                variants={cardVariants}
                onClick={() => setSelectedIndustry(industry)}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-blue-600 shadow-xl shadow-blue-500/10 -translate-y-1.5'
                    : 'bg-white border-slate-200/90 hover:border-blue-300 hover:-translate-y-0.5'
                }`}
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={industry.imageUrl}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Typology label */}
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded border border-white/20">
                    {industry.sampleTypology.split(',')[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-base font-bold font-display ${isSelected ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'} transition-colors`}>
                      {industry.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                    <span>{isSelected ? 'Currently Viewing' : 'Explore Applications'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Selected Industry Detail Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="p-8 rounded-2xl bg-white border border-blue-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg shadow-blue-500/5"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-blue-600 font-semibold">
              SECTOR FOCUS · {selectedIndustry.sampleTypology}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              {selectedIndustry.title}: {selectedIndustry.subtitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
              {selectedIndustry.description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Core Technical BIM Applications
            </div>
            <div className="space-y-2">
              {selectedIndustry.keyApplications.map((app, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
