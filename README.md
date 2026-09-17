# Aarvana Verde — Premium Real Estate Website

A production-grade, portfolio-quality real estate website for **Aarvana Developers**, built with modern frontend architecture and premium design principles.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | React framework with App Router |
| [TypeScript 5](https://typescriptlang.org) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [React 19](https://react.dev) | UI library |
| [ESLint 9](https://eslint.org) | Code quality |

### Planned Additions (UI Phase)

| Library | Purpose |
|---|---|
| [Framer Motion](https://motion.dev) | Page transitions, scroll animations, reveals |
| [GSAP](https://gsap.com) | Advanced scroll-linked choreography (only if needed) |

---

## Getting Started

### Prerequisites

- Node.js 18.17+ (LTS recommended)
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## Architecture

### Folder Structure

```
aarvana-verde/
├── app/                    # Next.js App Router pages & layouts
│   ├── layout.tsx          # Root layout (fonts, Navbar, Footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & design tokens
│   ├── robots.ts           # SEO robots.txt
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── projects/           # Projects listing & detail pages
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx # Dynamic project routes
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
│
├── components/             # React components
│   ├── layout/             # Navbar, Footer, PageTransition
│   ├── ui/                 # Reusable UI primitives
│   ├── home/               # Home page sections
│   ├── projects/           # Project page components
│   ├── forms/              # Form components
│   ├── motion/             # Animation primitives
│   └── sections/           # Section wrapper utilities
│
├── config/                 # Centralized configuration
│   ├── site.config.ts      # Company, contact, SEO config
│   └── navigation.config.ts
│
├── data/                   # Structured content data
│   ├── projects.ts         # Project data & accessors
│   ├── amenities.ts        # Amenity definitions
│   ├── testimonials.ts
│   ├── location.ts
│   └── navigation.ts
│
├── hooks/                  # Custom React hooks
│   ├── useMediaQuery.ts
│   ├── useReducedMotion.ts
│   └── useScrollProgress.ts
│
├── lib/                    # Utilities & helpers
│   ├── utils.ts            # cn(), formatPrice(), slugify(), etc.
│   ├── constants.ts        # Design tokens, breakpoints, z-index
│   └── metadata.ts         # SEO metadata generators
│
├── types/                  # TypeScript type definitions
│   ├── project.ts          # Project, FloorPlan, Gallery types
│   ├── site.ts             # SiteConfig, ContactInfo types
│   └── common.ts           # NavItem, Amenity, Testimonial types
│
├── styles/                 # Additional stylesheets
│   ├── typography.css      # Fluid type scale
│   └── animations.css      # Keyframes & animation utilities
│
└── public/                 # Static assets
    ├── images/
    │   ├── projects/       # Project-specific imagery
    │   ├── architecture/   # Architectural renders
    │   ├── interiors/      # Interior photography
    │   ├── lifestyle/      # Lifestyle imagery
    │   ├── amenities/      # Amenity photos
    │   └── locations/      # Location/map assets
    ├── videos/             # Video assets
    ├── icons/              # SVG icons
    └── documents/          # PDFs (floor plans, brochures)
```

### Architectural Principles

1. **Separation of Concerns** — Content in `data/`, types in `types/`, UI in `components/`, logic in `lib/`
2. **Data-Driven Content** — Project information is structured data, not hardcoded in components
3. **Server-First** — Server components by default, `"use client"` only where interaction requires it
4. **Centralized Configuration** — All client-specific values in `config/site.config.ts`
5. **Type Safety** — Comprehensive TypeScript interfaces for all data structures
6. **Composable Components** — Small, focused, reusable components with proper prop typing
7. **Accessible by Default** — Semantic HTML, ARIA labels, skip links, reduced motion support
8. **SEO Foundation** — Metadata generators, dynamic sitemap, robots.txt, Open Graph

---

## Asset Organization

| Directory | Content |
|---|---|
| `public/images/projects/` | Project-specific images (cover, thumbnail, gallery) |
| `public/images/architecture/` | Architectural renders and exterior shots |
| `public/images/interiors/` | Interior design photography |
| `public/images/lifestyle/` | Lifestyle and community imagery |
| `public/images/amenities/` | Amenity photographs |
| `public/images/locations/` | Location maps and area imagery |
| `public/videos/` | Video assets (hero, walkthroughs) |
| `public/documents/` | PDFs — floor plans, brochures, RERA docs |
| `public/icons/` | Custom SVG icons |

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production site URL | Yes |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Google Maps API key | For maps |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Form submission endpoint | For forms |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | For analytics |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID | For tag management |

---

## Implementation Phases

### Phase 1 — Foundation ✅
Project architecture, types, data layer, configuration, routing, SEO foundation.

### Phase 2 — Design System
Color palette, typography, component styling, button variants, spacing system.

### Phase 3 — Core UI
Navbar, Footer, Hero, key home sections, responsive layouts.

### Phase 4 — Motion & Animation
Framer Motion integration, scroll reveals, page transitions, parallax effects.

### Phase 5 — Project Pages
Project detail pages, floor plan explorer, gallery, location map, enquiry forms.

### Phase 6 — Polish & Optimization
Performance audit, accessibility testing, SEO validation, image optimization.

---

## License

Private — All rights reserved.
