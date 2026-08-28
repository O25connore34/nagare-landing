# Nagare Composite — landing page

Single-page site for a fictional FRP (fiberglass) body panel workshop in Toyota, Aichi.
Built from `design-specs/01-landing-nagare/design-spec.md`, which in turn comes from
`docs/01-landing-nagare/brief.md`.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS v4 — tokens declared in `app/globals.css` under `@theme`
- Fonts via `next/font/google`: Space Grotesk (display), DM Sans (body), JetBrains Mono (technical)

## Running

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Layout

```
app/
  layout.tsx        fonts, metadata
  globals.css       design tokens, type scale, form control styling
  page.tsx          section composition
  api/rfq/route.ts  RFQ endpoint
components/
  site-header.tsx   sticky nav + mobile drawer
  hero.tsx          section 2
  scope.tsx         01 / SCOPE
  intake.tsx        02 / INTAKE PROTOCOL
  process.tsx       03 / CRAFTSMANSHIP
  archive.tsx       04 / ARCHIVE
  teams.tsx         05 / B2B & TEAMS
  rfq.tsx           06 / REQUEST FOR QUOTATION
  site-footer.tsx   colophon
  ui/               button, spec badge, section head
public/images/      workshop photography, one folder per section
```

## Design tokens

Colours, fonts and the 4px spacing grid live in the `@theme` block of `app/globals.css`.
Tailwind generates utilities from them, so `bg-surface`, `text-muted`, `border-line`,
`text-accent` and friends all map straight back to the spec.

The spec bans shadows outright, so every `--shadow-*` token is set to `none`.
Radii are 2px on inputs and buttons (`rounded-edge`) and square everywhere else.

## Known gaps

- `POST /api/rfq` validates the submission and returns `{ ok: true }` but does not
  deliver it anywhere. Wire up an inbox, CRM or ticket system before going live.
- `rfq@nagare-composite.jp` in the footer is a placeholder address. The brief did not
  supply a real contact, and deliberately supplies no street address.
- Archive projects are labelled as generic reference builds. Per the brief, no client
  names, vehicle years, testimonials or certifications are claimed anywhere on the page.
