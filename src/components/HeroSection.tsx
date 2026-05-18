"use client";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { number: "50+", label: "Instalaciones realizadas" },
  { number: "4", label: "Años de experiencia" },
  { number: "100%", label: "Clientes satisfechos" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.webp"
        alt="Instalación de paneles solares"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,27,62,0.92) 0%, rgba(22,24,83,0.80) 50%, rgba(13,27,62,0.75) 100%)",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "100vh", paddingBottom: "120px" }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center animate-fade-up stagger-1 opacity-0"
          style={{
            background: "rgba(245,158,11,0.15)",
            border: "1px solid rgba(245,158,11,0.4)",
            borderRadius: "100px",
            padding: "6px 16px",
          }}
        >
          <span
            style={{
              color: "#f59e0b",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            ⚡ Energía Solar Profesional
          </span>
        </div>

        {/* H1 */}
        <h1
          className="text-white animate-fade-up stagger-2 opacity-0"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginTop: "20px",
          }}
        >
          Transformá tu hogar con
          <br />
          <span className="text-gradient-gold">Energía Solar</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up stagger-3 opacity-0"
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginTop: "20px",
          }}
        >
          Instalación profesional, dimensionamiento experto y +50 proyectos
          realizados en la región de Brandsen.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap items-center justify-center animate-fade-up stagger-4 opacity-0"
          style={{ gap: "16px", marginTop: "36px" }}
        >
          {/* Primary CTA */}
          <Link
            href="/#contacto"
            className="inline-block no-underline transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "#f59e0b",
              color: "#0d1b3e",
              fontWeight: 800,
              padding: "14px 32px",
              borderRadius: "8px",
              fontSize: "16px",
              boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#fbbf24";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#f59e0b";
            }}
          >
            Pedir presupuesto
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/#galeria"
            className="inline-block no-underline transition-all duration-200"
            style={{
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.5)",
              color: "white",
              fontWeight: 700,
              padding: "14px 32px",
              borderRadius: "8px",
              fontSize: "16px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "white";
              el.style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(255,255,255,0.5)";
              el.style.background = "transparent";
            }}
          >
            Ver nuestros trabajos
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          padding: "24px 48px",
        }}
      >
        <div className="mx-auto flex flex-wrap justify-around md:justify-between items-center gap-6" style={{ maxWidth: "1280px" }}>
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-0">
              {/* Divider before 2nd and 3rd stats on desktop */}
              {index > 0 && (
                <div
                  className="hidden md:block self-stretch mr-8"
                  style={{
                    width: "1px",
                    background: "rgba(255,255,255,0.15)",
                    minHeight: "40px",
                  }}
                />
              )}
              <div className="text-center">
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: 900,
                    color: "#f59e0b",
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
