# Preface Labs · portfolio site

Personal portfolio site for **Preface Labs**—projects built while pursuing a master’s at Carnegie Mellon (weekends and spare time), aimed first at recruiting and conversations about shipped work.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- lucide-react icons
- Inter via `next/font/google`

Archived “company-first” marketing copy lives in [`future.md`](future.md).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Scripts

- `npm run dev` — start the dev server on port 3001
- `npm run build` — production build
- `npm run start` — run the production build on port 3001
- `npm run lint` — lint with ESLint

## Project structure

- `app/layout.tsx` — root layout, metadata, Inter font
- `app/page.tsx` — single-page site (Header, Hero, Portfolio, About, Footer)
- `app/globals.css` — Tailwind + global styles
