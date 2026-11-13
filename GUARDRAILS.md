# Portfolio Guardrails

Working agreement for changes to this repo. New rules get appended; existing rules are
never silently dropped. Anything in the Decisions Log at the bottom overrides the
defaults above it.

## 1. Project snapshot

- Stack: React 19, Vite 7, Tailwind v4 (no `tailwind.config.js`; CSS-first via
  `@import "tailwindcss"` in `src/index.css`), `motion` v12, `simplebar-react`,
  `react-icons`. No TypeScript, no test suite, no CI.
- Entry: `index.html` -> `src/main.jsx` -> `src/App.jsx`. Deployed on Vercel from `main`.
- Structure:
  - `src/App.jsx` - hero, language toggle, layout shell, section switcher
  - `src/components/` - `NavDetailsLinks`, `MobileMenu`
  - `src/components/sections/` - `About`, `Experience`, `Skills`, `Projects`
  - `src/store/role-context.jsx` - one context: `role`, `section`, `language`,
    the setters, `dataIndex`, `sope`
  - `src/utils/data.js` + `src/utils/data-ja.js` - all body copy (EN / JA)
  - `src/utils/translations.js` - nav and UI labels only
  - `src/utils/fonts.js` - shared type class strings
  - `src/assets/` - images, imported statically
- Commands: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`.
- Data flow: `role` sets `dataIndex` (0 = designer, 1 = engineer); `language` selects
  `data.js` vs `data-ja.js`; `section` selects which panel renders.

## 2. Non-negotiables

<!-- Fill in: things that must never change without explicit approval. -->

## 3. Design constraints

<!-- Fill in: palette, type scale, layout rules, motion limits. -->

## 4. Commit messages

Every commit message is a single line in this shape:

```
type (Scope): Sentence case description of what changed
```

- `type` is one of `feat`, `fix`, `docs`, `chore`, `refactor`, `style`.
- `Scope` is the area touched, in Title Case, in parentheses: `(New button)`,
  `(Fonts)`, `(SEO)`.
- Exactly one space between `type` and `(Scope)`, then a colon.
- The description starts with a past-tense verb and says what the change does.
- One line. No body, no trailer, no `Co-authored-by` unless explicitly asked for.

Examples:

```
feat (New button): Created new ghost button that submits the contact form
fix (Fonts): Closed the broken Tailwind arbitrary value in the education title
```

## 5. Code conventions

- One animation import: `motion/react`. Never import from `framer-motion`.
- No `console.log` in committed code.
- No `setTimeout` inside an event handler without cleanup via a ref or effect.
- Prefer a single `dataIndex` lookup over hardcoded `sope[0]` / `sope[1]`.
- New shared type class strings go in `fonts.js`; no new ad-hoc arbitrary values
  without a stated reason.
- An icon map is defined once and reused, not redefined per section.
- Ask before adding any dependency.
- Do not edit `package.json` without also running `npm install` locally; an out-of-sync
  lockfile breaks `npm ci` and therefore the Vercel build.

## 6. Content and i18n rules

- Every user-visible string lives in `data.js` and `data-ja.js` with matching keys, or
  in `translations.js` when it is UI chrome. No inline language ternaries in components.
- An English content edit ships with the matching Japanese edit in the same change.

## 7. Accessibility and performance floor

- Every interactive element is a `button` or an `a`, reachable by keyboard, with a
  visible focus state.
- Respect `prefers-reduced-motion`.
- Images carry alt text or are explicitly decorative, are served as WebP/AVIF at
  sensible dimensions, and never exceed ~300 KB without approval.
- No unused or duplicate assets committed.

## 8. Change protocol

- Allowed without asking: content edits, typo fixes, anything already recorded in the
  Decisions Log, local styling that matches section 3.
- Ask first: new dependencies, new routes or sections, layout changes, palette changes,
  anything touching the hero gate.
- Report what was checked and what was not. Never describe a page as looking right if it
  was not viewed.
- Files are written over the GitHub API, so the local working copy is stale until pulled.
  Say so in the message that accompanies a push.

## 9. Decisions log

| Date | Rule | Reason |
|------|------|--------|
| 2026-11-13 | Baseline document created from a full repo audit | Initial index |
| 2026-11-13 | Commit messages follow `type (Scope): Sentence` on one line | Requested directly |
