import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  staggerChildren?: number;
}

/**
 * Reusable scroll-triggered reveal animation component.
 * Features:
 * - Subtle fade-in and slight upward movement
 * - Triggers once when scrolled into view (no repetitive jarring on scroll up/down)
 * - Configurable delay (e.g., 1s for deliberate showcase sections)
 * - Full respect for prefers-reduced-motion accessibility
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0.2,
  duration = 0.7,
  yOffset = 24,
  className = '',
  staggerChildren,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
