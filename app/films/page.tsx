import { createMetadata } from '@/lib/metadata';
import FilmsGallery from '@/components/films/FilmsGallery';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata = createMetadata({
  title: 'Films',
  description: 'Explore cinematic 4K wedding documentaries, event broadcasting reels, and commercial films by MITHRAN PHOTO CLICKZ in Chennai.',
  path: '/films',
});

export default function FilmsPage() {
  return (
    <div className="pt-32 md:pt-40 pb-32 bg-bg-primary min-h-screen text-warm-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <SectionLabel className="mb-6">Motion &amp; Cinema</SectionLabel>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-warm-white">
            Films
          </h1>
          <p className="mt-4 font-manrope text-base md:text-lg text-muted max-w-xl">
            Stories in motion. Mastered in 4K with intentional pacing, rich color science, and cinematic sound design.
          </p>
        </div>

        {/* Gallery */}
        <FilmsGallery />
      </div>
    </div>
  );
}

