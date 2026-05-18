import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaqAccordion from "./FaqAccordion";

const metadata: Metadata = {
  title: "Instalación Solar Residencial | Energia Solar Brandsen",
  description:
    "Instalación de paneles solares para hogares en Brandsen. Ahorrá hasta un 90% en tu factura de luz. Presupuesto gratuito.",
};

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function ServiceHero() {
  return (
    <section
      style={{
        position: "relative",
        height: 520,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.webp"
        alt="Instalación de paneles solares en hogar"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(13,27,62,0.93) 0%, rgba(22,24,83,0.85) 100%)",
        }}
      />

      {/* Breadcrumb */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          paddingTop: 96,
          paddingLeft: 24,
          paddingRight: 24,
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* We need the breadcrumb positioned within the hero not the page */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Link
              href="/"
              style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}
            >
              Inicio
            </Link>
            <span style={{ color: "#f59e0b", fontSize: 13 }}>/</span>
            <Link
              href="/#servicios"
              style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}
            >
              Servicios
            </Link>
            <span style={{ color: "#f59e0b", fontSize: 13 }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
              Instalación Residencial
            </span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 720,
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(245,158,11,0.15)",
            border: "1px solid rgba(245,158,11,0.4)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 20,
          }}
        >
          <span style={{ fontSize: 14 }}>🏠</span>
          <span
            style={{
              color: "#f59e0b",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            Para tu hogar
          </span>
        </div>

        <h1
          style={{
            color: "white",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            margin: "0 0 20px",
          }}
        >
          Instalación Solar Residencial
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 18,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto 36px",
          }}
        >
          Ahorrá hasta un 90% en tu factura de luz con un sistema solar a medida
          para tu hogar.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/#contacto"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #f97316)",
              color: "rgb(13, 27, 62)",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 8,
              textDecoration: "none",
              border: "none",
              display: "inline-block",
              transition: "opacity 0.2s, transform 0.2s",
            }}
          >
            Solicitar presupuesto gratis
          </Link>
          <Link
            href="/#galeria"
            style={{
              background: "transparent",
              color: "white",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 8,
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.5)",
              display: "inline-block",
              transition: "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
          >
            Ver nuestros trabajos
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BENEFITS
───────────────────────────────────────────── */
const benefits = [
  {
    icon: "💡",
    title: "Ahorro inmediato",
    desc: "Reducí tu factura de luz entre un 70% y 90% desde el primer mes de funcionamiento.",
  },
  {
    icon: "📈",
    title: "Inversión que se paga sola",
    desc: "El retorno de inversión típico es de 3 a 5 años. Después, 20+ años de energía prácticamente gratis.",
  },
  {
    icon: "🌱",
    title: "Contribuís al planeta",
    desc: "Reducís tu huella de carbono y contribuís a un futuro más sustentable para las próximas generaciones.",
  },
  {
    icon: "🔋",
    title: "Independencia energética",
    desc: "Con baterías opcionales, seguís con energía aunque haya cortes. Total autonomía.",
  },
  {
    icon: "🏠",
    title: "Aumenta el valor de tu propiedad",
    desc: "Una vivienda con paneles solares vale entre un 10% y 20% más en el mercado inmobiliario.",
  },
  {
    icon: "🛡️",
    title: "25 años de garantía",
    desc: "Los paneles tienen garantía de producción de 25 años. Una inversión con seguridad a largo plazo.",
  },
];

function BenefitsSection() {
  return (
    <section style={{ background: "white", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#f59e0b",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              margin: "0 0 12px 0",
            }}
          >
            BENEFICIOS
          </p>
          <h2
            style={{
              color: "rgb(13, 27, 62)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            ¿Por qué instalar energía solar en tu hogar?
          </h2>
          <div
            style={{
              width: 60,
              height: 4,
              background: "linear-gradient(90deg, #f59e0b, #fde68a)",
              borderRadius: 2,
              margin: "16px auto 64px",
            }}
          />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        border: "1px solid rgb(226, 232, 240)",
        borderRadius: 16,
        padding: 32,
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "rgb(13, 27, 62)",
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.7,
          color: "rgb(100, 116, 139)",
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROCESS
───────────────────────────────────────────── */
const steps = [
  {
    number: 1,
    icon: "📋",
    title: "Consulta y dimensionamiento",
    desc: "Analizamos tu consumo eléctrico y diseñamos el sistema exacto que necesitás. Sin compromiso y sin costo.",
  },
  {
    number: 2,
    icon: "📄",
    title: "Propuesta y presupuesto",
    desc: "Te presentamos un presupuesto detallado con equipos, potencia, ahorro estimado y retorno de inversión.",
  },
  {
    number: 3,
    icon: "🔧",
    title: "Instalación profesional",
    desc: "Nuestro equipo certificado realiza la instalación en 1 a 2 días, con mínima interferencia en tu hogar.",
  },
  {
    number: 4,
    icon: "✅",
    title: "Puesta en marcha y seguimiento",
    desc: "Verificamos el funcionamiento, te mostramos cómo monitorear la producción y quedamos disponibles para cualquier consulta.",
  },
];

function ProcessSection() {
  return (
    <section
      style={{ background: "rgb(248, 250, 252)", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#f59e0b",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              margin: "0 0 12px 0",
            }}
          >
            EL PROCESO
          </p>
          <h2
            style={{
              color: "rgb(13, 27, 62)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Instalación llave en mano en 4 pasos
          </h2>
          <div
            style={{
              width: 60,
              height: 4,
              background: "linear-gradient(90deg, #f59e0b, #fde68a)",
              borderRadius: 2,
              margin: "16px auto 64px",
            }}
          />
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 32,
            position: "relative",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                background: "white",
                borderRadius: 16,
                padding: "48px 24px 32px",
                border: "1px solid rgb(226, 232, 240)",
              }}
            >
              {/* Number badge */}
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 32,
                  height: 32,
                  background: "#f59e0b",
                  color: "rgb(13, 27, 62)",
                  fontWeight: 900,
                  borderRadius: "50%",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(245,158,11,0.4)",
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div style={{ fontSize: 48, margin: "8px 0 16px" }}>
                {step.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "rgb(13, 27, 62)",
                  margin: "0 0 10px",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgb(100, 116, 139)",
                  maxWidth: 220,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GALLERY STRIP
───────────────────────────────────────────── */
const galleryImages = [
  { src: "/images/gallery-1.webp", alt: "Instalación solar residencial 1" },
  { src: "/images/hero-bg.webp", alt: "Paneles solares en techo" },
  { src: "/images/gallery-2.webp", alt: "Instalación solar residencial 2" },
  { src: "/images/gallery-3.webp", alt: "Instalación solar residencial 3" },
];

function GalleryStrip() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        height: 280,
        overflow: "hidden",
      }}
    >
      {galleryImages.map((img) => (
        <div
          key={img.src}
          style={{
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────────── */
function CtaSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, rgb(13,27,62), rgb(22,24,83))",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <h2
          style={{
            color: "white",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 800,
            margin: "0 0 20px",
            lineHeight: 1.2,
          }}
        >
          ¿Listo para instalar energía solar en tu hogar?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 18,
            lineHeight: 1.7,
            margin: "0 0 36px",
          }}
        >
          Pedí tu presupuesto sin costo y te contactamos en menos de 24 horas.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/#contacto"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #f97316)",
              color: "rgb(13, 27, 62)",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 8,
              textDecoration: "none",
              display: "inline-block",
              transition: "opacity 0.2s, transform 0.2s",
            }}
          >
            Pedir presupuesto gratis
          </Link>
          <Link
            href="/"
            style={{
              background: "transparent",
              color: "white",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 8,
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.5)",
              display: "inline-block",
              transition: "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
          >
            Volver a servicios
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ResidencialPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero />
        <BenefitsSection />
        <ProcessSection />
        <GalleryStrip />
        <FaqAccordion />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
