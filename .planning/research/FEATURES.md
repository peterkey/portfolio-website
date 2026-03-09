# Feature Landscape

**Domain:** IT support / helpdesk / junior sysadmin portfolio — job-seeker focused
**Subject:** Peter Williams-Key
**Researched:** 2026-03-09
**Research mode:** Ecosystem + Feasibility (brownfield improvement, existing 12-section site)
**Confidence note:** Web search was unavailable during this session. Findings are drawn from deep audit of the existing codebase, established recruiter/hiring-manager behavior patterns, IT industry hiring norms, and direct analysis of the content against the stated goal ("gripping in 10 seconds"). Confidence levels reflect that sourcing.

---

## Context: What Exists

The site has 12 sections in this order:

```
Navbar → Hero → About → ExperienceTimeline → Projects → CaseStudies →
Tools → Certifications → Achievements → Testimonials → Contact → Footer
```

All sections are functionally built and NOC-themed. The problem is persuasion, not structure or engineering. This research focuses on what needs to change in content and sequencing to maximise credibility for IT hiring audiences.

---

## Table Stakes

Features/content that any IT support job-seeker portfolio must have. Missing or weak = dismissed.

| Feature | Why Expected | Current State | Severity if Weak |
|---------|--------------|---------------|-----------------|
| Clear role title above the fold | Recruiters scan for role fit in 3–5 seconds; if they can't categorise you immediately, they move on | Present — but the type animation cycles through 4 titles, so the first impression is unstable | HIGH |
| Contact route visible immediately | Hiring manager who is interested will look for "how do I reach this person" within 10 seconds | Present in navbar + CTA button | OK |
| CV download accessible | Standard expectation; recruiters often want a file for their ATS | Present in navbar + hero CTA | OK |
| Concrete technical skills list | Hiring managers keyword-scan for stack match (M365, Active Directory, Windows, ticketing tools) | Present in About and Tools sections — but buried after a long bio | HIGH |
| Evidence of real support work | IT support roles require demonstrated ability, not just a list of tools | Case Studies exist but are positioned 5th — recruiters may never reach them | HIGH |
| Employment history with dates | Background check anchoring; gaps or vagueness are red flags | Experience timeline exists but "2016–Present: Tesco" as primary entry is a liability without aggressive framing | HIGH |
| Professional contact form | Shows the site is a serious tool, not a toy | Exists, rate-limited, functional | OK |

---

## Differentiators

What separates top IT support portfolios from the mass of CV-only applicants.

| Feature | Value Proposition | Current State | Complexity to Implement |
|---------|-------------------|---------------|------------------------|
| Problem→Solution case studies with metrics | Shows thinking process, not just outcomes. Recruiters for support roles hire for methodology, not credentials alone | EXISTS — 4 case studies with P→S→R structure and resolution time metrics | Already built; needs copy improvement |
| Home lab evidence | Demonstrates self-directed learning, hunger, and genuine interest in IT beyond the job. Distinguishes from people who "have IT experience" without doing anything outside work | EXISTS — Docker server, Linux migration, documented in case study and timeline | Already built; positioning needs to be stronger |
| Specific numbers over vague claims | "120+ users/week" beats "worked in a high-volume environment". Specificity reads as honest and confident | Partially present — hero stats strip has 8+, 20+, 120+ but these numbers are small and the hero description restates them vaguely | Needs copy tightening |
| Animated/live technical element that signals infrastructure literacy | The NOC network diagram signals "this person understands how systems connect" without saying it. No other IT support CV does this | EXISTS — strong differentiator | Already built |
| Framing toward trajectory, not just current role | IT hiring managers for junior sysadmin roles want to see someone actively moving in that direction, not stuck at helpdesk | Partially present — about section mentions trajectory. Timeline has home lab. Certs section shows in-progress items. But these are spread out rather than unified under a single narrative | Copy and ordering work |
| LinkedIn + GitHub links prominent | Signals transparency and professional presence; recruiters check both immediately | Present in hero but small and de-emphasised | Minor — just visual weight |
| Availability status | Reduces friction for recruiter: they don't need to wonder if the candidate is actively looking | Present — "Available for new opportunities" badge in hero | OK |
| Testimonial or endorsement | Social proof from a named human beats everything else. Even one real quote from a colleague beats three "references available on request" cards | NOT present — the current References section is three placeholder cards with no actual quotes | HIGH value if obtainable |

---

## Anti-Features

Things deliberately absent from standout IT support portfolios, or present in this site in a form that actively hurts.

| Anti-Feature | Why It Hurts | Current State | Recommended Action |
|--------------|--------------|---------------|--------------------|
| "References available upon request" as a full section | Takes up prime real estate for something that adds zero credibility. Every candidate can say this. It signals the portfolio ran out of content. | EXISTS — full section with 3 cards and no actual content | Replace with a single-line reference note in the footer, or collapse into the contact section |
| Cycling type animation on role title | Creates instability in the first 3 seconds. Recruiters need to categorise you immediately. If they look up and the title has changed to something different, they re-read and lose context | EXISTS — 4 cycling titles | Fix to a single, static role title or reduce to 2 strongly related variants with a longer display pause |
| Percentage progress bars on in-progress certifications | Implies credentials that don't exist. "60% MS-900" tells a recruiter the candidate hasn't passed it. Progress bars for incomplete certs look like padding and can read as slightly dishonest | EXISTS — all 5 certs show progress bars, all are in-progress | Show certifications as "In Progress" with target date. Remove percentage bars. |
| Soft skills as a named section/card | IT support hiring managers know everyone lists "communication" and "problem solving". A dedicated soft-skills card adds noise not signal | EXISTS — half of About section's skills card | Weave into case study outcomes instead of listing |
| Achievements section with only 3 small numbers | A dedicated "Achievements" section with 20+, 120+, 8+ as its only content looks thin. The numbers are too small to anchor credibility on their own, and this content already appears in the hero | EXISTS — duplicates hero stats in a full section | Merge into hero metrics strip or fold into Experience section. Remove as standalone section. |
| Four case studies of unequal weight | The home lab case study (self-directed, strong) sits next to a "5 users couldn't log into M365" case study (thin). The weaker ones dilute credibility | EXISTS — cases 1 and 2 read as routine helpdesk tickets, not case studies | Elevate case 4 (home lab) and case 3 (training) to lead. Reframe cases 1–2 as a compressed metrics callout rather than full case studies |
| Generic project screenshots | All 3 projects use the profile photo as the project image. This reads as unfinished and signals the projects aren't real/deployed | EXISTS | Add real screenshots or remove project images entirely and lean into description text |
| Vague "Basic Networking" and "Basic Active Directory" in tools | Adding "Basic" to a skill tells a recruiter you can't really do it. It's better to describe the specific tasks performed | EXISTS in ToolsSection | Replace "Basic X" with the specific task: "AD user account management, password resets, group policy reading" |

---

## Feature Dependencies

```
Case Studies (strong) → Experience Timeline (credibility anchor)
Case Studies require: real metrics, problem framing, outcome language
Hero metrics → Achievements section (currently duplicated — dependency should be resolved by removal)
Certifications (in-progress) → Timeline callout (already linked by "Currently In Progress" card)
Testimonial/endorsement → References section (one real quote makes this section worth keeping)
```

---

## Section Order Recommendation

The current order surfaces the wrong content at critical scroll moments. Here is the recommended reorder with rationale.

### Recommended Order

```
1. Navbar              — unchanged (always-visible nav + CV download)
2. Hero                — unchanged in position; needs copy/title fix
3. Experience          — MOVED UP from position 4 to position 3
4. Case Studies        — MOVED UP from position 6 to position 4
5. About               — MOVED DOWN from position 3 to position 5
6. Projects            — unchanged in relative position (supporting evidence)
7. Certifications      — MOVED before Tools (credentials before tools list)
8. Tools               — MOVED after Certifications
9. Achievements        — REMOVED as standalone; merge content into Hero
10. Testimonials/Refs  — REMOVED as standalone if no real quotes; fold into Contact
11. Contact            — unchanged
12. Footer             — unchanged
```

### Rationale

**Why Experience moves to position 3 (immediately after Hero):**
Recruiters who pass the hero immediately ask: "Where has this person worked, and for how long?" This is the credibility gate. Getting it answered immediately prevents the "8 years at Tesco as a delivery driver" context from arriving too late. The timeline also contains the Home Lab entry — which is a technical credibility signal that belongs early.

**Why Case Studies move to position 4 (before About):**
Case studies are the highest-value content on the site for IT hiring managers. They demonstrate methodology, not just tooling. Placing them at position 6 means most recruiter sessions end before reaching them (average recruiter time on a portfolio: 60–90 seconds, which with scroll-triggered animations means they likely reach section 4–5 before losing interest or contacting). Moving them up means the best evidence of thinking is seen.

**Why About moves to position 5:**
The About section contains the bio, soft skills, and "currently learning" content. This is self-narrative rather than evidence. It should follow the evidence (Experience + Case Studies), not precede it. By position 5, the recruiter is already interested — the About section then adds colour and humanity, rather than asking them to take the bio on faith before they've seen any evidence.

**Why Achievements is removed as standalone:**
The three numbers (20+, 120+, 8+) are already in the Hero metrics strip. Repeating them as a full section with animated counters is redundant. The animated numbers are also mildly misleading — 20 colleagues and 120 customers/week are real numbers but small by industry standards, and drawing attention to them in isolation underscores their modesty rather than supporting credibility.

**Why Testimonials/References changes:**
Three "references available on request" placeholder cards consume a full section with zero credibility payoff. If a real testimonial quote can be obtained (even a brief informal endorsement from a colleague), the section becomes worth keeping. Without that, it should be a single line in the footer: "Professional references available on request — contact for details."

---

## MVP Recommendation for This Milestone

This is a brownfield improvement task. The goal is gripping in 10 seconds. Prioritise:

1. **Fix the hero copy first** — static role title, sharper value proposition sentence, numbers that are specific and contextualised (not just "8+ years")
2. **Reorder sections** — Experience and Case Studies move up; this is a config-level change with high impact
3. **Reframe the experience entry** — the Tesco delivery driver framing needs to be inverted: lead with the IT support work performed, with Tesco as the context, not the identity
4. **Remove Achievements as standalone section** — fold numbers into hero or experience
5. **Collapse References section** — either get a real quote or reduce to a footer line

Defer for later:
- Real project screenshots (requires actual deployed projects or design work)
- Actual completed certifications (dependent on Peter passing exams)
- Real testimonial quotes (requires outreach to colleagues)

---

## Specific Copy Gaps to Address (Content-Level)

These are observations about existing copy that weaken credibility — independent of section structure:

| Section | Current Copy Problem | What It Should Do Instead |
|---------|---------------------|--------------------------|
| Hero description | "Customer-focused IT professional delivering first-line technical support in high-volume environments" — sounds like a CV template | Lead with the specific outcome: "I keep people working. In 8 years at Tesco I've become the person colleagues call before they log a ticket — resolving M365, AD, and device issues on the spot, within minutes." |
| Hero stats | "20+ Colleagues Supported" — the number is small; it reads as a low ceiling | Reframe: "20+ staff supported daily" or combine with the weekly figure to show scale differently |
| Experience — Tesco entry | Title is "Customer Delivery Driver & Informal IT Support" — "Delivery Driver" is the first thing read | Invert: "Informal IT Support Specialist (Tesco Stores PLC)" — the delivery driver context belongs in the summary, not the title |
| Case Studies 1 and 2 | Resolution metrics show "5-10 minutes per user" and "3 users affected" — these are thin as case study anchors | Either reframe as a single "Day-to-day support wins" callout with aggregate numbers, or expand the context (e.g., what would have happened without resolution — cost, operational impact) |
| Certifications | Five in-progress certs with progress bars implies incomplete credentials being showcased | Simplify to: "Actively studying for CompTIA A+ (target Q3 2026) and MS-900 (target Q2 2026)" — removes the visual of "25% CompTIA A+" |
| Tools — "Basic Networking", "Basic Active Directory (Basic)" | The word "Basic" explicitly signals limitation | Replace with task-level descriptions: "AD: user accounts, password resets, OU navigation" |

---

## Sources

**Confidence assessment:**

| Area | Confidence | Basis |
|------|------------|-------|
| Table stakes | HIGH | Grounded in established recruiter behavior (3–5 second scan model), standard IT hiring expectations, and direct analysis of the existing content gaps |
| Differentiators | HIGH | Grounded in direct codebase audit — identifying what's already built vs what's missing; home lab and case studies as differentiators are well-established in IT hiring discourse |
| Anti-features | HIGH | Direct analysis of specific content patterns in the existing site that conflict with the stated goal of credibility and urgency; conclusions are falsifiable by reviewing each section |
| Section order | MEDIUM | Grounded in scroll-depth behavior patterns and IT recruiter priorities; specific ordering is a judgment call based on evidence, not A/B tested |
| Copy gaps | HIGH | Direct comparison of existing copy against the PROJECT.md goal statement; conclusions are specific to this site's content |

Web search was unavailable. No external URLs. Findings are derived entirely from codebase analysis and domain knowledge. Any claims about recruiter behavior patterns should be validated with a hiring manager familiar with IT support recruiting if high-stakes decisions depend on them.
