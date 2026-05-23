"use client";

import { useEffect, useRef, useState } from "react";

const RED = "#FF1414";

const beforeItems = [
  "Respondés consultas manualmente todo el día",
  "Leads que llegan a la noche se pierden",
  "El equipo saturado con preguntas repetitivas",
  "No sabés qué prospecto vale la pena llamar",
  "Cada portal necesita atención separada",
  "Clientes sin respuesta se van a la competencia",
  "Crecés contratando más personal",
];

const afterItems = [
  "El sistema responde al instante, 24/7",
  "Ningún lead se pierde, a ninguna hora",
  "Tu equipo solo habla con prospectos calificados",
  "Cada lead llega puntuado y listo para cerrar",
  "Todos los canales centralizados en uno",
  "Seguimiento automático sin intervención humana",
  "Escalás sin sumar costos fijos",
];

export default function BeforeAfterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ backgroundColor: "#050505", paddingTop: "120px", paddingBottom: "120px" }}>
      <div
        ref={ref}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
        className="ba-wrapper"
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{
            display: "inline-block",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: RED,
            backgroundColor: "rgba(255,20,20,0.08)",
            border: "1px solid rgba(255,20,20,0.2)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "20px",
          }}>
            EL ANTES Y EL DESPUÉS
          </p>
          <h2 style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "#ECECEC",
            lineHeight: 1.1,
            margin: "0 0 16px 0",
            fontFamily: "Poppins, sans-serif",
          }} className="ba-heading">
            ¿Cómo es tu operación{" "}
            <span style={{ color: RED }}>hoy</span>
            {" "}vs. con ICM-IA?
          </h2>
          <p style={{ fontSize: "17px", color: "#6B7280", margin: 0 }}>
            La diferencia entre crecer agotado o crecer en automático.
          </p>
        </div>

        {/* Two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="ba-grid">

          {/* BEFORE column */}
          <div style={{
            backgroundColor: "#0A0A0A",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "20px",
            overflow: "hidden",
          }}>
            {/* Column header */}
            <div style={{
              padding: "20px 32px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.05)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px",
              }}>😰</div>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#6B7280" }}>
                Sin ICM-IA
              </span>
            </div>

            {/* Items */}
            <div style={{ padding: "12px 0" }}>
              {beforeItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "14px 32px",
                    borderBottom: i < beforeItems.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    opacity: visible ? 1 : 0,
                    transition: `opacity 0.4s ease ${0.05 * i + 0.2}s`,
                  }}
                >
                  <span style={{
                    width: "20px", height: "20px", borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", flexShrink: 0, marginTop: "1px",
                    color: "#6B7280",
                  }}>✕</span>
                  <span style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER column */}
          <div style={{
            backgroundColor: "#0A0A0A",
            border: "1px solid rgba(255,20,20,0.15)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 0 40px rgba(255,20,20,0.05)",
          }}>
            {/* Column header */}
            <div style={{
              padding: "20px 32px",
              borderBottom: "1px solid rgba(255,20,20,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(90deg, rgba(255,20,20,0.06) 0%, transparent 100%)",
            }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%",
                backgroundColor: "rgba(255,20,20,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px",
              }}>🚀</div>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#ECECEC" }}>
                Con ICM-IA
              </span>
            </div>

            {/* Items */}
            <div style={{ padding: "12px 0" }}>
              {afterItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "14px 32px",
                    borderBottom: i < afterItems.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    opacity: visible ? 1 : 0,
                    transition: `opacity 0.4s ease ${0.05 * i + 0.3}s`,
                  }}
                >
                  <span style={{
                    width: "20px", height: "20px", borderRadius: "50%",
                    backgroundColor: "rgba(255,20,20,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", flexShrink: 0, marginTop: "1px",
                    color: RED, fontWeight: 700,
                  }}>✓</span>
                  <span style={{ fontSize: "15px", color: "#D1D5DB", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ba-wrapper { padding-left: 24px !important; padding-right: 24px !important; }
          .ba-heading { font-size: 32px !important; }
          .ba-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
