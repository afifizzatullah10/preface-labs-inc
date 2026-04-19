import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  FileText,
  Mail,
  MapPin,
  Moon,
  type LucideIcon,
} from "lucide-react";

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

type PortfolioItem = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const portfolio: PortfolioItem[] = [
  {
    name: "Solyns AI",
    description:
      "The core AI-powered interview platform automating insights.",
    href: "https://solyns.com",
    icon: Bot,
  },
  {
    name: "Solyns AI Form",
    description:
      "AI intelligent, structured intake forms for automated data collection.",
    href: "https://form.solyns.com",
    icon: FileText,
  },
  {
    name: "ReplyLocal",
    description: "Tools for local engagement and business outreach.",
    href: "https://replylocal.app",
    icon: MapPin,
  },
  {
    name: "Moonlight Muslims",
    description:
      "Personalized, AI-powered bedtime audio stories that bring Islamic values to life for the next generation.",
    href: "https://moonlightmuslims.com",
    icon: Moon,
  },
];

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Page() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="text-base font-bold tracking-tight text-neutral-900"
          >
            Preface Labs
          </a>
          <nav className="flex items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Subtle dotted-grid background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
          />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center md:py-40">
            <span className="mb-6 inline-flex items-center rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur">
              A tech holding company
            </span>
            <h1 className="text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl">
              Preface Labs, Inc.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-neutral-600 md:text-xl">
              The introduction to what&rsquo;s next. Building AI-powered tools
              and digital communities for the modern web.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="border-t border-neutral-200 bg-neutral-50/50"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                  Portfolio
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                  What we&rsquo;re building.
                </h2>
              </div>
              <p className="max-w-md text-sm text-neutral-600 md:text-base">
                A growing family of AI-first products shipping to real users.
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
                    className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_20px_40px_-20px_rgba(0,0,0,0.25)] md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 transition-colors group-hover:border-neutral-300 group-hover:bg-white">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 text-neutral-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900"
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-900 md:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
                      {item.description}
                    </p>
                    <span className="mt-6 text-xs font-medium text-neutral-500">
                      {item.href.replace(/^https?:\/\//, "")}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-neutral-200">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-3 md:py-32">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                A holding company for what&rsquo;s next.
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">
                Preface Labs is a tech holding company building AI-powered tools
                and digital communities. We prefer small, opinionated teams,
                honest craft, and products that ship. Each company in our
                portfolio stands on its own&mdash;connected by a shared belief
                that the best software feels like an introduction to what&rsquo;s
                possible.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <p className="text-sm text-neutral-500">
            &copy; 2026 Preface Labs, Inc. Built in Pittsburgh.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="mailto:mizzatul@tepper.cmu.edu"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/afifizzatullah/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
