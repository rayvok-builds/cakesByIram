import type { Metadata } from "next";
import { Fraunces, Work_Sans, Caveat } from "next/font/google";
import { siteConfig } from "@/data/site.config";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.business.name} | Bespoke Cake Studio Birmingham`,
  description: `${siteConfig.business.tagline} Bespoke wedding & celebration cakes handcrafted in ${siteConfig.business.location}.`,
  keywords: ["cakes", "wedding cake", "celebration cake", "birmingham bakery", "cakes by iram", "cake studio"],
  authors: [{ name: siteConfig.business.name }],
  icons: {
    icon: siteConfig.business.logo,
    shortcut: siteConfig.business.logo,
    apple: siteConfig.business.logo,
  },
  openGraph: {
    title: `${siteConfig.business.name} — Bespoke Cake Maker`,
    description: siteConfig.business.tagline,
    type: "website",
    locale: "en_GB",
    images: [{ url: siteConfig.business.logo, alt: siteConfig.business.name }],
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
      className={`${fraunces.variable} ${workSans.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
