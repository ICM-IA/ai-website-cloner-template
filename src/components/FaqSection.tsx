"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cuánto cuesta instalar un sistema solar fotovoltaico?",
    answer:
      "El costo varía según la potencia requerida y el tipo de sistema (on-grid o off-grid). Realizamos un dimensionamiento gratuito para brindarte el presupuesto más ajustado a tus necesidades.",
  },
  {
    question: "¿Cuánto tiempo tarda la instalación?",
    answer:
      "La mayoría de las instalaciones residenciales se completan en 1 a 2 días. Sistemas más grandes para comercios o industrias pueden requerir entre 3 y 7 días.",
  },
  {
    question: "¿Ofrecen garantía en los equipos y la instalación?",
    answer:
      "Sí, todos nuestros equipos cuentan con garantía del fabricante y brindamos garantía propia sobre la instalación. Contáctanos para más detalles según el equipo elegido.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="preguntas-frecuentes"
      style={{
        background: "white",
        padding: "64px 24px",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "rgb(22, 24, 83)",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Preguntas frecuentes
        </h2>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  borderBottom: "1px solid rgb(204, 204, 204)",
                  padding: "20px 0",
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className={cn("flex w-full items-center justify-between text-left")}
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "rgb(33, 37, 41)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      flexShrink: 0,
                      marginLeft: "12px",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>

                {isOpen && (
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "rgb(89, 89, 89)",
                      padding: "12px 0",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
