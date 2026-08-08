# Cake Studio — Reusable Cake Business Website Template

A single-page, conversion-focused marketing website template for bespoke cake makers and bakeries. Pre-configured with real content for **Cakes by Iram** (Birmingham, UK).

Built with **Next.js 14 (App Router)**, **TypeScript**, and **CSS Modules**. Zero external UI library or photo dependencies — all icons and hero illustrations are pure inline SVG.

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Typecheck & Build
```bash
npm run typecheck
npm run build
```

---

## Reskinning for a New Client

All business copy, contact details, social links, flavour items, process steps, gallery tiles, and colour themes live in a single typed configuration file:

📁 **`data/site.config.ts`**

To re-skin the website for another client, update `data/site.config.ts`. No component code changes are required.

---

## Design System & Theme Configuration

### 1. Colour Tokens

Color variables are mirrored between `data/site.config.ts` and `app/globals.css`.

| Token | Default Hex | Role in Template |
|---|---|---|
| `--plum` | `#4A1942` | Headlines, footer background, dark process section |
| `--berry` | `#C24868` | Primary accent — CTAs, buttons, links |
| `--gold` | `#C79A4B` | Hairlines, numerals, sparkles, gold-leaf accents |
| `--blush` | `#F3DCE0` | Soft section background (Flavours & CTA), cards |
| `--ivory` | `#FBF5EC` | Main page background |
| `--paper` | `#FFFDF9` | Card surfaces & white highlights |
| `--ink` | `#2B1B22` | Body text — warm near-black |

#### Palette Selection Rule for Reskins:
1. Choose **one deep dark shade** (`plum`) for headlines, process section, and footer.
2. Choose **one vibrant accent** (`berry`) for buttons and interactive CTAs.
3. Choose **one warm metallic/soft accent** (`gold`) for highlights and hairline accents.
4. Choose **pale tints** (`blush` and `ivory`) in the same color family for background warmth.

---

### 2. Typography Rules (3 Fonts Only)

- **Display (`Fraunces`)** — Used exclusively for headings (`h1`, `h2`, `h3`). Warm, old-style serif with italic accent support.
- **Body (`Work Sans`)** — Used for all paragraph text, navigation, buttons, and labels. Clean and readable.
- **Script (`Caveat`)** — Reserved strictly for two elements: the header/footer logo wordmark and the process step numerals (`1`, `2`, `3`).

To swap brand fonts, update `app/layout.tsx` using `next/font/google` and bind them to `--font-display`, `--font-body`, and `--font-script`.

---

### 3. Automatic Re-colouring Features

- **Piped Buttercream Scallop Divider (`Scallop.tsx`)**: Reusable component generating radial-gradient buttercream curves. It accepts the `color` property of the introduced section and automatically adapts to any palette.
- **Hero Layered Cake SVG (`icons.tsx`)**: Uses CSS custom properties (`var(--plum)`, `var(--berry)`, `var(--gold)`, `var(--blush)`, etc.). Changing theme variables automatically recolours the cake layers, icing drops, and flames.

---

### 4. Swapping Gallery Placeholders to Real Photography

To replace a placeholder tile with a real photograph:
1. Add your photo to `public/images/` (e.g. `public/images/wedding-cake.jpg`).
2. Open `data/site.config.ts`.
3. Locate the tile item in `gallery.tiles` and add the `image` property:

```typescript
{
  id: "g1",
  size: "large",
  tag: "Wedding Tier",
  title: "Botanical 3-Tier Wedding Cake",
  icon: "wedding",
  image: "/images/wedding-cake.jpg" // <- Drop real image path here
}
```
If `image` is present, `Gallery.tsx` will automatically render an `<img>` tag while preserving the pill tag and hover effects.

---

## File Structure

```
app/
  layout.tsx        — Loads Fraunces, Work Sans, Caveat fonts & sets metadata
  page.tsx          — Assembles 6 sections + Header, Footer & Scallop dividers
  globals.css       — Design system tokens, focus states & shared utilities
components/
  Header.tsx        — Sticky translucent header & mobile navigation drawer
  Hero.tsx          — Two-column hero with display text & SVG cake centerpiece
  Flavours.tsx      — 4-column responsive grid with 8 flavour cards
  Gallery.tsx       — Asymmetric photo placeholder grid with tag pills
  Process.tsx       — Dark plum section with script numerals (1/2/3)
  Quote.tsx         — Testimonial pause-beat strip
  CTA.tsx           — Soft closing section with Instagram DM & Email CTAs
  Footer.tsx        — Dark footer with studio info, quick links & credits
  Scallop.tsx       — Buttercream edge divider component
  Reveal.tsx        — IntersectionObserver scroll-reveal wrapper
  icons.tsx         — Inline SVG icons & hero 4-layer cake illustration
data/
  site.config.ts    — Single source of truth for all content and palette tokens
```
