import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preface Labs — Portfolio",
  description:
    "Side projects by a Carnegie Mellon University master's student. Small, shipped, useful.",
  metadataBase: new URL("https://prefacelabs.com"),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
    shortcut: ["/icon"],
  },
  openGraph: {
    title: "Preface Labs — Portfolio",
    description:
      "Side projects by a Carnegie Mellon University master's student. Small, shipped, useful.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preface Labs — Portfolio",
    description:
      "Side projects by a Carnegie Mellon University master's student. Small, shipped, useful.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900 antialiased font-sans transition-colors duration-200 dark:bg-black dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
