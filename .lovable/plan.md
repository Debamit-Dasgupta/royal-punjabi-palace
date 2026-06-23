
# Shahi Pind — The Royal Taste of Punjab

Assets received — logo + 4 Instagram creatives. Brand decoded directly from them:

**Confirmed palette** (from posts): deep royal purple `#1A0445` / `#2B0B63`, saffron orange `#F08A1E` / `#E57C12`, warm cream `#F7E8CF`, soft gold star accents. Bold slab serif (Alfa Slab One / Bevan style). Dotted decorative borders. Sunburst/radial-ray backgrounds. Ornamental floral corner motifs. Brass/copper food vessels glowing on purple.

## Build
- **Tokens** in `src/styles.css` via `@theme inline` (oklch): `background` deep purple, `foreground` cream, `primary` saffron, `accent` gold, `secondary` deep indigo, plus copper / cream / glow shadow tokens. No raw colors in components.
- **Fonts** loaded via `@fontsource`: Alfa Slab One (display), Bevan (sub-display), Manrope (body).
- **Logo** uploaded to CDN as `src/assets/logo.jpg.asset.json`.
- **Motion** via `motion` (Framer) — fade-up reveals, image scale-in, gold-shimmer button hover, breathing WhatsApp FAB, pulsing reserve CTA, embroidery-underline nav.
- **Ornaments** as inline SVG components: `SunburstBg`, `DottedFrame`, `FloralCorner`, `JharokhaDivider`, `RoyalBadge`, `MandalaTexture`, `EmbroideryUnderline`.

## Pages (TanStack file routes)
`/` Home · `/about` · `/menu` · `/gallery` · `/celebrations` · `/reviews` · `/contact` · `/reservation` · `/privacy` · `/terms` · 404

Shared `__root.tsx`: royal header (logo + nav with embroidery underline), royal footer (hours · phone · WhatsApp · location · socials). Floating stack: WhatsApp (breathing), Call, Reserve (pulse), Scroll-to-top.

### Home
Cinematic hero (food/interior image, royal purple gradient overlay, sunburst rays) → "Taste Punjab Like Royalty." + dual CTAs + badge row (4.7★ · 523+ Reviews · Family · Drive-Through · Dine-In · Delivery) → Bold hook band "NOT JUST DINNER. A ROYAL EXPERIENCE." (sunburst bg, dotted frame) → Why Shahi Pind (6 brass-plate cards) → Featured Signature Dishes (8 cards: image, desc, spice level, veg/non-veg) → About preview (jharokha divider) → Gallery preview masonry → Events (Birthdays · Anniversaries · Corporate · Kitty · IPL Live · Lohri · Baisakhi · Diwali · New Year · Weddings) → Reviews slider → "Royal Journey" static Instagram grid (9 tiles → IG profile) → Location + Google Maps → Emotional CTA band "Because Your Special Moments Deserve A Stylish Setting." → Footer.

### Other pages
- **About**: Our Story, Royal Taste of Punjab, Mission, Vision, Chef Philosophy, Fresh Ingredients, Interior gallery
- **Menu**: Category tabs (Starters · Punjabi Specials · Veg · Non-Veg · Tandoor · Breads · Rice · Chinese · Desserts · Beverages), search, veg/non-veg filter, Popular & Chef Recommended badges. Data in `src/data/menu.ts`.
- **Gallery**: filterable masonry (Restaurant / Food / Interior / Events / Families / Celebrations)
- **Celebrations**: Corporate · Birthday · Anniversary · Private Dining · IPL · Festivals + booking CTA
- **Reviews**: Highlighted Google reviews grid + rating summary
- **Contact**: Address · phone · hours · map · contact form (WhatsApp handoff) · Call + WhatsApp buttons
- **Reservation**: Premium form (Name · Phone · Guests · Date · Time · Occasion · Message) → opens `wa.me/918962612121` with prefilled booking text
- **Privacy / Terms / 404**: themed copy

## Forms (no backend)
Zod validation → build formatted WhatsApp message → open `https://wa.me/918962612121?text=…`. Toast confirmation.

## SEO
Per-route `head()` (unique title/description/og/canonical). Root `Restaurant` JSON-LD (address, phone, hours 12:00–23:30, priceRange ₹400–₹1600, aggregateRating 4.7/523, servesCuisine Punjabi). BreadcrumbList JSON-LD on inner pages. `public/robots.txt` + `src/routes/sitemap[.]xml.ts`.

## A11y / perf
Lazy images with width/height, semantic landmarks, AA contrast on purple/cream, focus rings, `prefers-reduced-motion` disables shimmer/pulse.

## File layout
- `src/components/site/` — Header, Footer, FloatingActions, SectionHeading, BrassCard, OrnamentalDivider
- `src/components/ornaments/` — Punjabi motif SVGs
- `src/components/home/` — Hero, HookBand, WhyUs, SignatureDishes, AboutPreview, GalleryPreview, Events, Reviews, InstaGrid, LocationCard, CTABand
- `src/data/` — menu, dishes, reviews, events, gallery, instagram
- `src/lib/whatsapp.ts` — wa.me URL builder
- `src/main.tsx` (or `src/start.ts` shell) — `@fontsource` imports

## Out of scope
Live Instagram API, online ordering, payments, multilingual, CMS, admin.
