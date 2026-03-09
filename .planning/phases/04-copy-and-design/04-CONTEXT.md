# Phase 4: Copy and Design - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Sharpen all section copy so it sells rather than describes, and strengthen the NOC visual identity to be memorable. No new sections, no new architecture — brownfield improvements only. Copy quality and visual boldness are the deliverables.

</domain>

<decisions>
## Implementation Decisions

### Experience entry ordering (COPY-01)
- Entry order changes to: Homelab → Tesco → Web Dev bootcamp → Degree
- The homelab / Linux infrastructure project moves to position 1 — it leads the timeline
- Tesco entry keeps its "Informal IT Support" framing in the title (no rename to IT Technician)
- Tesco summary is rewritten to open with the IT support work, not delivery context
- The "Currently In Progress" certification callout at the bottom of the section stays as-is

### Case study result copy (COPY-02)
All four `result` fields rewritten to metric-led, outcome-first:
- **M365 logins**: "5 users restored to full M365 access within 10 minutes each — zero escalation, zero downtime." (numbers confirmed accurate)
- **Handheld devices**: "3 delivery devices returned to full operation before shift end, preventing route delays for the affected drivers." (confirmed accurate)
- **Training**: "8 colleagues fully independent on the new system after a single training session each — eliminated recurring management requests for basic scheduling tasks." (confirmed accurate)
- **Homelab**: "A production-grade home lab running multiple containerised services — fully self-hosted, zero cloud dependency, managed entirely via CLI." (tightened from current wordy version)

### About section soft skills (COPY-03)
- The soft skills card ("Problem Solving, Technical Documentation, Team Collaboration, Communication, Adaptability") is removed entirely
- No replacement specified — Claude's discretion on what fills that space or whether the grid layout collapses gracefully

### Certifications (COPY-04)
- Remove all informal self-study entries: Basic Active Directory Administration, ServiceNow & Jira Basics, Google IT Support Skills
- Keep only credentialled items: CompTIA A+ and MS-900 (Microsoft 365 Fundamentals)
- Both targeting 2026 — display target year, not a specific month
- Replace % progress bars with target completion date display
- No additional certs to add — two credible real entries is preferred over padding

### Tools section (COPY-05)
- Descriptions must describe tasks and outcomes, not proficiency labels
- Remove "Basic X" labels from tool pills (e.g. "Active Directory (Basic)" → "Active Directory")
- Claude rewrites descriptions to be task/outcome-led (e.g. "Diagnosed and resolved M365 login, sync, and access issues for colleagues daily" not "Proficient in Windows administration")
- "Professional Skills" category (Problem Solving, Documentation, Team Collaboration) is a soft skills list — remove or replace with something that demonstrates outcome rather than self-assertion

### Design — glow and contrast (DESIGN-01)
- Tune-up only: increase glow intensity on `.glow-card` hover state, strengthen card border contrast, brighter cyan on active/hover states
- Same design system — more presence, not structural redesign

### Design — NOC decorative elements (DESIGN-02)
- **Status LEDs**: Small pulsing dot next to key section headers (Experience, Case Studies, Contact)
- **Corner brackets**: Apply `.tech-corner` class to glow-cards in key sections
- **Scan-line / terminal effects**: Subtle effect on a key heading (e.g. About section title)
- **Rack unit aesthetic**: Cards get subtle rack-unit decorative details — tiny '1U'/'2U' mono labels at ~20% opacity on card edges, and/or small port/connector icon details bottom-right. Subtle decoration, not labelled explanations. Deliberate NOC server-rack feel.
- Claude applies these where they add rather than distract — no need to apply to every single card

### Accessibility (DESIGN-03)
- `useReducedMotion` hook from Framer Motion implemented across all sections that use animation
- Wrap all `motion.div` scroll animations with reduced-motion conditional
- Note from STATE.md: verify exact Framer Motion 11 API (`useReducedMotion`) before implementation

### Claude's Discretion
- Whether to add a replacement card in the About section grid after soft skills removal, or let the layout reflow
- Exact wording of rewritten Tesco summary (keep IT-support-first, Peter-authentic tone)
- Which specific cards get rack-unit labels vs corner brackets vs LEDs — apply deliberately where it adds
- Tools section category restructure specifics (how to reframe "Professional Skills" category)

</decisions>

<specifics>
## Specific Ideas

- **Server rack aesthetic**: User specifically wants cards to feel like rack-mounted modules. Rack unit labels (tiny, muted `1U`/`2U` mono text at ~20% opacity), connector/port icon details on card corners. The page should feel like a live NOC server rack, not just a dark theme.
- **Status LEDs ONLINE**: The pulsing status LED dots should appear near section headers to reinforce the "live system" feel
- Card rack-unit labels: subtle decoration only — visible to those who notice, invisible to those who don't

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `Framer Motion` — already imported in every component; `useReducedMotion` hook available from same package
- `.glow-card` class — all cards already use it; tuning the CSS in `globals.css` affects the whole site at once
- `.tech-corner`, `.status-led`, `.cursor-blink` — defined in `globals.css` but sparsely applied; ready to use
- `.glass border rounded-2xl` — consistent card pattern across all components

### Established Patterns
- Section data arrays defined at the top of each component (e.g. `entries`, `caseStudies`, `certifications`, `toolCategories`) — copy changes are data edits, not structural changes
- All components are `"use client"` — hooks like `useReducedMotion` work without RSC concerns
- Timeline accent colors use `accentColor` / `accentBg` per entry — ordering change is just array reorder
- `CertificationsSection` has `progress?: number` field in the `Certification` interface — add `targetDate?: string` field instead

### Integration Points
- `globals.css` → `.glow-card` hover shadow: increase `box-shadow` intensity here for DESIGN-01
- `globals.css` → `.tech-corner` already defined — apply `tech-corner` class to card containers
- `globals.css` → `.status-led` already defined — apply alongside section header eyebrows
- Each section component is self-contained — no shared state to worry about when editing

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 04-copy-and-design*
*Context gathered: 2026-03-09*
