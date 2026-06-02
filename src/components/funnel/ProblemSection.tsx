"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, Clock, TrendingDown } from "lucide-react";

interface PainCard {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const painCards: PainCard[] = [
  {
    icon: <MessageSquare size={24} color="#FF1414" />,
    title: "Leads dispersos sin seguimiento",
    body: "WhatsApp, Instagram, portales y email generan consultas que se pierden sin un sistema que las centralice y responda automáticamente.",
  },
  {
    icon: <Clock size={24} color="#FF1414" />,
    title: "Horas perdidas calificando manualmente",
    body: "Tu equipo dedica tiempo valioso a contactar prospectos que nunca van a comprar, mientras los clientes serios esperan respuesta.",
  },
  {
    icon: <TrendingDown size={24} color="#FF1414" />,
    title: "Carteras que no crecen solas",
    body: "Captar nuevas propiedades depende 100% de tu red personal. Sin un sistema de adquisición activa, el crecimiento tiene techo.",
  },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger card animations: 0ms, 150ms, 300ms
            [0, 150, 300].forEach((delay, i) => {
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
      { threshold: 0.15 }
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
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pain-card {
          background: #0D0D0D;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .pain-card.visible {
          animation: fadeInUp 0.6s ease forwards;
        }

        .pain-card:hover {
          border-color: rgba(255,20,20,0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(255,20,20,0.08);
        }

        .pain-card.visible:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
          .problem-container {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .problem-heading {
            font-size: 36px !important;
          }
        }
      `}</style>

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,20,20,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="problem-container"
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
            EL PROBLEMA
          </p>
          <h2
            className="problem-heading"
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "#ECECEC",
              lineHeight: 1.1,
              marginBottom: "16px",
              margin: "0 0 16px",
            }}
          >
            Las inmobiliarias pierden oportunidades{" "}
            <span style={{ color: "#FF1414" }}>todos los días</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#6B7280",
              marginTop: "16px",
            }}
          >
            Y la mayoría no sabe cuánto le está costando.
          </p>
        </div>

        {/* Pain cards */}
        <div
          className="problem-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {painCards.map((card, i) => (
            <div
              key={i}
              className={`pain-card${visibleCards[i] ? " visible" : ""}`}
              style={
                visibleCards[i]
                  ? { animationDelay: "0ms" }
                  : {}
              }
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(to right, #FF1414, transparent)",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255,20,20,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                {card.icon}
              </div>

              {/* Content */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#ECECEC",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#6B7280",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Transition into solution */}
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <p
            style={{
              fontSize: "20px",
              color: "#ECECEC",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Existe una solución.
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "#FF1414",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Y nosotros ya la tenemos.
          </p>
        </div>
      </div>
    </section>
  );
}
