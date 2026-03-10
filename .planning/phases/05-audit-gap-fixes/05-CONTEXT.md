# Phase 5: Audit Gap Fixes - Context

**Gathered:** 2026-03-10
**Status:** Ready for planning

<domain>
## Phase Boundary

Close three specific defects identified in the v1.0 milestone audit:
1. CV download filename mismatch between Navbar and HeroSection
2. `useReducedMotion` not applied to HeroSection or Navbar
3. Footer navLinks missing Case Studies and Certifications

No new features. No other files touched.

</domain>

<decisions>
## Implementation Decisions

### CV filename
- Canonical filename: `Peter-Key-CV.pdf` (matches Navbar, no underscores)
- Fix location: `HeroSection.tsx` line 342 — change `download="Peter_Williams-Key_CV.pdf"` → `download="Peter-Key-CV.pdf"`

### useReducedMotion — HeroSection
- Add `const shouldReduceMotion = useReducedMotion()` at component top
- Gate all `motion.*` `initial`/`animate`/`transition` props using established pattern: `initial={shouldReduceMotion ? false : { ... }}`
- Perpetual bounce loop (`animate={{ y: [0, 8, 0] }}`): when `shouldReduceMotion` is true, replace with static (no animate prop)

### useReducedMotion — Navbar
- Add `const shouldReduceMotion = useReducedMotion()` at component top
- Scroll-hide behaviour (`motion.nav` y-offset): when `shouldReduceMotion` is true, nav is always visible — skip the hide-on-scroll mechanic entirely
- `motion.button` whileHover/whileTap scale: gate with `shouldReduceMotion ? undefined : { scale: ... }`
- `motion.div` (mobile menu): gate initial/animate with standard pattern

### Footer navLinks
- Add Case Studies and Certifications to Footer navLinks
- Order matches Navbar: About → Experience → Case Studies → Projects → Certifications → Contact
- hrefs: `#case-studies` and `#certifications` (matching section IDs added in Phase 3)

### Claude's Discretion
- Exact transition durations and easing on any newly-guarded props — follow existing component conventions

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `useReducedMotion` from framer-motion: already imported in 6 components — same import line works
- Established guard pattern: `initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}` — use verbatim

### Established Patterns
- All 6 existing implementations use `const shouldReduceMotion = useReducedMotion()` at the top of the component function
- Import line: `import { motion, useReducedMotion } from "framer-motion"`

### Integration Points
- `HeroSection.tsx` — add `useReducedMotion` import + hook; patch line 342 filename; gate all motion props
- `Navbar.tsx` — add `useReducedMotion` import + hook; gate motion.nav, motion.button, motion.div
- `Footer.tsx` lines 1–7 — update navLinks array (no other changes needed)

</code_context>

<specifics>
## Specific Ideas

- Navbar always-visible under reduced motion: render `motion.nav` with no y-transform (don't conditionally swap to a `<nav>` — keep motion.nav but pass static/no-op animate values so the component tree is stable)

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope

</deferred>

---

*Phase: 05-audit-gap-fixes*
*Context gathered: 2026-03-10*
