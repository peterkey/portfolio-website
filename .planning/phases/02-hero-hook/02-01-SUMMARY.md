---
phase: 02-hero-hook
plan: 01
subsystem: ui
tags: [hero, framer-motion, animation, copy, react-type-animation]

# Dependency graph
requires:
  - phase: 01-emergency-fix
    provides: CV PDF at /peter-key-cv.pdf, confirmed download link working
provides:
  - Static role title — "IT Support Specialist" — visible on page load with no delay
  - Outcome-focused value proposition copy replacing generic description
  - FCR-FOCUSED stat replacing "20+ STAFF SUPPORTED"
  - All left-column hero content visible immediately on hard-refresh (zero animation delay)
  - react-type-animation package removed from dependencies
affects: [03-social-proof, 04-polish]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Static span with inline color style for accent-colored text (instead of animation library)"
    - "Conditional label render with {stat.label && (...)} for variable-label stat cards"
    - "All hero left-column motion.div delays zeroed — content visible on first paint"

key-files:
  created: []
  modified:
    - src/app/components/HeroSection.tsx
    - package.json
    - package-lock.json

key-decisions:
  - "Static role title chosen over typing animation — eliminates ambiguity for recruiters scanning fast"
  - "FCR-FOCUSED stat replaces '20+ Staff Supported' — metric reframed as quality signal not headcount"
  - "react-type-animation uninstalled — no longer needed; removing dead dependencies keeps bundle lean"

patterns-established:
  - "Zero-delay hero: all above-fold content uses delay: 0 in transition prop; decorative scroll indicator below fold is exempt"
  - "Conditional stat label: {stat.label && (<div>...</div>)} pattern for stats cards with optional labels"

requirements-completed: [HERO-01, HERO-02, HERO-03, HERO-04]

# Metrics
duration: ~15min
completed: 2026-03-09
---

# Phase 2 Plan 01: Hero Hook Summary

**Static role title, outcome value prop, FCR-FOCUSED stat, and zero animation delays — hero content visible on first paint with react-type-animation removed**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-03-09T14:15:00Z
- **Completed:** 2026-03-09T14:30:00Z
- **Tasks:** 2 (1 auto, 1 human-verify)
- **Files modified:** 3

## Accomplishments

- Replaced TypeAnimation cycling titles with static `<span style={{ color: "#00D9FF" }}>IT Support Specialist</span>` — role is unambiguous on first glance
- Rewrote value proposition to "I keep businesses running by resolving IT issues before they become problems." — outcome-focused, not CV-speak
- Replaced "20+ STAFF SUPPORTED" stat with "FCR-FOCUSED" — reframes Peter as quality-focused, not just a headcount
- Zeroed all eight left-column motion.div animation delays so all hero content appears on first paint
- Fixed CV download href from `/cv.txt` to `/peter-key-cv.pdf` (consistent with Phase 1 fix)
- Uninstalled `react-type-animation` — no dead dependencies remain

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite HeroSection left column** - `8de55ca` (feat)
2. **Task 2: Visual verification in browser** - human-verify checkpoint, user approved — no code changes

**Plan metadata:** (docs commit — this summary)

## Files Created/Modified

- `src/app/components/HeroSection.tsx` — TypeAnimation removed, static title, new value prop, FCR-FOCUSED stat, zero delays, PDF href
- `package.json` — react-type-animation removed from dependencies
- `package-lock.json` — updated after uninstall

## Decisions Made

- Static span for role title rather than any alternative animation library — the plan specified no animation; a plain span is the simplest and most maintainable solution
- FCR-FOCUSED rendered with no label row beneath it (conditional render) — the empty string label was intentional; no label makes the card look deliberate not broken
- Scroll indicator delay (1.6s) left unchanged — it is below the fold and decorative; zeroing it would have no user-visible benefit

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Hero left column is clean and communicates role + value within 5 seconds of landing
- All four HERO requirements (HERO-01 through HERO-04) are satisfied
- Phase 3 (social proof / testimonials) requires a product owner decision: does a real quote exist? Section either stays with real content or is removed per STRUCT-02

---
*Phase: 02-hero-hook*
*Completed: 2026-03-09*
