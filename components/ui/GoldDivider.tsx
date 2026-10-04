'use client';

import { motion } from 'framer-motion';
import { lineReveal, viewportSettings } from '@/lib/animations';

interface GoldDividerProps {
  width?: 'small' | 'medium' | 'full';
  className?: string;
}

export default function GoldDivider({
  width = 'small',
  className = '',
}: GoldDividerProps) {
  const widths = {
    small: 'w-[60px]',
    medium: 'w-[120px]',
    full: 'w-full',
  };

  return (
    <motion.div
      className={`h-[1px] bg-gold/60 ${widths[width]} ${className}`}
      variants={lineReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      aria-hidden="true"
    />
  );
}
