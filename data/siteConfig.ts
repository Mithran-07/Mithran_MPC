const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mithranphotoclickz.com';

export const siteConfig = {
  name: 'MITHRAN PHOTO CLICKZ',
  nameTamil: 'மித்ரன் போட்டோ கிளிக்ஸ்',
  tagline: 'Photography · Films · Visual Production',
  proprietor: 'Lion B. Anand Kumar',
  phone: '91719 00201',
  phoneHref: 'tel:+919171900201',
  whatsapp: '98848 58190',
  whatsappHref: 'https://wa.me/919884858190',
  instagram: {
    handle: '@mithranphotoclickz__',
    url: 'https://www.instagram.com/mithranphotoclickz__/',
  },
  address: {
    line1: 'No. 5/6, First Floor',
    line2: 'Kamaraj Main Rd',
    line3: 'Raja Rajeswari Nagar',
    area: 'Old Perungalathur',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600063',
    country: 'India',
    full: 'No. 5/6, First Floor, Kamaraj Main Rd, Raja Rajeswari Nagar, Old Perungalathur, Chennai, Tamil Nadu 600063',
  },
  seo: {
    title: 'Mithran Photo Clickz | Photography & Films in Chennai',
    description: 'Photography and visual production studio in Old Perungalathur, Chennai. Specializing in wedding photography, event coverage, portraits, commercial shoots, films, and 4K production.',
    url: siteUrl,
  },
  features: {
    shopping: process.env.NEXT_PUBLIC_ENABLE_SHOPPING === 'true',
    showWorkGrid: true,
    showFeaturedStory: true,
    showFilmsPreview: false,
    showClientStories: false,
    showLeadershipPortrait: true,
  },
  navigation: [
    { label: 'Work', href: '/work' },
    { label: 'Studio', href: '/studio' },
    { label: 'Films', href: '/films' },
    ...(process.env.NEXT_PUBLIC_ENABLE_SHOPPING === 'true' ? [{ label: 'Shop', href: '/shopping' }] : []),
  ],
} as const;

export type NavigationItem = (typeof siteConfig.navigation)[number];

