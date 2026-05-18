import Image from "next/image";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className={cn(
        "relative w-full overflow-hidden",
        "h-screen min-h-[737px]"
      )}
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.webp"
        alt="Solar energy background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      {/* Content */}
      <div
        className={cn(
          "relative z-10",
          "flex h-full flex-col items-center justify-center",
          "px-6 text-center"
        )}
      >
        <h1
          className="mb-6 font-[Raleway] font-black uppercase tracking-[2px] text-white"
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          SUMATE AL NUEVO MUNDO
        </h1>

        <p
          className="max-w-[700px] font-medium leading-[1.7]"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(255,255,255,0.92)",
            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          Somos ENERGIA SOLAR BRANDSEN, una empresa especializada en el
          dimensionamiento/planificación, instalación, mantenimiento y reparación
          de sistemas de energía solar. Nuestro equipo de profesionales cuenta con
          años de experiencia en el sector y está comprometido con la calidad y la
          satisfacción del cliente.
        </p>
      </div>
    </section>
  );
}
