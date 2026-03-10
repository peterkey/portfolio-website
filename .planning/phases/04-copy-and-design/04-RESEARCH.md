# Phase 4: Copy and Design - Research

**Researched:** 2026-03-10
**Domain:** Content editing (inline data arrays), Tailwind CSS / CSS utilities, Framer Motion reduced-motion
**Confidence:** HIGH

## Summary

Phase 4 is a brownfield improvement phase — no new architecture, no new libraries. All copy
changes are data-array edits inside self-contained components; all design changes target
`globals.css` (glow / border rules) and selective class additions inside component JSX. The
scope is well-defined by CONTEXT.md: specific copy replacements are already worded and
confirmed accurate, specific CSS utilities (.glow-card, .tech-corner, .status-led) already
exist and are ready to apply. The only technical risk flagged from STATE.md — the correct
Framer Motion 11 `useReducedMotion` API — is now resolved: the hook exists, is exported from
`framer-motion`, and returns `boolean | null`.

Every task in this phase can be executed as a direct file edit with no dependency on external
services, build tools, or new packages. The changes are isolated enough that each requirement
maps cleanly to one or two files.

**Primary recommendation:** Implement as five targeted copy tasks + three targeted design
tasks, editing data arrays and CSS in the existing codebase. No installs, no structural
changes, no new components.

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Experience entry ordering (COPY-01)**
- Entry order: Homelab → Tesco → Web Dev bootcamp → Degree
- Homelab / Linux infrastructure project moves to position 1
- Tesco entry keeps "Informal IT Support" framing in title (no rename)
- Tesco summary rewritten to open with IT support work, not delivery context
- "Currently In Progress" callout at bottom of section stays as-is

**Case study result copy (COPY-02)**
All four `result` fields rewritten to metric-led, outcome-first:
- M365 logins: "5 users restored to full M365 access within 10 minutes each — zero escalation, zero downtime."
- Handheld devices: "3 delivery devices returned to full operation before shift end, preventing route delays for the affected drivers."
- Training: "8 colleagues fully independent on the new system after a single training session each — eliminated recurring management requests for basic scheduling tasks."
- Homelab: "A production-grade home lab running multiple containerised services — fully self-hosted, zero cloud dependency, managed entirely via CLI."

**About section soft skills (COPY-03)**
- The soft skills card ("Problem Solving, Technical Documentation, Team Collaboration, Communication, Adaptability") is removed entirely
- No replacement specified — Claude's discretion on layout reflow

**Certifications (COPY-04)**
- Remove informal self-study entries: Basic Active Directory Administration, ServiceNow & Jira Basics, Google IT Support Skills
- Keep only: CompTIA A+ and MS-900 (Microsoft 365 Fundamentals)
- Both targeting 2026 — display target year, not a specific month
- Replace % progress bars with target completion date display
- No additional certs to add

**Tools section (COPY-05)**
- Descriptions must describe tasks and outcomes, not proficiency labels
- Remove "Basic X" labels from tool pills (e.g. "Active Directory (Basic)" → "Active Directory")
- Claude rewrites descriptions to task/outcome-led
- "Professional Skills" category (Problem Solving, Documentation, Team Collaboration) — remove or replace with something that demonstrates outcome rather than self-assertion

**Design — glow and contrast (DESIGN-01)**
- Tune-up only: increase glow intensity on `.glow-card` hover state, strengthen card border contrast, brighter cyan on active/hover states
- Same design system — more presence, not structural redesign

**Design — NOC decorative elements (DESIGN-02)**
- Status LEDs: small pulsing dot next to key section headers (Experience, Case Studies, Contact)
- Corner brackets: apply `.tech-corner` class to glow-cards in key sections
- Scan-line / terminal effects: subtle effect on a key heading (e.g. About section title)
- Rack unit aesthetic: tiny '1U'/'2U' mono labels at ~20% opacity on card edges, and/or small port/connector icon details bottom-right; subtle decoration, not labelled explanations
- Claude applies these where they add rather than distract

**Accessibility (DESIGN-03)**
- `useReducedMotion` hook from Framer Motion implemented across all sections that use animation
- Wrap all `motion.div` scroll animations with reduced-motion conditional
- Verify exact Framer Motion 11 API before implementation (now resolved — see below)

### Claude's Discretion
- Whether to add a replacement card in the About section grid after soft skills removal, or let the layout reflow
- Exact wording of rewritten Tesco summary (keep IT-support-first, Peter-authentic tone)
- Which specific cards get rack-unit labels vs corner brackets vs LEDs — apply deliberately where it adds
- Tools section category restructure specifics (how to reframe "Professional Skills" category)

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| COPY-01 | Experience section leads with IT role identity — "Delivery Driver" not the headline | Array reorder: swap entries[0] (Tesco) and entries[1] (Homelab); rewrite Tesco `summary` field |
| COPY-02 | Case study result fields use metric-led, outcome-first copy | Edit `result` string in each of the 4 `caseStudies` objects in CaseStudiesSection.tsx |
| COPY-03 | About section soft skills list removed | Remove `softSkills` array and the card JSX that renders it; grid collapses from md:grid-cols-2 to single column or reflows gracefully |
| COPY-04 | Certifications presented with target completion dates instead of percentage progress bars | Remove 3 informal entries; add `targetDate?: string` field to interface; remove progress bar JSX; add target date display |
| COPY-05 | Tools section describes tasks and outcomes, not vague proficiency labels | Rewrite `description` fields in all `toolCategories`; strip "(Basic)" from tool pill strings; remove or replace "Professional Skills" category |
| DESIGN-01 | Visual contrast and glow effects are strengthened | Edit `.glow-card:hover` box-shadow values and border-color opacity in globals.css |
| DESIGN-02 | NOC decorative elements used deliberately | Apply `.tech-corner` class to selected cards; add `.status-led` span near section header eyebrows; add rack-unit mono labels as JSX spans |
| DESIGN-03 | `useReducedMotion` hook implemented to wrap animations for accessibility | Import `useReducedMotion` from `framer-motion`; use returned boolean to conditionally disable animation props |
</phase_requirements>

---

## Standard Stack

### Core (already installed — no installs needed)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| framer-motion | 11.1.7 | Animation, `useReducedMotion` hook | Already used in every component |
| Tailwind CSS | (project version) | Utility classes for layout adjustments | Design system foundation |
| CSS (globals.css) | — | `.glow-card`, `.tech-corner`, `.status-led` utilities | All utilities pre-defined, ready to apply |

### No New Dependencies
This phase requires zero new npm packages. All tools are already present.

---

## Architecture Patterns

### Data Array Pattern (Copy Changes)
Every section stores content as a typed array at the top of the component file. Copy edits are pure data changes — no JSX restructure needed.

```
ExperienceTimeline.tsx    → const entries: TimelineEntry[]      (reorder + edit summary)
CaseStudiesSection.tsx    → const caseStudies: CaseStudy[]      (edit result fields)
AboutSection.tsx          → const softSkills + card JSX         (remove card)
CertificationsSection.tsx → const certifications: Certification[] (remove entries, add field)
ToolsSection.tsx          → const toolCategories: ToolCategory[] (rewrite descriptions, remove category)
```

### Reduced-Motion Pattern (DESIGN-03)
Framer Motion 11 exports `useReducedMotion()` — returns `boolean | null`. Use it at the
component level (not inside a map), then conditionally set animation props.

```typescript
// Source: verified from framer-motion 11.1.7 type definitions
import { motion, useReducedMotion } from "framer-motion";

const MySection = () => {
  const shouldReduceMotion = useReducedMotion(); // boolean | null

  const animationProps = shouldReduceMotion
    ? {}  // no animation when OS setting active
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true },
      };

  return (
    <motion.div {...animationProps}>
      {/* content */}
    </motion.div>
  );
};
```

**Important:** `null` means the hook hasn't resolved yet (SSR); treat `null` as "do animate"
(same as `false`) to avoid flash of no-animation on first render.

### CSS Glow Intensification Pattern (DESIGN-01)
The current `.glow-card:hover` in globals.css uses conservative values:
```
box-shadow:
  0 0 0 1px rgba(0, 217, 255, 0.22),   ← ring
  0 0 24px rgba(0, 217, 255, 0.07),    ← ambient glow (very dim)
  0 16px 48px rgba(0, 0, 0, 0.5);      ← depth shadow
border-color: rgba(0, 217, 255, 0.28) !important;
```
Increase the middle value (ambient glow) and outer ring opacity to make the card pop. A
typical "boldened" value would be:
```
0 0 32px rgba(0, 217, 255, 0.18),   ← from 0.07 → 0.18
0 0 0 1px rgba(0, 217, 255, 0.35),  ← from 0.22 → 0.35
```
Also strengthen the base `.glass` border slightly so cards read against the section background
at rest (not just on hover).

### Status LED Placement Pattern (DESIGN-02)
`.status-led` is a 6×6px green dot, already animated. Place it inline with the eyebrow span:

```tsx
<div className="flex items-center gap-2">
  <span className="status-led" />
  <span className="eyebrow mb-3">Where I've been</span>
</div>
```

Apply to: ExperienceTimeline header, CaseStudiesSection header, EnhancedContactSection header.

### Tech-Corner Placement Pattern (DESIGN-02)
`.tech-corner` uses `::before` and `::after` pseudo-elements for top-left and bottom-right
bracket lines. It requires `position: relative` on the target — all `glow-card` containers
already have this (they use Tailwind `rounded-2xl` which doesn't set position, but the card
divs can receive `tech-corner` directly).

Add `tech-corner` class to the outer `div` of selected glow-cards. Do not apply to every
card — pick the most prominent cards in Case Studies and Experience sections.

### Rack Unit Label Pattern (DESIGN-02)
Add an absolutely-positioned mono span inside each card where the rack-unit aesthetic applies:

```tsx
<div className="glow-card glass border rounded-2xl overflow-hidden relative tech-corner">
  {/* Rack unit label — decorative, screen-reader hidden */}
  <span
    aria-hidden="true"
    className="absolute bottom-2 right-3 font-mono text-[9px] text-[#00D9FF] opacity-20 tracking-widest select-none"
  >
    1U
  </span>
  {/* card content */}
</div>
```

Vary between `1U` and `2U` across cards. Opacity at 20% makes it invisible at a glance but
visible to those looking closely — matches the design intent.

### About Section Grid Reflow (COPY-03)
Current layout:
```
lg:grid-cols-3   → [Bio (col-span-2)] [Goals (col-span-1)]
md:grid-cols-2   → [Technical Skills] [Soft Skills + Currently Learning]
```
After removing the Soft Skills card, the `md:grid-cols-2` row has only Technical Skills. The
grid will render Technical Skills in the left column with empty right space. Options:

1. Collapse to single column (`md:grid-cols-1`) and widen Technical Skills card
2. Move "Currently Learning" pills out of the Soft Skills card into a standalone card
3. Keep `md:grid-cols-2` and let Technical Skills span full width with `md:col-span-2`

**Recommendation (Claude's discretion):** Extract the "Currently Learning" block into a
standalone card that replaces the removed Soft Skills card. This maintains the two-column
grid, removes the soft skills list, and preserves the "Currently Learning" content which is
factual and outcome-relevant. The card becomes "Currently Studying" with the two real certs
(CompTIA A+, MS-900) rather than the inflated current list.

### Certifications Interface Change (COPY-04)
Current interface:
```typescript
interface Certification {
  name: string;
  issuer: string;
  status: string;
  date?: string;
  progress?: number;
  description: string;
}
```
Add `targetDate?: string`, remove progress bar JSX. The `date` field already exists but is
unused — repurpose it or use `targetDate` for clarity. Two entries remain:
- CompTIA A+ — target: "2026"
- MS-900 — target: "2026"

Display as a badge/label replacing the progress bar: e.g. `// TARGET: 2026` in mono font,
styled like an eyebrow.

### Anti-Patterns to Avoid

- **Do not apply `.tech-corner` to every single card** — it becomes visual noise. Use it on
  3–5 cards maximum across the whole page.
- **Do not set `useReducedMotion()` inside a `.map()` callback** — React hooks cannot be
  called conditionally or inside loops. Call at component top level.
- **Do not remove the "Currently In Progress" callout at the bottom of ExperienceTimeline** —
  this is explicitly locked in CONTEXT.md as staying as-is.
- **Do not rename the Tesco entry title** — keep "Customer Delivery Driver & Informal IT
  Support"; only the summary paragraph changes.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| OS reduced-motion detection | Custom `window.matchMedia` listener | `useReducedMotion()` from framer-motion | Already handles SSR, returns null safely, integrates with existing motion components |
| Animated status dot | Custom CSS keyframe animation | `.status-led` class (already in globals.css) | Already defined and tuned |
| Card corner accents | Custom SVG overlays | `.tech-corner` class (already in globals.css) | Already defined with `::before`/`::after` pseudo-elements |

---

## Common Pitfalls

### Pitfall 1: useReducedMotion called inside map
**What goes wrong:** `entries.map((entry, i) => { const rm = useReducedMotion(); ... })` —
React hook rules violation, runtime error.
**Why it happens:** Reflex to put logic next to where it's used.
**How to avoid:** Call `useReducedMotion()` once at the top of the component function, store
in a variable, reference that variable inside the map.

### Pitfall 2: Removing soft skills card breaks grid layout
**What goes wrong:** Deleting the JSX block without adjusting the grid container leaves a
visually broken two-column row with only one card.
**Why it happens:** The grid structure wraps both cards; removing one without restructuring
leaves orphaned grid space.
**How to avoid:** Either convert to `md:col-span-2` on the surviving card or replace with the
"Currently Studying" standalone card (recommended).

### Pitfall 3: Progress bar removal leaves JSX conditional dangling
**What goes wrong:** The `{cert.progress && (...)}` block renders nothing if `progress` is
removed from data but the conditional and the `targetDate` display aren't both updated together.
**Why it happens:** Two places in CertificationsSection.tsx reference `cert.progress`: the
percentage badge at the top-right of each card, and the progress bar at the bottom. Both must
be removed.
**How to avoid:** Search for all `cert.progress` references in the file before editing.

### Pitfall 4: .tech-corner on overflow:hidden parents
**What goes wrong:** Cards using `overflow-hidden` clip the `.tech-corner` `::before`/`::after`
pseudo-elements, making the brackets invisible.
**Why it happens:** ExperienceTimeline cards use `overflow-hidden` on the outer card div.
**How to avoid:** Apply `.tech-corner` to a wrapper div that does NOT have `overflow-hidden`,
or remove `overflow-hidden` from cards where `.tech-corner` is added. Inspect each target
card before applying.

### Pitfall 5: LED colour against cardDark vs dark backgrounds
**What goes wrong:** The green LED (`#22C55E`) is visible against `bg-trueAutumn-dark` but may
need checking against `bg-trueAutumn-cardDark` where CaseStudiesSection lives.
**Why it happens:** The section backgrounds differ; green on near-black reads differently.
**How to avoid:** The LED is self-illuminating (animated box-shadow), so it reads on both. No
action needed, but verify visually.

---

## Code Examples

### Verified: useReducedMotion in Framer Motion 11
```typescript
// Source: node_modules/framer-motion/dist/index.d.ts (verified 2026-03-10)
// Return type: boolean | null
// null = not yet resolved (SSR); false = user has no preference; true = reduce motion

import { motion, useReducedMotion } from "framer-motion";

const ExperienceTimeline = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {entries.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* content */}
        </motion.div>
      ))}
    </>
  );
};
```

**Note on `initial={false}`:** Passing `false` to `initial` tells Framer Motion to skip the
initial animation state entirely — the element renders at its final position immediately.
This is the correct pattern for reduced-motion, not `initial={{ opacity: 1, y: 0 }}`.

### Verified: Experience entry array reorder
```typescript
// Current order in entries[]: Tesco (id:1), Homelab (id:2), Bootcamp (id:3), Degree (id:4)
// Required order: Homelab → Tesco → Bootcamp → Degree
// Implementation: move the Homelab object to array index 0; no other changes to array structure
// The id fields don't need to match position — they're used as React keys, not sort order
const entries: TimelineEntry[] = [
  { id: 2, /* Homelab */ },
  { id: 1, /* Tesco — summary rewritten */ },
  { id: 3, /* Bootcamp */ },
  { id: 4, /* Degree */ },
];
```

### Verified: .glow-card current values (globals.css lines 117–127)
```css
/* Current — to be strengthened for DESIGN-01 */
.glow-card:hover {
  box-shadow:
    0 0 0 1px rgba(0, 217, 255, 0.22),
    0 0 24px rgba(0, 217, 255, 0.07),   /* ← very dim ambient */
    0 16px 48px rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 217, 255, 0.28) !important;
  transform: translateY(-2px);
}
```

### Pattern: Rack unit label (DESIGN-02)
```tsx
// Decorative only — aria-hidden prevents screen readers seeing "1U"
<span
  aria-hidden="true"
  className="absolute bottom-2 right-3 font-mono text-[9px] text-[#00D9FF] opacity-20 tracking-widest select-none pointer-events-none"
>
  1U
</span>
```

### Pattern: Status LED next to eyebrow
```tsx
<div className="flex items-center gap-2 mb-3">
  <span className="status-led flex-shrink-0" aria-hidden="true" />
  <span className="eyebrow">Where I&apos;ve been</span>
</div>
```
**Note:** Remove `mb-3` from the `eyebrow` span itself and put it on the wrapper div, since
the eyebrow is no longer a block-level sibling.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `window.matchMedia('prefers-reduced-motion')` manually | `useReducedMotion()` from Framer Motion | Framer Motion v5+ | Cleaner, SSR-safe, integrates with motion components |
| % progress bars for in-progress certs | Target year display | Phase 4 (this phase) | More honest; removes false precision |
| Soft skills bullet lists | Removed entirely | Phase 4 (this phase) | Adjective lists dismissed by technical recruiters |

---

## Open Questions

1. **Tesco summary exact wording**
   - What we know: Must open with IT support work, not delivery context; keep Peter-authentic tone
   - What's unclear: Exact sentences — this is Claude's discretion per CONTEXT.md
   - Recommendation: Write in planning task; the planner should draft the copy directly in the plan

2. **About grid after soft skills removal**
   - What we know: Current grid has Technical Skills + Soft Skills in md:grid-cols-2
   - What's unclear: Whether to add "Currently Studying" replacement or collapse to full-width
   - Recommendation: "Currently Studying" standalone card (documented above as recommended approach)

3. **Tools "Professional Skills" replacement**
   - What we know: Remove the category; it lists soft skills as tools
   - What's unclear: What replaces it (Claude's discretion)
   - Recommendation: Replace with "Infrastructure & Automation" category covering Docker, Docker Compose, Bash scripting, Linux — tools with real, describable outcomes

---

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None — no test suite exists (confirmed in CLAUDE.md) |
| Config file | n/a |
| Quick run command | `npm run type-check` (TypeScript only) |
| Full suite command | `npm run lint && npm run type-check` (Node 18 — build won't run) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| COPY-01 | Homelab entry appears first in rendered timeline | manual | Visual inspection via `npm run dev` | ✅ ExperienceTimeline.tsx |
| COPY-02 | Result fields open with metric or outcome, not vague description | manual | Visual inspection + copy review | ✅ CaseStudiesSection.tsx |
| COPY-03 | No soft skills bullet list in About section | manual | Visual inspection | ✅ AboutSection.tsx |
| COPY-04 | No progress bars; target year displayed instead | manual | Visual inspection | ✅ CertificationsSection.tsx |
| COPY-05 | No "Basic X" labels; descriptions are task-led | manual | Visual inspection + copy review | ✅ ToolsSection.tsx |
| DESIGN-01 | Glow effect visibly stronger than baseline | manual | Visual inspection before/after | ✅ globals.css |
| DESIGN-02 | Status LEDs visible near Experience, Case Studies, Contact headers | manual | Visual inspection | ✅ Component files |
| DESIGN-03 | No animations fire when OS reduced-motion is ON | manual | Enable OS reduced-motion; load page | ✅ Component files |
| DESIGN-03 | TypeScript compilation succeeds after hook changes | automated | `npm run type-check` | ✅ |

### Sampling Rate
- **Per task commit:** `npm run type-check`
- **Per wave merge:** `npm run lint && npm run type-check`
- **Phase gate:** All manual visual checks passing before `/gsd:verify-work`

### Wave 0 Gaps
None — existing TypeScript infrastructure covers type safety. No test files needed for this phase; all validation is visual + type-check.

---

## Sources

### Primary (HIGH confidence)
- `node_modules/framer-motion/dist/index.d.ts` — `useReducedMotion` signature verified directly: `declare function useReducedMotion(): boolean | null`
- `node_modules/framer-motion/package.json` — version 11.1.7 confirmed
- `/home/peter/Documents/portfolio-website/src/app/globals.css` — all CSS utilities read directly, current `.glow-card` values documented
- `/home/peter/Documents/portfolio-website/src/app/components/*.tsx` — all five target components read in full; data structures and JSX patterns documented from source

### Secondary (MEDIUM confidence)
- CLAUDE.md project instructions — confirms no test suite, Node 18 constraint, design system conventions
- `.planning/phases/04-copy-and-design/04-CONTEXT.md` — all decisions and copy strings verified

### Tertiary (LOW confidence)
- None — all findings supported by direct source inspection.

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all libraries verified from installed node_modules
- Architecture: HIGH — all patterns derived from reading actual component source files
- Pitfalls: HIGH — identified from direct inspection of the specific JSX patterns that create each risk
- Copy content: HIGH — all copy strings locked in CONTEXT.md with user confirmation

**Research date:** 2026-03-10
**Valid until:** 2026-04-10 (stable stack; Framer Motion API changes are the main risk but unlikely in a minor release)
