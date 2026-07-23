"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Puedo financiar la instalación?",
    a: "Te asesoramos y acompañamos en la gestión de créditos bancarios específicos. Existen líneas de 'Financiación Verde' y préstamos sustentables de diversas entidades bancarias con tasas preferenciales y plazos adaptados a proyectos de energía renovable. Te entregamos toda la carpeta de ingeniería y la documentación técnica necesaria (kWp, generación anual en kWh y estudio de impacto) para que presentes en tu banco y accedas a la mejor tasa disponible.",
  },
  {
    q: "¿Cuánto espacio de techo necesito?",
    a: "Cada kWp (kilovatio pico) instalado requiere entre 6 y 8 m² de superficie aprovechable. Por ejemplo, para una instalación comercial típica de 10 kWp se necesitan entre 60 y 80 m² de techo con buena orientación y libre de sombras.",
  },
  {
    q: "¿Funciona en días nublados?",
    a: "Sí. Los paneles fotovoltaicos continúan generando energía captando la radiación solar difusa. En días nublados, la producción se sitúa entre un 15% y 30% de la potencia nominal (kWp). El sistema On-Grid o Híbrido compensa automáticamente esa diferencia tomando la energía restante de la red eléctrica.",
  },
  {
    q: "¿Qué pasa con el excedente de energía?",
    a: "Si generás más energía de la que consumís, podés inyectarla a la red eléctrica bajo el marco de la Ley 27.424 de Generación Distribuida, obteniendo un crédito a favor en tu factura (Net-Metering). En sistemas con baterías, la prioridad del excedente es mantener cargado tu banco de reserva.",
  },
  {
    q: "¿Cuánto dura la instalación?",
    a: "El montaje de un sistema comercial se completa habitualmente entre 1 y 5 días hábiles, dependiendo de la potencia del proyecto (kWp) y el tipo de cubierta. Coordinamos los trabajos para no interferir en ningún momento con el horario de atención ni con la operativa de tu negocio.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ background: "white", padding: "96px 24px" }}>
      {/* Section header */}
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            color: "#f59e0b",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: "0 0 12px 0",
          }}
        >
          PREGUNTAS FRECUENTES
        </p>
        <h2
          style={{
            color: "rgb(13, 27, 62)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            margin: 0,
          }}
        >
          Todo lo que necesitás saber
        </h2>
        <div
          style={{
            width: 60,
            height: 4,
            background: "linear-gradient(90deg, #f59e0b, #fde68a)",
            borderRadius: 2,
            margin: "16px auto 64px",
          }}
        />
      </div>

      {/* Accordion */}
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                borderBottom: "1px solid rgb(226, 232, 240)",
                borderLeft: isOpen ? "3px solid #f59e0b" : "3px solid transparent",
                paddingLeft: isOpen ? 16 : 0,
                background: isOpen ? "rgb(255, 251, 235)" : "transparent",
                borderRadius: isOpen ? "0 0 8px 8px" : undefined,
                transition: "all 0.3s ease",
              }}
            >
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className={cn("group flex w-full items-center justify-between text-left")}
                style={{
                  padding: "24px 0",
                  fontSize: 16,
                  fontWeight: 700,
                  color: isOpen ? "#f59e0b" : "rgb(13, 27, 62)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (!isOpen)
                    (e.currentTarget as HTMLButtonElement).style.color = "#f59e0b";
                }}
                onMouseLeave={(e) => {
                  if (!isOpen)
                    (e.currentTarget as HTMLButtonElement).style.color = "rgb(13, 27, 62)";
                }}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  style={{
                    flexShrink: 0,
                    marginLeft: 12,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>

              {/* Animated answer */}
              <div
                style={{
                  maxHeight: isOpen ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "rgb(71, 85, 105)",
                    padding: "0 0 24px 0",
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
