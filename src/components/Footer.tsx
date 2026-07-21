"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/p/Energia-Solar-Brandsen-61560193900677/",
    label: "Facebook",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/energiasolarbrandsen/",
    label: "Instagram",
  },
  {
    icon: YouTubeIcon,
    href: "https://www.youtube.com/watch?v=H2DmGgcvcvU",
    label: "YouTube",
  },
];

const servicesLinks = [
  { label: "Instalación residencial", href: "/#servicios" },
  { label: "Instalación comercial", href: "/#servicios" },
  { label: "Instalación industrial", href: "/#servicios" },
  { label: "Termotanques solares", href: "/#servicios" },
  { label: "Mantenimiento", href: "/#servicios" },
];

const empresaLinks = [
  { label: "Acerca de", href: "/#acerca-de" },
  { label: "Galería de trabajos", href: "/#galeria" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Preguntas frecuentes", href: "/#preguntas-frecuentes" },
  { label: "Contacto", href: "/#contacto" },
];

const contactItems = [
  {
    icon: MapPin,
    text: "Ruta 29 N° 1572, Brandsen, BA",
  },
  {
    icon: Phone,
    text: "+54 11 6229-7037",
  },
  {
    icon: Mail,
    text: "info@energiasolarbrandsen.com",
  },
  {
    icon: Clock,
    text: "Lun–Sáb 09:00–18:00",
  },
];

const columnTitleStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.4)",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 2,
  textTransform: "uppercase",
  marginBottom: 20,
  margin: "0 0 20px 0",
};

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.7)",
  fontSize: 14,
  textDecoration: "none",
  display: "block",
  marginBottom: 10,
  transition: "color 0.2s",
};

export default function Footer() {
  return (
    <footer style={{ background: "rgb(13, 27, 62)", padding: "64px 24px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* 4-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Energia Solar Brandsen"
              width={48}
              height={48}
              style={{ borderRadius: 8 }}
            />
            <p
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: 700,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              Energia Solar Brandsen
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 14,
                lineHeight: 1.7,
                marginTop: 12,
                maxWidth: 240,
              }}
            >
              Tu empresa de confianza para instalaciones solares en Brandsen y la región de Buenos Aires.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <p style={columnTitleStyle}>Servicios</p>
            {servicesLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={linkStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Col 3: Empresa */}
          <div>
            <p style={columnTitleStyle}>Empresa</p>
            {empresaLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={linkStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Col 4: Contacto */}
          <div>
            <p style={columnTitleStyle}>Contacto</p>
            {contactItems.map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  marginBottom: 12,
                }}
              >
                <Icon
                  size={16}
                  style={{ color: "rgba(245,158,11,0.8)", flexShrink: 0, marginTop: 2 }}
                />
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
            © 2025 Energia Solar Brandsen. Todos los derechos reservados.
          </span>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
            Diseñado con ❤️ para el futuro energético
          </span>
        </div>
      </div>
    </footer>
  );
}
