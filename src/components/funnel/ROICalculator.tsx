"use client";

import { useState, useEffect, useRef } from "react";
import CalButton from "@/components/CalButton";

const RED = "#FF1414";

function useAnimatedNumber(target: number, duration = 600) {
  const [display, setDisplay] = useState(target);
  const raf = useRef<number | null>(null);
  const start = useRef<number | null>(null);
  const from = useRef(target);

  useEffect(() => {
    from.current = display;
    start.current = null;

    if (raf.current) cancelAnimationFrame(raf.current);

    const animate = (ts: number) => {
      if (!start.current) start.current = ts;
      const progress = Math.min((ts - start.current) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from.current + (target - from.current) * ease));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return display;
}

interface SliderProps {
  label: string;
  sublabel: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
}

function Slider({ label, sublabel, value, min, max, step, onChange, format }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
        <div>
          <span style={{ fontSize: "15px", fontWeight: 600, color: "#ECECEC" }}>{label}</span>
          <span style={{ fontSize: "12px", color: "#6B7280", marginLeft: "8px" }}>{sublabel}</span>
        </div>
        <span style={{ fontSize: "22px", fontWeight: 800, color: RED, fontFamily: "Poppins, sans-serif" }}>
          {format ? format(value) : value}
        </span>
      </div>
      <div style={{ position: "relative", height: "6px", borderRadius: "9999px", backgroundColor: "rgba(255,255,255,0.08)" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${pct}%`,
            borderRadius: "9999px",
            background: `linear-gradient(90deg, #8B0000, ${RED})`,
            transition: "width 0.1s",
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            opacity: 0,
            cursor: "pointer",
            height: "24px",
            top: "-9px",
            margin: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${pct}%`,
            transform: "translate(-50%, -50%)",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: RED,
            border: "3px solid #000",
            boxShadow: `0 0 12px rgba(255,20,20,0.6)`,
            pointerEvents: "none",
            transition: "left 0.1s",
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
        <span style={{ fontSize: "11px", color: "#374151" }}>{format ? format(min) : min}</span>
        <span style={{ fontSize: "11px", color: "#374151" }}>{format ? format(max) : max}</span>
      </div>
    </div>
  );
}

interface ResultCardProps {
  value: number;
  unit: string;
  label: string;
  sub: string;
  highlight?: boolean;
}

function ResultCard({ value, unit, label, sub, highlight }: ResultCardProps) {
  const animated = useAnimatedNumber(value); // hook at top level of component — valid
  return (
    <div
      style={{
        backgroundColor: highlight ? "rgba(255,20,20,0.06)" : "#0D0D0D",
        border: `1px solid ${highlight ? "rgba(255,20,20,0.25)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px",
        padding: "24px 20px",
        textAlign: "center",
        flex: 1,
        minWidth: "140px",
        transition: "all 0.3s",
      }}
    >
      <p style={{ margin: "0 0 4px 0", fontSize: "36px", fontWeight: 800, color: highlight ? RED : "#ECECEC", fontFamily: "Poppins, sans-serif", lineHeight: 1 }}>
        {animated.toLocaleString("es-AR")}<span style={{ fontSize: "18px", marginLeft: "3px" }}>{unit}</span>
      </p>
      <p style={{ margin: "6px 0 4px 0", fontSize: "13px", fontWeight: 600, color: "#ECECEC" }}>{label}</p>
      <p style={{ margin: 0, fontSize: "12px", color: "#6B7280" }}>{sub}</p>
    </div>
  );
}

export default function ROICalculator() {
  const [consultas, setConsultas] = useState(40);
  const [minutos, setMinutos] = useState(12);

  const consultasMes = consultas * 30;
  const automatedPct = 0.88;
  const horasManualesMes = Math.round((consultasMes * minutos) / 60);
  const horasAhorradas = Math.round(horasManualesMes * automatedPct);
  const consultasAuto = Math.round(consultasMes * automatedPct);
  const diasLiberados = Math.round(horasAhorradas / 8);
  const animatedHorasAhorradas = useAnimatedNumber(horasAhorradas);

  return (
    <section style={{ backgroundColor: "#000", paddingTop: "100px", paddingBottom: "120px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
        className="roi-wrapper"
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: RED,
              backgroundColor: "rgba(255, 20, 20, 0.08)",
              border: "1px solid rgba(255, 20, 20, 0.2)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "20px",
            }}
          >
            CALCULADORA INTERACTIVA
          </p>
          <h2
            style={{
              fontSize: "44px",
              fontWeight: 800,
              color: "#ECECEC",
              lineHeight: 1.15,
              margin: "0 0 16px 0",
              fontFamily: "Poppins, sans-serif",
            }}
            className="roi-heading"
          >
            ¿Cuánto tiempo perdés por mes?
          </h2>
          <p style={{ fontSize: "17px", color: "#6B7280", margin: 0 }}>
            Mové los sliders con los datos de tu inmobiliaria y descubrí lo que ICM-IA puede liberar.
          </p>
        </div>

        {/* Main card */}
        <div
          style={{
            backgroundColor: "#0A0A0A",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "24px",
            padding: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
          className="roi-card"
        >
          {/* Left: sliders */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            <Slider
              label="Consultas por día"
              sublabel="mensajes / leads recibidos"
              value={consultas}
              min={5}
              max={200}
              step={5}
              onChange={setConsultas}
            />
            <Slider
              label="Minutos por consulta"
              sublabel="tiempo de respuesta manual"
              value={minutos}
              min={3}
              max={45}
              step={1}
              onChange={setMinutos}
            />
            {/* Context note */}
            <p style={{ fontSize: "12px", color: "#374151", margin: 0, lineHeight: 1.6 }}>
              * Calculado con un 88% de automatización — porcentaje promedio real de nuestros clientes activos.
            </p>
          </div>

          {/* Right: results */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Big highlight */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(255,20,20,0.12) 0%, rgba(139,0,0,0.08) 100%)",
                border: "1px solid rgba(255,20,20,0.2)",
                borderRadius: "16px",
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <p style={{ margin: "0 0 4px 0", fontSize: "11px", color: "#6B7280", textTransform: "uppercase", letterSpacing: "2px" }}>
                Horas manuales recuperadas/mes
              </p>
              <p style={{ margin: "8px 0", fontSize: "64px", fontWeight: 800, color: RED, fontFamily: "Poppins, sans-serif", lineHeight: 1 }}>
                {animatedHorasAhorradas.toLocaleString("es-AR")}
                <span style={{ fontSize: "28px", marginLeft: "4px" }}>hs</span>
              </p>
              <p style={{ margin: 0, fontSize: "13px", color: "#9CA3AF" }}>
                equivalen a <strong style={{ color: "#ECECEC" }}>{diasLiberados} días</strong> de trabajo liberados
              </p>
            </div>

            {/* Two smaller cards */}
            <div style={{ display: "flex", gap: "12px" }}>
              <ResultCard
                value={consultasAuto}
                unit=""
                label="Consultas automáticas"
                sub="atendidas sin intervención"
              />
              <ResultCard
                value={horasManualesMes}
                unit="hs"
                label="Horas manuales actuales"
                sub="que tu equipo dedica hoy"
              />
            </div>

            {/* CTA */}
            <CalButton
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: RED,
                color: "white",
                padding: "14px 24px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 700,
                border: "none",
                transition: "all 0.2s",
                marginTop: "4px",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e00000";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(255,20,20,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = RED;
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              Quiero recuperar esas horas →
            </CalButton>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .roi-wrapper {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .roi-heading {
            font-size: 32px !important;
          }
          .roi-card {
            grid-template-columns: 1fr !important;
            padding: 28px 20px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
