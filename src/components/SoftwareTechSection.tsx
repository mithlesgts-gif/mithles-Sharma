import React from 'react';
import { motion } from 'motion/react';

export const SoftwareTechSection: React.FC = () => {
  const softwareStack = [
    { name: 'Autodesk Revit', category: 'Parametric BIM Authoring', version: '2024–2026', desc: 'Core architecture, structure, and MEP modeling engine.' },
    { name: 'Navisworks Manage', category: 'Clash & TimeLiner', version: 'v2025/2026', desc: 'Multi-trade spatial collision detection and 4D simulation.' },
    { name: 'Autodesk Construction Cloud (ACC)', category: 'Common Data Environment', version: 'Cloud CDE', desc: 'Live multi-party worksharing, model coordination, and issue tracking.' },
    { name: 'Tekla Structures', category: 'Structural Steel & Rebar', version: '2024+', desc: 'LOD 400 fabrication detailing and CNC data export.' },
    { name: 'Bentley Synchro 4D', category: '4D Construction Scheduling', version: 'Pro Suite', desc: 'High-precision visual schedule synchronization with P6.' },
    { name: 'Autodesk ReCap Pro', category: 'Reality Capture & Laser Scan', version: 'Pro v26', desc: 'Dense point cloud processing and registration for Scan-to-BIM.' },
    { name: 'AutoCAD & Toolsets', category: '2D CAD & Drafting', version: 'AutoCAD 2026', desc: 'Vector drawing generation and legacy conversion.' },
    { name: 'Dynamo & Computational Tools', category: 'Computational Automation', version: 'Scripting', desc: 'Automated parameter population and geometric QA scripting.' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section className="py-20 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.div 
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Technology Stack</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight"
          >
            Industry-Standard Software &amp; Digital Tooling
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
            className="text-sm sm:text-base text-slate-600 font-body"
          >
            We work seamlessly within your preferred digital ecosystem, native file formats, and cloud collaboration environments.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {softwareStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-blue-600 font-semibold">{tech.category}</span>
                  <span className="text-slate-400">{tech.version}</span>
                </div>
                <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

