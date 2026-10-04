import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import SectionLabel from '@/components/ui/SectionLabel';


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | MITHRAN PHOTO CLICKZ',
    };
  }

  return {
    title: `${project.title} — ${project.subtitle || 'Photo Story'} | MITHRAN PHOTO CLICKZ`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find adjacent project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="bg-bg-primary min-h-screen text-warm-white">
      {/* Editorial Hero Banner */}
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-end pb-20 pt-36 bg-bg-secondary overflow-hidden">
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 bg-dark-gray">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.coverImageAlt || project.title}
              fill
              sizes="100vw"
              className="object-cover object-[center_25%]"
              priority
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-bg-primary/30" />
        </div>

        {/* Hero Meta */}
        <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4">{project.category}</SectionLabel>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-warm-white leading-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-2 font-manrope text-[14px] uppercase tracking-[0.15em] text-gold font-medium">
                {project.subtitle}
              </p>
            )}
            <div className="flex items-center gap-4 mt-6 text-muted font-manrope text-sm">
              <span>{project.location}</span>
              {project.date && project.date !== project.location && (
                <>
                  <span>·</span>
                  <span>{project.date}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Story Introduction */}
      <section className="py-20 md:py-28 bg-bg-primary border-b border-white/5">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
            <div className="lg:col-span-4">
              <h2 className="font-manrope text-[12px] uppercase tracking-[0.2em] text-gold font-medium">
                The Narrative
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-playfair text-2xl md:text-3xl text-warm-white/90 leading-relaxed">
                {project.description}
              </p>
              {project.storyQuote && (
                <div className="mt-10 pl-6 border-l border-gold/60">
                  <p className="font-playfair italic text-lg md:text-xl text-gold">
                    &ldquo;{project.storyQuote}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Large Editorial Gallery with Mixed Compositions */}
      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 space-y-16 md:space-y-24">
          {project.gallery.map((item, idx) => {
            // Vary the composition depending on aspect
            if (item.aspect === 'wide') {
              return (
                <div key={item.id} className="space-y-4">
                  <div className="relative aspect-[21/9] md:aspect-[16/7] w-full bg-dark-gray overflow-hidden">
                    <Image
                      src={item.url}
                      alt={item.alt}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  </div>
                  {item.caption && (
                    <p className="font-manrope text-[12px] text-muted text-right tracking-wider uppercase">
                      {item.caption}
                    </p>
                  )}
                </div>
              );
            }

            if (item.aspect === 'portrait') {
              return (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8 md:col-start-3 space-y-4">
                    <div className="relative aspect-[3/4] w-full bg-dark-gray overflow-hidden">
                      <Image
                        src={item.url}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
                        className="object-cover object-[center_25%]"
                      />
                    </div>
                    {item.caption && (
                      <p className="font-manrope text-[12px] text-muted text-center tracking-wider uppercase">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>
              );
            }

            // Standard / square / landscape composition
            return (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="relative aspect-[4/3] w-full bg-dark-gray overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-center h-full pt-4 md:pt-12 md:pl-6">
                  <span className="font-manrope text-[11px] uppercase tracking-[0.2em] text-gold mb-2">
                    Frame 0{idx + 1}
                  </span>
                  <h3 className="font-playfair text-2xl text-warm-white mb-2">
                    {item.caption || item.alt}
                  </h3>
                  <p className="font-manrope text-sm text-muted">
                    MITHRAN PHOTO CLICKZ · {project.location || 'Studio Archive'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Optional Film Reel if project includes video */}
      {project.videoUrl && (
        <section className="py-20 bg-bg-secondary border-t border-b border-white/5">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 text-center">
            <SectionLabel className="justify-center mb-6">Cinematic Reel</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-warm-white mb-10">
              Watch The Film
            </h2>
            <div className="relative aspect-video max-w-4xl mx-auto bg-dark-gray flex items-center justify-center border border-white/5 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-gold/60 flex items-center justify-center group-hover:scale-110 group-hover:border-gold transition-all duration-300">
                <svg className="w-6 h-6 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="absolute bottom-4 right-4 font-manrope text-xs text-warm-white/60 bg-bg-primary/80 px-3 py-1">
                {project.videoDuration || '4K Cinematic'}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation Footer */}
      <section className="py-24 bg-bg-primary border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Link
              href="/work"
              className="font-manrope text-[13px] uppercase tracking-[0.15em] text-muted hover:text-gold transition-colors duration-300 flex items-center gap-2"
            >
              <span>&larr;</span> Back to All Work
            </Link>

            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group text-right"
              >
                <span className="block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold mb-1">
                  Next Story
                </span>
                <span className="font-playfair text-2xl md:text-3xl text-warm-white group-hover:text-gold transition-colors duration-300">
                  {nextProject.title} &rarr;
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}

