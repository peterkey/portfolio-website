# Phase 2: Hero Hook - Research

**Researched:** 2026-03-09
**Domain:** React/Next.js component editing — copy, animation timing, dependency removal
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **Role title:** Single stable string "IT Support Specialist" — replaces TypeAnimation rotating sequence entirely
- **Value proposition:** "I keep businesses running by resolving IT issues before they become problems" — replaces the current description paragraph
- **Stats:** Three stats reframed: `8+` / `YRS EXPERIENCE` (keep), `FCR-FOCUSED` / no number (replaces `20+` / `STAFF SUPPORTED`), `120+` / `USERS/WEEK` (keep value, tighten label)
- **CTA animation:** Remove all `delay` values from HeroSection motion elements — hero loads instantly; Framer Motion wrappers can remain but with `delay: 0`
- **Dependency removal:** `react-type-animation` can be removed if no other component uses it (confirmed: only HeroSection imports it)

### Claude's Discretion

- Whether to remove `motion.div` wrappers entirely or keep them with `delay: 0`
- Exact label text for the `120+` stat (e.g. `USERS/WEEK` vs `USERS SUPPORTED/WK`)
- Whether `FCR-FOCUSED` sits in the value field with no number, or if a label-only style is used

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| HERO-01 | Hero displays a single stable role title — no rotating type animation | TypeAnimation at line 296 of HeroSection.tsx is the only instance; removing it and replacing with a plain `<span>` satisfies this |
| HERO-02 | Hero has a clear one-sentence value proposition that states outcomes, not activities | The description `<motion.p>` at line 314 is the target element; direct string replacement |
| HERO-03 | Hero stats reframed with outcome-oriented language | Inline array at line 332–336 is the only data source for the stat strip; changing array values is the complete implementation |
| HERO-04 | Hero CTA buttons are visible on load without animation delay | CTA `motion.div` at line 348 has `delay: 0.9`; setting all delay values to 0 across the left column satisfies this |
</phase_requirements>

---

## Summary

Phase 2 is a targeted surgical edit to a single file: `src/app/components/HeroSection.tsx`. There is no new architecture, no new libraries, and no layout restructuring. Every change maps to a specific, locatable line or block in the existing file.

The work divides into four discrete sub-tasks: (1) swap TypeAnimation for a static string, (2) replace the description paragraph copy, (3) update the stats data array, (4) zero out all Framer Motion `delay` values. These are independent of each other and can be executed in any order. The only cross-cutting concern is the `react-type-animation` import and package — it is safe to remove after the TypeAnimation JSX is replaced, because it has no other consumers in the codebase.

No component outside HeroSection is touched. No props, state, or external data layer is involved. The NetworkDiagram SVG and all right-column content is unchanged.

**Primary recommendation:** Make all four changes in a single clean edit to HeroSection.tsx, then remove the `react-type-animation` package with `npm uninstall react-type-animation`.

---

## Standard Stack

### Core (unchanged — no new libraries needed)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| framer-motion | ^11.1.7 | Animation wrappers on motion elements | Already in use; keep with zero delays |
| Next.js 14 | ^16.1.6 | Framework | Project constraint — no changes |
| Tailwind CSS | ^3.4.1 | Styling | Project constraint — no changes |

### Library Being Removed

| Library | Version | Reason |
|---------|---------|--------|
| react-type-animation | ^3.2.0 | Only consumer is HeroSection; once TypeAnimation JSX is replaced with a plain span, the import and package can be removed |

**Uninstall command:**
```bash
npm uninstall react-type-animation
```

---

## Architecture Patterns

### Existing HeroSection Structure (reference)

```
HeroSection
├── Background layers (grid, ambient glows) — untouched
├── Left column (motion.div, duration 0.9s, delay 0)
│   ├── Status badge (motion.div, delay 0.1)       → set delay to 0
│   ├── Heading block
│   │   ├── HOSTNAME label (motion.p, delay 0.2)   → set delay to 0
│   │   ├── h1 "Peter Williams-Key" (delay 0.3)    → set delay to 0
│   │   └── Role title div (delay 0.45)            → set delay to 0; replace TypeAnimation
│   ├── Description paragraph (delay 0.6)          → set delay to 0; replace copy
│   ├── Stats strip (delay 0.75)                   → set delay to 0; update data array
│   ├── CTA buttons (delay 0.9)                    → set delay to 0
│   └── Social row (delay 1.05)                    → set delay to 0
└── Right column (NetworkDiagram) — untouched
└── Scroll indicator (delay 1.6) — untouched (out of above fold)
```

### Pattern 1: Replacing TypeAnimation with a Static Span

**What:** Remove the `<TypeAnimation>` component and its wrapper logic; replace with a plain `<span>`.
**When to use:** Any time a rotating animation is removed in favour of a stable label.

```tsx
// BEFORE
<TypeAnimation
  sequence={["Help Desk Support Specialist", 2400, ...]}
  wrapper="span"
  speed={55}
  repeat={Infinity}
  style={{ color: "#00D9FF" }}
  aria-label="IT Support Specialist roles"
/>

// AFTER — static, immediate, accessible
<span style={{ color: "#00D9FF" }}>IT Support Specialist</span>
```

The `min-h-[2rem]` on the parent `motion.div` was there to prevent layout shift during TypeAnimation cycling. With a static title it can be removed or left — it does no harm.

### Pattern 2: Zeroing Framer Motion Delays

**What:** Set `delay` to `0` in every `transition` prop on the left column's `motion.div` elements.
**When to use:** When the user requirement is that all content is visible immediately on load.

```tsx
// BEFORE
transition={{ duration: 0.7, delay: 0.9 }}

// AFTER
transition={{ duration: 0.7, delay: 0 }}
```

The `duration` values can stay as-is — the fade/slide entrance animation adds polish. Only `delay` is zeroed. The outer left column wrapper itself already has `delay: 0` (`transition={{ duration: 0.9, ease: "easeOut" }}`); no change needed there.

Discretion call: keeping `motion.div` wrappers with `delay: 0` is the safer approach — it preserves the entrance animation polish while satisfying HERO-04. Removing the wrappers entirely would be a larger diff with no benefit.

### Pattern 3: Stats Data Array Update

**What:** Edit the inline array literal in the stats strip map.
**When to use:** Copy-only change to stat values or labels.

```tsx
// BEFORE
[
  { value: "8+",   label: "YRS EXPERIENCE" },
  { value: "20+",  label: "STAFF SUPPORTED" },
  { value: "120+", label: "USERS / WEEK" },
]

// AFTER
[
  { value: "8+",         label: "YRS EXPERIENCE" },
  { value: "FCR-FOCUSED", label: "" },   // or label: "QUALITY FOCUS"
  { value: "120+",       label: "USERS / WEEK" },
]
```

Discretion call on `FCR-FOCUSED`: the stat card renders `value` in large cyan mono and `label` below in tiny muted mono. "FCR-FOCUSED" is punchy enough to stand as the value with no label, or a short label like `QUALITY FOCUS` could reinforce it. Recommendation: use empty label — the value is self-explanatory and a label-less card is visually distinctive.

### Pattern 4: CV Download Href (Pre-existing Fix Verification)

The CTA button at line 354 still shows `href="/cv.txt"` and `download="Peter_Williams-Key_CV.pdf"` in the current source. Phase 1 fixed this by placing `peter-key-cv.pdf` in `public/` — the href must now be `/peter-key-cv.pdf`. Confirm the Phase 1 fix is reflected before or during this phase's edit. Do not regress it.

### Anti-Patterns to Avoid

- **Removing the `motion.div` wrappers entirely:** Creates a larger diff than needed; entrance animations are part of the NOC polish.
- **Changing the description `<p>` className:** Only the string content changes; the Tailwind classes stay.
- **Editing NetworkDiagram:** Out of scope; SVG is untouched.
- **Adding a new dependency:** No new library is needed; TypeAnimation is replaced with a native `<span>`.
- **Leaving the `react-type-animation` import:** After replacing the JSX, the import at line 3 must be deleted too or TypeScript will warn about an unused import. The package should then be uninstalled.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Static role title | Custom typewriter with cleared interval | Plain `<span>` | TypeAnimation is being removed; a span is sufficient and has no runtime cost |
| Fade-in on load | Custom CSS keyframe animation | Existing `motion.div` with `delay: 0` | Framer Motion already handles this; no new code |

---

## Common Pitfalls

### Pitfall 1: Leaving the TypeAnimation Import After Removing the JSX

**What goes wrong:** TypeScript/ESLint warns "unused import"; build may fail in CI.
**Why it happens:** Developer removes the JSX block but forgets line 3.
**How to avoid:** Delete both the `import` statement and the `<TypeAnimation>` usage in a single edit pass.
**Warning signs:** `ESLint: 'TypeAnimation' is defined but never used`.

### Pitfall 2: Regressing the CV Download Href

**What goes wrong:** If the file is edited from the current source state (which still shows `href="/cv.txt"`), the Phase 1 fix could be undone.
**Why it happens:** Editing from the repo state without verifying the Phase 1 change was committed.
**How to avoid:** Before writing HeroSection.tsx, confirm the href value is `/peter-key-cv.pdf` (the Phase 1 output). If it still reads `/cv.txt`, correct it in this edit too.
**Warning signs:** Download button sends the old cv.txt path.

### Pitfall 3: Stats Strip Layout Break with FCR-FOCUSED as Value

**What goes wrong:** "FCR-FOCUSED" is longer than "20+" — it may overflow the stat card width or wrap awkwardly.
**Why it happens:** The card uses `px-4 py-2.5` fixed padding; long value strings weren't previously tested.
**How to avoid:** The font is `font-mono text-lg` — "FCR-FOCUSED" at that size will be roughly 90px wide, which fits comfortably in the existing card. No CSS change needed, but verify visually.
**Warning signs:** Card wider than its siblings, or text wrapping onto two lines.

### Pitfall 4: `min-h-[2rem]` on Role Title Container

**What goes wrong:** If `min-h-[2rem]` is left on the `motion.div` wrapping the role title, there's no harm. But if it's removed accidentally, the heading block layout is identical — it won't break. Worth knowing it's safe either way.
**Why it happens:** The min-height was needed to prevent layout shift during TypeAnimation cycling; it has no purpose with a static title.
**How to avoid:** Leave it — zero risk, saves a diff line.

---

## Code Examples

### Complete Left Column — All Delays Zeroed

```tsx
// All delay values in the left column set to 0
// Outer wrapper
transition={{ duration: 0.9, ease: "easeOut" }}          // was: no delay (already 0)

// Status badge
transition={{ duration: 0.6, delay: 0 }}                  // was: delay: 0.1

// HOSTNAME label
transition={{ duration: 0.6, delay: 0 }}                  // was: delay: 0.2

// h1
transition={{ duration: 0.8, delay: 0 }}                  // was: delay: 0.3

// Role title div
transition={{ duration: 0.7, delay: 0 }}                  // was: delay: 0.45

// Description
transition={{ duration: 0.7, delay: 0 }}                  // was: delay: 0.6

// Stats strip
transition={{ duration: 0.7, delay: 0 }}                  // was: delay: 0.75

// CTA buttons
transition={{ duration: 0.7, delay: 0 }}                  // was: delay: 0.9

// Social row
transition={{ duration: 0.7, delay: 0 }}                  // was: delay: 1.05
```

The scroll indicator (`delay: 1.6`) is below the fold and decorative — leave it as-is.

### Updated Stats Array

```tsx
{[
  { value: "8+",          label: "YRS EXPERIENCE" },
  { value: "FCR-FOCUSED", label: "" },
  { value: "120+",        label: "USERS / WEEK" },
].map((stat) => (
  <div key={stat.label || stat.value} className="glass border rounded-lg px-4 py-2.5 tech-corner">
    <div className="font-mono font-bold text-lg text-[#00D9FF] leading-none">{stat.value}</div>
    {stat.label && (
      <div className="font-mono text-[0.55rem] text-[#4A6A8A] tracking-widest mt-0.5">{stat.label}</div>
    )}
  </div>
))}
```

Note: the `key` prop must change from `stat.label` to `stat.label || stat.value` because the FCR-FOCUSED entry has an empty label — React requires a unique non-empty key.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| TypeAnimation rotating sequence | Static `<span>` string | Phase 2 | Eliminates visual noise; role is immediately scannable |
| Activity-focused description ("delivering first-line support") | Outcome-focused value prop ("keeps businesses running") | Phase 2 | Recruiter reads the value within 3 seconds of landing |
| Headcount stat ("20+ STAFF SUPPORTED") | Quality signal ("FCR-FOCUSED") | Phase 2 | Removes a weak metric; adds a mindset differentiator |
| Staggered entrance delays (0.1s to 1.05s) | Immediate load, no delays | Phase 2 | CTA always visible; no "waiting" feeling for fast readers |

---

## Open Questions

1. **CV href in current working tree**
   - What we know: Phase 1 fixed the download; the committed source may differ from what's on disk at edit time.
   - What's unclear: Whether the HeroSection.tsx on disk already has `href="/peter-key-cv.pdf"` or still shows the old `href="/cv.txt"`.
   - Recommendation: Planner should include a verification step — read the href value before writing the file and correct it if needed.

2. **FCR-FOCUSED label text**
   - What we know: User marked this as Claude's discretion; empty label is valid.
   - What's unclear: Whether an empty label card looks intentional or broken to a first-time visitor.
   - Recommendation: Use empty label. The value "FCR-FOCUSED" is self-contained and distinctive. A label like "QUALITY FOCUS" risks redundancy.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None — no test suite exists in this project |
| Config file | None |
| Quick run command | `npm run type-check` (TypeScript compiler, no emit) |
| Full suite command | `npm run type-check` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| HERO-01 | TypeAnimation is absent; role title is a static string | manual-only | `npm run type-check` (confirms no import error) | ❌ Wave 0 — no test infra |
| HERO-02 | Value proposition text is present and correct | manual-only | `npm run type-check` | ❌ Wave 0 |
| HERO-03 | Stats array has FCR-FOCUSED and updated labels | manual-only | `npm run type-check` | ❌ Wave 0 |
| HERO-04 | All motion.div delay values are 0 in left column | manual-only | `npm run type-check` | ❌ Wave 0 |

All four requirements are content/visual changes that cannot be meaningfully automated without a browser testing framework (Playwright, Cypress). The project has no test suite and adding one is out of scope for this phase. TypeScript compilation is the only automated gate available.

### Sampling Rate

- **Per task commit:** `npm run type-check` — confirms no TypeScript errors introduced
- **Per wave merge:** `npm run type-check`
- **Phase gate:** TypeScript clean + visual verification in browser via `npm run dev`

### Wave 0 Gaps

- [ ] No test files exist — browser visual verification is the only option for this phase
- [ ] `npm run type-check` must pass after removing the `react-type-animation` import

*(No test infrastructure is expected for this project — CLAUDE.md explicitly states "There is no test suite.")*

---

## Sources

### Primary (HIGH confidence)

- Direct read of `src/app/components/HeroSection.tsx` — all line references are exact
- Direct read of `package.json` — dependency versions confirmed
- Direct read of `.planning/phases/02-hero-hook/02-CONTEXT.md` — all decisions locked
- Grep search confirming `react-type-animation` / `TypeAnimation` has zero usages outside HeroSection

### Secondary (MEDIUM confidence)

- CLAUDE.md project instructions — design system patterns, font conventions, gradient text rules

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all libraries already in use; no research needed for new ones
- Architecture: HIGH — single file, all changes are line-addressable from reading the source
- Pitfalls: HIGH — identified from direct code inspection, not speculation
- Validation: HIGH — confirmed no test suite exists per CLAUDE.md; TypeScript is the only automated check

**Research date:** 2026-03-09
**Valid until:** Stable — this phase makes no architectural decisions; valid until HeroSection.tsx is restructured
