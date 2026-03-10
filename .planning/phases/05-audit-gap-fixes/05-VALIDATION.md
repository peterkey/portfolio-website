---
phase: 5
slug: audit-gap-fixes
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-10
---

# Phase 5 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — no test suite exists (confirmed in CLAUDE.md) |
| **Config file** | None |
| **Quick run command** | N/A — manual inspection only |
| **Full suite command** | N/A — manual inspection only |
| **Estimated runtime** | ~2 minutes (manual) |

---

## Sampling Rate

- **After every task commit:** Manual source inspection of changed lines
- **After every plan wave:** Full visual check with OS reduced-motion enabled
- **Before `/gsd:verify-work`:** All four phase success criteria confirmed true
- **Max feedback latency:** ~2 minutes (manual visual check)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 5-01-01 | 01 | 1 | FIX-02 | manual | Inspect `HeroSection.tsx` line 342 — confirm `download="Peter-Key-CV.pdf"` | ✅ | ⬜ pending |
| 5-01-02 | 01 | 1 | DESIGN-03 | manual | Enable OS reduced-motion; reload; confirm no HeroSection entrance animations fire | ✅ | ⬜ pending |
| 5-01-03 | 01 | 1 | DESIGN-03 | manual | Enable OS reduced-motion; scroll down; confirm Navbar does not hide | ✅ | ⬜ pending |
| 5-01-04 | 01 | 1 | DESIGN-03 | manual | Inspect rendered footer — confirm Case Studies and Certifications links present | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

None — existing infrastructure (no test suite) covers the situation; manual verification is the appropriate method for this project.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| CV download filename matches `Peter-Key-CV.pdf` | FIX-02 | No test suite; single attribute value change | Inspect `HeroSection.tsx` line 342 for `download="Peter-Key-CV.pdf"` |
| HeroSection motion elements suppressed under reduced-motion | DESIGN-03 | Requires OS/browser accessibility setting; visual verification | Enable `prefers-reduced-motion: reduce` in OS settings; load page; confirm no entrance animations and no bounce loop |
| Navbar scroll-hide suppressed under reduced-motion | DESIGN-03 | Requires OS/browser accessibility setting; visual verification | Enable reduced-motion; scroll down; confirm navbar stays visible (does not hide) |
| Footer navLinks includes Case Studies and Certifications | DESIGN-03 | No test suite; data array replacement | Inspect rendered footer; confirm links `#case-studies` and `#certifications` are present in correct order |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 120s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
