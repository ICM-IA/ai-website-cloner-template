"use client";

import { useMemo, useState } from "react";
import {
  DISTRIBUIDORAS,
  PROVINCIA_FACTORES,
  calcularSolar,
  formatArs,
  getDistribuidorasPorProvincia,
  type TipoInstalacion,
} from "@/lib/calculadora-solar";

const tiposInstalacion: { value: TipoInstalacion; label: string; icon: string }[] = [
  { value: "residencial", label: "Residencial", icon: "🏠" },
  { value: "comercial", label: "Comercio", icon: "🏢" },
  { value: "industrial", label: "Industria", icon: "🏭" },
  { value: "agro", label: "Agro", icon: "🌾" },
];

const WHATSAPP_NUMBER = "541152282070";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1.5px solid rgb(226, 232, 240)",
  borderRadius: 10,
  padding: "13px 16px",
  fontSize: 15,
  fontFamily: "Raleway, sans-serif",
  outline: "none",
  boxSizing: "border-box",
  background: "white",
  color: "rgb(13, 27, 62)",
  cursor: "pointer",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 14,
  fontWeight: 600,
  color: "rgb(30, 41, 59)",
  marginBottom: 6,
};

export default function CalculadoraSolar() {
  const [tipoInstalacion, setTipoInstalacion] = useState<TipoInstalacion>("residencial");
  const [provincia, setProvincia] = useState("Buenos Aires");
  const [distribuidoraId, setDistribuidoraId] = useState("edenor");
  const [facturaMensual, setFacturaMensual] = useState(150000);

  const distribuidorasDisponibles = useMemo(
    () => getDistribuidorasPorProvincia(provincia),
    [provincia]
  );

  const resultado = useMemo(
    () => calcularSolar({ facturaMensual, distribuidoraId, provincia }),
    [facturaMensual, distribuidoraId, provincia]
  );

  const esCalculable = tipoInstalacion === "residencial" || tipoInstalacion === "comercial";

  const handleProvinciaChange = (nuevaProvincia: string) => {
    setProvincia(nuevaProvincia);
    const disponibles = getDistribuidorasPorProvincia(nuevaProvincia);
    if (!disponibles.some((d) => d.id === distribuidoraId)) {
      setDistribuidoraId(disponibles[0]?.id ?? "otros");
    }
  };

  const distribuidoraNombre =
    DISTRIBUIDORAS.find((d) => d.id === distribuidoraId)?.nombre ?? "";

  const whatsappMessage = esCalculable
    ? `Hola! Quiero avanzar con un sistema solar.\n\nTipo de instalación: ${
        tiposInstalacion.find((t) => t.value === tipoInstalacion)?.label
      }\nProvincia: ${provincia}\nDistribuidora: ${distribuidoraNombre}\nFactura mensual: ${formatArs(
        facturaMensual
      )}${
        resultado
          ? `\n\nSegún la calculadora: inversión estimada ${formatArs(
              resultado.inversionArs
            )}, recupero en ${resultado.paybackAnios.toFixed(1)} años.`
          : ""
      }`
    : `Hola! Necesito un diagnóstico a medida para una instalación de energía solar ${
        tipoInstalacion === "industrial" ? "industrial" : "agropecuaria"
      }.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        background: "white",
        borderRadius: 24,
        border: "1px solid rgb(226, 232, 240)",
        boxShadow: "0 20px 60px rgba(13,27,62,0.12)",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {/* Left: form */}
      <div style={{ flex: "1 1 420px", minWidth: 0, padding: 40 }}>
        {/* Tipo de instalación */}
        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>Tipo de instalación</label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
            }}
          >
            {tiposInstalacion.map((tipo) => {
              const active = tipo.value === tipoInstalacion;
              return (
                <button
                  key={tipo.value}
                  type="button"
                  onClick={() => setTipoInstalacion(tipo.value)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    padding: "12px 4px",
                    borderRadius: 10,
                    border: active ? "1.5px solid #f59e0b" : "1.5px solid rgb(226, 232, 240)",
                    background: active ? "rgb(254, 243, 199)" : "white",
                    cursor: "pointer",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{tipo.icon}</span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: active ? "#b45309" : "rgb(100, 116, 139)",
                    }}
                  >
                    {tipo.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {esCalculable ? (
          <>
            {/* Provincia */}
            <div style={{ marginBottom: 20 }}>
              <label htmlFor="provincia" style={labelStyle}>
                Provincia
              </label>
              <select
                id="provincia"
                value={provincia}
                onChange={(e) => handleProvinciaChange(e.target.value)}
                style={inputStyle}
              >
                {PROVINCIA_FACTORES.map((p) => (
                  <option key={p.provincia} value={p.provincia}>
                    {p.provincia}
                  </option>
                ))}
              </select>
            </div>

            {/* Distribuidora */}
            <div style={{ marginBottom: 20 }}>
              <label htmlFor="distribuidora" style={labelStyle}>
                Distribuidora eléctrica
              </label>
              <select
                id="distribuidora"
                value={distribuidoraId}
                onChange={(e) => setDistribuidoraId(e.target.value)}
                style={inputStyle}
              >
                {distribuidorasDisponibles.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.nombre}
                  </option>
                ))}
              </select>
            </div>

            {/* Factura mensual */}
            <div style={{ marginBottom: 8 }}>
              <label htmlFor="factura" style={labelStyle}>
                Factura mensual de luz
              </label>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "rgb(13, 27, 62)",
                  marginBottom: 12,
                }}
              >
                {formatArs(facturaMensual)}
              </div>
              <input
                id="factura"
                type="range"
                min={20000}
                max={1000000}
                step={5000}
                value={facturaMensual}
                onChange={(e) => setFacturaMensual(Number(e.target.value))}
                style={{
                  width: "100%",
                  accentColor: "#f59e0b",
                  cursor: "pointer",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: "rgb(148, 163, 184)",
                  marginTop: 4,
                }}
              >
                <span>{formatArs(20000)}</span>
                <span>{formatArs(1000000)}</span>
              </div>
            </div>
          </>
        ) : (
          <div
            style={{
              background: "rgb(248, 250, 252)",
              borderRadius: 14,
              padding: 24,
              fontSize: 14,
              lineHeight: 1.7,
              color: "rgb(71, 85, 105)",
            }}
          >
            Las instalaciones {tipoInstalacion === "industrial" ? "industriales" : "agropecuarias"}{" "}
            varían mucho según el proceso y el consumo específico de cada operación. Contanos tu
            caso por WhatsApp y te armamos un diagnóstico técnico a medida, sin cargo.
          </div>
        )}
      </div>

      {/* Right: results */}
      <div
        style={{
          flex: "1 1 340px",
          minWidth: 0,
          background: "linear-gradient(135deg, rgb(13,27,62), rgb(22,24,83))",
          padding: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {esCalculable && resultado ? (
          <>
            <p
              style={{
                color: "#f59e0b",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              Tu proyecto solar estimado
            </p>

            <div style={{ marginBottom: 20 }}>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, margin: "0 0 4px" }}>
                Inversión estimada
              </p>
              <p style={{ color: "white", fontSize: 32, fontWeight: 800, margin: 0 }}>
                {formatArs(resultado.inversionArs)}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, margin: "0 0 4px" }}>
                  Ahorro anual
                </p>
                <p style={{ color: "#fde68a", fontSize: 20, fontWeight: 700, margin: 0 }}>
                  {formatArs(resultado.ahorroAnioArs)}
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, margin: "0 0 4px" }}>
                  Potencia estimada
                </p>
                <p style={{ color: "white", fontSize: 20, fontWeight: 700, margin: 0 }}>
                  {(resultado.potenciaWp / 1000).toFixed(2)} kWp
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, margin: "0 0 4px" }}>
                  Se recupera en
                </p>
                <p style={{ color: "white", fontSize: 20, fontWeight: 700, margin: 0 }}>
                  {resultado.paybackAnios.toFixed(1)} años
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, margin: "0 0 4px" }}>
                  Energía casi gratis por
                </p>
                <p style={{ color: "white", fontSize: 20, fontWeight: 700, margin: 0 }}>
                  {resultado.aniosDeEnergiaGratis.toFixed(1)} años
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <p
              style={{
                color: "#f59e0b",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              Diagnóstico a medida
            </p>
            <p
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1.4,
                margin: "0 0 16px",
              }}
            >
              Cada proyecto {tipoInstalacion === "industrial" ? "industrial" : "agropecuario"} es
              único.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7 }}>
              Escribinos y te ayudamos a dimensionar el sistema ideal para tu operación, sin
              costo ni compromiso.
            </p>
          </>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
            color: "rgb(13, 27, 62)",
            fontWeight: 800,
            fontSize: 15,
            padding: "16px 24px",
            borderRadius: 10,
            textDecoration: "none",
            marginTop: 8,
            transition: "opacity 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.92";
            e.currentTarget.style.boxShadow = "0 6px 24px rgba(245,158,11,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Pedir un diagnóstico a medida →
        </a>

        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 12,
            textAlign: "center",
            marginTop: 12,
            marginBottom: 0,
          }}
        >
          Estimación orientativa. El presupuesto final se define con una visita técnica.
        </p>
      </div>
    </div>
  );
}
