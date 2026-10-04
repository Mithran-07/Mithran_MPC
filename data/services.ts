export interface Service {
  name: string;
  description: string;
  slug: string;
}

export const services: Service[] = [
  {
    name: 'Photography',
    description: 'Weddings, portraits, events, and commercial photography',
    slug: 'photography',
  },
  {
    name: 'Films',
    description: 'Wedding films, event coverage, and cinematic storytelling',
    slug: 'films',
  },
  {
    name: 'Live Streaming',
    description: 'Professional live event broadcasting',
    slug: 'live-streaming',
  },
  {
    name: 'LED Video Walls',
    description: 'Large-format LED displays for events and stages',
    slug: 'led-video-walls',
  },
  {
    name: '4K Production',
    description: 'Ultra-high-definition video production',
    slug: '4k-production',
  },
  {
    name: 'Customized Gifts',
    description: 'Personalized mugs, keychains, frames, crystals, clocks, and custom photo gifts',
    slug: 'customized-gifts',
  },
  {
    name: 'Legacy Media Conversion',
    description: 'VHS, VCD, DVD to digital and pendrive',
    slug: 'legacy-media-conversion',
  },
];

/*
 * TODO FOR OWNER CONFIRMATION:
 * Please confirm if "Albums" (Wedding & Portrait Photo Albums) and "Drone Photography / Aerial Cinema"
 * should be added to the official services list.
 */
