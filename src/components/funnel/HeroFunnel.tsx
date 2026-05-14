"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Building2, Clock } from "lucide-react";

const styles = `
  @keyframes blobFloat1 {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-30px) scale(1.05); }
  }
  @keyframes blobFloat2 {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(20px) scale(0.95); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-blob-1 {
    position: absolute;
    top: -200px;
    right: 10%;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,20,20,0.18) 0%, transparent 70%);
    filter: blur(80px);
    animation: blobFloat1 8s ease-in-out infinite;
    pointer-events: none;
  }
  .hero-blob-2 {
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,20,20,0.18) 0%, transparent 70%);
    filter: blur(80px);
    animation: blobFloat2 10s ease-in-out infinite alternate;
    pointer-events: none;
  }
  .hero-blob-3 {
    position: absolute;
    top: 40%;
    left: 40%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,20,20,0.18) 0%, transparent 70%);
    filter: blur(80px);
    opacity: 0.5;
    animation: blobFloat1 6s ease-in-out infinite;
    pointer-events: none;
  }
  .hero-badge-pulse {
    animation: pulse 2s infinite;
  }
  .hero-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FF1414;
    color: white;
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .hero-cta-btn:hover {
    background: #e00000;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255,20,20,0.4);
  }
`;

interface StatRowProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

function StatRow({ value, label, icon }: StatRowProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "42px",
            fontWeight: 800,
            color: "#FF1414",
            margin: 0,
            lineHeight: 1,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {value}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "#9CA3AF",
            margin: "4px 0 0 0",
          }}
        >
          {label}
        </p>
      </div>
      <div
        style={{
          background: "rgba(255,20,20,0.1)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
    </div>
  );
}

const avatars: { bg: string; label: string }[] = [
  { bg: "#FF1414", label: "H" },
  { bg: "#7C3AED", label: "L" },
  { bg: "#059669", label: "R" },
  { bg: "#D97706", label: "+28" },
];

export default function HeroFunnel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundColor: "#000",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Animated blobs */}
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />
        <div className="hero-blob-3" />

        {/* Content wrapper */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "80px",
            paddingRight: "80px",
            paddingTop: "100px",
            paddingBottom: "80px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
          className="hero-grid"
        >
          {/* Left: text content */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted ? "fadeInUp 0.8s ease-out 0.1s both" : "none",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#FF1414",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#FF1414",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                SECTOR REAL ESTATE
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 800,
                color: "#ECECEC",
                lineHeight: 1.1,
                marginBottom: "24px",
                marginTop: 0,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Tu inmobiliaria en piloto automático con Inteligencia Artificial
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "20px",
                color: "#9CA3AF",
                lineHeight: 1.6,
                marginBottom: "48px",
                maxWidth: "520px",
                marginTop: 0,
              }}
            >
              Centralizá todos tus canales, filtrá y calificá prospectos automáticamente, y escalá sin contratar más personal.
            </p>

            {/* CTA row */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://cal.com/icm-ia/reconocimiento"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn"
              >
                Agendar Llamada Gratuita
                <span aria-hidden="true">→</span>
              </a>
              <p
                style={{
                  fontSize: "13px",
                  color: "#6B7280",
                  margin: 0,
                }}
              >
                Sin compromisos · 30 minutos
              </p>
            </div>
          </div>

          {/* Right: stats card */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: mounted ? 1 : 0,
              animation: mounted ? "fadeInUp 0.8s ease-out 0.4s both" : "none",
            }}
          >
            {/* Main card */}
            <div
              style={{
                backgroundColor: "#0D0D0D",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "40px",
                width: "100%",
                maxWidth: "440px",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "32px",
                  marginTop: 0,
                }}
              >
                Resultados reales de nuestros clientes
              </p>

              {/* Stats */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <StatRow
                  value="+890"
                  label="automatizaciones realizadas"
                  icon={<TrendingUp size={20} color="white" />}
                />
                <StatRow
                  value="31"
                  label="clientes satisfechos"
                  icon={<Building2 size={20} color="white" />}
                />
                <StatRow
                  value="%80"
                  label="tiempo ahorrado"
                  icon={<Clock size={20} color="white" />}
                />
              </div>

              {/* Divider */}
              <div
                style={{
                  margin: "32px 0",
                  height: "1px",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
              />

              {/* Avatar row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex" }}>
                  {avatars.map((avatar, i) => (
                    <div
                      key={i}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: avatar.bg,
                        border: "2px solid #000",
                        marginLeft: i === 0 ? "0" : "-8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "white",
                        flexShrink: 0,
                        zIndex: avatars.length - i,
                        position: "relative",
                      }}
                    >
                      {avatar.label}
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#9CA3AF",
                    margin: 0,
                  }}
                >
                  31 inmobiliarias ya operan con ICM-IA
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="hero-badge-pulse"
              style={{
                position: "absolute",
                top: "-16px",
                right: "-16px",
                backgroundColor: "#FF1414",
                color: "white",
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: 700,
                boxShadow: "0 4px 20px rgba(255,20,20,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              ✦ IA Activa 24/7
            </div>
          </div>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              padding-left: 24px !important;
              padding-right: 24px !important;
              gap: 40px !important;
            }
            .hero-grid h1 {
              font-size: 40px !important;
            }
            .hero-grid > div:last-child {
              display: none !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
