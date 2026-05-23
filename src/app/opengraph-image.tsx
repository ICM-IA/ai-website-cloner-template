import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ICM-IA — Tu inmobiliaria en piloto automático con IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #110000 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Red glow blob */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(255,20,20,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* ICM-IA wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "40px",
          }}
        >
          <span style={{ fontSize: "48px", fontWeight: 800, color: "white", letterSpacing: "-1px" }}>ICM</span>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #ff6666, #FF1414)" }} />
          <span style={{ fontSize: "48px", fontWeight: 800, color: "#FF1414", letterSpacing: "-1px" }}>IA</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#ECECEC",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
            marginBottom: "28px",
          }}
        >
          Tu inmobiliaria en{" "}
          <span style={{ color: "#FF1414" }}>piloto automático</span>
          {" "}con IA
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#6B7280",
            textAlign: "center",
            maxWidth: "700px",
            marginBottom: "48px",
          }}
        >
          Centralizá canales · Calificá prospectos · Escalá sin contratar
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
          {[
            { value: "+890", label: "automatizaciones" },
            { value: "31", label: "clientes activos" },
            { value: "%80", label: "tiempo ahorrado" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <span style={{ fontSize: "36px", fontWeight: 800, color: "#FF1414" }}>{stat.value}</span>
              <span style={{ fontSize: "16px", color: "#6B7280" }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #FF1414, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
