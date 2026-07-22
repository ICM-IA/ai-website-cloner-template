"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonio {
  nombre: string;
  ubicacion: string;
  tipo: string;
  stars: number;
  texto: string;
  ahorro: string;
}

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: "16px" }}>★</span>
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonio }) {
  return (
    <div
      style={{
        background: "rgb(248,250,252)",
        borderRadius: "16px",
        padding: "32px",
        border: "1px solid rgb(226,232,240)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Stars count={t.stars} />
      <p
        style={{
          fontSize: "15px",
          color: "rgb(51,65,85)",
          lineHeight: 1.75,
          fontStyle: "italic",
          flex: 1,
          margin: 0,
        }}
      >
        &ldquo;{t.texto}&rdquo;
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          paddingTop: "16px",
          borderTop: "1px solid rgb(226,232,240)",
        }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: "15px", color: "rgb(13,27,62)" }}>
            {t.nombre}
          </div>
          <div style={{ fontSize: "13px", color: "rgb(100,116,139)" }}>{t.ubicacion}</div>
        </div>
        <span
          style={{
            background: "rgba(245,158,11,0.12)",
            color: "#d97706",
            fontSize: "12px",
            fontWeight: 700,
            padding: "4px 12px",
            borderRadius: "20px",
          }}
        >
          {t.ahorro}
        </span>
      </div>
      <span
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "rgb(100,116,139)",
          background: "rgb(241,245,249)",
          padding: "3px 10px",
          borderRadius: "20px",
          alignSelf: "flex-start",
        }}
      >
        {t.tipo}
      </span>
    </div>
  );
}

export default function TestimonialsCarousel({ testimonios }: { testimonios: Testimonio[] }) {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const total = Math.ceil(testimonios.length / perPage);

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const visible = testimonios.slice(current * perPage, current * perPage + perPage);

  return (
    <div>
      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "28px",
          marginBottom: "40px",
          minHeight: "360px",
        }}
      >
        {visible.map((t, i) => (
          <Card key={`${current}-${i}`} t={t} />
        ))}
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Anterior"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "2px solid rgb(226,232,240)",
            background: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color: "rgb(13,27,62)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#f59e0b";
            (e.currentTarget as HTMLButtonElement).style.color = "#f59e0b";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgb(226,232,240)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgb(13,27,62)";
          }}
        >
          ‹
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px" }}>
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a página ${i + 1}`}
              style={{
                width: i === current ? "28px" : "10px",
                height: "10px",
                borderRadius: "5px",
                border: "none",
                background: i === current ? "#f59e0b" : "rgb(203,213,225)",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Siguiente"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "2px solid rgb(226,232,240)",
            background: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color: "rgb(13,27,62)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#f59e0b";
            (e.currentTarget as HTMLButtonElement).style.color = "#f59e0b";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgb(226,232,240)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgb(13,27,62)";
          }}
        >
          ›
        </button>
      </div>

      {/* Counter */}
      <p
        style={{
          textAlign: "center",
          marginTop: "16px",
          fontSize: "13px",
          color: "rgb(100,116,139)",
        }}
      >
        {current * perPage + 1}–{Math.min((current + 1) * perPage, testimonios.length)} de {testimonios.length} testimonios
      </p>
    </div>
  );
}
