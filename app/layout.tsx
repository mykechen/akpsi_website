import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Zeta | USC Professional Business Society",
  description:
    "Alpha Zeta is USC's premier co-ed business society focused on professional development, career excellence, and lifelong brotherhood since 1922.",
  keywords: [
    "Alpha Zeta",
    "USC",
    "business society",
    "professional development",
    "careers",
    "investment banking",
    "consulting",
  ],
  authors: [{ name: "Alpha Zeta USC" }],
  openGraph: {
    title: "Alpha Zeta | USC Professional Business Society",
    description:
      "Alpha Zeta is USC's premier co-ed business society focused on professional development, career excellence, and lifelong brotherhood since 1922.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body className="bg-white text-secondary font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
