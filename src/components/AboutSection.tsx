import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, CheckCircle2, UserCheck, Layers, Building2 } from 'lucide-react';
import bgJobsite from '../assets/images/bg_modern_jobsite_1792156747851.jpg';
import bgFacade from '../assets/images/bg_bim_glass_facade_1792156749000.jpg';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="about" 
      className="py-24 bg-gradient-to-b from-[#F2F7FD] via-[#EAF2FB] to-[#F4F8FD] relative overflow-hidden border-t border-blue-100 scroll-mt-20"
    >
      {/* Transparent Construction-Themed Background Image */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src={bgJobsite}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-[0.07] grayscale mix-blend-multiply"
        />
        {/* Soft light blue gradient wash to blend the construction image naturally */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F7FD]/90 via-[#EAF2FB]/75 to-[#F4F8FD]/95" />
        <div className="absolute inset-0 bg-grid-light opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Positioning with Scroll-Triggered Reveal */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -12 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-blue-200/90 text-xs font-mono text-blue-700 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>About SHILP BIM Solutions Pvt. Ltd.</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600 font-medium">Jamshedpur, India</span>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 22 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-3"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                Building Better with BIM. <br />
                <span className="text-blue-600">Delivering with </span>
                <span className="text-blue-700">Precision.</span>
              </h2>

              {/* Animated Accent Line */}
              <motion.div
                initial={shouldReduceMotion ? {} : { scaleX: 0, originX: 0 }}
                whileInView={shouldReduceMotion ? {} : { scaleX: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
                className="h-1 w-28 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 rounded-full"
              />
            </motion.div>

            <motion.div 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 22 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-4 text-slate-700 font-body leading-relaxed text-base"
            >
              <p>
                <strong>SHILP BIM Solutions Pvt. Ltd.</strong> is an Indian Building Information Modeling (BIM) and AEC technology consultancy headquartered in Jamshedpur, India, serving architectural practices, engineering consultants, and general contractors globally.
              </p>
              <p>
                We provide integrated BIM solutions designed to improve coordination, visualization, and collaboration throughout the building lifecycle. Operating across the full project continuum from <strong>LOD 100 conceptual design to LOD 500 digital twin handovers</strong>, our multidisciplinary teams deliver clash-free coordinated models, fabrication-ready shop drawings, and reality capture conversions that safeguard constructability.
              </p>
            </motion.div>

            {/* Core Value Pillars - Reveals with graceful ~1 second scroll timing */}
            <motion.div 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.95, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xs border border-blue-200/90 space-y-1.5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all">
                <div className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  <span>One Dedicated Manager</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A single point of contact overseeing your project from initial model audit to final drawing issue.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xs border border-blue-200/90 space-y-1.5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all">
                <div className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>ISO 19650 Standards</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Disciplined Common Data Environment workflows, strict naming protocols, and audit trails.
                </p>
              </div>
            </motion.div>

            {/* Core Mottos with Smooth Scroll Reveal */}
            <motion.div 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 1.05, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-700"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                Coordinated Architecture, Structure &amp; MEP
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                Structured Single-Point Governance
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                Zero Site Collision Focus
              </span>
            </motion.div>
          </div>

          {/* Right Visual Architectural Imagery with Subtle Scale/Slide Reveal */}
          <motion.div 
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95, y: 24 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-blue-200/90 shadow-xl bg-white group">
              <img
                src={bgFacade}
                alt="Modern Architectural Engineering & Structural Facade Assembly"
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

              {/* Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-blue-200/80 text-xs font-mono text-slate-700 space-y-1 shadow-lg">
                <div className="flex items-center justify-between text-slate-900 font-bold">
                  <span>PRECISION BIM CONSULTANCY</span>
                  <span className="text-blue-600">JAMSHEDPUR, INDIA</span>
                </div>
                <div className="text-[11px] text-slate-600 font-body">
                  Standardized execution protocols ensuring model accuracy and constructability across international borders.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
