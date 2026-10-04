# IMAGE SOURCES

This document tracks every externally sourced image used on the MITHRAN PHOTO CLICKZ website.
All images listed here are licensed under the [Pexels License](https://www.pexels.com/license/) which permits free commercial use with no attribution required (though appreciated).

> **IMPORTANT:** None of the images below represent MITHRAN PHOTO CLICKZ client work.
> They are used exclusively as **atmospheric / brand visuals (Category B)** to provide visual richness
> while the studio builds its original photography library.

---

## Asset Registry

| Asset | Section | Source | Photographer | Original URL | Pexels ID | License |
|---|---|---|---|---|---|---|
| `hero-cinematic-01.jpg` | Homepage Hero background | Pexels | Rene Asmussen | https://www.pexels.com/photo/3419692/ | 3419692 | Pexels Free |
| `hero-cinematic-02.jpg` | Featured Story atmospheric | Pexels | Daria Shevtsova | https://www.pexels.com/photo/3379934/ | 3379934 | Pexels Free |
| `hero-cinematic-03.jpg` | Final CTA background | Pexels | Tuur Tisseghem | https://www.pexels.com/photo/1024960/ | 1024960 | Pexels Free |
| `studio-interior-01.jpg` | The Studio section background | Pexels | Dương Nhân | https://www.pexels.com/photo/1024993/ | 1024993 | Pexels Free |
| `studio-interior-02.jpg` | Studio page — leadership placeholder bg | Pexels | David Bartus | https://www.pexels.com/photo/2253870/ | 2253870 | Pexels Free |
| `social-01.jpg` | Social Showcase grid tile 1 | Pexels | Godisable Jacob | https://www.pexels.com/photo/2608519/ | 2608519 | Pexels Free |
| `social-02.jpg` | Social Showcase grid tile 2 | Pexels | Asiama Junior | https://www.pexels.com/photo/1657329/ | 1657329 | Pexels Free |
| `social-03.jpg` | Social Showcase grid tile 3 | Pexels | Daria Shevtsova | https://www.pexels.com/photo/3379933/ | 3379933 | Pexels Free |
| `social-04.jpg` | Social Showcase grid tile 4 | Pexels | Craig Adderley | https://www.pexels.com/photo/3244513/ | 3244513 | Pexels Free |
| `social-05.jpg` | Social Showcase grid tile 5 | Pexels | Isabella Mendes | https://www.pexels.com/photo/1391498/ | 1391498 | Pexels Free |
| `social-06.jpg` | Social Showcase grid tile 6 | Pexels | Samad Delir | https://www.pexels.com/photo/3812742/ | 3812742 | Pexels Free |
| `service-portrait.jpg` | Services section (reserved) | Pexels | Moose Photos | https://www.pexels.com/photo/3348748/ | 3348748 | Pexels Free |
| `service-films.jpg` | Services section (reserved) | Pexels | Donald Tong | https://www.pexels.com/photo/787961/ | 787961 | Pexels Free |

---

## Image Classification

| Category | Description | Examples |
|---|---|---|
| **A — Real Studio Work Required** | Only MITHRAN PHOTO CLICKZ original photography. Keep as premium placeholder until supplied. | Selected Work, Portfolio cards, `/work/[slug]` gallery |
| **B — Atmospheric / Brand Visual** | Licensed stock imagery for visual richness. Clearly NOT presented as studio work. | Hero, FeaturedStory, FinalCTA, SocialShowcase, TheStudio |
| **C — Studio / Business** | Prefer real photos. Placeholder with ambient bg until real images supplied. | Studio leadership portrait |
| **D — Films** | Coming Soon treatment until real films exist. | Films page, Films homepage section |

---

## Sections With Intentional Placeholders (Category A)

These sections intentionally remain as explicit premium placeholders.
**Do NOT populate with stock photography** — they must show only real MITHRAN PHOTO CLICKZ work.

- `SelectedWork` section — all 8 project cards (`isPlaceholder: true` in `data/projects.ts`)
- `WorkGallery` on `/work` page — all project thumbnails
- `/work/[slug]` hero and gallery — all project detail pages
- `ClientStories` — "Coming Soon" text treatment (no fake testimonials)

---

## Replacement Priority (When Real Photography Is Available)

1. **HIGH**: `/images/hero/hero-cinematic-01.jpg` → Replace with actual MITHRAN PHOTO CLICKZ editorial hero shot
2. **HIGH**: `/images/studio/studio-interior-02.jpg` (leadership bg) → Replace with Lion B. Anand Kumar portrait
3. **HIGH**: `/images/studio/studio-interior-01.jpg` → Replace with actual studio interior photo
4. **MEDIUM**: `/images/social/social-*.jpg` (6 tiles) → Replace with actual Instagram grid screenshots
5. **MEDIUM**: `/images/hero/hero-cinematic-02.jpg` (FeaturedStory) → Replace with actual featured project image
6. **LOW**: `/images/hero/hero-cinematic-03.jpg` (FinalCTA) → Atmospheric, can remain or replace

---

## Notes

- All stock images are stored locally in `/public/images/` (not hotlinked) to ensure offline builds and performance.
- All stock images are served with `next/image` for automatic WebP conversion and responsive sizing.
- Stock images have `aria-hidden="true"` and empty `alt=""` as they are purely decorative.
- Portfolio sections (`SelectedWork`, `WorkGallery`, work detail pages) show `bg-dark-gray` placeholders and must **never** use stock photography.
