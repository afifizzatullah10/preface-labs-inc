"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(localStorage.getItem("theme") === "dark");
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark, mounted]);

  // Prevent hydration mismatch by returning a matching server-side structure
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Switch to night mode"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        <Moon className="h-4 w-4" strokeWidth={1.75} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.75} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.75} />
      )}
    </button>
  );
}
