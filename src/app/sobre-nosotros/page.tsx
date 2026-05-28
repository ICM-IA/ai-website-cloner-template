"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/funnel/Footer";
import CalButton from "@/components/CalButton";

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const pageStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0);    }
  }

  .sn-fade {
    opacity: 0;
    transform: translateY(40px);
  }
  .sn-fade.visible {
    animation: fadeInUp 0.7s ease forwards;
  }

  @keyframes ctaPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(255,20,20,0.4); }
    70%      { box-shadow: 0 0 0 15px rgba(255,20,20,0); }
  }
  .sn-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background-color: #FF1414;
    color: white;
    padding: 18px 44px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    font-family: Poppins, sans-serif;
    text-decoration: none;
    animation: ctaPulse 2s ease-in-out infinite;
    transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
    border: none;
    cursor: pointer;
  }
  .sn-cta-btn:hover {
    background-color: #e00000;
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(255,20,20,0.5);
  }

  /* ---- responsive ---- */
  @media (max-width: 767px) {
    .sn-outer {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .sn-hero-title {
      font-size: 36px !important;
    }
    .sn-hero-subtitle {
      font-size: 16px !important;
    }
    .sn-origin-grid {
      grid-template-columns: 1fr !important;
    }
    .sn-dept-grid {
      grid-template-columns: 1fr !important;
    }
    .sn-stats-grid {
      grid-template-columns: 1fr !important;
      gap: 32px !important;
    }
    .sn-values-grid {
      grid-template-columns: 1fr !important;
    }
    .sn-cta-title {
      font-size: 36px !important;
    }
    .sn-cta-btn {
      padding: 14px 28px !important;
      font-size: 16px !important;
    }
  }
`;

// ---------------------------------------------------------------------------
// Hook — single section fade
// ---------------------------------------------------------------------------
function useFadeIn(): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

// ---------------------------------------------------------------------------
// Shared token helpers
// ---------------------------------------------------------------------------
const FONT = "Poppins, sans-serif";
const RED = "#FF1414";
const TEXT = "#ECECEC";
const MUTED = "#6B7280";
const CARD_BG = "#0a0a0a";
const CARD_BORDER = "1px solid rgba(255,255,255,0.08)";

// ---------------------------------------------------------------------------
// Section: Origin Story
// ---------------------------------------------------------------------------
function OriginSection() {
  const [ref, visible] = useFadeIn();
  return (
    <section
      style={{ backgroundColor: "#000", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        ref={ref}
        className={`sn-fade sn-outer${visible ? " visible" : ""}`}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        {/* label */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: RED,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          NUESTRA HISTORIA
        </p>

        <div
          className="sn-origin-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left: story text */}
          <div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.2,
                marginBottom: "28px",
                fontFamily: FONT,
              }}
            >
              Por qué existe ICM-IA
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "0",
              }}
            >
              ICM-IA nació de una pregunta simple: ¿por qué las inmobiliarias
              siguen perdiendo leads en 2024? Vimos que el problema no era
              conseguir más consultas — era no tener un sistema que las procese.
              Creamos ICM-IA para cambiar eso.
            </p>
          </div>

          {/* Right: quote block */}
          <div
            style={{
              borderLeft: `4px solid ${RED}`,
              paddingLeft: "32px",
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: TEXT,
                lineHeight: 1.6,
                fontStyle: "italic",
                fontFamily: FONT,
                margin: 0,
              }}
            >
              &ldquo;Más leads no significa más ventas. Significa más ruido.
              Nosotros construimos el sistema que convierte ese ruido en
              cierres.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Founder Card
// ---------------------------------------------------------------------------
function FounderSection() {
  const [ref, visible] = useFadeIn();
  return (
    <section
      style={{
        backgroundColor: "#000",
        paddingTop: "0",
        paddingBottom: "100px",
      }}
    >
      <div
        ref={ref}
        className={`sn-fade sn-outer${visible ? " visible" : ""}`}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: CARD_BG,
            border: CARD_BORDER,
            borderRadius: "20px",
            overflow: "hidden",
            maxWidth: "760px",
            width: "100%",
            display: "flex",
            alignItems: "stretch",
          }}
          className="founder-card"
        >
          {/* Photo */}
          <div
            style={{
              position: "relative",
              width: "300px",
              minHeight: "420px",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/santiago.png"
              alt="Santiago De La Canal"
              fill
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
            {/* Red glow overlay on right edge */}
            <div style={{
              position: "absolute",
              top: 0, right: 0,
              width: "60px",
              height: "100%",
              background: "linear-gradient(to right, transparent, rgba(0,0,0,0.7))",
            }} />
          </div>

          {/* Text */}
          <div style={{ padding: "48px 48px", textAlign: "left" }}>

          {/* Name */}
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: TEXT,
              fontFamily: FONT,
              marginBottom: "6px",
            }}
          >
            Santiago De La Canal
          </h3>

          {/* Role */}
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: RED,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            CEO &amp; Founder · ICM-IA
          </p>

          {/* Bio */}
          <p
            style={{
              fontSize: "15px",
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: "24px",
              marginTop: 0,
            }}
          >
            Especialista en automatización de procesos comerciales para el
            sector inmobiliario. Lideró más de 890 implementaciones de IA en
            agencias de Argentina y Latinoamérica. Su enfoque combina
            tecnología de punta con un entendimiento profundo del ciclo de
            venta inmobiliario.
          </p>

          {/* Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
            {[
              "+890 automatizaciones implementadas",
              "+2.000 consultas gestionadas con IA",
              "IA aplicada a pequeños y grandes negocios",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: RED,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "14px", color: "#9CA3AF" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://www.linkedin.com/in/santiago-de-la-canal/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: "13px",
                color: "#9CA3AF",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,20,20,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ECECEC";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/icm.ia/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: "13px",
                color: "#9CA3AF",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,20,20,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ECECEC";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
          </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .founder-card { flex-direction: column !important; }
          .founder-card > div:first-child { width: 100% !important; height: 320px !important; position: relative !important; }
        }
      `}</style>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Team Departments
// ---------------------------------------------------------------------------
interface Department {
  emoji: string;
  title: string;
  body: string;
}

const departments: Department[] = [
  {
    emoji: "🤖",
    title: "Departamento de Soluciones con IA",
    body: "Diseño e implementación de agentes de inteligencia artificial, flujos de automatización y sistemas de calificación de prospectos.",
  },
  {
    emoji: "📣",
    title: "Departamento de Marketing y Publicidad",
    body: "Estrategias de captación, campañas de adquisición de clientes y propiedades, y gestión de contenido para posicionamiento de marca.",
  },
  {
    emoji: "⚙️",
    title: "Tecnología & Sistemas",
    body: "Integración de CRMs, plataformas de mensajería, portales inmobiliarios y herramientas de análisis en tiempo real.",
  },
];

function DepartmentsSection() {
  const [ref, visible] = useFadeIn();
  return (
    <section
      style={{ backgroundColor: "#000", paddingTop: "0", paddingBottom: "100px" }}
    >
      <div
        className="sn-outer"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        {/* label */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: RED,
            letterSpacing: "3px",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          EL EQUIPO
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 800,
            color: TEXT,
            fontFamily: FONT,
            textAlign: "center",
            marginBottom: "56px",
          }}
        >
          Tres áreas que gestiona el equipo de ICM-IA
        </h2>

        <div
          ref={ref}
          className={`sn-fade sn-dept-grid${visible ? " visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {departments.map((dept) => (
            <div
              key={dept.title}
              style={{
                backgroundColor: CARD_BG,
                border: CARD_BORDER,
                borderRadius: "16px",
                padding: "40px 32px",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "20px",
                  lineHeight: 1,
                }}
              >
                {dept.emoji}
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: TEXT,
                  fontFamily: FONT,
                  marginBottom: "12px",
                }}
              >
                {dept.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: MUTED,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {dept.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Stats Strip
// ---------------------------------------------------------------------------
interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "+890", label: "Automatizaciones" },
  { value: "+10k", label: "Consultas gestionadas con IA" },
  { value: "%80", label: "Tiempo ahorrado" },
];

function StatsStrip() {
  const [ref, visible] = useFadeIn();
  return (
    <section
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "72px",
        paddingBottom: "72px",
      }}
    >
      <div
        ref={ref}
        className={`sn-fade sn-outer${visible ? " visible" : ""}`}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        <div
          className="sn-stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
                padding: "0 32px",
              }}
            >
              <div
                style={{
                  fontSize: "56px",
                  fontWeight: 900,
                  color: RED,
                  fontFamily: FONT,
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: TEXT,
                  fontFamily: FONT,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Values
// ---------------------------------------------------------------------------
interface Value {
  title: string;
  body: string;
}

const values: Value[] = [
  {
    title: "Resultados primero",
    body: "Medimos todo. Si no funciona, lo cambiamos.",
  },
  {
    title: "Velocidad de implementación",
    body: "De la llamada al sistema activo, sin meses de espera.",
  },
  {
    title: "Transparencia total",
    body: "Sin letra chica. Sabés exactamente qué hacemos y por qué.",
  },
  {
    title: "Especialización real estate",
    body: "No somos una agencia genérica. Conocemos el negocio inmobiliario.",
  },
];

function ValuesSection() {
  const [ref, visible] = useFadeIn();
  return (
    <section
      style={{ backgroundColor: "#000", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        className="sn-outer"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: RED,
            letterSpacing: "3px",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          LO QUE NOS DEFINE
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 800,
            color: TEXT,
            fontFamily: FONT,
            textAlign: "center",
            marginBottom: "56px",
          }}
        >
          Nuestros valores
        </h2>

        <div
          ref={ref}
          className={`sn-fade sn-values-grid${visible ? " visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              style={{
                backgroundColor: CARD_BG,
                border: CARD_BORDER,
                borderRadius: "16px",
                padding: "36px 32px",
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
              }}
            >
              {/* Red accent bar */}
              <div
                style={{
                  width: "4px",
                  borderRadius: "2px",
                  background: RED,
                  alignSelf: "stretch",
                  flexShrink: 0,
                }}
              />
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: TEXT,
                    fontFamily: FONT,
                    marginBottom: "8px",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: MUTED,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {v.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: CTA
// ---------------------------------------------------------------------------
function CTASection() {
  const [ref, visible] = useFadeIn();
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "120px",
        paddingBottom: "120px",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Background radial gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,20,20,0.55) 0%, #000 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(255,20,20,0.12) 0%, transparent 60%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        className={`sn-fade sn-outer${visible ? " visible" : ""}`}
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
          textAlign: "center",
        }}
      >
        <h2
          className="sn-cta-title"
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: TEXT,
            lineHeight: 1.1,
            marginBottom: "24px",
            fontFamily: FONT,
          }}
        >
          ¿Querés conocer el equipo?
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: MUTED,
            lineHeight: 1.6,
            maxWidth: "560px",
            margin: "0 auto 48px",
          }}
        >
          Conversemos. Te contamos cómo trabajamos y qué podemos hacer por tu
          inmobiliaria.
        </p>

        <CalButton className="sn-cta-btn">
          Agendar Llamada Gratuita →
        </CalButton>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page root
// ---------------------------------------------------------------------------
export default function SobreNosotrosPage() {
  return (
    <>
      <style>{pageStyles}</style>
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#000",
          fontFamily: FONT,
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* ── 1. Hero ────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "160px",
            paddingBottom: "100px",
            textAlign: "center",
            paddingLeft: "24px",
            paddingRight: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle red glow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "800px",
              height: "400px",
              background:
                "radial-gradient(ellipse, rgba(255,20,20,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Eyebrow */}
          <p
            style={{
              position: "relative",
              fontSize: "11px",
              fontWeight: 700,
              color: RED,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            SOBRE NOSOTROS
          </p>

          {/* Title */}
          <h1
            className="sn-hero-title"
            style={{
              position: "relative",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 900,
              color: TEXT,
              lineHeight: 1.1,
              marginBottom: "28px",
              fontFamily: FONT,
              maxWidth: "820px",
              margin: "0 auto 28px",
            }}
          >
            Somos el equipo que automatiza el{" "}
            <span style={{ color: RED }}>futuro</span> del real estate
          </h1>

          {/* Subtitle */}
          <p
            className="sn-hero-subtitle"
            style={{
              position: "relative",
              fontSize: "20px",
              color: MUTED,
              lineHeight: 1.7,
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            Combinamos inteligencia artificial, marketing y tecnología para que
            las inmobiliarias crezcan sin fricción.
          </p>
        </section>

        {/* ── 2. Origin Story ────────────────────────────────── */}
        <OriginSection />

        {/* ── 3. Founder Card ────────────────────────────────── */}
        <FounderSection />

        {/* ── 4. Team Departments ────────────────────────────── */}
        <DepartmentsSection />

        {/* ── 5. Stats Strip ─────────────────────────────────── */}
        <StatsStrip />

        {/* ── 6. Values ──────────────────────────────────────── */}
        <ValuesSection />

        {/* ── 7. CTA ─────────────────────────────────────────── */}
        <CTASection />

        {/* ── 8. Footer ──────────────────────────────────────── */}
        <Footer />
      </main>
    </>
  );
}
