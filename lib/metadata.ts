import type { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export function createMetadata({
  title,
  description,
  path = '',
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.seo.title;
  const fullDescription = description || siteConfig.seo.description;
  const baseUrl = siteConfig.seo.url;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

