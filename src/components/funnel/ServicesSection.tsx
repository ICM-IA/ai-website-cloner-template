"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, Bot, Users, Building2 } from "lucide-react";

interface ServiceFeature {
  text: string;
}

interface Service {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: ServiceFeature[];
}

const services: Service[] = [
  {
    number: "01",
    icon: <Layers size={28} color="#FF1414" />,
    title: "CRM Automatizado + Centralización de RRSS",
    description:
      "Todos tus canales unificados: WhatsApp, Instagram, portales inmobiliarios y email en un solo sistema que responde, registra y hace seguimiento automáticamente.",
    features: [
      { text: "Integración con WhatsApp Business" },
      { text: "Bandeja unificada de todos los canales" },
      { text: "Seguimiento automático sin intervención" },
      { text: "Reportes en tiempo real" },
    ],
  },
  {
    number: "02",
    icon: <Bot size={28} color="#FF1414" />,
    title: "Asistente IA de Calificación de Prospectos",
    description:
      "Un agente de inteligencia artificial que filtra, nutre y califica cada consulta entrante. Tu equipo solo habla con clientes listos para avanzar.",
    features: [
      { text: "Calificación automática 24/7" },
      { text: "Nutrición con mensajes personalizados" },
      { text: "Score de intención de compra" },
      { text: "Handoff inteligente al asesor" },
    ],
  },
  {
    number: "03",
    icon: <Users size={28} color="#FF1414" />,
    title: "Servicio de Adquisición de Clientes",
    description:
      "Sistema activo de captación de compradores e inversores. Generamos demanda calificada para tus propiedades con estrategias de IA.",
    features: [
      { text: "Campañas de captación con IA" },
      { text: "Segmentación por perfil inversor" },
      { text: "Pipeline de compradores activo" },
      { text: "Reportes de conversión detallados" },
    ],
  },
  {
    number: "04",
    icon: <Building2 size={28} color="#FF1414" />,
    title: "Servicio de Adquisición de Propiedades",
    description:
      "Estrategia de captación de carteras inteligente. Identificamos y contactamos propietarios con intención de venta antes que la competencia.",
    features: [
      { text: "Identificación de propiedades off-market" },
      { text: "Secuencias de contacto automatizadas" },
      { text: "CRM de propietarios potenciales" },
      { text: "Expansión de cartera sin esfuerzo manual" },
    ],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // 4 cards grouped in 2 rows: [row0card0, row0card1, row1card0, row1card1]
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Top row first (cards 0,1), then bottom row (cards 2,3)
            [0, 0, 200, 200].forEach((delay, i) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, delay);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#050505",
        paddingTop: "120px",
        paddingBottom: "120px",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes fadeInUpService {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card {
          background: #0D0D0D;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .service-card.visible {
          animation: fadeInUpService 0.6s ease forwards;
        }

        .service-card:hover {
          border-color: rgba(255,20,20,0.25);
          box-shadow: 0 0 60px rgba(255,20,20,0.06);
          transform: translateY(-4px);
        }

        .service-card.visible:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-container {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .services-heading {
            font-size: 36px !important;
          }
          .service-card {
            padding: 32px !important;
          }
        }
      `}</style>

      <div
        className="services-container"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#FF1414",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            NUESTROS SERVICIOS
          </p>
          <h2
            className="services-heading"
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "#ECECEC",
              lineHeight: 1.1,
              marginBottom: "16px",
              margin: "0 0 16px",
            }}
          >
            El sistema completo para{" "}
            <span style={{ color: "#FF1414" }}>escalar tu inmobiliaria</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#6B7280",
              marginTop: "16px",
              maxWidth: "600px",
              margin: "16px auto 0",
            }}
          >
            Cuatro módulos que trabajan juntos para automatizar, captar y convertir.
          </p>
        </div>

        {/* 2×2 grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-card${visibleCards[i] ? " visible" : ""}`}
            >
              {/* Corner number */}
              <span
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "28px",
                  fontSize: "64px",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.03)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {service.number}
              </span>

              {/* Icon container */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(255,20,20,0.2), rgba(255,20,20,0.05))",
                  border: "1px solid rgba(255,20,20,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#ECECEC",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                {service.description}
              </p>

              {/* Feature bullets */}
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {service.features.map((feature, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        color: "#FF1414",
                        fontSize: "16px",
                        flexShrink: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#9CA3AF",
                        lineHeight: 1.5,
                      }}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
