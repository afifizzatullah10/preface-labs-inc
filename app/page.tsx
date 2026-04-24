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
import Image from "next/image";
import ThemeToggle from "./components/theme-toggle";

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
  description: string;
  href: string;
  icon: LucideIcon;
};

const portfolio: PortfolioItem[] = [
  {
    name: "Solyns AI",
    description:
      "AI interview platform. Runs conversational interviews and turns the answers into structured, ready-to-use insights.",
    href: "https://solyns.com",
    icon: Bot,
  },
  {
    name: "Solyns AI Form",
    description:
      "Intelligent intake forms. Asks smarter follow-up questions and cleans up the data so teams can act on it faster.",
    href: "https://form.solyns.com",
    icon: FileText,
  },
  {
    name: "ReplyLocal",
    description:
      "Local outreach tools for small businesses. Helps owners stay on top of reviews, replies, and conversations with their community.",
    href: "https://replylocal.app",
    icon: MapPin,
  },
  {
    name: "Moonlight",
    description:
      "Personalized bedtime audio stories rooted in Islamic values. Built for Muslim families who want nightly stories that feel like their own.",
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
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur-md dark:border-neutral-800 dark:bg-black/70">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="text-base font-bold tracking-tight text-neutral-900 dark:text-white"
          >
            Preface Labs
          </a>
          <div className="flex items-center gap-5 sm:gap-7">
            <nav className="flex items-center gap-5 sm:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
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
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center md:py-40">
            <span className="mb-6 inline-flex items-center rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-400">
              Carnegie Mellon University · Portfolio
            </span>
            <h1 className="text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-7xl">
              Preface Labs
            </h1>
            <p className="mt-6 max-w-xl text-base text-neutral-600 dark:text-neutral-400 md:text-lg">
              Side projects I build on weekends while studying at Carnegie Mellon
              University. Each one takes what I&rsquo;m learning in class and
              turns it into a small, working product.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                See projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-black dark:text-white dark:hover:border-neutral-600"
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        <div className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-6 py-8 md:py-10">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Built at
            </span>
            <Image
              src="/cmu-wordmark-bw.svg"
              alt="Built at Carnegie Mellon University"
              width={311}
              height={28}
              className="h-7 w-auto opacity-85 dark:invert"
              priority
            />
          </div>
        </div>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="border-t border-neutral-200 bg-neutral-50/60 dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                  Projects
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                  What I&rsquo;ve shipped.
                </h2>
              </div>
              <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400 md:text-base">
                Each link goes to a live product or experience&mdash;built
                alongside my degree, not instead of it.
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
                      {item.description}
                    </p>
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
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-3 md:py-32">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                What this is.
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 md:text-xl">
                <strong className="font-semibold text-neutral-900 dark:text-white">
                  Preface Labs
                </strong>{" "}
                is the umbrella I use for side projects while I&rsquo;m at
                Carnegie Mellon University&mdash;clear packaging for recruiters
                and collaborators who want to see execution, not just
                coursework. I build when I have focused blocks outside
                class&mdash;often weekends&mdash;because the fastest way I learn
                is to ship: apply frameworks from school, sweat the details in
                code and product, and aim for outcomes that help real people.
                Recruiting is the first job of this site; I&rsquo;d love to talk
                if that mission resonates.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            &copy; 2026 Preface Labs · Carnegie Mellon University · Pittsburgh
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="mailto:mizzatul@tepper.cmu.edu"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:bg-black dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/afifizzatullah/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:bg-black dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/afifizzatullah10/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:bg-black dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
