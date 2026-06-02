import Image from "next/image";
import Link from "next/link";

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SERVICES_LINKS = [
  { label: "CRM Automatizado", href: "#" },
  { label: "Asistente IA", href: "#" },
  { label: "Adquisición de Clientes", href: "#" },
  { label: "Adquisición de Propiedades", href: "#" },
];

const COMPANY_LINKS = [
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
  { label: "Servicios", href: "/servicio" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "64px",
        paddingBottom: "32px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
        className="footer-container"
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* Left: logo + tagline + social */}
          <div style={{ maxWidth: "320px" }}>
            <div style={{ width: "220px", height: "66px", position: "relative" }}>
              <Image
                src="/images/logo.png"
                alt="ICM-IA"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                lineHeight: 1.7,
                marginTop: "16px",
                marginBottom: "24px",
              }}
            >
              Soluciones de inteligencia artificial para el sector inmobiliario.
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="https://www.instagram.com/icm.ia/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/icm-ia/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Right: link columns */}
          <div
            style={{
              display: "flex",
              gap: "64px",
              flexWrap: "wrap",
            }}
          >
            {/* Services column */}
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#ECECEC",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                  margin: "0 0 20px 0",
                }}
              >
                Servicios
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                }}
              >
                {SERVICES_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-nav-link"
                      style={{
                        fontSize: "14px",
                        color: "#6B7280",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#ECECEC",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  margin: "0 0 20px 0",
                }}
              >
                Empresa
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                }}
              >
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-nav-link"
                      style={{
                        fontSize: "14px",
                        color: "#6B7280",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
            marginBottom: "32px",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13px", color: "#374151", margin: "0" }}>
            © 2026 ICM-IA. Todos los derechos reservados.
          </p>
          <Link
            href="/politica-de-privacidad"
            style={{ fontSize: "13px", color: "#374151", textDecoration: "none", transition: "color 0.2s" }}
            className="footer-nav-link"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>

      <style>{`
        .footer-social-link {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9CA3AF;
          transition: all 0.2s;
          text-decoration: none;
        }
        .footer-social-link:hover {
          color: #FF1414;
          background: #1a1a1a;
        }
        .footer-nav-link:hover {
          color: #ECECEC !important;
        }
        @media (max-width: 768px) {
          .footer-container {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
