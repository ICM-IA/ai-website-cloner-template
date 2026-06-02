"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Building2, Clock } from "lucide-react";
import Image from "next/image";
import CalButton from "@/components/CalButton";

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
  @keyframes iconFloat {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes iconSpin {
    0%   { transform: translateY(-10px) rotate(0deg); }
    100% { transform: translateY(-10px) rotate(360deg); }
  }
  .icm-icon-float {
    animation: iconFloat 3s ease-in-out infinite;
  }
  .icm-icon-spin {
    animation: iconSpin 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
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
            fontSize: "34px",
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
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 650);
    }, 7000);
    return () => clearInterval(interval);
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
              <CalButton className="hero-cta-btn">
                Agendar Llamada Gratuita
                <span aria-hidden="true">→</span>
              </CalButton>
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

          {/* Right: icon + stats card */}
          <div
            className="hero-right"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              opacity: mounted ? 1 : 0,
              animation: mounted ? "fadeInUp 0.8s ease-out 0.4s both" : "none",
            }}
          >
            {/* Large ICM-IA icon */}
            <div
              className={spinning ? "icm-icon-spin" : "icm-icon-float"}
              style={{
                borderRadius: "50%",
                boxShadow: "0 0 40px 16px rgba(255,20,20,0.35), 0 0 80px 32px rgba(255,20,20,0.18), 0 0 120px 48px rgba(255,20,20,0.08)",
                display: "inline-block",
                lineHeight: 0,
              }}
            >
              <Image
                src="/images/icm-icon.svg"
                alt="ICM-IA"
                width={200}
                height={200}
                style={{ borderRadius: "50%", display: "block" }}
                priority
              />
            </div>

            {/* Stats card — smaller */}
            <div
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#0D0D0D",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "24px 28px",
                  width: "100%",
                  maxWidth: "380px",
                  margin: "0 auto",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    color: "#6B7280",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "20px",
                    marginTop: 0,
                  }}
                >
                  Resultados reales de nuestros clientes
                </p>

                {/* Stats */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <StatRow
                    value="+890"
                    label="automatizaciones realizadas"
                    icon={<TrendingUp size={18} color="white" />}
                  />
                  <StatRow
                    value="+10k"
                    label="consultas gestionadas con IA"
                    icon={<Building2 size={18} color="white" />}
                  />
                  <StatRow
                    value="%80"
                    label="tiempo ahorrado"
                    icon={<Clock size={18} color="white" />}
                  />
                </div>

                {/* Divider */}
                <div
                  style={{
                    margin: "20px 0",
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                  }}
                />

                {/* Avatar row */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex" }}>
                    {avatars.map((avatar, i) => (
                      <div
                        key={i}
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          backgroundColor: avatar.bg,
                          border: "2px solid #000",
                          marginLeft: i === 0 ? "0" : "-8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
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
                  <p style={{ fontSize: "12px", color: "#9CA3AF", margin: 0 }}>
                    +10k consultas gestionadas con IA
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="hero-badge-pulse"
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "0px",
                  backgroundColor: "#FF1414",
                  color: "white",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "11px",
                  fontWeight: 700,
                  boxShadow: "0 4px 20px rgba(255,20,20,0.5)",
                  whiteSpace: "nowrap",
                }}
              >
                ✦ IA Activa 24/7
              </div>
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
              display: flex !important;
              justify-content: center;
            }
          }
        `}</style>
      </section>
    </>
  );
}
