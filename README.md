# Preface Labs, Inc.

A minimalist single-page site for Preface Labs, Inc. &mdash; a tech holding company building AI-powered tools and digital communities.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- lucide-react icons
- Inter via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` &mdash; start the dev server
- `npm run build` &mdash; production build
- `npm run start` &mdash; run the production build
- `npm run lint` &mdash; lint with ESLint

## Project structure

- `app/layout.tsx` &mdash; root layout, metadata, Inter font
- `app/page.tsx` &mdash; the single-page site (Header, Hero, Portfolio, About, Footer)
- `app/globals.css` &mdash; Tailwind + global styles
