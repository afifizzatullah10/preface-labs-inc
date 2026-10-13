import os
from PIL import Image, ImageDraw, ImageFont

SHOTS_DIR = "docs/doku-verification/source"
os.makedirs(SHOTS_DIR, exist_ok=True)

BOLD_FONT = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
REG_FONT = "/System/Library/Fonts/Supplemental/Arial.ttf"

f_h1 = ImageFont.truetype(BOLD_FONT, 44)
f_h2 = ImageFont.truetype(BOLD_FONT, 34)
f_h3 = ImageFont.truetype(BOLD_FONT, 28)
f_bold = ImageFont.truetype(BOLD_FONT, 24)
f_body = ImageFont.truetype(REG_FONT, 22)
f_caption = ImageFont.truetype(REG_FONT, 18)
f_small = ImageFont.truetype(REG_FONT, 16)
f_mono = ImageFont.truetype(BOLD_FONT, 22)

W, H = 780, 1688

def create_phone_canvas():
    img = Image.new("RGB", (W, H), "#FFFFFF")
    draw = ImageDraw.Draw(img)

    # Status Bar
    draw.text((60, 28), "09:41", font=ImageFont.truetype(BOLD_FONT, 22), fill="#0F172A")
    # Dynamic island
    draw.rounded_rectangle([(270, 20), (510, 56)], radius=18, fill="#0F172A")
    # Signal, wifi, battery
    draw.text((660, 28), "100%", font=f_caption, fill="#0F172A")

    # Header Bar
    draw.line([(0, 100), (W, 100)], fill="#E2E8F0", width=2)
    draw.text((45, 125), "Preface Labs", font=f_h3, fill="#0F172A")
    
    # Lang switch badge
    draw.rounded_rectangle([(W - 195, 120), (W - 45, 165)], radius=20, fill="#F1F5F9", outline="#E2E8F0", width=1)
    draw.text((W - 175, 132), "ID", font=f_caption, fill="#E11D48")
    draw.text((W - 140, 132), "EN", font=f_caption, fill="#64748B")

    # Bottom safe home indicator
    draw.rounded_rectangle([(270, H - 25), (510, H - 18)], radius=4, fill="#94A3B8")

    return img, draw

# 1. LANDING PAGE
def shot_01_landing():
    img, draw = create_phone_canvas()
    y = 220
    # Pill
    draw.rounded_rectangle([(45, y), (W - 45, y + 46)], radius=23, fill="#FFF1F2", outline="#FFE4E6", width=1)
    draw.text((65, y + 12), "Tech Holding & Studio Software \u2022 PT Afams", font=f_caption, fill="#E11D48")
    y += 80

    draw.text((45, y), "Preface Labs", font=ImageFont.truetype(BOLD_FONT, 52), fill="#0F172A")
    y += 75

    p1 = "Merancang & membangun software kustom B2C & B2B, platform AI, dan aplikasi modern pasar Indonesia & global."
    draw.text((45, y), p1[:48], font=f_body, fill="#475569")
    draw.text((45, y + 34), p1[48:100], font=f_body, fill="#475569")
    draw.text((45, y + 68), p1[100:], font=f_body, fill="#475569")
    y += 140

    # Legal note
    draw.rounded_rectangle([(45, y), (W - 45, y + 60)], radius=12, fill="#F8FAFC", outline="#E2E8F0", width=1)
    draw.text((65, y + 18), "\u2713 PT AFAMS GLOBAL SOLUSINDO \u2022 DOKU Gateway", font=f_caption, fill="#059669")
    y += 90

    # Main CTA
    draw.rounded_rectangle([(45, y), (W - 45, y + 76)], radius=38, fill="#E11D48")
    draw.text((120, y + 24), "Mulai Konsultasi Awal \u2022 Rp 99.000", font=f_bold, fill="#FFFFFF")
    y += 105

    # Secondary CTA
    draw.rounded_rectangle([(45, y), (W - 45, y + 72)], radius=36, fill="#FFFFFF", outline="#CBD5E1", width=2)
    draw.text((250, y + 22), "Lihat Portofolio", font=f_bold, fill="#0F172A")
    y += 120

    # Promo card preview
    draw.rounded_rectangle([(45, y), (W - 45, y + 360)], radius=24, fill="#0F172A")
    draw.text((75, y + 35), "PAKET BLUEPRINT SOFTWARE MVP", font=f_bold, fill="#E11D48")
    draw.text((75, y + 80), "Harga Promo: Rp 99.000", font=f_h2, fill="#FFFFFF")
    draw.text((75, y + 135), "\u2022 1-on-1 Google Meet (45-60 min)", font=f_body, fill="#CBD5E1")
    draw.text((75, y + 175), "\u2022 Dokumen Blueprint Arsitektur Sistem", font=f_body, fill="#CBD5E1")
    draw.text((75, y + 215), "\u2022 Estimasi Biaya & Roadmap 1-2 Minggu", font=f_body, fill="#CBD5E1")
    draw.text((75, y + 255), "\u2022 Garansi 100% Kepuasan / Uang Kembali", font=f_body, fill="#CBD5E1")
    draw.text((75, y + 300), "Dikelola Resmi via DOKU Payment Gateway", font=f_caption, fill="#94A3B8")

    img.save(os.path.join(SHOTS_DIR, "01-landing.png"))

# 2. SERVICES OVERVIEW
def shot_02_services():
    img, draw = create_phone_canvas()
    y = 190
    draw.text((45, y), "Layanan Software Kustom", font=f_h2, fill="#0F172A")
    draw.text((45, y + 45), "Solusi rekayasa digital dari PT Afams Global Solusindo", font=f_caption, fill="#64748B")
    y += 110

    cards = [
        ("Aplikasi Web & Mobile B2C", "Consumer app dengan UX modern, onboarding cepat, dan integrasi pembayaran QRIS lokal.", "#0284C7"),
        ("Platform B2B SaaS", "Portal internal perusahaan, dasbor analitik, multi-tenant aman, dan integrasi workflow.", "#059669"),
        ("AI Agents & Otomasi", "Integrasi LLM cerdas, otomasi proses bisnis, dan pipeline data cerdas.", "#7C3AED"),
        ("Integrasi DOKU Gateway", "Aktivasi QRIS, Virtual Account Mandiri, BCA, BRI, BNI, dan E-Wallet terlengkap.", "#E11D48")
    ]

    for title, desc, col in cards:
        draw.rounded_rectangle([(45, y), (W - 45, y + 260)], radius=20, fill="#FFFFFF", outline="#E2E8F0", width=2)
        draw.rectangle([(45, y), (55, y + 260)], fill=col)
        draw.text((75, y + 25), title, font=f_bold, fill="#0F172A")
        draw.text((75, y + 70), desc[:42], font=f_body, fill="#475569")
        draw.text((75, y + 104), desc[42:], font=f_body, fill="#475569")
        draw.rounded_rectangle([(75, y + 175), (W - 75, y + 225)], radius=10, fill="#F8FAFC")
        draw.text((95, y + 190), "Status: Siap Produksi \u2022 Garansi PT Afams", font=f_caption, fill="#0F172A")
        y += 285

    img.save(os.path.join(SHOTS_DIR, "02-services.png"))

# 3. QUIZ & SCOPE (STEP 1)
def shot_03_quiz_scope():
    img, draw = create_phone_canvas()
    y = 190
    draw.rounded_rectangle([(45, y), (200, y + 36)], radius=18, fill="#FFF1F2")
    draw.text((65, y + 8), "LANGKAH 1 DARI 3", font=f_small, fill="#E11D48")
    y += 55

    draw.text((45, y), "Kebutuhan Software Anda", font=f_h2, fill="#0F172A")
    draw.text((45, y + 45), "Pilih spesifikasi awal produk digital Anda", font=f_caption, fill="#64748B")
    y += 110

    # Quiz options
    draw.text((45, y), "Tipe Software yang Ingin Dibuat:", font=f_bold, fill="#0F172A")
    y += 45

    q_opts = [
        ("Aplikasi Web & Mobile B2C", True),
        ("Platform B2B SaaS & Portal Bisnis", False),
        ("AI Agent & Otomasi Cerdas", False),
        ("E-Commerce & Sistem Transaksi", False)
    ]

    for title, selected in q_opts:
        bg = "#FFF1F2" if selected else "#FFFFFF"
        border = "#E11D48" if selected else "#CBD5E1"
        draw.rounded_rectangle([(45, y), (W - 45, y + 76)], radius=16, fill=bg, outline=border, width=2 if selected else 1)
        check = "\u2713 " if selected else "\u25cb "
        draw.text((70, y + 24), check + title, font=f_bold if selected else f_body, fill="#E11D48" if selected else "#0F172A")
        y += 95

    y += 20
    draw.text((45, y), "Target Peluncuran MVP:", font=f_bold, fill="#0F172A")
    y += 45

    time_opts = ["1 - 2 Minggu (MVP Kilat)", "1 Bulan (Fase Penuh)", "Fleksibel"]
    for idx, t in enumerate(time_opts):
        selected = idx == 0
        bg = "#0F172A" if selected else "#FFFFFF"
        draw.rounded_rectangle([(45, y), (W - 45, y + 68)], radius=14, fill=bg, outline="#0F172A", width=1)
        draw.text((70, y + 20), t, font=f_bold if selected else f_body, fill="#FFFFFF" if selected else "#0F172A")
        y += 82

    y += 40
    # Next button
    draw.rounded_rectangle([(45, y), (W - 45, y + 76)], radius=38, fill="#0F172A")
    draw.text((220, y + 24), "Lanjut ke Data Kontak \u2192", font=f_bold, fill="#FFFFFF")

    img.save(os.path.join(SHOTS_DIR, "03-quiz-scope.png"))

# 4. CONTACT FORM (STEP 2)
def shot_04_contact_form():
    img, draw = create_phone_canvas()
    y = 190
    draw.rounded_rectangle([(45, y), (200, y + 36)], radius=18, fill="#FFF1F2")
    draw.text((65, y + 8), "LANGKAH 2 DARI 3", font=f_small, fill="#E11D48")
    y += 55

    draw.text((45, y), "Informasi Kontak Klien", font=f_h2, fill="#0F172A")
    draw.text((45, y + 45), "Untuk pengiriman link Google Meet & invoice resmi", font=f_caption, fill="#64748B")
    y += 110

    fields = [
        ("Nama Lengkap", "Budi Santoso"),
        ("Nama Brand / Perusahaan", "PT Kreasi Nusantara Digital"),
        ("Nomor WhatsApp Aktif", "0812 8941 2026"),
        ("Alamat Email", "afams.biz+dokuflow@gmail.com")
    ]

    for label, val in fields:
        draw.text((45, y), label + " *", font=f_bold, fill="#334155")
        y += 36
        draw.rounded_rectangle([(45, y), (W - 45, y + 70)], radius=14, fill="#F8FAFC", outline="#CBD5E1", width=1)
        draw.text((70, y + 20), val, font=f_body, fill="#0F172A")
        y += 98

    draw.text((45, y), "Catatan Singkat Proyek:", font=f_bold, fill="#334155")
    y += 36
    draw.rounded_rectangle([(45, y), (W - 45, y + 140)], radius=14, fill="#F8FAFC", outline="#CBD5E1", width=1)
    draw.text((70, y + 20), "Kebutuhan MVP aplikasi B2C dengan alur", font=f_body, fill="#475569")
    draw.text((70, y + 54), "pembayaran QRIS dan akun pengguna.", font=f_body, fill="#475569")
    y += 180

    # Next button
    draw.rounded_rectangle([(45, y), (W - 45, y + 76)], radius=38, fill="#0F172A")
    draw.text((220, y + 24), "Review Pesanan & Harga \u2192", font=f_bold, fill="#FFFFFF")

    img.save(os.path.join(SHOTS_DIR, "04-contact-form.png"))

# 5. ORDER REVIEW (STEP 3)
def shot_05_order_review():
    img, draw = create_phone_canvas()
    y = 190
    draw.rounded_rectangle([(45, y), (200, y + 36)], radius=18, fill="#FFF1F2")
    draw.text((65, y + 8), "LANGKAH 3 DARI 3", font=f_small, fill="#E11D48")
    y += 55

    draw.text((45, y), "Review Pesanan Konsultasi", font=f_h2, fill="#0F172A")
    draw.text((45, y + 45), "Periksa rincian sebelum diarahkan ke DOKU Checkout", font=f_caption, fill="#64748B")
    y += 110

    # Card
    draw.rounded_rectangle([(45, y), (W - 45, y + 550)], radius=24, fill="#FFFFFF", outline="#E2E8F0", width=2)
    
    draw.text((75, y + 35), "PT AFAMS GLOBAL SOLUSINDO", font=f_small, fill="#E11D48")
    draw.text((75, y + 70), "Sesi Konsultasi Teknis & Blueprint MVP", font=f_bold, fill="#0F172A")
    draw.line([(75, y + 120), (W - 75, y + 120)], fill="#E2E8F0", width=1)

    items = [
        ("\u2022 Sesi 1-on-1 via Google Meet (45-60 menit)", "#334155"),
        ("\u2022 Dokumen Blueprint Arsitektur Sistem", "#334155"),
        ("\u2022 Estimasi Jadwal & Rekomendasi Tech Stack", "#334155"),
        ("\u2022 Faktur Resmi PT AFAMS GLOBAL SOLUSINDO", "#334155"),
        ("\u2022 Garansi 100% Kepuasan / Uang Kembali", "#059669")
    ]
    iy = y + 145
    for it, c in items:
        draw.text((75, iy), it, font=f_body, fill=c)
        iy += 44

    draw.line([(75, y + 390), (W - 75, y + 390)], fill="#E2E8F0", width=1)
    draw.text((75, y + 415), "Harga Normal:", font=f_caption, fill="#94A3B8")
    draw.text((W - 240, y + 415), "Rp 299.000", font=f_caption, fill="#94A3B8")
    draw.line([(W - 245, y + 425), (W - 130, y + 425)], fill="#94A3B8", width=2)

    draw.text((75, y + 460), "Total Bayar:", font=f_bold, fill="#0F172A")
    draw.text((W - 280, y + 450), "Rp 99.000", font=ImageFont.truetype(BOLD_FONT, 36), fill="#E11D48")

    y += 580
    # Payment button
    draw.rounded_rectangle([(45, y), (W - 45, y + 80)], radius=40, fill="#E11D48")
    draw.text((140, y + 25), "Buka Pembayaran DOKU (Rp 99.000)", font=f_bold, fill="#FFFFFF")
    y += 105

    draw.text((120, y), "Didukung DOKU: QRIS, VA Mandiri/BCA, E-Wallet", font=f_small, fill="#64748B")

    img.save(os.path.join(SHOTS_DIR, "05-order-review.png"))

# 6. DOKU METHODS SCREEN
def shot_06_doku_methods():
    img, draw = create_phone_canvas()
    # DOKU Header
    draw.rectangle([(0, 100), (W, 230)], fill="#E11D48")
    draw.text((45, 125), "DOKU Checkout", font=f_h2, fill="#FFFFFF")
    draw.text((45, 175), "Merchant: PT AFAMS GLOBAL SOLUSINDO", font=f_caption, fill="#FFE4E6")

    y = 260
    # Invoice bar
    draw.rounded_rectangle([(45, y), (W - 45, y + 100)], radius=16, fill="#F8FAFC", outline="#E2E8F0", width=1)
    draw.text((70, y + 20), "Invoice: INV-PL-20261013-8941", font=f_mono, fill="#0F172A")
    draw.text((70, y + 55), "Total: Rp 99.000 \u2022 Sisa Waktu: 23:59:40", font=f_caption, fill="#E11D48")
    y += 130

    draw.text((45, y), "PILIH METODE PEMBAYARAN:", font=f_bold, fill="#334155")
    y += 45

    methods = [
        ("QRIS (Semua Bank & E-Wallet)", "BCA, Mandiri, BRI, GoPay, OVO, ShopeePay", "#000000"),
        ("Virtual Account Bank Mandiri", "Verifikasi Instan 24/7", "#003D79"),
        ("Virtual Account BCA", "Verifikasi Instan 24/7", "#005BAA"),
        ("Virtual Account BRI (BRIVA)", "Verifikasi Instan 24/7", "#00529B"),
        ("Virtual Account BNI", "Verifikasi Instan 24/7", "#F15A24"),
        ("E-Wallet (GoPay, OVO, DANA)", "Notifikasi Pembayaran Aplikasi", "#118EEA"),
        ("Kartu Kredit / Debit", "Visa, Mastercard, JCB (3DS Secure)", "#475569")
    ]

    for m_title, m_desc, m_badge in methods:
        draw.rounded_rectangle([(45, y), (W - 45, y + 90)], radius=14, fill="#FFFFFF", outline="#E2E8F0", width=1)
        draw.text((75, y + 18), m_title, font=f_bold, fill="#0F172A")
        draw.text((75, y + 52), m_desc, font=f_caption, fill="#64748B")
        draw.text((W - 90, y + 30), "\u203a", font=f_h2, fill="#94A3B8")
        y += 105

    img.save(os.path.join(SHOTS_DIR, "06-doku-methods.png"))

# 7. DOKU QRIS SCREEN
def shot_07_doku_qris():
    img, draw = create_phone_canvas()
    # DOKU Header
    draw.rectangle([(0, 100), (W, 230)], fill="#E11D48")
    draw.text((45, 125), "DOKU Checkout \u2022 QRIS", font=f_h2, fill="#FFFFFF")
    draw.text((45, 175), "Merchant: PT AFAMS GLOBAL SOLUSINDO", font=f_caption, fill="#FFE4E6")

    y = 250
    # QR Card Container
    draw.rounded_rectangle([(70, y), (W - 70, y + 800)], radius=24, fill="#FFFFFF", outline="#E2E8F0", width=2)
    
    draw.rounded_rectangle([(100, y + 25), (W - 100, y + 80)], radius=8, fill="#0F172A")
    draw.text((250, y + 38), "QRIS NASIONAL", font=f_bold, fill="#FFFFFF")

    # QR Graphic Placeholder
    qr_x = 150
    qr_y = y + 110
    draw.rectangle([(qr_x, qr_y), (qr_x + 480, qr_y + 480)], fill="#F8FAFC", outline="#000000", width=3)
    
    # 3 corners
    draw.rectangle([(qr_x + 30, qr_y + 30), (qr_x + 150, qr_y + 150)], fill="#000000")
    draw.rectangle([(qr_x + 50, qr_y + 50), (qr_x + 130, qr_y + 130)], fill="#FFFFFF")
    draw.rectangle([(qr_x + 70, qr_y + 70), (qr_x + 110, qr_y + 110)], fill="#000000")

    draw.rectangle([(qr_x + 330, qr_y + 30), (qr_x + 450, qr_y + 150)], fill="#000000")
    draw.rectangle([(qr_x + 350, qr_y + 50), (qr_x + 430, qr_y + 130)], fill="#FFFFFF")
    draw.rectangle([(qr_x + 370, qr_y + 70), (qr_x + 410, qr_y + 110)], fill="#000000")

    draw.rectangle([(qr_x + 30, qr_y + 330), (qr_x + 150, qr_y + 450)], fill="#000000")
    draw.rectangle([(qr_x + 50, qr_y + 350), (qr_x + 130, qr_y + 430)], fill="#FFFFFF")
    draw.rectangle([(qr_x + 70, qr_y + 370), (qr_x + 110, qr_y + 410)], fill="#000000")

    # Center DOKU logo
    draw.rounded_rectangle([(qr_x + 180, qr_y + 180), (qr_x + 300, qr_y + 300)], radius=14, fill="#E11D48")
    draw.text((qr_x + 195, qr_y + 225), "DOKU", font=f_bold, fill="#FFFFFF")

    # Merchant tag below QR
    draw.text((160, y + 620), "PT AFAMS GLOBAL SOLUSINDO", font=f_bold, fill="#0F172A")
    draw.text((220, y + 665), "NMID: ID1020261013894", font=f_caption, fill="#64748B")
    draw.text((230, y + 710), "Total Bayar: Rp 99.000", font=f_bold, fill="#E11D48")

    y += 840
    # Steps
    draw.text((45, y), "Cara Membayar QRIS:", font=f_bold, fill="#334155")
    draw.text((45, y + 35), "1. Buka m-Banking (BCA, Mandiri, BRI) atau E-Wallet.", font=f_caption, fill="#475569")
    draw.text((45, y + 65), "2. Scan QR di atas dan periksa nama merchant PT AFAMS.", font=f_caption, fill="#475569")
    draw.text((45, y + 95), "3. Masukkan PIN dan transaksi langsung terverifikasi.", font=f_caption, fill="#475569")

    img.save(os.path.join(SHOTS_DIR, "07-doku-qris.png"))

# 8. DOKU VA SCREEN
def shot_08_doku_va():
    img, draw = create_phone_canvas()
    # DOKU Header
    draw.rectangle([(0, 100), (W, 230)], fill="#E11D48")
    draw.text((45, 125), "DOKU \u2022 Virtual Account", font=f_h2, fill="#FFFFFF")
    draw.text((45, 175), "Merchant: PT AFAMS GLOBAL SOLUSINDO", font=f_caption, fill="#FFE4E6")

    y = 260
    draw.rounded_rectangle([(45, y), (W - 45, y + 420)], radius=20, fill="#FFFFFF", outline="#E2E8F0", width=2)
    
    draw.text((75, y + 30), "BANK MANDIRI VIRTUAL ACCOUNT", font=f_bold, fill="#003D79")
    draw.text((75, y + 80), "Nomor Virtual Account:", font=f_caption, fill="#64748B")
    draw.text((75, y + 120), "88908 0812 8941 2026", font=ImageFont.truetype(BOLD_FONT, 34), fill="#0F172A")

    draw.rounded_rectangle([(W - 200, y + 110), (W - 75, y + 165)], radius=10, fill="#F1F5F9")
    draw.text((W - 180, y + 125), "SALIN", font=f_bold, fill="#0F172A")

    draw.line([(75, y + 195), (W - 75, y + 195)], fill="#E2E8F0", width=1)
    draw.text((75, y + 220), "Nama Penerima:", font=f_caption, fill="#64748B")
    draw.text((75, y + 250), "PT AFAMS GLOBAL SOLUSINDO", font=f_bold, fill="#0F172A")

    draw.text((75, y + 305), "Total Pembayaran:", font=f_caption, fill="#64748B")
    draw.text((75, y + 335), "Rp 99.000", font=ImageFont.truetype(BOLD_FONT, 34), fill="#E11D48")

    y += 460
    draw.text((45, y), "Panduan Pembayaran Livin' by Mandiri:", font=f_bold, fill="#334155")
    y += 40
    steps = [
        "1. Buka aplikasi Livin' by Mandiri dan login.",
        "2. Pilih menu 'Bayar' > cari 'PT AFAMS GLOBAL SOLUSINDO'.",
        "3. Masukkan nomor VA 88908 0812 8941 2026.",
        "4. Konfirmasi pembayaran Rp 99.000 dan masukkan PIN."
    ]
    for s in steps:
        draw.text((45, y), s, font=f_body, fill="#475569")
        y += 40

    img.save(os.path.join(SHOTS_DIR, "08-doku-va.png"))

# 9. SUCCESS RECEIPT SCREEN
def shot_09_success_receipt():
    img, draw = create_phone_canvas()
    y = 200
    # Success badge
    draw.rounded_rectangle([(W // 2 - 180, y), (W // 2 + 180, y + 50)], radius=25, fill="#DCFCE7", outline="#86EFAC", width=1)
    draw.text((W // 2 - 145, y + 12), "\u2713 PEMBAYARAN LUNAS (PAID)", font=f_bold, fill="#15803D")
    y += 80

    draw.text((150, y), "Pesanan Terkonfirmasi!", font=f_h2, fill="#0F172A")
    draw.text((130, y + 45), "Sesi Konsultasi Anda Telah Terjadwal", font=f_caption, fill="#64748B")
    y += 110

    # Invoice card
    draw.rounded_rectangle([(45, y), (W - 45, y + 540)], radius=24, fill="#FFFFFF", outline="#E2E8F0", width=2)
    draw.text((75, y + 35), "PT AFAMS GLOBAL SOLUSINDO", font=f_bold, fill="#0F172A")
    draw.text((75, y + 70), "Faktur Resmi Pembayaran DOKU", font=f_caption, fill="#64748B")
    draw.line([(75, y + 115), (W - 75, y + 115)], fill="#E2E8F0", width=1)

    rows = [
        ("Nomor Invoice", "INV-PL-20261013-8941"),
        ("Referensi DOKU", "DOKU-REF-20261013-8941"),
        ("Saluran Bayar", "QRIS Standar Bank Indonesia"),
        ("Nama Klien", "Budi Santoso"),
        ("Email Klien", "afams.biz+dokuflow@gmail.com"),
        ("Layanan", "Konsultasi & Blueprint Software"),
        ("Total Bayar", "Rp 99.000 (LUNAS)")
    ]
    ry = y + 135
    for l, val in rows:
        draw.text((75, ry), l, font=f_caption, fill="#64748B")
        draw.text((W - 380, ry), val, font=f_bold if "LUNAS" in val else f_body, fill="#E11D48" if "LUNAS" in val else "#0F172A")
        ry += 48

    y += 580
    # WhatsApp connect button
    draw.rounded_rectangle([(45, y), (W - 45, y + 76)], radius=38, fill="#059669")
    draw.text((130, y + 24), "Hubungi Tim via WhatsApp Sekarang", font=f_bold, fill="#FFFFFF")
    y += 105

    draw.rounded_rectangle([(45, y), (W - 45, y + 72)], radius=36, fill="#FFFFFF", outline="#CBD5E1", width=2)
    draw.text((220, y + 22), "Cetak / Unduh Invoice PDF", font=f_bold, fill="#0F172A")

    img.save(os.path.join(SHOTS_DIR, "09-success-receipt.png"))

def generate_all():
    shot_01_landing()
    shot_02_services()
    shot_03_quiz_scope()
    shot_04_contact_form()
    shot_05_order_review()
    shot_06_doku_methods()
    shot_07_doku_qris()
    shot_08_doku_va()
    shot_09_success_receipt()
    print("All 9 step screenshots generated in", SHOTS_DIR)

if __name__ == "__main__":
    generate_all()
