'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/data/services';
import { fadeUp, staggerContainer, viewportSettings } from '@/lib/animations';
import SectionLabel from '@/components/ui/SectionLabel';

export default function Services() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-bg-primary" aria-label="Services">
      <div className="mx-auto max-w-[900px] px-6 md:px-12 lg:px-16">
        <SectionLabel className="mb-16">What We Do</SectionLabel>

        <motion.div
          className="space-y-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {services.map((service) => {
            const href = service.slug === 'customized-gifts' ? '/shopping' : '/contact';
            return (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                className="group"
              >
                <Link href={href} className="block">
                  <div className="flex flex-col md:flex-row md:items-center justify-between py-7 md:py-8 border-b border-white/5 group-hover:border-gold/20 transition-colors duration-300">
                    <h3 className="font-playfair text-2xl md:text-3xl text-warm-white group-hover:text-gold transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="mt-2 md:mt-0 font-manrope text-sm text-muted">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
