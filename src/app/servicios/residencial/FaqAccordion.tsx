"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Cuántos paneles necesito para mi casa?",
    a: "Depende de tu consumo mensual en kilovatios-hora (kWh). Para una vivienda promedio con un consumo mensual de entre 300 kWh y 500 kWh, generalmente se requiere un sistema de 4 a 8 paneles (de 470 W a 620 W cada uno). Realizamos un dimensionamiento gratuito y a medida analizando tu factura eléctrica para garantizar la potencia exacta que necesitás.",
  },
  {
    q: "¿Puedo instalar paneles si tengo un techo de chapa?",
    a: "¡Sí, totalmente! Instalamos sobre techos de chapa (trapezoidal o sinusoidal), losa y tejas. Utilizamos estructuras de aluminio anodizado con anclajes y sellados de alta calidad técnica que garantizan la máxima resistencia mecánica y la total estanqueidad del techo, evitando cualquier tipo de filtración de agua.",
  },
  {
    q: "¿Necesito permiso municipal para instalar?",
    a: "No se requiere un permiso municipal de obra, pero si optás por un sistema conectado a la red (On-Grid) o un sistema Híbrido, gestionamos el trámite de habilitación técnica y medidor bidireccional ante tu distribuidora eléctrica local bajo el marco de la Ley de Generación Distribuida. Nosotros nos encargamos de todo el proceso de certificación.",
  },
  {
    q: "¿Qué pasa si genero más energía de la que consumo?",
    a: "Tanto con un sistema On-Grid (conectado a la red) como con un sistema Híbrido (con baterías de respaldo), tenés la posibilidad de inyectar los excedentes de energía a la red de tu distribuidora eléctrica. En los municipios y provincias donde rige la Ley de Generación Distribuida (Ley 27.424), esos excedentes inyectados se compensan a tu favor en la factura. En el caso del sistema híbrido, el excedente solar primero recarga tus baterías para garantizarte autonomía ante cortes de luz y, una vez completada la carga, el sobrante se inyecta a la red eléctrica.",
  },
  {
    q: "¿Cuánto tarda en pagarse la inversión?",
    a: "En general, el retorno de inversión (Payback) se sitúa entre 2 y 7 años, dependiendo de la escala del sistema (potencia en kWp), el perfil de consumo de la vivienda y la tarifa vigente de la energía eléctrica en tu zona. Teniendo en cuenta que los paneles fotovoltaicos tienen una vida útil certificada superior a los 25 años, una vez amortizado el equipo disfrutás de energía limpia y prácticamente gratuita durante más de dos décadas.",
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
            marginBottom: 12,
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
