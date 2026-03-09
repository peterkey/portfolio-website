# Portfolio Website

## What This Is

A personal portfolio site and online CV for an IT support professional targeting recruiters, hiring managers, and clients. Built with Next.js 14 and a NOC (Network Operations Center) dark theme, the site needs to grip visitors immediately — communicating credibility, urgency, and distinctiveness within the first 10 seconds of landing.

## Core Value

Within 10 seconds of landing, any recruiter or hiring manager should think: "This person knows what they're doing, I need to contact them, and they're different from everyone else I've seen today."

## Requirements

### Validated

- ✓ NOC dark theme with cyan/orange accent system — existing
- ✓ Animated SVG network diagram in hero — existing
- ✓ 12-section page: Navbar, Hero, About, ExperienceTimeline, Projects, CaseStudies, Tools, Certifications, Achievements, Testimonials, Contact, Footer — existing
- ✓ Contact form with Resend API and rate limiting — existing
- ✓ Mobile-responsive with hamburger menu — existing
- ✓ CV download link in navbar — existing
- ✓ Framer Motion scroll-triggered animations — existing

### Active

- [ ] Hero section rewritten to hook immediately — clear value prop, role, and call to action visible above the fold
- [ ] Section order optimised for IT job seeker audience — most credibility-building content surfaces earlier
- [ ] Content reframing across all sections — copy that sells, not just describes; active voice, impact-first
- [ ] Design boldness upgrade — visual elements that stand out from generic dev portfolios

### Out of Scope

- Light/dark toggle — deliberately dark-only, core to the NOC identity
- New tech stack — stay on Next.js 14, Tailwind, Framer Motion
- CMS or backend data layer — inline data arrays are sufficient for a solo portfolio
- Multi-page routing — single page with hash anchors is correct for this use case

## Context

This is a brownfield project. All sections are built and functional. The problems are entirely in presentation and persuasion:

1. **Hero** — doesn't communicate role and value fast enough; visitors shouldn't have to scroll to understand who this is and why they should care
2. **Section order** — the current sequence (About → Experience → Projects → Case Studies → Tools → Certs → Achievements → Testimonials) may not surface the most credibility-building content at the right moments in the scroll journey
3. **Copy** — content is accurate but written to inform rather than to sell; needs to be reframed around impact and outcomes
4. **Design boldness** — the NOC theme is distinctive but could be pushed further to feel truly one-of-a-kind

The target audience is mixed: recruiters scanning many CVs, technical hiring managers evaluating depth, and freelance clients assessing fit. All three need to feel: credibility + urgency + memorability.

## Constraints

- **Tech stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion — no changes
- **Node.js**: Node 18 in dev environment — `npm run build` and `npm run lint` unavailable; use `npm run dev` instead
- **Pre-existing TS error**: `src/app/api/send/route.ts:41` (`request.ip`) — known issue, do not fix unless explicitly tasked

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Brownfield improvements only | Codebase is solid; problems are presentation, not architecture | — Pending |
| Content reframe before new features | Weak copy undermines even good new features | — Pending |

---
*Last updated: 2026-03-09 after initialization*
