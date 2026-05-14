"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/funnel/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceData {
  number: string;
  icon: string;
  title: string;
  description: string;
  featuresLeft: string[];
  featuresRight: string[];
  delay: number;
}

interface WhyReasonData {
  title: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: ServiceData[] = [
  {
    number: "01",
    icon: "📊",
    title: "CRM Automatizado + Centralización de RRSS",
    description:
      "Centraliza todos tus canales de comunicación en un único CRM inteligente. Cada mensaje, consulta y lead de WhatsApp, Instagram, portales y email llega al mismo lugar y se gestiona automáticamente.",
    featuresLeft: [
      "WhatsApp Business API",
      "Instagram DM automatizado",
      "Portales inmobiliarios (Zonaprop, Argenprop)",
      "Email marketing integrado",
    ],
    featuresRight: [
      "CRM con etapas de pipeline",
      "Seguimiento automático de leads",
      "Recordatorios y re-engagement",
      "Reportes en tiempo real",
    ],
    delay: 0,
  },
  {
    number: "02",
    icon: "🤖",
    title: "Asistente IA de Calificación de Prospectos",
    description:
      "Un agente de inteligencia artificial disponible 24/7 que responde, filtra y califica cada consulta entrante. Tu equipo solo atiende clientes listos para avanzar.",
    featuresLeft: [
      "Respuesta inmediata 24/7",
      "Preguntas de calificación automáticas",
      "Score de intención de compra",
      "Detección de prospectos calientes",
    ],
    featuresRight: [
      "Nutrición con mensajes personalizados",
      "Handoff inteligente al asesor",
      "Historial completo de conversación",
      "Integración con el CRM",
    ],
    delay: 150,
  },
  {
    number: "03",
    icon: "🎯",
    title: "Servicio de Adquisición de Clientes",
    description:
      "Sistema activo de captación de compradores e inversores. Generamos demanda calificada para tus propiedades con estrategias de IA y publicidad de alto rendimiento.",
    featuresLeft: [
      "Campañas de captación con IA",
      "Segmentación por perfil inversor",
      "Audiencias lookalike automatizadas",
      "Landing pages de alta conversión",
    ],
    featuresRight: [
      "Pipeline de compradores activo",
      "Seguimiento post-consulta",
      "Reportes de costo por lead",
      "Optimización continua de campañas",
    ],
    delay: 300,
  },
  {
    number: "04",
    icon: "🏢",
    title: "Servicio de Adquisición de Propiedades",
    description:
      "Estrategia de captación de carteras inteligente. Identificamos y contactamos propietarios con intención de venta antes que la competencia, sin depender de tu red personal.",
    featuresLeft: [
      "Identificación de propiedades off-market",
      "Base de datos de propietarios potenciales",
      "Secuencias de contacto automatizadas",
      "Detección de señales de venta",
    ],
    featuresRight: [
      "CRM de propietarios potenciales",
      "Expansión de cartera sin esfuerzo manual",
      "Reportes de captación activa",
      "Integración con portales y RRSS",
    ],
    delay: 450,
  },
];

const WHY_REASONS: WhyReasonData[] = [
  {
    title: "Especialización inmobiliaria",
    description:
      "No adaptamos tecnología genérica. Cada flujo fue diseñado para el ciclo de venta inmobiliario.",
  },
  {
    title: "Implementación rápida",
    description:
      "Sin meses de desarrollo. Sistema activo y generando resultados desde el primer momento.",
  },
  {
    title: "Soporte continuo",
    description:
      "No te dejamos solo. Optimizamos el sistema con los datos reales de tu negocio.",
  },
];

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ service, visible }: { service: ServiceData; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        backgroundColor: "#0a0a0a",
        border: `1px solid ${hovered ? "rgba(255,20,20,0.3)" : "rgba(255,255,255,0.08)"}`,
        borderLeft: "4px solid #FF1414",
        borderRadius: "16px",
        padding: "40px",
        overflow: "hidden",
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
        transform: visible
          ? "translateY(0)"
          : "translateY(32px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${service.delay}ms`,
        transitionDuration: "0.6s",
        boxShadow: hovered
          ? "0 8px 40px rgba(255,20,20,0.08)"
          : "0 4px 20px rgba(0,0,0,0.4)",
      }}
    >
      {/* Ghost number */}
      <span
        style={{
          position: "absolute",
          top: "16px",
          right: "24px",
          fontSize: "96px",
          fontWeight: 900,
          color: "rgba(255,20,20,0.06)",
          lineHeight: 1,
          fontFamily: "Poppins, sans-serif",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {service.number}
      </span>

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        {/* Icon container */}
        <div
          style={{
            flexShrink: 0,
            width: "56px",
            height: "56px",
            backgroundColor: "rgba(255,20,20,0.12)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            border: "1px solid rgba(255,20,20,0.2)",
          }}
        >
          {service.icon}
        </div>

        {/* Title + number badge */}
        <div style={{ flex: 1 }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#FF1414",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "6px",
            }}
          >
            Módulo {service.number}
          </span>
          <h2
            style={{
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 700,
              color: "#ECECEC",
              lineHeight: 1.25,
              margin: 0,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {service.title}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "16px",
          color: "#9CA3AF",
          lineHeight: 1.75,
          marginBottom: "32px",
          maxWidth: "680px",
        }}
      >
        {service.description}
      </p>

      {/* Features grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "12px 32px",
          marginBottom: "32px",
        }}
      >
        {/* Left column */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {service.featuresLeft.map((f) => (
            <li
              key={f}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                color: "#D1D5DB",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#FF1414",
                }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Right column */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {service.featuresRight.map((f) => (
            <li
              key={f}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                color: "#D1D5DB",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#FF1414",
                }}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA link */}
      <Link
        href="/contacto"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#FF1414",
          textDecoration: "none",
          borderBottom: "1px solid rgba(255,20,20,0.3)",
          paddingBottom: "2px",
          transition: "border-color 0.2s, gap 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FF1414";
          (e.currentTarget as HTMLAnchorElement).style.gap = "12px";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,20,20,0.3)";
          (e.currentTarget as HTMLAnchorElement).style.gap = "8px";
        }}
      >
        ¿Cómo funciona para vos? →
      </Link>
    </div>
  );
}

// ─── Animated section hook ────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicioPage() {
  const cardsSection = useInView(0.05);
  const whySection = useInView(0.1);
  const ctaSection = useInView(0.2);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        fontFamily: "var(--font-poppins), Poppins, sans-serif",
        color: "#ECECEC",
      }}
    >
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "80px",
          textAlign: "center",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#FF1414",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          NUESTROS SERVICIOS
        </p>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 800,
            color: "#ECECEC",
            lineHeight: 1.1,
            marginBottom: "24px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
          }}
        >
          Cuatro módulos. Un solo sistema.{" "}
          <span style={{ color: "#FF1414" }}>Resultados reales.</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "#6B7280",
            maxWidth: "620px",
            margin: "0 auto",
            lineHeight: 1.75,
          }}
        >
          Cada servicio fue diseñado específicamente para el sector inmobiliario.
          Trabajan juntos para automatizar, captar y convertir.
        </p>

        {/* Decorative divider */}
        <div
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: "#FF1414",
            margin: "40px auto 0",
            borderRadius: "2px",
          }}
        />
      </section>

      {/* ── Service Cards ─────────────────────────────────────────────────── */}
      <section
        ref={cardsSection.ref}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingBottom: "100px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.number}
            service={service}
            visible={cardsSection.visible}
          />
        ))}
      </section>

      {/* ── Why it works ──────────────────────────────────────────────────── */}
      <section
        ref={whySection.ref}
        style={{
          paddingTop: "80px",
          paddingBottom: "100px",
          paddingLeft: "24px",
          paddingRight: "24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#FF1414",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            METODOLOGÍA
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#ECECEC",
              lineHeight: 1.15,
              marginBottom: "56px",
              textAlign: "center",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            ¿Por qué funciona?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {WHY_REASONS.map((reason, idx) => (
              <div
                key={reason.title}
                style={{
                  backgroundColor: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "36px",
                  opacity: whySection.visible ? 1 : 0,
                  transform: whySection.visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${idx * 120}ms, transform 0.6s ease ${idx * 120}ms`,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(255,20,20,0.12)",
                    border: "1px solid rgba(255,20,20,0.2)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ color: "#FF1414", fontWeight: 700, fontSize: "16px" }}>
                    {idx + 1}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#ECECEC",
                    marginBottom: "12px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        ref={ctaSection.ref}
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          paddingLeft: "24px",
          paddingRight: "24px",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(180,10,10,0.22) 0%, rgba(0,0,0,0) 70%), #000",
          textAlign: "center",
          opacity: ctaSection.visible ? 1 : 0,
          transform: ctaSection.visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            color: "#ECECEC",
            lineHeight: 1.15,
            marginBottom: "36px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
          }}
        >
          Tu sistema listo para{" "}
          <span style={{ color: "#FF1414" }}>escalar</span>
        </h2>

        <a
          href="https://cal.com/icm-ia/reconocimiento"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#FF1414",
            color: "#fff",
            fontSize: "17px",
            fontWeight: 700,
            padding: "16px 40px",
            borderRadius: "10px",
            textDecoration: "none",
            boxShadow: "0 0 30px rgba(255,20,20,0.35)",
            transition: "background-color 0.2s, box-shadow 0.2s, transform 0.2s",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "#e00000";
            el.style.boxShadow = "0 4px 40px rgba(255,20,20,0.55)";
            el.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "#FF1414";
            el.style.boxShadow = "0 0 30px rgba(255,20,20,0.35)";
            el.style.transform = "translateY(0)";
          }}
        >
          Agendar Llamada Gratuita →
        </a>

        <p
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "#4B5563",
            letterSpacing: "1px",
          }}
        >
          Sin costo · Sin compromiso · 30 minutos
        </p>
      </section>

      <Footer />
    </main>
  );
}
