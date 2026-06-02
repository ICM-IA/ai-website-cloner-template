"use client";

const styles = `
  @keyframes scrollLogos {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .logo-track {
    display: flex;
    align-items: center;
    gap: 12px;
    width: max-content;
    animation: scrollLogos 22s linear infinite;
  }
  .logo-track:hover {
    animation-play-state: paused;
  }
  .logo-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    white-space: nowrap;
    font-size: 14px;
    font-weight: 600;
    color: #9CA3AF;
    transition: color 0.2s, border-color 0.2s;
    cursor: default;
  }
  .logo-pill:hover {
    color: #ECECEC;
    border-color: rgba(255,255,255,0.16);
  }
`;

const logos = [
  { name: "NyM Proyectos",           flag: "🇨🇱" },
  { name: "Homein",                  flag: "🇺🇾" },
  { name: "Lion GSC",                flag: "🇦🇷" },
  { name: "Carla - RE/MAX",          flag: "🇨🇴" },
  { name: "The Box",                 flag: "🇦🇷" },
  { name: "Inmobiliaria San Carlos", flag: "🇵🇾" },
  { name: "Tulum Prop",              flag: "🇲🇽" },
];

export default function ClientLogoBar() {
  return (
    <>
      <style>{styles}</style>
      <section style={{ backgroundColor: "#000", paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>

          {/* Card container */}
          <div style={{
            background: "linear-gradient(135deg, #0D0D0D 0%, #111 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "40px 32px",
            overflow: "hidden",
          }}>
            {/* Header */}
            <p style={{
              textAlign: "center", margin: "0 0 8px 0",
              fontSize: "11px", fontWeight: 700,
              color: "#FF1414", letterSpacing: "3px", textTransform: "uppercase",
            }}>
              EMPRESAS QUE CONFÍAN EN ICM-IA
            </p>
            <h3 style={{
              textAlign: "center", margin: "0 0 32px 0",
              fontSize: "26px", fontWeight: 800,
              color: "#ECECEC", fontFamily: "Poppins, sans-serif",
            }}>
              Resultados reales, clientes reales
            </h3>

            {/* Scrolling pills */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <div className="logo-track">
                {/* Set A */}
                {logos.map((l, i) => (
                  <div key={`a-${i}`} className="logo-pill">
                    <span style={{ fontSize: "18px" }}>{l.flag}</span>
                    {l.name}
                  </div>
                ))}
                {/* Set B — duplicate for seamless loop */}
                {logos.map((l, i) => (
                  <div key={`b-${i}`} className="logo-pill">
                    <span style={{ fontSize: "18px" }}>{l.flag}</span>
                    {l.name}
                  </div>
                ))}
              </div>

              {/* Fade edges */}
              <div style={{
                position: "absolute", top: 0, left: 0, width: "60px", height: "100%",
                background: "linear-gradient(to right, #0D0D0D, transparent)",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", top: 0, right: 0, width: "60px", height: "100%",
                background: "linear-gradient(to left, #0D0D0D, transparent)",
                pointerEvents: "none",
              }} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
