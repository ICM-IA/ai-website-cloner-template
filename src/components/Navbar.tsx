"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { text: "Instalación Residencial", href: "/servicios/residencial", icon: "🏠" },
  { text: "Instalación Comercial", href: "/servicios/comercial", icon: "🏢" },
  { text: "Instalación Industrial", href: "/servicios/industrial", icon: "🏭" },
  { text: "Termotanque Solar", href: "/servicios/termotanque-solar", icon: "☀️" },
];

const navLinks = [
  { text: "Inicio", href: "/" },
  { text: "Nosotros", href: "/nosotros" },
  { text: "Calculadora", href: "/calculadora" },
  { text: "Testimonios", href: "/testimonios" },
  { text: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        background: scrolled ? "rgb(22, 24, 83)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Main bar */}
      <div
        className="mx-auto flex items-center justify-between px-6"
        style={{ maxWidth: "1280px", height: "72px" }}
      >
        {/* Logo + company name */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/images/logo.webp"
            alt="Energia Solar Brandsen logo"
            width={48}
            height={48}
            className="object-contain"
            style={{ width: "48px", height: "48px" }}
          />
          <span
            className="text-white"
            style={{ fontSize: "18px", fontWeight: 700 }}
          >
            Energia Solar Brandsen
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center list-none m-0 p-0 gap-1">
          {/* Servicios with dropdown */}
          <li
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-3 py-2 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.3px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Servicios
              <ChevronDown
                size={14}
                style={{
                  transition: "transform 0.2s",
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "rgb(13, 27, 62)",
                  borderRadius: "0 0 12px 12px",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
                  minWidth: "240px",
                  padding: "8px 0",
                  zIndex: 100,
                }}
              >
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="no-underline"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 20px",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "14px",
                      fontWeight: 500,
                      transition: "background 0.15s, color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "white";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.8)";
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>{item.icon}</span>
                    {item.text}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Remaining links */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-3 py-2 no-underline transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.3px",
                }}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contacto"
            className="no-underline transition-all duration-200"
            style={{
              border: "2px solid #f59e0b",
              color: "#f59e0b",
              background: "transparent",
              borderRadius: "6px",
              padding: "8px 20px",
              fontSize: "14px",
              fontWeight: 700,
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#f59e0b";
              (e.currentTarget as HTMLAnchorElement).style.color = "#0d1b3e";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f59e0b";
            }}
          >
            Pedir presupuesto
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.4)",
            color: "white",
            padding: "6px 10px",
            cursor: "pointer",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
            {/* Servicios expandable */}
            <li>
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center justify-between w-full px-6 py-3 transition-colors duration-200 hover:text-white"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.3px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Servicios
                <ChevronDown
                  size={14}
                  style={{
                    transition: "transform 0.2s",
                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    marginRight: "0",
                  }}
                />
              </button>

              {servicesOpen && (
                <ul className="list-none m-0 p-0">
                  {serviceLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setServicesOpen(false);
                        }}
                        className="flex items-center gap-2 no-underline transition-colors duration-200 hover:text-white"
                        style={{
                          paddingLeft: "24px",
                          paddingRight: "24px",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        <span style={{ fontSize: "14px" }}>{item.icon}</span>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Remaining nav links */}
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full px-6 py-3 no-underline transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-5">
            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center no-underline transition-all duration-200 hover:bg-[#f59e0b] hover:text-[#0d1b3e]"
              style={{
                border: "2px solid #f59e0b",
                color: "#f59e0b",
                background: "transparent",
                borderRadius: "6px",
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Pedir presupuesto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
