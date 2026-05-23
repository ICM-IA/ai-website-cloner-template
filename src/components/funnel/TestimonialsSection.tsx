"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  initials: string;
  avatarBg: string;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    initials: "MG",
    avatarBg: "#FF1414",
    name: "Marcos González",
    role: "Dueño · Inmobiliaria González",
    quote:
      "Antes mi equipo perdía 3 horas por día respondiendo consultas repetitivas. Con ICM-IA, el 90% se responde solo. Ahora nos enfocamos en cerrar, no en filtrar.",
  },
  {
    initials: "LC",
    avatarBg: "#7C3AED",
    name: "Laura Castillo",
    role: "Directora Comercial · RE/MAX Centro",
    quote:
      "Implementamos el sistema en una semana y los primeros leads calificados llegaron ese mismo día. Pasamos de perder el 40% de consultas fuera de horario a no perder ninguna.",
  },
  {
    initials: "RP",
    avatarBg: "#059669",
    name: "Rodrigo Pereyra",
    role: "CEO · Grupo Pereyra Propiedades",
    quote:
      "Teníamos miedo de que la IA sonara robótica. Es todo lo contrario: los clientes no saben que hablan con un sistema. Las conversiones subieron un 35% en el primer mes.",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            [0, 200, 400].forEach((delay, i) => {
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
        backgroundColor: "#000",
        paddingTop: "120px",
        paddingBottom: "120px",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes fadeInUpTestimonial {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .testimonial-card {
          background: #0D0D0D;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s;
          opacity: 0;
          transform: translateY(30px);
          display: flex;
          flex-direction: column;
        }

        .testimonial-card.visible {
          animation: fadeInUpTestimonial 0.6s ease forwards;
        }

        .testimonial-card:hover {
          border-color: rgba(255,20,20,0.2);
          box-shadow: 0 8px 40px rgba(255,20,20,0.08);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonials-section-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>

      <div
        className="testimonials-section-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "rgba(255,20,20,0.12)",
              color: "#FF1414",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: "100px",
              border: "1px solid rgba(255,20,20,0.25)",
            }}
          >
            TESTIMONIOS
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "48px",
            fontWeight: 800,
            fontFamily: "Poppins, sans-serif",
            margin: "0 0 16px 0",
            lineHeight: 1.15,
          }}
        >
          Lo que dicen nuestros clientes
        </h2>

        {/* Subtitle */}
        <p
          style={{
            textAlign: "center",
            color: "#6B7280",
            fontSize: "18px",
            margin: "0 0 64px 0",
            lineHeight: 1.6,
          }}
        >
          Resultados reales de inmobiliarias que ya operan con ICM-IA
        </p>

        {/* Cards grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card${visibleCards[i] ? " visible" : ""}`}
              style={
                visibleCards[i]
                  ? { animationDelay: "0ms" }
                  : {}
              }
            >
              {/* Stars */}
              <div
                style={{
                  color: "#FF1414",
                  fontSize: "16px",
                  marginBottom: "20px",
                  letterSpacing: "2px",
                }}
              >
                ★★★★★
              </div>

              {/* Quote */}
              <p
                style={{
                  color: "#D1D5DB",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  marginBottom: "28px",
                  flexGrow: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
              />

              {/* Author row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginTop: "20px",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: t.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>

                {/* Name & role */}
                <div>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "15px",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      color: "#6B7280",
                      fontSize: "13px",
                      lineHeight: 1.4,
                      marginTop: "2px",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
