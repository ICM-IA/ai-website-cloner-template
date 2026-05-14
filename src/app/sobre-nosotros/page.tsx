"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/funnel/Footer";

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
            padding: "56px 64px",
            textAlign: "center",
            maxWidth: "540px",
            width: "100%",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FF1414, #8B0000)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontFamily: FONT,
              fontSize: "28px",
              fontWeight: 800,
              color: "white",
              flexShrink: 0,
            }}
          >
            SD
          </div>

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
              margin: 0,
            }}
          >
            Especialista en automatización de procesos comerciales para el
            sector inmobiliario. Lideró más de 890 implementaciones de IA en
            agencias de Argentina y Latinoamérica.
          </p>
        </div>
      </div>
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
    title: "Departamento IA",
    body: "Diseño e implementación de agentes de inteligencia artificial, flujos de automatización y sistemas de calificación de prospectos.",
  },
  {
    emoji: "📣",
    title: "Marketing y Publicidad",
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
          Tres áreas, un solo sistema
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
  { value: "31", label: "Clientes" },
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
    body: "De la llamada al sistema activo en 7 días.",
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

        <a
          href="https://cal.com/icm-ia/reconocimiento"
          target="_blank"
          rel="noopener noreferrer"
          className="sn-cta-btn"
        >
          Agendar Llamada Gratuita →
        </a>
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
