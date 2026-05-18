"use client";
import { Home, Building2, Sun, Factory } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

const services: ServiceCard[] = [
  {
    icon: Home,
    title: "Instalación Residencial",
    desc: "Sistemas fotovoltaicos on-grid y off-grid para tu hogar. Dimensionamiento personalizado según tu consumo y mayor ahorro en tu factura.",
    features: [
      "Sistema on-grid y off-grid",
      "Paneles de alta eficiencia",
      "Inversores certificados",
      "Monitoreo en tiempo real",
    ],
    cta: "Ver más →",
    href: "/servicios/residencial",
  },
  {
    icon: Building2,
    title: "Instalación Comercial",
    desc: "Reducí los costos energéticos de tu empresa hasta un 90%. Diseñamos sistemas para comercios, pymes e industrias de cualquier escala.",
    features: [
      "Auditoría energética gratuita",
      "Financiación disponible",
      "Mantenimiento preventivo",
      "Garantía extendida",
    ],
    cta: "Ver más →",
    href: "/servicios/comercial",
    featured: true,
  },
  {
    icon: Sun,
    title: "Termotanque Solar",
    desc: "Agua caliente todo el año con energía solar. Modelos de 180L y 300L de acero inoxidable con garantía del fabricante.",
    features: [
      "Acero inoxidable calidad premium",
      "Eficiencia 80-85%",
      "Vida útil +20 años",
      "Instalación incluida",
    ],
    cta: "Ver más →",
    href: "/servicios/termotanque-solar",
  },
  {
    icon: Factory,
    title: "Instalación Industrial",
    desc: "Sistemas de gran escala para fábricas, plantas industriales y agronegocios. Máxima potencia, máximo ahorro energético.",
    features: [
      "Sistemas de 50kW a 1MW+",
      "Monitoreo SCADA",
      "Análisis de carga industrial",
      "Mantenimiento programado",
    ],
    cta: "Ver más →",
    href: "/servicios/industrial",
    featured: false,
  },
];

function Card({ service }: { service: ServiceCard }) {
  const Icon = service.icon;
  const { featured } = service;

  return (
    <Link
      href={service.href}
      className={cn("card-hover flex flex-col no-underline")}
      style={
        featured
          ? {
              background:
                "linear-gradient(135deg, rgb(13,27,62) 0%, rgb(22,24,83) 100%)",
              border: "none",
              boxShadow: "0 20px 60px rgba(13,27,62,0.3)",
              borderRadius: "16px",
              padding: "40px 32px",
              cursor: "pointer",
            }
          : {
              background: "white",
              border: "1px solid rgb(226,232,240)",
              borderRadius: "16px",
              padding: "40px 32px",
              cursor: "pointer",
            }
      }
    >
      {/* Icon container */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          background: featured ? "rgba(245,158,11,0.2)" : "rgb(239,246,255)",
          flexShrink: 0,
        }}
      >
        <Icon size={24} style={{ color: featured ? "#f59e0b" : "rgb(22,24,83)" }} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: featured ? "white" : "rgb(13,27,62)",
          marginBottom: "12px",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.7,
          color: featured ? "rgba(255,255,255,0.75)" : "rgb(100,116,139)",
          marginBottom: "24px",
        }}
      >
        {service.desc}
      </p>

      {/* Features list */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {service.features.map((feat) => (
          <li
            key={feat}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              fontWeight: 500,
              color: featured ? "rgba(255,255,255,0.85)" : "rgb(30,41,59)",
              marginBottom: "8px",
            }}
          >
            <span style={{ color: "#f59e0b", fontWeight: 700 }}>✓</span>
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <span
        style={{
          marginTop: "auto",
          paddingTop: "24px",
          fontSize: "14px",
          fontWeight: 700,
          color: featured ? "#f59e0b" : "rgb(22,24,83)",
          display: "block",
        }}
      >
        {service.cta}
      </span>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      style={{
        background: "rgb(248, 250, 252)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#f59e0b",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            LO QUE HACEMOS
          </p>

          <h2
            style={{
              color: "rgb(13,27,62)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              marginTop: "12px",
            }}
          >
            Servicios completos en energía solar
          </h2>

          <div className="section-divider" style={{ margin: "16px auto 0" }} />

          <p
            style={{
              color: "rgb(100,116,139)",
              fontSize: "16px",
              maxWidth: "600px",
              margin: "24px auto 64px",
            }}
          >
            Ofrecemos soluciones integrales para hogares, comercios e industrias.
            Desde el dimensionamiento hasta la instalación llave en mano.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
            alignItems: "stretch",
          }}
        >
          {services.map((service) => (
            <Card key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
