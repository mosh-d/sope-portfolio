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
- Never write Japanese (or any non-Latin text) as a bare `\uXXXX` escape inside JSX
  **text** - JSX does not process backslash escapes, so it renders literally. Write the
  real characters, or put the escape in a JS string: `{"\u65e5\u672c\u8a9e"}`.
  Escapes inside a normal JS string literal (e.g. a ternary) are fine.

## 7. Accessibility

### Semantics and keyboard

- Every interactive element is a real `<button>` or `<a>` - not a clickable `div`,
  `li` or `section`.
- If block-level content makes a real `<button>` unsafe (the hero role gates wrap a
  `<pre><code>` block), use `role="button"` + `tabIndex={0}` + an `onKeyDown` handler
  that responds to **both** Enter and Space, with `preventDefault()` on Space.
- Every custom control needs an accessible name. If the visible label is not
  descriptive enough, add `aria-label`.
- Icon-only controls (hamburger, close, social links) always carry `aria-label`.

### State must be announced, not just coloured

- Toggle buttons expose state with `aria-pressed` (language: Eng / \u65e5\u672c\u8a9e).
- Current section links expose `aria-current` (`MobileMenu`, `NavDetailsLinks`).
- The menu button exposes `aria-expanded`.
- Colour is never the only signal that something is active or selected.

### Links

- External links opening in a new tab use `target="_blank"` plus
  `rel="noopener noreferrer"`. Never `target="blank"`.
- Link text or `aria-label` says where the link goes, not "click here".

### Motion

- Respect `prefers-reduced-motion`.
- Anything framer-motion drives reads `useReducedMotion()` from `motion/react` in that
  component; the CSS-level fallback lives in the `index.css` media block.
- The rule when reducing: **colour changes stay, movement goes.** An affordance or
  state cue (hover tint, active highlight) must still be visible - it just switches
  instantly instead of travelling or scaling.
- Never leave an infinite animation (the marquee) running for a reduced-motion visitor.

### Text, zoom and focus

- Do not disable zoom: no `user-scalable=no`, no `maximum-scale=1`.
- Focus must stay visible. Do not remove an outline without replacing it.
- Do not add further scaling that depends on mutating the root font size; the existing
  `html { font-size: 62.5% }` + media-query approach is known debt (it overrides the
  visitor's own font-size preference).

### Images

- An image carries `alt` text describing its content, or is explicitly decorative.
- Project cards currently use `background-image`, so they carry no alt text at all.
  If and when they become `<img>`, alt is required in the same change.

## 8. Performance

- No new image over ~300 KB without approval. Prefer WebP/AVIF.
- No unused or duplicate assets committed.
- Images that can lazy-load should; background images cannot.
- One animation library, imported from `motion/react`.

## 9. Change protocol

- Allowed without asking: content edits, typo fixes, anything already recorded in the
  Decisions Log, local styling that matches section 3.
- Ask first: new dependencies, new routes or sections, layout changes, palette changes,
  anything touching the hero gate.
- Report what was checked and what was not. Never describe a page as looking right if it
  was not viewed.
- Files are written over the GitHub API, so the local working copy is stale until pulled.
  Say so in the message that accompanies a push.
- A Vercel build passing proves the app compiles and bundles. It does **not** prove the
  page looks right - verify visually before calling a UI change done.

## 10. Decisions log

| Date | Rule | Reason |
|------|------|--------|
| 2026-11-13 | Baseline document created from a full repo audit | Initial index |
| 2026-11-13 | Commit messages follow `type (Scope): Sentence` on one line | Requested directly |
| 2026-11-14 | Accessibility section added: semantics, announced state, motion, focus, images | Rules established by the first audit pass |
| 2026-11-14 | Reduced motion means "colour stays, movement goes" | Keeps every affordance while removing travel |
| 2026-11-14 | Non-Latin text is never a bare JSX-text escape | The \u65e5\u672c\u8a9e label shipped as literal text |
