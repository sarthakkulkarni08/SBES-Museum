# Biology Museum QR Scanner - Design Guidelines

## Design Approach

**Selected Approach**: Hybrid - Educational Reference + Material Design System

Drawing inspiration from Google Arts & Culture's museum aesthetic combined with Material Design's clarity for data-heavy educational content. The design prioritizes mobile-first scanning experience while maintaining visual sophistication that respects the academic context.

**Key Design Principles**:
- Scientific clarity with visual warmth
- Mobile-optimized for on-the-go museum scanning
- Educational engagement without gamification
- Professional trustworthiness for academic credibility

---

## Core Design Elements

### A. Color Palette

**Light Mode**:
- Primary: `142 76% 36%` (Deep teal - scientific/natural)
- Primary Hover: `142 76% 28%`
- Background: `0 0% 98%` (Off-white for reduced eye strain)
- Surface: `0 0% 100%` (White cards)
- Text Primary: `220 13% 18%`
- Text Secondary: `220 9% 46%`
- Border: `220 13% 91%`
- Accent (sparingly): `24 100% 50%` (Warm amber for CTAs)

**Dark Mode**:
- Primary: `142 70% 45%`
- Primary Hover: `142 70% 55%`
- Background: `220 13% 10%`
- Surface: `220 13% 15%`
- Text Primary: `220 13% 95%`
- Text Secondary: `220 9% 65%`
- Border: `220 13% 25%`
- Accent: `24 100% 60%`

### B. Typography

**Font Families** (via Google Fonts):
- Headings: `Inter` (weights: 600, 700)
- Body: `Inter` (weights: 400, 500)
- Scientific Names: `Crimson Pro` (italic, 400) - serif for taxonomic authenticity

**Scale**:
- H1: `text-4xl lg:text-5xl font-bold` (Organism names)
- H2: `text-2xl lg:text-3xl font-semibold` (Section headers)
- H3: `text-xl font-semibold` (Category labels)
- Body: `text-base leading-relaxed` (Descriptions)
- Scientific: `text-lg italic font-serif` (Taxonomy)
- Caption: `text-sm text-secondary` (Metadata)

### C. Layout System

**Spacing Primitives**: Tailwind units of **2, 4, 8, 16** for consistent rhythm
- Micro spacing: `p-2, gap-2` (tight elements)
- Standard spacing: `p-4, gap-4, m-4` (cards, buttons)
- Section spacing: `py-8, px-4` (mobile), `py-16, px-8` (desktop)
- Large gaps: `gap-16` (between major sections)

**Grid System**:
- Mobile: Single column with `max-w-2xl mx-auto px-4`
- Tablet: 2-column grids for organism cards `md:grid-cols-2`
- Desktop: 3-column max `lg:grid-cols-3` for card grids
- Info pages: 2-column split `lg:grid-cols-[2fr_1fr]` (content + sidebar)

### D. Component Library

**Navigation**:
- Fixed header with transparent backdrop-blur on scroll
- Logo + Search bar (prominent) + Admin link (desktop)
- Mobile: Bottom navigation with Home/Scanner/Admin icons

**QR Scanner Component**:
- Full-screen camera view with centered scanning frame
- Rounded corner indicators showing scan area
- Bottom sheet with instructions: "Point camera at QR code"
- Success animation: Gentle scale + fade to organism page

**Organism Cards** (Homepage Grid):
- Aspect ratio 4:3 image with object-cover
- Gradient overlay on image bottom for text legibility
- Scientific name in italic below common name
- Hover: Subtle lift (`hover:shadow-lg hover:-translate-y-1`)
- Classification badge (Kingdom) top-right corner

**Organism Detail Page**:
- Hero: Large specimen image (16:9) with gradient overlay
- Sticky header with organism name + scientific name
- Tabbed sections: Overview / Morphology / Physiology / Classification / Gallery
- Info cards with icon + label + value layout
- Image gallery: Masonry grid (2 columns mobile, 3-4 desktop)

**Admin Panel**:
- Clean table view for organism list
- Action buttons: Edit (primary), Delete (danger outline), Generate QR (accent)
- Form layout: 2-column on desktop with proper spacing
- Image upload with drag-drop zone
- QR code display: Large centered with download button below

**Buttons**:
- Primary: Solid teal with white text, rounded-lg
- Secondary: Outline with border-2
- Danger: Red outline for delete actions
- Icon buttons: Circular with hover:bg-surface
- QR download: Accent color with download icon

**Forms**:
- Input fields: `rounded-lg border-2 px-4 py-2` with focus ring
- Labels: `text-sm font-medium mb-2` above inputs
- Dark mode: Inputs with `bg-surface` and proper contrast
- Textarea: Minimum 4 rows for descriptions
- Required fields marked with asterisk

**Cards**:
- Rounded corners: `rounded-xl`
- Elevation: `shadow-md` default, `shadow-xl` on hover
- Padding: `p-8` for content cards
- Border: Subtle `border border-border` in dark mode

**Badges/Tags**:
- Classification levels: Small rounded pills with category colors
- Kingdom badges: Different hues (Plant: green, Animal: blue, etc.)
- Font: `text-xs font-medium px-3 py-1 rounded-full`

**Data Display**:
- Key-value pairs: Grid layout `grid-cols-2 gap-4`
- Label: `text-sm text-secondary uppercase tracking-wide`
- Value: `text-base font-medium`
- Dividers: `border-t border-border` between sections

### E. Animations

**Minimal & Purposeful**:
- Page transitions: Simple fade (200ms)
- QR scan success: Scale pulse + check icon
- Card hover: Smooth lift `transition-transform duration-200`
- Loading states: Subtle skeleton screens (pulse animation)
- No scroll-triggered animations or parallax

---

## Images

**Hero Image**: No traditional hero on homepage - lead with search bar + organism grid immediately

**Organism Images**:
1. **Card Thumbnails**: Specimen photos with consistent aspect ratio (4:3), centered composition
2. **Detail Page Hero**: Large specimen image (16:9) showing full organism in natural/preserved state
3. **Gallery Images**: Multiple angles, close-ups of morphological features, habitat photos
4. **Placeholder**: Use neutral gray background with organism icon for missing images

**Image Treatment**:
- All images: `object-cover rounded-lg` for consistency
- Gradient overlays: `from-transparent to-black/60` on card images for text readability
- Lazy loading with blur-up placeholder effect
- Alt text required for accessibility (auto-generated from organism name)

**Image Placement**:
- Homepage: Organism cards with image dominance
- Scanner: Camera feed full-screen
- Detail page: Large hero image, gallery grid below
- Admin: Thumbnail preview in table, large preview in edit form

---

## Page-Specific Layouts

**Homepage**: Search bar top, grid of organism cards (responsive columns), sticky "Scan QR" FAB bottom-right

**Scanner Page**: Full-screen camera with overlay frame, bottom sheet instructions, auto-navigate on successful scan

**Organism Detail**: Hero image → Sticky nav tabs → Scrollable content sections → Gallery grid → Related organisms suggestions

**Admin Dashboard**: Header with "Add Organism" button, searchable table, quick actions, pagination

**Admin Form**: Two-column layout (basic info left, images/taxonomy right), submit actions bottom

This design balances educational professionalism with modern UX patterns, optimized for the primary mobile scanning use case while maintaining desktop functionality for content management.