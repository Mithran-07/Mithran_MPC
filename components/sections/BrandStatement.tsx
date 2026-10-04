'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportSettings } from '@/lib/animations';
import GoldDivider from '@/components/ui/GoldDivider';

export default function BrandStatement() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-bg-primary" aria-label="Brand statement">
      <motion.div
        className="mx-auto max-w-[900px] px-6 md:px-12 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.div variants={fadeUp} className="flex justify-center mb-10">
          <GoldDivider width="small" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-[72px] text-warm-white leading-[1.1] tracking-tight"
        >
          We Capture<br />
          What You&apos;ll<br />
          Remember.
        </motion.h2>

        <motion.div variants={fadeUp} className="flex justify-center mt-10">
          <GoldDivider width="small" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-10 font-manrope text-base md:text-lg text-muted leading-relaxed max-w-[600px] mx-auto"
        >
          A Chennai-based photography and visual production studio
          creating timeless stories through light, emotion, and craft.
        </motion.p>
      </motion.div>
    </section>
  );
}
