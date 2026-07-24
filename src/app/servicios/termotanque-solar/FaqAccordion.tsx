"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Funciona en invierno?",
    a: "Sí, funciona durante todo el año. Los tubos de vacío de borosilicato absorben la radiación sin perder calor por la temperatura exterior. El equipo cubre en promedio el 80% anual de agua caliente. En días invernales de lluvia continua (el 20% restante), el agua entra precalentada y se apoya en tu calefón/termotanque actual o en una resistencia eléctrica auxiliar.",
  },
  {
    q: "¿Cuánta agua caliente produce por día?",
    a: "Depende del modelo instalado (comercializamos de 100L, 150L, 200L, 250L, 300L y 360L). Calculamos un estándar de 50 Litros de agua caliente diarios por persona. Por ejemplo, un modelo de 200 Litros es el ideal para una familia de 4 integrantes.",
  },
  {
    q: "¿Qué mantenimiento requiere?",
    a: "El mantenimiento es mínimo. Consiste principalmente en la revisión y reemplazo periódico del ánodo de magnesio (protección anticorrosiva contra el sarro), junto con la limpieza de los tubos y control de conexiones.",
  },
  {
    q: "¿Puedo reemplazar mi termotanque o calefón actual?",
    a: "Sí, podés reemplazarlo por completo o dejar tu equipo actual conectado en serie como apoyo. De esta forma, el termotanque solar entrega el agua ya caliente y tu equipo a gas/eléctrico solo encenderá si se requiere en días muy nublados.",
  },
  {
    q: "¿Cuánto tiempo tarda la instalación?",
    a: "La instalación se completa en el día (entre 4 y 8 horas). Incluye montaje, conexión hidráulica, pruebas de estanqueidad y puesta en marcha.",
  },
  {
    q: "¿Puedo instalar el termotanque solar yo mismo?",
    a: "¡Sí! Si tenés conocimientos o experiencia en plomería o gasitería, podés realizar la instalación sin problemas. Al adquirir el equipo te entregamos el manual técnico completo de montaje, la guía de conexión hidráulica y contás con nuestro asesoramiento técnico personalizado para resolver cualquier duda durante la puesta en marcha.",
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
          Todo sobre el termotanque solar
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
