# MITHRAN PHOTO CLICKZ — Real Asset Ingestion Guide

> **Purpose**: This guide provides the complete blueprint for organizing, sizing, formatting, and integrating real studio photography, video reels, team photos, and client stories into the MITHRAN PHOTO CLICKZ website.

---

## 1. Directory Structure

All media files must be placed under the `/public` directory according to this exact hierarchy:

```text
public/
├── brand/
│   ├── logo-monogram.png                 # Official M + Horse monogram (transparent)
│   └── logo.png                          # Fallback/alias
│
└── images/
    ├── work/
    │   ├── weddings/                     # Wedding ceremonies, muhurtham, reception photos
    │   │   ├── [project-slug]-cover.webp
    │   │   ├── [project-slug]-01.webp
    │   │   └── ...
    │   ├── portraits/                    # Studio portraits, bridal/groom profiles, editorial
    │   ├── events/                       # Cultural festivals, corporate galas, stage coverage
    │   └── commercial/                   # Product shoots, brand lookbooks, advertising
    │
    ├── studio/
    │   ├── space/                        # Studio interior, shooting floor, editing suite
    │   ├── team/                         # Proprietor portrait (Lion B. Anand Kumar), crew
    │   └── behind-the-scenes/            # Equipment, lighting setups, live production gear
    │
    └── films/
        ├── weddings/                     # 16:9 thumbnails & video stills for wedding films
        ├── events/                       # 16:9 thumbnails & stills for event broadcasting
        └── commercial/                   # 16:9 thumbnails & stills for commercial films
```

---

## 2. Image Specifications by Usage

| Placement | Recommended Dimensions | Aspect Ratio | Max File Size | Target Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Cover (Desktop)** | `2400 × 1600 px` | `3:2` | `< 750 KB` | Homepage full-viewport cinematic background |
| **Hero Cover (Mobile)** | `1080 × 1920 px` | `9:16` | `< 400 KB` | Mobile hero background crop |
| **Portfolio Cover (Tall)** | `1200 × 1600 px` | `3:4` or `4:5` | `< 450 KB` | Selected Work masonry & Project cards |
| **Portfolio Cover (Wide)**| `1920 × 1080 px` | `16:9` | `< 450 KB` | Landscape masonry items & films |
| **Gallery Frame (Wide)** | `2400 × 1028 px` | `21:9` or `16:7` | `< 600 KB` | Project detail panoramic cinematic frame |
| **Gallery Frame (Portrait)**| `1200 × 1600 px` | `3:4` | `< 400 KB` | Project detail vertical portrait crop |
| **Gallery Frame (Standard)**| `1600 × 1200 px` | `4:3` | `< 400 KB` | Project detail side-by-side frame |
| **Film Video Thumbnail** | `1920 × 1080 px` | `16:9` | `< 350 KB` | Films hub and video modal preview cover |
| **Studio / Team Portrait** | `1200 × 1600 px` | `3:4` | `< 400 KB` | About page leadership portrait |

---

## 3. Format & Compression Best Practices

1. **Preferred Format**: **WebP** (`.webp`) or **AVIF** (`.avif`).
   - WebP provides 30–40% smaller file sizes than JPEG with zero visible artifacting on dark backgrounds.
2. **Quality Setting**: Export at **80%–85% quality**. Do not export at 100% as file sizes become unnecessarily heavy (5MB+) without noticeable perceptual improvement on web displays.
3. **Color Space**: Always convert/export in **sRGB**. (Photos exported in *Adobe RGB* or *ProPhoto RGB* will appear dull or color-shifted in web browsers).
4. **Resolution**: 72 DPI is standard for web. (DPI does not affect web rendering—only pixel dimensions matter).

---

## 4. File Naming Conventions

Use clean, lower-case, hyphenated naming:

```text
[category]/[project-slug]-[type]-[index].[ext]
```

### Examples:
- Wedding cover: `public/images/work/weddings/chennai-temple-wedding-cover.webp`
- Wedding gallery frames: `public/images/work/weddings/chennai-temple-wedding-01.webp`
- Studio portrait: `public/images/work/portraits/monochrome-series-01.webp`
- Film thumbnail: `public/images/films/weddings/mahabalipuram-wedding-film-thumb.webp`
- Proprietor photo: `public/images/studio/team/anand-kumar-lead.webp`

---

## 5. Media Designations in Project Data

Every project entry in [`data/projects.ts`](file:///Users/mithran/Documents/My%20projects/MPC/data/projects.ts) maps images to specific roles:

```typescript
{
  slug: 'chennai-temple-wedding',
  title: 'Temple Muhurtham Story',
  subtitle: 'Traditional Wedding',
  category: 'weddings',
  location: 'Tambaram, Chennai',
  date: '2024',
  coverImage: '/images/work/weddings/chennai-temple-wedding-cover.webp',
  description: 'An intimate temple wedding documented through quiet glances and warm golden tones.',
  featured: true,                         // true = featured on Homepage Featured Story section
  aspectRatio: '3:4',                     // Aspect ratio for the Selected Work grid card
  isPlaceholder: false,                   // false = real client work (removes placeholder banners)
  placeholderLabel: '',
  gallery: [
    {
      id: 'tw-01',
      url: '/images/work/weddings/chennai-temple-wedding-01.webp',
      alt: 'Muhurtham rituals',
      caption: 'Sacred rituals under morning light',
      aspect: 'portrait',                 // 'portrait' | 'landscape' | 'wide' | 'square'
    },
    {
      id: 'tw-02',
      url: '/images/work/weddings/chennai-temple-wedding-02.webp',
      alt: 'Reception entrance',
      caption: 'Evening celebrations',
      aspect: 'wide',
    },
  ],
  videoUrl: 'https://www.youtube.com/watch?v=EXAMPLE_ID', // Optional film link
  videoDuration: '4:30',
}
```

---

## 6. How to Add a New Portfolio Project

1. Add your exported photos into `/public/images/work/[category]/`.
2. Open [`data/projects.ts`](file:///Users/mithran/Documents/My%20projects/MPC/data/projects.ts).
3. Add a new object to the `projects` array with `isPlaceholder: false`.
4. The website will automatically:
   - Generate the route `/work/[new-slug]` statically.
   - Include the project in `/work` with category filtering.
   - Include the new URL in [`sitemap.xml`](file:///Users/mithran/Documents/My%20projects/MPC/app/sitemap.ts).

---

## 7. How to Replace a Placeholder with Real Work

To replace any placeholder with real content:

1. Copy the real photos to `/public/images/work/[category]/`.
2. In [`data/projects.ts`](file:///Users/mithran/Documents/My%20projects/MPC/data/projects.ts), locate the project entry.
3. Update `title`, `subtitle`, `description`, `location`, `coverImage`, and `gallery` with the real information.
4. Set `isPlaceholder: false`.
5. Run `npm run build` to prerender the updated static pages.

---

## 8. How to Embed Real Films & Videos

The Films system supports embedding real YouTube, Vimeo, or CDN video URLs:

1. Save the 16:9 video poster thumbnail into `/public/images/films/[category]/`.
2. In [`components/films/FilmsGallery.tsx`](file:///Users/mithran/Documents/My%20projects/MPC/components/films/FilmsGallery.tsx) or [`data/projects.ts`](file:///Users/mithran/Documents/My%20projects/MPC/data/projects.ts), set:
   - `videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'` (or Vimeo URL)
   - `duration: '4:25'`
   - `isPlaceholder: false`
3. The video modal player will render the active player stream instead of the preview banner.

---

## 9. How to Add Real Client Testimonials

Client testimonials are managed in [`components/sections/ClientStories.tsx`](file:///Users/mithran/Documents/My%20projects/MPC/components/sections/ClientStories.tsx).

When real quotes from couples and clients are confirmed:
1. Create a `data/testimonials.ts` data array or update `ClientStories.tsx` with:
   ```typescript
   export interface Testimonial {
     quote: string;
     clientName: string;
     event: string;
     location: string;
   }
   ```
2. Replace the *"Stories from our clients · Coming Soon"* banner with the quotes.
3. The existing gold dividers, serif quote typography, and subtle scroll-fade animations will wrap the real testimonials seamlessly.

---

## 10. Next.js Image Optimization Checklist

- Never load raw uncompressed camera files (`.RAW`, `.CR3`, `.NEF`, or 25MB uncompressed JPEGs).
- Next.js automatically creates responsive `<img srcset>` variants on the fly when configured, but keeping source files under 800 KB ensures fast server build times and instant loading.
- Keep the official logo at [`public/brand/logo-monogram.png`](file:///Users/mithran/Documents/My%20projects/MPC/public/brand/logo-monogram.png) untouched.
