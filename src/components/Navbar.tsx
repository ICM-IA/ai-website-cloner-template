"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contacto", href: "/contacto" },
  { label: "Servicio", href: "/servicio" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "100px",
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.5)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1680px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="ICM-IA Home">
          <Image
            src="/images/logo.webp"
            alt="ICM-IA"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        {/* Hamburger button — visible on mobile */}
        <button
          className="flex md:hidden flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "white",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "white",
              transition: "opacity 0.2s ease",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "white",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              transform: mobileOpen
                ? "translateY(-7px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            zIndex: 49,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              onClick={() => setMobileOpen(false)}
              fontSize="24px"
            />
          ))}
        </div>
      )}
    </header>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  fontSize?: string;
}

function NavLink({ href, label, onClick, fontSize = "16px" }: NavLinkProps) {
  const isHome = href === "/";

  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        fontFamily: "Poppins, sans-serif",
        fontSize,
        fontWeight: 600,
        color: isHome ? "#d83535" : "white",
        textDecoration: "none",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#d83535";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = isHome
          ? "#d83535"
          : "white";
      }}
    >
      {label}
    </Link>
  );
}
