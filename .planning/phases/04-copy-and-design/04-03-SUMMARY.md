---
phase: 04-copy-and-design
plan: "03"
subsystem: ui
tags: [framer-motion, css, accessibility, reduced-motion, NOC, animations]

# Dependency graph
requires:
  - phase: 04-copy-and-design-01
    provides: Content rewrite — Experience entries reordered, Homelab first
  - phase: 04-copy-and-design-02
    provides: Certifications and Tools sections finalized

provides:
  - Strengthened .glow-card:hover cyan glow values (site-wide via CSS class)
  - Status LEDs in ExperienceTimeline, CaseStudiesSection, EnhancedContactSection eyebrows
  - tech-corner bracket accents on Homelab timeline entry and top two case study cards
  - Rack-unit labels (1U, 2U) on three prominent cards
  - useReducedMotion conditional animation gating across all 6 animated sections

affects:
  - Any future section components with motion.div scroll animations

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "useReducedMotion called once at component top-level, variable used inside .map() callbacks"
    - "tech-corner wrapper div outside overflow:hidden card divs"
    - "Rack-unit label: absolute bottom-2 right-3, aria-hidden, opacity-20"
    - "Status LED: flex wrapper with status-led span + eyebrow span, gap-2"

key-files:
  created: []
  modified:
    - src/app/globals.css
    - src/app/components/ExperienceTimeline.tsx
    - src/app/components/CaseStudiesSection.tsx
    - src/app/components/EnhancedContactSection.tsx
    - src/app/components/AboutSection.tsx
    - src/app/components/CertificationsSection.tsx
    - src/app/components/ToolsSection.tsx

key-decisions:
  - "ProjectSection skipped for useReducedMotion — no whileInView animations present in that file"
  - "tech-corner applied via wrapper div for overflow:hidden cards (case studies), directly on motion.div for non-clipped cards (experience timeline)"
  - "Rack labels placed inside the card header sub-div (relative parent) for overflow:hidden cards to avoid clipping"

patterns-established:
  - "Reduced motion: initial={shouldReduceMotion ? false : {...}}, whileInView/transition set to undefined when reduced"
  - "Status LED always paired in a flex wrapper with the eyebrow span — not as sibling span"

requirements-completed: [DESIGN-01, DESIGN-02, DESIGN-03]

# Metrics
duration: 5min
completed: 2026-03-10
---

# Phase 4 Plan 3: NOC Visual Identity Strengthening Summary

**Bolder cyan glow effects, status LEDs in 3 section eyebrows, tech-corner brackets on 4 cards, rack-unit labels, and useReducedMotion across all 6 animated components**

## Performance

- **Duration:** 5 min
- **Started:** 2026-03-10T08:36:24Z
- **Completed:** 2026-03-10T08:41:00Z
- **Tasks:** 3
- **Files modified:** 7

## Accomplishments
- globals.css `.glow-card:hover` ambient glow strengthened from 0.07 to 0.20 opacity (visible NOC identity improvement)
- Status LEDs added to Experience, Case Studies, and Contact section eyebrows
- tech-corner bracket accents on 4 prominent cards: Homelab timeline entry, M365 case study, Homelab case study; rack-unit labels on 3 cards
- useReducedMotion hook implemented in ExperienceTimeline, CaseStudiesSection, AboutSection, CertificationsSection, ToolsSection, EnhancedContactSection — all scroll animations disabled when OS reduced-motion preference is active

## Task Commits

Each task was committed atomically:

1. **Task 1: Strengthen glow and glass values** - `b0c6ff7` (feat)
2. **Task 2: Add NOC decoratives** - `0b88ad8` (feat)
3. **Task 3: useReducedMotion across animated sections** - `f9d13fd` (feat)

## Files Created/Modified
- `src/app/globals.css` - .glow-card:hover ring/ambient/border values boosted; .glass base border 0.12 → 0.16
- `src/app/components/ExperienceTimeline.tsx` - status LED, tech-corner on Homelab, useReducedMotion
- `src/app/components/CaseStudiesSection.tsx` - status LED, tech-corner + rack labels on 2 cards, useReducedMotion
- `src/app/components/EnhancedContactSection.tsx` - status LED, useReducedMotion
- `src/app/components/AboutSection.tsx` - 1U rack label on Bio card, useReducedMotion
- `src/app/components/CertificationsSection.tsx` - useReducedMotion
- `src/app/components/ToolsSection.tsx` - useReducedMotion

## Decisions Made
- ProjectSection has no `whileInView` animations — skipped for useReducedMotion (no hook that does nothing)
- tech-corner for overflow:hidden cards uses an outer wrapper div rather than the card element itself, to prevent pseudo-element clipping
- Rack label for overflow:hidden case study cards placed inside the header sub-div (which is `relative`) so the absolute positioning stays visible

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 4 is now complete — all 3 plans executed
- Site has: strong NOC visual identity, rewritten copy, accessibility compliance for reduced-motion users
- Ready for final review or deployment preparation

---
*Phase: 04-copy-and-design*
*Completed: 2026-03-10*
