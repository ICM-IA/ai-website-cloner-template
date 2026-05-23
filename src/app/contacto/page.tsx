"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/funnel/Footer";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal: any;
  }
}

const RED = "#FF1414";
const WA_NUMBER = "5492223507821";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola! Quiero saber más sobre ICM-IA para mi inmobiliaria.")}`;
const TEL = "+5492223507821";

const callSteps = [
  { n: "01", title: "Analizamos tu operación", body: "Te hacemos las preguntas correctas para entender tus canales, volumen de leads y cuellos de botella actuales." },
  { n: "02", title: "Te mostramos el sistema", body: "Ves en vivo cómo ICM-IA respondería, calificaría y nutriría tus prospectos automáticamente." },
  { n: "03", title: "Definimos el plan", body: "Si es para vos, salís con un plan concreto de implementación adaptado a tu inmobiliaria." },
];

function CalEmbed() {
  useEffect(() => {
    const existingScript = document.getElementById("cal-embed-script");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "cal-embed-script";
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "reconocimiento", { origin: "https://app.cal.com" });

      Cal.ns.reconocimiento("inline", {
        elementOrSelector: "#my-cal-inline-reconocimiento",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "icm-ia/reconocimiento",
      });

      Cal.ns.reconocimiento("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#000000" },
          dark:  { "cal-brand": "#ff0000" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    `;
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("cal-embed-script");
      if (s) s.remove();
    };
  }, []);

  return (
    <div
      id="my-cal-inline-reconocimiento"
      style={{ width: "100%", height: "700px", overflow: "scroll" }}
    />
  );
}

export default function ContactoPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#000" }}>
      <Navbar />

      {/* Page header */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px", textAlign: "center", paddingLeft: "24px", paddingRight: "24px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, color: RED, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
          AGENDA TU LLAMADA GRATUITA
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, color: "#ECECEC", lineHeight: 1.1, marginBottom: "20px", fontFamily: "Poppins, sans-serif" }}>
          30 minutos que pueden{" "}
          <span style={{ color: RED }}>cambiar tu inmobiliaria</span>
        </h1>
        <p style={{ fontSize: "18px", color: "#6B7280", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
          Sin costo, sin compromiso. Analizamos tu operación y te mostramos exactamente qué automatizar primero.
        </p>
      </section>

      {/* Main content: left info + right calendar */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "40px", paddingRight: "40px", paddingBottom: "100px", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "48px", alignItems: "start" }} className="contacto-grid">

        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

          {/* Urgency badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "rgba(255,20,20,0.06)", border: "1px solid rgba(255,20,20,0.2)", borderRadius: "12px", padding: "14px 18px" }}>
            <span style={{ fontSize: "18px" }}>🔴</span>
            <div>
              <p style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "#ECECEC" }}>Cupos limitados por mes</p>
              <p style={{ margin: 0, fontSize: "12px", color: "#6B7280", marginTop: "2px" }}>Solo trabajamos con un número selecto de inmobiliarias para garantizar resultados.</p>
            </div>
          </div>

          {/* What happens in the call */}
          <div style={{ backgroundColor: "#0D0D0D", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "28px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: RED, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px", marginTop: 0 }}>
              ¿QUÉ PASA EN LA LLAMADA?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {callSteps.map((step) => (
                <div key={step.n} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(255,20,20,0.1)", border: "1px solid rgba(255,20,20,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: RED, flexShrink: 0 }}>
                    {step.n}
                  </div>
                  <div>
                    <p style={{ margin: "0 0 4px 0", fontSize: "14px", fontWeight: 700, color: "#ECECEC" }}>{step.title}</p>
                    <p style={{ margin: 0, fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div style={{ backgroundColor: "#0D0D0D", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "28px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: RED, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px", marginTop: 0 }}>
              CONTACTO DIRECTO
            </p>

            {/* Phone */}
            <a href={`tel:${TEL}`} style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "16px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "rgba(255,20,20,0.08)", border: "1px solid rgba(255,20,20,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: "11px", color: "#6B7280", textTransform: "uppercase", letterSpacing: "1px" }}>Teléfono</p>
                <p style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#ECECEC" }}>+54 9 2223 507821</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", padding: "12px 16px", backgroundColor: "rgba(37,211,102,0.07)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: "10px", transition: "all 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(37,211,102,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(37,211,102,0.07)"; }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" style={{ width: "20px", height: "20px", flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div>
                <p style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "#ECECEC" }}>Escribinos por WhatsApp</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#6B7280" }}>Respondemos en menos de 1 hora</p>
              </div>
            </a>
          </div>

          {/* Mini testimonial */}
          <div style={{ backgroundColor: "#0D0D0D", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "24px" }}>
            <p style={{ fontSize: "14px", color: "#D1D5DB", lineHeight: 1.8, fontStyle: "italic", margin: "0 0 16px 0" }}>
              &ldquo;En 30 minutos entendieron todo nuestro proceso y nos mostraron exactamente cómo automatizarlo. Fue la llamada más productiva del año.&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#7C3AED", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, color: "white", flexShrink: 0 }}>LC</div>
              <div>
                <p style={{ margin: 0, fontSize: "13px", fontWeight: 600, color: "#ECECEC" }}>Laura Castillo</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#6B7280" }}>Directora · RE/MAX Centro</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — Calendar */}
        <div style={{ position: "sticky", top: "120px" }}>
          <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0a0a0a", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
            <CalEmbed />
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .contacto-grid {
            grid-template-columns: 1fr !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
