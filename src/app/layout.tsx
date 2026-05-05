import type { Metadata } from "next";
import { Montserrat, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CursorGlow from "@/components/CursorGlow";
import InvestmentQuiz from "@/components/InvestmentQuiz";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Lion Global Sales Consulting — Real Estate & Investment Advisory",
  description: "Institutional-grade real estate consulting and investment advisory across 18 global markets.",
  icons: {
    icon: "/images/lion-icon-transparent.png",
    apple: "/images/lion-icon-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${redHatDisplay.variable} h-full antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/images/lion-icon-transparent.png" />
        <link rel="shortcut icon" type="image/png" href="/images/lion-icon-transparent.png" />
        {/* Adobe Fonts (Typekit) for gravesend-sans */}
        <link rel="stylesheet" href="https://use.typekit.net/llc7hpe.css" />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: '#101010' }}>
        <CursorGlow />
        <Header />
        {children}
        <InvestmentQuiz />
        <WhatsAppButton />
        <Script src="https://api.icm-ia.com/js/form_embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
