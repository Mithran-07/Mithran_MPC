'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportSettings } from '@/lib/animations';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

import { siteConfig } from '@/data/siteConfig';

export default function ClientStories() {
  if (!siteConfig.features.showClientStories) return null;
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-bg-secondary" aria-label="Client stories">
      <motion.div
        className="mx-auto max-w-[800px] px-6 md:px-12 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.div variants={fadeUp}>
          <SectionLabel className="justify-center">Client Stories</SectionLabel>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16">
          <div className="flex justify-center mb-8">
            <GoldDivider width="small" />
          </div>

          <p className="font-playfair text-2xl md:text-3xl text-warm-white/40 italic">
            &ldquo;Stories from our clients&rdquo;
          </p>

          <p className="mt-6 font-manrope text-[13px] uppercase tracking-[0.2em] text-muted/40">
            Coming Soon
          </p>

          <div className="flex justify-center mt-8">
            <GoldDivider width="small" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
