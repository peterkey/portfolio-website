# Portfolio Website — Technical Concerns

## Critical Issues

### 1. Pre-existing TypeScript Error: `request.ip`
**File**: `src/app/api/send/route.ts:41`

`request.ip` was removed in newer Next.js versions. Rate limiting falls back to `x-forwarded-for` header, which works, but the TS error is present.

**Fix** (when ready):
```typescript
const ip = request.headers.get("x-forwarded-for")?.split(',')[0].trim() || "unknown";
```

**Status**: Documented in CLAUDE.md as pre-existing; not introduced by recent changes.

---

## Technical Debt

### 2. In-Memory Rate Limiting
**File**: `src/app/api/send/route.ts:17`

```typescript
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
```

Issues:
- **Memory leak**: Expired entries never cleaned up; Map grows indefinitely
- **Single-instance only**: Doesn't survive serverless restarts or multiple instances
- **No persistence**: Resets on every cold start

**Acceptable for**: Personal portfolio with low traffic.
**Fix if needed**: Redis or `@vercel/kv` for persistent rate limiting.

---

### 3. Hardcoded Values That Should Be Env Variables
**File**: `src/app/api/send/route.ts:89`, `src/app/layout.tsx:38,45,77`

```typescript
// API route
to: ["prkey94@gmail.com", sanitizedEmail]

// Layout
metadataBase: new URL("https://your-domain.com")
verification: { google: "your-google-verification-code" }
```

**Fix**:
```typescript
to: [process.env.RECIPIENT_EMAIL!, sanitizedEmail]
// And move domain/verification to .env.local
```

---

### 4. No HTML Escaping in Email Template
**File**: `src/app/api/send/route.ts`

User input interpolated directly into HTML email:
```typescript
<p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
```

Risk: HTML injection into email body. Low severity — recipient is the site owner.

**Fix**: `import escapeHtml from 'escape-html'` and escape before template interpolation.

---

## Unused Code

### 5. Legacy Components (Not Rendered)
**Files**: `src/app/components/`

- `EmailSection.tsx` — replaced by `EnhancedContactSection.tsx`
- `MenuOverlay.tsx` — mobile menu moved into `Navbar.tsx`
- `NavLink.tsx` — legacy nav link wrapper
- `TabButton.tsx` — legacy tab button
- `ThemeToggle.tsx` — dark/light toggle (site is permanently dark)

All retain old color hex values (`#22D3EE`, `#06090F`) inconsistent with the NOC theme. None are imported in `page.tsx`. Safe to delete.

---

### 6. Light-Mode Color Tokens (Unused)
**File**: `tailwind.config.js`

Tokens like `trueAutumn.light`, `trueAutumn.textLight`, etc. remain in config. Site is dark-only (`<html class="dark">` hardcoded). These add noise to the config but have zero runtime impact.

---

## Performance Concerns

### 7. Large Inline SVG in HeroSection
**File**: `src/app/components/HeroSection.tsx`

The `NetworkDiagram` component is ~220 lines of inline SVG with 5 `<animateMotion>` elements, scan line, and rotating rings. All animations are CSS/SVG-native (no JS), so impact is minimal, but worth monitoring on low-end mobile.

**Mitigation**: Component doesn't re-render after mount. Could wrap in `React.memo()` for extra safety.

---

### 8. Background Images Not Optimized
**File**: `src/app/components/ProjectCard.tsx`

Project images loaded via inline CSS `background-image`:
```tsx
style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
```

These bypass `next/image` optimization (WebP/AVIF conversion, lazy loading). Low impact for a portfolio with few project images.

---

## Fragile Areas

### 9. Navigation Section IDs Are Magic Strings
Section IDs (`#about`, `#experience`, etc.) are hardcoded in both section components and the Navbar `navLinks` array. If a section is renamed/removed, nav links break silently. No type-safety.

---

### 10. IntersectionObserver Active Tracking
**File**: `src/app/components/Navbar.tsx:99–112`

`rootMargin: "-30% 0px -60% 0px"` is a magic number tuned empirically. Missing sections fail silently (guarded by `if (!el) return`). Works correctly but brittle if section layout changes significantly.

---

### 11. Body Scroll Lock (Mobile Menu)
**File**: `src/app/components/Navbar.tsx`

```typescript
document.body.style.overflow = isOpen ? "hidden" : "";
```

Direct DOM mutation. Can conflict if other modals are ever added. Works fine for current single-overlay design.

---

## Security

### 12. No Content-Security-Policy Header
**File**: `next.config.mjs`

Security headers are set but CSP is missing. Low severity for a portfolio site with no user accounts. Would be required for any site handling auth or sensitive data.

---

## Metadata TODOs

Before deployment:
- Replace `https://your-domain.com` with actual domain
- Add real Google Search Console verification code
- Set `RECIPIENT_EMAIL`, `FROM_EMAIL`, `RESEND_API_KEY` in production env

---

## Risk Summary

| Issue | Severity | Production Impact | Fix Effort |
|---|---|---|---|
| `request.ip` TS error | Low | Rate limit falls back gracefully | Low |
| In-memory rate limiter | Medium | Works; not scalable | Medium |
| Hardcoded email/domain | Low | Works; not portable | Low |
| No HTML escaping in email | Low | Email injection to owner only | Low |
| Legacy unused components | Low | Zero runtime impact | Low (delete) |
| Large SVG in hero | Low | Negligible on modern hardware | Low |
| No CSP header | Low | Portfolio site, no auth | Medium |

**Overall**: Safe to deploy as-is. No critical security or stability issues.
