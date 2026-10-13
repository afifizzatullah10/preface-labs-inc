import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_BRAND_DIR = path.resolve("public/brand");
if (!fs.existsSync(PUBLIC_BRAND_DIR)) {
  fs.mkdirSync(PUBLIC_BRAND_DIR, { recursive: true });
}

function getSvg(size = 512) {
  const stroke = Math.max(10, Math.round(size * 0.1));
  const padding = Math.round(size * 0.18);
  const radius = Math.round(size * 0.22);
  const innerX = padding;
  const innerY = padding;
  const innerSize = size - padding * 2;
  const pStemX = innerX + innerSize * 0.18;
  const pTopY = innerY + innerSize * 0.12;
  const pBottomY = innerY + innerSize * 0.9;
  const pBowlWidth = innerSize * 0.46;
  const pBowlHeight = innerSize * 0.4;
  const lStemX = innerX + innerSize * 0.78;
  const lTopY = innerY + innerSize * 0.12;
  const lBottomY = innerY + innerSize * 0.88;
  const lFootX = innerX + innerSize * 0.52;

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pl-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0F172A" />
        <stop offset="50%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#334155" />
      </linearGradient>
      <linearGradient id="pl-mark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#F8FAFC" />
      </linearGradient>
      <linearGradient id="pl-accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#E11D48" />
        <stop offset="100%" stop-color="#BE123C" />
      </linearGradient>
    </defs>

    <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" fill="url(#pl-bg)" />

    <path
      d="
        M ${pStemX} ${pTopY}
        L ${pStemX} ${pBottomY}
        M ${pStemX} ${pTopY}
        L ${pStemX + pBowlWidth} ${pTopY}
        Q ${pStemX + pBowlWidth + innerSize * 0.12} ${pTopY}, ${pStemX + pBowlWidth + innerSize * 0.12} ${pTopY + pBowlHeight * 0.5}
        Q ${pStemX + pBowlWidth + innerSize * 0.12} ${pTopY + pBowlHeight}, ${pStemX + pBowlWidth} ${pTopY + pBowlHeight}
        L ${pStemX} ${pTopY + pBowlHeight}
        M ${lStemX} ${lTopY}
        L ${lStemX} ${lBottomY}
        L ${lFootX} ${lBottomY}
      "
      stroke="url(#pl-mark)"
      stroke-width="${stroke}"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle
      cx="${innerX + innerSize * 0.82}"
      cy="${innerY + innerSize * 0.2}"
      r="${Math.max(5, Math.round(size * 0.04))}"
      fill="url(#pl-accent)"
    />
  </svg>`;
}

async function run() {
  const svg512 = getSvg(512);
  const iconPath = path.join(PUBLIC_BRAND_DIR, "preface-labs-icon.png");
  await sharp(Buffer.from(svg512)).png().toFile(iconPath);
  console.log("Wrote", iconPath);

  // Also make horizontal lockup logo SVG and PNG
  const logoSvg = `<svg width="800" height="240" viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pl-accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#E11D48" />
        <stop offset="100%" stop-color="#BE123C" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="800" height="240" fill="#0F172A" rx="28" />
    <g transform="translate(40, 20)">
      ${getSvg(200)}
    </g>
    <text x="270" y="115" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, Arial, sans-serif" font-weight="900" font-size="52" letter-spacing="-1">Preface Labs</text>
    <text x="272" y="160" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, Arial, sans-serif" font-weight="500" font-size="22">PT AFAMS GLOBAL SOLUSINDO</text>
  </svg>`;

  const logoPath = path.join(PUBLIC_BRAND_DIR, "preface-labs-logo.png");
  await sharp(Buffer.from(logoSvg)).png().toFile(logoPath);
  console.log("Wrote", logoPath);
}

run().catch(console.error);
