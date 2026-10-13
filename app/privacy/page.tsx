"use client";

import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { useLanguage } from "../context/language-context";
import LanguageSwitch from "../components/language-switch";
import ThemeToggle from "../components/theme-toggle";
import { BrandLogo } from "../components/brand-logo";

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-neutral-100 flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-black/80">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-bold tracking-tight text-neutral-900 dark:text-white"
            aria-label="Preface Labs"
          >
            <ArrowLeft className="h-4 w-4" />
            <BrandLogo className="h-5 sm:h-6 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-4xl px-6 py-12">
        <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 space-y-8 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Lock className="h-4 w-4" />
              <span>Privasi & Perlindungan Data • UU PDP No. 27/2022</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              {isId ? "Kebijakan Privasi (Privacy Policy)" : "Privacy Policy"}
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Terakhir diperbarui: 13 Oktober 2026 • PT AFAMS GLOBAL SOLUSINDO
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "1. Komitmen Perlindungan Data Pribadi" : "1. Commitment to Personal Data Protection"}
              </h2>
              <p>
                {isId
                  ? "PT AFAMS GLOBAL SOLUSINDO ('Perusahaan', 'kami') berkomitmen menjaga privasi dan kerahasiaan data pribadi klien serta pengguna situs prefacelabs.com sesuai dengan Undang-Undang Republik Indonesia No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP)."
                  : "PT AFAMS GLOBAL SOLUSINDO ('Company', 'we') is committed to safeguarding personal data privacy of clients and site visitors in accordance with the Law of the Republic of Indonesia No. 27 of 2022 on Personal Data Protection (UU PDP)."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "2. Data yang Kami Kumpulkan" : "2. Information We Collect"}
              </h2>
              <p>
                {isId
                  ? "Kami mengumpulkan informasi yang Anda berikan secara sukarela saat memesan sesi konsultasi atau mengisi formulir kebutuhan software: Nama lengkap, nama institusi/bisnis, alamat email, nomor telepon/WhatsApp, dan deskripsi kebutuhan proyek teknis Anda."
                  : "We collect information you voluntarily submit when requesting a consultation or completing our software discovery form: Full name, business or company name, email address, phone/WhatsApp number, and technical project notes."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "3. Pemrosesan Data Finansial oleh DOKU" : "3. Financial Data Processing via DOKU"}
              </h2>
              <p>
                {isId
                  ? "Informasi kartu kredit, nomor rekening bank, dan kredensial pembayaran sensitif diproses langsung oleh sistem DOKU Payment Gateway (PT Nusa Satu Inti Artha) dengan enkripsi standar industri PCI-DSS Level 1. Kami tidak pernah menyimpan data CVV maupun PIN kartu Anda pada server kami."
                  : "Credit card information, bank account numbers, and sensitive payment credentials are encrypted and processed directly by DOKU Payment Gateway (PT Nusa Satu Inti Artha) under certified PCI-DSS Level 1 protocols. We do not store raw card credentials or PIN codes on our servers."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "4. Penggunaan Informasi" : "4. How We Use Information"}
              </h2>
              <p>
                {isId
                  ? "Informasi yang dikumpulkan digunakan semata-mata untuk: (a) Menyelenggarakan sesi konsultasi teknis arsitektur software; (b) Mengirimkan invoice resmi dan konfirmasi pembayaran; (c) Menghubungi klien terkait timeline pengerjaan software; dan (d) Memenuhi kewajiban perpajakan serta hukum di Indonesia."
                  : "Information collected is strictly utilized to: (a) Deliver scheduled technical software consultation sessions; (b) Dispatch official invoices and payment confirmations; (c) Liaise with clients regarding project execution timelines; and (d) Fulfill regulatory and tax obligations in Indonesia."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "5. Kontak Petugas Privasi" : "5. Privacy Officer Contact"}
              </h2>
              <p>
                {isId
                  ? "Untuk permohonan penghapusan atau pembaruan data pribadi, silakan hubungi PT AFAMS GLOBAL SOLUSINDO (NIB: 0273010201718) melalui email resmi: afams.biz@gmail.com."
                  : "To request deletion or updates of personal data, please contact PT AFAMS GLOBAL SOLUSINDO (NIB: 0273010201718) via official email: afams.biz@gmail.com."}
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{isId ? "Kembali ke Beranda" : "Return to Home"}</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
