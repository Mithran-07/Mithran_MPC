'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, slideInRight, staggerContainer, viewportSettings } from '@/lib/animations';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export default function TheStudio() {
  return (
    <section className="py-24 md:py-32 lg:py-0 bg-bg-primary" aria-label="The Studio">
      <div className="lg:grid lg:grid-cols-2 lg:min-h-[80vh]">
        {/* Content side */}
        <motion.div
          className="flex items-center order-2 lg:order-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-24">
            <motion.div variants={fadeUp}>
              <SectionLabel>The Studio</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-8 font-playfair text-3xl md:text-4xl lg:text-5xl text-warm-white leading-tight"
            >
              Where Stories<br />Come to Life
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 font-manrope text-base text-muted leading-relaxed max-w-[440px]"
            >
              Based in Old Perungalathur, Chennai, our studio is equipped
              to handle everything from intimate portrait sessions to
              large-scale event production.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 font-manrope text-base text-muted leading-relaxed max-w-[440px]"
            >
              Led by Lion B. Anand Kumar, we bring together technology,
              artistry, and a deep understanding of visual storytelling.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10">
              <Button href="/studio">
                Explore the Studio &rarr;
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Image side — Category B: atmospheric brand visual */}
        <motion.div
          className="relative overflow-hidden order-1 lg:order-2"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0 bg-dark-gray relative">
            <Image
              src="/images/studio/studio-interior-01.jpg"
              alt="Photography studio interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-bg-primary/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
