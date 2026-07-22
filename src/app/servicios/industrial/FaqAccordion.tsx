"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Cuál es la potencia mínima para proyectos industriales?",
    a: "Diseñamos e instalamos soluciones industriales a partir de 50 kW de potencia nominal. Para demandas menores o establecimientos PyME, contamos con soluciones dentro de nuestra línea comercial. Cada proyecto se analiza de forma personalizada según el perfil de consumo energético y la infraestructura disponible.",
  },
  {
    q: "¿Cuánto tiempo lleva un proyecto industrial?",
    a: "El plazo promedio para un proyecto llave en mano varía entre 60 y 120 días, según la escala del sistema (50 kW a 1 MW) y la complejidad del montaje. Esto incluye la ingeniería de detalle, la provisión de equipos de primera línea, el montaje mecánico/eléctrico y la puesta en marcha técnica.",
  },
  {
    q: "¿Trabajan con sistemas en tierra o solo en techo?",
    a: "Realizamos instalaciones tanto en cubiertas industriales (con previo análisis de carga estructural) como en suelo mediante estructuras fijas o aleros solares (carports). Seleccionamos la alternativa que garantice el mejor aprovechamiento de la radiación solar y optimice la superficie disponible en el predio.",
  },
  {
    q: "¿Cómo funciona la conexión a la red para industrias?",
    a: "Nuestras instalaciones operan bajo el esquema de Generación Distribuida (Ley 27.424 y normativas vigentes). El sistema genera energía en sincronismo con la red eléctrica local: la planta consume prioritariamente la energía solar generada, reduciendo la compra a la red. Si hay excedentes, pueden inyectarse según la regulación del distribuidor eléctrico de la zona.",
  },
  {
    q: "¿Ofrecen financiación para proyectos de esta escala?",
    a: "Sí. Asesoramos en la gestión de líneas de crédito preferenciales para Eficiencia Energética y Energías Renovables disponibles en el sistema bancario, así como opciones de leasing de equipamiento. Diseñamos la propuesta económica buscando que el ahorro generado en la factura eléctrica contribuya directamente a amortizar la inversión.",
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
          Consultas frecuentes sobre instalaciones industriales
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
