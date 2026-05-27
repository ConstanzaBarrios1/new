import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { Analytics } from '@vercel/analytics/next'
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-serif",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Alcazar Capital Management — Intelligence Engineered. Limits Redefined.",
  description:
    "Alcazar Capital Management is a next-generation hedge fund built on rigorous market research, quantitative performance, and deep fundamental conviction.",
  keywords: "Alcazar Capital, hedge fund, quantitative strategy, alternative asset management, investment research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} bg-black`}>
      <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  );
}
