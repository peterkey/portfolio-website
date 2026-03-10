---
phase: 4
slug: copy-and-design
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-10
---

# Phase 4 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Visual / manual DOM inspection (no automated test suite) |
| **Config file** | none |
| **Quick run command** | `npm run dev` (browser inspection) |
| **Full suite command** | `npm run type-check` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run type-check`
- **After every plan wave:** Browser inspection of affected sections
- **Before `/gsd:verify-work`:** Full visual review of all changed sections
- **Max feedback latency:** ~10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 4-copy-01 | copy | 1 | COPY-01 | visual | `npm run type-check` | ✅ | ⬜ pending |
| 4-copy-02 | copy | 1 | COPY-02 | visual | `npm run type-check` | ✅ | ⬜ pending |
| 4-copy-03 | copy | 1 | COPY-03 | visual | `npm run type-check` | ✅ | ⬜ pending |
| 4-copy-04 | copy | 1 | COPY-04 | visual | `npm run type-check` | ✅ | ⬜ pending |
| 4-copy-05 | copy | 1 | COPY-05 | visual | `npm run type-check` | ✅ | ⬜ pending |
| 4-design-01 | design | 2 | DESIGN-01 | visual | `npm run type-check` | ✅ | ⬜ pending |
| 4-design-02 | design | 2 | DESIGN-02 | visual | `npm run type-check` | ✅ | ⬜ pending |
| 4-design-03 | design | 2 | DESIGN-03 | visual | `npm run type-check` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing infrastructure covers all phase requirements.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Experience section IT role ordering | COPY-01 | DOM order inspection | Open site, verify IT Support role appears before Delivery Driver in timeline |
| Case study metrics lead | COPY-02 | Visual text check | Open site, read first sentence of each case study result — must open with metric |
| About section no soft skills | COPY-03 | Visual text check | Open About, confirm no "Communication", "Teamwork" style bullet list |
| Certification dates shown | COPY-04 | Visual element check | Open Certifications, confirm target dates shown, no progress bars |
| Tools have task descriptions | COPY-05 | Visual text check | Open Tools section, verify each tool has a task description, no "Basic X" labels |
| Glow visibly stronger than generic | DESIGN-01 | Side-by-side visual | Hover cards — cyan glow must be clearly prominent |
| Reduced-motion respected | DESIGN-03 | OS setting toggle | Enable prefers-reduced-motion in OS, reload site, verify animations stop |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 10s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
