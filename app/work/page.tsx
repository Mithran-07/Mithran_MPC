import { createMetadata } from '@/lib/metadata';
import WorkGallery from '@/components/work/WorkGallery';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata = createMetadata({
  title: 'Work',
  description: 'Explore selected wedding photography, portraits, events, commercial campaigns, and cinematic films by MITHRAN PHOTO CLICKZ in Chennai.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <div className="pt-32 md:pt-40 pb-32 bg-bg-primary min-h-screen">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <SectionLabel className="mb-6">Portfolio</SectionLabel>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-warm-white">
            Selected Work
          </h1>
          <p className="mt-4 font-manrope text-base md:text-lg text-muted max-w-xl">
            A curated collection of weddings, editorial portraits, and cinematic visual stories crafted across Chennai and Tamil Nadu.
          </p>
        </div>

        {/* Dynamic Gallery */}
        <WorkGallery />
      </div>
    </div>
  );
}

