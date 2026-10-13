import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Preface Labs",
    short_name: "Preface",
    description:
      "The introduction to what's next. Building AI-powered tools and digital communities for the modern web.",
    start_url: "/",
    display: "standalone",
    background_color: "#0C0D10",
    theme_color: "#0C0D10",
    icons: [
      {
        src: "/android-chrome-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
