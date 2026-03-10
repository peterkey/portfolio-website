# Requirements: Portfolio Website

**Defined:** 2026-03-09
**Core Value:** Within 10 seconds of landing, any recruiter or hiring manager should think: "This person knows what they're doing, I need to contact them, and they're different from everyone else I've seen today."

## v1 Requirements

### Emergency Fixes

- [x] **FIX-01**: CV download button links to an actual PDF file (not cv.txt)
- [x] **FIX-02**: CV file download attribute and filename are consistent (no mismatch)

### Hero

- [x] **HERO-01**: Hero displays a single stable role title — no rotating type animation
- [x] **HERO-02**: Hero has a clear one-sentence value proposition that states outcomes, not activities
- [x] **HERO-03**: Hero stats reframed with outcome-oriented language (e.g. impact and scope, not just headcounts)
- [x] **HERO-04**: Hero CTA buttons are visible on load without animation delay

### Structure

- [x] **STRUCT-01**: Case Studies section appears early in scroll order (before Tools, Certifications)
- [x] **STRUCT-02**: Testimonials section removed from the page (no real quotes; placeholders hurt credibility)
- [x] **STRUCT-03**: Achievements section removed as a standalone section (duplicate of hero stats)
- [x] **STRUCT-04**: Section background alternation (dark / cardDark) remains correct after reorder

### Copy

- [x] **COPY-01**: Experience section leads with IT role identity — "Delivery Driver" not the headline
- [x] **COPY-02**: Case study result fields use metric-led, outcome-first copy
- [x] **COPY-03**: About section soft skills list removed (adds no credibility; lists of adjectives are dismissed)
- [x] **COPY-04**: Certifications presented with target completion dates instead of percentage progress bars
- [x] **COPY-05**: Tools section describes tasks and outcomes, not vague proficiency labels ("Basic X")

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

| Requirement | Phase | Status |
|-------------|-------|--------|
| FIX-01 | Phase 1 | Complete |
| FIX-02 | Phase 1 | Complete |
| HERO-01 | Phase 2 | Complete |
| HERO-02 | Phase 2 | Complete |
| HERO-03 | Phase 2 | Complete |
| HERO-04 | Phase 2 | Complete |
| STRUCT-01 | Phase 3 | Complete |
| STRUCT-02 | Phase 3 | Complete |
| STRUCT-03 | Phase 3 | Complete |
| STRUCT-04 | Phase 3 | Complete |
| COPY-01 | Phase 4 | Complete |
| COPY-02 | Phase 4 | Complete |
| COPY-03 | Phase 4 | Complete |
| COPY-04 | Phase 4 | Complete |
| COPY-05 | Phase 4 | Complete |
| DESIGN-01 | Phase 4 | Pending |
| DESIGN-02 | Phase 4 | Pending |
| DESIGN-03 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 18 total
- Mapped to phases: 18
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-09*
*Last updated: 2026-03-09 after roadmap creation*
