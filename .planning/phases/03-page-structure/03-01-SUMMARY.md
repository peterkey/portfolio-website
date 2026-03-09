---
phase: 03-page-structure
plan: 01
subsystem: ui
tags: [nextjs, page-structure, navigation, tailwind]

# Dependency graph
requires: []
provides:
  - Correct section scroll order: Hero, About, Experience, CaseStudies, Projects, Tools, Certifications, Contact
  - Navbar with 7 links numbered 01–07, Case Studies at 03 with #case-studies active tracking
  - Strict dark/cardDark background alternation across all sections
  - Testimonials and Achievements sections removed from page render
affects: [04-content-depth]

# Tech tracking
tech-stack:
  added: []
  patterns: [section-background-alternation, navbar-numbered-links]

key-files:
  created: []
  modified:
    - src/app/page.tsx
    - src/app/components/Navbar.tsx
    - src/app/components/CaseStudiesSection.tsx
    - src/app/components/ProjectSection.tsx

key-decisions:
  - "Case Studies surfaced before Projects — credibility evidence must appear early in scroll journey"
  - "Achievements and Testimonials removed — placeholder sections with no real content damage trust"
  - "Background alternation restored after reorder — CaseStudiesSection gets cardDark, ProjectSection gets dark"

patterns-established:
  - "Section order in page.tsx matches navbar link order — no orphaned anchors"
  - "Navbar num values are display-only labels; IntersectionObserver reads path.slice(1) for active tracking"

requirements-completed: [STRUCT-01, STRUCT-02, STRUCT-03, STRUCT-04]

# Metrics
duration: checkpoint-gated
completed: 2026-03-09
---

# Phase 3 Plan 01: Page Structure Summary

**Case Studies moved before Projects, placeholder sections removed, navbar renumbered to 7 links with active tracking for #case-studies**

## Performance

- **Duration:** checkpoint-gated (human verify required)
- **Started:** 2026-03-09
- **Completed:** 2026-03-09
- **Tasks:** 4 (3 auto + 1 human-verify checkpoint)
- **Files modified:** 4

## Accomplishments

- Reordered page.tsx so Case Studies surfaces immediately after Experience, before Projects
- Removed AchievementsSection and TestimonialsSection imports and JSX — no placeholder content visible
- Updated navLinks to 7 entries with "Case Studies" at num "03" and path "#case-studies"
- Swapped bg-trueAutumn-dark/cardDark on CaseStudiesSection and ProjectSection to restore correct alternation
- Human verified scroll order, background alternation, navbar links, and active tracking all correct

## Task Commits

Each task was committed atomically:

1. **Task 1: Reorder sections and remove placeholders in page.tsx** - `c9283a1` (feat)
2. **Task 2: Update Navbar navLinks array to reflect new structure** - `3967c90` (feat)
3. **Task 3: Swap background classes on CaseStudiesSection and ProjectSection** - `cd75898` (feat)
4. **Task 4: Visual verification of page structure** - approved by human (no code commit)

## Files Created/Modified

- `src/app/page.tsx` - Section order corrected; AchievementsSection and TestimonialsSection imports and JSX removed; unused Image import removed
- `src/app/components/Navbar.tsx` - navLinks updated to 7 entries; Case Studies at 03; Projects/Skills/Certifications/Contact renumbered 04-07; Achievements removed
- `src/app/components/CaseStudiesSection.tsx` - Outermost section bg changed from dark to cardDark
- `src/app/components/ProjectSection.tsx` - Outermost section bg changed from cardDark to dark

## Decisions Made

- Case Studies surfaced before Projects: credibility evidence (real client work) must appear early in the scroll journey before skills and tools
- Achievements and Testimonials removed from page render: sections with no real content damage trust and were removed rather than left as placeholders
- Background swap required after reorder: moving sections without updating backgrounds would have broken the visual alternation rhythm

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Page structure is correct and human-verified
- Navbar active tracking confirmed working for all 7 sections including the new #case-studies anchor
- Phase 4 (content-depth) can proceed — section scaffolding is stable

---
*Phase: 03-page-structure*
*Completed: 2026-03-09*
