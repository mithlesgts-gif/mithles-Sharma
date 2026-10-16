import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import bgJobsite from '../assets/images/bg_modern_jobsite_1792156747851.jpg';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      q: 'How does the Dedicated Project Manager model work for our project?',
      a: 'Every client account is assigned one dedicated Project Manager who serves as your single point of contact. Your Project Manager oversees drawing ingestion, schedules coordination sprints, manages RFI logs, and coordinates internal architectural, structural, and MEP modeling teams to maintain milestone clarity.'
    },
    {
      q: 'How do you collaborate with overseas clients across different time zones?',
      a: 'We work across international time zones with tailored overlap windows for North America, Europe, Australia, and the Middle East. Coordination meetings are hosted via Teams/Zoom, daily progress is mirrored in your Autodesk Construction Cloud (ACC) or BIM 360 hub, and issues are exchanged in real-time via BCF.'
    },
    {
      q: 'What input documents do you require to begin a BIM modeling project?',
      a: 'We can initiate projects from 2D architectural/structural CAD drawings (.DWG), PDF blueprint sets, schematic design briefs, point cloud laser scans (.E57, .RCP), or legacy sketch drawings. We also review your project BIM Execution Plan (BEP) or establish one for you.'
    },
    {
      q: 'Do you work directly inside our company-hosted Autodesk Construction Cloud (ACC)?',
      a: 'Yes. Our BIM engineers seamlessly plug into client-hosted Autodesk Construction Cloud, BIM 360, Revizto, Procore, or Trimble Connect environments using your corporate security and permission settings.'
    },
    {
      q: 'How does SHILP BIM Solutions Pvt. Ltd. handle intellectual property and confidentiality?',
      a: 'All project data is protected under formal Non-Disclosure Agreements (NDAs). We employ encrypted file transfers, segregated project server repositories, and strict role-based access control. No project geometry is shared externally without prior written client approval.'
    },
    {
      q: 'What commercial models do you offer (fixed milestone vs. dedicated monthly team)?',
      a: 'We offer flexible engagement models: Lump-sum fixed price per milestone, hourly rate for design changes, or a Dedicated BIM Team model where certified BIM modelers and coordinators work exclusively on your firm\'s pipeline under your direction.'
    }
  ];

  return (
    <section 
      id="faq" 
      className="py-24 bg-gradient-to-b from-[#F2F7FD] via-[#EAF2FB] to-[#F5F9FE] relative overflow-hidden border-t border-blue-100 scroll-mt-20"
    >
      {/* Transparent Construction Background Image */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src={bgJobsite}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-[0.05] grayscale mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F7FD]/90 via-[#EAF2FB]/75 to-[#F5F9FE]/95" />
        <div className="absolute inset-0 bg-grid-light opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="text-center space-y-3">
          <motion.div 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -12 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-blue-200 text-xs font-mono text-blue-700 shadow-xs"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers to Technical &amp; Operational Questions</span>
          </motion.div>

          <motion.h2 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 22 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>

          {/* Accent Line */}
          <div className="flex justify-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { scaleX: 0, originX: 0.5 }}
              whileInView={shouldReduceMotion ? {} : { scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              className="h-1 w-24 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 rounded-full"
            />
          </div>

          <motion.p 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-sm sm:text-base text-slate-600 font-body"
          >
            Everything you need to know about partnering with SHILP BIM Solutions Pvt. Ltd.
          </motion.p>
        </div>

        {/* FAQ List with Graceful ~1-Second Scroll Timing */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 26 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, delay: 0.95, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white/95 backdrop-blur-xs border border-blue-100 hover:border-blue-200 transition-all overflow-hidden shadow-xs hover:shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-semibold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-body border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
