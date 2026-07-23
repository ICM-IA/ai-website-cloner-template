"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Cuánto cuesta instalar un sistema solar fotovoltaico?",
    a: "El costo de una instalación varía según el tipo de sistema (On-Grid, Off-Grid o Híbrido) y la demanda energética diaria de tu hogar, comercio o campo. Realizamos un dimensionamiento de ingeniería a medida sin costo para entregarte una propuesta optimizada.",
  },
  {
    q: "¿Cuánto tiempo tarda la instalación?",
    a: "Un sistema residencial estándar se ejecuta habitualmente en 1 a 2 días hábiles. Para proyectos comerciales e industriales, el montaje suele requerir entre 2 y 7 días, según la potencia del campo fotovoltaico. Sistemas de bombeo solar y termotanques solares la instalación se realiza en el día.",
  },
  {
    q: "¿Cuánto puedo ahorrar en mi factura de luz?",
    a: "En sistemas residenciales y comerciales podés reducir entre un 70% y un 90% el consumo de la red. En sistemas conectados a la red (On-Grid/Hibridos) bajo la Ley de Generación Distribuida, también podés inyectar y vender los excedentes no consumidos.",
  },
  {
    q: "¿Qué sucede cuando hay días nublados o de lluvia?",
    a: "Los paneles solares continúan generando energía captando la radiación solar difusa, aunque a menor rendimiento. En sistemas On-Grid la red pública compensa automáticamente la diferencia, mientras que en sistemas Híbridos u Off-Grid el suministro está cubierto por el banco de baterías.",
  },
  {
    q: "¿Ofrecen garantía en los equipos y la instalación?",
    a: "Sí, trabajamos con marcas certificadas de primer nivel. Los paneles solares cuentan con hasta 15 años de garantía de fabricación y 25 a 30 años de producción lineal garantizada. Los inversores y baterías incluyen de 5 a 10 años de garantía de fábrica, y nuestra mano de obra e ingeniería cuenta con 1 año de garantía escrita.",
  },
  {
    q: "¿Trabajan en todo el país?",
    a: "Sí, realizamos ingeniería, provisión de equipos y montajes en cualquier punto de Argentina. Escribinos con tu ubicación para analizar tu proyecto.",
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
