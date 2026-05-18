"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Acerca de", href: "/#acerca-de" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Galería", href: "/#galeria" },
  { label: "Preguntas frecuentes", href: "/#preguntas-frecuentes" },
  { label: "Contacto", href: "/#contacto" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 1C5.926 1 1 5.925 1 12c0 1.943.497 3.768 1.368 5.354L1 23l5.793-1.34A10.97 10.97 0 0 0 12 23c6.074 0 11-4.926 11-11S18.073 1 11.999 1zm.001 20a8.985 8.985 0 0 1-4.59-1.254l-.329-.196-3.44.796.826-3.349-.213-.344A8.986 8.986 0 0 1 3 12c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9z" />
    </svg>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-[9999] flex flex-col"
      style={{
        background: "rgb(22, 24, 83)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      }}
    >
      {/* Main bar */}
      <div
        className="flex items-center justify-between px-6"
        style={{ height: "70px" }}
      >
        {/* Logo + company name */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/images/logo.webp"
            alt="Energia Solar Brandsen"
            width={73}
            height={70}
            className="object-contain"
            style={{ width: "73px", height: "70px" }}
          />
          <span
            className="ml-2 font-bold text-white"
            style={{ fontSize: "18px", fontWeight: 700 }}
          >
            Energia Solar Brandsen
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center list-none m-0 p-0 gap-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "block px-3 py-2 no-underline transition-colors duration-200",
                  "hover:text-white hover:underline"
                )}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                  letterSpacing: "0.5px",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop icon links */}
        <div className="hidden md:flex items-center" style={{ gap: "16px" }}>
          <a
            href="tel:+541162297037"
            aria-label="Llamar por teléfono"
            className="text-white transition-colors duration-200 hover:text-white/70"
            style={{ fontSize: "18px", lineHeight: 1 }}
          >
            <Phone size={18} />
          </a>
          <a
            href="mailto:info@energiasolarbrandsen.com"
            aria-label="Enviar email"
            className="text-white transition-colors duration-200 hover:text-white/70"
            style={{ fontSize: "18px", lineHeight: 1 }}
          >
            <Mail size={18} />
          </a>
          <a
            href="https://wa.me/+541152282070"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="text-white transition-colors duration-200 hover:text-white/70"
            style={{ fontSize: "18px", lineHeight: 1 }}
          >
            <WhatsAppIcon className="w-[18px] h-[18px]" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.5)",
            color: "white",
            padding: "4px 8px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden w-full"
          style={{ background: "rgb(22, 24, 83)" }}
        >
          <ul className="list-none m-0 py-3 px-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-6 py-3 no-underline transition-colors duration-200",
                    "hover:text-white hover:underline"
                  )}
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
