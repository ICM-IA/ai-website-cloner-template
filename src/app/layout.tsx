import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import CursorGlow from "@/components/CursorGlow";

// ─── Google Analytics ────────────────────────────────────────────────────────
// Cuando tengas tu cuenta de Google Analytics, reemplazá G-XXXXXXXXXX
// con tu ID de medición real (ej: G-ABC123XYZ).
const GA_ID = "G-XXXXXXXXXX";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://icm-ia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ICM-IA · Tu inmobiliaria en piloto automático con IA",
    template: "%s · ICM-IA",
  },
  description:
    "Automatizá tu inmobiliaria con Inteligencia Artificial. Centralizá canales, calificá prospectos automáticamente y escalá sin contratar más personal. +890 automatizaciones. 31 clientes.",
  keywords: [
    "IA inmobiliaria",
    "automatización inmobiliaria",
    "inteligencia artificial real estate",
    "CRM automatizado inmobiliaria",
    "calificación de prospectos IA",
    "ICM-IA",
  ],
  authors: [{ name: "ICM-IA" }],
  creator: "ICM-IA",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "ICM-IA",
    title: "ICM-IA · Tu inmobiliaria en piloto automático con IA",
    description:
      "Centralizá todos tus canales, filtrá y calificá prospectos automáticamente, y escalá sin contratar más personal.",
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "ICM-IA — IA para inmobiliarias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICM-IA · Tu inmobiliaria en piloto automático con IA",
    description:
      "Automatizá tu inmobiliaria con IA. +890 automatizaciones implementadas.",
    images: ["/seo/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} h-full antialiased`}>
      <head>
        {/* Google Analytics — reemplazá GA_ID cuando tengas tu cuenta */}
        {GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-black">
        {children}
        <WhatsAppButton />
        <CursorGlow />
      </body>
    </html>
  );
}
