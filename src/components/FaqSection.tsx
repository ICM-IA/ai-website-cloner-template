"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Cuánto cuesta instalar un sistema solar fotovoltaico?",
    a: "El costo depende del tamaño del sistema requerido según tu consumo. Para hogares, los sistemas suelen partir desde $1.500.000. Realizamos un dimensionamiento gratuito y te damos un presupuesto detallado sin compromiso.",
  },
  {
    q: "¿Cuánto tiempo tarda la instalación?",
    a: "La mayoría de las instalaciones residenciales se completan en 1 a 2 días hábiles. Sistemas comerciales e industriales pueden requerir entre 3 y 7 días, dependiendo del tamaño.",
  },
  {
    q: "¿Cuánto puedo ahorrar en mi factura de luz?",
    a: "En sistemas residenciales, el ahorro promedio es del 70 al 90% de la factura mensual. En sistemas comerciales puede llegar al 85%. El retorno de inversión típico es de 3 a 5 años.",
  },
  {
    q: "¿Qué sucede cuando hay días nublados o lluvia?",
    a: "Los paneles siguen generando energía con luz difusa, aunque con menor eficiencia. Los sistemas on-grid usan la red eléctrica como respaldo, y los sistemas off-grid incluyen baterías de almacenamiento.",
  },
  {
    q: "¿Ofrecen garantía en los equipos y la instalación?",
    a: "Sí. Los paneles tienen garantía de 25 años en producción de energía y 10 años de garantía de producto. Los inversores tienen 5 años. La instalación tiene 1 año de garantía propia de mano de obra.",
  },
  {
    q: "¿Trabajan en toda la región de Brandsen?",
    a: "Sí, cubrimos toda la región de Coronel Brandsen y alrededores incluyendo Alejandro Korn, Lavallol, Chascomús y zonas rurales. Consultanos por tu ubicación específica.",
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
      style={{ background: "rgb(248, 250, 252)", padding: "96px 24px" }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: 0 }}>
        <p
          style={{
            color: "#f59e0b",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          FAQ
        </p>
        <h2
          style={{
            color: "rgb(13, 27, 62)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            margin: 0,
          }}
        >
          Preguntas frecuentes
        </h2>
        <div className="section-divider" style={{ margin: "16px auto 64px" }} />
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
                background: isOpen ? "white" : "transparent",
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
                  if (!isOpen) (e.currentTarget as HTMLButtonElement).style.color = "#f59e0b";
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) (e.currentTarget as HTMLButtonElement).style.color = "rgb(13, 27, 62)";
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
