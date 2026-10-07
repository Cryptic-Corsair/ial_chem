# ial.chem — Edexcel IAL Chemistry Revision Companion

A revision companion for Edexcel International A-Level Chemistry, Units I & II.
Written like a textbook, not a template.

## Features

- **10 topics** across Units I & II with verbatim spec points
- **Rich notes** for Topic 7 (Intermolecular Forces) with diagrams, callouts, and worked examples
- **Bullet mode** — toggle paragraphs to one-bullet-per-sentence
- **Print / PDF** — clean revision handouts with mini-TOC
- **Dark mode** — respects OS preference, persists in localStorage
- **Progress tracking** — mark topics as read, see progress on home page
- **Search** — filter topics by title, summary, or spec code
- **Keyboard shortcuts** — `j/k` to jump sections, `t` for TOC, `b` for bullets
- **Responsive** — custom layouts for phone portrait/landscape, tablet, desktop, wide
- **Accessible** — semantic HTML, ARIA, keyboard navigation, screen-reader friendly

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript 5
- Tailwind CSS 4 + shadcn/ui
- KaTeX for math rendering
- DM Serif Display + Outfit + JetBrains Mono (topic pages)
- Fraunces + Source Serif 4 (home page)

## Getting Started

```bash
bun install
bun run dev
```

Open `http://localhost:3000`

## Adding a New Topic

1. Create `src/lib/topics/topic-N.ts` exporting a `topicN: Topic` object
2. Import and register it in `src/lib/topics/index.ts`
3. Set `published: true` when ready — it appears on the home page automatically

## Project Structure

```
src/
  app/
    page.tsx              — Home page
    topic/[slug]/page.tsx — Topic detail page
    globals.css           — Design system + responsive CSS
    layout.tsx            — Root layout (fonts, theme provider)
  components/
    site/                 — Site-specific components (header, footer, blocks, etc.)
    ui/                   — shadcn/ui component library
  lib/
    topics/               — Topic data (one file per topic)
      types.ts            — Block schema (Topic → Section → Block)
      index.ts            — Topic registry
```

## License

Independent study resource — not affiliated with Pearson Edexcel.
