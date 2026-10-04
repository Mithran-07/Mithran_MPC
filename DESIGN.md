# MITHRAN PHOTO CLICKZ — Design System

> Source of truth for all design and development decisions.
> This document governs visual identity, typography, color, spacing, components, animation, and accessibility.

---

## 1. Brand Identity

### Name
- English: **MITHRAN PHOTO CLICKZ**
- Tamil: **மித்ரன் போட்டோ கிளிக்ஸ்**
- Spelling is intentional. Do NOT change to "Clicks" or any other variation.

### Logo
- **M + Horse mark** — a rearing horse integrated into a serif "M"
- Gold metallic treatment on black background
- Located at: `/public/brand/logo-monogram.png` (and `/public/brand/logo.png`)
- **NEVER redesign, redraw, simplify, or replace this logo.**
- Consists of: Large gold serif M with integrated rearing horse, transparent background.

### Proprietor
Lion B. Anand Kumar

### Location
No. 5/6, First Floor, Kamaraj Main Rd, Raja Rajeswari Nagar,
Old Perungalathur, Chennai, Tamil Nadu 600063, India

---

## 2. Color Palette

| Token              | Hex       | CSS Variable            | Usage                        |
|---------------------|-----------|--------------------------|------------------------------|
| Primary Background  | `#050505` | `--color-bg-primary`     | Main page background          |
| Secondary Background| `#0B0B0B` | `--color-bg-secondary`   | Alternate sections, footer    |
| Gold                | `#D4AF37` | `--color-gold`           | Primary accent (STRATEGIC)    |
| Highlight Gold      | `#F4C542` | `--color-gold-highlight` | Hover, active, focus states   |
| Warm White          | `#F5F2EA` | `--color-text-primary`   | Primary text on dark          |
| Muted Text          | `#A8A8A8` | `--color-text-muted`     | Secondary/descriptive text    |

### Gold Usage Rules
- Gold is an **accent only** — never used as a background fill
- Use for: logo, labels, navigation accents, buttons, separators, hover states
- Avoid: large gold areas, gold gradients, gold text everywhere, metallic shimmer effects

---

## 3. Typography

### Font Pairing
| Role         | Font             | Weight       | Style                   |
|--------------|------------------|--------------|--------------------------|
| Display      | Playfair Display | 400, 700     | Elegant editorial serif   |
| Body         | Manrope          | 400, 500, 600| Clean modern sans-serif   |
| Labels/Nav   | Manrope          | 500          | Uppercase, tracked        |

### Type Scale
| Token       | Font             | Size   | Weight | Line Height | Letter Spacing |
|-------------|------------------|--------|--------|-------------|----------------|
| display-xl  | Playfair Display | 96px   | 400    | 1.0         | -0.02em        |
| display-lg  | Playfair Display | 72px   | 400    | 1.05        | -0.01em        |
| display-md  | Playfair Display | 48px   | 400    | 1.1         | 0              |
| heading-lg  | Playfair Display | 36px   | 400    | 1.2         | 0              |
| heading-md  | Manrope          | 24px   | 600    | 1.3         | 0              |
| body-lg     | Manrope          | 18px   | 400    | 1.7         | 0              |
| body-md     | Manrope          | 16px   | 400    | 1.6         | 0              |
| label-lg    | Manrope          | 14px   | 500    | 1.4         | 0.15em         |
| label-md    | Manrope          | 12px   | 500    | 1.4         | 0.2em          |

### Tamil Text
- Use system Tamil font stack: `'Noto Sans Tamil', 'Tamil Sangam MN', sans-serif`
- Ensure proper Unicode rendering

---

## 4. Spacing System

| Token     | Value  | Usage                          |
|-----------|--------|--------------------------------|
| xs        | 4px    | Tight internal spacing          |
| sm        | 8px    | Small gaps                      |
| md        | 16px   | Standard spacing                |
| lg        | 24px   | Component gaps                  |
| xl        | 32px   | Section internal                |
| 2xl       | 48px   | Large gaps                      |
| 3xl       | 64px   | Section transitions             |
| 4xl       | 96px   | Large section padding           |
| 5xl       | 128px  | Hero/CTA vertical padding       |
| section   | 160px  | Between major homepage sections  |

### Content Width
- Max content width: `1200px`
- Full-bleed sections extend to viewport edge
- Side padding: `24px` (mobile), `48px` (tablet), `64px` (desktop)

---

## 5. UI Components

### Buttons
- **Primary**: Gold (#D4AF37) border, transparent background, warm white text
- **Hover**: Gold background, black text
- **Border radius**: 2px (nearly square)
- **Padding**: 16px 32px
- **Font**: Manrope, 13px, uppercase, letter-spacing: 0.15em
- No heavy rounded corners. No pill shapes.

### Section Labels
- Font: Manrope, 12-14px, uppercase, letter-spacing: 0.15-0.2em
- Color: Gold (#D4AF37)
- Often paired with a thin gold divider line

### Gold Divider
- 1px solid gold (#D4AF37)
- Width: 60px (decorative) or full-width (section separator)
- Opacity: 0.6 for subtle usage

### Navigation
- **Desktop**: Fixed top, transparent → blurred black on scroll
  - Left: Logo (40px height) + brand name
  - Right: WORK · STUDIO · FILMS · CONTACT + ENQUIRE button
  - Font: Manrope, 13px, uppercase, letter-spacing: 0.15em
- **Mobile**: Logo left, hamburger right
  - Full-screen overlay menu on open
  - Cinematic fade-in animation

---

## 6. Image Treatment

### Portfolio Images
- No border radius on portfolio images
- Subtle scale on hover: `transform: scale(1.03)` over 600ms ease
- Dark overlay on hover with title reveal
- Support mixed aspect ratios: 3:4, 16:9, 1:1, 2:3, 4:5

### Placeholder Images
- Use solid dark gray (#1A1A1A) backgrounds with subtle centered text
- Never pretend placeholders are real client work
- Pattern: "PHOTOGRAPH" or category name in muted small caps

### Image Architecture
- Use Next.js `<Image>` component
- `OptimizedImage` wrapper for CDN abstraction
- Lazy loading by default
- Blur placeholder data URLs
- Responsive `sizes` attribute on all images

---

## 7. Animation Principles

### Core Values
- **Subtle**: Animations enhance, never distract
- **Cinematic**: Smooth, slow reveals (duration: 600-1000ms)
- **Intentional**: Every animation has a purpose

### Standard Animations
| Animation       | Duration | Easing              | Description                |
|-----------------|----------|---------------------|----------------------------|
| Fade up         | 800ms    | ease-out            | Content reveal on scroll    |
| Image reveal    | 1000ms   | cubic-bezier custom | Clip-path or opacity reveal |
| Hover scale     | 600ms    | ease-out            | Image scale 1.03           |
| Nav transition  | 300ms    | ease                | Background blur on scroll   |
| Page transition | 500ms    | ease-in-out         | Route changes              |
| Menu open       | 600ms    | ease-out            | Full-screen menu reveal     |

### Accessibility
- Respect `prefers-reduced-motion: reduce`
- Disable all transform/opacity animations when reduced motion is preferred
- Maintain content visibility — never delay important content

---

## 8. Responsive Breakpoints

| Breakpoint | Width   | Description      |
|------------|---------|------------------|
| mobile     | 390px   | iPhone 14 Pro    |
| tablet     | 768px   | iPad portrait    |
| laptop     | 1024px  | Small laptop     |
| desktop    | 1440px  | Standard desktop |
| wide       | 1920px  | Large monitor    |

### Responsive Rules
- Mobile is NOT a shrunk desktop — it has its own composition
- Photography remains large and immersive at all sizes
- Navigation collapses to hamburger below 1024px
- Section padding reduces proportionally on mobile
- Touch targets minimum 44px

---

## 9. Gallery/Portfolio Rules

### Masonry Layout
- Use CSS Grid with variable row spans for masonry effect
- NOT a standard uniform card grid
- Images should have different visual weights
- Mix portrait and landscape orientations
- Desktop: 2-3 columns with asymmetric placement
- Mobile: Single column with occasional 2-up layouts

### Category Filtering
- Smooth opacity/position transition on filter change
- Active category in gold, others in muted text
- No jarring layout shifts

---

## 10. Accessibility

- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Keyboard-navigable with visible focus states (gold outline)
- Color contrast: warm white on black exceeds WCAG AA
- All images require descriptive `alt` text
- Forms use proper `<label>` elements
- ARIA attributes only where HTML semantics are insufficient
- Skip-to-content link for keyboard users
- `prefers-reduced-motion` support

---

## 11. SEO

- Title format: `Page Name | Mithran Photo Clickz`
- Meta descriptions: natural, location-aware
- Open Graph images: 1200×630
- JSON-LD: LocalBusiness schema
- Canonical URLs on all pages
- `robots.txt` and `sitemap.xml`
