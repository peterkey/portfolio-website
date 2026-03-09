# Phase 3: Page Structure - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Reorder sections so Case Studies surfaces earlier in the scroll journey. Remove two placeholder sections (Testimonials, Achievements) that hurt credibility. Fix background alternation after the reorder. This phase is scoped to `page.tsx` section order, `Navbar.tsx` nav links, and background `className` values in affected section components — no copy changes, no visual redesign.

</domain>

<decisions>
## Implementation Decisions

### Section order
New order (8 visible sections, Achievements and Testimonials removed):
1. Hero
2. About
3. Experience
4. **Case Studies** ← moved up from position 5 to 4
5. Projects
6. Tools
7. Certifications
8. Contact

About stays before Experience (current order preserved). Case Studies moves before Projects — "proof of work" cluster: Case Studies → Projects → Tools → Certs.

### Removed sections
- **Testimonials** (`TestimonialsSection.tsx`) — removed from `page.tsx`; component file left in place but not rendered
- **Achievements** (`AchievementsSection.tsx`) — removed from `page.tsx`; component file left in place but not rendered

### Navbar
Replace the Achievements link with Case Studies. Nav becomes 7 links, renumbered:
- 01 About → `#about`
- 02 Experience → `#experience`
- 03 Case Studies → `#case-studies` ← replaces Achievements
- 04 Projects → `#projects`
- 05 Skills → `#skills`
- 06 Certifications → `#certifications`
- 07 Contact → `#contact`

Numeric `num` labels renumbered to match new order. Testimonials had no nav link — no action needed there.

### Background alternation
Strict dark/cardDark alternation. Two sections need their background `className` swapped:
- `CaseStudiesSection.tsx`: `bg-trueAutumn-dark` → `bg-trueAutumn-cardDark`
- `ProjectSection.tsx`: `bg-trueAutumn-cardDark` → `bg-trueAutumn-dark`

All other sections already have the correct background for their new positions:
- About (cardDark) ✓, Experience (dark) ✓, Tools (cardDark) ✓, Certifications (dark) ✓, Contact (cardDark — verify)

### Claude's Discretion
- Whether to verify and fix `EnhancedContactSection.tsx` background if it doesn't already match `cardDark`
- Import cleanup in `page.tsx` (unused `AchievementsSection` and `TestimonialsSection` imports can be removed)

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `page.tsx` — single file controls section render order; changes are import removals and JSX reordering only
- `Navbar.tsx` — `navLinks` array at line 9; change `{ title, path, num }` entries only
- Section `id` attributes already exist and are correct: `#case-studies`, `#skills`, `#achievements` (to be removed), `#references` (to be removed)

### Established Patterns
- Section backgrounds are set via `className` on the `<section>` element inside each component file — not controlled by `page.tsx`
- Nav active-state tracking reads `path` values from `navLinks` via `IntersectionObserver`; adding `#case-studies` will automatically enable active tracking for that section

### Integration Points
- `page.tsx`: remove `AchievementsSection` and `TestimonialsSection` imports and JSX; reorder remaining section JSX
- `Navbar.tsx`: update `navLinks` array (lines 9–17)
- `CaseStudiesSection.tsx`: swap background class on `<section>` element (line 119)
- `ProjectSection.tsx`: swap background class on `<section>` element (line 63)

</code_context>

<specifics>
## Specific Ideas

- The "proof of work" cluster (Case Studies → Projects) should feel intentional — evidence-first, then supporting detail (Tools → Certs)
- Numeric nav labels are part of the NOC terminal aesthetic and should be kept, just renumbered

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 03-page-structure*
*Context gathered: 2026-03-09*
