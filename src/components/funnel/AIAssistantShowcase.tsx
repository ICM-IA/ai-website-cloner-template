"use client";

import { useEffect, useRef, useState } from "react";
import CalButton from "@/components/CalButton";

const styles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes bubbleIn {
    from { opacity: 0; transform: translateY(8px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes blink {
    0%, 100% { opacity: 0.3; }
    50%       { opacity: 1; }
  }
  .ai-section-content {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .ai-section-content.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .ai-check-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 15px;
    color: #9CA3AF;
    line-height: 1.5;
  }
  .typing-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #6B7280;
    animation: blink 1.2s ease-in-out infinite;
  }
  .typing-dot:nth-child(2) { animation-delay: 0.2s; }
  .typing-dot:nth-child(3) { animation-delay: 0.4s; }

  @media (max-width: 767px) {
    .ai-grid {
      grid-template-columns: 1fr !important;
    }
    .ai-outer {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .ai-headline {
      font-size: 34px !important;
    }
  }
`;

interface Message {
  from: "lead" | "ai";
  text: string;
  delay: number;
}

const MESSAGES: Message[] = [
  { from: "lead", text: "Hola! Vi una propiedad en Palermo, ¿tiene más información?", delay: 0 },
  { from: "ai",   text: "¡Hola! Claro que sí 😊 ¿Estás buscando para comprar o alquilar? Y, ¿cuál sería tu presupuesto aproximado?", delay: 1200 },
  { from: "lead", text: "Para comprar. Tengo hasta USD 180.000.", delay: 2600 },
  { from: "ai",   text: "Perfecto. Tenemos 3 opciones que se ajustan a ese presupuesto. ¿Querés que te agendemos una visita esta semana?", delay: 4000 },
  { from: "lead", text: "Sí, el jueves a la tarde me viene bien.", delay: 5600 },
  { from: "ai",   text: "¡Listo! 📅 Reservé el jueves 18hs. Te llega la confirmación por WhatsApp. ¡Hasta entonces!", delay: 7000 },
];

function ChatBubble({ msg, visible }: { msg: Message; visible: boolean }) {
  const isAI = msg.from === "ai";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isAI ? "flex-end" : "flex-start",
        opacity: visible ? 1 : 0,
        animation: visible ? "bubbleIn 0.4s ease forwards" : "none",
      }}
    >
      {!isAI && (
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "#1F2937", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: "11px", fontWeight: 700,
          color: "#9CA3AF", flexShrink: 0, marginRight: 8, marginTop: 2,
        }}>
          L
        </div>
      )}
      <div style={{
        maxWidth: "78%",
        padding: "10px 14px",
        borderRadius: isAI ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
        backgroundColor: isAI ? "#FF1414" : "#1A1A1A",
        color: isAI ? "#fff" : "#D1D5DB",
        fontSize: "13px",
        lineHeight: 1.55,
        border: isAI ? "none" : "1px solid rgba(255,255,255,0.07)",
      }}>
        {msg.text}
      </div>
      {isAI && (
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "#FF1414", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: "10px", fontWeight: 800,
          color: "#fff", flexShrink: 0, marginLeft: 8, marginTop: 2,
        }}>
          IA
        </div>
      )}
    </div>
  );
}

export default function AIAssistantShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setSectionVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionVisible) return;

    let cancelled = false;

    const run = async () => {
      for (let i = 0; i < MESSAGES.length; i++) {
        const msg = MESSAGES[i];
        await new Promise(r => setTimeout(r, i === 0 ? 600 : msg.delay - MESSAGES[i - 1].delay - 300));
        if (cancelled) return;

        // Show typing indicator before AI messages
        if (msg.from === "ai") {
          setShowTyping(true);
          await new Promise(r => setTimeout(r, 700));
          if (cancelled) return;
          setShowTyping(false);
        }

        setVisibleCount(i + 1);
      }
    };

    run();
    return () => { cancelled = true; };
  }, [sectionVisible]);

  return (
    <>
      <style>{styles}</style>
      <section
        ref={sectionRef}
        style={{ backgroundColor: "#000", paddingTop: "120px", paddingBottom: "120px" }}
      >
        <div
          className="ai-outer"
          style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "80px", paddingRight: "80px" }}
        >
          <div
            className={`ai-grid ai-section-content${sectionVisible ? " visible" : ""}`}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
          >
            {/* Left: copy */}
            <div>
              <p style={{
                display: "inline-block",
                fontSize: "11px", fontWeight: 700, color: "#FF1414",
                letterSpacing: "3px", textTransform: "uppercase",
                border: "1px solid rgba(255,20,20,0.3)",
                borderRadius: "20px", padding: "4px 14px", marginBottom: "24px",
              }}>
                ASISTENTE IA
              </p>

              <h2
                className="ai-headline"
                style={{
                  fontSize: "46px", fontWeight: 800, color: "#ECECEC",
                  lineHeight: 1.1, margin: "0 0 20px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Tu mejor vendedor{" "}
                <span style={{ color: "#FF1414" }}>trabaja 24/7</span>
                {" "}y nunca descansa.
              </h2>

              <p style={{ fontSize: "17px", color: "#6B7280", lineHeight: 1.7, marginBottom: "32px" }}>
                Cada consulta que llega — por WhatsApp, Instagram o tu web —
                es respondida en segundos, calificada automáticamente y derivada
                a tu equipo solo cuando el prospecto ya está listo para avanzar.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
                {[
                  "Responde consultas al instante, a cualquier hora",
                  "Califica prospectos y detecta el nivel de interés",
                  "Agenda visitas y llamadas sin intervención humana",
                  "Funciona en WhatsApp, web e Instagram simultáneamente",
                ].map((item) => (
                  <div key={item} className="ai-check-item">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="9" cy="9" r="9" fill="rgba(255,20,20,0.15)" />
                      <path d="M5.5 9L7.5 11L12.5 6.5" stroke="#FF1414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <CalButton style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                backgroundColor: "#FF1414", color: "#fff",
                fontSize: "15px", fontWeight: 700,
                padding: "14px 28px", borderRadius: "10px",
                border: "none", cursor: "pointer",
                transition: "background 0.2s, transform 0.15s",
              }}>
                Quiero este sistema para mi negocio →
              </CalButton>
            </div>

            {/* Right: chat demo */}
            <div style={{
              backgroundColor: "#0D0D0D",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(255,20,20,0.08)",
            }}>
              {/* Chat header */}
              <div style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "16px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "#FF1414", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "12px", fontWeight: 800, color: "#fff",
                }}>
                  IA
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "#ECECEC" }}>
                    Asistente ICM-IA
                  </p>
                  <p style={{ margin: 0, fontSize: "11px", color: "#22C55E", display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                    Activo ahora
                  </p>
                </div>
                <div style={{
                  marginLeft: "auto", fontSize: "10px", fontWeight: 700,
                  color: "#FF1414", border: "1px solid rgba(255,20,20,0.4)",
                  borderRadius: "6px", padding: "3px 8px", letterSpacing: "0.5px",
                }}>
                  IA AUTO-REPLY
                </div>
              </div>

              {/* Messages */}
              <div style={{
                padding: "20px",
                display: "flex", flexDirection: "column", gap: "12px",
                minHeight: "320px",
              }}>
                {MESSAGES.map((msg, i) => (
                  <ChatBubble key={i} msg={msg} visible={i < visibleCount} />
                ))}

                {/* Typing indicator */}
                {showTyping && (
                  <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 6 }}>
                    <div style={{
                      backgroundColor: "#1A1A1A", border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "16px 4px 16px 16px",
                      padding: "10px 14px", display: "flex", gap: 4, alignItems: "center",
                    }}>
                      <div className="typing-dot" />
                      <div className="typing-dot" />
                      <div className="typing-dot" />
                    </div>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%",
                      background: "#FF1414", display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: "10px", fontWeight: 800, color: "#fff", flexShrink: 0,
                    }}>
                      IA
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div style={{
                padding: "12px 20px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                fontSize: "11px", color: "#374151", textAlign: "center",
              }}>
                ↑ Simulación real — así responde el asistente a tus prospectos
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
