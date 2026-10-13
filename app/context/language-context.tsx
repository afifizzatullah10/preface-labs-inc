"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language, type TranslationDictionary } from "../lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "preface_lang";

function detectIndonesiaUser(): boolean {
  if (typeof window === "undefined") return false;

  try {
    // 1. Timezone detection (WIB, WITA, WIT)
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (/Jakarta|Makassar|Jayapura|Pontianak|Indonesia/i.test(tz)) {
      return true;
    }

    // 2. Browser language preferences
    const languages = window.navigator.languages || [window.navigator.language || ""];
    for (const l of languages) {
      if (/^id\b|^in\b/i.test(l)) {
        return true;
      }
    }
  } catch (err) {
    console.debug("Locale detection error:", err);
  }

  return false;
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "id";
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get("lang");
    if (paramLang === "id" || paramLang === "en") {
      return paramLang;
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "id" || saved === "en") {
      return saved;
    }

    return detectIndonesiaUser() ? "id" : "en";
  } catch {
    return "id";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.setAttribute("lang", lang);
    } catch {
      // ignore in restrictive environments
    }
  }, [lang]);

  const setLang = (next: Language) => {
    setLangState(next);
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === "id" ? "en" : "id"));
  };

  const value: LanguageContextType = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
