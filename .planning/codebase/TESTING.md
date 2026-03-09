# Portfolio Website — Testing

## Current State

**No test suite is configured or present.**

- No Jest, Vitest, or Playwright configuration
- No test files (`*.test.ts`, `*.spec.tsx`, etc.)
- No testing libraries installed (`@testing-library/react`, etc.)
- `package.json` has no test script

This is expected for a personal portfolio site in active development.

---

## Environment Limitation

The environment runs **Node.js 18**, which is below the minimum required for Next.js build/lint commands. Even if tests were added, `npm run build` won't run in this environment. Development is done via `npm run dev` from the user's terminal.

---

## If Tests Were Added

### Recommended Stack
- **Unit/Integration**: Jest + `@testing-library/react` (Next.js default)
- **E2E**: Playwright (best Next.js integration)

### Priority Areas

#### 1. API Route — Highest Priority
`src/app/api/send/route.ts` is the only server-side logic. It's deterministic and easy to unit test:
```typescript
describe('POST /api/send', () => {
  it('validates required fields');
  it('rejects invalid email format');
  it('enforces 5 req/15 min rate limit per IP');
  it('returns 429 when rate limit exceeded');
  it('returns 400 with details on validation failure');
  it('returns 500 if RESEND_API_KEY missing');
  it('sanitizes inputs (trim, toLowerCase)');
  it('sends email via Resend on valid input');
  it('does not leak internal errors to client');
});
```

#### 2. Contact Form (E2E)
`src/app/components/EnhancedContactSection.tsx`:
- Submit button disabled during request
- Success message shown on 200
- Inline error shown on non-200
- Form resets after success

#### 3. Navbar Behavior (Integration)
`src/app/components/Navbar.tsx`:
- Hides on scroll down, reappears on scroll up
- Active section updates via IntersectionObserver
- Mobile overlay opens/closes on hamburger click
- Escape key closes mobile overlay
- Body scroll locks when overlay is open

### Mocking Needs

```typescript
// Resend client
jest.mock('resend', () => ({
  Resend: jest.fn(() => ({
    emails: { send: jest.fn().mockResolvedValue({ id: 'mock-id' }) }
  }))
}));

// fetch (for form submission)
global.fetch = jest.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve({ message: 'Email sent' }) })
);

// IntersectionObserver (for Navbar)
global.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn()
}));

// scrollIntoView
Element.prototype.scrollIntoView = jest.fn();
```

### Coverage Targets (If Added)
- **API route**: 80–90% (critical, easy to test)
- **Navbar behavior**: 60–70%
- **Contact form**: 50–60%
- **Visual sections**: Low priority; Framer Motion animations make unit testing fragile
- **Overall**: 40–60% is realistic and sufficient for a portfolio site
