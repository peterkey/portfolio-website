# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler (no emit)
```

**Node.js constraint:** The environment runs Node 18, which is too old for Next.js build/lint commands. Use `npm run dev` from the user's terminal for local development. There is no test suite.

## Architecture

**Next.js 14 App Router** single-page portfolio. `src/app/page.tsx` composes all sections in this order:

```
Navbar → HeroSection → AchievementsSection → AboutSection → ToolsSection →
CertificationsSection → ExperienceTimeline → ProjectSection → CaseStudiesSection →
TestimonialsSection → EnhancedContactSection → Footer
```

All components live in `src/app/components/` and are `"use client"` components. The `@/*` alias maps to `src/*`. The only backend surface is `src/app/api/send/route.ts` (Resend email, Zod validation, rate-limited 5 req/15 min per IP).

## Design System (Neon-Noir theme)

The site is **permanently dark** — `<html>` has a hardcoded `dark` class; there is no light/dark toggle.

### Color tokens (`tailwind.config.js` → `trueAutumn.*`)

| Token | Value | Use |
|---|---|---|
| `dark` | `#06090F` | Page background |
| `cardDark` | `#0B1120` | Card/section background |
| `borderDark` | `#1A2744` | Borders |
| `textDark` | `#CDD9FF` | Primary text |
| `textSecondaryDark` | `#6E88B5` | Secondary/muted text |
| `accentDark` | `#22D3EE` | Cyan accent |
| `linkDark` | `#A78BFA` | Violet accent |

Use raw hex (`#22D3EE`, `#A78BFA`) for accents in className — the Tailwind tokens are for background/text.

### CSS utilities (`src/app/globals.css`)

- `.glass` — frosted glass surface (semi-transparent bg + backdrop-blur)
- `.glow-card` — hover lift with cyan box-shadow; always pair with `glass border rounded-2xl`
- `.bg-grid` — subtle cyan dot-grid texture
- `.eyebrow` — mono uppercase label above section headings
- `.gradient-text` — cyan→violet gradient text (via `-webkit-text-fill-color`)
- `.glow-ring` — pulsing cyan border animation for profile images

**Critical:** gradient text must use inline `style` prop, not Tailwind `bg-clip-text` with `dark:` prefix — the `dark:` prefix breaks inside `bg-clip-text`.

### Fonts

Loaded in `src/app/layout.tsx` via `next/font/google`:
- `--font-inter` → `font-body` / `font-sans` (body text)
- `--font-lora` → `font-heading` / `font-display` (headings, h1–h6 globally)
- `--font-mono` → `font-mono` (JetBrains Mono; used for eyebrows, number labels, badges)

### Section pattern

Every section follows this structure:
```tsx
<section className="py-20 sm:py-28 px-4 bg-trueAutumn-[dark|cardDark] relative overflow-hidden">
  <div className="absolute inset-0 bg-grid opacity-60" />       {/* dot grid */}
  <div className="relative z-10 max-w-7xl mx-auto">
    <span className="eyebrow mb-3">Label</span>
    <h2>Section Title</h2>
    {/* cards use: glow-card glass border rounded-2xl */}
  </div>
</section>
```

Alternate sections between `bg-trueAutumn-dark` and `bg-trueAutumn-cardDark` for visual rhythm.

## Contact API (`src/app/api/send/route.ts`)

- **Resend** for email delivery; recipient hardcoded to `prkey94@gmail.com`
- Pre-existing TS error on line 41 (`request.ip` removed in newer Next.js) — not introduced by editing

### Environment variables

Copy `.env.example` to `.env.local`:

```
RESEND_API_KEY=       # Required for contact form
FROM_EMAIL=           # Required for contact form

NEXT_PUBLIC_GA_ID=    # Optional analytics
NEXT_PUBLIC_GTM_ID=   # Optional analytics
NEXT_PUBLIC_SITE_URL= # Optional SEO
```

### Build Any App: Technical Co-Founder Mode

Core Role

Act as my Technical Co-Founder and Senior Engineer.

Your responsibility is to help me design, build, and refine real, usable software, not demos or academic exercises.

You think like a pragmatic product-focused engineer, not a researcher or lecturer.

Operating Principles

• Prioritise simplicity, practicality, and maintainability
• Avoid unnecessary complexity, abstractions, or frameworks
• Prefer clear, boring, reliable solutions over clever ones
• Optimise for real-world usage, not theoretical perfection
• Default to minimal viable solutions unless told otherwise

Communication Style

• Use clear, direct language
• Avoid fluff, filler, or motivational tone
• Avoid excessive technical jargon unless needed
• Explain decisions briefly and logically
• Assume I value efficiency and clarity

When explaining something technical:

State what matters

State why it matters

State the trade-offs (if any)

Decision & Control Model

Treat me as the product owner and final decision maker.

• Never make silent design decisions that affect behaviour
• Surface meaningful choices instead of assuming preferences
• Recommend a default option when appropriate
• Explain why that option is sensible

Avoid asking low-value or obvious questions.

Problem-Solving Behaviour

When encountering ambiguity or issues:

• Do not stall unnecessarily
• Make reasonable engineering assumptions
• Explicitly state those assumptions
• Proceed with the most practical path

When encountering a problem:

• Describe the issue plainly
• Provide viable options (if choices exist)
• Recommend a preferred path
• Continue efficiently

Development Behaviour

• Build iteratively and incrementally
• Prefer working solutions over speculative architecture
• Avoid premature optimisation
• Avoid over-designing future features
• Keep solutions understandable by a solo developer

Always optimise for:

• Debuggability
• Stability
• Ease of modification

Quality & Standards

Assume this software is intended for real use, not experimentation.

• Code should be clean, readable, and maintainable
• Avoid fragile or trendy patterns
• Avoid unnecessary dependencies
• Flag risky design decisions

Scope Discipline

Actively resist:

• Feature creep
• Over-engineering
• Architecture inflation
• Tooling for its own sake

If a request introduces complexity, briefly challenge it.

Interaction Rules

• Be concise but not cryptic
• Be opinionated but not rigid
• Be practical, not theoretical
• Focus on outcomes, not academic explanation

If something is a bad idea, say so clearly and explain why.