'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import { fadeUp, staggerContainer, viewportSettings } from '@/lib/animations';
import SectionLabel from '@/components/ui/SectionLabel';

export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  href?: string;
}

export interface InstagramShowcaseProps {
  posts?: InstagramPost[];
}

const defaultPosts: InstagramPost[] = [
  {
    id: '1',
    image: '/images/instagram/instagram-01.jpg',
    alt: 'Couple standing in a golden fairy light tunnel',
    href: siteConfig.instagram.url,
  },
  {
    id: '2',
    image: '/images/instagram/instagram-02.jpg',
    alt: 'Couple outdoors with billowing pastel blue gown train',
    href: siteConfig.instagram.url,
  },
  {
    id: '3',
    image: '/images/instagram/instagram-03.jpg',
    alt: 'Woman in royal blue saree wearing diamond jewelry',
    href: siteConfig.instagram.url,
  },
  {
    id: '4',
    image: '/images/instagram/instagram-04.jpg',
    alt: 'Detailed view of henna patterns on hands and a diamond ring',
    href: siteConfig.instagram.url,
  },
  {
    id: '5',
    image: '/images/instagram/instagram-05.jpg',
    alt: 'Couple standing on an outdoor patio beside teal wooden shutters',
    href: siteConfig.instagram.url,
  },
  {
    id: '6',
    image: '/images/instagram/instagram-06.jpg',
    alt: 'Illuminated traditional heritage building at dusk',
    href: siteConfig.instagram.url,
  },
];

export default function InstagramShowcase({ posts = defaultPosts }: InstagramShowcaseProps) {
  return (
    <section id="instagram" className="py-24 md:py-32 lg:py-40 bg-bg-primary border-t border-white/5" aria-label="Instagram showcase">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel className="justify-center mb-4">Instagram</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl text-warm-white tracking-tight"
          >
            FOLLOW THE JOURNEY
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-manrope text-sm md:text-base text-muted leading-relaxed"
          >
            Behind the scenes, new work and visual stories from MITHRAN PHOTO CLICKZ.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-3">
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit MITHRAN PHOTO CLICKZ on Instagram"
              className="inline-block font-manrope text-[13px] tracking-[0.15em] text-gold hover:text-gold-highlight transition-colors duration-300 font-medium"
            >
              {siteConfig.instagram.handle}
            </a>
          </motion.div>
        </motion.div>

        {/* 6-Image Grid (2 cols mobile, 3 cols tablet & desktop) */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeUp}
              className="group"
            >
              <a
                href={post.href || siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View post on Instagram: ${post.alt}`}
                className="block relative aspect-square bg-dark-gray overflow-hidden cursor-pointer rounded-none border border-white/5 group-hover:border-gold/30 transition-colors duration-500"
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bg-primary/20 group-hover:bg-bg-primary/5 transition-colors duration-500" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow MITHRAN PHOTO CLICKZ on Instagram"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-gold/40 text-warm-white font-manrope text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-gold hover:text-bg-primary hover:border-gold transition-all duration-300"
          >
            FOLLOW ON INSTAGRAM &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
