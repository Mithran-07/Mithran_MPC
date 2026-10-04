'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects, categories, type ProjectCategory } from '@/data/projects';


import { siteConfig } from '@/data/siteConfig';

export default function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');

  if (!siteConfig.features.showWorkGrid) {
    return (
      <div className="py-20 text-center border border-white/5 bg-bg-secondary p-12">
        <p className="font-playfair text-2xl text-warm-white">
          Portfolio Archive
        </p>
        <p className="font-manrope text-sm text-muted mt-3 max-w-md mx-auto">
          Our selected photography work collection is currently being curated for publication.
        </p>
      </div>
    );
  }

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-16 border-b border-white/5 pb-6">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`font-manrope text-[12px] md:text-[13px] uppercase tracking-[0.15em] px-4 py-2 transition-all duration-300 relative font-medium ${
                isActive
                  ? 'text-gold'
                  : 'text-muted hover:text-warm-white'
              }`}
            >
              {cat.label}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Editorial Masonry Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            // Assign varying spans to create an editorial asymmetry
            const isFirst = index === 0;
            const isEven = index % 2 === 0;
            const colSpanClass = isFirst
              ? 'md:col-span-8 aspect-[16/10]'
              : isEven
              ? 'md:col-span-6 aspect-[4/5]'
              : 'md:col-span-6 aspect-[16/9]';

            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className={`${colSpanClass} group relative`}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block w-full h-full relative overflow-hidden bg-dark-gray"
                >
                  {/* Photo area */}
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.coverImageAlt || project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                      className="object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-dark-gray group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                      <span className="font-manrope text-[11px] uppercase tracking-[0.2em] text-muted/30">
                        {project.category} · {project.title}
                      </span>
                    </div>
                  )}

                  {/* Dark gradient & hover reveal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                  {/* Overlay Meta */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold font-medium mb-1">
                        {project.category} · {project.location}
                      </span>
                      <h3 className="font-playfair text-2xl md:text-3xl text-warm-white group-hover:text-gold-highlight transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="font-manrope text-[12px] uppercase tracking-[0.12em] text-muted mt-1">
                          {project.subtitle}
                        </p>
                      )}
                      <p className="font-manrope text-sm text-warm-white/70 mt-3 line-clamp-2 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
