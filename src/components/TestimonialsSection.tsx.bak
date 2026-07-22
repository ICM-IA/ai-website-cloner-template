"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Propietario residencial, Brandsen",
    rating: 5,
    text: "Excelente trabajo. El equipo de Energía Solar Brandsen dimensionó perfectamente el sistema para nuestra casa. Bajamos la factura de luz un 80% en el primer mes. Muy profesionales y puntuales.",
    initials: "CM",
  },
  {
    name: "Laura Fernández",
    role: "Dueña de comercio, Brandsen",
    rating: 5,
    text: "Instalaron el sistema en nuestro local en dos días. El proceso fue muy ordenado y nos explicaron todo. El ahorro en energía fue inmediato. Los recomiendo sin dudar.",
    initials: "LF",
  },
  {
    name: "Roberto Suárez",
    role: "Estancia La Esperanza",
    rating: 5,
    text: "Tenemos una estancia con alto consumo y el sistema solar que instalaron redujo nuestros costos energéticos de forma notable. Excelente relación precio-calidad y posventa impecable.",
    initials: "RS",
  },
  {
    name: "Marina Torres",
    role: "Empresa constructora",
    rating: 5,
    text: "Trabajamos en varios proyectos con ellos. Siempre cumplen los plazos y la calidad de los materiales es excelente. Son el proveedor de confianza para nuestros clientes.",
    initials: "MT",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "32px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        border: "1px solid rgb(226,232,240)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Stars */}
      <div style={{ marginBottom: "16px" }}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span
            key={i}
            style={{ color: "#f59e0b", fontSize: "18px" }}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <div style={{ position: "relative", marginBottom: "24px", flex: 1 }}>
        <span
          aria-hidden="true"
          style={{
            color: "#f59e0b",
            fontSize: "48px",
            lineHeight: 1,
            display: "block",
            marginBottom: "-8px",
          }}
        >
          &ldquo;
        </span>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "rgb(71,85,105)",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          {testimonial.text}
        </p>
      </div>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgb(22,24,83), rgb(37,99,235))",
            color: "white",
            fontSize: "16px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "rgb(13,27,62)",
              margin: 0,
            }}
          >
            {testimonial.name}
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "rgb(100,116,139)",
              margin: 0,
            }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // On desktop (lg+) show 3 cards: current, current+1, current+2
  const visibleIndexes = [
    current % testimonials.length,
    (current + 1) % testimonials.length,
    (current + 2) % testimonials.length,
  ];

  return (
    <section
      id="testimonios"
      style={{
        background: "rgb(248, 250, 252)",
        padding: "96px 24px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            color: "#f59e0b",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          TESTIMONIOS
        </p>
        <h2
          style={{
            color: "rgb(13,27,62)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            marginTop: "12px",
            marginBottom: 0,
          }}
        >
          Lo que dicen nuestros clientes
        </h2>
        <div className="section-divider" style={{ margin: "16px auto 64px" }} />
      </div>

      {/* Desktop: 3-card grid */}
      <div
        className={cn("mx-auto max-w-6xl")}
        style={{ maxWidth: "1152px" }}
      >
        {/* Desktop grid (lg+): show 3 cards */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {visibleIndexes.map((idx, position) => (
            <div key={`${idx}-${position}`}>
              <TestimonialCard testimonial={testimonials[idx]} />
            </div>
          ))}
        </div>

        {/* Mobile: show 1 card */}
        <div className="lg:hidden" style={{ maxWidth: "480px", margin: "0 auto" }}>
          <TestimonialCard testimonial={testimonials[current]} />
        </div>
      </div>

      {/* Navigation dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          marginTop: "48px",
        }}
      >
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir al testimonio ${idx + 1}`}
            style={{
              width: idx === current ? "24px" : "10px",
              height: "10px",
              background: idx === current ? "#f59e0b" : "rgb(203,213,225)",
              borderRadius: idx === current ? "5px" : "50%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
