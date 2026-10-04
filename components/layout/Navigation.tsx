'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import { menuOverlay, menuItem } from '@/lib/animations';
import Button from '@/components/ui/Button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-primary/90 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label="MITHRAN PHOTO CLICKZ - Home"
            >
              <div className="relative w-12 h-10 lg:w-[58px] lg:h-12">
                <Image
                  src="/brand/logo-monogram.png"
                  alt="MITHRAN PHOTO CLICKZ logo"
                  fill
                  sizes="(max-width: 1024px) 48px, 58px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-manrope text-[13px] uppercase tracking-[0.15em] text-warm-white/80 hover:text-gold transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit MITHRAN PHOTO CLICKZ on Instagram"
                className="font-manrope text-[13px] uppercase tracking-[0.15em] text-warm-white/80 hover:text-gold transition-colors duration-300 font-medium"
              >
                Instagram
              </a>
              <Button href="/contact" className="ml-2">
                Enquire
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                className="flex flex-col justify-center items-center w-10 h-10 gap-[6px] group"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <span
                  className={`block h-[1.5px] w-6 bg-gold transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-6 bg-gold transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-6 bg-gold transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg-primary flex flex-col items-center justify-center"
            variants={menuOverlay}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center gap-8">
              {siteConfig.navigation.map((item) => (
                <motion.div key={item.href} variants={menuItem}>
                  <Link
                    href={item.href}
                    className="font-playfair text-3xl md:text-4xl text-warm-white hover:text-gold transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItem}>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit MITHRAN PHOTO CLICKZ on Instagram"
                  className="font-playfair text-2xl text-gold hover:text-gold-highlight transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Instagram {siteConfig.instagram.handle}
                </a>
              </motion.div>
              <motion.div variants={menuItem} className="mt-4">
                <Button
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Enquire
                </Button>
              </motion.div>
              
              <motion.div
                variants={menuItem}
                className="mt-8 text-center"
              >
                <p className="font-manrope text-[11px] uppercase tracking-[0.2em] text-muted">
                  {siteConfig.nameTamil}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
