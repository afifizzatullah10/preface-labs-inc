"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  FileText,
  Mail,
  MapPin,
  Moon,
  Trophy,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  QrCode,
  CreditCard,
  Wallet,
  ChevronRight,
  BookOpen,
  Dog,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./components/theme-toggle";
import LanguageSwitch from "./components/language-switch";
import { useLanguage } from "./context/language-context";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.84c.82 0 1.65.11 2.43.33 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

type PortfolioItem = {
  name: string;
  description: {
    id: string;
    en: string;
  };
  stack: string[];
  href: string;
  icon: LucideIcon;
  award?: {
    id: string;
    en: string;
  };
};

const portfolio: PortfolioItem[] = [
  {
    name: "Solyns AI",
    description: {
      id: "Platform wawancara bertenaga AI yang mengotomatisasi pengumpulan wawasan dan analitik kandidat.",
      en: "The core AI-powered interview platform automating insights and candidate intelligence.",
    },
    stack: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Tailwind CSS"],
    href: "https://solyns.com",
    icon: Bot,
  },
  {
    name: "Solyns AI Form",
    description: {
      id: "Formulir intake cerdas terstruktur bertenaga AI untuk otomatisasi pengumpulan data bisnis.",
      en: "AI intelligent, structured intake forms for automated data collection and validation.",
    },
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "Tailwind CSS",
    ],
    href: "https://form.solyns.com",
    icon: FileText,
  },
  {
    name: "ReplyLocal",
    description: {
      id: "Perangkat lunak penjangkauan lokal dan otomatisasi keterlibatan bisnis cerdas.",
      en: "Tools for local engagement, customer outreach, and localized business presence.",
    },
    stack: ["React", "TypeScript", "Firebase", "Google APIs", "Tailwind CSS"],
    href: "https://replylocal.app",
    icon: MapPin,
    award: {
      id: "Top 10 Finalis OpenAI x Handshake Codex Creator Challenge dari 1.500+ entri",
      en: "Top 10 Finalist in the OpenAI x Handshake Codex Creator Challenge out of 1,500+ U.S. submissions",
    },
  },
  {
    name: "Moonlight Muslims",
    description: {
      id: "Audio cerita pengantar tidur personal berbasis AI yang menanamkan nilai-nilai kebaikan untuk generasi penerus.",
      en: "Personalized, AI-powered bedtime audio stories that bring Islamic values to life for the next generation.",
    },
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI", "DOKU Gateway", "Resend"],
    href: "https://moonlightmuslims.com",
    icon: Moon,
  },
  {
    name: "Wonder Deen",
    description: {
      id: "Platform penerbitan buku cerita anak Muslim berilustrasi penuh, e-book interaktif, dan audiobook edukasi.",
      en: "Interactive Islamic children's storybooks, e-books, and educational audiobooks nurturing character and faith.",
    },
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI", "DOKU Gateway", "Tailwind CSS"],
    href: "https://wonderdeen.com",
    icon: BookOpen,
  },
  {
    name: "Starring My Dog",
    description: {
      id: "Kalender dinding kustom bertenaga AI yang menampilkan foto hewan peliharaan Anda dalam 12 karya seni tematik.",
      en: "Custom AI-generated dog wall calendars featuring your pet across 12 months of fine art.",
    },
    stack: ["Next.js", "TypeScript", "Supabase", "Fal.ai", "Stripe", "Inngest", "Tailwind CSS"],
    href: "https://starringmydog.com",
    icon: Dog,
  },
];

export default function Page() {
  const { lang, t } = useLanguage();
  const isId = lang === "id";

  return (
    <div id="top" className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur-md dark:border-neutral-800 dark:bg-black/70">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="text-base font-bold tracking-tight text-neutral-900 dark:text-white"
          >
            Preface Labs
          </a>

          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-5 sm:gap-6">
              <a
                href="#services"
                className="text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                {t.nav.services}
              </a>
              <a
                href="#portfolio"
                className="text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                {t.nav.portfolio}
              </a>
              <Link
                href="/doku-flow"
                className="text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                {t.nav.flow}
              </Link>
              <a
                href="#about"
                className="text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                {t.nav.about}
              </a>
              <Link
                href="/corporate"
                className="text-xs font-semibold px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 transition-colors"
                title="Preface Labs Inc Corporate / Holding site"
              >
                Corporate \u2197
              </Link>
            </nav>

            <div className="flex items-center gap-2.5">
              <LanguageSwitch />
              <ThemeToggle />
              <Link
                href="/order"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#E11D48] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-rose-700 shadow-sm"
              >
                <Sparkles className="h-3 w-3" />
                <span>{t.nav.orderNow}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)]"
          />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center md:py-32">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              {t.hero.badge}
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white md:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base text-neutral-600 dark:text-neutral-400 md:text-xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Legal compliance trust badge */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] text-neutral-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>{t.hero.legalNote}</span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/order"
                className="group inline-flex items-center gap-2 rounded-full bg-[#E11D48] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-rose-700 shadow-md hover:shadow-lg"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-black dark:text-white dark:hover:border-neutral-600"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION (CUSTOM SOFTWARE B2C & B2B) */}
        <section
          id="services"
          className="border-t border-neutral-200 bg-neutral-50/60 dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 space-y-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">
                  {t.services.tag}
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                  {t.services.title}
                </h2>
              </div>
              <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
                {t.services.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.services.items.map((svc, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm space-y-4 hover:border-neutral-300 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      0{idx + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {svc.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {svc.tags.map((tg) => (
                      <span
                        key={tg}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 dark:border-neutral-800 dark:bg-black dark:text-neutral-400"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* PACKAGE PROMO CARD (RP 99.000) */}
            <div className="rounded-3xl border-2 border-neutral-900 bg-white p-8 dark:border-white dark:bg-neutral-900 shadow-xl space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    {t.packageCard.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {t.packageCard.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
                    {t.packageCard.subtitle}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-xs text-neutral-400 line-through block">
                    {t.packageCard.originalPrice}
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#E11D48] dark:text-rose-400">
                    {t.packageCard.price}
                  </div>
                  <span className="text-xs text-neutral-500 block">
                    {t.packageCard.period} \u2022 Termasuk Blueprint & 1-on-1
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                {t.packageCard.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>{t.packageCard.note}</span>
                </div>
                <Link
                  href="/order"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E11D48] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-rose-700 shadow-md"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>{t.packageCard.cta}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DOKU PAYMENT CHANNELS & VERIFICATION PROMO */}
        <section className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
          <div className="mx-auto max-w-6xl px-6 py-16 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  {t.dokuFlowPromo.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                  {t.dokuFlowPromo.title}
                </h3>
              </div>
              <Link
                href="/doku-flow"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D48] dark:text-rose-400 hover:underline"
              >
                <span>{t.dokuFlowPromo.cta}</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
              {t.dokuFlowPromo.desc}
            </p>

            {/* Channels badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {[
                { title: "QRIS Nasional", desc: "BCA, Mandiri, BRI, GoPay, OVO, Dana", icon: QrCode },
                { title: "Virtual Account", desc: "Mandiri, BCA, BRI, BNI, Permata", icon: Building2 },
                { title: "E-Wallet", desc: "GoPay, OVO, DANA, ShopeePay", icon: Wallet },
                { title: "Kartu Kredit", desc: "Visa, Mastercard, JCB (3DS Secure)", icon: CreditCard },
              ].map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-start gap-3"
                  >
                    <Icon className="h-5 w-5 text-[#E11D48] mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-neutral-900 dark:text-white">
                        {c.title}
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {c.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="border-t border-neutral-200 bg-neutral-50/60 dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">
                  {t.portfolio.tag}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                  {t.portfolio.title}
                </h2>
              </div>
              <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400 md:text-base">
                {t.portfolio.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {portfolio.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 dark:border-neutral-800 dark:bg-black dark:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 text-neutral-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900 dark:text-neutral-500 dark:group-hover:text-white"
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-900 dark:text-white md:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
                      {isId ? item.description.id : item.description.en}
                    </p>
                    {item.award && (
                      <div className="mt-4 flex items-start gap-2.5">
                        <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        <span className="text-xs sm:text-sm font-medium leading-relaxed text-neutral-700 dark:text-neutral-300">
                          {isId ? item.award.id : item.award.en}
                        </span>
                      </div>
                    )}
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                      {t.portfolio.stackLabel}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-black dark:text-neutral-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 text-xs font-medium text-neutral-500 dark:text-neutral-500">
                      {item.href.replace(/^https?:\/\//, "")}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 space-y-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">
                  {t.about.tag}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                  {t.about.title}
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {t.about.p1}
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {t.about.p2}
                </p>
              </div>
            </div>

            {/* Minimalist Corporate Entity Information */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 dark:border-neutral-800 dark:bg-neutral-900/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div>
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    {isId ? "Entitas Legal" : "Corporate Entity"}
                  </span>
                  <span className="font-bold text-neutral-900 dark:text-white text-sm">
                    {t.about.companyName}
                  </span>
                  <span className="text-neutral-500 block text-[11px] mt-0.5">
                    NIB: <span className="font-mono font-medium text-neutral-700 dark:text-neutral-300">{t.about.nib}</span> &bull; Indonesia
                  </span>
                </div>
                <div className="sm:text-right">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    {isId ? "Email Resmi" : "Official Email"}
                  </span>
                  <a
                    href={`mailto:${t.about.email}`}
                    className="font-medium text-neutral-900 dark:text-white underline hover:text-[#E11D48] transition-colors"
                  >
                    {t.about.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black"
      >
        <div className="mx-auto max-w-6xl px-6 py-12 space-y-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
            <div className="space-y-2 max-w-md">
              <div className="text-base font-bold text-neutral-900 dark:text-white">
                Preface Labs
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {t.footer.legalEntity}
              </p>
              <p className="text-xs text-neutral-400">
                NIB: <span className="font-mono font-medium">0273010201718</span> &bull; <a href="mailto:afams.biz@gmail.com" className="underline hover:text-neutral-700 dark:hover:text-neutral-200">afams.biz@gmail.com</a>
              </p>
            </div>

            {/* Legal compliance links */}
            <div className="flex flex-wrap gap-4 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-white">
                {t.footer.terms}
              </Link>
              <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-white">
                {t.footer.privacy}
              </Link>
              <Link href="/refund" className="hover:text-neutral-900 dark:hover:text-white">
                {t.footer.refund}
              </Link>
              <Link href="/doku-flow" className="hover:text-neutral-900 dark:hover:text-white text-[#E11D48] dark:text-rose-400 font-bold">
                {t.footer.dokuFlow}
              </Link>
              <Link href="/corporate" className="hover:text-neutral-900 dark:hover:text-white">
                Corporate Inc
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>{t.footer.rights}</p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="mailto:afams.biz@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:hover:text-white"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/afifizzatullah/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:hover:text-white"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/afifizzatullah10/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:hover:text-white"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
