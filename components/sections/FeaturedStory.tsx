'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { fadeUp, slideInLeft, staggerContainer, viewportSettings } from '@/lib/animations';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

import { siteConfig } from '@/data/siteConfig';

export default function FeaturedStory() {
  if (!siteConfig.features.showFeaturedStory) return null;

  const featuredProject = projects.find((p) => p.slug === 'editorial-story') || projects[1] || projects[0];

  return (
    <section id="featured-story" className="py-24 md:py-32 lg:py-0 bg-bg-secondary" aria-label="Featured story">
      <div className="lg:grid lg:grid-cols-12 lg:min-h-[80vh]">
        {/* Image side — Authentic Curated Editorial Story */}
        <motion.div
          className="lg:col-span-7 relative overflow-hidden"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="aspect-video lg:aspect-auto lg:absolute lg:inset-0 bg-dark-gray relative">
            <Image
              src={featuredProject.coverImage}
              alt={featuredProject.coverImageAlt || featuredProject.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[center_25%]"
            />
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-bg-secondary/30" />
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          className="lg:col-span-5 flex items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
            <motion.div variants={fadeUp}>
              <SectionLabel>Featured Story</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-8 font-playfair text-3xl md:text-4xl lg:text-5xl text-warm-white"
            >
              {featuredProject.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 font-manrope text-[13px] uppercase tracking-[0.15em] text-warm-white/60"
            >
              {featuredProject.subtitle}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-2 font-manrope text-[13px] text-muted"
            >
              {featuredProject.location}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6">
              <GoldDivider width="small" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 font-manrope text-base text-muted leading-relaxed"
            >
              {featuredProject.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href={`/work/${featuredProject.slug}`}
                className="font-manrope text-[13px] uppercase tracking-[0.15em] text-gold hover:text-gold-highlight transition-colors duration-300 font-medium"
              >
                View Story &rarr;
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
