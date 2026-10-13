"use client";

import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { useLanguage } from "../context/language-context";
import LanguageSwitch from "../components/language-switch";
import ThemeToggle from "../components/theme-toggle";
import { BrandLogo } from "../components/brand-logo";

export default function RefundPage() {
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
              <RefreshCw className="h-4 w-4" />
              <span>Kebijakan Transaksi Konsumen • PT AFAMS GLOBAL SOLUSINDO</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              {isId
                ? "Kebijakan Pengembalian Dana & Pembatalan"
                : "Refund & Cancellation Policy"}
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Terakhir diperbarui: 13 Oktober 2026 • Standar Perlindungan Konsumen DOKU Payment Gateway
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId
                  ? "1. Jaminan Kepuasan & Ketentuan Refund Konsultasi (Rp 99.000)"
                  : "1. 100% Satisfaction Guarantee & Consultation Refunds"}
              </h2>
              <p>
                {isId
                  ? "Kami memberikan garansi kepuasan 100% untuk paket Konsultasi Teknis & Blueprint Software MVP (Rp 99.000). Jika setelah sesi Google Meet Anda merasa rekomendasi arsitektur atau masukan teknis kami tidak memberikan nilai manfaat yang jelas, Anda berhak mengajukan pengembalian dana penuh dalam waktu 7 (tujuh) hari kalender sejak sesi berlangsung."
                  : "We provide a 100% satisfaction guarantee for our Technical Consultation & MVP Blueprint package (IDR 99,000). If after your Google Meet session you feel our engineering advisory did not provide clear architectural clarity, you are entitled to a full refund within 7 (seven) calendar days."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "2. Pembatalan & Penjadwalan Ulang Sesi" : "2. Cancellation & Rescheduling"}
              </h2>
              <p>
                {isId
                  ? "Klien dapat membatalkan atau menjadwalkan ulang sesi konsultasi tanpa biaya tambahan hingga 2 (dua) jam sebelum jadwal yang disepakati dengan menghubungi kami melalui WhatsApp atau email."
                  : "Clients may reschedule or cancel consultation appointments at no additional charge up to 2 (two) hours prior to the booked time by contacting our team via WhatsApp or email."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "3. Mekanisme & Durasi Pengembalian Dana" : "3. Refund Process & Settlement Time"}
              </h2>
              <p>
                {isId
                  ? "Pengembalian dana diproses kembali ke rekening bank atau dompet digital asal pembayaran melalui sistem DOKU Payment Gateway / transfer bank resmi PT AFAMS GLOBAL SOLUSINDO dalam waktu 1-3 hari kerja tanpa potongan biaya admin dari pihak kami."
                  : "Refunds are disbursed back to the source bank account or digital wallet via DOKU Payment Gateway or corporate bank transfer within 1 to 3 business days with zero deduction of merchant fees."}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                {isId ? "4. Cara Mengajukan Permohonan Refund" : "4. How to Submit a Refund Claim"}
              </h2>
              <p>
                {isId
                  ? "Cukup kirimkan konfirmasi dengan menyertakan Nomor Invoice DOKU dan nomor rekening pengembalian ke email resmi: afams.biz@gmail.com."
                  : "Simply send a confirmation including your DOKU Invoice Number and destination bank details to our official email: afams.biz@gmail.com."}
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
