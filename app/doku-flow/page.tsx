"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Download,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../context/language-context";
import LanguageSwitch from "../components/language-switch";
import ThemeToggle from "../components/theme-toggle";
import { BrandLogo } from "../components/brand-logo";

export default function DokuFlowPage() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  const flowSteps = [
    {
      num: "01",
      title: isId ? "Halaman Utama & Penawaran Layanan" : "Homepage & Service Offerings",
      desc: isId
        ? "Calon klien membuka prefacelabs.com, melihat layanan pembuatan software kustom (B2C & B2B) dan memilih paket konsultasi awal seharga Rp 99.000."
        : "Visitors browse prefacelabs.com, review custom software services (B2C/B2B), and initiate early technical consultation for IDR 99,000.",
      url: "https://prefacelabs.com",
    },
    {
      num: "02",
      title: isId ? "Form Singkat Kebutuhan Software (Quiz)" : "Software Discovery Short Form",
      desc: isId
        ? "Klien memilih tipe software (B2C, B2B SaaS, AI Agent, E-Commerce), platform target, integrasi fitur, dan target waktu peluncuran MVP."
        : "Clients select software category, target platforms, desired integrations, and MVP launch timeline.",
      url: "https://prefacelabs.com/order (Langkah 1)",
    },
    {
      num: "03",
      title: isId ? "Pengisian Kontak & Informasi Booking" : "Contact & Booking Submission",
      desc: isId
        ? "Klien memasukkan nama lengkap, bisnis/brand, WhatsApp aktif, email konfirmasi, dan ringkasan kebutuhan proyek."
        : "Clients provide their full name, company name, WhatsApp number, email, and project scope overview.",
      url: "https://prefacelabs.com/order (Langkah 2)",
    },
    {
      num: "04",
      title: isId ? "Review Pesanan & Harga Promo Rp 99.000" : "Order Summary & Rp 99.000 Pricing",
      desc: isId
        ? "Rincian manfaat konsultasi 1-on-1 dan blueprint sistem teknis ditampilkan transparan bersama rincian merchant PT AFAMS GLOBAL SOLUSINDO."
        : "Review transparent session deliverables, blueprint inclusions, and PT AFAMS GLOBAL SOLUSINDO merchant identification.",
      url: "https://prefacelabs.com/order (Langkah 3)",
    },
    {
      num: "05",
      title: isId ? "DOKU Hosted Checkout: Pembayaran QRIS" : "DOKU Hosted Checkout: QRIS",
      desc: isId
        ? "Halaman resmi DOKU menampilkan QRIS Bank Indonesia instan dengan logo PT AFAMS GLOBAL SOLUSINDO. Dapat dipindai oleh semua aplikasi bank & e-wallet."
        : "Official DOKU interface displays national QRIS with PT AFAMS GLOBAL SOLUSINDO merchant tag, scannable by all Indonesian bank & e-wallet apps.",
      url: "DOKU Checkout Gateway",
    },
    {
      num: "06",
      title: isId ? "DOKU Hosted Checkout: Virtual Account" : "DOKU Hosted Checkout: Virtual Account",
      desc: isId
        ? "Tersedia nomor VA otomatis untuk Bank Mandiri, BCA, BRI, BNI, dan Permata beserta instruksi langkah transfer ATM/m-Banking."
        : "Dynamic Virtual Account numbers generated for Mandiri, BCA, BRI, BNI, and Permata with step-by-step m-Banking instructions.",
      url: "DOKU Virtual Account Gateway",
    },
    {
      num: "07",
      title: isId ? "Konfirmasi Pesanan & Faktur Resmi Berhasil" : "Order Confirmation & Official Receipt",
      desc: isId
        ? "Setelah transaksi disetujui, pembeli menerima tanda terima berstatus PAID/LUNAS, tautan undangan Google Meet, dan tombol langsung ke WhatsApp."
        : "Upon successful payment settlement, buyer receives official PAID confirmation receipt, Google Meet invite, and direct WhatsApp onboarding.",
      url: "https://prefacelabs.com/order (Status: Sukses)",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-neutral-100 flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-black/80">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
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

      <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-12 space-y-12">
        {/* Hero banner */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 text-xs font-bold">
              <ShieldCheck className="h-4 w-4" />
              <span>Dokumen Verifikasi Merchant DOKU • PT AFAMS GLOBAL SOLUSINDO</span>
            </span>
            <span className="text-xs font-mono text-neutral-500">
              ID Akun DOKU: BSN-0246-1791083540220
            </span>
          </div>

          <div className="max-w-2xl space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              {isId
                ? "Alur Transaksi & Pembayaran DOKU Checkout"
                : "Official DOKU Payment & Transaction Flow"}
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {isId
                ? "Dokumentasi visual komprehensif alur transaksi digital dari pembukaan website, pemilihan spesifikasi software kustom, pengisian formulir, hingga proses pembayaran resmi DOKU untuk aktivasi seluruh metode pembayaran (QRIS, VA Bank Mandiri/BCA/BRI/BNI, dan E-Wallet)."
                : "Comprehensive visual documentation of the end-to-end digital transaction journey from landing page, project scoping quiz, to official DOKU Payment Gateway checkout."}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs">
            <div>
              <span className="text-neutral-500 block">Badan Usaha Legal</span>
              <span className="font-bold text-neutral-900 dark:text-white">
                PT AFAMS GLOBAL SOLUSINDO
              </span>
              <span className="text-[10px] text-neutral-400 block font-mono">
                NIB: 0273010201718
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block">NPWP Perusahaan</span>
              <span className="font-mono font-bold text-neutral-900 dark:text-white">
                96.749.794.2-009.000
              </span>
              <span className="text-[10px] text-neutral-400 block">
                Status: PMDN Aktif
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block">Biaya Konsultasi</span>
              <span className="font-bold text-[#E11D48] dark:text-rose-400">
                Rp 99.000 (Sekali Bayar)
              </span>
              <span className="text-[10px] text-neutral-400 block">
                Faktur Legal PT Afams
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block">KBLI Utama</span>
              <span className="font-bold text-neutral-900 dark:text-white">
                46512 (Piranti Lunak)
              </span>
              <span className="text-[10px] text-neutral-400 block">
                46511 (Komputer)
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/order"
              className="inline-flex items-center gap-2 rounded-full bg-[#E11D48] px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-rose-700 shadow-md"
            >
              <Sparkles className="h-4 w-4" />
              <span>{isId ? "Buka & Uji Alur Pembayaran Langsung" : "Test Live Order & DOKU Flow"}</span>
            </Link>

            <a
              href="/docs/PrefaceLabs-Alur-Pembayaran-DOKU.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-3 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>{isId ? "Unduh PDF Alur Transaksi DOKU" : "Download DOKU Flow PDF"}</span>
            </a>

            <a
              href="/docs/bukti-bisnis-preface-labs.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-3 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>{isId ? "Unduh Dokumen Bukti Usaha PDF" : "Download Business Proof PDF"}</span>
            </a>
          </div>
        </div>

        {/* 7-Step Visual Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {isId ? "Tahapan Lengkap Transaksi Pelanggan" : "Step-by-Step Customer Journey"}
            </h2>
            <span className="text-xs text-neutral-500">7 Tahap Utama Sesuai Standar ISMAYA+ / DOKU</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {flowSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 space-y-3 shadow-sm hover:border-neutral-300 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-extrabold text-[#E11D48] bg-rose-50 dark:bg-rose-950 px-2.5 py-1 rounded-lg">
                    LANGKAH {step.num}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {step.url}
                  </span>
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Statement & Compliance Box */}
        <div className="bg-neutral-900 text-white rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>Pernyataan Resmi Badan Usaha</span>
          </div>
          <h3 className="text-lg font-bold">PT AFAMS GLOBAL SOLUSINDO</h3>
          <p className="text-xs text-neutral-300 leading-relaxed max-w-3xl">
            Merek dagang &ldquo;Preface Labs&rdquo; (prefacelabs.com) adalah produk studio rekayasa perangkat lunak resmi
            di bawah naungan badan hukum <b>PT AFAMS GLOBAL SOLUSINDO</b>. Seluruh operasional, penerimaan dana konsultasi
            software kustom, dan hak cipta dikelola penuh oleh perusahaan guna pengajuan dan aktivasi kanal pembayaran
            resmi DOKU Payment Gateway (termasuk QRIS Nasional, Virtual Account Bank Mandiri, BCA, BRI, BNI, dan E-Wallet).
          </p>
          <div className="pt-2 text-[11px] text-neutral-400">
            Badan Usaha: PT AFAMS GLOBAL SOLUSINDO &bull; NIB: 0273010201718 &bull; Email: afams.biz@gmail.com
          </div>
        </div>
      </main>
    </div>
  );
}
