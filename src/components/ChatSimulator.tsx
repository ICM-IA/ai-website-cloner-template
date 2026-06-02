"use client";

import { useEffect, useRef, useState } from "react";

const styles = `
  @keyframes chatSlideUp {
    from { opacity: 0; transform: translateY(20px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0)  scale(1); }
  }
  @keyframes chatBubbleIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes typingBlink {
    0%, 100% { opacity: 0.3; }
    50%       { opacity: 1; }
  }
  @keyframes chatPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255,20,20,0.5); }
    50%       { box-shadow: 0 0 0 10px rgba(255,20,20,0); }
  }
  .chat-window {
    animation: chatSlideUp 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
  }
  .chat-bubble-in {
    animation: chatBubbleIn 0.3s ease forwards;
  }
  .chat-fab {
    animation: chatPulse 2.5s ease-in-out infinite;
    transition: transform 0.2s;
  }
  .chat-fab:hover { transform: scale(1.08); }
  .chat-typing-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #6B7280;
    animation: typingBlink 1.2s ease-in-out infinite;
  }
  .chat-typing-dot:nth-child(2) { animation-delay: 0.2s; }
  .chat-typing-dot:nth-child(3) { animation-delay: 0.4s; }
  .chat-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #ECECEC;
    font-size: 14px;
    font-family: inherit;
  }
  .chat-input::placeholder { color: #4B5563; }
  .chat-send-btn {
    width: 34px; height: 34px;
    border-radius: 50%;
    background: #FF1414;
    border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, transform 0.15s;
    flex-shrink: 0;
  }
  .chat-send-btn:hover { background: #e00000; transform: scale(1.05); }
  .chat-send-btn:disabled { background: #2D2D2D; cursor: default; transform: none; }
  @media (max-width: 480px) {
    .chat-window-inner {
      width: calc(100vw - 32px) !important;
      left: 16px !important;
      bottom: 80px !important;
    }
  }
`;

interface Message {
  from: "user" | "ai";
  text: string;
}

const INITIAL_MESSAGE: Message = {
  from: "ai",
  text: "¡Hola! 👋 Soy el asistente de ICM-IA. Estoy acá para mostrarte cómo automatizamos la atención de tu inmobiliaria. ¿Qué querés saber?",
};

function getResponse(input: string): string {
  const t = input.toLowerCase();

  if (/hola|buenas|buen[ao]s|ey|hey/.test(t))
    return "¡Hola! Me alegra que estés por acá 😊 ¿Querés ver cómo funciona el asistente de IA para inmobiliarias? Preguntame lo que quieras.";

  if (/precio|costo|cuánto|cuanto|valor|tarifa|plan/.test(t))
    return "Los planes de ICM-IA se definen en una reunión de diagnóstico, ya que cada inmobiliaria tiene necesidades distintas. Lo que sí puedo decirte es que el retorno suele superar la inversión en el primer mes. ¿Agendamos una llamada?";

  if (/cómo funciona|como funciona|qué hace|que hace|qué es|que es/.test(t))
    return "ICM-IA implementa un sistema de IA que responde consultas 24/7, califica prospectos automáticamente, centraliza todos tus canales (WhatsApp, portales, Instagram) y agenda visitas sin intervención humana. ¿Querés verlo en acción?";

  if (/whatsapp|mensaje|canal|portal|instagram/.test(t))
    return "Sí, integramos todos tus canales en un solo sistema: WhatsApp, Zonaprop, Argenprop, Instagram y más. Cada consulta entra, es respondida y calificada automáticamente. Nada se pierde.";

  if (/tiempo|hora|minuto|demor|responde|rápido/.test(t))
    return "El asistente responde en segundos, a cualquier hora. El tiempo promedio de respuesta es menor a 30 segundos, incluso a las 3 de la mañana 🌙";

  if (/lead|prospecto|cliente|contacto|calif/.test(t))
    return "El sistema califica cada prospecto según su nivel de interés, presupuesto y urgencia. Tu equipo solo recibe los leads que ya están listos para avanzar. Adiós a perder tiempo con consultas frías.";

  if (/visita|ver|recorrer|agendar|turno|reunión|reunion/.test(t))
    return "¡Exacto! El asistente puede agendar visitas automáticamente según la disponibilidad de tu equipo. El prospecto elige el horario y recibe confirmación al instante.";

  if (/crm|sistema|integra|herramienta|software/.test(t))
    return "Nos integramos con los principales CRMs del mercado. Y si no tenés uno, también podemos implementarlo. Todo queda centralizado en un solo lugar.";

  if (/gracias|genial|buenísimo|buenisimo|excelente|perfecto/.test(t))
    return "¡De nada! Me alegra que te haya sido útil 😊 Si querés ver esto funcionando en tu inmobiliaria, podemos arrancar con una llamada de diagnóstico de 20 minutos. ¿Te interesa?";

  if (/llamada|contacto|hablar|reunión|reunion|diagnóstico|diagnostico/.test(t))
    return "Perfecto. Podés agendar tu llamada de diagnóstico directo desde el sitio — es gratuita, dura 20 minutos y sin compromiso. Hacé click en 'Agendar Llamada' en el menú superior 👆";

  if (/no sé|no se|duda|ayuda|explica|info|información|informacion/.test(t))
    return "Te entiendo. El mundo de la IA puede parecer complejo pero nosotros nos encargamos de todo. ¿Querés que te explique algún tema en particular? Estoy acá para ayudarte.";

  return "Buena pregunta. Para darte una respuesta más completa sobre ese tema, lo mejor es una llamada con nuestro equipo. Son solo 20 minutos y te explicamos todo adaptado a tu negocio. ¿Agendamos?";
}

export default function ChatSimulator() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || typing) return;

    setInput("");
    setMessages(prev => [...prev, { from: "user", text }]);
    setTyping(true);

    const delay = 900 + Math.random() * 800;
    await new Promise(r => setTimeout(r, delay));

    setTyping(false);
    setMessages(prev => [...prev, { from: "ai", text: getResponse(text) }]);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      <style>{styles}</style>

      {/* Chat window */}
      {open && (
        <div
          className="chat-window chat-window-inner"
          style={{
            position: "fixed",
            bottom: "88px",
            left: "24px",
            width: "340px",
            zIndex: 9998,
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07)",
            display: "flex",
            flexDirection: "column",
            maxHeight: "520px",
          }}
        >
          {/* Header */}
          <div style={{
            background: "#111",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "#FF1414",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "11px", fontWeight: 800, color: "#fff", flexShrink: 0,
            }}>IA</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "#ECECEC" }}>
                Asistente ICM-IA
              </p>
              <p style={{ margin: 0, fontSize: "11px", color: "#22C55E", display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                Activo ahora
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#6B7280", padding: 4, lineHeight: 1 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div style={{
            background: "#0D0D0D",
            flex: 1,
            overflowY: "auto",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className="chat-bubble-in"
                style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start" }}
              >
                {msg.from === "ai" && (
                  <div style={{
                    width: 24, height: 24, borderRadius: "50%",
                    background: "#FF1414", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "8px", fontWeight: 800,
                    color: "#fff", flexShrink: 0, marginRight: 8, marginTop: 2,
                  }}>IA</div>
                )}
                <div style={{
                  maxWidth: "78%",
                  padding: "9px 13px",
                  borderRadius: msg.from === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                  background: msg.from === "user" ? "#FF1414" : "#1A1A1A",
                  border: msg.from === "user" ? "none" : "1px solid rgba(255,255,255,0.07)",
                  color: msg.from === "user" ? "#fff" : "#D1D5DB",
                  fontSize: "13px",
                  lineHeight: 1.55,
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 24, height: 24, borderRadius: "50%",
                  background: "#FF1414", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "8px", fontWeight: 800, color: "#fff", flexShrink: 0,
                }}>IA</div>
                <div style={{
                  background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "4px 16px 16px 16px",
                  padding: "10px 14px", display: "flex", gap: 4,
                }}>
                  <div className="chat-typing-dot" />
                  <div className="chat-typing-dot" />
                  <div className="chat-typing-dot" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            background: "#111",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "12px 14px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <input
              ref={inputRef}
              className="chat-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Escribí tu consulta..."
              maxLength={300}
            />
            <button
              className="chat-send-btn"
              onClick={sendMessage}
              disabled={!input.trim() || typing}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 1L1 5.5L6 7M13 1L8.5 13L6 7M13 1L6 7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        className="chat-fab"
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#FF1414",
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(255,20,20,0.4)",
        }}
        aria-label="Abrir chat"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 10h8M8 14h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {/* Unread dot */}
            {hasUnread && (
              <span style={{
                position: "absolute", top: 8, right: 8,
                width: 10, height: 10, borderRadius: "50%",
                background: "#fff", border: "2px solid #FF1414",
              }} />
            )}
          </>
        )}
      </button>
    </>
  );
}
