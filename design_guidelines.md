# Design Guidelines: Dharma Décor
## E-commerce Platform for Brass, Bronze & Wood Artisan Home Artifacts

---

## Design Approach: Reference-Based Luxury Artisan E-commerce

**Primary Inspiration:** Etsy (artisan authenticity) + Anthropologie (sophisticated aesthetics) + Temple architecture (Hindu spiritual elements)

**Core Philosophy:** Merge the warmth of handcrafted artisan goods with the elegance of English home décor and the spiritual richness of Hindu symbolism. Create a premium, tactile digital experience that honors traditional craftsmanship.

**Color Palette:** Purple/Gold/Bronze - Representing royalty, divine spirituality (purple), prosperity and warmth (gold), and artisan craftsmanship (bronze)

---

## Typography System

**Serif Family (Headings & Display):**
- Google Fonts: "Playfair Display" for elegance and classic sophistication
- H1: 4xl to 6xl, font-weight 700, letter-spacing tight
- H2: 3xl to 4xl, font-weight 600
- H3: 2xl to 3xl, font-weight 600
- Product titles: xl to 2xl, font-weight 600

**Sans-Serif Family (Body & UI):**
- Google Fonts: "Inter" for clarity and modern readability
- Body text: base to lg, font-weight 400, line-height relaxed
- Captions/labels: sm, font-weight 500
- Buttons/CTAs: base, font-weight 600, uppercase tracking-wide

**Special Accents:**
- Use subtle decorative elements (lotus motifs, geometric patterns) as typographic separators

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 8, 12, 16, 24
- Tight spacing: p-2, gap-4 (product grids, filter chips)
- Standard spacing: p-8, gap-8 (section padding, card spacing)
- Generous spacing: py-16 to py-24 (between major sections)

**Grid Systems:**
- Product Catalog: grid-cols-1 md:grid-cols-3 lg:grid-cols-4 with gap-8
- Featured Collections: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Filter Sidebar: Fixed left column (280px) on desktop, collapsible drawer on mobile

**Container Strategy:**
- Max-width: max-w-7xl for main content
- Full-bleed: Hero sections and image galleries
- Constrained: Product grids and text content

---

## Component Library

### Navigation Header
- Sticky top bar with logo (left), search bar (center), cart/account icons (right)
- Secondary navigation: Category mega-menu with material/room/type subdivisions
- Add subtle shadow on scroll for depth

### Hero Section (Homepage)
- Full-viewport height hero with large lifestyle image showcasing products in situ
- Overlay: Brand tagline in Playfair Display with blurred-background CTA button
- Subtle parallax scroll effect on background image

### Product Cards
- Aspect ratio: 4:3 for product images
- Hover state: Gentle scale transform (scale-105), reveal secondary image or quick-add button
- Card content: Product image, title, material badges (small pills), price
- Video thumbnail: Play icon overlay, autoplay on hover (muted)

### Filter Sidebar
- Accordion-style filter groups (Material, Room, Type, Price, Size, etc.)
- Checkboxes with custom styling (brass-toned accent)
- Active filter chips at top with clear-all option
- Sticky positioning during scroll

### Product Detail Page
- Left: Large image gallery with thumbnail carousel below, video autoplay in gallery rotation
- Right: Product title, price, material composition, detailed description, add-to-cart CTA
- Below fold: Craftsmanship story, specifications table, related products carousel

### Footer
- Three-column layout: About/Philosophy, Quick Links, Newsletter signup
- Incorporate lotus or trishul motif as decorative divider
- Social media icons, trust badges (handcrafted guarantee, secure payment)

---

## Images Strategy

**Hero Image (Homepage):**
- Large, high-quality lifestyle photograph: Brass diya arrangement on wooden mantle with soft natural lighting, English-style interior background
- Dimensions: Full viewport width, 80-90vh height
- Treatment: Subtle warm overlay to enhance brass/bronze tones

**Product Images (Catalog):**
- Clean, white or subtle textured backgrounds
- Multiple angles: Front, detail shots, in-context lifestyle images
- Consistent lighting to showcase metallic finishes

**Category Banners:**
- Room-specific imagery: Pooja room with brass diyas, living room with bronze sculptures, dining with wooden artifacts
- Overlay text: Category name in large Playfair Display

**About Page:**
- Artisan workshop photos: Craftspeople working with brass, bronze, wood
- Hindu temple architecture details as visual inspiration
- Material close-ups showcasing textures

**Icon Library:** Heroicons (outline style) for UI elements, custom brass-toned treatment

---

## Page-Specific Layouts

**Homepage Flow:**
1. Hero with brand statement
2. Featured Collections carousel (3-4 items)
3. Shop by Material section (3-column grid with category cards)
4. Brand Story section (split layout: text + artisan image)
5. Shop by Room section (masonry grid)
6. Newsletter signup with decorative lotus element

**Catalog Page:**
- Sidebar filters (left, 280px fixed)
- Product grid (main area, 3-4 columns responsive)
- Sort dropdown (top right)
- Breadcrumb navigation

**Product Detail:**
- Two-column split (gallery left, details right)
- Full-width specifications and craftsmanship story below
- Related products carousel at bottom

**About Page:**
- Hero image: Workshop or temple-inspired backdrop
- Mission statement (centered, large typography)
- Three-pillar section: Hindu Ideology, English Elegance, Artisan Craft (grid layout)
- Craftsman profiles with photos

**Contact Page:**
- Split layout: Contact form (left), brand information + map/location (right)
- Include inquiry form with product interest dropdown

---

## Animations & Interactions

**Minimal & Purposeful:**
- Product card hover: Scale-105 transform, 300ms ease
- Filter accordion: Smooth expand/collapse
- Image gallery: Smooth crossfade transitions
- Page transitions: Subtle fade-in for new content loads
- **Avoid:** Excessive scroll-triggered animations, heavy parallax, distracting effects

---

## Accessibility Standards
- Maintain 4.5:1 contrast ratios
- Keyboard navigation for all interactive elements
- ARIA labels for icon-only buttons
- Focus indicators with brass-toned outline
- Alt text for all product images describing material and design

---

**Brand Identity Details:**
- **Name:** Dharma Décor
- **Logo Concept:** Stylized lotus flower integrated with trishul (trident), rendered in line art, brass-toned accent
- **Tagline:** "Where Tradition Meets Elegance" or "Sacred Craftsmanship, Timeless Design"

This design creates a premium, spiritually-grounded e-commerce experience that honors Hindu craftsmanship while appealing to contemporary home décor sensibilities.