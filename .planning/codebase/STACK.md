# Technology Stack

**Analysis Date:** 2026-03-09

## Languages

**Primary:**
- TypeScript 5.x - All application code in `src/`
- TSX - React component files in `src/app/components/` and `src/app/`

**Secondary:**
- JavaScript - Config files (`tailwind.config.js`, `next.config.mjs`, `postcss.config.mjs`)
- CSS - Global styles in `src/app/globals.css`

## Runtime

**Environment:**
- Node.js (v25.6.1 in current dev environment; Node 18 also encountered — no `.nvmrc` or `.node-version` pinning exists)
- No engine field in `package.json` — runtime version is not locked

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present (lockfileVersion 3)

## Frameworks

**Core:**
- Next.js ^16.1.6 - App Router, SSR, API routes, image optimization
- React ^18 - UI rendering
- React DOM ^18 - DOM bindings

**Styling:**
- Tailwind CSS ^3.4.1 - Utility-first CSS; config at `tailwind.config.js`
- PostCSS ^8 - CSS processing; config at `postcss.config.mjs`

**Animation:**
- Framer Motion ^11.1.7 - Component animations and transitions

**Build/Dev:**
- TypeScript ^5 - Type checking; config at `tsconfig.json`
- ESLint ^8 - Linting; config via `eslint-config-next ^16.1.6`
- `critters` ^0.0.25 - Critical CSS inlining (used via `experimental.optimizeCss` in `next.config.mjs`)

## Key Dependencies

**Critical:**
- `resend` ^3.2.0 - Email delivery for contact form (`src/app/api/send/route.ts`)
- `zod` ^3.22.4 - Runtime schema validation for contact form API input

**UI Utilities:**
- `@heroicons/react` ^2.1.3 - SVG icon set used across components
- `react-animated-numbers` ^0.18.0 - Animated number counters (used in achievements/stats sections)
- `react-type-animation` ^3.2.0 - Typewriter effect (used in `HeroSection.tsx`)

**Infrastructure:**
- `@types/node` ^20 - Node.js type definitions
- `@types/react` ^18 / `@types/react-dom` ^18 - React type definitions

## Configuration

**TypeScript:**
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Module resolution: `bundler`
- Config: `tsconfig.json`

**Next.js:**
- Image optimization: WebP + AVIF formats, responsive device sizes, 60s min cache TTL
- CSS optimization: `experimental.optimizeCss: true` (requires `critters`)
- Security headers set globally in `next.config.mjs`:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- Config: `next.config.mjs`

**Tailwind:**
- Dark mode: `class` strategy (hardcoded `dark` class on `<html>`)
- Custom color palette under `trueAutumn.*` (see ARCHITECTURE.md / CLAUDE.md)
- Custom font families: `sans`, `heading`, `display`, `body`, `mono`
- Custom breakpoints: `xs` (475px), `3xl` (1600px)
- 8pt spacing scale override
- Config: `tailwind.config.js`

**Fonts (via `next/font/google`, loaded in `src/app/layout.tsx`):**
- Rajdhani — `--font-rajdhani` → `font-heading`, `font-display`
- IBM Plex Sans — `--font-ibm` → `font-body`, `font-sans`
- IBM Plex Mono — `--font-mono` → `font-mono`

**Environment:**
- Template: `env.example` at project root
- Copy to `.env.local` for local dev
- Required vars: `RESEND_API_KEY`, `FROM_EMAIL`
- Optional vars: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_SITE_URL`
- Placeholder vars (unused in code): `NEXTAUTH_SECRET`, `NEXTAUTH_URL`

## Platform Requirements

**Development:**
- Node.js (no pinned version; Node 18 present in some environments but may be too old for newer Next.js build commands — use `npm run dev` only in that case)
- `npm run dev` for local server
- `npm run type-check` for TS validation (works on Node 18)

**Production:**
- Deployment target not specified in config; compatible with Vercel (standard Next.js App Router deployment)
- No Docker or containerization config present
- No CI/CD pipeline config present (no `.github/`, no `Dockerfile`)

---

*Stack analysis: 2026-03-09*
