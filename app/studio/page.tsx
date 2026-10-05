import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/services';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import Button from '@/components/ui/Button';

export const metadata = createMetadata({
  title: 'The Studio',
  description: 'Learn about MITHRAN PHOTO CLICKZ, led by Lion B. Anand Kumar in Old Perungalathur, Chennai. Photography, films, and complete visual production.',
  path: '/studio',
});

export default function StudioPage() {
  return (
    <div className="bg-bg-primary min-h-screen text-warm-white">
      {/* Studio Header */}
      <section className="pt-36 md:pt-48 pb-20 md:pb-28 bg-bg-secondary border-b border-white/5">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <SectionLabel className="mb-6">About the Studio</SectionLabel>
          <div className="max-w-4xl">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-warm-white leading-tight">
              A Visual Studio Built on Artistry, Light &amp; Craft.
            </h1>
            <p className="mt-8 font-playfair text-xl md:text-2xl text-gold/90 italic">
              மித்ரன் போட்டோ கிளிக்ஸ் · Chennai
            </p>
          </div>
        </div>
      </section>

      {/* The Founder &amp; Studio Foundation */}
      <section className="py-24 md:py-32 bg-bg-primary border-b border-white/5">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Founder Portrait */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none bg-dark-gray overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/studio/founder-lion-b-anand-kumar.jpg"
                  alt="Anand Kumar, proprietor of MITHRAN PHOTO CLICKZ"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 38vw"
                  className="object-cover object-[center_15%]"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/15 pointer-events-none" />
              </div>
              <div className="pt-1 flex items-center justify-between text-muted font-manrope text-xs">
                <span className="uppercase tracking-[0.2em] text-[11px] text-gold/90 font-medium">Founder &amp; Proprietor</span>
                <span>Chennai Studio</span>
              </div>
            </div>

            {/* Founder Story & Studio Foundation */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <SectionLabel>The Founder · Our Story</SectionLabel>
                <h2 className="mt-4 font-playfair text-3xl md:text-5xl text-warm-white leading-tight">
                  Lion B. Anand Kumar
                </h2>
                <p className="mt-2 font-manrope text-xs md:text-sm uppercase tracking-[0.2em] text-gold font-medium">
                  Proprietor, MITHRAN PHOTO CLICKZ
                </p>
              </div>

              <div className="pt-2">
                <GoldDivider width="small" />
              </div>

              {/* 
                TODO FOR OWNER CONFIRMATION:
                Please confirm the following capabilities and service coverage before expanding this copy:
                1. "multi-day wedding documentaries"
                2. "commercial brand visual assets"
                3. "major cultural celebrations across Chennai"
                4. "Tamil Nadu and South India" booking availability
              */}
              <div className="space-y-5 text-muted font-manrope text-base leading-relaxed pt-2">
                <p>
                  MITHRAN PHOTO CLICKZ was established under the leadership of Lion B. Anand Kumar with a singular commitment: to bring cinematic storytelling, artistic discipline, and uncompromising visual quality to weddings, portraits, and celebrations in Chennai.
                </p>
                <p>
                  Located in Old Perungalathur / Tambaram, our physical studio serves as the creative workshop where every photography and film production is planned, captured, color-graded, and finished.
                </p>
                <p>
                  We approach every assignment with technical precision, attention to craft, and genuine emotional resonance—preserving life&apos;s most meaningful milestones with timeless clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-24 md:py-32 bg-bg-secondary border-b border-white/5">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <SectionLabel className="justify-center mb-4">Core Philosophy</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-5xl text-warm-white">
              Light. Emotion. Story.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-bg-primary border border-white/5 space-y-4">
              <span className="font-playfair text-4xl text-gold">01</span>
              <h3 className="font-playfair text-2xl text-warm-white">Light</h3>
              <p className="font-manrope text-sm text-muted leading-relaxed">
                We harness natural golden hour warmth and controlled studio lighting to shape mood, depth, and timeless atmosphere in every shot.
              </p>
            </div>

            <div className="p-8 bg-bg-primary border border-white/5 space-y-4">
              <span className="font-playfair text-4xl text-gold">02</span>
              <h3 className="font-playfair text-2xl text-warm-white">Emotion</h3>
              <p className="font-manrope text-sm text-muted leading-relaxed">
                We anticipate the unscripted moments—the quiet teardrop, the sudden laughter, and the shared glances between generations.
              </p>
            </div>

            <div className="p-8 bg-bg-primary border border-white/5 space-y-4">
              <span className="font-playfair text-4xl text-gold">03</span>
              <h3 className="font-playfair text-2xl text-warm-white">Story</h3>
              <p className="font-manrope text-sm text-muted leading-relaxed">
                Beyond isolated photos, we build coherent visual narratives that preserve the essence of your celebrations for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="py-24 md:py-32 bg-bg-primary border-b border-white/5">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <SectionLabel className="mb-6">Capabilities</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl text-warm-white mb-16">
            Complete Production House
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.slug} className="p-8 bg-bg-secondary border border-white/5 space-y-3">
                <h3 className="font-playfair text-xl text-warm-white">{svc.name}</h3>
                <p className="font-manrope text-sm text-muted leading-relaxed">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Location & Visit */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionLabel>Visit Our Studio</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-5xl text-warm-white leading-tight">
                Old Perungalathur, Chennai
              </h2>
              <address className="font-manrope text-base text-muted not-italic leading-relaxed">
                {siteConfig.address.line1}<br />
                {siteConfig.address.line2}, {siteConfig.address.line3}<br />
                {siteConfig.address.area}, {siteConfig.address.city}<br />
                {siteConfig.address.state} {siteConfig.address.pincode}, {siteConfig.address.country}
              </address>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button href="/contact">
                  Schedule a Consultation
                </Button>
                <Button
                  href={siteConfig.whatsappHref}
                  variant="ghost"
                  external
                >
                  WhatsApp Studio &rarr;
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-dark-gray p-8 border border-white/5 text-center space-y-4">
              <span className="font-manrope text-[11px] uppercase tracking-[0.2em] text-gold">
                Direct Contact
              </span>
              <p className="font-playfair text-3xl text-warm-white">
                {siteConfig.phone}
              </p>
              <p className="font-manrope text-xs text-muted">
                Available for wedding inquiries &amp; production bookings across Tamil Nadu and South India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

