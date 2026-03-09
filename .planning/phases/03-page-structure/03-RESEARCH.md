# Phase 3: Page Structure - Research

**Researched:** 2026-03-09
**Domain:** Next.js App Router page composition, section ordering, Navbar data array
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Section order** — New order (8 visible sections, Achievements and Testimonials removed):
1. Hero
2. About
3. Experience
4. Case Studies (moved up from position 5 to 4)
5. Projects
6. Tools
7. Certifications
8. Contact

About stays before Experience. Case Studies moves before Projects — "proof of work" cluster: Case Studies → Projects → Tools → Certs.

**Removed sections:**
- Testimonials (`TestimonialsSection.tsx`) — removed from `page.tsx`; component file left in place, not rendered
- Achievements (`AchievementsSection.tsx`) — removed from `page.tsx`; component file left in place, not rendered

**Navbar** — Replace Achievements link with Case Studies. Nav becomes 7 links:
- 01 About → `#about`
- 02 Experience → `#experience`
- 03 Case Studies → `#case-studies`
- 04 Projects → `#projects`
- 05 Skills → `#skills`
- 06 Certifications → `#certifications`
- 07 Contact → `#contact`

**Background alternation** — Two sections need their background `className` swapped:
- `CaseStudiesSection.tsx`: `bg-trueAutumn-dark` → `bg-trueAutumn-cardDark`
- `ProjectSection.tsx`: `bg-trueAutumn-cardDark` → `bg-trueAutumn-dark`

### Claude's Discretion

- Whether to verify and fix `EnhancedContactSection.tsx` background if it doesn't already match `cardDark`
- Import cleanup in `page.tsx` (unused `AchievementsSection` and `TestimonialsSection` imports can be removed)

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| STRUCT-01 | Case Studies section appears early in scroll order (before Tools, Certifications) | Achieved by reordering JSX in `page.tsx` and updating `navLinks` array |
| STRUCT-02 | Testimonials section removed from the page (no real quotes; placeholders hurt credibility) | Remove JSX element and import from `page.tsx`; component file untouched |
| STRUCT-03 | Achievements section removed as a standalone section (duplicate of hero stats) | Remove JSX element and import from `page.tsx`; component file untouched |
| STRUCT-04 | Section background alternation (dark / cardDark) remains correct after reorder | Swap `className` on `CaseStudiesSection.tsx:119` and `ProjectSection.tsx:63`; all other sections already correct |
</phase_requirements>

---

## Summary

Phase 3 is a surgical composition change. All four requirements are fulfilled by modifying three files: `page.tsx` (section order + imports), `Navbar.tsx` (navLinks array), and the background `className` on two section components. No new libraries, no logic changes, no data transformations.

The scope is completely verified against the live codebase. Every line number, current class value, and section ID has been confirmed by reading the source. There are no unknowns that require investigation.

**Primary recommendation:** Execute as three discrete edits — page.tsx, Navbar.tsx, section backgrounds — in that order. Each edit is independently verifiable.

---

## Standard Stack

No new dependencies. This phase uses only what already exists.

| Concern | Current Tool | Notes |
|---------|-------------|-------|
| Section ordering | JSX element order in `page.tsx` | Direct reorder of rendered components |
| Nav links | `navLinks` array in `Navbar.tsx:9–17` | Plain object array, no external dependency |
| Background alternation | Tailwind class on `<section>` element | Single token swap per component |
| Active section tracking | `IntersectionObserver` in `Navbar.tsx:99–112` | Reads `path.slice(1)` from `navLinks`; auto-picks up `#case-studies` once added |

---

## Architecture Patterns

### How Section Order Works

`page.tsx` renders sections as a vertical stack of JSX elements inside `<main>`. Order in JSX = order on page. No routing, no slots, no dynamic rendering. Reordering means cutting and pasting JSX lines.

```tsx
// Current order (page.tsx lines 19–28)
<HeroSection />
<AboutSection />
<ExperienceTimeline />
<ProjectSection />        // line 22 — currently at position 4
<CaseStudiesSection />    // line 23 — currently at position 5
<ToolsSection />
<CertificationsSection />
<AchievementsSection />   // to be removed
<TestimonialsSection />   // to be removed
<EnhancedContactSection />

// Target order
<HeroSection />
<AboutSection />
<ExperienceTimeline />
<CaseStudiesSection />    // moved to position 4
<ProjectSection />        // moved to position 5
<ToolsSection />
<CertificationsSection />
<EnhancedContactSection />
```

### How the Navbar navLinks Array Works

`navLinks` is a module-level constant at `Navbar.tsx:9`. The `IntersectionObserver` effect iterates over it at mount, calling `document.getElementById(path.slice(1))` for each entry. Adding `#case-studies` to the array automatically enables active-state tracking for that section. Removing `#achievements` means its observer is never created, which is safe — the element remains in the DOM (component file is kept) but the nav link will not exist.

```ts
// Current navLinks (Navbar.tsx:9–17)
const navLinks = [
  { title: "About",          path: "#about",          num: "01" },
  { title: "Experience",     path: "#experience",     num: "02" },
  { title: "Projects",       path: "#projects",       num: "03" },
  { title: "Skills",         path: "#skills",         num: "04" },
  { title: "Certifications", path: "#certifications", num: "05" },
  { title: "Achievements",   path: "#achievements",   num: "06" },
  { title: "Contact",        path: "#contact",        num: "07" },
];

// Target navLinks
const navLinks = [
  { title: "About",          path: "#about",          num: "01" },
  { title: "Experience",     path: "#experience",     num: "02" },
  { title: "Case Studies",   path: "#case-studies",   num: "03" },
  { title: "Projects",       path: "#projects",       num: "04" },
  { title: "Skills",         path: "#skills",         num: "05" },
  { title: "Certifications", path: "#certifications", num: "06" },
  { title: "Contact",        path: "#contact",        num: "07" },
];
```

### Background Alternation Pattern

CLAUDE.md specifies: "Alternate sections between `bg-trueAutumn-dark` and `bg-trueAutumn-cardDark` for visual rhythm." Background is set on the `<section>` element inside each component file, not controlled by `page.tsx`.

**Verified current state of all sections:**

| Section | Component | Current bg | Line |
|---------|-----------|-----------|------|
| Hero | HeroSection | (full bleed — exempt) | — |
| About | AboutSection | cardDark | 36 |
| Experience | ExperienceTimeline | dark | 116 |
| CaseStudies | CaseStudiesSection | **dark** | 119 |
| Projects | ProjectSection | **cardDark** | 63 |
| Tools | ToolsSection | cardDark | 60 |
| Certifications | CertificationsSection | dark | 84 |
| Contact | EnhancedContactSection | **cardDark** | 57 |

**Required state after reorder:**

| Position | Section | Required bg | Action |
|----------|---------|------------|--------|
| 2 | About | cardDark | no change |
| 3 | Experience | dark | no change |
| 4 | CaseStudies | cardDark | SWAP: dark → cardDark |
| 5 | Projects | dark | SWAP: cardDark → dark |
| 6 | Tools | cardDark | no change |
| 7 | Certifications | dark | no change |
| 8 | Contact | cardDark | no change — already correct |

Contact is already `cardDark` (confirmed at line 57). No action needed there. The discretion item is resolved: no fix required.

### Anti-Patterns to Avoid

- **Deleting component files:** Locked decision is to leave `AchievementsSection.tsx` and `TestimonialsSection.tsx` in place. Remove only the JSX and imports from `page.tsx`.
- **Forgetting the import lines:** Removing the JSX without removing the imports leaves dead code and may trigger linter warnings. Both the import (top of file) and JSX element (inside `<main>`) must be removed.
- **Partial renumbering:** The `num` labels in `navLinks` must be updated for all 7 entries. Leaving a gap (e.g., skipping "03") breaks the NOC terminal aesthetic.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead |
|---------|-------------|-------------|
| Section active tracking | Custom scroll listener with offset math | Existing `IntersectionObserver` in Navbar — auto-picks up new `#case-studies` ID |
| Smooth scroll to section | Direct `window.scrollTo` with custom offset | Existing `goto()` function in Navbar handles `-80px` offset for sticky nav |

---

## Common Pitfalls

### Pitfall 1: Stale Import After JSX Removal
**What goes wrong:** Remove the `<AchievementsSection />` and `<TestimonialsSection />` JSX elements but leave the import statements. TypeScript and ESLint will surface unused import warnings. Build passes in dev mode but is noisy.
**How to avoid:** Remove both the import line and the JSX element in the same edit.

### Pitfall 2: Section ID Mismatch
**What goes wrong:** `CaseStudiesSection.tsx` already has `id="case-studies"` at line 119. The nav path `#case-studies` matches. If someone edits the section's `id` attribute independently, the active tracking and smooth scroll both break silently.
**How to avoid:** Do not touch the `id` attribute of `CaseStudiesSection`. It is already correct.

### Pitfall 3: Background Swap on Wrong Element
**What goes wrong:** Some sections have nested `<div>` elements that also carry background-related classes. Swapping the wrong element's class produces no visible change or breaks layout.
**How to avoid:** The swap targets the outermost `<section>` element only — confirmed at the specific line numbers above.

### Pitfall 4: Tools/Certifications Background Drift
**What goes wrong:** Assuming Tools and Certifications need changes because two sections above them were removed.
**Why it's fine:** Achievements and Testimonials were at positions 7–8 (after Certifications). Removing them has no effect on the alternation of sections above them. Tools (cardDark) and Certifications (dark) are already correct for positions 6 and 7.

---

## Code Examples

### Verified Target State — page.tsx

```tsx
// Source: direct codebase read
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import CertificationsSection from "./components/CertificationsSection";
import ToolsSection from "./components/ToolsSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import CaseStudiesSection from "./components/CaseStudiesSection";
import EnhancedContactSection from "./components/EnhancedContactSection";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <CaseStudiesSection />
      <ProjectSection />
      <ToolsSection />
      <CertificationsSection />
      <EnhancedContactSection />
      <Footer />
    </main>
  );
}
```

Note: `Image` import from `"next/image"` at line 1 of current `page.tsx` is also unused — can be cleaned up alongside the section imports.

### Background Class Swap — CaseStudiesSection.tsx:119

```tsx
// Before
<section id="case-studies" className="py-20 sm:py-28 px-4 bg-trueAutumn-dark relative overflow-hidden">

// After
<section id="case-studies" className="py-20 sm:py-28 px-4 bg-trueAutumn-cardDark relative overflow-hidden">
```

### Background Class Swap — ProjectSection.tsx:63

```tsx
// Before
<section id='projects' className='py-20 sm:py-28 bg-trueAutumn-cardDark relative overflow-hidden' aria-labelledby="projects-heading">

// After
<section id='projects' className='py-20 sm:py-28 bg-trueAutumn-dark relative overflow-hidden' aria-labelledby="projects-heading">
```

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None — no automated test suite in this project (CLAUDE.md confirmed) |
| Config file | none |
| Quick run command | Visual inspection in browser (`npm run dev`) |
| Full suite command | N/A |

### Phase Requirements — Test Map

| Req ID | Behavior | Test Type | Automated Command | Status |
|--------|----------|-----------|-------------------|--------|
| STRUCT-01 | Case Studies appears before Tools and Certifications in DOM order | manual-only | N/A | Wave 0 gap |
| STRUCT-02 | TestimonialsSection not rendered | manual-only | N/A | Wave 0 gap |
| STRUCT-03 | AchievementsSection not rendered as standalone section | manual-only | N/A | Wave 0 gap |
| STRUCT-04 | Background alternation visually correct after reorder | manual-only | N/A | Wave 0 gap |

Manual-only justification: no test framework exists in this project. All verification is visual via `npm run dev`. TypeScript compilation (`npm run type-check`) confirms no import or JSX errors.

### Sampling Rate

- **Per task:** Open browser, scroll through all sections, verify order and backgrounds
- **Per wave merge:** Full scroll-through + Navbar link click test for `#case-studies`
- **Phase gate:** All four STRUCT requirements visually confirmed before `/gsd:verify-work`

### Wave 0 Gaps

None requiring new files. Verification is manual browser testing. The TypeScript check `npm run type-check` can be used to confirm no stale imports.

---

## Open Questions

None. All implementation details are fully resolved by CONTEXT.md decisions and direct codebase verification.

The one STATE.md blocker — "does a real quote exist for Testimonials?" — is resolved by the locked decision to remove the section entirely regardless.

---

## Sources

### Primary (HIGH confidence)

- Direct codebase reads — `page.tsx`, `Navbar.tsx`, `CaseStudiesSection.tsx`, `ProjectSection.tsx`, `EnhancedContactSection.tsx`, `AboutSection.tsx`, `ExperienceTimeline.tsx`, `ToolsSection.tsx`, `CertificationsSection.tsx`
- `CLAUDE.md` — design system rules, section pattern, background alternation convention
- `03-CONTEXT.md` — locked implementation decisions

### Secondary (MEDIUM confidence)

None needed — all facts verified from source files.

---

## Metadata

**Confidence breakdown:**
- Section order changes: HIGH — source files read directly, exact line numbers confirmed
- Navbar changes: HIGH — navLinks array structure confirmed, IntersectionObserver behaviour read and understood
- Background swaps: HIGH — current class values confirmed at specific line numbers in each component
- Contact section discretion: HIGH — confirmed already cardDark at line 57, no action needed
- Image import cleanup: HIGH — `Image` appears in page.tsx line 1 with no usage in JSX

**Research date:** 2026-03-09
**Valid until:** Stable — file structure unlikely to change; re-verify if any section component is moved or renamed
