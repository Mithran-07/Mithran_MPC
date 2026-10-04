'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportSettings } from '@/lib/animations';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  withLine?: boolean;
}

export default function SectionLabel({
  children,
  className = '',
  withLine = true,
}: SectionLabelProps) {
  return (
    <motion.div
      className={`flex items-center gap-4 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
    >
      <span className="font-manrope text-[12px] uppercase tracking-[0.2em] text-gold font-medium">
        {children}
      </span>
      {withLine && (
        <span className="h-[1px] w-[60px] bg-gold/60" aria-hidden="true" />
      )}
    </motion.div>
  );
}
