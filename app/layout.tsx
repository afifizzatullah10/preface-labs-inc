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
    "Portfolio of shipped side projects by a Carnegie Mellon University master's student.",
  metadataBase: new URL("https://prefacelabs.com"),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon?v=2", type: "image/png" }],
    apple: [{ url: "/apple-icon?v=2", type: "image/png" }],
    shortcut: ["/icon?v=2"],
  },
  openGraph: {
    title: "Preface Labs — Portfolio",
    description:
      "Shipped AI and product projects built while studying at Carnegie Mellon University.",
    type: "website",
    siteName: "Preface Labs",
    url: "https://prefacelabs.com",
    images: [
      {
        url: "/opengraph-image?v=2",
        width: 1200,
        height: 630,
        alt: "Preface Labs portfolio preview card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preface Labs — Portfolio",
    description:
      "Shipped AI and product projects built while studying at Carnegie Mellon University.",
    images: ["/twitter-image?v=2"],
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
