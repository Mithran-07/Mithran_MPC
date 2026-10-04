'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, staggerContainer, viewportSettings } from '@/lib/animations';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background — Category B: atmospheric cinematic visual */}
      <div className="absolute inset-0 bg-bg-primary">
        <Image
          src="/images/cta/cta-fairy-lights-bokeh.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-bg-primary/75" />
        {/* Subtle radial highlight */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-12 py-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.h2
          variants={fadeUp}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-warm-white leading-[1.1] tracking-tight"
        >
          Let&apos;s Create<br />
          Something<br />
          Worth Remembering.
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-12">
          <Button href="/contact">
            Start a Conversation &rarr;
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
