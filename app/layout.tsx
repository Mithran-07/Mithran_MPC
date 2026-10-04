import type { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mithran Photo Clickz | Photography & Films in Chennai',
  description:
    'Photography and visual production studio in Old Perungalathur, Chennai. Specializing in wedding photography, event coverage, portraits, commercial shoots, films, and 4K production.',
  metadataBase: new URL(siteConfig.seo.url),
  openGraph: {
    title: 'Mithran Photo Clickz | Photography & Films in Chennai',
    description:
      'Photography and visual production studio in Chennai.',
    siteName: 'MITHRAN PHOTO CLICKZ',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mithran Photo Clickz | Photography & Films in Chennai',
    description:
      'Photography and visual production studio in Chennai.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MITHRAN PHOTO CLICKZ',
    alternateName: 'மித்ரன் போட்டோ கிளிக்ஸ்',
    description:
      'Photography, films, and visual production studio in Chennai.',
    image: `${siteConfig.seo.url}/brand/logo-monogram.png`,
    telephone: '+919171900201',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 5/6, First Floor, Kamaraj Main Rd, Raja Rajeswari Nagar',
      addressLocality: 'Old Perungalathur, Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600063',
      addressCountry: 'IN',
    },
    founder: {
      '@type': 'Person',
      name: 'Lion B. Anand Kumar',
    },
    priceRange: '₹₹₹',
    areaServed: ['Chennai', 'Tambaram', 'Old Perungalathur', 'Tamil Nadu', 'India'],
  };

  return (
    <html lang="en" className="h-full antialiased font-manrope">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-warm-white">
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

