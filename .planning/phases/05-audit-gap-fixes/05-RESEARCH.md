# Phase 5: Audit Gap Fixes - Research

**Researched:** 2026-03-10
**Domain:** React/Framer Motion accessibility (`useReducedMotion`), filename consistency, navigation data arrays
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- CV canonical filename: `Peter-Key-CV.pdf` (matches Navbar, no underscores)
- Fix location: `HeroSection.tsx` line 342 — change `download="Peter_Williams-Key_CV.pdf"` to `download="Peter-Key-CV.pdf"`
- HeroSection: add `const shouldReduceMotion = useReducedMotion()` at component top; gate all `motion.*` `initial`/`animate`/`transition` props; bounce loop becomes static when `shouldReduceMotion` is true
- Navbar: add `const shouldReduceMotion = useReducedMotion()` at component top; scroll-hide (`motion.nav` y-offset) skipped entirely when reduced motion; `motion.button` whileHover/whileTap gated; `motion.div` (mobile menu bottom bar) gated
- Footer navLinks order: About → Experience → Case Studies → Projects → Certifications → Contact; hrefs `#case-studies` and `#certifications`
- No new features; no other files touched

### Claude's Discretion
- Exact transition durations and easing on any newly-guarded props — follow existing component conventions

### Deferred Ideas (OUT OF SCOPE)
- None — discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| FIX-02 | CV file download attribute and filename are consistent (no mismatch) | Line 342 of HeroSection.tsx confirmed as the only mismatch site; Navbar already correct |
| DESIGN-03 | `useReducedMotion` hook implemented to wrap animations for accessibility | Pattern confirmed in 6 existing components; import line and guard syntax are identical across all |
</phase_requirements>

## Summary

Phase 5 closes three specific defects with surgical edits to three files. The changes are small in scope but require precise attention to the exact motion props involved in each component and the correct `useReducedMotion` guard syntax the codebase already uses.

The CV filename defect is a single attribute value on line 342 of `HeroSection.tsx`. The Navbar already has the correct filename (`Peter-Key-CV.pdf`) in its `downloadCV()` function; HeroSection has `Peter_Williams-Key_CV.pdf` with underscores — that is the only mismatch.

The `useReducedMotion` work is the heaviest change. HeroSection has no hook at all and contains eight distinct `motion.*` elements with `initial`/`animate`/`transition` props, plus a perpetual bounce loop that needs special handling. Navbar has no hook at all and uses `motion.nav` for scroll-hide, `motion.button` for scale interactions, and `motion.div` for the mobile menu bottom bar. Six other components already implement the pattern correctly and can be used as exact references.

Footer navLinks is a pure data array replacement — no logic changes, just aligning the array to match Navbar order and adding the two missing entries.

**Primary recommendation:** Follow the established `shouldReduceMotion ? false : { ... }` guard pattern verbatim; copy the import line from `AboutSection.tsx` which is the simplest reference.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| framer-motion | Already installed (project uses v10/v11) | Motion primitives + `useReducedMotion` hook | All animation in the project runs through Framer Motion |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `useReducedMotion` | Part of framer-motion | Returns `true` when OS/browser `prefers-reduced-motion: reduce` is set | Every component with entrance or loop animations |

**Installation:** No new packages required. `useReducedMotion` is already in the framer-motion bundle the project imports.

## Architecture Patterns

### Pattern 1: Standard useReducedMotion guard (entrance animation)
**What:** Gate `initial`, `whileInView`/`animate`, and `transition` props so that when `shouldReduceMotion` is true, the element renders in its final state immediately with no transition.
**When to use:** Any `motion.*` wrapper with `initial`/`animate`/`transition`.
**Example:**
```typescript
// Source: src/app/components/AboutSection.tsx (established project pattern)
const shouldReduceMotion = useReducedMotion();

<motion.div
  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
  transition={shouldReduceMotion ? undefined : { duration: 0.6 }}
  viewport={{ once: true }}
>
```

When `initial` is `false`, Framer Motion treats the element as already in its final state — no flash, no jump.

### Pattern 2: Standard useReducedMotion guard (on-load animate, no whileInView)
**What:** For components that use `animate` (not `whileInView`) — identical logic, different prop name.
**When to use:** HeroSection uses `animate` directly (not `whileInView`) because it is above the fold.
```typescript
// Applies to HeroSection motion wrappers
<motion.div
  initial={shouldReduceMotion ? false : { opacity: 0, x: -40 }}
  animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
  transition={shouldReduceMotion ? undefined : { duration: 0.9, ease: "easeOut" }}
>
```

### Pattern 3: Perpetual loop suppression
**What:** Remove the `animate` prop entirely when `shouldReduceMotion` is true; the element renders static.
**When to use:** The scroll indicator bounce loop in HeroSection.
```typescript
// src/app/components/HeroSection.tsx scroll indicator
<motion.div
  animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
  transition={shouldReduceMotion ? undefined : { duration: 1.8, repeat: Infinity }}
  className="w-5 h-8 border border-[#00D9FF]/20 rounded-full flex justify-center pt-1.5"
>
```

### Pattern 4: whileHover/whileTap suppression
**What:** Pass `undefined` to whileHover and whileTap when reduced motion is active.
**When to use:** Navbar `motion.button`, HeroSection CTA `motion.a` elements.
```typescript
<motion.button
  whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
>
```

### Pattern 5: Navbar scroll-hide suppression
**What:** When `shouldReduceMotion` is true, pass `"0%"` as the static `animate` value so the nav is always visible, bypassing the scroll-triggered hide mechanic.
**When to use:** The `motion.nav` `animate={{ y: hidden ? "-100%" : "0%" }}` prop.
```typescript
// Keep motion.nav — do NOT swap to plain <nav> (tree stability)
<motion.nav
  animate={{ y: shouldReduceMotion ? "0%" : (hidden ? "-100%" : "0%") }}
  transition={shouldReduceMotion ? undefined : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
>
```

### Pattern 6: Footer navLinks array replacement
**What:** Replace the 5-item stale array with a 7-item array matching Navbar order.
**Current (stale):** About, Skills, Experience, Projects, Contact
**Required:** About, Experience, Case Studies, Projects, Certifications, Contact
```typescript
// src/app/components/Footer.tsx lines 1–7
const navLinks = [
  { title: "About",          path: "#about" },
  { title: "Experience",     path: "#experience" },
  { title: "Case Studies",   path: "#case-studies" },
  { title: "Projects",       path: "#projects" },
  { title: "Certifications", path: "#certifications" },
  { title: "Contact",        path: "#contact" },
];
```

Note: Footer's `navLinks` objects only need `title` and `path` — no `num` field (that is Navbar-only). The `"Skills"` entry is removed because there is no `#skills` section in the current page (ToolsSection uses `id="skills"` — verify below).

### Anti-Patterns to Avoid
- **Swapping `motion.nav` to `<nav>`:** Changes the component tree and can cause hydration mismatches; keep `motion.nav` and use static prop values instead.
- **Gating on `!shouldReduceMotion` with truthy check:** The established pattern uses ternary with `false`/`undefined` — don't invert the logic.
- **Omitting `transition={undefined}`:** If you gate `animate` but leave a `transition` duration, Framer Motion may still apply timing; always gate both together.
- **Adding `num` to Footer navLinks:** The Footer renders only `title` and `path`; the `num` field is used only by Navbar's desktop and mobile link renderers.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Detecting `prefers-reduced-motion` | Custom `window.matchMedia` listener + state | `useReducedMotion()` from framer-motion | Handles SSR, updates on media query change, reactive |
| Guarding animation props | Conditional component swap | `shouldReduceMotion ? false : { ... }` inline | Keeps component tree stable, less code |

## Common Pitfalls

### Pitfall 1: HeroSection animate vs whileInView
**What goes wrong:** Applying `whileInView` guard pattern to HeroSection when it uses `animate` (not `whileInView`).
**Why it happens:** HeroSection is above the fold and uses `animate` for on-load entrance. The established pattern in other sections uses `whileInView` because those sections are below the fold.
**How to avoid:** Check each `motion.*` element's prop — if it has `animate` (not `whileInView`), use Pattern 2. If it has `whileInView`, use Pattern 1.
**Warning signs:** Motion elements that fire immediately on page load rather than on scroll — those use `animate`.

### Pitfall 2: Missing the outer wrapper vs inner wrappers
**What goes wrong:** Gating only the outermost `motion.div` in HeroSection while inner `motion.*` elements remain ungated.
**Why it happens:** HeroSection nests multiple `motion.*` elements inside the outer left-column wrapper. Each has its own `initial`/`animate`/`transition`.
**How to avoid:** Count all `motion.*` elements with animation props before starting. In HeroSection: outer left wrapper, status badge, hostname label, h1, role title, description, metrics strip, CTA buttons row, social row, right column wrapper, scroll indicator outer, scroll indicator bounce inner — each needs to be assessed.
**Warning signs:** Some elements still animate despite reduced motion flag being active.

### Pitfall 3: Scroll indicator has TWO motion elements
**What goes wrong:** Gating only the outer `motion.div` opacity fade-in but leaving the inner `motion.div` bounce loop ungated.
**Why it happens:** The scroll indicator is:
```
motion.div (initial opacity: 0, animate opacity: 1) ← entrance
  └── motion.div (animate: { y: [0,8,0] }, repeat: Infinity) ← bounce
```
Both need separate guards.
**How to avoid:** Treat them as two independent elements.

### Pitfall 4: Footer Skills entry
**What goes wrong:** Keeping `{ title: "Skills", path: "#skills" }` in the Footer navLinks.
**Why it happens:** The old footer had "Skills" pointing to `#skills`. ToolsSection does use `id="skills"` so the anchor exists, but the CONTEXT.md specifies the correct order which does not include Skills. The Navbar does not list a "Skills" entry either.
**How to avoid:** Use the exact order from CONTEXT.md: About → Experience → Case Studies → Projects → Certifications → Contact. Skills is not in this list.

### Pitfall 5: Navbar motion.div (mobile overlay bottom bar)
**What goes wrong:** Missing the `motion.div` inside the mobile overlay bottom bar.
**Why it happens:** It is inside the `{isOpen && (...)}` conditional block, easy to overlook.
**Location:** Lines 193–228 of Navbar.tsx — the bottom bar with social icons and Download CV button.
**How to avoid:** Search for all `motion.` occurrences in Navbar.tsx before starting.

## Code Examples

### Complete motion.* inventory for HeroSection
Confirmed elements requiring guards (in render order):
1. `motion.div` — left column wrapper (`initial={{ opacity: 0, x: -40 }}`, `animate`)
2. `motion.div` — status badge (`initial={{ opacity: 0, y: 16 }}`, `animate`)
3. `motion.p` — hostname label (`initial={{ opacity: 0, y: 16 }}`, `animate`)
4. `motion.h1` — name heading (`initial={{ opacity: 0, y: 24 }}`, `animate`)
5. `motion.div` — role title (`initial={{ opacity: 0, y: 16 }}`, `animate`)
6. `motion.p` — description (`initial={{ opacity: 0, y: 14 }}`, `animate`)
7. `motion.div` — metrics strip (`initial={{ opacity: 0, y: 14 }}`, `animate`)
8. `motion.div` — CTA buttons row (`initial={{ opacity: 0, y: 14 }}`, `animate`)
9. `motion.a` — Download CV button (whileHover/whileTap scale)
10. `motion.a` — Get in Touch button (whileHover/whileTap scale)
11. `motion.div` — social row (`initial={{ opacity: 0 }}`, `animate`)
12. `motion.div` — right column diagram wrapper (`initial={{ opacity: 0, x: 40 }}`, `animate`)
13. `motion.div` — scroll indicator outer (`initial={{ opacity: 0 }}`, `animate`)
14. `motion.div` — scroll indicator bounce inner (`animate={{ y: [0, 8, 0] }}`, repeat Infinity)

### Complete motion.* inventory for Navbar
Confirmed elements requiring guards (in render order):
1. `motion.div` — mobile overlay bottom bar (`initial={{ opacity: 0 }}`, `animate`)
2. `motion.nav` — primary navbar (`animate={{ y: hidden ? "-100%" : "0%" }}`)
3. `motion.button` — Download CV button (`whileHover`, `whileTap` scale)
4. `motion.div` — gradient separator (`animate={{ opacity: scrolled ? 1 : 0 }}`)

Note on gradient separator (`motion.div` line 342–347): This is an opacity toggle driven by scroll state, not a vestibular motion animation. The CONTEXT.md does not explicitly call this out. The safe default is to also gate it, but its effect is only opacity (no movement) — treat as low-priority and follow Claude's discretion on whether to gate it.

### Import line (copy verbatim)
```typescript
import { motion, useReducedMotion } from "framer-motion";
```
HeroSection currently imports only `motion`. Navbar currently imports only `motion`. Both need `useReducedMotion` added to the import destructure.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| No reduced-motion support | `useReducedMotion()` hook from framer-motion | Already in project for 6 components | Closes DESIGN-03 accessibility gap |
| Footer mirrors old nav structure | Footer mirrors current Navbar | Phase 5 | Footer is now correct after Phase 3 reorder |

## Open Questions

1. **Navbar gradient separator opacity toggle**
   - What we know: `motion.div animate={{ opacity: scrolled ? 1 : 0 }}` — opacity change, not spatial motion
   - What's unclear: CONTEXT.md does not explicitly include or exclude it
   - Recommendation: Gate it for completeness (costs one ternary line); omitting is also defensible since it has no vestibular effect. Follow project convention: when in doubt, gate it.

2. **Footer "Skills" entry removal**
   - What we know: Current footer has `{ title: "Skills", path: "#skills" }`. ToolsSection uses `id="skills"` so the anchor resolves. CONTEXT.md specified order does not include Skills.
   - What's unclear: Is omitting Skills intentional or accidental in CONTEXT.md?
   - Recommendation: Follow CONTEXT.md order exactly (no Skills). The Navbar also does not list Skills as a separate nav item, so consistency favours omission.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None — no test suite exists (confirmed in CLAUDE.md) |
| Config file | None |
| Quick run command | N/A |
| Full suite command | N/A |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| FIX-02 | CV download attribute matches `Peter-Key-CV.pdf` in HeroSection | manual-only | Visual inspection of `download` attribute in source | N/A |
| DESIGN-03 | All motion elements in HeroSection + Navbar respect reduced-motion | manual-only | Set OS `prefers-reduced-motion: reduce`, reload page | N/A |

Manual verification steps:
- FIX-02: Inspect `HeroSection.tsx` line 342 — confirm `download="Peter-Key-CV.pdf"`
- DESIGN-03 (HeroSection): Enable OS reduced-motion, load page, confirm no entrance animations fire and scroll indicator does not bounce
- DESIGN-03 (Navbar): Enable OS reduced-motion, scroll down, confirm navbar does not hide
- Footer: Inspect rendered footer nav — confirm Case Studies and Certifications links are present and anchor to correct IDs

### Sampling Rate
- **Per task commit:** Manual source inspection of changed lines
- **Per wave merge:** Full visual check with reduced-motion OS setting enabled
- **Phase gate:** All four success criteria from phase description confirmed true

### Wave 0 Gaps
None — existing infrastructure (no test suite) covers the situation; manual verification is the appropriate method for this project.

## Sources

### Primary (HIGH confidence)
- Direct source inspection: `HeroSection.tsx` — all 14 motion elements inventoried, filename mismatch confirmed at line 342
- Direct source inspection: `Navbar.tsx` — all 4 motion elements inventoried, `downloadCV()` confirmed correct filename
- Direct source inspection: `Footer.tsx` lines 1–7 — stale navLinks array confirmed
- Direct source inspection: `AboutSection.tsx`, `CaseStudiesSection.tsx`, `CertificationsSection.tsx`, `EnhancedContactSection.tsx`, `ExperienceTimeline.tsx`, `ToolsSection.tsx` — established `useReducedMotion` pattern confirmed identical across all 6 components

### Secondary (MEDIUM confidence)
- Framer Motion docs: `useReducedMotion` returns `true | false | null`; passing `initial={false}` is a documented way to skip entrance animation
- CLAUDE.md: Confirms no test suite exists; `npm run build` not available in Node 18 environment

### Tertiary (LOW confidence)
- None

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new packages; framer-motion already in use
- Architecture: HIGH — patterns verified directly from 6 existing implementations in the same codebase
- Pitfalls: HIGH — inventoried from direct source reading of all three target files

**Research date:** 2026-03-10
**Valid until:** Stable — no external dependencies changing; valid until codebase changes
