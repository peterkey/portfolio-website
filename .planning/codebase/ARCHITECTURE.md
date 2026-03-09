# Next.js 14 Portfolio Website — Architecture

## Overview

Single-page application (SPA) portfolio built with **Next.js 14 App Router**, TypeScript, Tailwind CSS, and Framer Motion. Implements a **NOC (Network Operations Center)** design theme — permanently dark, with cyan/orange accent colors and an animated SVG network topology visualization.

## Architectural Pattern

### Framework & Rendering
- **Next.js 14 App Router**: Modern React 18 architecture using the `src/app` directory
- **Client Components Only**: All interactive components marked `"use client"` — no server-side component rendering
- **Entry Point**: `src/app/page.tsx` — the home route
- **Single Route**: Entire portfolio is one page with hash-anchor navigation

### Styling Architecture
- **Utility-First CSS**: Tailwind CSS v3.4.1 with custom configuration
- **Design System**: NOC theme with custom color tokens under `trueAutumn.*` in `tailwind.config.js`
- **Global Styles**: `src/app/globals.css` — custom utilities (`.glass`, `.glow-card`, `.eyebrow`, `.gradient-text`, `.status-led`, etc.)
- **Fonts**: Three Google fonts via `layout.tsx`:
  - **Rajdhani** (`--font-rajdhani`) — headings/display (semi-condensed tech feel)
  - **IBM Plex Sans** (`--font-ibm`) — body text
  - **IBM Plex Mono** (`--font-mono`) — eyebrows, labels, badges, code

### State Management
- **Minimal Client State**: Per-component state for UI toggles, form, filtering
- **Framer Motion**: Entrance/scroll-triggered animations
- **React Hooks**: `useState`, `useEffect`, `useRef` for component-level state only

---

## Data Flow & Layers

### Page Composition Layer (`src/app/page.tsx`)

Root page orchestrates 12 sections in fixed sequence. No data is passed between them — each section is self-contained.

```
Navbar → HeroSection → AboutSection → ExperienceTimeline →
ProjectSection → CaseStudiesSection → ToolsSection →
CertificationsSection → AchievementsSection → TestimonialsSection →
EnhancedContactSection → Footer
```

### Component Layer (`src/app/components/`)

**Active Section Components** (10):
1. `HeroSection` — Hero with animated SVG network topology, type animation, CTAs
2. `AboutSection` — Bio, technical skills, soft skills, goals
3. `ExperienceTimeline` — Vertical timeline with 4 entries (work, projects, education)
4. `ProjectSection` — Project gallery with tag filtering; uses `ProjectCard` and `ProjectTag`
5. `CaseStudiesSection` — Problem→Process→Solution→Result case study cards
6. `ToolsSection` — Tool categories with descriptions
7. `CertificationsSection` — Certification tracking with progress bars
8. `AchievementsSection` — Animated impact metrics (`react-animated-numbers`, SSR disabled)
9. `TestimonialsSection` — Professional references
10. `EnhancedContactSection` — Contact form with Resend API integration

**Layout Components** (2):
- `Navbar` — Fixed header with scroll-hide, active section tracking, mobile overlay
- `Footer` — Social links, nav links, copyright

**Sub-components** (2):
- `ProjectCard` — Individual project card with hover overlay
- `ProjectTag` — Filterable tag button

**Legacy/Unused Components** (not rendered in `page.tsx`):
- `EmailSection`, `MenuOverlay`, `NavLink`, `TabButton`, `ThemeToggle`

### Backend Layer

**`src/app/api/send/route.ts`** — Single POST endpoint for contact form:
1. Rate limiting check (in-memory Map, 5 req/15 min per IP)
2. Env var validation (`RESEND_API_KEY`, `FROM_EMAIL`)
3. Zod schema validation
4. Input sanitization (trim, lowercase email)
5. Resend API call → sends HTML email to `prkey94@gmail.com` + sender
6. Returns generic error messages (no internal leaks)

---

## Design System

### Color Tokens (`tailwind.config.js → trueAutumn.*`)

| Token | Value | Purpose |
|---|---|---|
| `dark` | `#060D18` | Page background |
| `cardDark` | `#0A1628` | Card/panel surfaces |
| `borderDark` | `#1A3A5C` | Borders, dividers |
| `textDark` | `#B8D4F0` | Primary text |
| `textSecondaryDark` | `#4A6A8A` | Secondary/muted text |

Accent colors as raw hex in `className`:
- **Cyan** `#00D9FF` — Primary accent, glows, CTAs, active states
- **Orange** `#FF6B35` — Secondary accent, icon highlights
- **Green** `#22C55E` — Status LEDs, success states

### CSS Utilities (`src/app/globals.css`)

- `.glass` — Dark panel (`rgba(10,22,40,0.85)`) + cyan border + backdrop-blur
- `.glow-card` — Hover lift with cyan box-shadow; pair with `glass border rounded-2xl`
- `.bg-grid` — Cyan crosshatch texture
- `.eyebrow` — `// `-prefixed mono uppercase label
- `.gradient-text` — Cyan→Orange gradient (must use inline `style` prop, not Tailwind `dark:` prefix)
- `.glow-ring` — Pulsing cyan border animation
- `.tech-corner` — Decorative corner bracket overlay
- `.status-led` — Small pulsing status indicator dot
- `.cursor-blink` — Blinking terminal cursor

---

## Routing & Navigation

### URL Structure
- Single route: `/` (home)
- Hash anchors: `#about`, `#experience`, `#projects`, `#skills`, `#certifications`, `#achievements`, `#contact`
- Smooth scroll with 80px offset for fixed header

### Navbar Implementation

**Desktop** (xl+):
- Horizontal nav with section links, GitHub/LinkedIn icons, Download CV
- Slides up when scrolling down, reappears on scroll up
- Active link tracking via `IntersectionObserver` (30% visibility)

**Mobile** (<xl):
- Hamburger → full-screen overlay with numbered section links
- Escape key and click-outside close; body scroll locked when open

---

## Component Relationships

### Data Flow
- **No prop drilling** — each section imports its own inline data arrays
- **No global context or state management library**
- Parent only manages state that children need: `ProjectSection` holds `selectedTag` and passes filtered list to `ProjectCard` components

### Key TypeScript Interfaces

```typescript
// ExperienceTimeline.tsx
interface TimelineEntry {
  id: number; title: string; org: string; period: string;
  type: "work" | "education" | "project";
  summary: string; highlights: string[]; tags?: string[];
  accentColor: string; accentBg: string; icon: React.ReactNode;
}

// ProjectSection.tsx
interface Project {
  id: number; title: string; description: string;
  imgUrl: string; tag: string[]; gitUrl: string; previewUrl: string;
}

// CaseStudiesSection.tsx
interface CaseStudy {
  id: number; title: string; category: string;
  problem: string; process: string[]; solution: string; result: string;
  metrics: { resolutionTime: string; usersAffected: number; costSavings?: string };
  icon: React.ReactNode;
}
```

---

## Section Pattern

Every section follows this structure:

```tsx
<section id="section-id" className="py-20 sm:py-28 px-4 bg-trueAutumn-[dark|cardDark] relative overflow-hidden">
  <div className="absolute inset-0 bg-grid opacity-60" />
  <div className="relative z-10 max-w-7xl mx-auto">
    <span className="eyebrow mb-3">Label</span>
    <h2>Section Title</h2>
    {/* cards use: glow-card glass border rounded-2xl */}
  </div>
</section>
```

Sections alternate between `bg-trueAutumn-dark` and `bg-trueAutumn-cardDark` for visual rhythm.

---

## Entry Points Summary

| File | Purpose |
|---|---|
| `src/app/page.tsx` | Home route, section orchestrator |
| `src/app/layout.tsx` | Root layout — fonts, metadata, `dark` class, `theme-color` |
| `src/app/globals.css` | Global CSS utilities and design system |
| `src/app/api/send/route.ts` | POST /api/send — contact form endpoint |

---

## Performance & Optimization

### `next.config.mjs`
- Image formats: WebP, AVIF
- CSS optimization enabled (experimental)
- Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Permissions-Policy`

### Code Splitting
- `react-animated-numbers` dynamically imported (SSR disabled)
- Component tree splits naturally at route level

### Font Optimization
- `display: 'swap'` on all Google Fonts — no invisible text during load
- CSS variables passed to Tailwind for tree-shaking

---

## Architecture Summary

| Aspect | Decision |
|---|---|
| Rendering | Client-only (`"use client"` throughout) |
| Routing | Single-page with hash anchors |
| State | Component-local only (`useState`, no global store) |
| Data | Inline arrays per section (no external CMS/API) |
| Styling | Tailwind + custom tokens + CSS utilities |
| Animation | Framer Motion (`whileInView`) + SVG `<animateMotion>` |
| API | One endpoint: POST /api/send (Resend email) |
| Complexity | Minimal — optimized for solo developer maintainability |
