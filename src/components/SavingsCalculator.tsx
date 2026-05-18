"use client";

import { useState } from "react";
import Link from "next/link";

type TipoInstalacion = "residencial" | "comercial" | "industrial";

export default function SavingsCalculator() {
  const [factura, setFactura] = useState<number>(15000);
  const [tipo, setTipo] = useState<TipoInstalacion>("residencial");
  const [calculated, setCalculated] = useState(false);

  const multiplier =
    tipo === "industrial" ? 0.85 : tipo === "comercial" ? 0.80 : 0.75;
  const ahorroMensual = Math.round(factura * multiplier);
  const ahorroAnual = ahorroMensual * 12;
  const inversionEstimada =
    tipo === "industrial"
      ? factura * 18
      : tipo === "comercial"
      ? factura * 15
      : factura * 12;
  const paybackYears =
    Math.round((inversionEstimada / ahorroAnual) * 10) / 10;
  const ahorro10Years = ahorroAnual * 10 - inversionEstimada;
  const kWSystemSize =
    Math.round(
      (factura / 15000) *
        (tipo === "industrial" ? 15 : tipo === "comercial" ? 10 : 5) *
        10
    ) / 10;

  const tipoOptions: { value: TipoInstalacion; label: string }[] = [
    { value: "residencial", label: "Residencial" },
    { value: "comercial", label: "Comercial" },
    { value: "industrial", label: "Industrial" },
  ];

  const resultRows = [
    {
      label: "Ahorro mensual estimado",
      value: `$${ahorroMensual.toLocaleString("es-AR")}`,
      color: "#16a34a",
      fontSize: "20px",
      fontWeight: 800,
    },
    {
      label: "Ahorro anual estimado",
      value: `$${ahorroAnual.toLocaleString("es-AR")}`,
      color: "#16a34a",
      fontSize: "16px",
      fontWeight: 700,
    },
    {
      label: "Inversión estimada",
      value: `$${inversionEstimada.toLocaleString("es-AR")}`,
      color: "rgb(13,27,62)",
      fontSize: "16px",
      fontWeight: 700,
    },
    {
      label: "Retorno de inversión",
      value: `${paybackYears} años`,
      color: "rgb(22,24,83)",
      fontSize: "16px",
      fontWeight: 700,
    },
    {
      label: "Tamaño del sistema",
      value: `${kWSystemSize} kW`,
      color: "rgb(22,24,83)",
      fontSize: "16px",
      fontWeight: 700,
    },
  ];

  return (
    <section
      id="calculadora"
      style={{
        background: "linear-gradient(135deg, rgb(13,27,62) 0%, rgb(22,24,83) 100%)",
        padding: "96px 24px",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            color: "#f59e0b",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            margin: 0,
          }}
        >
          CALCULÁ TU AHORRO
        </p>
        <h2
          style={{
            color: "white",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            marginTop: "12px",
            marginBottom: 0,
          }}
        >
          ¿Cuánto podés ahorrar con energía solar?
        </h2>
        <div
          style={{
            width: 60,
            height: 4,
            background: "linear-gradient(90deg,#f59e0b,#fde68a)",
            borderRadius: 2,
            margin: "16px auto 24px",
          }}
        />
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "16px",
            maxWidth: "500px",
            margin: "0 auto 56px",
          }}
        >
          Ingresá tu factura mensual y calculamos el sistema ideal para tu hogar
          o empresa.
        </p>
      </div>

      {/* Main 2-column layout */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
          alignItems: "start",
        }}
      >
        {/* Left column — Calculator inputs */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Input 1 — Factura mensual */}
          <div style={{ marginBottom: "28px" }}>
            <label
              htmlFor="factura"
              style={{
                display: "block",
                fontSize: "15px",
                fontWeight: 600,
                color: "rgb(30,41,59)",
                marginBottom: "8px",
              }}
            >
              ¿Cuánto pagás por mes de luz?
            </label>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "rgb(13,27,62)",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                $
              </span>
              <input
                id="factura"
                type="number"
                min={0}
                placeholder="Ej: 15000"
                value={factura}
                onChange={(e) => setFactura(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "14px 16px 14px 32px",
                  border: "2px solid rgb(226,232,240)",
                  borderRadius: "10px",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "rgb(13,27,62)",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.15s",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#f59e0b";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgb(226,232,240)";
                }}
              />
            </div>
          </div>

          {/* Input 2 — Tipo de instalación */}
          <div style={{ marginBottom: "32px" }}>
            <label
              style={{
                display: "block",
                fontSize: "15px",
                fontWeight: 600,
                color: "rgb(30,41,59)",
                marginBottom: "8px",
              }}
            >
              Tipo de instalación
            </label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {tipoOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setTipo(opt.value)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: tipo === opt.value ? 700 : 500,
                    background:
                      tipo === opt.value ? "#f59e0b" : "rgb(241,245,249)",
                    color:
                      tipo === opt.value
                        ? "rgb(13,27,62)"
                        : "rgb(100,116,139)",
                    transition: "all 0.15s",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Calculate button */}
          <button
            type="button"
            onClick={() => setCalculated(true)}
            style={{
              width: "100%",
              background: "#f59e0b",
              color: "rgb(13,27,62)",
              fontWeight: 800,
              padding: "16px",
              borderRadius: "10px",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fbbf24";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(245,158,11,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#f59e0b";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Calcular mi ahorro
          </button>
        </div>

        {/* Right column — Results */}
        {!calculated ? (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minHeight: "260px",
              gap: "16px",
            }}
          >
            <span style={{ fontSize: "64px", lineHeight: 1 }}>☀️</span>
            <p
              style={{
                color: "rgb(148,163,184)",
                fontSize: "15px",
                margin: 0,
                maxWidth: "240px",
              }}
            >
              Ingresá tu factura para ver tu ahorro estimado
            </p>
          </div>
        ) : (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "rgb(13,27,62)",
                marginTop: 0,
                marginBottom: "24px",
              }}
            >
              Tu ahorro estimado
            </h3>

            {/* Result rows */}
            {resultRows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  borderBottom: "1px solid rgb(241,245,249)",
                  fontSize: "14px",
                  gap: "8px",
                }}
              >
                <span style={{ color: "rgb(100,116,139)" }}>{row.label}</span>
                <span
                  style={{
                    color: row.color,
                    fontWeight: row.fontWeight,
                    fontSize: row.fontSize,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}

            {/* Highlight box */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgb(13,27,62), rgb(22,24,83))",
                borderRadius: "12px",
                padding: "20px",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                  margin: "0 0 8px",
                }}
              >
                En 10 años podrías ahorrar
              </p>
              <p
                style={{
                  color: "#f59e0b",
                  fontSize: "32px",
                  fontWeight: 900,
                  margin: 0,
                }}
              >
                ${ahorro10Years.toLocaleString("es-AR")}
              </p>
            </div>

            {/* CTA button */}
            <Link
              href="/#contacto"
              style={{
                display: "block",
                background: "#f59e0b",
                color: "rgb(13,27,62)",
                width: "100%",
                borderRadius: "10px",
                padding: "14px",
                fontWeight: 800,
                fontSize: "15px",
                marginTop: "16px",
                textAlign: "center",
                textDecoration: "none",
                boxSizing: "border-box",
              }}
            >
              ¡Quiero mi presupuesto gratis!
            </Link>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <p
        style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.5)",
          textAlign: "center",
          marginTop: "16px",
          marginBottom: 0,
        }}
      >
        * Los valores son estimativos. El presupuesto final varía según la
        ubicación y el consumo real.
      </p>
    </section>
  );
}
