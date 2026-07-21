import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-raleway",
  display: "swap",
});

const SITE_URL = "https://energiasolarbrandsen.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Energia Solar Brandsen | Paneles Solares en Brandsen, Buenos Aires",
    template: "%s | Energia Solar Brandsen",
  },
  description:
    "Instalación de paneles solares y termotanques solares en Brandsen, La Plata y zona. Ahorrá hasta un 85% en tu factura de luz. Visita técnica y presupuesto gratis.",
  keywords: [
    "energía solar",
    "paneles solares",
    "instalación paneles solares",
    "termotanque solar",
    "energía solar Brandsen",
    "paneles solares La Plata",
    "paneles solares Buenos Aires",
    "energía renovable",
    "ahorro energético",
    "instalación solar residencial",
    "instalación solar comercial",
    "instalación solar industrial",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Energia Solar Brandsen",
    title: "Energia Solar Brandsen | Ahorrá hasta un 85% en tu factura de luz",
    description:
      "Instalación de paneles solares y termotanques solares en Brandsen, La Plata y zona. Visita técnica y presupuesto gratis.",
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Energia Solar Brandsen - Instalación de paneles solares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energia Solar Brandsen | Ahorrá hasta un 85% en tu factura de luz",
    description:
      "Instalación de paneles solares y termotanques solares en Brandsen, La Plata y zona. Presupuesto gratis.",
    images: ["/seo/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Energia Solar Brandsen",
  description:
    "Empresa especializada en el dimensionamiento, instalación, mantenimiento y reparación de sistemas de energía solar.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.webp`,
  image: `${SITE_URL}/seo/og-image.png`,
  telephone: "+54-11-6229-7037",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruta 29 N° 1572",
    addressLocality: "Coronel Brandsen",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -35.1679518,
    longitude: -58.2373784,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: [
    "Coronel Brandsen",
    "La Plata",
    "Monte Grande",
    "Ranchos",
    "General Belgrano",
    "Jeppener",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${raleway.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-raleway)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
