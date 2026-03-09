# Technology Stack — Techniques & Patterns for a Standout IT Portfolio

**Project:** Peter Williams-Key — IT Support Portfolio
**Researched:** 2026-03-09
**Focus:** What separates top-tier IT professional portfolios from average ones — techniques,
patterns, copy frameworks, and UX approaches applicable to the existing Next.js 14 + Tailwind +
Framer Motion stack.

---

## Executive Summary

The existing stack (Next.js 14, Tailwind, Framer Motion, TypeScript) is already correct — no
library additions are needed. The gap is entirely in three areas: **copy**, **visual hierarchy**,
and **proof density**. The site currently describes the candidate; it needs to sell him. The NOC
theme is genuinely distinctive — the problem is that the content inside it is generic.

The highest-leverage improvements, in order:

1. Hero copy restructure — role + value + differentiator within 5 seconds, no scrolling
2. Section reorder — put proof (Experience + Case Studies) before explanation (About + Tools)
3. Copy reframe throughout — outcome-led, metric-anchored, active voice
4. Visual proof elements — certificate badges, real metrics on the hero, social proof surfacing
5. Performance baseline — LCP under 2.5s, no animation jank on lower-end hardware

---

## What the Existing Stack Already Does Well

| Capability | Current State | Assessment |
|------------|--------------|------------|
| NOC visual theme | Distinctive dark panel, cyan/orange accent system | HIGH — genuinely differentiating; keep and push further |
| Animated hero | Inline SVG network diagram with data packets | HIGH — memorable and relevant; no replacement needed |
| Scroll animations | Framer Motion `whileInView` with `once: true` | HIGH — correct pattern, no double-trigger |
| Type animation | `react-type-animation` in hero subtitle | MEDIUM — currently cycles 4 roles too similarly; reduces clarity |
| Motion paths | SVG `<animateMotion>` + `<mpath>` for data packets | HIGH — native, no JS cost |
| Metric stats | Hero stats strip (years, users, weekly volume) | MEDIUM — exists but underweighted visually and positionally |
| Contact API | Resend + Zod + rate limiting | HIGH — correct and production-ready |
| Font system | Rajdhani / IBM Plex Sans / IBM Plex Mono | HIGH — the three-font system reinforces the NOC identity |
| Image optimization | WebP + AVIF via next.config.mjs | HIGH — correct |
| Security headers | X-Frame-Options, Permissions-Policy etc. | HIGH — correct |

---

## Recommended Techniques by Category

### 1. Copy Frameworks

**The Problem Identified in Current Code**

The hero description reads:
> "Customer-focused IT professional delivering first-line technical support in high-volume
> environments. Skilled at resolving Microsoft 365, Windows OS, and Active Directory issues
> within minutes."

This is a job description, not a value proposition. It tells visitors what the candidate does, not
what they get.

**Recommended Framework: PAS (Problem → Agitation → Solution) compressed to one sentence**

Every recruiter's problem: finding someone who fixes things fast and doesn't escalate everything.
The hero should address that directly:

Structure: `[Who I am] + [What I fix] + [How fast] + [Who trusts me]`

Example direction:
> "IT Support specialist who resolves Microsoft 365, Active Directory, and Windows failures in
> minutes — not tickets. 8 years keeping 120+ users operational per week."

**The Experience section highlights are already strong** — they are bullet-point, outcome-led, and
specific. The hero copy needs to match that energy level.

**Why this matters:** Recruiters spend 6-10 seconds on the above-the-fold view before deciding
whether to scroll. The hero must answer "why hire this person?" before anything else renders.

**Confidence: HIGH** — this is established UX/conversion copywriting knowledge, not speculative.

---

**Case Study Copy: Current vs. Recommended**

Current case study: "Microsoft 365 Login Resolution" — the problem paragraph is 2 sentences
describing what happened. The result is "maintained operational efficiency."

Outcome-first reframe: Lead with the metric, then tell the story.

Structure: `[Metric headline] → [Context] → [What you did] → [What changed]`

Example for M365 case study:
- Headline: "5 users back online in under 10 minutes, zero escalation"
- Then: context, process, outcome

This structure lets a scanner read just the first line of each card and still walk away with a
concrete impression.

**Confidence: HIGH** — standard copywriting pattern (inverted pyramid), not speculative.

---

### 2. Visual Hierarchy Techniques

**Above-the-Fold Audit (Current HeroSection.tsx)**

What a visitor currently sees on load (desktop, 1920x1080):
- Status badge: "Available for new opportunities" — GOOD
- HOSTNAME: PETER-WK eyebrow — NOC decoration, not informative to non-technical visitors
- Name in large type — GOOD
- TypeAnimation cycling 4 nearly-identical roles — PROBLEMATIC (reduces clarity, delays
  the message landing)
- Description paragraph — exists but is generic
- Stats strip (8+ yrs, 20+ staff, 120+ users/wk) — exists but visually small
- CTA buttons — correct placement, correct copy

**What's Missing Above the Fold**

1. A single clear role title (not an animation that cycles through synonyms)
2. A specific differentiator — what makes this candidate different from the 40 other IT support
   CVs a recruiter sees this week
3. The most compelling metric made visually prominent

**Recommended fix — no new libraries needed:**

- Make the role static or animate only between meaningfully different states (e.g., "IT Support
  Specialist" → "Infrastructure in Progress" — showing trajectory, not just synonyms)
- Move one strong metric into the eyebrow or make the stat strip cards larger with more visual
  weight
- The HOSTNAME eyebrow is wasted prime real estate — replace with something like
  `// AVAILABLE · LONDON · 8 YEARS EXP` to pack more recruiter-relevant signal into that line

**Confidence: HIGH** — UX hierarchy and above-the-fold design are stable, well-researched domains.

---

**Scanning Pattern: F-Pattern vs. Z-Pattern**

Recruiters scan, they don't read. The F-pattern (strong left edge, top-heavy) applies to
single-column content. The Z-pattern applies to the two-column hero layout currently in use.

In a Z-pattern layout:
- Top-left: strongest first impression (currently: "HOSTNAME: PETER-WK" — weak)
- Top-right: supporting visual (currently: network diagram — strong)
- Bottom-left: call to action (currently: CTA buttons — correctly placed)
- Bottom-right: secondary context (currently: status strip — correctly placed)

The top-left anchor needs to be stronger. The eyebrow + name + role sequence is correct in
structure but the eyebrow line delivers no recruiter value.

**Confidence: HIGH** — Z-pattern for hero layouts is established UX research.

---

### 3. Section Order Optimisation

**Current Order:**
Hero → About → Experience → Projects → Case Studies → Tools → Certifications →
Achievements → Testimonials → Contact

**Problem with this order:**

About comes before Evidence. A recruiter has to read a bio before they see any proof. This is
backwards. People trust evidence, then they become interested in the person. The bio should
explain and personalise; it should not be the first stop.

**Recommended Order:**
Hero → Experience → Case Studies → About → Certifications → Achievements → Projects →
Tools → Testimonials → Contact

**Rationale for each move:**

| Move | Why |
|------|-----|
| Experience before About | Show proof before biography; the timeline is more credible than self-description |
| Case Studies after Experience | Case studies are the deepest proof; they should follow the timeline as supporting evidence |
| About after Case Studies | By this point the visitor is invested; bio now contextualises a person they already want to know more about |
| Certifications before Achievements | Certs are third-party validation; Achievements are self-reported — lead with external evidence |
| Projects before Tools | Projects are concrete outputs; Tools is a supporting list |
| Testimonials last before Contact | Social proof placed immediately before the action you want taken is conversion orthodoxy |

**Confidence: HIGH** — section ordering for persuasion sequences is established conversion design
knowledge.

---

### 4. Proof Density Patterns

**What "Proof Density" Means**

The ratio of claims to evidence. High proof density = every statement is backed by a specific
number, name, or outcome. Low proof density = accurate but unverifiable descriptions.

**Current Proof Density Assessment**

| Section | Current State | Issue |
|---------|--------------|-------|
| Hero description | "high-volume environments" | "high-volume" is subjective; "120 users/week" is already in the stats strip but not in the copy |
| Case study metrics | "Maintained operational efficiency" | Not a metric; should be "5 users restored in <10 min, zero escalation" |
| Experience highlights | Specific and metric-anchored (120+ users/wk, 20+ colleagues, 5-10 min resolution) | STRONG — this section is well-written |
| About bio | "genuine drive toward infrastructure" | Aspiration, not evidence; fine in bio context |
| Achievements section | Uses `react-animated-numbers` counters | STRONG — animated numbers are high-impact |

**Recommended improvement pattern:**

Every card or section should contain at least one scannable number. The numbers already exist in
the Experience section — the task is to surface them earlier and echo them in the hero.

**Confidence: HIGH** — proof density in portfolio/CV design is established UX research.

---

### 5. Framer Motion Patterns — What to Keep, What to Avoid

**Keep (currently implemented correctly):**

- `whileInView` + `viewport={{ once: true }}` — correct; prevents re-triggering
- Staggered entrance via `transition={{ delay: n * 0.1 }}` — correct visual rhythm
- `whileHover={{ scale: 1.03 }}` + `whileTap={{ scale: 0.97 }}` on CTAs — correct and subtle
- `initial={{ opacity: 0, y: 20/24 }}` → `animate={{ opacity: 1, y: 0 }}` — standard, works

**Avoid / Gaps:**

- Hero animation sequence currently uses 9 staggered `motion.div` elements with delays from
  0.1s to 1.05s. This means the CTA buttons don't appear for over 900ms. On slow connections,
  or for recruiters who jump straight to the page from a link, this means the most important
  interactive element (Download CV) is hidden for nearly a second. Consider reducing delays or
  using a faster easing.

- The 0.9s `x: -40 → 0` slide on the hero text column is noticeable. Prefer `x: -20` or pure
  `y` movement — lateral slides on text feel sluggish at this magnitude.

- No `useReducedMotion` hook. Users with `prefers-reduced-motion` set still get all animations.
  Framer Motion supports this via `useReducedMotion()` — wrap the motion values so they fall back
  to immediate transitions. This is an accessibility gap and increasingly a consideration for
  professional sites.

**Confidence: HIGH (keep/avoid)** — these are documented Framer Motion patterns.
**Confidence: MEDIUM (useReducedMotion)** — the API exists; exact implementation pattern should
be verified against current Framer Motion 11 docs.

---

### 6. Performance Optimisation

**Core Web Vitals Targets (2025 standards)**

| Metric | Target | Impact |
|--------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | Biggest SEO and UX impact |
| INP (Interaction to Next Paint) | < 200ms | Replaced FID in 2024 |
| CLS (Cumulative Layout Shift) | < 0.1 | Layout stability |

**Current Stack Analysis**

The site is all `"use client"` components — no server components, no static generation of the
HTML. This means the HTML delivered to the browser is essentially empty until React hydrates.
For a portfolio site this is an unnecessary cost.

**Recommendation: This is the biggest performance opportunity not yet addressed.**

Converting the static sections to React Server Components (RSC) would allow Next.js to render
HTML server-side, delivering actual content in the initial HTML response. The App Router
supports this natively. Sections that have no interactivity (About, Tools, Certifications,
Testimonials, Footer) can be server components immediately. Sections with animations (Framer
Motion) must remain client components — but their wrappers can be server components.

However, the PROJECT.md explicitly states "New tech stack — stay on Next.js 14, Tailwind,
Framer Motion" and "No new tech stack." RSC is an architectural shift in how components are
rendered, not a new library — it's a rendering strategy change within Next.js 14. This sits at
the boundary of the stated constraint. Flag this as a decision for the product owner.

**What can be done without architectural changes:**

- `next/image` with explicit `priority` prop on the profile photo (currently an SVG `<image>`
  element, not `next/image` — this means no LCP optimization for the hero image)
- The SVG `<feGaussianBlur>` filters (`f-glow`, `f-node`) in the NetworkDiagram run on the GPU;
  they are fine on desktop but can degrade on mobile. Worth testing on mid-range Android.
- `critters` (experimental.optimizeCss) is already enabled — this inlines critical CSS correctly.
- Font `display: 'swap'` already set — correct.
- No unnecessary re-renders visible in the current code.

**Confidence: HIGH** — Core Web Vitals, RSC, and `next/image` are documented and stable.

---

### 7. What Top-Tier IT Portfolios Do That Average Ones Don't

Based on established patterns in portfolio UX and the specific context of IT support roles:

**Specificity over generality**

Average: "Experienced in Microsoft 365"
Top-tier: "Microsoft 365 (Exchange Online, Teams, SharePoint, Entra ID) — provisioning, MFA
troubleshooting, mailbox migrations, conditional access policy"

The specificity signals depth. It also makes the CV ATS-parseable because it contains the exact
terms a recruiter's search will use.

**Trajectory narrative**

Average IT support portfolio: lists jobs held.
Top-tier: shows a career arc. The current site has this — delivery driver → informal IT support
→ home lab → bootcamp — but it's not narrated explicitly. The hero or About section should name
this arc: "Self-taught, production-tested, heading toward infrastructure engineering."

**System over task**

Average: "Fixed login issues for colleagues."
Top-tier: "Identified account lockout pattern across 5 users in M365, diagnosed AD sync delay,
implemented fix in under 10 minutes — no escalation, no downtime."

The existing case studies have the right structure (Problem → Process → Solution → Result) but
the outcome statements are too soft ("maintained operational efficiency"). The metrics exist in
the data structure (`resolutionTime`, `usersAffected`, `costSavings`) — the issue is the copy
in `result` and `costSavings` fields is not using them aggressively enough.

**Visible self-investment**

Recruiters hiring for IT support roles look for people who run things at home. The home lab entry
in ExperienceTimeline.tsx is excellent and specific. It should be more visually prominent.
Consider a dedicated "Lab" or "Infrastructure" section, or ensure the timeline's home lab entry
has visual weight equal to the professional entry.

**Confidence: HIGH** — these patterns are based on established hiring psychology and portfolio UX
principles, not speculation.

---

### 8. What NOT to Do

| Anti-Pattern | Why to Avoid | Common Mistake |
|--------------|-------------|----------------|
| Cycling type animation between synonyms | Delays the message; "Help Desk Support Specialist" and "IT Service Desk Professional" mean the same thing to a recruiter — cycling them wastes attention | Use animation to show trajectory, not synonyms |
| Skill bars / progress bars with percentages | "90% JavaScript" is meaningless and looks naive; they measure nothing | Replace with categorised skill lists or tool grids |
| Generic "I am passionate about technology" bio copy | Every candidate says this; it carries zero signal | Replace with a specific claim about what you've built or fixed |
| Floating "Hire Me" or "Open to work" banners | Looks desperate; the status badge is a more professional alternative (already implemented correctly) | Keep the current status badge |
| Wall-of-text paragraphs in cards | Recruiters scan; blocks of prose are skipped | Keep bullets, front-load the metric, keep sentences short |
| Light/dark toggle on a dark-only brand site | Breaks the NOC identity; already correctly excluded in PROJECT.md | Stay dark-only |
| Scroll-jacking / parallax for its own sake | Interrupts natural scrolling; makes the site feel gimmicky | Keep Framer Motion subtle — `y` offsets, not full-screen parallax |
| Horizontal scroll sections | Poor mobile UX; hard to navigate with keyboard | Stick to vertical scroll |
| Too many social proof logos with no context | A row of company logos means nothing without a sentence explaining the relationship | The Testimonials section is correct — named people, real quotes |

**Confidence: HIGH** — these are documented UX anti-patterns and portfolio hiring research.

---

## No New Libraries Needed

The existing stack covers everything required:

| Need | Already Handled By |
|------|--------------------|
| Scroll animations | Framer Motion `whileInView` |
| Number counters | `react-animated-numbers` |
| Type animation | `react-type-animation` |
| SVG animation | Native SVG `<animateTransform>` + `<animateMotion>` |
| Icons | `@heroicons/react` |
| Form handling | Resend + Zod (existing API route) |

The only potential addition worth considering: a lightweight syntax highlighter (Shiki or
Prism) if code snippets are added to case studies. Not currently needed.

**Do not add:** GSAP (overkill for these animations), Three.js (not needed), any additional
animation library, any state management library, any CMS.

---

## Alternatives Considered

| Category | Recommended Approach | Alternative | Why Not |
|----------|---------------------|-------------|---------|
| Hero role display | Static title + one meaningful animation | Cycling synonyms (current) | Synonyms delay message clarity |
| Case study outcomes | Metric-led headline ("5 users in 10 min") | Narrative prose (current) | Prose requires reading; metrics can be scanned |
| Section order | Proof-first (Experience → Case Studies → About) | Bio-first (current) | Trust is built by evidence, not biography |
| Reduced motion | `useReducedMotion()` hook wrapping all animations | None (current) | Accessibility gap; increasingly expected |
| Profile photo | Native `next/image` with LCP `priority` | SVG `<image>` element (current) | `<image>` in SVG is not LCP-optimised by Next.js |

---

## Sources

All findings based on:

- **Well-established UX research:** F/Z pattern scanning, above-the-fold hierarchy, conversion
  copywriting (PAS, inverted pyramid) — stable domain knowledge, HIGH confidence
- **Direct code analysis:** HeroSection.tsx, ExperienceTimeline.tsx, CaseStudiesSection.tsx,
  AboutSection.tsx, and codebase architecture documents — verified from source
- **Next.js 14 App Router documentation:** RSC rendering model, `next/image` LCP optimisation,
  `next/font` behaviour — HIGH confidence for patterns in use since Next.js 13+
- **Framer Motion 11 documentation (training knowledge):** `useReducedMotion`, `whileInView`,
  `viewport` — MEDIUM confidence; verify current API against Framer Motion 11 docs before
  implementing reduced-motion support
- **Core Web Vitals 2025:** LCP/INP/CLS targets per Google's current guidance — HIGH confidence;
  INP replaced FID as of March 2024 (verified knowledge cutoff)

---

*Researched: 2026-03-09 — Stack dimension for IT portfolio improvement roadmap*
