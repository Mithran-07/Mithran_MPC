'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { fadeUp, staggerContainer, viewportSettings } from '@/lib/animations';
import SectionLabel from '@/components/ui/SectionLabel';

import { siteConfig } from '@/data/siteConfig';

export default function SelectedWork() {
  if (!siteConfig.features.showWorkGrid) return null;

  // Take first 6 projects for homepage display
  const displayProjects = projects.slice(0, 6);


  return (
    <section id="selected-work" className="py-24 md:py-32 lg:py-40 bg-bg-primary" aria-label="Selected work">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        <SectionLabel className="mb-12">Selected Work</SectionLabel>

        {/* Editorial masonry grid — asymmetric, NOT uniform */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {/* Large portrait — spans 7 columns, tall */}
          {displayProjects[0] && (
            <motion.div
              className="md:col-span-7 md:row-span-2"
              variants={fadeUp}
            >
              <ProjectCard
                project={displayProjects[0]}
                aspectClass="aspect-[3/4]"
                className="h-full"
              />
            </motion.div>
          )}

          {/* Top right — landscape */}
          {displayProjects[1] && (
            <motion.div className="md:col-span-5" variants={fadeUp}>
              <ProjectCard
                project={displayProjects[1]}
                aspectClass="aspect-video"
              />
            </motion.div>
          )}

          {/* Bottom right — portrait */}
          {displayProjects[2] && (
            <motion.div className="md:col-span-5" variants={fadeUp}>
              <ProjectCard
                project={displayProjects[2]}
                aspectClass="aspect-[4/5]"
              />
            </motion.div>
          )}

          {/* Second row — three varied pieces */}
          {displayProjects[3] && (
            <motion.div className="md:col-span-5" variants={fadeUp}>
              <ProjectCard
                project={displayProjects[3]}
                aspectClass="aspect-video"
              />
            </motion.div>
          )}

          {displayProjects[4] && (
            <motion.div className="md:col-span-4" variants={fadeUp}>
              <ProjectCard
                project={displayProjects[4]}
                aspectClass="aspect-[4/5]"
              />
            </motion.div>
          )}

          {displayProjects[5] && (
            <motion.div className="md:col-span-3" variants={fadeUp}>
              <ProjectCard
                project={displayProjects[5]}
                aspectClass="aspect-square"
              />
            </motion.div>
          )}
        </motion.div>

        {/* View all work link */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <Link
            href="/work"
            className="font-manrope text-[13px] uppercase tracking-[0.15em] text-gold hover:text-gold-highlight transition-colors duration-300 font-medium"
          >
            View All Work &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Project card component for the masonry grid
function ProjectCard({
  project,
  aspectClass,
  className = '',
}: {
  project: (typeof projects)[0];
  aspectClass: string;
  className?: string;
}) {
  return (
    <Link href={`/work/${project.slug}`} className={`group block ${className}`}>
      <motion.div
        className={`relative overflow-hidden bg-dark-gray ${aspectClass}`}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Cover Photograph */}
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.coverImageAlt || project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-manrope text-[11px] uppercase tracking-[0.2em] text-muted/30">
              {project.category}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/60 transition-all duration-500 flex items-end p-6">
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="font-manrope text-[11px] uppercase tracking-[0.2em] text-gold mb-1">
              {project.category}
            </p>
            <h3 className="font-playfair text-xl md:text-2xl text-warm-white">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="font-manrope text-[12px] uppercase tracking-[0.15em] text-muted mt-1">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
