# Next.js 14 Portfolio Website — Directory Structure

## Root Level

```
portfolio-website/
├── .claude/
│   └── settings.local.json        # Claude Code IDE settings
├── .planning/                     # GSD planning artifacts
│   └── codebase/                  # Codebase map documents (this directory)
├── public/                        # Static assets (served at /)
│   ├── github-icon.svg            # GitHub icon (Navbar, Footer)
│   ├── linkedin.svg               # LinkedIn icon (Navbar, Footer)
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── images/
│       └── profile-pic.png        # Profile photo (HeroSection SVG diagram)
├── src/                           # All source code
├── .eslintrc.json                 # ESLint (extends next/core-web-vitals)
├── .gitignore
├── cv.txt                         # Downloadable CV
├── env.example                    # Environment variable template
├── next.config.mjs                # Next.js build/runtime config
├── package.json                   # Dependencies and scripts
├── package-lock.json
├── postcss.config.mjs             # PostCSS config for Tailwind
├── tailwind.config.js             # Tailwind theme, tokens, animations
├── tsconfig.json                  # TypeScript compiler config
├── CLAUDE.md                      # Project instructions for Claude Code
└── README.md
```

---

## Source Directory (`src/`)

```
src/
└── app/                           # Next.js App Router root
    ├── page.tsx                   # Home route — composes all sections
    ├── layout.tsx                 # Root layout — fonts, metadata, dark class
    ├── globals.css                # Global CSS utilities & design system
    ├── error.tsx                  # Error boundary (Next.js generated)
    ├── loading.tsx                # Loading state (Next.js generated)
    ├── not-found.tsx              # 404 page (Next.js generated)
    ├── api/
    │   └── send/
    │       └── route.ts           # POST /api/send — contact form endpoint
    └── components/                # All UI components
        │
        ├── — ACTIVE (rendered in page.tsx) —
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── ExperienceTimeline.tsx
        ├── ProjectSection.tsx
        ├── ProjectCard.tsx
        ├── ProjectTag.tsx
        ├── CaseStudiesSection.tsx
        ├── ToolsSection.tsx
        ├── CertificationsSection.tsx
        ├── AchievementsSection.tsx
        ├── TestimonialsSection.tsx
        ├── EnhancedContactSection.tsx
        ├── Footer.tsx
        │
        └── — LEGACY (not rendered) —
            ├── EmailSection.tsx   # Replaced by EnhancedContactSection
            ├── MenuOverlay.tsx    # Mobile menu (moved into Navbar)
            ├── NavLink.tsx        # Legacy nav link wrapper
            ├── TabButton.tsx      # Legacy tab button
            └── ThemeToggle.tsx    # Dark/light toggle (site is dark-only)
```

---

## Key Files

### Entry Points

#### `src/app/page.tsx`
Root page. Imports and renders all 12 sections in order. No props passed — each section is self-contained.

#### `src/app/layout.tsx`
- Loads Google Fonts (Rajdhani, IBM Plex Sans, IBM Plex Mono) via `next/font/google`
- Sets CSS variables: `--font-rajdhani`, `--font-ibm`, `--font-mono`
- Applies `dark` class to `<html>` (hardcoded; no toggle)
- Sets `theme-color` to `#060D18`
- Configures all metadata: title, description, OG, Twitter, robots, Google verification

#### `src/app/globals.css`
Global design system utilities. Key classes:
- `.glass` — dark frosted panel surface
- `.glow-card` — hover lift with cyan glow
- `.bg-grid` — cyan crosshatch texture
- `.eyebrow` — `// ` prefix, mono, uppercase
- `.gradient-text` — cyan→orange gradient (inline `style` required)
- `.glow-ring`, `.status-led`, `.cursor-blink`, `.tech-corner`

### Configuration

#### `tailwind.config.js`
- Color tokens under `trueAutumn.*`: `dark`, `cardDark`, `borderDark`, `textDark`, `textSecondaryDark`, plus light tokens (unused)
- Font families: `heading`/`display` (Rajdhani), `body`/`sans` (IBM Plex Sans), `mono` (IBM Plex Mono)
- Custom animations: `fade-in`, `slide-up`, `spin-slow`, `spin-reverse-slow`, `float`, `scan-line`, `blink`, `node-pulse`
- Custom screens: `xs: 475px`, `3xl: 1600px`

#### `next.config.mjs`
- Image formats: WebP, AVIF; cache TTL 60s
- `experimental.optimizeCss: true`
- Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Permissions-Policy`, `Referrer-Policy`

#### `tsconfig.json`
- `strict: true`
- Module: esnext; Resolution: bundler
- Path alias: `@/*` → `./src/*`
- Target: ES2017; JSX: react-jsx

### API Route

#### `src/app/api/send/route.ts`
Contact form endpoint. POST only.

**Request body** (Zod-validated):
```typescript
{ name: string, email: string, subject: string, message: string }
```

**Responses**:
- `200` — `{ message: "Email sent successfully", data }`
- `400` — `{ error: "Invalid input", details: [...] }`
- `429` — `{ error: "Too many requests. Please try again later." }`
- `500` — `{ error: "Email service not configured" }` or generic failure

**Pre-existing TS error**: Line 41 uses `request.ip` (removed in newer Next.js). Rate limiting falls back to `x-forwarded-for` header.

---

## Active Components

| Component | Lines | Purpose |
|---|---|---|
| `Navbar.tsx` | ~350 | Fixed header, scroll-hide, active tracking, mobile overlay |
| `HeroSection.tsx` | ~480 | Hero, animated SVG network diagram, type animation |
| `AboutSection.tsx` | ~210 | Bio, technical/soft skills, goals |
| `ExperienceTimeline.tsx` | ~280 | Vertical timeline (4 entries) |
| `ProjectSection.tsx` | ~100 | Project gallery with tag filtering |
| `ProjectCard.tsx` | ~50 | Individual project card with hover overlay |
| `ProjectTag.tsx` | ~30 | Filterable tag button |
| `CaseStudiesSection.tsx` | ~250 | Problem→Solution case study cards |
| `ToolsSection.tsx` | ~155 | Tool category cards |
| `CertificationsSection.tsx` | ~170 | Certification tracking with progress bars |
| `AchievementsSection.tsx` | ~80 | Impact metrics with animated numbers |
| `TestimonialsSection.tsx` | ~115 | Professional reference cards |
| `EnhancedContactSection.tsx` | ~305 | Contact form + info cards |
| `Footer.tsx` | ~80 | Social links, nav, copyright |

---

## Static Assets (`public/`)

| File | Used In |
|---|---|
| `github-icon.svg` | Navbar, Footer, HeroSection |
| `linkedin.svg` | Navbar, Footer, HeroSection |
| `images/profile-pic.png` | HeroSection SVG network diagram |
| `favicon.ico` | Browser tab |
| `apple-touch-icon.png` | iOS home screen |
| `cv.txt` | Navbar "Download CV" button |

---

## Naming Conventions

### Files & Components
- **PascalCase** component files: `HeroSection.tsx`, `ProjectCard.tsx`
- One component per file, default export
- Sections suffixed with `Section` or descriptive name: `ExperienceTimeline`, `EnhancedContactSection`

### Functions & Variables
- **camelCase**: `handleSubmit()`, `checkRateLimit()`, `isSubmitting`, `activeSection`
- **Inline data arrays** plural: `entries[]`, `achievements[]`, `caseStudies[]`, `certifications[]`

### CSS
- **kebab-case** custom classes: `.glow-card`, `.status-led`, `.tech-corner`
- **Tailwind tokens**: `bg-trueAutumn-dark`, `text-trueAutumn-textDark`
- **Raw hex in className** for accents: `text-[#00D9FF]`, `bg-[#FF6B35]/10`
- **CSS custom properties**: `--cyan`, `--surface`, `--border` (kebab-case)

### TypeScript Interfaces
- **PascalCase**: `TimelineEntry`, `Project`, `CaseStudy`, `Certification`, `ToolCategory`
- Props interfaces: `ComponentNameProps` (e.g., `ProjectCardProps`)
