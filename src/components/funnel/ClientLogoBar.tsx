"use client";

const styles = `
  @keyframes scrollLogos {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .logo-track {
    display: flex;
    gap: 64px;
    width: max-content;
    animation: scrollLogos 20s linear infinite;
  }
  .logo-track:hover {
    animation-play-state: paused;
  }
`;

interface LogoItem {
  name: string;
  separator: string;
}

const logos: LogoItem[] = [
  { name: "Homein", separator: "🏠" },
  { name: "Lion GSC", separator: "🏢" },
  { name: "Grupo RE/MAX", separator: "🏠" },
  { name: "Inmobiliaria San Carlos", separator: "🏢" },
  { name: "NyM Proyectos", separator: "🏠" },
  { name: "ICM-IA Partners", separator: "🏢" },
];

function LogoItem({ name, separator }: LogoItem) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          whiteSpace: "nowrap",
          padding: "0 32px",
          fontSize: "20px",
          fontWeight: 700,
          color: "#4B5563",
          transition: "color 0.2s",
          cursor: "default",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.color = "#9CA3AF";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.color = "#4B5563";
        }}
      >
        {name}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "#374151",
          fontSize: "16px",
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {separator}
      </div>
    </>
  );
}

export default function ClientLogoBar() {
  return (
    <>
      <style>{styles}</style>
      <div
        style={{
          paddingTop: "48px",
          paddingBottom: "48px",
          backgroundColor: "#000",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        {/* Label */}
        <p
          style={{
            textAlign: "center",
            marginBottom: "32px",
            marginTop: 0,
            fontSize: "13px",
            fontWeight: 600,
            color: "#6B7280",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Empresas que confían en ICM-IA
        </p>

        {/* Scrolling track container */}
        <div style={{ position: "relative" }}>
          {/* Logo track — items duplicated for seamless loop */}
          <div className="logo-track">
            {logos.map((logo, i) => (
              <LogoItem key={`a-${i}`} name={logo.name} separator={logo.separator} />
            ))}
            {logos.map((logo, i) => (
              <LogoItem key={`b-${i}`} name={logo.name} separator={logo.separator} />
            ))}
          </div>

          {/* Left fade edge */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "120px",
              height: "100%",
              background: "linear-gradient(to right, #000, transparent)",
              pointerEvents: "none",
              zIndex: 1,
            }}
            aria-hidden="true"
          />

          {/* Right fade edge */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "120px",
              height: "100%",
              background: "linear-gradient(to left, #000, transparent)",
              pointerEvents: "none",
              zIndex: 1,
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
}
