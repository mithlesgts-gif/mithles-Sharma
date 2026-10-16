import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock } from 'lucide-react';

export const QualityCultureSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Rigorous Quality Assurance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Engineering Governance &amp; The Zero-Collision Pledge
            </h2>

            {/* Animated Blue & Red Accent Line */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="h-1 w-24 bg-gradient-to-r from-blue-600 via-sky-500 to-red-500 rounded-full"
            />

            <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">
              At SHILP BIM Solutions Pvt. Ltd., our engineering quality culture is founded on disciplined peer-review audits, parameter validation routines, and a transparent clash resolution matrix. We don't simply create 3D shapes — we ensure constructability before steel and concrete are committed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="font-bold text-slate-900 text-xs sm:text-sm font-display flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>ISO 19650 Compliance</span>
                </div>
                <p className="text-xs text-slate-600">
                  Information management protocols aligned with UK/International ISO 19650 standards and CDE verification gates.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900 text-xs sm:text-sm font-display flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>Data Security &amp; NDA</span>
                </div>
                <p className="text-xs text-slate-600">
                  Strict IP protection, encrypted cloud transfer, signed NDAs, and segregated secure local network workspaces.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xl shadow-blue-500/5"
          >
            <h3 className="text-base font-bold font-display text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Model Health Scorecard</span>
              <span className="text-xs font-mono text-emerald-600 font-bold">99.8% Passing</span>
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-700">Geometric Clashes (Hard)</span>
                <span className="text-emerald-600 font-bold">0 Active</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-full" />
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-2">
                <span className="text-slate-700">Level &amp; Grid Coordinate Alignment</span>
                <span className="text-blue-600 font-bold">100% Verified</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-full" />
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-2">
                <span className="text-slate-700">Non-Graphical Asset Parameters (COBie)</span>
                <span className="text-blue-600 font-bold">Compliant</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-full" />
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-2">
                <span className="text-slate-700">Drawing Sheet Synchronization</span>
                <span className="text-emerald-600 font-bold">Zero Discrepancy</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-full" />
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100">
              * Audited by Senior BIM QA/QC Managers prior to client milestone transmittals.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
