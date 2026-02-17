# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler (no emit)
```

There is no test suite configured in this project.

## Architecture

**Next.js 14 App Router** single-page portfolio. Everything routes through `src/app/page.tsx`, which composes all sections in order. The only backend surface is `src/app/api/send/route.ts` — a contact form endpoint using the Resend email service.

### Key structural patterns

- All components live in `src/app/components/` and are client components (`"use client"`).
- The `@/*` path alias maps to `src/*`.
- Dark mode is class-based (toggled via `ThemeToggle`, persisted to `localStorage`).
- Animations use **Framer Motion**; the hero typing effect uses `react-type-animation`.

### Styling

The project uses a custom **"True Autumn"** color palette defined in `tailwind.config.js`:
- Light mode: cream background (`#FAF7F2`), sage accents (`#8A9A5B`)
- Dark mode: very dark background (`#131414`), brass accents (`#B3A369`)

Fonts are Inter (body) and Lora (headings), loaded via `next/font/google` in the root layout.

### Contact API (`src/app/api/send/route.ts`)

- Uses **Resend** for sending email
- Validates input with **Zod**
- Rate-limited to 5 requests per 15 minutes per IP
- Requires `RESEND_API_KEY` and `FROM_EMAIL` environment variables
- Recipient email (`prkey94@gmail.com`) is hardcoded in the route handler

### Environment variables

Copy `.env.example` to `.env.local`. Required for email functionality:

```
RESEND_API_KEY=
FROM_EMAIL=
```

Optional (analytics/SEO):
```
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_SITE_URL=
```
