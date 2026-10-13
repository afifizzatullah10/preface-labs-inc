import fs from "node:fs";
import path from "node:path";

const PUBLIC_BRAND_DIR = path.resolve("public/brand");
const BRAND_KIT_DIR = path.resolve("public/brand/preface-labs");

if (!fs.existsSync(PUBLIC_BRAND_DIR)) {
  fs.mkdirSync(PUBLIC_BRAND_DIR, { recursive: true });
}

async function run() {
  console.log("Syncing Preface Labs brand kit assets...");

  const iconSource = path.join(BRAND_KIT_DIR, "png/pl-icon-dark-1024.png");
  const logoSource = path.join(BRAND_KIT_DIR, "png/pl-lockup-on-dark.png");

  if (fs.existsSync(iconSource)) {
    const iconDest = path.join(PUBLIC_BRAND_DIR, "preface-labs-icon.png");
    fs.copyFileSync(iconSource, iconDest);
    console.log("Copied", iconDest);
  }

  if (fs.existsSync(logoSource)) {
    const logoDest = path.join(PUBLIC_BRAND_DIR, "preface-labs-logo.png");
    fs.copyFileSync(logoSource, logoDest);
    console.log("Copied", logoDest);
  }

  // Also ensure root favicon & apple-touch-icon are copied
  const faviconDir = path.join(BRAND_KIT_DIR, "favicon");
  if (fs.existsSync(faviconDir)) {
    const files = fs.readdirSync(faviconDir);
    for (const file of files) {
      if (file.endsWith(".png") || file.endsWith(".ico") || file.endsWith(".svg")) {
        fs.copyFileSync(path.join(faviconDir, file), path.join("public", file));
      }
    }
    console.log("Synced favicon files to public root");
  }

  console.log("Preface Labs brand asset sync complete.");
}

run().catch(console.error);
