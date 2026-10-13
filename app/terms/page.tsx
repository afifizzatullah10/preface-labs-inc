"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/language-context";
import LanguageSwitch from "../components/language-switch";
import ThemeToggle from "../components/theme-toggle";
import { BrandLogo } from "../components/brand-logo";

export default function TermsPage() {
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
              <ShieldCheck className="h-4 w-4" />
              <span>Dokumen Legal Resmi • PT AFAMS GLOBAL SOLUSINDO</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              {isId ? "Ketentuan Layanan (Terms of Service)" : "Terms of Service"}
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Terakhir diperbarui: 13 Oktober 2026 • Berlaku untuk seluruh transaksi di prefacelabs.com
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "1. Entitas Hukum & Identitas Layanan" : "1. Legal Entity & Service Identity"}
              </h2>
              <p>
                {isId
                  ? "Situs web prefacelabs.com beserta seluruh layanan konsultasi teknologi, rekayasa software kustom, dan produk digital dioperasikan secara sah oleh PT AFAMS GLOBAL SOLUSINDO (Nomor Induk Berusaha / NIB: 0273010201718, NPWP: 96.749.794.2-009.000), perseroan terbatas yang beralamat di Bizpark 3 Commercial Estate Blok D No. 20-25-27, Jl. Sultan Agung, Kalibaru, Medansatria, Kota Bekasi, Jawa Barat. Dengan mengakses situs ini atau melakukan transaksi, Anda menyetujui ketentuan ini."
                  : "The website prefacelabs.com and all associated technology advisory, custom software engineering services, and digital products are legally operated by PT AFAMS GLOBAL SOLUSINDO (Business Identification Number / NIB: 0273010201718, Tax ID: 96.749.794.2-009.000), headquartered at Bizpark 3 Commercial Estate Block D No. 20-25-27, Jl. Sultan Agung, Bekasi, West Java, Indonesia. By accessing this site or purchasing services, you agree to these terms."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "2. Lingkup Layanan Software Kustom & Konsultasi" : "2. Scope of Services"}
              </h2>
              <p>
                {isId
                  ? "Preface Labs menyediakan layanan pembuatan perangkat lunak kustom B2C dan B2B, pengembangan aplikasi MVP, integrasi kecerdasan buatan (AI), serta sesi konsultasi teknis arsitektur perangkat lunak. Layanan konsultasi awal dikenakan biaya resmi sebesar Rp 99.000 yang mencakup sesi 1-on-1 dan blueprint sistem teknis."
                  : "Preface Labs provides custom B2C and B2B software engineering, rapid MVP development, artificial intelligence integration, and technical software architecture consultations. The early consultation package is officially priced at IDR 99,000 covering a 1-on-1 session and an engineering blueprint."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "3. Sistem Pembayaran & Mitra Gateway DOKU" : "3. Payment System & DOKU Gateway"}
              </h2>
              <p>
                {isId
                  ? "Seluruh pemrosesan transaksi elektronik di situs ini difasilitasi melalui DOKU Payment Gateway (PT Nusa Satu Inti Artha) yang telah berizin resmi dari Bank Indonesia. Saluran pembayaran resmi meliputi QRIS, Virtual Account bank nasional (Mandiri, BCA, BRI, BNI, Permata, CIMB), E-Wallet, dan Kartu Kredit/Debit. Transaksi dicatat dalam mata uang Rupiah (IDR)."
                  : "All electronic transaction processing on this website is facilitated via DOKU Payment Gateway (PT Nusa Satu Inti Artha), licensed and supervised by Bank Indonesia. Official payment channels include QRIS, Bank Virtual Accounts (Mandiri, BCA, BRI, BNI, Permata, CIMB), E-Wallets, and Credit/Debit Cards. All transactions are settled in Indonesian Rupiah (IDR)."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "4. Hak Kekayaan Intelektual" : "4. Intellectual Property Rights"}
              </h2>
              <p>
                {isId
                  ? "Seluruh hak cipta, merek dagang, konten, dan kode sumber dasar yang ditampilkan di situs ini merupakan hak milik eksklusif PT AFAMS GLOBAL SOLUSINDO. Kode perangkat lunak kustom yang dipesan oleh klien akan dialihkan sesuai kesepakatan kontrak kerja sama rekayasa software terpisah."
                  : "All copyrights, trademarks, assets, and foundational source code displayed on this site are the exclusive property of PT AFAMS GLOBAL SOLUSINDO. Custom software source code commissioned by clients is assigned per dedicated software engineering master service agreements."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "5. Kontak & Layanan Pelanggan" : "5. Customer Contact & Support"}
              </h2>
              <p>
                {isId
                  ? "Pertanyaan terkait ketentuan layanan ini dapat dialamatkan kepada: PT AFAMS GLOBAL SOLUSINDO (NIB: 0273010201718) melalui email resmi: afams.biz@gmail.com."
                  : "Questions concerning these Terms may be directed to: PT AFAMS GLOBAL SOLUSINDO (NIB: 0273010201718) via official email: afams.biz@gmail.com."}
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
