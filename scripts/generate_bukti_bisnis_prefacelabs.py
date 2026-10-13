import os
import shutil
from PIL import Image, ImageDraw, ImageFont

def create_bukti_bisnis():
    # Dimensions (High res portrait A4-proportional canvas)
    W, H = 2000, 2850
    img = Image.new("RGB", (W, H), "#F8FAFC")
    draw = ImageDraw.Draw(img)

    # Fonts
    bold_font_path = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
    reg_font_path = "/System/Library/Fonts/Supplemental/Arial.ttf"
    
    font_title = ImageFont.truetype(bold_font_path, 48)
    font_subtitle = ImageFont.truetype(reg_font_path, 26)
    font_section = ImageFont.truetype(bold_font_path, 32)
    font_card_title = ImageFont.truetype(bold_font_path, 25)
    font_card_desc = ImageFont.truetype(reg_font_path, 21)
    font_bold = ImageFont.truetype(bold_font_path, 22)
    font_regular = ImageFont.truetype(reg_font_path, 21)
    font_small = ImageFont.truetype(reg_font_path, 18)

    # --- HEADER BANNER ---
    header_h = 240
    draw.rectangle([(0, 0), (W, header_h)], fill="#0F172A")
    
    # Crimson accent line (matching DOKU & Preface Labs accent)
    draw.rectangle([(0, header_h - 8), (W, header_h)], fill="#E11D48")

    # Logo (Current brand icon)
    logo_path = "public/brand/preface-labs-icon.png"
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        logo = logo.resize((150, 150), Image.Resampling.LANCZOS)
        # Subtle rounded container border matching new squircle radius
        draw.rounded_rectangle([(57, 42), (213, 198)], radius=36, outline="#334155", width=2)
        img.paste(logo, (60, 45), logo)

    # Header Titles
    draw.text((250, 60), "PREFACE LABS", font=font_title, fill="#FFFFFF")
    draw.text((250, 126), "Studio Rekayasa Software Kustom B2C & B2B, AI Agents & Solusi Digital", font=font_subtitle, fill="#94A3B8")
    draw.text((250, 172), "Website Resmi: https://prefacelabs.com", font=font_bold, fill="#38BDF8")

    # Header Right Badge
    badge_x = W - 620
    draw.rounded_rectangle([(badge_x, 45), (W - 60, 195)], radius=16, fill="#1E293B", outline="#475569", width=2)
    draw.text((badge_x + 25, 62), "DOKUMEN BUKTI USAHA & PROFIL MEREK", font=font_bold, fill="#E11D48")
    draw.text((badge_x + 25, 102), "Badan Usaha: PT AFAMS GLOBAL SOLUSINDO", font=font_small, fill="#E2E8F0")
    draw.text((badge_x + 25, 138), "ID Akun DOKU: BSN-0246-1791083540220", font=font_small, fill="#94A3B8")

    y = header_h + 40

    # --- SECTION 1: INFORMASI PROFIL MEREK & PERUSAHAAN ---
    draw.text((60, y), "1. PROFIL MEREK & ENTITAS BISNIS RESMI", font=font_section, fill="#0F172A")
    y += 50

    card_w = W - 120
    info_card_h = 310
    draw.rounded_rectangle([(60, y), (60 + card_w, y + info_card_h)], radius=20, fill="#FFFFFF", outline="#E2E8F0", width=2)

    col1_x = 95
    col2_x = 1040
    row_y = y + 32
    row_gap = 48

    items_col1 = [
        ("Nama Merek Dagang", "Preface Labs"),
        ("Perusahaan Induk (Legal)", "PT Afams Global Solusindo"),
        ("Nomor Induk Berusaha (NIB)", "0273010201718 (OSS / BKPM RI)"),
        ("NPWP Perusahaan", "96.749.794.2-009.000"),
        ("Alamat Korespondensi", "Bizpark 3 Commercial Estate Blok D No. 20-25-27, Bekasi")
    ]
    for label, val in items_col1:
        draw.text((col1_x, row_y), f"{label}:", font=font_bold, fill="#475569")
        draw.text((col1_x + 360, row_y), val, font=font_regular, fill="#0F172A")
        row_y += row_gap

    row_y = y + 32
    items_col2 = [
        ("Klasifikasi Bidang Usaha", "KBLI 46512 (Piranti Lunak) & 46511 (Komputer)"),
        ("Status Penanaman Modal", "PMDN (Penanaman Modal Dalam Negeri Aktif)"),
        ("Email Resmi Korespondensi", "afams.biz@gmail.com"),
        ("Model Monetisasi", "Jasa Software Development & Blueprint (Rp 99.000)"),
        ("Kanal Pembayaran Dituju", "DOKU Payment Gateway (QRIS, VA Bank, E-Wallet)")
    ]
    for label, val in items_col2:
        draw.text((col2_x, row_y), f"{label}:", font=font_bold, fill="#475569")
        draw.text((col2_x + 350, row_y), val, font=font_regular, fill="#0F172A")
        row_y += row_gap

    y += info_card_h + 40

    # --- SECTION 2: KATALOG LAYANAN & SPESIFIKASI PRODUK ---
    draw.text((60, y), "2. KATALOG LAYANAN & PRODUK RESMI PREFACE LABS", font=font_section, fill="#0F172A")
    draw.text((880, y + 8), "(Portofolio karya & layanan komersial resmi PT Afams Global Solusindo)", font=font_small, fill="#64748B")
    y += 50

    services_data = [
        (
            "1. APLIKASI WEB & MOBILE B2C",
            "Pengembangan aplikasi konsumen berkinerja tinggi, UI/UX modern, pendaftaran instan, dan alur pembayaran lokal.",
            "Next.js \u2022 React Native \u2022 Supabase \u2022 iOS/Android",
            "Mulai Rp 15.000.000 (MVP) / Sesuai Scope",
            "#0284C7"
        ),
        (
            "2. PLATFORM B2B SAAS & PORTAL BISNIS",
            "Sistem software enterprise multi-tenant, dasbor analitik manajemen, CRM kustom, dan sistem izin berbasis peran.",
            "TypeScript \u2022 PostgreSQL \u2022 Tailwind \u2022 Role-Auth",
            "Mulai Rp 25.000.000 / Kontrak Kustom",
            "#059669"
        ),
        (
            "3. AI AGENTS & OTOMASI WORKFLOW",
            "Implementasi LLM cerdas (OpenAI/Claude), automasi proses, dan form intake cerdas (Contoh: Solyns AI & Solyns Form).",
            "OpenAI API \u2022 LangChain \u2022 Vector DB \u2022 Python",
            "Mulai Rp 18.000.000 / Integrasi Kustom",
            "#7C3AED"
        ),
        (
            "4. KONSULTASI AWAL & BLUEPRINT MVP",
            "Sesi deep-dive 1-on-1 via Google Meet (45-60 min), blueprint rekomendasi arsitektur sistem, tech stack, dan roadmap rilis.",
            "Google Meet \u2022 Arsitektur Sistem \u2022 Garansi 100%",
            "Rp 99.000 (Harga Normal Rp 299.000)",
            "#E11D48"
        )
    ]

    grid_w = W - 120
    s_card_w = (grid_w - 30) // 2
    s_card_h = 330

    for idx, (s_title, s_desc, s_stack, s_price, s_color) in enumerate(services_data):
        row = idx // 2
        col = idx % 2
        bx = 60 + col * (s_card_w + 30)
        by = y + row * (s_card_h + 24)

        # Card container
        draw.rounded_rectangle([(bx, by), (bx + s_card_w, by + s_card_h)], radius=18, fill="#FFFFFF", outline="#E2E8F0", width=2)
        # Left accent stripe
        draw.rectangle([(bx, by), (bx + 12, by + s_card_h)], fill=s_color)

        draw.text((bx + 35, by + 28), s_title, font=font_card_title, fill="#0F172A")

        # Word wrap description
        words = s_desc.split(" ")
        lines = []
        cur_line = ""
        for w in words:
            test = cur_line + (" " if cur_line else "") + w
            if len(test) < 46:
                cur_line = test
            else:
                lines.append(cur_line)
                cur_line = w
        if cur_line:
            lines.append(cur_line)

        desc_y = by + 74
        for line in lines:
            draw.text((bx + 35, desc_y), line, font=font_card_desc, fill="#475569")
            desc_y += 32

        # Tech stack pill
        draw.rounded_rectangle([(bx + 35, by + 195), (bx + s_card_w - 35, by + 240)], radius=10, fill="#F1F5F9")
        draw.text((bx + 48, by + 206), f"Tech Stack: {s_stack}", font=font_small, fill="#334155")

        # Price badge
        draw.rounded_rectangle([(bx + 35, by + 255), (bx + s_card_w - 35, by + 305)], radius=10, fill="#FFF1F2" if "#E11D48" in s_color else "#F8FAFC", outline="#E2E8F0", width=1)
        draw.text((bx + 48, by + 270), f"Biaya Resmi: {s_price}", font=font_bold, fill="#E11D48" if "#E11D48" in s_color else "#0F172A")

    y += 2 * (s_card_h + 24) + 20

    # --- SECTION 3: EKOSISTEM CHECKOUT & INTEGRASI DOKU ---
    draw.text((60, y), "3. FORMAT PEMESANAN DIGITAL & GERBANG PEMBAYARAN DOKU", font=font_section, fill="#0F172A")
    y += 50

    feat_w = (grid_w - 40) // 3
    feat_h = 240
    features = [
        ("1. FORMULIR KEBUTUHAN (QUIZ)", 
         "Klien mengisi form kuesioner singkat di https://prefacelabs.com/order untuk mendefinisikan tipe software (B2C/B2B), platform, dan target MVP sebelum melakukan pembayaran.",
         "#0284C7"),
        ("2. CHECKOUT RESMI DOKU (Rp 99k)", 
         "Penerimaan pembayaran legal biaya konsultasi awal & blueprint via DOKU Payment Gateway: QRIS Nasional (semua e-wallet), Virtual Account Mandiri, BCA, BRI, BNI, dan E-Wallet.",
         "#E11D48"),
        ("3. KONFIRMASI OTOMATIS & FAKTUR", 
         "Setelah verifikasi pembayaran berhasil seketika dari bank, klien mendapatkan nomor invoice resmi PT AFAMS GLOBAL SOLUSINDO, tautan Google Meet, dan kontak WhatsApp onboarding.",
         "#059669")
    ]

    for idx, (f_title, f_desc, f_accent) in enumerate(features):
        fx = 60 + idx * (feat_w + 20)
        draw.rounded_rectangle([(fx, y), (fx + feat_w, y + feat_h)], radius=16, fill="#FFFFFF", outline="#E2E8F0", width=2)
        draw.rectangle([(fx, y), (fx + feat_w, y + 8)], fill=f_accent)
        draw.text((fx + 20, y + 26), f_title, font=font_card_title, fill="#0F172A")
        
        words = f_desc.split(" ")
        lines = []
        cur_line = ""
        for w in words:
            test = cur_line + (" " if cur_line else "") + w
            if len(test) < 38:
                cur_line = test
            else:
                lines.append(cur_line)
                cur_line = w
        if cur_line:
            lines.append(cur_line)

        desc_y = y + 72
        for line in lines:
            draw.text((fx + 20, desc_y), line, font=font_small, fill="#475569")
            desc_y += 30

    y += feat_h + 35

    # --- FOOTER & SURAT PERNYATAAN / LEGAL STATEMENT ---
    footer_h = 200
    draw.rounded_rectangle([(60, y), (W - 60, y + footer_h)], radius=16, fill="#0F172A")
    
    draw.text((95, y + 25), "SURAT PERNYATAAN OPERASIONAL MEREK DAGANG", font=font_bold, fill="#E11D48")
    stmt_lines = [
        "Merek dagang 'Preface Labs' adalah produk software studio resmi di bawah naungan badan hukum PT AFAMS GLOBAL SOLUSINDO.",
        "Seluruh transaksi, hak cipta karya rekayasa software, serta operasional storefront https://prefacelabs.com dikelola penuh secara sah",
        "oleh perusahaan untuk keperluan integrasi layanan pembayaran resmi DOKU Payment Gateway (PT Nusa Satu Inti Artha)."
    ]

    stmt_y = y + 68
    for line in stmt_lines:
        draw.text((95, stmt_y), line, font=font_small, fill="#CBD5E1")
        stmt_y += 28

    # Signoff on the right
    draw.text((W - 540, y + 100), "PT AFAMS GLOBAL SOLUSINDO", font=font_bold, fill="#FFFFFF")
    draw.text((W - 540, y + 135), "Dokumen Resmi Verifikasi Merchant DOKU", font=font_small, fill="#94A3B8")

    # Output paths
    out_dir = "docs/doku-verification"
    public_docs_dir = "public/docs"
    os.makedirs(out_dir, exist_ok=True)
    os.makedirs(public_docs_dir, exist_ok=True)
    
    jpg_path = os.path.join(out_dir, "bukti-bisnis-preface-labs.jpg")
    pdf_path = os.path.join(out_dir, "bukti-bisnis-preface-labs.pdf")
    
    img.save(jpg_path, "JPEG", quality=95)
    img.save(pdf_path, "PDF", resolution=150.0)
    
    # Also copy to public/docs for web download
    shutil.copy(pdf_path, os.path.join(public_docs_dir, "bukti-bisnis-preface-labs.pdf"))
    shutil.copy(jpg_path, os.path.join(public_docs_dir, "bukti-bisnis-preface-labs.jpg"))
    
    print(f"Generated successfully:\n{jpg_path} ({os.path.getsize(jpg_path)} bytes)\n{pdf_path} ({os.path.getsize(pdf_path)} bytes)")

if __name__ == "__main__":
    create_bukti_bisnis()
