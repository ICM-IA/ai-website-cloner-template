"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CalButton from "@/components/CalButton";

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
        <Link href="/" aria-label="ICM-IA Home" style={{ display: "block", width: "195px", height: "58px", position: "relative", flexShrink: 0 }}>
          <Image
            src="/images/logo.png"
            alt="ICM-IA"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="navbar-desktop">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <CalButton
            style={{
              backgroundColor: "#FF1414",
              color: "white",
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
              border: "none",
              transition: "all 0.2s ease",
              boxShadow: "0 0 20px rgba(255,20,20,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e00000";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(255,20,20,0.5)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF1414";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(255,20,20,0.25)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            Agendar Llamada
          </CalButton>
        </nav>

        {/* Hamburger button — visible on mobile */}
        <button
          className="navbar-hamburger"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMobileOpen((prev) => !prev)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", flexDirection: "column", gap: 5, justifyContent: "center", alignItems: "center" }}
        >
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "white", transition: "transform 0.2s ease, opacity 0.2s ease", transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "white", transition: "opacity 0.2s ease", opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "white", transition: "transform 0.2s ease, opacity 0.2s ease", transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
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
            backgroundColor: "#000",
            zIndex: 49,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "36px",
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              onClick={() => setMobileOpen(false)}
              fontSize="26px"
            />
          ))}
          <CalButton
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: "8px",
              backgroundColor: "#FF1414",
              color: "white",
              padding: "14px 36px",
              borderRadius: "10px",
              fontSize: "17px",
              fontWeight: 700,
              border: "none",
            }}
          >
            Agendar Llamada
          </CalButton>
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
