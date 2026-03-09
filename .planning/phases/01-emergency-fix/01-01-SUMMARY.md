---
phase: 01-emergency-fix
plan: 01
subsystem: ui
tags: [navbar, pdf, download, recruiter-cta]

# Dependency graph
requires: []
provides:
  - "public/peter-key-cv.pdf served as static file by Next.js"
  - "Navbar downloadCV() function pointing to real PDF with consistent filename"
affects: [all future phases — primary recruiter CTA now functional]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Static PDF served from public/ via Next.js static file handler"
    - "Programmatic anchor download using createElement('a') with explicit download attribute"

key-files:
  created:
    - "public/peter-key-cv.pdf — real CV PDF served at /peter-key-cv.pdf"
  modified:
    - "src/app/components/Navbar.tsx — downloadCV() href and download attribute corrected"

key-decisions:
  - "Filename uses hyphens (Peter-Key-CV.pdf) not underscores — matches public/ file convention and is cleaner for recruiters"
  - "User placed their own PDF directly; executor cannot generate real CV content"

patterns-established:
  - "CV file lives at public/peter-key-cv.pdf, served at /peter-key-cv.pdf"

requirements-completed: [FIX-01, FIX-02]

# Metrics
duration: ~10min
completed: 2026-03-09
---

# Phase 1 Plan 01: Emergency Fix Summary

**Broken CV download repaired — Navbar now serves real PDF (peter-key-cv.pdf) with a consistent .pdf filename, fixing the primary recruiter conversion path**

## Performance

- **Duration:** ~10 min
- **Started:** 2026-03-09T11:51:00Z
- **Completed:** 2026-03-09T12:01:00Z
- **Tasks:** 3 (1 human-action, 1 auto, 1 human-verify)
- **Files modified:** 2

## Accomplishments
- PDF file placed in public/ and confirmed present at 52K
- `downloadCV()` in Navbar.tsx updated: href changed from `/cv.txt` to `/peter-key-cv.pdf`, download attribute changed from `Peter_Williams-Key_CV.pdf` to `Peter-Key-CV.pdf`
- No references to `cv.txt` remain in Navbar.tsx

## Task Commits

Each task was committed atomically:

1. **Task 1: Place PDF in public/** - human-action (no commit — user action)
2. **Task 2: Update Navbar download link** - `886eaa5` (fix)
3. **Task 3: Human verify download end-to-end** - `54b6716` (human-verify approved)

**Plan metadata:** `54b6716` (docs: complete emergency fix plan)

## Files Created/Modified
- `public/peter-key-cv.pdf` — real CV PDF file placed by user; served statically by Next.js at /peter-key-cv.pdf
- `src/app/components/Navbar.tsx` — corrected href and download attribute in downloadCV()

## Decisions Made
- Used hyphenated filename `Peter-Key-CV.pdf` as the download attribute value — consistent with the public/ filename convention, no underscores, clean for recruiters

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None — file was confirmed present before Task 2 began.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- CV download is functional; primary recruiter CTA is unblocked
- Phase 2 can proceed (content and copy improvements)

---
*Phase: 01-emergency-fix*
*Completed: 2026-03-09*
