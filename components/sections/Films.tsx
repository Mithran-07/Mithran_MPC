'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeUp, staggerContainer, viewportSettings } from '@/lib/animations';

const filmPlaceholders = [
  { title: 'Wedding Film', category: 'Wedding Films', subtitle: 'Film Preview — Coming Soon' },
  { title: 'Event Film', category: 'Event Broadcasting', subtitle: 'Film Preview — Coming Soon' },
  { title: 'Commercial Film', category: '4K Production', subtitle: 'Film Preview — Coming Soon' },
];

import { siteConfig } from '@/data/siteConfig';

export default function Films() {
  if (!siteConfig.features.showFilmsPreview) return null;
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-bg-secondary" aria-label="Films">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <motion.h2
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-warm-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Films
          </motion.h2>
          <motion.p
            className="mt-4 font-manrope text-[13px] uppercase tracking-[0.2em] text-gold font-medium"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Stories in Motion.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {filmPlaceholders.map((film) => (
            <motion.div
              key={film.title}
              variants={fadeUp}
              className="group cursor-pointer"
            >
              <Link href="/films" className="block">
                <div className="relative aspect-video bg-dark-gray overflow-hidden border border-white/5 group-hover:border-gold/30 transition-colors duration-500">
                  {/* Placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-manrope text-[11px] uppercase tracking-[0.2em] text-muted/30">
                      {film.title} · Preview
                    </span>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/0 group-hover:bg-bg-primary/40 transition-all duration-500">
                    <div className="w-14 h-14 rounded-full border border-gold/60 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                      <svg
                        className="w-5 h-5 text-gold ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="absolute bottom-3 right-3 font-manrope text-[10px] uppercase tracking-wider text-warm-white/70 bg-bg-primary/80 px-2 py-1">
                    Coming Soon
                  </span>
                </div>

                <div className="mt-4">
                  <p className="font-manrope text-[11px] uppercase tracking-[0.2em] text-gold mb-1 font-medium">
                    {film.category}
                  </p>
                  <h3 className="font-playfair text-xl text-warm-white group-hover:text-gold transition-colors duration-300">
                    {film.title}
                  </h3>
                  <p className="font-manrope text-xs text-muted mt-1">
                    {film.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          className="mt-14 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <Link
            href="/films"
            className="font-manrope text-[13px] uppercase tracking-[0.15em] text-gold hover:text-gold-highlight transition-colors duration-300 font-medium"
          >
            View All Films &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

