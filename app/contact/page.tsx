import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/siteConfig';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Inquire about wedding photography, films, portraits, and visual production with MITHRAN PHOTO CLICKZ in Old Perungalathur, Chennai.',
  path: '/contact',
});

export default function ContactPage() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Mithran Photo Clickz, Kamaraj Main Rd, Raja Rajeswari Nagar, Old Perungalathur, Chennai 600063'
  )}`;

  return (
    <div className="bg-bg-primary min-h-screen text-warm-white">
      {/* Header */}
      <section className="pt-36 md:pt-48 pb-20 md:pb-28 bg-bg-secondary border-b border-white/5">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <SectionLabel className="mb-6">Initiate A Conversation</SectionLabel>
          <div className="max-w-4xl">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-warm-white leading-tight">
              Let&apos;s Create Something Worth Remembering.
            </h1>
            <p className="mt-6 font-manrope text-base md:text-lg text-muted max-w-xl">
              Tell us about your upcoming celebration, editorial concept, or production requirement. We look forward to crafting your story.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Direct Contact Info */}
      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <SectionLabel className="mb-8">Inquiry Details</SectionLabel>
              <ContactForm />
            </div>

            {/* Direct Studio Information */}
            <div className="lg:col-span-5 space-y-12">
              {/* Studio Info Card */}
              <div className="p-8 bg-bg-secondary border border-white/5 space-y-8">
                <div>
                  <SectionLabel className="mb-3">The Studio</SectionLabel>
                  <h2 className="font-playfair text-2xl text-warm-white">
                    {siteConfig.name}
                  </h2>
                  <p className="font-tamil text-sm text-gold/80 mt-1">
                    {siteConfig.nameTamil}
                  </p>
                  <p className="font-manrope text-xs text-muted uppercase tracking-wider mt-2">
                    Proprietor: {siteConfig.proprietor}
                  </p>
                </div>

                <GoldDivider width="small" />

                {/* Direct Action Buttons */}
                <div className="space-y-4">
                  <span className="block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold">
                    Direct Connections
                  </span>

                  <div className="flex flex-col gap-3">
                    <a
                      href={siteConfig.phoneHref}
                      className="inline-flex items-center justify-between p-4 bg-bg-primary border border-white/5 hover:border-gold/60 text-warm-white transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-manrope text-xs uppercase tracking-widest text-gold">Call</span>
                        <span className="font-manrope text-sm text-warm-white">{siteConfig.phone}</span>
                      </div>
                      <span className="text-gold group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>

                    <a
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between p-4 bg-bg-primary border border-white/5 hover:border-gold/60 text-warm-white transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-manrope text-xs uppercase tracking-widest text-gold">WhatsApp</span>
                        <span className="font-manrope text-sm text-warm-white">{siteConfig.whatsapp}</span>
                      </div>
                      <span className="text-gold group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between p-4 bg-bg-primary border border-white/5 hover:border-gold/60 text-warm-white transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-manrope text-xs uppercase tracking-widest text-gold">Directions</span>
                        <span className="font-manrope text-sm text-warm-white">Open in Maps</span>
                      </div>
                      <span className="text-gold group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                  </div>
                </div>

                <GoldDivider width="small" />

                {/* Address */}
                <div>
                  <span className="block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold mb-2">
                    Studio Address
                  </span>
                  <address className="font-manrope text-sm text-muted not-italic leading-relaxed">
                    {siteConfig.address.line1}<br />
                    {siteConfig.address.line2}, {siteConfig.address.line3}<br />
                    {siteConfig.address.area}, {siteConfig.address.city}<br />
                    {siteConfig.address.state} {siteConfig.address.pincode}, {siteConfig.address.country}
                  </address>
                </div>
              </div>

              {/* Business Capabilities Note */}
              <div className="p-6 bg-dark-gray border border-white/5">
                <span className="block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold mb-2">
                  Specialized Services Available
                </span>
                <p className="font-manrope text-xs text-muted leading-relaxed">
                  Photography · 4K Video Production · Live Event Streaming · LED Video Walls · Legacy Media Conversion (VHS / VCD / DVD to Digital &amp; Pendrive).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

