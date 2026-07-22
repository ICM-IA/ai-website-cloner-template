"use client";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { number: "55+", label: "Instalaciones realizadas" },
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
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <Image
          src="/images/hero-bg.webp"
          alt="Instalación de paneles solares"
          fill
          priority
          className="object-cover object-center"
        />
      </video>

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
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6"
        style={{ minHeight: "100vh", paddingBottom: "80px" }}
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
          Instalación profesional, dimensionamiento experto y más de 55 instalaciones
          realizadas en toda Argentina.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col md:flex-row flex-wrap items-center justify-center animate-fade-up stagger-4 opacity-0 w-full md:w-auto"
          style={{ gap: "12px", marginTop: "36px", paddingBottom: "20px" }}
        >
          {/* Primary CTA */}
          <Link
            href="/#contacto"
            className="w-full md:w-auto block no-underline transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "#f59e0b",
              color: "#0d1b3e",
              fontWeight: 800,
              padding: "14px 32px",
              borderRadius: "8px",
              fontSize: "16px",
              boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
              textAlign: "center",
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
            className="w-full md:w-auto block no-underline transition-all duration-200"
            style={{
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.5)",
              color: "white",
              fontWeight: 700,
              padding: "14px 32px",
              borderRadius: "8px",
              fontSize: "16px",
              textAlign: "center",
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

    </section>
  );
}
