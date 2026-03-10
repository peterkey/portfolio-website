---
phase: 04-copy-and-design
plan: 01
subsystem: ui
tags: [copy, experience-timeline, case-studies, content]

# Dependency graph
requires:
  - phase: 03-page-structure
    provides: CaseStudiesSection and ExperienceTimeline components in rendered page
provides:
  - Experience timeline with Homelab as first entry, Tesco summary IT-first
  - Case study result fields rewritten to open with concrete metrics
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Result copy pattern: lead with number or specific outcome, not vague description"
    - "Experience summary pattern: open with role identity (what you do), not role context (why you're there)"

key-files:
  created: []
  modified:
    - src/app/components/ExperienceTimeline.tsx
    - src/app/components/CaseStudiesSection.tsx

key-decisions:
  - "Homelab placed at index 0 in entries array — IT infrastructure work surfaces before employment entry"
  - "Tesco summary rewritten IT-first: opens with on-site IT support identity, positions delivery as contract not work"
  - "All four case study results rewritten metric-led per CONTEXT.md locked copy decisions"

patterns-established:
  - "Copy pattern: result fields open with number + outcome, not vague summary verb (Resolved, Minimized, Enabled)"
  - "Copy pattern: summary fields open with what the person does, not the context in which they do it"

requirements-completed: [COPY-01, COPY-02]

# Metrics
duration: 2min
completed: 2026-03-10
---

# Phase 4 Plan 01: Copy Rewrite — Experience & Case Studies Summary

**Experience timeline reordered (Homelab first) and Tesco summary rewritten IT-first; all four case study result fields now open with concrete metrics rather than vague outcome descriptions.**

## Performance

- **Duration:** ~2 min
- **Started:** 2026-03-10T08:29:54Z
- **Completed:** 2026-03-10T08:31:00Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Homelab entry (id:2) is now the first card in the Experience timeline — infrastructure work is the first thing a recruiter sees
- Tesco summary rewritten to open with IT support identity: "My on-site colleagues' first call for any technical problem..."
- All four case study results are now metric-led: id:1 opens with "5 users", id:2 "3 delivery devices", id:3 "8 colleagues", id:4 "A production-grade home lab..."

## Task Commits

Each task was committed atomically:

1. **Task 1: Reorder Experience entries and rewrite Tesco summary** - `54259ac` (feat)
2. **Task 2: Rewrite case study result fields to metric-led copy** - `5d98787` (feat)

## Files Created/Modified

- `src/app/components/ExperienceTimeline.tsx` — entries array reordered (id:2 at index 0), Tesco summary paragraph rewritten
- `src/app/components/CaseStudiesSection.tsx` — four `result` string fields replaced with metric-led copy

## Decisions Made

None — followed plan as specified. All copy was locked in CONTEXT.md and applied verbatim.

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None. The only TypeScript error present (`request.ip` in `send/route.ts`) is a pre-existing known issue documented in CLAUDE.md, not introduced by these changes.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Copy for Experience and Case Studies is complete
- Plan 04-02 (motion/animation polish) can proceed immediately
- No blockers

---
*Phase: 04-copy-and-design*
*Completed: 2026-03-10*
