export type Language = "id" | "en";

export interface TranslationDictionary {
  nav: {
    portfolio: string;
    services: string;
    consultation: string;
    flow: string;
    about: string;
    contact: string;
    orderNow: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    legalNote: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pricingHighlight: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      tags: string[];
    }[];
  };
  packageCard: {
    tag: string;
    title: string;
    subtitle: string;
    originalPrice: string;
    price: string;
    period: string;
    features: string[];
    cta: string;
    note: string;
  };
  portfolio: {
    tag: string;
    title: string;
    subtitle: string;
    stackLabel: string;
    visitLabel: string;
  };
  about: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    companyInfoTitle: string;
    companyName: string;
    brandName: string;
    legalEntity: string;
    nib: string;
    email: string;
    paymentPartner: string;
  };
  dokuFlowPromo: {
    tag: string;
    title: string;
    desc: string;
    cta: string;
    channels: string[];
  };
  footer: {
    rights: string;
    legalEntity: string;
    terms: string;
    privacy: string;
    refund: string;
    dokuFlow: string;
    channelsTitle: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  id: {
    nav: {
      portfolio: "Portofolio",
      services: "Layanan",
      consultation: "Konsultasi & Order",
      flow: "Alur Pembayaran DOKU",
      about: "Tentang",
      contact: "Kontak",
      orderNow: "Mulai Konsultasi (Rp 99k)",
    },
    hero: {
      badge: "Tech Holding & Studio Software Kustom \u2022 PT Afams Global Solusindo",
      title: "Preface Labs",
      subtitle:
        "Merancang dan membangun software kustom B2C & B2B, platform AI, dan aplikasi modern untuk pasar Indonesia dan global. Dari riset hingga rilis produksi dalam hitungan minggu.",
      legalNote:
        "Entitas Resmi: PT AFAMS GLOBAL SOLUSINDO \u2022 Pembayaran Resmi Didukung DOKU Payment Gateway",
      ctaPrimary: "Mulai Konsultasi Awal \u2022 Rp 99.000",
      ctaSecondary: "Lihat Karya & Portofolio",
      pricingHighlight:
        "Konsultasi awal & blueprint teknis software hanya Rp 99.000 (diskon promo).",
    },
    services: {
      tag: "Layanan Kami",
      title: "Pembuatan Software Kustom B2C & B2B",
      subtitle:
        "Solusi rekayasa perangkat lunak end-to-end yang tangkas untuk startup, UMKM bertumbuh, maupun korporasi yang ingin meluncurkan produk digital di Indonesia.",
      items: [
        {
          title: "Aplikasi Web & Mobile B2C",
          desc: "Aplikasi konsumen berkecepatan tinggi dengan UX intuitif, autentikasi cepat, onboarding mulus, dan retensi tinggi.",
          tags: ["Next.js", "React Native", "Tailwind CSS", "iOS & Android", "PWA"],
        },
        {
          title: "Platform B2B SaaS & Internal Portal",
          desc: "Sistem multi-tenant aman, dasbor manajemen analitik, CRM kustom, dan otomasi alur kerja operasional perusahaan.",
          tags: ["TypeScript", "Supabase", "PostgreSQL", "Role-Based Auth", "API"],
        },
        {
          title: "AI Agents & Otomasi Cerdas",
          desc: "Implementasi Large Language Models (LLM), chatbot asisten pintar, OCR/vision, dan agen otonom khusus proses bisnis Anda.",
          tags: ["OpenAI", "Claude", "LangChain", "Vector DB", "Automated Pipelines"],
        },
        {
          title: "Integrasi Pembayaran Indonesia (DOKU)",
          desc: "Pemasangan gerbang pembayaran lokal terlengkap: QRIS instan Bank Indonesia, Virtual Account (BCA, Mandiri, BRI, BNI), dan E-Wallet resmi.",
          tags: ["DOKU Hosted Checkout", "QRIS Nasional", "BCA / Mandiri VA", "E-Wallet"],
        },
      ],
    },
    packageCard: {
      tag: "Langkah Awal Terbaik",
      title: "Sesi Konsultasi Teknis & Blueprint Software MVP",
      subtitle:
        "Validasi ide Anda, tetapkan arsitektur teknologi yang tepat, dan dapatkan estimasi rilis transparan sebelum mulai coding skala penuh.",
      originalPrice: "Rp 299.000",
      price: "Rp 99.000",
      period: "sekali bayar",
      features: [
        "1-on-1 sesi konsultasi teknis via Google Meet (45-60 menit)",
        "Dokumen rekomendasi arsitektur sistem & pilihan tech stack",
        "Rencana roadmap rilis MVP (fase 1-2 minggu)",
        "Estimasi biaya transparan dan timeline pengembangan",
        "Faktur resmi PT AFAMS GLOBAL SOLUSINDO via DOKU Payment Gateway",
        "Garansi uang kembali 100% jika sesi tidak memberikan kejelasan teknis",
      ],
      cta: "Pesan Sesi Konsultasi \u2022 Rp 99.000",
      note: "Pembayaran aman melalui DOKU: QRIS, VA Bank Mandiri, BCA, BRI, BNI, dan E-Wallet.",
    },
    portfolio: {
      tag: "Portofolio",
      title: "Produk yang Telah Kami Bangun",
      subtitle:
        "Keluarga produk digital dan AI yang aktif digunakan oleh pengguna nyata.",
      stackLabel: "Teknologi",
      visitLabel: "Kunjungi Proyek",
    },
    about: {
      tag: "Tentang Kami",
      title: "Studio Teknologi untuk Masa Depan",
      p1: "Preface Labs adalah unit riset teknologi dan studio pembuatan software di bawah naungan PT AFAMS GLOBAL SOLUSINDO. Kami mengedepankan rekayasa perangkat lunak yang pragmatis, cepat, dan berfokus pada hasil nyata bagi pasar Indonesia dan internasional.",
      p2: "Kami percaya software terbaik adalah yang mampu mengantarkan pengguna menuju masa depan lebih mudah, aman, dan efisien. Seluruh operasional komersial, kontrak kerja sama software, dan transaksi pembayaran dikelola secara legal dan patuh di bawah PT Afams Global Solusindo.",
      companyInfoTitle: "Legalitas & Korporasi",
      companyName: "PT AFAMS GLOBAL SOLUSINDO",
      brandName: "Preface Labs (prefacelabs.com)",
      legalEntity: "Badan Usaha Resmi Terdaftar (PMDN)",
      nib: "0273010201718",
      email: "afams.biz@gmail.com",
      paymentPartner: "DOKU Payment Gateway (PT Nusa Satu Inti Artha)",
    },
    dokuFlowPromo: {
      tag: "Verifikasi & Transparansi",
      title: "Alur Pembayaran Resmi DOKU",
      desc: "Lihat demonstrasi lengkap dan panduan alur transaksi DOKU Checkout dari pengisian formulir kebutuhan hingga pembayaran sukses.",
      cta: "Buka Panduan Alur DOKU",
      channels: [
        "QRIS Nasional (BCA, Mandiri, GoPay, OVO, ShopeePay, Dana)",
        "Virtual Account (Mandiri, BCA, BRI, BNI, Permata, CIMB)",
        "E-Wallet (GoPay, OVO, DANA, ShopeePay)",
        "Kartu Kredit / Debit (Visa, Mastercard, JCB)",
      ],
    },
    footer: {
      rights: "\u00a9 2026 Preface Labs. Seluruh hak cipta dilindungi.",
      legalEntity:
        "Preface Labs adalah merek dagang resmi di bawah naungan PT AFAMS GLOBAL SOLUSINDO.",
      terms: "Ketentuan Layanan",
      privacy: "Kebijakan Privasi",
      refund: "Kebijakan Pengembalian Dana",
      dokuFlow: "Alur Pembayaran DOKU",
      channelsTitle: "Metode Pembayaran Resmi yang Didukung:",
    },
  },
  en: {
    nav: {
      portfolio: "Portfolio",
      services: "Services",
      consultation: "Order & Consult",
      flow: "DOKU Payment Flow",
      about: "About",
      contact: "Contact",
      orderNow: "Book Consultation (Rp 99k)",
    },
    hero: {
      badge: "Tech Holding & Custom Software Studio \u2022 PT Afams Global Solusindo",
      title: "Preface Labs",
      subtitle:
        "Building custom B2C & B2B software, AI-powered systems, and modern digital applications for Indonesia and global markets. From scoping to production in weeks.",
      legalNote:
        "Legal Entity: PT AFAMS GLOBAL SOLUSINDO \u2022 Official Payments Powered by DOKU Gateway",
      ctaPrimary: "Book Early Consultation \u2022 Rp 99.000",
      ctaSecondary: "View Portfolio & Work",
      pricingHighlight:
        "Kickstart your custom software blueprint for only Rp 99,000 (~$6.50 USD).",
    },
    services: {
      tag: "Our Services",
      title: "Custom B2C & B2B Software Engineering",
      subtitle:
        "End-to-end agile software development for founders, scaling businesses, and enterprises looking to ship digital solutions in Indonesia.",
      items: [
        {
          title: "B2C Web & Mobile Applications",
          desc: "High-performance consumer apps with slick onboarding, delight-driven UX, fast responsiveness, and scalable backends.",
          tags: ["Next.js", "React Native", "Tailwind CSS", "iOS & Android", "PWA"],
        },
        {
          title: "B2B SaaS & Enterprise Portals",
          desc: "Secure multi-tenant architectures, administrative analytics dashboards, custom CRMs, and operational workflow engines.",
          tags: ["TypeScript", "Supabase", "PostgreSQL", "Role-Based Auth", "API"],
        },
        {
          title: "AI Agents & Smart Automations",
          desc: "Production Large Language Model (LLM) integrations, intelligent conversational agents, vision/OCR, and automated pipelines.",
          tags: ["OpenAI", "Claude", "LangChain", "Vector DB", "Automated Pipelines"],
        },
        {
          title: "Indonesian Payment Gateway (DOKU)",
          desc: "Complete local payment processing: instant Bank Indonesia QRIS, Virtual Accounts (BCA, Mandiri, BRI, BNI), and top e-wallets.",
          tags: ["DOKU Hosted Checkout", "QRIS National", "BCA / Mandiri VA", "E-Wallet"],
        },
      ],
    },
    packageCard: {
      tag: "First Step",
      title: "Technical Consultation & Software Blueprint",
      subtitle:
        "Validate your product idea, establish the correct architecture, and receive a transparent build timeline before committing full resources.",
      originalPrice: "Rp 299.000",
      price: "Rp 99.000",
      period: "one-time payment",
      features: [
        "1-on-1 technical advisory session via Google Meet (45-60 min)",
        "System architecture & tech stack recommendation document",
        "MVP delivery roadmap (1-2 weeks launch sprint)",
        "Transparent engineering cost & milestone breakdown",
        "Official PT AFAMS GLOBAL SOLUSINDO invoice via DOKU Payment Gateway",
        "100% satisfaction guarantee or full refund",
      ],
      cta: "Book Consultation Session \u2022 Rp 99.000",
      note: "Secure payment through DOKU: QRIS, Mandiri VA, BCA VA, BRI, BNI, and E-Wallets.",
    },
    portfolio: {
      tag: "Portfolio",
      title: "What We're Building",
      subtitle:
        "A growing family of AI-first products and platforms shipping to real users.",
      stackLabel: "Stack",
      visitLabel: "Visit Project",
    },
    about: {
      tag: "About",
      title: "A Holding Company for What's Next",
      p1: "Preface Labs is the technology studio and product venture arm of PT AFAMS GLOBAL SOLUSINDO. We prioritize honest craft, rapid execution, and building digital tools that solve tangible problems.",
      p2: "We believe the best software feels like an introduction to what is possible. All commercial activities, software contracts, and payment operations are legally conducted under PT Afams Global Solusindo.",
      companyInfoTitle: "Legal & Corporate",
      companyName: "PT AFAMS GLOBAL SOLUSINDO",
      brandName: "Preface Labs (prefacelabs.com)",
      legalEntity: "Registered Domestic Company (PMDN)",
      nib: "0273010201718",
      email: "afams.biz@gmail.com",
      paymentPartner: "DOKU Payment Gateway (PT Nusa Satu Inti Artha)",
    },
    dokuFlowPromo: {
      tag: "Verification & Transparency",
      title: "Official DOKU Payment Flow",
      desc: "Explore the end-to-end transaction journey from project scoping quiz to successful checkout through DOKU Payment Gateway.",
      cta: "View DOKU Flow Guide",
      channels: [
        "National QRIS (BCA, Mandiri, GoPay, OVO, ShopeePay, Dana)",
        "Virtual Account (Mandiri, BCA, BRI, BNI, Permata, CIMB)",
        "E-Wallet (GoPay, OVO, DANA, ShopeePay)",
        "Credit / Debit Cards (Visa, Mastercard, JCB)",
      ],
    },
    footer: {
      rights: "\u00a9 2026 Preface Labs. All rights reserved.",
      legalEntity:
        "Preface Labs is an official trading brand operated by PT AFAMS GLOBAL SOLUSINDO.",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      refund: "Refund Policy",
      dokuFlow: "DOKU Payment Flow",
      channelsTitle: "Official Payment Methods Accepted:",
    },
  },
};
