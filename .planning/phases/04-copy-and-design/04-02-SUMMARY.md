---
phase: 04-copy-and-design
plan: 02
subsystem: ui
tags: [react, nextjs, tailwind, copy, content]

# Dependency graph
requires:
  - phase: 04-copy-and-design-01
    provides: ExperienceTimeline and CaseStudiesSection copy improvements
provides:
  - About section with Currently Studying card replacing soft skills adjective list
  - Certifications section with two credentialled entries and target year display
  - Tools section with task/outcome-led descriptions and Infrastructure & Automation category
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "NOC mono label pattern: font-mono text-[9px] tracking-widest uppercase for meta labels (// TARGET: 2026)"
    - "Cert pills: orange border/bg variant for active study items"

key-files:
  created: []
  modified:
    - src/app/components/AboutSection.tsx
    - src/app/components/CertificationsSection.tsx
    - src/app/components/ToolsSection.tsx

key-decisions:
  - "Soft skills list replaced entirely — no divider, no adjective pills, no CompTIA/MS-900 as 'learning' tags in About since Certifications section covers that with more detail"
  - "Certifications reduced from 5 to 2: only CompTIA A+ and MS-900 retained as credentialled industry exams; Basic AD Admin, ServiceNow/Jira Basics, Google IT Skills removed as non-credentialled"
  - "Professional Skills category removed from Tools — soft skills as technical tools is a weak candidate signal"
  - "Infrastructure & Automation added as sixth Tools category — surfaces Docker/Linux homelab work as real technical depth"
  - "Basic Networking renamed TCP/IP Networking, Active Directory (Basic) label stripped to Active Directory"

patterns-established:
  - "Outcome-led descriptions: start with verb + what the task achieves, not proficiency level"
  - "NOC target label: // TARGET: YYYY in font-mono text-[9px] text-[#00D9FF] tracking-widest"

requirements-completed: [COPY-03, COPY-04, COPY-05]

# Metrics
duration: 2min
completed: 2026-03-10
---

# Phase 04 Plan 02: Content Cleanup — About, Certifications, Tools Summary

**Soft skills lists, progress bars, and "Basic X" labels removed; replaced with factual outcome-led content and a credentialled-certs-only list with 2026 target dates.**

## Performance

- **Duration:** ~2 min
- **Started:** 2026-03-10T08:32:29Z
- **Completed:** 2026-03-10T08:34:23Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments
- About section: "Soft Skills + Currently Learning" card replaced with a clean "Currently Studying" card showing CompTIA A+ and MS-900 cert pills with a single factual study note
- Certifications section: reduced from 5 entries to 2 credentialled exams; progress bars removed; target year displayed as NOC mono label
- Tools section: "Professional Skills" category removed; 5 remaining descriptions rewritten to task/outcome sentences; "Basic X" labels stripped; new "Infrastructure & Automation" category added for Docker/Linux homelab work

## Task Commits

Each task was committed atomically:

1. **Task 1: Replace About section soft skills card with Currently Studying card** - `9397b7a` (feat)
2. **Task 2: Reduce Certifications to two credentialled entries with target year** - `e359fb8` (feat)
3. **Task 3: Rewrite Tools descriptions and remove Professional Skills category** - `3488cb7` (feat)

**Plan metadata:** (docs commit to follow)

## Files Created/Modified
- `src/app/components/AboutSection.tsx` - softSkills array and UserGroupIcon removed; second skills card replaced with Currently Studying card
- `src/app/components/CertificationsSection.tsx` - interface updated (targetDate added, progress removed); 5 entries reduced to 2; progress bar JSX replaced with // TARGET: 2026 label
- `src/app/components/ToolsSection.tsx` - Professional Skills category removed; Infrastructure & Automation added; all descriptions rewritten task-led; "Basic" labels stripped

## Decisions Made
- Soft skills list replaced entirely rather than moved — no location in the portfolio benefits from adjective lists
- Certifications reduced to two: only CompTIA A+ and MS-900 are recognised industry credentials worth showing; the other three (Basic AD Admin, ServiceNow/Jira Basics, Google IT Skills) signal low rigour
- Infrastructure & Automation category added to Tools to surface Docker Compose and Linux CLI work as real technical depth, not just "homelab hobby"

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None. The only TypeScript error throughout was the pre-existing `request.ip` error in `src/app/api/send/route.ts`, documented in CLAUDE.md.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Phase 04 Plan 03 (reduced-motion and visual polish) can proceed — all copy changes are complete
- No blockers

## Self-Check: PASSED

All files present. All task commits verified (9397b7a, e359fb8, 3488cb7).

---
*Phase: 04-copy-and-design*
*Completed: 2026-03-10*
