# Architecture Patterns: Portfolio Improvement

**Domain:** Personal portfolio — IT support professional targeting recruiters and hiring managers
**Researched:** 2026-03-09
**Confidence:** HIGH (grounded in direct codebase inspection + established hiring UX principles)

---

## What We're Optimising For

This is not a rebuild. It is a presentation and persuasion upgrade on a solid codebase.

The architectural question is not "how should the app be structured" — it already has a correct structure. The question is:

**In what order do changes create maximum credibility in minimum scroll distance, and which changes are dependencies for others?**

The target audience has three distinct reading patterns:

- **Recruiter (scan mode):** 10-15 seconds, reads headline, role title, and key stats. Decides whether to pass on or read further.
- **Technical hiring manager (skim mode):** 2-3 minutes, reads experience, case studies, and tools. Evaluates depth and specificity.
- **Freelance client (browse mode):** 5+ minutes, reads everything, forms a feeling before contacting.

All three must feel convinced by the same page. The current section order serves none of them optimally.

---

## Recommended Improvement Architecture

### The Three-Layer Model

Every improvement falls into one of three layers. The layers have a dependency relationship — lower layers must be solid before upper layers amplify them.

```
Layer 3: Visual Boldness (amplification)
  └─ Only matters if Layers 1 and 2 are working

Layer 2: Credibility Sequencing (structure)
  └─ Only matters if Layer 1 is working

Layer 1: Hero Hook (foundation)
  └─ Everything else depends on this
```

**The practical consequence:** Hero changes must ship first. Re-ordering sections is second. Copy rewrites happen section-by-section. Visual upgrades are last, because they amplify signal — and there must be signal to amplify.

---

## Component Analysis: Current State

### HeroSection — Partially Working

**What it does well:**
- Name is large and clear
- Status badge ("Available for new opportunities") is immediately visible
- Stats strip (8+ YRS, 20+ STAFF, 120+ USERS/WEEK) provides scannable proof points
- Network diagram is visually distinctive — differentiates from generic dev portfolios
- CTAs are present (Download CV, Get in Touch)

**What it fails at:**
- `TypeAnimation` rotates through four job titles — the visitor never sees a stable role statement. If the recruiter looks at the wrong 2.4-second window, they see "Microsoft 365 Troubleshooter" or "IT Service Desk Professional" instead of the one title that matches their job spec. Animated titles create ambiguity; they don't resolve it.
- The description paragraph ("Customer-focused IT professional...") is accurate but written like a CV summary in passive-reporting style. It describes, it does not sell.
- "HOSTNAME: PETER-WK" is thematic but occupies visual prime real estate above the name without adding hiring-relevant information.
- No value proposition statement. There is no sentence that answers the recruiter's actual question: "Why would I call this person instead of the next one?"
- Stats use raw scale ("20+ staff supported") without outcome framing. "20+ staff supported" is lower-stakes than "Sole IT support for 20-person office, zero escalations." Same fact, different persuasive weight.

### Section Order — Suboptimal Credibility Journey

**Current order:**
```
Hero → About → Experience → Projects → CaseStudies → Tools → Certifications → Achievements → Testimonials → Contact
```

**The problem with this order:**

1. **About** comes second, but it is the weakest credibility signal. It is a skills list and bio — the visitor already has the bio from the hero. Moving About earlier delays the most credible sections.
2. **CaseStudies** is the strongest credibility signal — concrete problems, specific process, measurable results. It currently sits fifth, after two sections most visitors will have partially skimmed.
3. **Testimonials** is placed second-to-last, but it contains no actual testimonials — only "references available upon request" placeholder cards. This is a late-scroll section that actively hurts credibility. A visitor who scrolled this far now sees that the only social proof is a phone number offer, not a quote.
4. **Achievements** (animated metrics) sits after Certifications. The metrics — if compelling — would be better placed earlier in the scroll to maintain momentum after Experience.

### TestimonialsSection — Active Credibility Risk

This section contains no testimonials. It shows three cards with icons and text explaining that references are available upon request. For a visitor who has scrolled through the entire page, this is a deflating endpoint before Contact.

Options:
1. Remove the section until real testimonials exist (recommended if none are available)
2. Replace with a "What colleagues say" section using even one real quote, even informal
3. Repurpose as a "By the numbers" final stats block before Contact — reusing the Achievements data at a glance

If the section is removed or repurposed, the section alternation rhythm (dark/cardDark) shifts and must be recalculated.

---

## Recommended Section Order

Based on audience reading patterns and the credibility weight of each section:

```
Hero → Experience → CaseStudies → Achievements → Projects → Certifications → Tools → About → Contact
```

**Rationale per position:**

| Position | Section | Rationale |
|---|---|---|
| 1 | Hero | Establishes identity and hook. Non-negotiable. |
| 2 | Experience | Chronological proof of tenure. Recruiter's first question after the hero. |
| 3 | CaseStudies | Strongest credibility signal. Move from "worked there" to "solved real problems." |
| 4 | Achievements | Quantified impact. Capitalises on credibility built by CaseStudies. |
| 5 | Projects | Shows initiative and range beyond day job. |
| 6 | Certifications | Validates technical knowledge claims made in Experience and Projects. |
| 7 | Tools | Technical depth for hiring managers. Lower in scroll because hiring managers will reach it; recruiters may not need it. |
| 8 | About | Bio and soft skills. Better placed late — the visitor now has context to care about the person behind the work. |
| 9 | Contact | Always last. |

**What to do with Testimonials:** Remove or repurpose. Do not ship a testimonials section containing no testimonials. It signals that the portfolio is incomplete.

---

## Hero Section Architecture: What to Change

The hero has a correct layout (two-column, text left, diagram right). The structure is right. The content is the problem.

### Fix 1: Replace TypeAnimation with a stable role statement

**Current:** Four rotating titles, 2.4 seconds each.
**Recommendation:** One fixed primary title. Optionally, a secondary line in smaller mono type that adds context (e.g., specialisation or industry).

Rationale: A fixed title is indexable, readable at any frame, and doesn't create a 50% chance that the visitor reads a mismatched title. Animated titles are a UX preference pattern that trades clarity for perceived dynamism. This portfolio has the network diagram for dynamism — the title should be stable.

If animation is kept for aesthetic reasons, reduce to two variants with a longer hold (4+ seconds) and no delete animation — cross-fade instead. Deletion animations draw attention to the transition rather than the content.

### Fix 2: Add a value proposition line

Between the role title and the description paragraph, insert a single bold statement that answers "why hire this person." Format:

```
Role title line
Value proposition (bold, one sentence, outcome-focused)
Description paragraph (supporting detail)
```

The value proposition should answer: "What does this person do, for whom, and with what result?" Current description copy is accurate but answers the wrong question — it describes the person's habits, not their impact.

### Fix 3: Reframe the stats strip

Current stats are scale metrics:
- 8+ YRS EXPERIENCE
- 20+ STAFF SUPPORTED
- 120+ USERS / WEEK

These are fine as scale signals but weak as outcome signals. One option is to swap one for an outcome stat:
- "100% First-call resolution rate" or "Sub-10-min avg resolution" if accurate

Outcome stats outperform scale stats in persuasive weight because they answer the hiring question rather than describing the work volume.

### Fix 4: The description paragraph copy

**Current:** "Customer-focused IT professional delivering first-line technical support in high-volume environments. Skilled at resolving Microsoft 365, Windows OS, and Active Directory issues within minutes."

**What it does:** Describes job function. Generic across thousands of IT support CVs.

**What it should do:** State a specific claim that only this person can make, or state the value in outcome terms.

The existing copy is not wrong — it just needs to be impact-first. Lead with the result, follow with the skill.

---

## Component Boundaries for the Improvement Work

Each improvement maps to a specific file with no cross-component dependencies. Changes are independent and can be made in any order within a phase, but the phases themselves have a dependency order.

### Phase 1 Components (Hero — Foundation)

| File | Change | Dependencies |
|------|--------|--------------|
| `src/app/components/HeroSection.tsx` | Value prop, stable title, copy reframe, stat update | None |

No other components depend on HeroSection state. This change is fully isolated.

### Phase 2 Components (Section Reorder)

| File | Change | Dependencies |
|------|--------|--------------|
| `src/app/page.tsx` | Import order of section components | Hero fix complete |
| `src/app/components/TestimonialsSection.tsx` | Remove, replace, or repurpose | Decision on real testimonial availability |
| Background colour alternation | After reorder, manually verify dark/cardDark alternation is maintained | Section reorder complete |

Background colour alternation is a manual audit step, not code generation. After reordering in `page.tsx`, read through each section's `bg-trueAutumn-*` class and toggle as needed so sections alternate correctly. No component passes bg colour as a prop — each section hardcodes its own background — so this is a find-and-replace per file.

### Phase 3 Components (Copy Rewrites)

| File | Change | Dependencies |
|------|--------|--------------|
| `src/app/components/HeroSection.tsx` | Description paragraph | Phase 1 |
| `src/app/components/CaseStudiesSection.tsx` | Problem/result language — more specific, outcome-first | Phase 2 (section visible earlier) |
| `src/app/components/ExperienceTimeline.tsx` | Highlights arrays — active voice, quantified | Phase 2 |
| `src/app/components/AboutSection.tsx` | Bio paragraph | Phase 2 |
| `src/app/components/AchievementsSection.tsx` | Metric labels — ensure they match actual data | Phase 2 |

Copy rewrites are independent of each other but downstream of Phase 2 because copy should be written with the section's new position in mind. A CaseStudies section that appears third needs different framing than one that appears fifth.

### Phase 4 Components (Design Boldness)

| File | Change | Dependencies |
|------|--------|--------------|
| `src/app/globals.css` | New utilities if needed (e.g., stronger glow variants, scanline effects) | Phase 3 complete |
| `src/app/components/HeroSection.tsx` | Visual upgrades to the network diagram frame | Phase 1 complete |
| Any section with cards | Glow intensity, border visibility, contrast refinements | Phases 1-3 complete |

Design changes amplify what the copy and structure already say. They should not be used to compensate for weak copy or poor ordering. Phase 4 is last by design.

---

## Data Flow Notes for Copy Changes

Each section stores its own data as inline arrays or objects at the top of the component file. There is no shared data layer, CMS, or prop-drilling. This means:

- Every copy change is a direct edit inside the component file
- There is no risk of a copy change in one section propagating unintentionally to another
- The section data is easy to find: look for `const [items/entries/caseStudies/etc]` at the top of each file

This inline data architecture is correct for a solo portfolio. Do not introduce a shared data file or JSON config — it adds indirection without value at this scale.

---

## Above-the-Fold Content: What Must Be Visible Without Scrolling

On a 1920x1080 desktop, the current hero renders a two-column layout: left column (text) and right column (network diagram). The left column contains, from top:

1. Status badge ("Available for new opportunities")
2. Eyebrow line ("HOSTNAME: PETER-WK")
3. Name (large, Rajdhani display)
4. TypeAnimation role title
5. Description paragraph
6. Stats strip
7. CTA buttons
8. Social links / connect row

Items 1-7 are all within the hero viewport on desktop. On mobile (single column), items 1-7 are visible with minor scroll. This is structurally correct — the critical content is above the fold.

**The problem is not what is visible. The problem is what those visible elements communicate.**

A recruiter reading the above-the-fold content in order currently receives:
1. "Available for new opportunities" — useful
2. "HOSTNAME: PETER-WK" — thematic, not hiring-informative
3. "Peter Williams-Key" — name understood
4. Animated role (whichever of 4 they catch) — ambiguous
5. Description paragraph — accurate but describes function, not value
6. Stats: 8+ yrs, 20+ staff, 120+ users — scale, not outcome
7. CTAs — present

**What they should receive:**
1. "Available" badge — keep
2. Name — keep
3. Stable, specific role title — fix
4. One-sentence value proposition — add
5. Outcome-framed description — rewrite
6. Stats with at least one outcome metric — upgrade
7. CTAs — keep

The network diagram is a strong visual differentiator and should be kept as-is. It communicates technical sophistication at a glance without the visitor having to read anything. This is high value.

---

## Visual Hierarchy Principles Applied to This Codebase

**Principle 1: The eye reads F-pattern on first scan.**
On the hero left column, the largest element (name) anchors the top of the F. The next largest (role title, blue text) anchors the second horizontal pass. The description and stats form the vertical stem. This is correct. The fix is making the role title stable and the description outcome-focused — not restructuring the visual hierarchy.

**Principle 2: Contrast directs attention.**
Cyan `#00D9FF` is used for: the status badge text, the role TypeAnimation, the stats values, CTA primary button, social links hover, and the network diagram. This is too many elements at the same accent weight. On the hero, everything cyan competes. One element should dominate in cyan; others should step down. Recommendation: Primary CTA and role title in cyan; stats and badge in lower opacity or secondary treatment.

**Principle 3: White space creates hierarchy.**
The hero has `space-y-7` between sections, which is reasonable. The tightest area is the heading block (name + eyebrow + role). The eyebrow ("HOSTNAME: PETER-WK") is visually small but thematically irrelevant to hiring. Removing it frees breathing room around the name, which increases visual weight.

**Principle 4: Motion should guide, not distract.**
The TypeAnimation draws the eye repeatedly as it loops. Any moving element pulls attention away from static content. On a portfolio, the most important static content — name, value proposition, CTA — should not compete with animation for visual focus. The network diagram's animation is background-level (packets, slow ring rotation). The TypeAnimation is foreground text. These two motion sources are in competition. One should dominate; recommend the diagram wins because it is more distinctive.

---

## Scalability Considerations

This is a single-person portfolio. There are no scalability concerns in the infrastructure sense. The relevant question is maintainability for solo updates.

| Concern | Current State | Recommendation |
|---|---|---|
| Copy updates | Direct edits inside component files | Keep — no abstraction needed |
| New sections | Add component, import in page.tsx | Keep — simple and correct |
| Section reorder | Edit import order in page.tsx | Straightforward, minimal risk |
| Design system changes | globals.css + tailwind.config.js | Keep centralised — already clean |
| Data changes (experience, projects, etc.) | Inline arrays per component | Keep — consider extracting to same-file constants for readability |

---

## Build Order Summary

```
Phase 1 — Foundation
  HeroSection.tsx: stable role, value prop, reframed copy, stat upgrade

Phase 2 — Structure
  page.tsx: section reorder
  TestimonialsSection.tsx: remove or repurpose
  All section files: audit and fix background alternation

Phase 3 — Copy
  CaseStudiesSection.tsx, ExperienceTimeline.tsx, AboutSection.tsx,
  AchievementsSection.tsx: outcome-first language, active voice

Phase 4 — Design
  globals.css, HeroSection.tsx, card components: visual boldness upgrades
```

Each phase builds on the previous. Phases 1 and 2 are structural decisions — do them right and Phase 3 copy will be much easier to write with the correct context. Phase 4 is the reward layer that makes everything shine, but should never be used to compensate for weak Phase 1-3 work.

---

## Sources

- Direct codebase inspection: `src/app/page.tsx`, `src/app/components/HeroSection.tsx`, `src/app/components/AboutSection.tsx`, `src/app/components/CaseStudiesSection.tsx`, `src/app/components/TestimonialsSection.tsx`, `.planning/codebase/ARCHITECTURE.md`, `.planning/PROJECT.md`
- Hiring psychology principles (F-pattern reading, above-the-fold, credibility sequencing): HIGH confidence, well-established UX research domain
- Persuasion copywriting principles (outcome-first, value proposition structure): HIGH confidence, established conversion copywriting literature
- Section ordering recommendations: MEDIUM confidence — derived from logical dependency analysis of audience reading modes, not validated against A/B test data specific to IT portfolios
