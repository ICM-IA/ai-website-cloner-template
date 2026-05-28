"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import CalButton from "@/components/CalButton";

const styles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .step-card {
    opacity: 0;
    transform: translateY(40px);
  }
  .step-card.visible {
    animation: fadeInUp 0.6s ease forwards;
  }
  .how-cta-link {
    border-bottom: 1px solid rgba(255,20,20,0.4);
    transition: border-color 0.2s, color 0.2s;
  }
  .how-cta-link:hover {
    border-color: #FF1414;
    color: #FF1414;
  }

  @media (max-width: 767px) {
    .hiw-outer {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .hiw-steps-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 56px !important;
    }
    .hiw-connector-line {
      display: none !important;
    }
    .hiw-header {
      margin-bottom: 56px !important;
    }
    .hiw-headline {
      font-size: 36px !important;
    }
  }
`;

interface Step {
  paso: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  delay: number;
}

const steps: Step[] = [
  {
    paso: "PASO 01",
    icon: <Phone color="#FF1414" size={32} />,
    title: "Llamada de Reconocimiento",
    body: "Una charla de 20 minutos para entender tu operación, tus canales y dónde están los cuellos de botella. Sin compromiso.",
    delay: 0,
  },
  {
    paso: "PASO 02",
    icon: <Lightbulb color="#FF1414" size={32} />,
    title: "Presentación de Soluciones",
    body: "Te mostramos exactamente qué vamos a implementar, cómo va a funcionar en tu inmobiliaria y qué resultados podés esperar.",
    delay: 150,
  },
  {
    paso: "PASO 03",
    icon: <Rocket color="#FF1414" size={32} />,
    title: "Onboarding",
    body: "Instalamos y configuramos el sistema completo a medida. Integración con tus canales, CRM y herramientas existentes.",
    delay: 300,
  },
  {
    paso: "PASO 04",
    icon: <TrendingUp color="#FF1414" size={32} />,
    title: "Piloto Automático",
    body: "Tu equipo se enfoca en cerrar operaciones. La IA filtra, nutre, califica y da seguimiento 24/7 sin intervención manual.",
    delay: 450,
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisible((prev) => {
                  const next = [...prev];
                  next[index] = true;
                  return next;
                });
              }, steps[index].delay);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section
        ref={sectionRef}
        style={{
          backgroundColor: "#000",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <div
          className="hiw-outer"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "80px",
            paddingRight: "80px",
          }}
        >
          {/* Header */}
          <div
            className="hiw-header"
            style={{ textAlign: "center", marginBottom: "96px" }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#FF1414",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              EL PROCESO
            </p>
            <h2
              className="hiw-headline"
              style={{
                fontSize: "52px",
                fontWeight: 800,
                color: "#ECECEC",
                lineHeight: 1.1,
                margin: "0 0 16px",
              }}
            >
              De la consulta al cierre,{" "}
              <span style={{ color: "#FF1414" }}>en automático</span>
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#6B7280",
                marginTop: "16px",
              }}
            >
              Implementamos el sistema completo adaptado a tu operación.
            </p>
          </div>

          {/* Steps grid */}
          <div
            className="hiw-steps-grid"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
            }}
          >
            {/* Connecting line */}
            <div
              className="hiw-connector-line"
              style={{
                position: "absolute",
                top: "56px",
                left: "calc(12.5% + 40px)",
                right: "calc(12.5% + 40px)",
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, rgba(255,20,20,0.3) 20%, rgba(255,20,20,0.3) 80%, transparent)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {steps.map((step, i) => (
              <div
                key={step.paso}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`step-card${visible[i] ? " visible" : ""}`}
                style={{
                  textAlign: "center",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  position: "relative",
                  zIndex: 1,
                  animationDelay: `${step.delay}ms`,
                }}
              >
                {/* Step label */}
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#FF1414",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  {step.paso}
                </div>

                {/* Icon circle */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,20,20,0.3)",
                    backgroundColor: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 32px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {step.icon}
                </div>

                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#ECECEC",
                    marginBottom: "12px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                    maxWidth: "280px",
                    margin: "0 auto",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: "center", marginTop: "80px" }}>
            <p
              style={{
                fontSize: "20px",
                color: "#ECECEC",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              ¿Querés ver cómo funciona para tu inmobiliaria?
            </p>
            <CalButton
              className="how-cta-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#FF1414",
                fontSize: "16px",
                fontWeight: 600,
                paddingBottom: "2px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              Agendá tu llamada ahora →
            </CalButton>
          </div>
        </div>
      </section>
    </>
  );
}
