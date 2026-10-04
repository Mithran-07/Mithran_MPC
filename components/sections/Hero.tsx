'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import Button from '@/components/ui/Button';
import { fadeIn } from '@/lib/animations';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      {/* Background — cinematic atmospheric image (Category B: brand visual) */}
      <div className="absolute inset-0 bg-bg-primary">
        <Image
          src="/images/hero/mithran-hero-fairy-lights.jpg"
          alt="Couple standing beneath warm fairy lights"
          fill
          sizes="100vw"
          className="object-cover object-[center_12%] md:object-[center_15%] lg:object-[center_20%] xl:object-[center_22%]"
          priority
        />
        {/* Cinematic overlays for legibility without obscuring faces */}
        <div className="absolute inset-0 bg-bg-primary/40 md:bg-bg-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-bg-primary/40" />
        {/* Subtle gold atmospheric */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)'
          }} />
        </div>
      </div>

      {/* Content — on mobile/tablet in lower third below faces; on desktop in the upper fairy lights canopy above subjects */}
      <div className="relative z-10 flex flex-col items-center justify-end pb-16 md:pb-24 lg:justify-start lg:pt-24 xl:pt-28 h-full px-6 text-center">
        {/* Logo mark */}
        <div className="mb-4 md:mb-6">
          <div className="relative w-16 h-14 md:w-24 md:h-20 lg:w-32 lg:h-[107px] mx-auto">
            <Image
              src="/brand/logo-monogram.png"
              alt="MITHRAN PHOTO CLICKZ"
              fill
              sizes="(max-width: 768px) 64px, 128px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="font-playfair text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-warm-white tracking-tight max-w-full drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          {siteConfig.name}
        </h1>

        {/* Tagline */}
        <p className="mt-3 md:mt-5 font-manrope text-[10px] xs:text-[11px] md:text-[13px] uppercase tracking-[0.14em] md:tracking-[0.2em] text-gold font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
          {siteConfig.tagline}
        </p>

        {/* CTA */}
        <div className="mt-6 md:mt-8">
          <Button href="/work">
            Explore Our Work
          </Button>
        </div>

        {/* Scroll indicator — desktop only to prevent mobile clutter */}
        <motion.div
          className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2"
          variants={fadeIn}
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-[1px] h-8 bg-gold/40" />
        </motion.div>
      </div>
    </section>
  );
}
