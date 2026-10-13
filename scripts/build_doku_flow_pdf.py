"""
Builds docs/doku-verification/PrefaceLabs-Alur-Pembayaran-DOKU.pdf
Standard DOKU Merchant Transaction Flow Document (ISMAYA+ Format).
One step per page with phone screenshot and detailed Bahasa Indonesia caption.
"""

import os
import shutil
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "docs" / "doku-verification"
OUT_PDF = OUT_DIR / "PrefaceLabs-Alur-Pembayaran-DOKU.pdf"
PUBLIC_DOCS_DIR = ROOT / "public" / "docs"
SOURCE_DIR = OUT_DIR / "source"
LOGO_PATH = ROOT / "public" / "brand" / "preface-labs-logo.png"

FONTS = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("Body", str(FONTS / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("Bold", str(FONTS / "Arial Bold.ttf")))
pdfmetrics.registerFontFamily("Body", normal="Body", bold="Bold", italic="Body", boldItalic="Bold")

SLATE_DARK = HexColor("#0F172A")
ROSE_ACCENT = HexColor("#E11D48")
PAPER = HexColor("#F8FAFC")
BORDER_COLOR = HexColor("#E2E8F0")
TEXT_MUTED = HexColor("#64748B")
TEXT_DARK = HexColor("#0F172A")

W, H = landscape(A4)
M = 40

body = ParagraphStyle("body", fontName="Body", fontSize=11, leading=16, textColor=TEXT_DARK, spaceAfter=6)
bullet = ParagraphStyle("bullet", parent=body, leftIndent=12, bulletIndent=0, spaceAfter=4)

STEPS = [
    {
        "title": "Masuk ke Website Resmi (https://prefacelabs.com)",
        "shots": ["01-landing.png"],
        "text": [
            "Pelanggan membuka <b>https://prefacelabs.com</b> (tersedia auto-detect Bahasa Indonesia untuk pengunjung lokal).",
            "Halaman utama memperkenalkan studio software Preface Labs di bawah <b>PT AFAMS GLOBAL SOLUSINDO</b>.",
            "Ditampilkan penawaran jasa pembuatan software kustom (B2C & B2B) dan paket konsultasi awal seharga <b>Rp99.000</b>.",
            "Pelanggan menekan tombol <b>\u201cMulai Konsultasi Awal \u00b7 Rp 99.000\u201d</b> untuk memulai proses.",
        ],
    },
    {
        "title": "Katalog Layanan & Pilihan Software Kustom",
        "shots": ["02-services.png"],
        "text": [
            "Halaman layanan merinci 4 kategori rekayasa digital: Aplikasi Web & Mobile B2C, Platform B2B SaaS, AI Agents & Otomasi, serta Integrasi DOKU Payment Gateway.",
            "Setiap layanan mencantumkan tech stack modern (Next.js, React Native, Supabase, OpenAI, DOKU Hosted Checkout).",
            "Klien mendapatkan transparansi penuh sebelum melanjutkan ke perancangan arsitektur produk digital mereka.",
        ],
    },
    {
        "title": "Mengisi Formulir Kebutuhan Software (Kuis)",
        "shots": ["03-quiz-scope.png"],
        "text": [
            "Pelanggan masuk ke halaman formulir singkat interaktif (<b>https://prefacelabs.com/order</b>).",
            "Pelanggan memilih jenis software yang ingin dibangun (contoh: Aplikasi B2C atau B2B SaaS) dan target peluncuran MVP (1-2 minggu).",
            "Pelanggan juga menentukan integrasi kunci yang dibutuhkan: sistem pembayaran DOKU (QRIS/VA), autentikasi pengguna, atau AI.",
            "Kuis bersifat ringkas dan dapat diselesaikan dalam waktu kurang dari 2 menit.",
        ],
    },
    {
        "title": "Memasukkan Informasi Kontak & Booking Klien",
        "shots": ["04-contact-form.png"],
        "text": [
            "Pelanggan mengisi nama lengkap, nama bisnis/brand, nomor WhatsApp aktif, dan alamat email resmi.",
            "Data ini digunakan untuk pengiriman undangan sesi Google Meet 1-on-1 dan penerbitan faktur resmi PT AFAMS GLOBAL SOLUSINDO.",
            "Klien juga dapat menyertakan ringkasan catatan ide atau kebutuhan teknis khusus.",
            "Pelanggan menekan tombol <b>\u201cReview Pesanan & Harga\u201d</b>.",
        ],
    },
    {
        "title": "Review Pesanan & Konfirmasi Harga Rp 99.000",
        "shots": ["05-order-review.png"],
        "text": [
            "Pelanggan melihat rincian manfaat yang diperoleh: sesi 1-on-1 (45-60 min) bersama Principal Engineer, dokumen blueprint arsitektur sistem, estimasi roadmap rilis, dan garansi uang kembali 100%.",
            "Harga ditampilkan transparan sebelum membayar: <b>Rp99.000</b> (harga normal Rp299.000), sekali bayar tanpa langganan.",
            "Pelanggan menekan <b>\u201cBuka Pembayaran DOKU (Rp 99.000)\u201d</b> dan diarahkan ke gerbang pembayaran resmi.",
        ],
    },
    {
        "title": "Memilih Metode Pembayaran di DOKU Checkout",
        "shots": ["06-doku-methods.png"],
        "text": [
            "Halaman DOKU Checkout menampilkan merchant resmi <b>PT AFAMS GLOBAL SOLUSINDO</b>, nomor invoice unik, batas waktu 24 jam, dan total bayar <b>Rp99.000</b>.",
            "Pelanggan memilih metode pembayaran yang diinginkan: <b>QRIS</b>, <b>Virtual Account</b> (Mandiri, BCA, BRI, BNI, Permata), <b>E-Wallet</b>, atau <b>Kartu Kredit/Debit</b>.",
            "Seluruh transaksi diproses di bawah enkripsi PCI-DSS Level 1 dan diawasi oleh Bank Indonesia.",
        ],
    },
    {
        "title": "Pembayaran Instan via QRIS Nasional",
        "shots": ["07-doku-qris.png"],
        "text": [
            "Contoh saluran QRIS: DOKU menampilkan kode QR dinamis dengan identitas merchant resmi <b>PT AFAMS GLOBAL SOLUSINDO</b>.",
            "Pelanggan membuka aplikasi m-Banking (BCA, Mandiri, BRI, BNI) atau E-Wallet (GoPay, OVO, Dana, ShopeePay) di ponselnya.",
            "Memindai kode QRIS di layar dan melakukan konfirmasi pembayaran Rp99.000.",
            "Verifikasi transaksi berlangsung otomatis dan seketika (real-time).",
        ],
    },
    {
        "title": "Pembayaran via Virtual Account (Mandiri / BCA)",
        "shots": ["08-doku-va.png"],
        "text": [
            "Contoh saluran Bank Mandiri: DOKU menampilkan nomor Virtual Account unik (88908 0812 8941 2026) dengan nama penerima <b>PT AFAMS GLOBAL SOLUSINDO</b>.",
            "Tersedia tombol salin instan serta petunjuk pembayaran terperinci untuk Livin' by Mandiri m-Banking, Internet Banking, dan mesin ATM.",
            "Pelanggan melakukan transfer sesuai nominal yang tertera dan sistem mendeteksi pelunasan dalam hitungan detik.",
        ],
    },
    {
        "title": "Konfirmasi Pembayaran Berhasil & Onboarding Klien",
        "shots": ["09-success-receipt.png"],
        "text": [
            "Setelah pembayaran berhasil dikonfirmasi oleh sistem DOKU, pelanggan diarahkan ke halaman konfirmasi berstatus <b>PEMBAYARAN LUNAS (PAID)</b>.",
            "Halaman menampilkan Nomor Invoice, Referensi DOKU, dan detail transaksi resmi PT AFAMS GLOBAL SOLUSINDO.",
            "Tautan undangan Google Meet dan invoice PDF langsung dikirimkan ke email klien.",
            "Tersedia tombol interaktif langsung ke WhatsApp tim teknis Preface Labs untuk koordinasi sesi lebih cepat.",
        ],
    },
]

def footer(c: canvas.Canvas, page: int, total: int) -> None:
    c.setStrokeColor(BORDER_COLOR)
    c.line(M, 30, W - M, 30)
    c.setFont("Body", 8.5)
    c.setFillColor(TEXT_MUTED)
    c.drawString(M, 17, "Preface Labs \u00b7 PT AFAMS GLOBAL SOLUSINDO \u00b7 https://prefacelabs.com \u00b7 Alur Transaksi DOKU Checkout")
    c.drawRightString(W - M, 17, f"Halaman {page} dari {total}")

def phone(c: canvas.Canvas, path: Path, x: float, y: float, h: float) -> float:
    img = ImageReader(str(path))
    iw, ih = img.getSize()
    w = h * iw / ih
    c.setFillColor(HexColor("#FFFFFF"))
    c.setStrokeColor(BORDER_COLOR)
    c.setLineWidth(1)
    c.roundRect(x - 5, y - 5, w + 10, h + 10, 14, stroke=1, fill=1)
    c.drawImage(img, x, y, w, h)
    return w

def paragraphs(c: canvas.Canvas, items: list[str], x: float, top: float, width: float) -> None:
    y = top
    for t in items:
        p = Paragraph(t, bullet, bulletText="\u2022")
        _, ph = p.wrap(width, H)
        p.drawOn(c, x, y - ph)
        y -= ph + bullet.spaceAfter

def cover(c: canvas.Canvas, total: int) -> None:
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    
    # Header Accent bar
    c.setFillColor(SLATE_DARK)
    c.rect(0, H - 90, W, 90, stroke=0, fill=1)
    c.setFillColor(ROSE_ACCENT)
    c.rect(0, H - 94, W, 4, stroke=0, fill=1)

    # Logo
    if LOGO_PATH.exists():
        logo = ImageReader(str(LOGO_PATH))
        lw, lh = logo.getSize()
        c.drawImage(logo, M, H - 80, 200, 200 * lh / lw, mask="auto")

    c.setFillColor(HexColor("#FFFFFF"))
    c.setFont("Bold", 18)
    c.drawRightString(W - M, H - 45, "DOKUMEN ALUR TRANSAKSI RESMI DOKU")
    c.setFont("Body", 11)
    c.setFillColor(HexColor("#94A3B8"))
    c.drawRightString(W - M, H - 65, "Format Standar Verifikasi Merchant PT Nusa Satu Inti Artha")

    # Document Title
    c.setFillColor(SLATE_DARK)
    c.setFont("Bold", 26)
    c.drawString(M, H - 140, "Alur Pembayaran & Transaksi DOKU Checkout")
    c.setFont("Body", 13)
    c.setFillColor(ROSE_ACCENT)
    c.drawString(M, H - 165, "Dari Masuk Website Sampai Pembayaran Terverifikasi di DOKU Payment Gateway")

    rows = [
        ("Nama Merchant", "Preface Labs"),
        ("Badan Usaha Legal", "PT AFAMS GLOBAL SOLUSINDO"),
        ("NIB Resmi", "0273010201718 (Lembaga OSS \u00b7 BKPM RI)"),
        ("NPWP Perusahaan", "96.749.794.2-009.000"),
        ("Alamat Kantor", "Bizpark 3 Commercial Estate Blok D No. 20-25-27, Bekasi, Jawa Barat"),
        ("Bidang Usaha", "KBLI 46512 (Perdagangan Besar Piranti Lunak) & 46511 (Komputer)"),
        ("Produk Ditransaksikan", "Sesi Konsultasi Teknis & Blueprint Software MVP (Sesi 1-on-1 + Dokumen Teknis)"),
        ("Harga Transaksi", "Rp99.000 (Harga Promo \u00b7 Sekali Bayar)"),
        ("Kanal DOKU Dituju", "QRIS Nasional, Virtual Account (Mandiri, BCA, BRI, BNI), E-Wallet, Kartu"),
        ("Email Resmi", "afams.biz@gmail.com"),
    ]
    label_w, value_w = 140, 280
    cell = ParagraphStyle("cell", parent=body, fontSize=10, leading=14, spaceAfter=0)
    y = H - 200
    c.setStrokeColor(BORDER_COLOR)
    for k, v in rows:
        p = Paragraph(v, cell)
        _, ph = p.wrap(value_w, 100)
        c.setFont("Bold", 10)
        c.setFillColor(SLATE_DARK)
        c.drawString(M, y - 10, k)
        p.drawOn(c, M + label_w, y - ph)
        y -= ph + 7
        c.line(M, y, M + label_w + value_w, y)
        y -= 8

    # Phone screenshots preview on cover (3 phones)
    shots = ["01-landing.png", "05-order-review.png", "07-doku-qris.png"]
    shot_h, gap = 290, 14
    total_w = 3 * shot_h * 780 / 1688 + 2 * gap
    x = W - M - total_w
    for name in shots:
        shot_file = SOURCE_DIR / name
        if shot_file.exists():
            x += phone(c, shot_file, x, (H - shot_h) / 2 - 40, shot_h) + gap

    footer(c, 1, total)

def product_catalog_page(c: canvas.Canvas, total: int) -> None:
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, stroke=0, fill=1)

    c.setFillColor(SLATE_DARK)
    c.setFont("Bold", 22)
    c.drawString(M, H - 70, "Katalog Produk & Spesifikasi Layanan Digital")
    c.setFont("Body", 11.5)
    c.setFillColor(ROSE_ACCENT)
    c.drawString(M, H - 90, "Detail Paket Konsultasi Awal & Blueprint Software MVP (Rp 99.000)")

    # Box 1: Deskripsi Paket
    box1_w = (W - 2 * M - 20) / 2
    c.setFillColor(HexColor("#FFFFFF"))
    c.roundRect(M, H - 340, box1_w, 230, 14, stroke=1, fill=1)
    c.setFillColor(SLATE_DARK)
    c.setFont("Bold", 13)
    c.drawString(M + 20, H - 130, "RINCIAN LAYANAN KONSULTASI (RP 99.000)")
    
    desc_items = [
        "<b>Sesi 1-on-1 via Google Meet</b>: Durasi 45-60 menit bersama Principal Software Engineer untuk membedah kebutuhan produk digital Anda.",
        "<b>Dokumen Rekomendasi Arsitektur Sistem</b>: Pemilihan database, tech stack (Next.js, Supabase, LLM), serta integrasi payment gateway lokal.",
        "<b>Roadmap Peluncuran MVP</b>: Milestone terukur untuk rilis cepat dalam 1-2 minggu tahap awal.",
        "<b>Estimasi Biaya Transparan</b>: Perhitungan biaya rekayasa penuh tanpa biaya tersembunyi.",
        "<b>Faktur Pajak & Invoice Legal</b>: Diterbitkan resmi atas nama PT AFAMS GLOBAL SOLUSINDO.",
        "<b>Garansi Kepuasan 100%</b>: Jaminan pengembalian dana penuh jika sesi tidak memberikan nilai.",
    ]
    paragraphs(c, desc_items, M + 20, H - 145, box1_w - 40)

    # Box 2: Portofolio Orisinal
    c.setFillColor(HexColor("#FFFFFF"))
    c.roundRect(M + box1_w + 20, H - 340, box1_w, 230, 14, stroke=1, fill=1)
    c.setFillColor(SLATE_DARK)
    c.setFont("Bold", 13)
    c.drawString(M + box1_w + 40, H - 130, "PORTOFOLIO KARYA ORISINAL PREFACE LABS")

    portfolio_items = [
        "<b>Solyns AI (https://solyns.com)</b>: Platform wawancara cerdas berbasis AI dengan otomasi analitik wawasan kandidat.",
        "<b>Solyns AI Form (https://form.solyns.com)</b>: Formulir intake pintar bertenaga AI untuk otomatisasi data intake bisnis.",
        "<b>ReplyLocal (https://replylocal.app)</b>: Perangkat lunak penjangkauan lokal. Top 10 Finalis OpenAI x Handshake Codex Creator Challenge.",
        "<b>Moonlight Muslims (https://moonlightmuslims.com)</b>: Platform audio cerita anak interaktif berbasis AI dengan integrasi pembayaran DOKU.",
        "<b>Wonder Deen (https://wonderdeen.com)</b>: Platform penerbitan buku cerita anak, e-book interaktif, dan audiobook karakter anak Muslim.",
        "<b>Starring My Dog (https://starringmydog.com)</b>: Kalender dinding kustom bertenaga AI yang menampilkan hewan peliharaan dalam karya seni.",
        "<b>Integritas Hak Cipta</b>: Seluruh aset dan kode merupakan karya intelektual terdaftar PT AFAMS GLOBAL SOLUSINDO.",
    ]
    paragraphs(c, portfolio_items, M + box1_w + 40, H - 145, box1_w - 40)

    # Bottom notice box
    c.setFillColor(SLATE_DARK)
    c.roundRect(M, 60, W - 2 * M, 120, 12, stroke=0, fill=1)
    c.setFillColor(HexColor("#F59E0B"))
    c.setFont("Bold", 12)
    c.drawString(M + 25, 150, "PEMBERITAHUAN VERIFIKASI MERCHANT DOKU")
    c.setFont("Body", 10.5)
    c.setFillColor(HexColor("#E2E8F0"))
    c.drawString(M + 25, 128, "Layanan ini adalah produk jasa rekayasa perangkat lunak digital dan konsultasi teknologi resmi.")
    c.drawString(M + 25, 110, "Bukan barang fisik; tidak memerlukan pengiriman kargo atau jasa ekspedisi kurir.")
    c.drawString(M + 25, 92, "Setelah pembayaran DOKU berhasil, konfirmasi dan tautan rapat langsung dikirim ke email pelanggan.")

    footer(c, 2, total)

def step_page(c: canvas.Canvas, step_num: int, page_num: int, total: int) -> None:
    data = STEPS[step_num - 1]
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, stroke=0, fill=1)

    # Step header badge
    c.setFillColor(ROSE_ACCENT)
    c.roundRect(M, H - 75, 100, 24, 6, stroke=0, fill=1)
    c.setFillColor(HexColor("#FFFFFF"))
    c.setFont("Bold", 10)
    c.drawString(M + 12, H - 60, f"LANGKAH {step_num:02d}")

    # Title
    c.setFillColor(SLATE_DARK)
    c.setFont("Bold", 18)
    c.drawString(M + 115, H - 60, data["title"])

    # Left text description panel
    panel_w = 340
    c.setFillColor(HexColor("#FFFFFF"))
    c.roundRect(M, 60, panel_w, H - 160, 16, stroke=1, fill=1)

    c.setFillColor(SLATE_DARK)
    c.setFont("Bold", 13)
    c.drawString(M + 20, H - 120, "Penjelasan Tahap Transaksi:")
    paragraphs(c, data["text"], M + 20, H - 140, panel_w - 40)

    # Merchant assurance footer within panel
    c.setFillColor(HexColor("#F1F5F9"))
    c.roundRect(M + 20, 80, panel_w - 40, 65, 8, stroke=0, fill=1)
    c.setFillColor(ROSE_ACCENT)
    c.setFont("Bold", 9.5)
    c.drawString(M + 30, 128, "PT AFAMS GLOBAL SOLUSINDO")
    c.setFillColor(TEXT_MUTED)
    c.setFont("Body", 8.5)
    c.drawString(M + 30, 112, "DOKU Hosted Checkout \u00b7 Verifikasi Otomatis")
    c.drawString(M + 30, 96, "Mata Uang: Rupiah (IDR) \u00b7 Nominal: Rp 99.000")

    # Right screenshot panel
    shot_h = H - 170
    shots = data["shots"]
    shot_w_single = shot_h * 780 / 1688
    
    if len(shots) == 1:
        shot_file = SOURCE_DIR / shots[0]
        if shot_file.exists():
            x = (W + M + panel_w - shot_w_single) / 2
            phone(c, shot_file, x, 60, shot_h)
    else:
        # Two shots side by side
        gap = 16
        shot_h_dual = H - 180
        total_w = 2 * (shot_h_dual * 780 / 1688) + gap
        x = (W + M + panel_w - total_w) / 2
        for name in shots:
            shot_file = SOURCE_DIR / name
            if shot_file.exists():
                x += phone(c, shot_file, x, 55, shot_h_dual) + gap

    footer(c, page_num, total)

def build_pdf():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DOCS_DIR.mkdir(parents=True, exist_ok=True)

    c = canvas.Canvas(str(OUT_PDF), pagesize=landscape(A4))
    c.setTitle("Preface Labs \u2014 Alur Pembayaran DOKU (PT AFAMS GLOBAL SOLUSINDO)")
    c.setAuthor("PT AFAMS GLOBAL SOLUSINDO")

    total_pages = 2 + len(STEPS)

    # 1. Cover
    cover(c, total_pages)
    c.showPage()

    # 2. Product Catalog
    product_catalog_page(c, total_pages)
    c.showPage()

    # 3..N. Steps
    for i in range(1, len(STEPS) + 1):
        step_page(c, i, i + 2, total_pages)
        c.showPage()

    c.save()

    # Copy to public/docs for web download
    shutil.copy(OUT_PDF, PUBLIC_DOCS_DIR / "PrefaceLabs-Alur-Pembayaran-DOKU.pdf")

    print(f"Built successfully:\n{OUT_PDF} ({OUT_PDF.stat().st_size} bytes)")
    print(f"Copied to: {PUBLIC_DOCS_DIR / 'PrefaceLabs-Alur-Pembayaran-DOKU.pdf'}")

if __name__ == "__main__":
    build_pdf()
