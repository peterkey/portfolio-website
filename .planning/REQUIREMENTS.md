# Requirements: Portfolio Website

**Defined:** 2026-03-09
**Core Value:** Within 10 seconds of landing, any recruiter or hiring manager should think: "This person knows what they're doing, I need to contact them, and they're different from everyone else I've seen today."

## v1 Requirements

### Emergency Fixes

- [ ] **FIX-01**: CV download button links to an actual PDF file (not cv.txt)
- [ ] **FIX-02**: CV file download attribute and filename are consistent (no mismatch)

### Hero

- [ ] **HERO-01**: Hero displays a single stable role title — no rotating type animation
- [ ] **HERO-02**: Hero has a clear one-sentence value proposition that states outcomes, not activities
- [ ] **HERO-03**: Hero stats reframed with outcome-oriented language (e.g. impact and scope, not just headcounts)
- [ ] **HERO-04**: Hero CTA buttons are visible on load without animation delay

### Structure

- [ ] **STRUCT-01**: Case Studies section appears early in scroll order (before Tools, Certifications)
- [ ] **STRUCT-02**: Testimonials section removed from the page (no real quotes; placeholders hurt credibility)
- [ ] **STRUCT-03**: Achievements section removed as a standalone section (duplicate of hero stats)
- [ ] **STRUCT-04**: Section background alternation (dark / cardDark) remains correct after reorder

### Copy

- [ ] **COPY-01**: Experience section leads with IT role identity — "Delivery Driver" not the headline
- [ ] **COPY-02**: Case study result fields use metric-led, outcome-first copy
- [ ] **COPY-03**: About section soft skills list removed (adds no credibility; lists of adjectives are dismissed)
- [ ] **COPY-04**: Certifications presented with target completion dates instead of percentage progress bars
- [ ] **COPY-05**: Tools section describes tasks and outcomes, not vague proficiency labels ("Basic X")

### Design

- [ ] **DESIGN-01**: Visual contrast and glow effects are strengthened — bolder, more distinctive than a typical dark theme
- [ ] **DESIGN-02**: NOC decorative elements (corner brackets, status LEDs, grid texture) used deliberately to reinforce theme identity
- [ ] **DESIGN-03**: `useReducedMotion` hook implemented to wrap animations for accessibility

## v2 Requirements

### Testimonials

- **TEST-01**: Real testimonial quote from a colleague or LinkedIn recommendation displayed (when obtained)

### Performance

- **PERF-01**: Profile photo migrated from SVG `<image>` element to `next/image` for LCP optimisation
- **PERF-02**: React Server Components migration for static sections

## Out of Scope

| Feature | Reason |
|---------|--------|
| Light/dark toggle | Core to NOC identity — permanently dark |
| New tech stack | Next.js 14 + Tailwind + Framer Motion is sufficient |
| CMS or external data layer | Inline data arrays are correct for a solo portfolio |
| Multi-page routing | Single page with hash anchors is correct |
| Real-time testimonial quotes | Not available now — deferred to v2 |

## Traceability

Populated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FIX-01 | — | Pending |
| FIX-02 | — | Pending |
| HERO-01 | — | Pending |
| HERO-02 | — | Pending |
| HERO-03 | — | Pending |
| HERO-04 | — | Pending |
| STRUCT-01 | — | Pending |
| STRUCT-02 | — | Pending |
| STRUCT-03 | — | Pending |
| STRUCT-04 | — | Pending |
| COPY-01 | — | Pending |
| COPY-02 | — | Pending |
| COPY-03 | — | Pending |
| COPY-04 | — | Pending |
| COPY-05 | — | Pending |
| DESIGN-01 | — | Pending |
| DESIGN-02 | — | Pending |
| DESIGN-03 | — | Pending |

**Coverage:**
- v1 requirements: 18 total
- Mapped to phases: 0
- Unmapped: 18 ⚠️

---
*Requirements defined: 2026-03-09*
*Last updated: 2026-03-09 after initial definition*
