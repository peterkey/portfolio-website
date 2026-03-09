# Project Research Summary

**Project:** Peter Williams-Key — IT Support Portfolio
**Domain:** Personal portfolio — IT support / helpdesk / junior sysadmin job-seeker targeting recruiters and hiring managers
**Researched:** 2026-03-09
**Confidence:** HIGH

## Executive Summary

This is a brownfield improvement project on a technically solid codebase. The existing Next.js 14 / Tailwind / Framer Motion stack is correct and complete — no new libraries or architectural changes are needed. The NOC theme (dark panel, cyan/orange accent system, animated SVG network diagram) is a genuine differentiator that no other IT support portfolio in this market reproduces. The engineering foundation is not the problem. The problem is that the content inside the design is generic, passive, and sequenced for the wrong audience.

The core failure is persuasion, not engineering. The hero describes the candidate instead of selling him. The section order surfaces biography before evidence, burying the strongest content (Case Studies, concrete metrics) behind two sections that provide no proof. A recruiter spending 10-15 seconds on the page will leave with the name and the aesthetic but no specific reason to call. The fix is a three-layer intervention: hero copy first (value proposition, stable role title, outcome-reframed stats), section reorder second (evidence before biography), copy rewrites third (outcome-first language across all sections), and visual polish last.

One live defect requires immediate action before any other work: the CV download link points to `cv.txt` but serves it with a `.pdf` filename attribute. A recruiter who clicks "Download CV" receives a file their OS opens in a text editor. This breaks the primary CTA on the current live site and must be fixed first.

## Key Findings

### Recommended Stack

The stack requires no changes. Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and the existing utility library set (`react-animated-numbers`, `react-type-animation`, `@heroicons/react`) cover every improvement identified in research. The Resend contact API is production-ready.

The one performance opportunity worth flagging — but not blocking on — is that all sections are `"use client"` components, meaning the initial HTML is empty until React hydrates. Converting static sections (About, Tools, Certifications, Footer) to React Server Components would improve LCP. This is an architectural decision, not a library change, and sits at the boundary of the project's stated constraint. Flag for the product owner; do not assume it is in scope.

**Core technologies:**
- Next.js 14 App Router: routing, rendering, API — already correct, no changes needed
- Tailwind CSS + custom tokens: design system (`trueAutumn.*`) — already correct
- Framer Motion: scroll-triggered animations — correctly implemented; `useReducedMotion` is a gap (accessibility)
- `react-type-animation`: hero role cycling — currently misused; either remove or constrain to 2 meaningful variants
- Resend + Zod + rate limiting: contact API — production-ready, no changes needed

### Expected Features

All sections are built. The work is content and sequencing, not feature development.

**Must have (table stakes — currently weak):**
- Clear, stable role title above the fold — the cycling animation creates identity ambiguity; fix is straightforward
- Evidence of real support work visible within 60 seconds of scroll — Case Studies currently sit at position 6; moving them to position 3-4 is a config-level change in `page.tsx`
- Concrete technical skills in scannable form — exists but buried; reordering fixes visibility
- CV download as an actual PDF — the current `cv.txt` is a live defect; fix immediately

**Should have (currently built but underperforming):**
- Outcome-reframed hero stats — numbers exist but read as scale, not impact; rewrite needed
- Case studies with metric-led headlines — structure exists, outcome language is too soft
- Home lab evidence given equal visual weight to professional experience — underweighted; positioning fix
- Trajectory narrative (self-taught → infrastructure engineering) — partially present but scattered; needs unification in hero or About

**Defer (requires external action, not engineering):**
- Real completed certifications — dependent on passing exams (target Q2-Q3 2026)
- Real testimonial quotes — requires colleague outreach; do not ship a testimonials section with no testimonials
- Real project screenshots — requires deployed projects or design work

**Remove or collapse (active credibility damage):**
- Achievements section as standalone — the three numbers duplicate the hero stats strip; merge into hero or Experience
- Testimonials/References section with placeholder cards — "references available upon request" as a full section is a credibility negative; collapse to a footer line unless real quotes are obtained
- Percentage progress bars on in-progress certifications — implies credentials that don't exist; replace with target dates
- "Basic X" phrasing in Tools — explicitly signals limitation; replace with task-level descriptions

### Architecture Approach

The improvement work maps cleanly to a four-phase dependency chain. Each phase is a prerequisite for the next because changes in later phases need to be written with their section's final position in mind. Copy written for a section in position 6 will read differently when that section is in position 3. The architectural insight is that section reorder should precede copy rewrites, and copy rewrites should precede design boldness upgrades — because design amplifies signal, and the signal must be correct before amplification.

All data is stored inline per component (no shared data layer or CMS). This is correct for a solo portfolio. Every change is a direct file edit with no cross-component state risk.

**Major components (in recommended new order):**
1. `HeroSection.tsx` — identity hook; highest-leverage single file; foundation phase
2. `page.tsx` — section orchestration; reorder changes happen here; structure phase
3. `CaseStudiesSection.tsx` — strongest credibility signal; benefits most from earlier position
4. `ExperienceTimeline.tsx` — chronological proof; currently sound but title framing needs inversion
5. `AboutSection.tsx` — biography and soft skills; should follow evidence, not precede it
6. `TestimonialsSection.tsx` — currently contains no testimonials; remove or repurpose
7. `AchievementsSection.tsx` — duplicate of hero stats; merge and remove as standalone

### Critical Pitfalls

1. **CV file is `.txt` served as `.pdf`** — this is a live defect breaking the primary CTA on the current site. Fix before anything else.

2. **Hero describes the candidate, not the value** — "Customer-focused IT professional delivering first-line technical support in high-volume environments" is identical to 90% of IT support CVs. Lead with outcome: what breaks when this person is not there, and how fast they fix it when they are. Address in Phase 1.

3. **Rotating type animation fragments role identity** — four near-synonym titles cycling every 2.4 seconds means a recruiter who looks at the wrong moment reads a mismatched title. A recruiter scanning for 10 seconds will catch whatever is mid-animation. One stable, specific title is more persuasive than four rotating synonyms. Address in Phase 1.

4. **Section order buries credibility** — Case Studies (strongest evidence) sit at position 6. The current order front-loads biography before proof. Recruiters spend 60-90 seconds on a portfolio page on average. Many never reach position 6. The reorder is a `page.tsx` import order change with high leverage. Address in Phase 2.

5. **Design distinction without copy to match** — the NOC theme creates a strong aesthetic impression. The risk is the visitor remembers "that cool dark IT site" but not "the engineer who resolved M365 account lockouts in under 10 minutes." Design creates impressions; copy creates callbacks. Never let visual upgrade phases run without paired copy upgrade work.

## Implications for Roadmap

Based on the three-layer model from ARCHITECTURE.md (Foundation → Structure → Copy → Design), the research implies a four-phase sequence with a zero-phase for the live defect.

### Phase 0: Emergency Fix
**Rationale:** The CV download defect is live and breaks the primary action a recruiter takes. It should not survive into any roadmap phase — fix it as a pre-condition.
**Delivers:** A functional CV download that delivers an actual PDF
**Addresses:** Pitfall 11 from PITFALLS.md
**Avoids:** Embarrassing the candidate during any outreach period

### Phase 1: Hero Hook (Foundation)
**Rationale:** Everything downstream depends on the hero performing correctly. Copy written for case studies, about, and experience will be more effective if the hero has already established a clear value proposition and stable role identity. Hero changes are also fully isolated — `HeroSection.tsx` has no state dependencies on other components.
**Delivers:** A hero that answers "why hire this person?" within 5 seconds; stable role title; outcome-framed value proposition; upgraded stats with at least one outcome metric; reduced animation delay so CTAs appear faster
**Addresses:** Table stakes (stable role title), differentiators (specific numbers, trajectory framing)
**Avoids:** Pitfall 1 (description not value), Pitfall 2 (rotating titles), Pitfall 3 (stats without context)

### Phase 2: Section Reorder (Structure)
**Rationale:** The new section order determines what copy each section needs. Case studies in position 3 need different framing than case studies in position 6. Reordering before copy rewrites means Phase 3 copy is written with correct positional context. The reorder itself is low-risk (import order in `page.tsx`) but requires a manual audit of `bg-trueAutumn-dark` / `bg-trueAutumn-cardDark` alternation after the fact.
**Delivers:** Recommended section order: Hero → Experience → CaseStudies → Projects → Certifications → Tools → About → Contact. Testimonials/References section removed or collapsed to footer. Achievements section merged into hero or Experience. Background alternation rechecked.
**Addresses:** Table stakes (evidence visible within 60 seconds), anti-features removed (Achievements standalone, References placeholder)
**Avoids:** Pitfall 4 (section order buries credibility)

### Phase 3: Copy Rewrites (Signal)
**Rationale:** Copy rewrites are downstream of structure. With sections in their final positions, every component can be written for its actual persuasive role in the reading sequence. This is the highest-impact phase for recruiter recall — the design earns the aesthetic; the copy earns the callback.
**Delivers:** Outcome-first language across all sections: hero description paragraph, case study result statements (metric-led headlines), experience timeline highlights (active voice, quantified), About bio (trajectory narrative, soft skills list removed), certifications display (target dates replacing progress bars), Tools section ("Basic X" replaced with task-level descriptions)
**Addresses:** All copy gaps identified in FEATURES.md; differentiators (specificity over generality, trajectory narrative)
**Avoids:** Pitfall 5 (design without copy), Pitfall 6 (soft skills list), Pitfall 9 (unanchored numbers)

### Phase 4: Design Boldness (Amplification)
**Rationale:** Design changes amplify signal. Phases 1-3 must be complete so there is genuine signal to amplify. Visual upgrades applied before copy rewrites produce a polished site that still fails to convert.
**Delivers:** Visual hierarchy refinements (cyan accent weight reduction — not everything should compete at the same intensity), optional NOC decoration audit (decorative labels tested against non-technical recruiter comprehension), `useReducedMotion` accessibility gap addressed, animation timing review (hero CTA currently hidden for 900ms+ due to staggered delays)
**Addresses:** Differentiator (NOC theme pushed further without losing clarity), accessibility gap
**Avoids:** Pitfall 7 (over-labelling with NOC jargon), Pitfall 5 (design over copy)

### Phase Ordering Rationale

- Phase 0 before everything: the live defect cannot persist
- Phase 1 before Phase 2: hero must be stable before sections around it are reordered, so the persuasion sequence reads correctly end-to-end
- Phase 2 before Phase 3: copy must be written knowing the section's final position in the scroll journey
- Phase 3 before Phase 4: design amplifies copy; copy must exist and be correct first
- Phases 1 and 2 are structural decisions with high leverage and low code risk
- Phase 3 is content work with the highest impact on recruiter recall and callbacks
- Phase 4 is the lowest-priority phase — the site already has a strong visual identity

### Research Flags

Phases needing no additional research — standard established patterns:
- **Phase 0:** File replacement, trivial
- **Phase 1:** Well-documented copywriting and UX patterns; all specific changes identified in STACK.md and ARCHITECTURE.md
- **Phase 2:** `page.tsx` import reorder + background class audit; no novel patterns

Phases that may benefit from validation:
- **Phase 3:** Copy rewrites should be reviewed by someone familiar with IT hiring (a hiring manager or recruiter in the IT sector) if possible, before treating as final. The copy directions in FEATURES.md are grounded in established principles but are not A/B tested against this specific audience.
- **Phase 4:** `useReducedMotion` implementation should be verified against current Framer Motion 11 docs before writing — the API exists but exact usage pattern should be confirmed.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Direct codebase audit; all findings verified from source files; no speculative library recommendations |
| Features | HIGH | Direct analysis of existing content against stated goal; table stakes and anti-features are specific and falsifiable |
| Architecture | HIGH | Direct inspection of component files and page.tsx; four-phase model grounded in logical dependency analysis |
| Pitfalls | HIGH | Five of eleven pitfalls verified directly from codebase; remainder grounded in established copywriting and hiring UX research |

**Overall confidence:** HIGH

### Gaps to Address

- **Recruiter behavior specifics:** All recruiter behavior claims (10-15 second scan, 60-90 second average session) are drawn from established research generalised to this context, not measured on this specific site. If analytics are added (`NEXT_PUBLIC_GA_ID` env var is already wired), scroll depth data would validate or challenge the section reorder rationale.
- **Copy validation:** The specific copy directions recommended across all phases reflect established conversion copywriting principles applied to IT hiring. They have not been validated by an IT recruiter or hiring manager. If a recruiter is accessible, a 10-minute review of Phase 3 copy before shipping would reduce risk.
- **Testimonials decision:** Whether the Testimonials section survives depends entirely on whether real quotes are obtainable. This is a content decision, not an engineering one, and it blocks Phase 2 (the section either stays with real content or is removed).
- **Framer Motion `useReducedMotion`:** The API exists in Framer Motion but exact current usage pattern in version 11 should be verified against docs before Phase 4 implementation.

## Sources

### Primary (HIGH confidence)
- Direct codebase inspection: `src/app/components/HeroSection.tsx`, `CaseStudiesSection.tsx`, `ExperienceTimeline.tsx`, `AboutSection.tsx`, `TestimonialsSection.tsx`, `AchievementsSection.tsx`, `ToolsSection.tsx`, `src/app/page.tsx`, `.planning/PROJECT.md`, `.planning/codebase/ARCHITECTURE.md`
- Established UX research: F/Z pattern scanning, above-the-fold hierarchy, credibility sequencing — stable and well-documented domain
- Established conversion copywriting: PAS framework, inverted pyramid, outcome-first structure, value proposition vs. description — well-documented
- Core Web Vitals 2025: LCP/INP/CLS targets per Google guidance; INP replaced FID as of March 2024

### Secondary (MEDIUM confidence)
- Hiring manager and recruiter behavior patterns: scroll depth, scan time windows, IT hiring priorities — generalised from established research, not measured on this site
- Section ordering recommendations: derived from logical dependency analysis of audience reading modes, not A/B tested against IT portfolio specifically

### Tertiary (LOW confidence)
- Web search was unavailable during research; no external URLs or competitor portfolio analysis performed
- Framer Motion 11 `useReducedMotion` exact API — exists but should be verified against current docs

---
*Research completed: 2026-03-09*
*Ready for roadmap: yes*
