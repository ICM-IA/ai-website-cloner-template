"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import CalButton from "@/components/CalButton";

const styles = `
  @keyframes dotPulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(255,20,20,0.4); }
    50% { opacity: 0.8; }
  }
  @keyframes ctaPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255,20,20,0.4); }
    70% { box-shadow: 0 0 0 15px rgba(255,20,20,0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .cta-badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #FF1414;
    animation: dotPulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  .cta-main-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background-color: #FF1414;
    color: white;
    padding: 20px 48px;
    border-radius: 12px;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    animation: ctaPulse 2s ease-in-out infinite;
    transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
    border: none;
    cursor: pointer;
  }
  .cta-main-btn:hover {
    background-color: #e00000;
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(255,20,20,0.5);
  }

  .cta-content {
    opacity: 0;
    transform: translateY(40px);
  }
  .cta-content.visible {
    animation: fadeInUp 0.7s ease forwards;
  }

  @media (max-width: 767px) {
    .cta-outer {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .cta-headline {
      font-size: 40px !important;
    }
    .cta-subtitle {
      font-size: 17px !important;
    }
    .cta-main-btn {
      padding: 16px 32px !important;
      font-size: 17px !important;
    }
    .cta-social-strip {
      gap: 24px !important;
    }
    .cta-reassurance {
      gap: 16px !important;
    }
  }
`;

const reassuranceItems = [
  "Sin costo ni compromiso",
  "Solo 30 minutos",
  "Resultados claros desde el día 1",
];

const clientNames = [
  "Homein",
  "Lion GSC",
  "Grupo RE/MAX",
  "Inmobiliaria San Carlos",
  "NyM Proyectos",
];

export default function CTASection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
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

  return (
    <>
      <style>{styles}</style>
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
              "radial-gradient(ellipse at 50% 0%, rgba(255,20,20,0.6) 0%, #000 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Blurred glow blob */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1200px",
            height: "600px",
            background:
              "radial-gradient(ellipse, rgba(255,20,20,0.15) 0%, transparent 60%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        {/* Main content */}
        <div
          ref={contentRef}
          className={`cta-content cta-outer${visible ? " visible" : ""}`}
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
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255,20,20,0.1)",
              border: "1px solid rgba(255,20,20,0.2)",
              borderRadius: "9999px",
              padding: "8px 20px",
              marginBottom: "40px",
            }}
          >
            <div className="cta-badge-dot" />
            <span
              style={{
                fontSize: "14px",
                color: "#FF1414",
                fontWeight: 600,
              }}
            >
              Disponible ahora — agenda tu lugar
            </span>
          </div>

          {/* Headline */}
          <h2
            className="cta-headline"
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ECECEC",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            ¿Listo para{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #FF1414 0%, #ff6b6b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              transformar
            </span>{" "}
            tu inmobiliaria?
          </h2>

          {/* Subtitle */}
          <p
            className="cta-subtitle"
            style={{
              fontSize: "20px",
              color: "#9CA3AF",
              lineHeight: 1.6,
              marginBottom: "16px",
              maxWidth: "680px",
              margin: "0 auto 16px",
            }}
          >
            Agendá una llamada de reconocimiento gratuita de 30 minutos. Te
            mostramos exactamente cómo el sistema ICM-IA funciona para tu
            negocio, sin tecnicismos.
          </p>

          {/* Reassurance points */}
          <div
            className="cta-reassurance"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              marginBottom: "56px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            {reassuranceItems.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#FF1414", fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: "15px", color: "#9CA3AF" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <CalButton className="cta-main-btn">
            <span>Agendar Llamada Gratuita</span>
            <CalendarDays size={22} />
          </CalButton>

          {/* Trust note */}
          <p
            style={{
              marginTop: "24px",
              fontSize: "14px",
              color: "#4B5563",
            }}
          >
            🔒 Tus datos están seguros. Solo te contactamos para confirmar la
            llamada.
          </p>
        </div>

        {/* Social proof strip */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            marginTop: "80px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "#4B5563",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "24px",
            }}
          >
            SE UNIERON A ICM-IA
          </p>
          <div
            className="cta-social-strip"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {clientNames.map((name) => (
              <span
                key={name}
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#374151",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
