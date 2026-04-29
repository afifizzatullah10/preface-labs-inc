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

## Firebase setup

The login, library dashboard, and admin feedback table use Firebase
Authentication and Firestore.

Create `.env.local` with these values from your Firebase web app settings:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_ADMIN_EMAILS=your-admin-email@example.com
```

Enable Google as a Firebase Authentication provider, create a Firestore
database, and publish rules like `firestore.rules` after replacing the admin
email placeholder.

## Scripts

- `npm run dev` — start the dev server on port 3001
- `npm run build` — production build
- `npm run start` — run the production build on port 3001
- `npm run lint` — lint with ESLint

## Project structure

- `app/layout.tsx` — root layout, metadata, Inter font
- `app/page.tsx` — single-page site (Header, Hero, Portfolio, About, Footer)
- `app/login/page.tsx` — Google login page
- `app/library/page.tsx` — signed-in user dashboard with feedback form
- `app/admin/page.tsx` — admin feedback table
- `app/globals.css` — Tailwind + global styles
