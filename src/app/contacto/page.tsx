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

function CalEmbed() {
  useEffect(() => {
    // Remove any previously injected Cal script to avoid duplicates on re-mount
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

      {/* Hero */}
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "64px",
          textAlign: "center",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#FF1414",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          AGENDA TU LLAMADA
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            color: "#ECECEC",
            lineHeight: 1.1,
            marginBottom: "20px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          30 minutos que pueden{" "}
          <span style={{ color: "#FF1414" }}>cambiar tu inmobiliaria</span>
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#6B7280",
            maxWidth: "540px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Sin costo, sin compromiso. Analizamos tu operación y te mostramos
          exactamente qué automatizar primero.
        </p>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginTop: "32px",
            flexWrap: "wrap",
          }}
        >
          {["✓ Sin costo", "✓ Solo 30 min", "✓ Resultados desde el día 1"].map(
            (item) => (
              <span
                key={item}
                style={{
                  fontSize: "14px",
                  color: "#9CA3AF",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      {/* Calendar embed */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingBottom: "80px",
        }}
      >
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#0a0a0a",
          }}
        >
          <CalEmbed />
        </div>
      </section>

      <Footer />
    </main>
  );
}
