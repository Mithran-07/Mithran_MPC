'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilmItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'wedding' | 'event' | 'commercial' | '4k';
  categoryLabel: string;
  location: string;
  duration?: string;
  description: string;
  videoUrl?: string;
  isPlaceholder: boolean;
}

const filmList: FilmItem[] = [
  {
    id: 'film-1',
    title: 'Wedding Film',
    subtitle: 'Film Preview — Coming Soon',
    category: 'wedding',
    categoryLabel: 'Wedding Films',
    location: 'Chennai Studio Archive',
    duration: 'Coming Soon',
    description: 'Cinematic wedding documentary preview. Full video reel will be embedded upon client asset delivery.',
    isPlaceholder: true,
  },
  {
    id: 'film-2',
    title: 'Event Film',
    subtitle: 'Film Preview — Coming Soon',
    category: 'event',
    categoryLabel: 'Event Films',
    location: 'Chennai Studio Archive',
    duration: 'Coming Soon',
    description: 'Event broadcasting and stage coverage preview. Full multi-camera reel will be published upon release.',
    isPlaceholder: true,
  },
  {
    id: 'film-3',
    title: 'Commercial Film',
    subtitle: 'Film Preview — Coming Soon',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Chennai Studio Archive',
    duration: 'Coming Soon',
    description: 'Commercial video production preview. Brand visual showcase will be published upon release.',
    isPlaceholder: true,
  },
  {
    id: 'film-4',
    title: '4K Production',
    subtitle: 'Film Preview — Coming Soon',
    category: '4k',
    categoryLabel: '4K Production',
    location: 'Chennai Studio Archive',
    duration: 'Coming Soon',
    description: 'Ultra-high-definition video production preview. 4K master reel will be embedded upon release.',
    isPlaceholder: true,
  },
];

const filmCategories = [
  { label: 'All Films', value: 'all' },
  { label: 'Wedding Films', value: 'wedding' },
  { label: 'Event Films', value: 'event' },
  { label: 'Commercial', value: 'commercial' },
  { label: '4K Production', value: '4k' },
];

import { siteConfig } from '@/data/siteConfig';

export default function FilmsGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<FilmItem | null>(null);

  if (!siteConfig.features.showFilmsPreview) {
    return (
      <div className="py-20 text-center border border-white/5 bg-bg-secondary p-12">
        <p className="font-playfair text-2xl text-warm-white">
          Cinematic Films
        </p>
        <p className="font-manrope text-sm text-muted mt-3 max-w-md mx-auto">
          Our film and video production showcase is currently being prepared for publication.
        </p>
      </div>
    );
  }

  const filtered = activeCategory === 'all'
    ? filmList
    : filmList.filter((f) => f.category === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-16 border-b border-white/5 pb-6">
        {filmCategories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-manrope text-[12px] md:text-[13px] uppercase tracking-[0.15em] px-4 py-2 transition-all duration-300 relative font-medium ${
                isActive
                  ? 'text-gold'
                  : 'text-muted hover:text-warm-white'
              }`}
            >
              {cat.label}
              {isActive && (
                <motion.div
                  layoutId="activeFilmCategory"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Films Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((film) => (
            <motion.div
              key={film.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer space-y-4"
              onClick={() => setActiveVideoModal(film)}
            >
              {/* Video Thumbnail Box */}
              <div className="relative aspect-video bg-dark-gray overflow-hidden border border-white/5 group-hover:border-gold/30 transition-colors duration-500">
                <div className="w-full h-full flex items-center justify-center bg-dark-gray group-hover:scale-[1.02] transition-transform duration-700">
                  <span className="font-manrope text-[11px] uppercase tracking-[0.2em] text-muted/30">
                    {film.title} · Preview
                  </span>
                </div>

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />

                {/* Center Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-gold/60 bg-bg-primary/40 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:border-gold group-hover:bg-gold transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-gold group-hover:text-bg-primary ml-1 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Badge */}
                <span className="absolute bottom-3 right-3 font-manrope text-[10px] uppercase tracking-wider text-warm-white bg-bg-primary/80 px-3 py-1">
                  Preview
                </span>
              </div>

              {/* Meta */}
              <div>
                <span className="font-manrope text-[11px] uppercase tracking-[0.2em] text-gold font-medium">
                  {film.categoryLabel}
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl text-warm-white group-hover:text-gold transition-colors duration-300 mt-1">
                  {film.title}
                </h3>
                <p className="font-manrope text-xs uppercase tracking-wider text-muted mt-1">
                  {film.subtitle}
                </p>
                <p className="font-manrope text-sm text-muted mt-3 line-clamp-2 leading-relaxed">
                  {film.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Video Modal Preview */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActiveVideoModal(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-bg-secondary border border-white/10 p-6 md:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <span className="font-manrope text-[11px] uppercase tracking-[0.2em] text-gold">
                    {activeVideoModal.categoryLabel}
                  </span>
                  <h3 className="font-playfair text-2xl text-warm-white">
                    {activeVideoModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-warm-white hover:text-gold hover:border-gold transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Video Player Frame Area */}
              <div className="relative aspect-video bg-dark-gray flex flex-col items-center justify-center text-center p-8 border border-white/5">
                <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="font-playfair text-2xl text-warm-white mb-2">
                  Film Preview · Video Coming Soon
                </p>
                <p className="font-manrope text-sm text-muted max-w-md">
                  Full 4K video reel will be embedded here upon client asset release.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-manrope text-xs text-muted">
                  {activeVideoModal.subtitle}
                </span>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="font-manrope text-xs uppercase tracking-widest text-gold hover:text-gold-highlight"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

