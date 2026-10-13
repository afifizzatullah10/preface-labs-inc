"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Download,
  Laptop,
  Bot,
  ShoppingBag,
  Phone,
  Mail,
  User,
  Building,
} from "lucide-react";
import { useLanguage } from "../context/language-context";
import LanguageSwitch from "../components/language-switch";
import ThemeToggle from "../components/theme-toggle";
import { BrandLogo } from "../components/brand-logo";
import DokuCheckoutModal, {
  type PaymentSuccessData,
} from "../components/doku-checkout-modal";

type Step = 1 | 2 | 3 | "success";

interface QuizFormState {
  projectType: string;
  targetPlatform: string;
  timeline: string;
  features: string[];
  fullName: string;
  companyName: string;
  whatsapp: string;
  email: string;
  notes: string;
}

export default function OrderPage() {
  const { lang } = useLanguage();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [isDokuOpen, setIsDokuOpen] = useState(false);
  const [successData, setSuccessData] = useState<PaymentSuccessData | null>(null);

  const [form, setForm] = useState<QuizFormState>({
    projectType: "b2c",
    targetPlatform: "web_mobile",
    timeline: "2_weeks",
    features: ["doku_payment", "auth", "ai"],
    fullName: "",
    companyName: "",
    whatsapp: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const isId = lang === "id";

  const projectTypes = [
    {
      id: "b2c",
      title: isId ? "Aplikasi Web / Mobile B2C" : "B2C Web / Mobile App",
      desc: isId
        ? "Produk digital untuk konsumen umum dengan onboarding cepat & UX konversi tinggi"
        : "Consumer-facing product with fast onboarding and high conversion UX",
      icon: Laptop,
    },
    {
      id: "b2b",
      title: isId ? "Platform B2B SaaS & Portal Bisnis" : "B2B SaaS & Business Portal",
      desc: isId
        ? "Dasbor multi-tenant aman, workflow otomasi, dan manajemen operasional"
        : "Secure multi-tenant platform, workflow engine, and ops dashboard",
      icon: Building2,
    },
    {
      id: "ai",
      title: isId ? "AI Agent & Otomasi Cerdas" : "AI Agent & Smart Automation",
      desc: isId
        ? "Integrasi LLM kustom, asisten pintar, dan pemrosesan data otomatis"
        : "Custom LLM integrations, intelligent assistants, and autonomous pipelines",
      icon: Bot,
    },
    {
      id: "ecom",
      title: isId ? "E-Commerce & Sistem Transaksi" : "E-Commerce & Commerce Flow",
      desc: isId
        ? "Etalase belanja kustom terintegrasi pembayaran QRIS & VA lokal"
        : "Custom storefronts with turnkey Indonesian payment gateway integration",
      icon: ShoppingBag,
    },
  ];

  const platforms = [
    {
      id: "web_mobile",
      label: isId ? "Web + Mobile (Responsif)" : "Web + Mobile (Responsive)",
    },
    { id: "web_only", label: isId ? "Web App Modern (Next.js)" : "Modern Web App (Next.js)" },
    { id: "mobile_app", label: isId ? "Mobile App (iOS & Android)" : "Mobile App (iOS & Android)" },
  ];

  const timelines = [
    { id: "2_weeks", label: isId ? "1 - 2 Minggu (MVP Kilat)" : "1 - 2 Weeks (Fast MVP)" },
    { id: "1_month", label: isId ? "1 Bulan (Fase Penuh)" : "1 Month (Full Sprint)" },
    { id: "flexible", label: isId ? "Fleksibel / Sesuai Rekomendasi" : "Flexible / Advisory" },
  ];

  const toggleFeature = (feat: string) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(feat)
        ? prev.features.filter((f) => f !== feat)
        : [...prev.features, feat],
    }));
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!form.fullName.trim()) {
      errs.fullName = isId ? "Nama lengkap wajib diisi" : "Full name is required";
    }
    if (!form.whatsapp.trim()) {
      errs.whatsapp = isId ? "Nomor WhatsApp wajib diisi" : "WhatsApp number is required";
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      errs.email = isId ? "Alamat email valid wajib diisi" : "Valid email address is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
      }
    }
  };

  const handlePaymentCompleted = (data: PaymentSuccessData) => {
    setSuccessData(data);
    setIsDokuOpen(false);
    setCurrentStep("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-neutral-100 flex flex-col">
      {/* Top Navigation */}
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

      {/* Main Container */}
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Progress Stepper (Hidden on Success) */}
        {currentStep !== "success" && (
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between max-w-md mx-auto text-xs font-semibold">
              <div
                className={`flex items-center gap-2 ${
                  currentStep >= 1 ? "text-neutral-900 dark:text-white" : "text-neutral-400"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                    currentStep >= 1
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "bg-neutral-200 dark:bg-neutral-800 text-neutral-500"
                  }`}
                >
                  1
                </span>
                <span>{isId ? "Kebutuhan" : "Project"}</span>
              </div>

              <div className="h-0.5 w-12 bg-neutral-200 dark:bg-neutral-800" />

              <div
                className={`flex items-center gap-2 ${
                  currentStep >= 2 ? "text-neutral-900 dark:text-white" : "text-neutral-400"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                    currentStep >= 2
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "bg-neutral-200 dark:bg-neutral-800 text-neutral-500"
                  }`}
                >
                  2
                </span>
                <span>{isId ? "Kontak" : "Contact"}</span>
              </div>

              <div className="h-0.5 w-12 bg-neutral-200 dark:bg-neutral-800" />

              <div
                className={`flex items-center gap-2 ${
                  currentStep >= 3 ? "text-neutral-900 dark:text-white" : "text-neutral-400"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                    currentStep >= 3
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "bg-neutral-200 dark:bg-neutral-800 text-neutral-500"
                  }`}
                >
                  3
                </span>
                <span>{isId ? "Review & DOKU" : "Review & DOKU"}</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 1: QUIZ & KEBUTUHAN SOFTWARE */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                {isId ? "Form Singkat Kebutuhan Software" : "Software Discovery Short Form"}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {isId
                  ? "Ceritakan Produk Digital yang Ingin Anda Buat"
                  : "Tell Us What You Want to Build"}
              </h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {isId
                  ? "Pilih preferensi awal Anda. Kami akan menyiapkan arsitektur terbaik sebelum sesi konsultasi."
                  : "Select your project parameters so our engineering team can prepare your technical roadmap."}
              </p>
            </div>

            {/* Project Type Grid */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                {isId ? "1. Tipe Software yang Ingin Dibuat" : "1. What Kind of Software?"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {projectTypes.map((pt) => {
                  const Icon = pt.icon;
                  const isSelected = form.projectType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => setForm({ ...form, projectType: pt.id })}
                      className={`flex items-start gap-4 p-4 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? "border-neutral-900 bg-white ring-2 ring-neutral-900 dark:border-white dark:bg-neutral-900 dark:ring-white shadow-md"
                          : "border-neutral-200 bg-white/70 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/60"
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-xl ${
                          isSelected
                            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                            : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-neutral-900 dark:text-white">
                          {pt.title}
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          {pt.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Platform Target */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                {isId ? "2. Target Platform Utama" : "2. Target Platform"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {platforms.map((p) => {
                  const isSelected = form.targetPlatform === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setForm({ ...form, targetPlatform: p.id })}
                      className={`p-3.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                        isSelected
                          ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900 shadow-sm"
                          : "border-neutral-200 bg-white text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 hover:border-neutral-300"
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline Target */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                {isId ? "3. Target Waktu Peluncuran MVP" : "3. Target Launch Timeline"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelines.map((tl) => {
                  const isSelected = form.timeline === tl.id;
                  return (
                    <button
                      key={tl.id}
                      type="button"
                      onClick={() => setForm({ ...form, timeline: tl.id })}
                      className={`p-3.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                        isSelected
                          ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900 shadow-sm"
                          : "border-neutral-200 bg-white text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 hover:border-neutral-300"
                      }`}
                    >
                      {tl.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desired Key Integrations */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                {isId ? "4. Fitur & Integrasi Spesifik" : "4. Key Integrations Needed"}
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "doku_payment", label: "DOKU Payment (QRIS, VA Mandiri/BCA)" },
                  { id: "auth", label: isId ? "Autentikasi Pengguna & Role" : "User Authentication & Roles" },
                  { id: "ai", label: isId ? "AI / LLM Integration (OpenAI/Claude)" : "AI / LLM Integration" },
                  { id: "whatsapp", label: isId ? "Notifikasi WhatsApp Gateway" : "WhatsApp API Notifications" },
                  { id: "database", label: "Realtime Database & Cloud Storage" },
                  { id: "admin", label: isId ? "Dasbor Admin & Analitik" : "Admin Dashboard & Metrics" },
                ].map((feat) => {
                  const active = form.features.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        active
                          ? "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 font-semibold"
                          : "border-neutral-200 bg-white text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
                      }`}
                    >
                      {active ? "✓ " : "+ "}
                      {feat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 shadow-md"
              >
                <span>{isId ? "Lanjut ke Data Kontak" : "Next: Contact Details"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: CLIENT & CONTACT INFO */}
        {currentStep === 2 && (
          <div className="space-y-8 animate-in fade-in duration-300 max-w-xl mx-auto">
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 text-xs font-semibold">
                <User className="h-3.5 w-3.5" />
                {isId ? "Informasi Klien & Booking" : "Client & Booking Information"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {isId ? "Kemanakah Kami Harus Menghubungi Anda?" : "Where Should We Reach You?"}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {isId
                  ? "Undangan sesi Google Meet dan invoice resmi PT Afams akan dikirimkan ke alamat ini."
                  : "Your Google Meet link and official PT Afams invoice will be delivered here."}
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 space-y-4 shadow-sm">
              {/* Full Name */}
              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1.5">
                  {isId ? "Nama Lengkap *" : "Full Name *"}
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 h-4 w-4 text-neutral-400" />
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder={isId ? "Contoh: Budi Santoso" : "e.g. Alex Morgan"}
                    className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-950/50 pl-10 pr-3.5 py-2.5 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Company / Brand Name */}
              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1.5">
                  {isId ? "Nama Brand / Bisnis / Startup (Opsional)" : "Company / Brand Name (Optional)"}
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-3 h-4 w-4 text-neutral-400" />
                  <input
                    type="text"
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder={isId ? "Contoh: Nusantara Tech" : "e.g. Acme Corp"}
                    className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-950/50 pl-10 pr-3.5 py-2.5 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1.5">
                  {isId ? "Nomor WhatsApp Aktif *" : "Active WhatsApp Number *"}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 h-4 w-4 text-neutral-400" />
                  <input
                    type="tel"
                    required
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    placeholder="08xxxxxxxxxx"
                    className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-950/50 pl-10 pr-3.5 py-2.5 text-sm font-mono text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
                  />
                </div>
                {errors.whatsapp && (
                  <p className="text-xs text-rose-600 mt-1">{errors.whatsapp}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1.5">
                  {isId ? "Alamat Email *" : "Email Address *"}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-neutral-400" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="client@example.com"
                    className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-950/50 pl-10 pr-3.5 py-2.5 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Project Brief Notes */}
              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1.5">
                  {isId ? "Catatan Ide Singkat (Opsional)" : "Brief Project Summary (Optional)"}
                </label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder={
                    isId
                      ? "Contoh: Kami butuh portal internal untuk mengelola pesanan klien dengan integrasi QRIS dan notifikasi WhatsApp otomatis..."
                      : "e.g. We need a fast internal portal for managing client orders with QRIS and WhatsApp notifications..."
                  }
                  className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-950/50 p-3 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>{isId ? "Kembali ke Form" : "Back to Scope"}</span>
              </button>

              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 shadow-md"
              >
                <span>{isId ? "Review Pesanan & Harga" : "Review Order & Price"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: REVIEW & ORDER SUMMARY (RP 99.000) */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-in fade-in duration-300 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 text-xs font-semibold">
                <ShieldCheck className="h-3.5 w-3.5" />
                {isId ? "Rincian Pesanan & Pembayaran Resmi" : "Order Summary & Official Payment"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {isId ? "Review Sesi Konsultasi Software" : "Review Software Consultation Session"}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {isId
                  ? "Dikelola resmi oleh PT AFAMS GLOBAL SOLUSINDO melalui DOKU Payment Gateway."
                  : "Officially processed by PT AFAMS GLOBAL SOLUSINDO via DOKU Payment Gateway."}
              </p>
            </div>

            {/* Package Details Card */}
            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 space-y-6 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
                    {isId ? "Paket Resmi Terpilih" : "Selected Package"}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {isId
                      ? "Konsultasi Teknis & Blueprint Software MVP"
                      : "Technical Consultation & MVP Software Blueprint"}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    {isId ? "Klien" : "Client"}: <b className="text-neutral-900 dark:text-white">{form.fullName || "Klien Terdaftar"}</b> (
                    {form.email})
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-400 line-through">Rp 299.000</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#E11D48] dark:text-rose-400">
                    Rp 99.000
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    {isId ? "Diskon Promo R&D" : "Special R&D Promo"}
                  </div>
                </div>
              </div>

              {/* What you get list */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block">
                  {isId ? "Fasilitas & Manfaat yang Didapatkan:" : "What is Included:"}
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                  {[
                    isId
                      ? "Sesi 1-on-1 via Google Meet (45-60 menit) bersama Principal Engineer"
                      : "1-on-1 session via Google Meet (45-60 min) with Principal Engineer",
                    isId
                      ? "Dokumen rekomendasi arsitektur sistem & pilihan tech stack"
                      : "System architecture recommendation & tech stack document",
                    isId
                      ? "Rencana roadmap rilis MVP cepat (1-2 minggu)"
                      : "MVP rapid release roadmap (1-2 weeks sprint)",
                    isId
                      ? "Estimasi biaya transparan dan timeline pengembangan"
                      : "Transparent engineering cost breakdown & milestones",
                    isId
                      ? "Faktur resmi PT AFAMS GLOBAL SOLUSINDO"
                      : "Official invoice from PT AFAMS GLOBAL SOLUSINDO",
                    isId
                      ? "Garansi uang kembali 100% jika sesi tidak memuaskan"
                      : "100% money-back satisfaction guarantee",
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment Methods Notice */}
              <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {isId ? "Kanal Pembayaran DOKU Resmi:" : "Accepted DOKU Payment Channels:"}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 px-2 py-0.5 rounded font-bold">
                    DOKU Verified
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  {isId
                    ? "Mendukung QRIS Bank Indonesia (semua e-wallet & m-banking), Virtual Account (Mandiri, BCA, BRI, BNI, Permata), E-Wallet, dan Kartu Kredit."
                    : "Supports National QRIS (all e-wallets & mobile banking), Virtual Accounts (Mandiri, BCA, BRI, BNI), E-Wallets, and Cards."}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsDokuOpen(true)}
                  className="w-full flex-1 flex items-center justify-center gap-2 rounded-full bg-[#E11D48] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-rose-700 shadow-lg shadow-rose-900/20"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>
                    {isId
                      ? "Buka Pembayaran DOKU (Rp 99.000)"
                      : "Proceed to DOKU Checkout (Rp 99.000)"}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="w-full sm:w-auto px-5 py-4 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 transition-colors"
                >
                  {isId ? "Edit Data" : "Edit Details"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP SUCCESS: PAYMENT CONFIRMATION SCREEN */}
        {currentStep === "success" && successData && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-400 max-w-2xl mx-auto">
            {/* Success Hero */}
            <div className="text-center space-y-3">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 mb-2">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                {isId ? "Pembayaran DOKU Berhasil • LUNAS" : "DOKU Payment Successful • PAID"}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                {isId ? "Terima Kasih, Pesanan Anda Terkonfirmasi!" : "Thank You, Your Order is Confirmed!"}
              </h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                {isId
                  ? "Sesi konsultasi teknis software Anda telah resmi terjadwal. Tim Preface Labs & PT Afams Global Solusindo siap mendampingi proyek Anda."
                  : "Your technical software consultation is locked in. The Preface Labs team is preparing your project blueprint."}
              </p>
            </div>

            {/* Official Invoice Card */}
            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <div>
                  <span className="text-xs text-neutral-500 block">
                    {isId ? "Entitas Merchant Legal" : "Legal Merchant Entity"}
                  </span>
                  <span className="font-bold text-sm text-neutral-900 dark:text-white">
                    PT AFAMS GLOBAL SOLUSINDO
                  </span>
                  <span className="text-[11px] text-neutral-500 block">
                    Brand: Preface Labs (prefacelabs.com)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-500 block">Status Pembayaran</span>
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    SETTLED / PAID
                  </span>
                </div>
              </div>

              {/* Invoice Rows */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-500">{isId ? "Nomor Invoice" : "Invoice No."}</span>
                  <span className="font-mono font-semibold text-neutral-900 dark:text-white">
                    {successData.invoiceNumber}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-500">
                    {isId ? "Kanal Pembayaran DOKU" : "DOKU Channel"}
                  </span>
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {successData.channel} ({successData.channelDetail})
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-500">
                    {isId ? "Waktu Transaksi" : "Transaction Time"}
                  </span>
                  <span className="text-neutral-900 dark:text-white">{successData.paidAt}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-500">{isId ? "Nama Klien" : "Client Name"}</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {successData.clientName}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-500">
                    {isId ? "Layanan Dipesan" : "Ordered Service"}
                  </span>
                  <span className="font-semibold text-neutral-900 dark:text-white text-right">
                    Konsultasi & Blueprint Software Kustom MVP
                  </span>
                </div>
                <div className="flex justify-between pt-2 text-sm font-bold">
                  <span className="text-neutral-900 dark:text-white">
                    {isId ? "Total Terbayar" : "Total Amount Paid"}
                  </span>
                  <span className="text-[#E11D48] dark:text-rose-400 font-extrabold text-base">
                    Rp 99.000
                  </span>
                </div>
              </div>

              {/* Next Steps Card */}
              <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-950 p-4 border border-neutral-200 dark:border-neutral-800 space-y-2.5">
                <span className="text-xs font-bold text-neutral-900 dark:text-white block">
                  {isId ? "Langkah Selanjutnya:" : "What Happens Next:"}
                </span>
                <ol className="list-decimal list-inside text-xs text-neutral-600 dark:text-neutral-400 space-y-1 leading-relaxed">
                  <li>
                    {isId
                      ? "Tautan Google Meet dan jadwal telah dikirimkan ke email Anda."
                      : "Your Google Meet link and invite have been dispatched to your email."}
                  </li>
                  <li>
                    {isId
                      ? "Konfirmasi otomatis dan rincian sesi telah dikirimkan ke email Anda."
                      : "An automated receipt and session overview have been dispatched to your email."}
                  </li>
                </ol>
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:afams.biz@gmail.com?subject=${encodeURIComponent(
                    `Konfirmasi Pembayaran Konsultasi - ${successData.invoiceNumber}`
                  )}&body=${encodeURIComponent(
                    `Halo tim Preface Labs / PT AFAMS GLOBAL SOLUSINDO,\n\nSaya telah menyelesaikan pembayaran konsultasi software Rp 99.000 dengan Invoice ${successData.invoiceNumber}.\nNama: ${successData.clientName}\nEmail: ${successData.clientEmail}\n\nMohon konfirmasi jadwal sesi Google Meet.\n\nTerima kasih.`
                  )}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-md"
                >
                  <Mail className="h-4 w-4" />
                  <span>
                    {isId
                      ? "Kirim Konfirmasi Email (afams.biz@gmail.com)"
                      : "Send Email Confirmation (afams.biz@gmail.com)"}
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-semibold hover:border-neutral-400 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>{isId ? "Cetak / Simpan Bukti Bayar" : "Print / Save Receipt"}</span>
                  </button>
                  <Link
                    href="/"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    <span>{isId ? "Kembali ke Beranda" : "Return to Home"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* DOKU Hosted Checkout Simulator Modal */}
      <DokuCheckoutModal
        isOpen={isDokuOpen}
        onClose={() => setIsDokuOpen(false)}
        onSuccess={handlePaymentCompleted}
        clientName={form.fullName || "Klien Terdaftar"}
        clientEmail={form.email || "klien@prefacelabs.com"}
        projectName={form.companyName || "Custom Software Blueprint"}
      />
    </div>
  );
}
