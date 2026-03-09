# Phase 2: Hero Hook - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Rewrite the HeroSection so visitors understand who Peter is and why to contact him — before scrolling. This phase is scoped to `HeroSection.tsx` only: role title, value proposition copy, stat strip reframing, and CTA animation timing. No new sections, no layout changes.

</domain>

<decisions>
## Implementation Decisions

### Role Title
- Single stable title: **"IT Support Specialist"**
- Replaces the `TypeAnimation` rotating sequence entirely
- No qualifier beneath it — title stands alone
- `react-type-animation` dependency can be removed if no other component uses it

### Value Proposition
- One sentence, outcomes-not-activities framing: **"I keep businesses running by resolving IT issues before they become problems"**
- Replaces the current description paragraph ("Customer-focused IT professional delivering first-line technical support...")
- No technology callouts (M365, Windows, etc.) — kept broad and punchy
- Reliability and proactivity are the signal

### Stats Reframing
- Three stats, same number values, reframed labels:
  - `8+` / `YRS EXPERIENCE` — keep as-is
  - `FCR-FOCUSED` — replaces `20+ STAFF SUPPORTED` (that stat was weak and unclear)
  - `120+` / `USERS / WEEK` — keep value, label stays or is tightened to `USERS SUPPORTED / WK`
- No percentage-based metrics (FCR-FOCUSED is a quality signal without needing a specific number)

### CTA Animation
- Remove all animation delays from HeroSection — hero loads instantly
- All `motion.div` wrappers can keep their fade/slide animation but `delay` values set to 0
- The CTA buttons specifically must be visible immediately on load (HERO-04)
- Status badge, heading, stats, social row — all immediate too (user preference: no 'waiting' feeling)
- The `Framer Motion` animations themselves can remain for polish; just zero out all `delay` values

### Claude's Discretion
- Whether to remove the `motion.div` wrappers entirely or keep them with `delay: 0`
- Exact label text for the `120+ USERS` stat (e.g. `USERS/WEEK` vs `USERS SUPPORTED/WK`)
- Whether `FCR-FOCUSED` sits in the value field with no number, or if a label-only style is used

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `TypeAnimation` component (from `react-type-animation`) — being removed; check no other component imports it before removing the dependency
- All existing `motion.div` wrappers remain — just strip `delay` from their `transition` props
- Stat strip: already styled with `.glass border rounded-lg px-4 py-2.5 tech-corner` — keep this, only change the data array

### Established Patterns
- Inline data array for stats: `[{ value: "8+", label: "YRS EXPERIENCE" }, ...]` — change content here, not the rendering code
- Gradient text uses inline `style` prop (not Tailwind `dark:`) — preserve this pattern for any gradient text in headings
- CTA buttons: primary `bg-[#00D9FF] text-[#060D18]`, outline `border-[#00D9FF]/35 text-[#00D9FF]` — styling unchanged

### Integration Points
- `HeroSection.tsx` is self-contained — no props, no external state
- `TypeAnimation` import at top of file must be removed along with the `react-type-animation` package (if unused elsewhere)
- `page.tsx` renders HeroSection unchanged — no changes needed there

</code_context>

<specifics>
## Specific Ideas

- The value proposition should feel like a single punchy statement, not a full sentence with multiple clauses — short and confident
- "FCR-FOCUSED" as a stat label with no number is intentional — it signals a quality mindset without needing a specific metric

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 02-hero-hook*
*Context gathered: 2026-03-09*
