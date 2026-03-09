# Roadmap: Portfolio Website

## Overview

Four phases to transform a technically solid but persuasion-weak portfolio into one that converts recruiter attention into contact within 10 seconds. The sequence is dependency-driven: fix the broken primary CTA first, then establish hero identity, then surface the strongest evidence earlier in the scroll journey, then sharpen every word and visual. Each phase builds on a stable foundation from the last.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Emergency Fix** - Repair the broken CV download so the primary recruiter CTA works (completed 2026-03-09)
- [ ] **Phase 2: Hero Hook** - Rewrite the hero to communicate role and value within 5 seconds
- [ ] **Phase 3: Page Structure** - Reorder sections so evidence appears before biography
- [ ] **Phase 4: Copy and Design** - Sharpen every word and strengthen the visual identity

## Phase Details

### Phase 1: Emergency Fix
**Goal**: The CV download delivers an actual PDF file
**Depends on**: Nothing (first phase)
**Requirements**: FIX-01, FIX-02
**Success Criteria** (what must be TRUE):
  1. Clicking "Download CV" in the navbar downloads a real PDF that opens correctly in a PDF viewer
  2. The downloaded filename matches what is advertised (no `.txt` extension mismatch)
**Plans**: 1 plan

Plans:
- [ ] 01-01-PLAN.md — Place real PDF in public/ and update Navbar download link

### Phase 2: Hero Hook
**Goal**: Visitors understand who Peter is and why they should contact him before scrolling
**Depends on**: Phase 1
**Requirements**: HERO-01, HERO-02, HERO-03, HERO-04
**Success Criteria** (what must be TRUE):
  1. The hero displays a single, stable role title — no rotating or cycling text
  2. A one-sentence value proposition is visible above the fold that states an outcome, not an activity
  3. The stat strip uses outcome-oriented language (impact and scope, not just headcounts)
  4. Both CTA buttons are visible and clickable immediately on load without waiting for animation
**Plans**: 1 plan

Plans:
- [ ] 02-01-PLAN.md — Rewrite HeroSection: static title, outcome value prop, reframed stats, zero animation delays

### Phase 3: Page Structure
**Goal**: The strongest credibility evidence (Case Studies) is visible within 60 seconds of scrolling, and placeholder sections are removed
**Depends on**: Phase 2
**Requirements**: STRUCT-01, STRUCT-02, STRUCT-03, STRUCT-04
**Success Criteria** (what must be TRUE):
  1. Case Studies section appears before Tools and Certifications in the scroll order
  2. The Testimonials section is not present on the page
  3. The Achievements section is not present as a standalone section
  4. Section backgrounds correctly alternate between dark and cardDark after the reorder
**Plans**: TBD

### Phase 4: Copy and Design
**Goal**: Every section sells rather than describes, and the NOC visual identity is bold enough to be memorable
**Depends on**: Phase 3
**Requirements**: COPY-01, COPY-02, COPY-03, COPY-04, COPY-05, DESIGN-01, DESIGN-02, DESIGN-03
**Success Criteria** (what must be TRUE):
  1. The Experience section leads with the IT role, not the delivery driving job
  2. Case study result fields open with a metric or outcome, not a vague description
  3. The About section contains no soft skills bullet list
  4. Certifications show target completion dates, not percentage progress bars
  5. Tools section describes tasks done with each tool, not labels like "Basic X"
  6. Glow effects and contrast are visibly stronger than a generic dark theme; animations respect the OS reduced-motion setting
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Emergency Fix | 1/1 | Complete    | 2026-03-09 |
| 2. Hero Hook | 0/1 | Not started | - |
| 3. Page Structure | 0/TBD | Not started | - |
| 4. Copy and Design | 0/TBD | Not started | - |
