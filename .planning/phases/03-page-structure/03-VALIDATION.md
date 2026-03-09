---
phase: 3
slug: page-structure
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-09
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — no automated test suite in this project |
| **Config file** | none |
| **Quick run command** | `npm run type-check` (TypeScript only) + visual browser inspection |
| **Full suite command** | `npm run type-check` |
| **Estimated runtime** | ~5 seconds (type-check) |

---

## Sampling Rate

- **After every task commit:** Run `npm run type-check` + visual scroll-through in browser
- **After every plan wave:** Full scroll-through + Navbar link click test for `#case-studies`
- **Before `/gsd:verify-work`:** All four STRUCT requirements visually confirmed
- **Max feedback latency:** ~30 seconds (open browser, scroll, verify)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 3-01-01 | 01 | 1 | STRUCT-01, STRUCT-02, STRUCT-03 | manual | `npm run type-check` | ✅ | ⬜ pending |
| 3-01-02 | 01 | 1 | STRUCT-01 | manual | `npm run type-check` | ✅ | ⬜ pending |
| 3-01-03 | 01 | 1 | STRUCT-04 | manual | `npm run type-check` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing infrastructure covers all phase requirements.

No new test files needed. Verification is manual browser testing. `npm run type-check` confirms no stale imports or JSX errors.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Case Studies appears before Tools/Certifications in scroll order | STRUCT-01 | No test framework; visual DOM order | Open browser, scroll down — Case Studies must appear before Tools section |
| TestimonialsSection not rendered | STRUCT-02 | Visual absence check | Scroll full page — no Testimonials section should appear |
| AchievementsSection not rendered as standalone section | STRUCT-03 | Visual absence check | Scroll full page — no Achievements section should appear |
| Background alternation correct after reorder | STRUCT-04 | Visual color check | Scroll through all sections — backgrounds must alternate dark/cardDark correctly |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
