"use client";

import { useLanguage } from "../context/language-context";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="radiogroup"
      aria-label="Pilih bahasa / Select language"
      className="relative flex items-center p-0.5 rounded-full border border-neutral-200 bg-neutral-100 text-xs font-semibold dark:border-neutral-800 dark:bg-neutral-900 shadow-inner"
    >
      {/* Sliding thumb pill */}
      <span
        aria-hidden="true"
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-transform duration-300 ease-out dark:bg-neutral-800 ${
          lang === "id" ? "translate-x-[calc(100%+2px)]" : "translate-x-0.5"
        }`}
      />

      {/* EN Button */}
      <button
        type="button"
        role="radio"
        aria-checked={lang === "en"}
        onClick={() => setLang("en")}
        className={`relative z-10 flex items-center justify-center gap-1 px-2.5 py-1 rounded-full transition-colors duration-200 select-none ${
          lang === "en"
            ? "text-neutral-900 dark:text-white font-bold"
            : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
        }`}
        title="English"
      >
        <span className="text-[10px] tracking-wider">EN</span>
      </button>

      {/* ID Button */}
      <button
        type="button"
        role="radio"
        aria-checked={lang === "id"}
        onClick={() => setLang("id")}
        className={`relative z-10 flex items-center justify-center gap-1 px-2.5 py-1 rounded-full transition-colors duration-200 select-none ${
          lang === "id"
            ? "text-neutral-900 dark:text-white font-bold"
            : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
        }`}
        title="Bahasa Indonesia"
      >
        <span className="text-[10px] tracking-wider">ID</span>
      </button>
    </div>
  );
}
