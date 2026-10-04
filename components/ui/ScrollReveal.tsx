'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportSettings } from '@/lib/animations';
import type { Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  variants = fadeUp,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
