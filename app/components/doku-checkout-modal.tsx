"use client";

import { useState, useEffect } from "react";
import {
  Check,
  Copy,
  Clock,
  ShieldCheck,
  QrCode,
  Building2,
  Wallet,
  CreditCard,
  X,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export type PaymentMethodType = "qris" | "va" | "ewallet" | "card";

export interface PaymentSuccessData {
  invoiceNumber: string;
  channel: string;
  channelDetail: string;
  amount: number;
  paidAt: string;
  clientName: string;
  clientEmail: string;
  projectName: string;
}

interface DokuCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: PaymentSuccessData) => void;
  clientName?: string;
  clientEmail?: string;
  projectName?: string;
  orderNumber?: string;
}

const VA_BANKS = [
  {
    id: "mandiri",
    name: "Bank Mandiri",
    code: "88908",
    vaNumber: "88908 0812 8941 2026",
    color: "#003d79",
    atm: [
      "Masukkan kartu ATM Mandiri dan PIN Anda.",
      "Pilih menu 'Bayar/Beli' > 'Multi Payment'.",
      "Masukkan kode perusahaan PT AFAMS (88908).",
      "Masukkan Nomor Virtual Account 88908 0812 8941 2026.",
      "Konfirmasi nama tagihan 'PT AFAMS GLOBAL SOLUSINDO' dan bayar Rp 99.000.",
    ],
    mobile: [
      "Buka aplikasi Livin' by Mandiri dan login.",
      "Pilih menu 'Bayar' > cari penyedia jasa 'PT AFAMS GLOBAL SOLUSINDO'.",
      "Masukkan Nomor VA 88908 0812 8941 2026.",
      "Periksa rincian pembayaran Rp 99.000 lalu masukkan PIN transaksi.",
    ],
  },
  {
    id: "bca",
    name: "Bank Central Asia (BCA)",
    code: "3901",
    vaNumber: "3901 0812 8941 2026",
    color: "#005baa",
    atm: [
      "Masukkan kartu ATM BCA dan 6 digit PIN.",
      "Pilih menu 'Transaksi Lainnya' > 'Transfer' > 'Ke Rek BCA Virtual Account'.",
      "Masukkan nomor BCA Virtual Account: 3901 0812 8941 2026.",
      "Pastikan nama merchant 'PT AFAMS GLOBAL SOLUSINDO' muncul lalu tekan Benar.",
    ],
    mobile: [
      "Buka aplikasi myBCA atau BCA mobile (m-BCA).",
      "Pilih 'm-Transfer' > 'BCA Virtual Account'.",
      "Ketik nomor 3901 0812 8941 2026.",
      "Konfirmasi nominal Rp 99.000 dan otorisasi dengan PIN m-BCA.",
    ],
  },
  {
    id: "bri",
    name: "Bank BRI (BRIVA)",
    code: "10234",
    vaNumber: "10234 0812 8941 2026",
    color: "#00529b",
    atm: [
      "Pilih menu 'Transaksi Lain' > 'Pembayaran' > 'Lainnya' > 'BRIVA'.",
      "Masukkan nomor BRIVA 10234 0812 8941 2026.",
      "Tekan 'Ya' untuk mengonfirmasi transaksi Rp 99.000 ke PT AFAMS GLOBAL SOLUSINDO.",
    ],
    mobile: [
      "Buka aplikasi BRImo dan pilih menu 'BRIVA'.",
      "Pilih 'Pembayaran Baru' dan masukkan nomor 10234 0812 8941 2026.",
      "Periksa detail merchant dan konfirmasi dengan PIN BRImo Anda.",
    ],
  },
  {
    id: "bni",
    name: "Bank BNI",
    code: "988",
    vaNumber: "988 0812 8941 2026",
    color: "#f15a24",
    atm: [
      "Pilih menu 'Menu Lain' > 'Transfer' > 'Rekening Tabungan' > 'Ke Rekening BNI Virtual Account'.",
      "Masukkan nomor VA 988 0812 8941 2026.",
      "Periksa rincian pembayaran PT AFAMS lalu selesaikan pembayaran.",
    ],
    mobile: [
      "Buka BNI Mobile Banking dan pilih 'Transfer' > 'Virtual Account Billing'.",
      "Pilih 'Input Baru' lalu masukkan 988 0812 8941 2026.",
      "Masukkan password transaksi BNI untuk menyelesaikan.",
    ],
  },
  {
    id: "permata",
    name: "Bank Permata",
    code: "8528",
    vaNumber: "8528 0812 8941 2026",
    color: "#00843d",
    atm: [
      "Pilih menu 'Transaksi Lainnya' > 'Pembayaran' > 'Virtual Account'.",
      "Masukkan nomor Permata VA 8528 0812 8941 2026.",
      "Konfirmasi nama penerima PT AFAMS GLOBAL SOLUSINDO dan bayar.",
    ],
    mobile: [
      "Buka PermataME dan pilih menu 'Bayar Tagihan' > 'Virtual Account'.",
      "Ketik nomor 8528 0812 8941 2026 dan selesaikan dengan PIN.",
    ],
  },
];

const EWALLETS = [
  { id: "gopay", name: "GoPay", color: "#00AED6" },
  { id: "ovo", name: "OVO", color: "#4C3494" },
  { id: "dana", name: "DANA", color: "#118EEA" },
  { id: "shopeepay", name: "ShopeePay", color: "#EE4D2D" },
];

export default function DokuCheckoutModal({
  isOpen,
  onClose,
  onSuccess,
  clientName = "Klien Preface Labs",
  clientEmail = "client@example.com",
  projectName = "Custom Software Project",
  orderNumber,
}: DokuCheckoutModalProps) {
  const [activeTab, setActiveTab] = useState<PaymentMethodType>("qris");
  const [selectedVa, setSelectedVa] = useState(VA_BANKS[0].id);
  const [vaInstructionTab, setVaInstructionTab] = useState<"mobile" | "atm">("mobile");
  const [selectedEwallet, setSelectedEwallet] = useState("gopay");
  const [ewalletPhone, setEwalletPhone] = useState("081234567890");
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingMessage, setProcessingMessage] = useState("");
  const [invoiceId] = useState(
    () => orderNumber || `INV-PL-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.floor(1000 + Math.random() * 9000)}`
  );

  // 24 hour countdown timer simulation
  const [timeLeft, setTimeLeft] = useState(23 * 3600 + 59 * 60 + 48);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const formatTimer = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleCopyVa = (text: string) => {
    navigator.clipboard.writeText(text.replace(/\s+/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentVa = VA_BANKS.find((b) => b.id === selectedVa) || VA_BANKS[0];

  const simulatePaymentSuccess = (channel: string, detail: string) => {
    setIsProcessing(true);
    setProcessingMessage(`Menghubungkan ke DOKU Payment Server (${channel.toUpperCase()})...`);

    setTimeout(() => {
      setProcessingMessage("Memvalidasi notifikasi pembayaran dari Bank Indonesia...");
    }, 800);

    setTimeout(() => {
      setIsProcessing(false);
      onSuccess({
        invoiceNumber: invoiceId,
        channel,
        channelDetail: detail,
        amount: 99000,
        paidAt: new Date().toLocaleString("id-ID", {
          dateStyle: "full",
          timeStyle: "medium",
        }),
        clientName,
        clientEmail,
        projectName,
      });
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="doku-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden my-auto max-h-[95vh] flex flex-col">
        
        {/* DOKU Official Header Banner */}
        <div className="bg-[#E11D48] text-white px-5 py-3.5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-white px-2 py-0.5 rounded font-black tracking-tighter text-[#E11D48] text-sm">
              DOKU
            </div>
            <div className="border-l border-rose-300 pl-3">
              <span className="text-[11px] font-medium tracking-wide uppercase text-rose-100 block">
                Payment Gateway Resmi
              </span>
              <span className="text-xs font-bold block text-white leading-tight">
                PT AFAMS GLOBAL SOLUSINDO
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup checkout"
            className="text-rose-100 hover:text-white p-1 rounded-lg hover:bg-rose-700/50 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Invoice Summary Bar */}
        <div className="bg-neutral-50 dark:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-neutral-500 dark:text-neutral-400 block">Nomor Invoice</span>
            <span className="font-mono font-semibold text-neutral-900 dark:text-white">
              {invoiceId}
            </span>
          </div>
          <div>
            <span className="text-neutral-500 dark:text-neutral-400 block">Sisa Waktu Bayar</span>
            <span className="inline-flex items-center gap-1 font-mono font-bold text-amber-600 dark:text-amber-400">
              <Clock className="h-3.5 w-3.5" />
              {formatTimer(timeLeft)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-neutral-500 dark:text-neutral-400 block">Total Tagihan</span>
            <span className="text-base font-extrabold text-[#E11D48] dark:text-rose-400">
              Rp 99.000
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* Processing Overlay if Simulating */}
          {isProcessing ? (
            <div className="py-16 text-center space-y-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-[#E11D48] dark:bg-rose-950/40">
                <Loader2 className="h-7 w-7 animate-spin" />
              </div>
              <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                Memproses Simulasi DOKU
              </h4>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                {processingMessage}
              </p>
            </div>
          ) : (
            <>
              {/* Payment Method Selector Tabs */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-2.5">
                  Pilih Saluran Pembayaran DOKU
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("qris")}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-medium transition-all ${
                      activeTab === "qris"
                        ? "border-[#E11D48] bg-rose-50/60 text-[#E11D48] font-bold shadow-sm dark:bg-rose-950/30 dark:border-rose-500 dark:text-rose-300"
                        : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 text-neutral-700 dark:text-neutral-300"
                    }`}
                  >
                    <QrCode className="h-5 w-5" />
                    <span>QRIS Instan</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded font-semibold">
                      Semua Bank
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("va")}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-medium transition-all ${
                      activeTab === "va"
                        ? "border-[#E11D48] bg-rose-50/60 text-[#E11D48] font-bold shadow-sm dark:bg-rose-950/30 dark:border-rose-500 dark:text-rose-300"
                        : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 text-neutral-700 dark:text-neutral-300"
                    }`}
                  >
                    <Building2 className="h-5 w-5" />
                    <span>Virtual Account</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.2 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded font-semibold">
                      Mandiri, BCA, BRI
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("ewallet")}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-medium transition-all ${
                      activeTab === "ewallet"
                        ? "border-[#E11D48] bg-rose-50/60 text-[#E11D48] font-bold shadow-sm dark:bg-rose-950/30 dark:border-rose-500 dark:text-rose-300"
                        : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 text-neutral-700 dark:text-neutral-300"
                    }`}
                  >
                    <Wallet className="h-5 w-5" />
                    <span>E-Wallet</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.2 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded font-semibold">
                      GoPay, OVO, DANA
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("card")}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-medium transition-all ${
                      activeTab === "card"
                        ? "border-[#E11D48] bg-rose-50/60 text-[#E11D48] font-bold shadow-sm dark:bg-rose-950/30 dark:border-rose-500 dark:text-rose-300"
                        : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 text-neutral-700 dark:text-neutral-300"
                    }`}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Kartu Kredit</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.2 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded font-semibold">
                      Visa, Mastercard
                    </span>
                  </button>
                </div>
              </div>

              {/* TAB 1: QRIS */}
              {activeTab === "qris" && (
                <div className="space-y-4 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 bg-neutral-50/50 dark:bg-neutral-950/40">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-black text-white text-[11px] font-black tracking-widest rounded">
                        QRIS
                      </span>
                      <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                        Standar Pembayaran Nasional Bank Indonesia
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500">
                      NMID: ID1020261013894
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 justify-center py-2">
                    {/* Visual QRIS Mock */}
                    <div className="relative p-3 bg-white rounded-2xl shadow-md border-2 border-neutral-900 dark:border-white">
                      <div className="text-center font-black text-neutral-900 text-[10px] tracking-wider mb-1 border-b pb-0.5">
                        QRIS STANDAR PEMBAYARAN
                      </div>
                      
                      {/* Stylized QR Code SVG */}
                      <svg
                        className="w-48 h-48 sm:w-52 sm:h-52"
                        viewBox="0 0 200 200"
                        fill="currentColor"
                      >
                        {/* Corner Top-Left */}
                        <rect x="10" y="10" width="50" height="50" fill="#000" />
                        <rect x="18" y="18" width="34" height="34" fill="#fff" />
                        <rect x="26" y="26" width="18" height="18" fill="#000" />

                        {/* Corner Top-Right */}
                        <rect x="140" y="10" width="50" height="50" fill="#000" />
                        <rect x="148" y="18" width="34" height="34" fill="#fff" />
                        <rect x="156" y="26" width="18" height="18" fill="#000" />

                        {/* Corner Bottom-Left */}
                        <rect x="10" y="140" width="50" height="50" fill="#000" />
                        <rect x="18" y="148" width="34" height="34" fill="#fff" />
                        <rect x="26" y="156" width="18" height="18" fill="#000" />

                        {/* Data Pattern Simulation */}
                        <rect x="70" y="20" width="10" height="10" fill="#000" />
                        <rect x="90" y="20" width="20" height="10" fill="#000" />
                        <rect x="120" y="20" width="10" height="10" fill="#000" />
                        
                        <rect x="70" y="40" width="30" height="10" fill="#000" />
                        <rect x="110" y="40" width="10" height="20" fill="#000" />

                        <rect x="20" y="70" width="20" height="10" fill="#000" />
                        <rect x="50" y="70" width="10" height="30" fill="#000" />
                        <rect x="70" y="70" width="20" height="20" fill="#000" />
                        <rect x="100" y="70" width="30" height="10" fill="#000" />
                        <rect x="140" y="70" width="20" height="20" fill="#000" />
                        <rect x="170" y="70" width="15" height="15" fill="#000" />

                        {/* Center Logo Placeholder */}
                        <rect x="75" y="75" width="50" height="50" fill="#E11D48" rx="8" />
                        <text
                          x="100"
                          y="105"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="13"
                          fontWeight="bold"
                          fontFamily="sans-serif"
                        >
                          DOKU
                        </text>

                        <rect x="20" y="110" width="20" height="20" fill="#000" />
                        <rect x="50" y="110" width="10" height="10" fill="#000" />
                        <rect x="70" y="130" width="20" height="10" fill="#000" />
                        <rect x="100" y="130" width="10" height="30" fill="#000" />
                        <rect x="120" y="130" width="30" height="10" fill="#000" />
                        <rect x="160" y="130" width="25" height="15" fill="#000" />

                        <rect x="70" y="160" width="15" height="25" fill="#000" />
                        <rect x="95" y="170" width="30" height="15" fill="#000" />
                        <rect x="135" y="160" width="25" height="25" fill="#000" />
                        <rect x="170" y="165" width="15" height="20" fill="#000" />
                      </svg>

                      <div className="mt-1 text-center font-bold text-neutral-800 text-[9px]">
                        PT AFAMS GLOBAL SOLUSINDO
                      </div>
                    </div>

                    {/* QRIS Instructions */}
                    <div className="space-y-3 text-xs text-neutral-600 dark:text-neutral-400">
                      <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                        <span className="font-semibold text-neutral-900 dark:text-white block mb-1">
                          Cara Membayar QRIS:
                        </span>
                        <ol className="list-decimal list-inside space-y-1 text-[11px] leading-relaxed">
                          <li>Buka m-Banking (BCA, Mandiri, BRI, BNI) atau E-Wallet (GoPay, OVO, Dana, ShopeePay).</li>
                          <li>Pilih menu <b>Scan / Bayar QRIS</b> di aplikasi Anda.</li>
                          <li>Arahkan kamera ke QR Code di samping.</li>
                          <li>Periksa nama merchant: <b>PT AFAMS GLOBAL SOLUSINDO</b>.</li>
                          <li>Masukkan PIN dan konfirmasi pembayaran Rp 99.000.</li>
                        </ol>
                      </div>

                      <div className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        <span>Verifikasi otomatis & seketika 24/7 tanpa perlu upload bukti.</span>
                      </div>
                    </div>
                  </div>

                  {/* Simulator Trigger */}
                  <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                    <button
                      type="button"
                      onClick={() => simulatePaymentSuccess("QRIS", "NMID ID1020261013894 - Bank Indonesia")}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E11D48] text-white font-semibold text-xs hover:bg-rose-700 transition-colors shadow-sm"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Simulasikan Scan & Pembayaran QRIS Berhasil (Rp 99.000)
                    </button>
                    <p className="text-[10px] text-center text-neutral-400 mt-1.5">
                      Tombol simulasi interaktif untuk pengujian review verifikasi merchant DOKU & alur frontend.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: VIRTUAL ACCOUNT */}
              {activeTab === "va" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 block mb-2">
                      Pilih Bank Virtual Account:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {VA_BANKS.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setSelectedVa(b.id)}
                          className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                            selectedVa === b.id
                              ? "border-[#E11D48] bg-rose-50/50 dark:bg-rose-950/30 text-[#E11D48] font-bold dark:text-rose-300"
                              : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300"
                          }`}
                        >
                          <div className="font-semibold">{b.name}</div>
                          <div className="text-[10px] text-neutral-500 font-normal">
                            Verifikasi Instan
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active VA Details */}
                  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50/70 dark:bg-neutral-950/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500">Nomor Virtual Account</span>
                      <span className="text-xs font-semibold text-neutral-900 dark:text-white">
                        {currentVa.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                      <span className="font-mono text-base sm:text-lg font-bold tracking-wider text-neutral-900 dark:text-white">
                        {currentVa.vaNumber}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyVa(currentVa.vaNumber)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span>Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Salin VA</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      Atas Nama: <b className="text-neutral-900 dark:text-white">PT AFAMS GLOBAL SOLUSINDO</b>
                    </div>

                    {/* Instructions Accordion */}
                    <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                      <div className="flex gap-2 mb-2">
                        <button
                          type="button"
                          onClick={() => setVaInstructionTab("mobile")}
                          className={`px-2.5 py-1 text-[11px] rounded font-medium ${
                            vaInstructionTab === "mobile"
                              ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                              : "text-neutral-500 hover:text-neutral-900"
                          }`}
                        >
                          Mobile Banking
                        </button>
                        <button
                          type="button"
                          onClick={() => setVaInstructionTab("atm")}
                          className={`px-2.5 py-1 text-[11px] rounded font-medium ${
                            vaInstructionTab === "atm"
                              ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                              : "text-neutral-500 hover:text-neutral-900"
                          }`}
                        >
                          ATM
                        </button>
                      </div>

                      <ol className="list-decimal list-inside space-y-1 text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {(vaInstructionTab === "mobile" ? currentVa.mobile : currentVa.atm).map(
                          (step, idx) => (
                            <li key={idx}>{step}</li>
                          )
                        )}
                      </ol>
                    </div>
                  </div>

                  {/* Simulator Trigger */}
                  <button
                    type="button"
                    onClick={() =>
                      simulatePaymentSuccess(
                        `Virtual Account ${currentVa.name}`,
                        `Nomor VA: ${currentVa.vaNumber}`
                      )
                    }
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E11D48] text-white font-semibold text-xs hover:bg-rose-700 transition-colors shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Simulasikan Transfer Virtual Account Berhasil (Rp 99.000)
                  </button>
                </div>
              )}

              {/* TAB 3: E-WALLET */}
              {activeTab === "ewallet" && (
                <div className="space-y-4 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50/50 dark:bg-neutral-950/40">
                  <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 block">
                    Pilih E-Wallet:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {EWALLETS.map((ew) => (
                      <button
                        key={ew.id}
                        type="button"
                        onClick={() => setSelectedEwallet(ew.id)}
                        className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                          selectedEwallet === ew.id
                            ? "border-[#E11D48] bg-rose-50/60 text-[#E11D48] dark:bg-rose-950/30 dark:border-rose-500 dark:text-rose-300"
                            : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        {ew.name}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                      Nomor Handphone Terdaftar di {selectedEwallet.toUpperCase()}
                    </label>
                    <input
                      type="tel"
                      value={ewalletPhone}
                      onChange={(e) => setEwalletPhone(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-xs font-mono"
                    />
                    <p className="text-[11px] text-neutral-500">
                      Notifikasi konfirmasi bayar Rp 99.000 akan dikirimkan ke aplikasi Anda.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      simulatePaymentSuccess(
                        `E-Wallet ${selectedEwallet.toUpperCase()}`,
                        `No. HP: ${ewalletPhone}`
                      )
                    }
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E11D48] text-white font-semibold text-xs hover:bg-rose-700 transition-colors shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Simulasikan Bayar via {selectedEwallet.toUpperCase()} Berhasil
                  </button>
                </div>
              )}

              {/* TAB 4: CREDIT CARD */}
              {activeTab === "card" && (
                <div className="space-y-4 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50/50 dark:bg-neutral-950/40">
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 block mb-1">
                        Nomor Kartu Kredit / Debit (Visa / Mastercard / JCB)
                      </label>
                      <input
                        type="text"
                        defaultValue="4111 2222 3333 4444"
                        placeholder="4xxx xxxx xxxx xxxx"
                        className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-xs font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 block mb-1">
                          Masa Berlaku (MM/YY)
                        </label>
                        <input
                          type="text"
                          defaultValue="12/28"
                          placeholder="MM/YY"
                          className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 block mb-1">
                          CVV (3 Digit)
                        </label>
                        <input
                          type="password"
                          defaultValue="123"
                          maxLength={4}
                          placeholder="123"
                          className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      simulatePaymentSuccess(
                        "Kartu Kredit / Debit",
                        "Visa/Mastercard 3D-Secure Verified"
                      )
                    }
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E11D48] text-white font-semibold text-xs hover:bg-rose-700 transition-colors shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Simulasikan Otorisasi Kartu Berhasil (Rp 99.000)
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info bar */}
        <div className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 px-5 py-3 flex items-center justify-between text-[11px] text-neutral-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>DOKU 256-bit SSL PCI-DSS Certified</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="hover:underline text-neutral-600 dark:text-neutral-400"
          >
            Batal / Kembali ke Merchant
          </button>
        </div>

      </div>
    </div>
  );
}
