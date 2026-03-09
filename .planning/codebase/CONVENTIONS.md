# Portfolio Website — Coding Conventions

## TypeScript Usage

- **Strict mode enabled** (`tsconfig.json`: `"strict": true`) — all components use explicit type annotations
- **`interface` over `type`** for component props and data shapes: `interface ProjectCardProps { ... }`
- **`React.ReactNode`** for icon/children props (non-serializable)
- **Arrow function components**: `const ComponentName = () => { ... }` — no function declarations
- **No async server components** — all files are `"use client"`

### Gradient Text (Critical)
Gradient text **must use inline `style` prop** — never Tailwind `dark:` prefix inside `bg-clip-text` (breaks):
```tsx
// CORRECT
<span style={{
  background: "linear-gradient(135deg, #00D9FF 0%, #FF6B35 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}}>
```

---

## Component Structure

Every file starts with `"use client"` then imports, then the component:

```tsx
"use client";
import { motion } from "framer-motion";
// ... other imports

const SectionComponent = () => {
  return (
    <section id="section-id" className="py-20 sm:py-28 px-4 bg-trueAutumn-[dark|cardDark] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <span className="eyebrow mb-3">// Label</span>
        <h2>Section Title</h2>
        {/* cards: glow-card glass border rounded-2xl */}
      </div>
    </section>
  );
};

export default SectionComponent;
```

---

## Framer Motion Animation Pattern

```tsx
// Standard entrance animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
```

- `viewport={{ once: true }}` — fires once, not on every scroll
- Stagger: `delay: index * 0.1` for list items
- Standard duration: `0.5s–0.8s`

---

## CSS & Tailwind Patterns

### Card Pattern
```tsx
className="glow-card glass border rounded-2xl p-6"
```
All 4 classes always together. Optional additions: `tech-corner` overlay, `p-8` for larger cards.

### Button Patterns
```tsx
// Primary CTA
className="bg-[#00D9FF] text-[#060D18] hover:bg-[#00B8E0] px-8 py-3.5 rounded-lg font-semibold"

// Outline
className="border border-[#00D9FF]/35 text-[#00D9FF] hover:border-[#00D9FF]/70 hover:bg-[#00D9FF]/6 px-8 py-3.5 rounded-lg"
```

### Icon Box Patterns
```tsx
// Primary (cyan)
className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center"

// Secondary (orange)
className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center"
```

### Form Input Pattern
```tsx
className="bg-[#0A1628] border border-[#1A3A5C] placeholder-[#4A6A8A]/60 text-trueAutumn-textDark text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#00D9FF] focus:border-[#00D9FF]/50 transition-all duration-200 font-body"
```

### Color Usage
- **Tailwind tokens** for backgrounds and text: `bg-trueAutumn-dark`, `text-trueAutumn-textDark`
- **Raw hex** for accents in className: `text-[#00D9FF]`, `bg-[#FF6B35]/10`, `border-[#1A3A5C]/40`
- **Never** mix light-mode token variants (`trueAutumn-light`, etc.) — site is dark-only

### Spacing
8pt grid: `p-3` (12px), `p-4` (16px), `p-6` (24px), `p-8` (32px)

### Responsive Breakpoints
- `sm:` (640px) — most common
- `md:` (768px) — secondary grid toggles
- `lg:` (1024px) — desktop layout
- `xl:` (1280px) — navbar desktop mode only
- Custom: `xs:` (475px), `3xl:` (1600px)

---

## Typography

```tsx
// Eyebrow label (above section titles)
<span className="eyebrow mb-3">// SECTION NAME</span>

// Section heading
<h2 className="font-heading font-bold text-3xl sm:text-4xl text-trueAutumn-textDark mb-4">Title</h2>

// Mono badge/label
<span className="font-mono text-xs tracking-widest text-[#4A6A8A] uppercase">Label</span>

// Body text
<p className="font-body text-trueAutumn-textSecondaryDark leading-relaxed">Text</p>
```

---

## Import Conventions

- **Path alias**: `@/*` maps to `src/*`
- **Icons**: `@heroicons/react/24/outline` — solid variants for filled icons
- **Assets**: relative paths from component or `/` for public assets
- **No barrel files**: direct component imports

---

## Form Handling

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const response = await fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(data)),
  });
  // handle response
};
```

---

## Error Handling

### Client Components
```tsx
const [error, setError] = useState("");
// Display: {error && <div className="...">{error}</div>}
// Generic messages to users; log details to console
```

### API Route (`route.ts`)
- Zod `safeParse` → 400 with `details` array on validation failure
- Env var check at top → 500 if missing
- In-memory rate limiter → 429
- `try/catch` with `console.error` → generic 500 (never expose internals)

---

## Data Pattern

Each section owns its data as an inline array at the top of the file:
```tsx
const entries: TimelineEntry[] = [
  { id: 1, title: "...", ... },
  // ...
];
```

No external data fetching, no CMS, no shared data layer — sections are fully self-contained.

---

## Section Background Alternation

Sections alternate for visual rhythm:
```
HeroSection        → bg-trueAutumn-dark
AboutSection       → bg-trueAutumn-cardDark
ExperienceTimeline → bg-trueAutumn-dark
ProjectSection     → bg-trueAutumn-cardDark
...
```
