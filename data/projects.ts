export type ProjectCategory = 'weddings' | 'portraits' | 'events' | 'commercial' | 'films';

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  location?: string;
  date?: string;
  coverImage: string;
  coverImageAlt?: string;
  description: string;
  storyQuote?: string;
  gallery: GalleryItem[];
  videoUrl?: string;
  videoDuration?: string;
  featured: boolean;
  aspectRatio: '3:4' | '16:9' | '1:1' | '2:3' | '4:5';
  isPlaceholder: boolean;
  placeholderLabel?: string;
}

// Curated photography projects featuring authentic MITHRAN PHOTO CLICKZ work.
// All titles, subtitles, and descriptions use honest generic editorial labels without unverified venue/location claims.
export const projects: Project[] = [
  {
    slug: 'evening-celebration',
    title: 'Evening Celebration',
    subtitle: 'Wedding Story · Light & Atmosphere',
    category: 'weddings',
    location: 'Studio Archive',
    date: 'Studio Archive',
    coverImage: '/images/work/weddings/wedding-fairy-lights-tunnel.jpg',
    coverImageAlt: 'Couple standing in a golden fairy light tunnel',
    description: 'An evening celebration documented under canopies of golden fairy lights, crystal chandeliers, and atmospheric illumination.',
    storyQuote: 'Capturing the interplay of golden illumination, attire, and genuine emotion.',
    gallery: [
      { id: 'w1-1', url: '/images/work/weddings/wedding-fairy-lights-tunnel.jpg', alt: 'Couple standing in a golden fairy light tunnel', caption: 'Fairy Light Canopy', aspect: 'portrait' },
      { id: 'w1-2', url: '/images/work/weddings/wedding-grand-chandelier-hall.jpg', alt: 'Banquet hall with crystal chandeliers and stage lighting', caption: 'Chandelier Hall', aspect: 'wide' },
      { id: 'w1-3', url: '/images/work/weddings/wedding-fairy-lights-twirl.jpg', alt: 'Couple dancing in a tunnel of fairy lights', caption: 'Light & Movement', aspect: 'portrait' },
      { id: 'w1-4', url: '/images/work/details/detail-wedding-mehndi-diamond-ring.jpg', alt: 'Close-up of hands with henna patterns and a solitaire diamond ring', caption: 'Henna Patterns & Solitaire Ring', aspect: 'square' },
      { id: 'w1-5', url: '/images/work/weddings/wedding-stage-tender-kiss.jpg', alt: 'Couple sharing an embrace on an illuminated stage', caption: 'Celebration on Stage', aspect: 'portrait' },
      { id: 'w1-6', url: '/images/work/weddings/wedding-fairy-lights-embrace.jpg', alt: 'Couple embracing with warm golden background bokeh', caption: 'Golden Light Study', aspect: 'portrait' },
    ],
    featured: true,
    aspectRatio: '3:4',
    isPlaceholder: false,
  },
  {
    slug: 'editorial-story',
    title: 'Editorial Story',
    subtitle: 'Couple Session · Outdoor Light',
    category: 'weddings',
    location: 'Studio Archive',
    date: 'Studio Archive',
    coverImage: '/images/work/editorial/editorial-flying-dress-bougainvillea.jpg',
    coverImageAlt: 'Couple outdoors with billowing pastel blue gown train',
    description: 'Cinematic movement and architectural compositions featuring flowing gowns, sunlit courtyards, and blooming bougainvillea.',
    storyQuote: 'Movement, colour, and architecture coming together in natural daylight.',
    gallery: [
      { id: 'e1-1', url: '/images/work/editorial/editorial-flying-dress-bougainvillea.jpg', alt: 'Couple outdoors with billowing pastel blue gown train', caption: 'Flowing Gown Study', aspect: 'portrait' },
      { id: 'e1-2', url: '/images/work/editorial/editorial-flying-dress-gazebo.jpg', alt: 'Silhouette of a couple inside an outdoor stone gazebo', caption: 'Gazebo Silhouette', aspect: 'portrait' },
      { id: 'e1-3', url: '/images/work/editorial/editorial-mediterranean-terrace-red.jpg', alt: 'Couple standing on an outdoor stone staircase', caption: 'Staircase Composition', aspect: 'portrait' },
      { id: 'e1-4', url: '/images/work/editorial/editorial-tuscan-green-door.jpg', alt: 'Couple standing beside a weathered green wooden door framed by flowers', caption: 'Doorway Composition', aspect: 'portrait' },
      { id: 'e1-5', url: '/images/work/portraits/portrait-couple-garden-knee-rest.jpg', alt: 'Couple seated together in a courtyard garden', caption: 'Courtyard Portrait', aspect: 'portrait' },
      { id: 'e1-6', url: '/images/work/editorial/editorial-garden-romantic-lift.jpg', alt: 'Couple embracing on an outdoor stone pathway lined with bougainvillea', caption: 'Garden Pathway', aspect: 'portrait' },
    ],
    featured: true,
    aspectRatio: '3:4',
    isPlaceholder: false,
  },
  {
    slug: 'bridal-portrait-study',
    title: 'Portrait Study',
    subtitle: 'Bridal Portraiture · Studio Light',
    category: 'portraits',
    location: 'Studio Archive',
    date: 'Studio Archive',
    coverImage: '/images/work/portraits/portrait-bride-diamond-earring.jpg',
    coverImageAlt: 'Woman in royal blue saree adjusting a diamond earring',
    description: 'A portrait study in royal blue silk attire and diamond jewelry, captured with directional studio lighting.',
    storyQuote: 'Quiet poise, texture, and sculpted studio lighting.',
    gallery: [
      { id: 'p1-1', url: '/images/work/portraits/portrait-bride-diamond-earring.jpg', alt: 'Woman in royal blue saree adjusting a diamond earring', caption: 'Jewelry & Profile', aspect: 'portrait' },
      { id: 'p1-2', url: '/images/work/portraits/portrait-bride-crystal-flare.jpg', alt: 'Portrait with prism light flare across the frame', caption: 'Prism Flare', aspect: 'portrait' },
      { id: 'p1-3', url: '/images/work/portraits/portrait-bride-meditative-poise.jpg', alt: 'Woman in traditional attire in a contemplative seated pose', caption: 'Seated Pose', aspect: 'portrait' },
      { id: 'p1-4', url: '/images/work/portraits/portrait-bride-serene-seated.jpg', alt: 'Woman in royal blue saree seated against a dark studio backdrop', caption: 'Studio Portrait', aspect: 'portrait' },
    ],
    featured: false,
    aspectRatio: '4:5',
    isPlaceholder: false,
  },
  {
    slug: 'groom-portrait-study',
    title: 'Portrait Study',
    subtitle: 'Groom Portraiture · Studio Texture',
    category: 'portraits',
    location: 'Studio Archive',
    date: 'Studio Archive',
    coverImage: '/images/work/portraits/portrait-groom-cuff-watch-embroidery.jpg',
    coverImageAlt: 'Man adjusting sleeve cuff of an embroidered sherwani beside a wristwatch',
    description: 'A study of embroidered sherwani textures, tailored details, and portraiture under controlled studio illumination.',
    storyQuote: 'Tailored textures and controlled directional light.',
    gallery: [
      { id: 'p2-1', url: '/images/work/portraits/portrait-groom-cuff-watch-embroidery.jpg', alt: 'Man adjusting sleeve cuff of an embroidered sherwani beside a wristwatch', caption: 'Embroidered Cuff Detail', aspect: 'portrait' },
      { id: 'p2-2', url: '/images/work/portraits/portrait-groom-standing-red-drape.jpg', alt: 'Man standing in a doorway with warm rim lighting', caption: 'Doorway Rim Light', aspect: 'portrait' },
      { id: 'p2-3', url: '/images/work/portraits/portrait-groom-architectural-pillar.jpg', alt: 'Man in sherwani leaning against a stone pillar', caption: 'Pillar Composition', aspect: 'portrait' },
      { id: 'p2-4', url: '/images/work/details/detail-sherwani-zardozi-cuff.jpg', alt: 'Close-up of intricate metallic zardozi embroidery on fabric', caption: 'Embroidery Texture', aspect: 'portrait' },
    ],
    featured: false,
    aspectRatio: '2:3',
    isPlaceholder: false,
  },
  {
    slug: 'heritage-story',
    title: 'Heritage Story',
    subtitle: 'Traditional Attire & Architecture',
    category: 'weddings',
    location: 'Studio Archive',
    date: 'Studio Archive',
    coverImage: '/images/work/weddings/wedding-heritage-night-mansion.jpg',
    coverImageAlt: 'Illuminated traditional heritage building at dusk with granite steps',
    description: 'Documenting traditional architecture, timber verandahs, patterned floor tiles, and heritage attire.',
    storyQuote: 'Traditional architectural textures framed with cinematic light.',
    gallery: [
      { id: 'h1-1', url: '/images/work/weddings/wedding-heritage-night-mansion.jpg', alt: 'Illuminated traditional heritage building at dusk with granite steps', caption: 'Dusk Architecture', aspect: 'portrait' },
      { id: 'h1-2', url: '/images/work/weddings/wedding-heritage-hall-conversation.jpg', alt: 'Two people standing in a wooden pillared corridor with carved ceiling beams', caption: 'Verandah Corridor', aspect: 'wide' },
      { id: 'h1-3', url: '/images/work/details/detail-athangudi-tiles-kolusu.jpg', alt: 'Close-up of patterned floral floor tiles with a silver anklet', caption: 'Patterned Floor Tiles & Anklet', aspect: 'portrait' },
      { id: 'h1-4', url: '/images/work/weddings/wedding-chettinad-thinnai-verandah.jpg', alt: 'Couple sitting on a raised pillared verandah', caption: 'Pillared Verandah', aspect: 'portrait' },
      { id: 'h1-5', url: '/images/work/editorial/editorial-traditional-oonjal-swing.jpg', alt: 'Carved wooden swing in a courtyard', caption: 'Carved Wooden Swing', aspect: 'portrait' },
    ],
    featured: false,
    aspectRatio: '4:5',
    isPlaceholder: false,
  },
  {
    slug: 'garden-session',
    title: 'Garden Session',
    subtitle: 'Couple Session · Natural Light',
    category: 'weddings',
    location: 'Studio Archive',
    date: 'Studio Archive',
    coverImage: '/images/work/editorial/editorial-peach-villa-teal-doors.jpg',
    coverImageAlt: 'Couple standing on an outdoor patio beside teal wooden shutters',
    description: 'Natural daylight portraits composed against pastel architectural walls, wooden shutters, and garden walkways.',
    storyQuote: 'Natural daylight framed by architectural textures and greenery.',
    gallery: [
      { id: 'v1-1', url: '/images/work/editorial/editorial-peach-villa-teal-doors.jpg', alt: 'Couple standing on a tiled patio in front of teal wooden shutters', caption: 'Patio & Shutters', aspect: 'portrait' },
      { id: 'v1-2', url: '/images/work/editorial/editorial-peach-villa-yellow-bicycle.jpg', alt: 'Vintage bicycle parked against an outdoor pastel wall', caption: 'Courtyard Bicycle', aspect: 'portrait' },
      { id: 'v1-3', url: '/images/work/editorial/editorial-bougainvillea-walk.jpg', alt: 'Couple walking along an outdoor pathway beneath pink flowering vines', caption: 'Flowering Canopy Walk', aspect: 'portrait' },
      { id: 'v1-4', url: '/images/work/editorial/editorial-library-books-spiral-staircase.jpg', alt: 'Overhead view of antique books on a table beside a spiral staircase', caption: 'Staircase & Books Composition', aspect: 'portrait' },
    ],
    featured: false,
    aspectRatio: '16:9',
    isPlaceholder: false,
  },
];

export const categories: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Weddings', value: 'weddings' },
  { label: 'Portraits', value: 'portraits' },
];
