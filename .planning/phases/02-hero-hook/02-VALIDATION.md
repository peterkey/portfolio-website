---
phase: 2
slug: hero-hook
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-09
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — no test suite exists in this project |
| **Config file** | none |
| **Quick run command** | `npm run type-check` |
| **Full suite command** | `npm run type-check` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run type-check`
- **After every plan wave:** Run `npm run type-check`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 5 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 2-01-01 | 01 | 1 | HERO-01 | manual + type-check | `npm run type-check` | ❌ no test infra | ⬜ pending |
| 2-01-02 | 01 | 1 | HERO-02 | manual + type-check | `npm run type-check` | ❌ no test infra | ⬜ pending |
| 2-01-03 | 01 | 1 | HERO-03 | manual + type-check | `npm run type-check` | ❌ no test infra | ⬜ pending |
| 2-01-04 | 01 | 1 | HERO-04 | manual + type-check | `npm run type-check` | ❌ no test infra | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] No test infrastructure exists — browser visual verification is the only option
- [ ] `npm run type-check` must pass after removing the `react-type-animation` import

*Existing infrastructure (none) cannot cover phase requirements — manual verification via `npm run dev` is the phase gate.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Role title is static "IT Support Specialist", no TypeAnimation | HERO-01 | No browser test framework | Load page, confirm title is static and does not cycle |
| Value prop "I keep businesses running..." is visible | HERO-02 | No browser test framework | Load page above fold, read the sentence |
| Stats show FCR-FOCUSED and updated labels | HERO-03 | No browser test framework | Load page, check stat strip values |
| All CTA buttons visible immediately on load without delay | HERO-04 | No browser test framework | Load page, confirm buttons appear with page, not after stagger |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 5s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
