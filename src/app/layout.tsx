import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Energia Solar Brandsen",
  description:
    "Empresa especializada en el dimensionamiento, instalación, mantenimiento y reparación de sistemas de energía solar en Brandsen, Buenos Aires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${raleway.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-raleway)] antialiased">
        {children}
      </body>
    </html>
  );
}
