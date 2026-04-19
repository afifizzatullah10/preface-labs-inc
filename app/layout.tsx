import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preface Labs, Inc.",
  description:
    "The introduction to what's next. Building AI-powered tools and digital communities for the modern web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-neutral-900 font-sans">
        {children}
      </body>
    </html>
  );
}
