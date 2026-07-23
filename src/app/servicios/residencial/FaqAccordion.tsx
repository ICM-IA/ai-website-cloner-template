"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Cuántos paneles necesito para mi casa?",
    a: "Depende de tu consumo mensual en kilovatios-hora (kWh) y del perfil de uso de tu hogar. Para viviendas promedio con consumos de 300 kWh a 800 kWh mensuales, se suelen instalar sistemas de 4 a 16 paneles (de 550 Wp a 620 Wp cada uno). Cada caso es único: realizamos un dimensionamiento personalizado analizando tu factura eléctrica para determinar la potencia exacta (kWp) que necesitás.",
  },
  {
    q: "¿Puedo instalar paneles si tengo un techo de chapa?",
    a: "¡Sí, totalmente! Instalamos sobre techos de chapa (trapezoidal o sinusoidal), losa y tejas. Utilizamos estructuras de aluminio anodizado con anclajes y sellados de grado técnico que garantizan la máxima resistencia mecánica frente al viento y la total estanqueidad del techo, evitando cualquier tipo de filtración de agua.",
  },
  {
    q: "¿Necesito permiso municipal o medidor bidireccional para instalar?",
    a: "No se requiere permiso municipal de obra. En cuanto a la conexión eléctrica, cada caso es diferente y se analiza a medida: Si tu objetivo es vender excedentes a la red bajo la Ley de Generación Distribuida (Ley 27.424), te acompañamos y asesoramos en toda la tramitación técnica para la solicitud del medidor bidireccional ante la distribuidora eléctrica. En muchos hogares no es necesario el medidor bidireccional, ya que la prioridad es consumir directamente la energía generada o almacenarla en baterías para respaldo ante cortes, logrando independencia sin trámites complejos.",
  },
  {
    q: "¿Qué pasa si genero más energía de la que consumo?",
    a: "Depende del tipo de configuración elegida para tu hogar: Con banco de baterías (Sistema Híbrido o Aislado): La energía excedente se utiliza primero para recargar tus baterías al 100%, asegurando autonomía ante cortes de luz o para consumir de noche. Conectado a la red (Sistema On-Grid): Si contás con medidor bidireccional habilitado, la energía sobrante durante las horas de sol se exporta a la red eléctrica y la distribuidora te la compensa como un crédito a favor en tu factura. Con limitador de inyección: Si no tenés medidor bidireccional, el inversor inteligente autorregula de forma automática la producción para generar únicamente lo que tu casa necesita en ese instante.",
  },
  {
    q: "¿Cuánto tarda en pagarse la inversión?",
    a: "El retorno de inversión típico (Payback) para un sistema residencial se sitúa entre 3 y 5 años, dependiendo de la tarifa eléctrica de tu zona, la potencia instalada (kWp) y el nivel de autoconsumo diario. Teniendo en cuenta que los paneles fotovoltaicos cuentan con una degradación mínima de 0,5% anual (garantizando más del 80% de rendimiento a los 25 años y una vida útil superior a los 30 a 35 años), disfrutás de energía limpia a costo prácticamente cero por décadas.",
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
