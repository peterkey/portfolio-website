# External Integrations

**Analysis Date:** 2026-03-09

## APIs & External Services

**Email:**
- Resend - Transactional email delivery for the contact form
  - SDK: `resend` ^3.2.0
  - Client instantiated in: `src/app/api/send/route.ts`
  - Auth: `RESEND_API_KEY` environment variable
  - From address: `FROM_EMAIL` environment variable
  - To address: hardcoded `prkey94@gmail.com` (also CC's the submitter)

**Fonts:**
- Google Fonts (via `next/font/google`) - Loaded at build time, self-hosted by Next.js
  - Rajdhani, IBM Plex Sans, IBM Plex Mono
  - No API key required; loaded in `src/app/layout.tsx`

**Analytics (optional, not yet implemented in code):**
- Google Analytics — `NEXT_PUBLIC_GA_ID` env var defined in `env.example` but no GA script or component exists in `src/`
- Google Tag Manager — `NEXT_PUBLIC_GTM_ID` env var defined in `env.example` but no GTM component exists in `src/`
- Neither integration is active; vars are placeholders for future use

## Data Storage

**Databases:**
- None — no database client, ORM, or connection config present

**File Storage:**
- Local filesystem only — static assets served from `public/` directory
  - Profile image: `public/images/profile-pic.png`
  - Favicon: `src/app/favicon.ico`

**Caching:**
- None — Next.js built-in response caching only
- Rate limiting uses in-memory `Map` in `src/app/api/send/route.ts` (resets on server restart, not suitable for multi-instance production)

## Authentication & Identity

**Auth Provider:**
- None active — no authentication exists in the application
- `NEXTAUTH_SECRET` and `NEXTAUTH_URL` appear in `env.example` but NextAuth is not installed (`package.json` has no `next-auth` dependency) and no auth routes or session logic exist

## Monitoring & Observability

**Error Tracking:**
- None — no Sentry, Datadog, or equivalent SDK installed

**Logs:**
- `console.error` only, used in `src/app/api/send/route.ts` for email send failures and missing env var conditions
- No structured logging library

## CI/CD & Deployment

**Hosting:**
- Not specified in config — standard Next.js App Router output is compatible with Vercel
- No `vercel.json`, `Dockerfile`, or platform-specific config files present

**CI Pipeline:**
- None — no `.github/workflows/`, no CI config of any kind

## Environment Configuration

**Required env vars (contact form will fail without these):**
- `RESEND_API_KEY` — Resend API key for email delivery
- `FROM_EMAIL` — Verified sender email address on the Resend account

**Optional env vars (safe to omit):**
- `NEXT_PUBLIC_GA_ID` — Google Analytics measurement ID (not wired up in code)
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container ID (not wired up in code)
- `NEXT_PUBLIC_SITE_URL` — Used in metadata fallback; defaults to `https://your-domain.com` placeholder in `src/app/layout.tsx`

**Unused env vars (defined in template, no corresponding code):**
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

**Secrets location:**
- `.env.local` at project root (gitignored); template at `env.example`

## Webhooks & Callbacks

**Incoming:**
- None — the only API route is `POST /api/send` for the contact form submission

**Outgoing:**
- None — Resend email is a fire-and-forget call, no webhook endpoints registered

---

*Integration audit: 2026-03-09*
