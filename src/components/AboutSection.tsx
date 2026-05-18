import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section
      id="acerca-de"
      className={cn("w-full px-6 py-12 text-center")}
      style={{ background: "rgb(22, 24, 83)" }}
    >
      <h2
        className={cn("mb-4 uppercase text-white")}
        style={{
          fontSize: "32px",
          fontWeight: 900,
          letterSpacing: "3px",
        }}
      >
        PRODUCTOS Y SERVICIO
      </h2>

      <p
        className={cn("mx-auto leading-[1.6]")}
        style={{
          fontSize: "16px",
          fontWeight: 600,
          color: "rgba(255,255,255,0.85)",
          maxWidth: "800px",
        }}
      >
        DIMENSIONAMIENTO DE SISTEMAS FOTOVOLTAICOS, INSTALACIÓN LLAVE EN MANO.
        Contamos con equipo profesional y certificado en el dimensionamiento e
        instalación de equipos fotovoltaicos para hogares, comercios e
        industrias. Trabajando en sociedad con ingenieros y técnicos con más de
        1000 instalaciones a lo largo de los últimos 12 años.
      </p>
    </section>
  );
}
