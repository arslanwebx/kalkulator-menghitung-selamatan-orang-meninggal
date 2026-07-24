import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const siteUrl = "https://kalkulatorselamatanorangmeninggal.pro/";
const title = "Kalkulator Menghitung Selamatan Orang Meninggal - (Online)";
const description =
  "Hitung jadwal selamatan orang meninggal dengan mudah berdasarkan tradisi Jawa, mulai dari 3 hari, 7 hari, 40 hari, 100 hari, hingga 1000 hari.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  applicationName: "Kalkulator Selamatan",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Kalkulator Selamatan",
    title,
    description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kalkulator Selamatan untuk menghitung tanggal, hari, dan Pasaran Jawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#174c3a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9NL12CWLBE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-9NL12CWLBE');`}
        </Script>
      </body>
    </html>
  );
}
