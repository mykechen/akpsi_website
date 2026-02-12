import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: {
    default: "Alpha Kappa Psi | USC's Premier Professional Business Society",
    template: "%s | Alpha Kappa Psi USC",
  },
  description:
    "Alpha Kappa Psi is USC's premier co-ed professional business society. Join 500+ alumni in investment banking, consulting, tech, and more. Founded in 1922.",
  keywords: [
    "Alpha Kappa Psi",
    "USC",
    "business society",
    "professional development",
    "careers",
    "investment banking",
    "consulting",
    "USC fraternity",
    "business fraternity",
  ],
  authors: [{ name: "Alpha Kappa Psi USC" }],
  metadataBase: new URL("https://usc-akpsi.com"),
  openGraph: {
    title: "Alpha Kappa Psi | USC's Premier Professional Business Society",
    description:
      "Join USC's premier co-ed professional business society. Career development in investment banking, consulting, product management, and more.",
    url: "https://usc-akpsi.com",
    siteName: "Alpha Kappa Psi USC",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Kappa Psi | USC Professional Business Society",
    description:
      "USC's premier co-ed professional business society. Career development, mentorship, and lifelong brotherhood since 1922.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://usc-akpsi.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alpha Kappa Psi",
    alternateName: "Alpha Kappa Psi USC",
    url: "https://usc-akpsi.com",
    logo: "https://usc-akpsi.com/azlogo.png",
    description:
      "USC's premier co-ed professional business society focused on career development, mentorship, and brotherhood since 1922.",
    foundingDate: "1922",
    sameAs: ["https://www.instagram.com/uscakpsi/"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "alphazeta.sc@gmail.com",
      contactType: "general",
    },
  };

  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white text-secondary font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
