"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "¿Necesito conocimientos técnicos para implementar el sistema?",
    answer:
      "No. Nosotros nos encargamos de toda la implementación técnica. Vos solo necesitás tener tus cuentas de WhatsApp Business, redes sociales y los portales donde publicás. Configuramos todo y capacitamos a tu equipo en menos de una semana.",
  },
  {
    question: "¿Cuánto tiempo tarda la implementación?",
    answer:
      "Empezamos con una llamada de reconocimiento donde entendemos tu operación actual, y de ahí arrancamos la configuración. El sistema queda activo recibiendo y calificando consultas en el menor tiempo posible.",
  },
  {
    question: "¿Se integra con los portales inmobiliarios que ya uso?",
    answer:
      "Sí. Nos integramos con los principales portales del mercado (Zonaprop, Argenprop, MercadoLibre Inmuebles, Properati y otros) además de WhatsApp Business, Instagram, Facebook y email. Si usás algún portal específico que no esté en la lista, lo analizamos en la llamada.",
  },
  {
    question: "¿Funciona para una inmobiliaria pequeña también?",
    answer:
      "Absolutamente. De hecho, las inmobiliarias más pequeñas son las que más se benefician porque no tienen un equipo grande para responder manualmente. El sistema funciona igual de bien para 1 asesor que para 50. El precio y la configuración se adaptan al tamaño de tu operación.",
  },
  {
    question: "¿Qué pasa si el sistema no da los resultados que esperaba?",
    answer:
      "Trabajamos con un período de revisión de 30 días. Si en ese tiempo no ves mejoras concretas en la calificación de prospectos y el ahorro de tiempo, revisamos la configuración juntos hasta que funcione. Nuestro éxito depende del tuyo.",
  },
  {
    question: "¿Puedo empezar con un solo módulo y agregar los demás después?",
    answer:
      "Sí, podés arrancar con el módulo que más urgencia tenga en tu negocio (generalmente el CRM automatizado o la calificación de prospectos) y sumar los demás cuando estés listo. El sistema está diseñado para crecer con vos.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      style={{
        backgroundColor: "#050505",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
        className="faq-container"
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <p
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#FF1414",
              backgroundColor: "rgba(255, 20, 20, 0.08)",
              border: "1px solid rgba(255, 20, 20, 0.2)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "24px",
            }}
          >
            PREGUNTAS FRECUENTES
          </p>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#ECECEC",
              lineHeight: 1.1,
              margin: "0 0 16px 0",
            }}
            className="faq-heading"
          >
            Todo lo que necesitás saber
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#6B7280",
              marginTop: "16px",
              margin: "0",
            }}
          >
            Respondemos las dudas más comunes antes de la llamada.
          </p>
        </div>

        {/* Accordion list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  overflow: "hidden",
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "28px",
                    paddingBottom: "28px",
                    paddingLeft: "0",
                    paddingRight: "0",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: isOpen ? "#FF1414" : "#ECECEC",
                      transition: "color 0.2s",
                      flex: 1,
                      paddingRight: "16px",
                    }}
                    className="faq-question"
                  >
                    {item.question}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: `1px solid ${isOpen ? "rgba(255,20,20,0.4)" : "rgba(255,255,255,0.1)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.2s",
                    }}
                  >
                    <ChevronDown
                      size={16}
                      color={isOpen ? "#FF1414" : "#9CA3AF"}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                    paddingBottom: isOpen ? "28px" : "0",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#6B7280",
                      lineHeight: 1.8,
                      margin: "0",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-container {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .faq-heading {
            font-size: 36px !important;
          }
          .faq-question {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
