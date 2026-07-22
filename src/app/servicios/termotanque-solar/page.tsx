import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaqAccordion from "./FaqAccordion";

const metadata: Metadata = {
  title: "Termotanque Solar",
  description:
    "Termotanques solares de acero inoxidable 180L y 300L. Agua caliente todo el año con energía solar. Instalación incluida en Brandsen.",
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
        src="/images/termotanque-background.jpg"
        alt="Termotanque solar instalado"
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
              Termotanque Solar
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
          <span style={{ fontSize: 14 }}>☀️</span>
          <span
            style={{
              color: "#f59e0b",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            Agua caliente solar
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
          Termotanque Solar
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
          Agua caliente todo el año aprovechando la energía del sol. Modelos de
          180L y 300L en acero inoxidable con 10 años de garantía.
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
            href="#modelos"
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
            Ver modelos y precios
          </Link>
          <Link
            href="/#contacto"
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
            Pedir presupuesto
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MODELS SECTION
───────────────────────────────────────────── */
const models = [
  {
    id: "TS18",
    label: "TS18 • 180 Litros",
    image: "/images/termotanque-180l.webp",
    ideal: "Familias de 2 a 4 personas",
    capacidad: "180 litros",
    material: "Acero inoxidable grado alimentario",
    colector: "Panel plano de cobre y vidrio templado",
    eficiencia: "80-85%",
    garantia: "10 años de fabricante",
    instalacion: "Incluida",
    popular: false,
  },
  {
    id: "TS30",
    label: "TS30 • 300 Litros",
    image: "/images/termotanque-300l.webp",
    ideal: "Familias numerosas o uso comercial liviano",
    capacidad: "300 litros",
    material: "Acero inoxidable grado alimentario",
    colector: "2 paneles planos de cobre y vidrio templado",
    eficiencia: "82-88%",
    garantia: "10 años de fabricante",
    instalacion: "Incluida",
    popular: true,
  },
];

type ModelSpec = (typeof models)[number];

function ModelCard({ model }: { model: ModelSpec }) {
  const specs: { label: string; value: string }[] = [
    { label: "Ideal para", value: model.ideal },
    { label: "Capacidad", value: model.capacidad },
    { label: "Material", value: model.material },
    { label: "Colector", value: model.colector },
    { label: "Eficiencia solar", value: model.eficiencia },
    { label: "Garantía", value: model.garantia },
    { label: "Instalación", value: model.instalacion },
  ];

  return (
    <div
      style={{
        border: "1px solid rgb(226,232,240)",
        borderRadius: 20,
        padding: 0,
        overflow: "hidden",
        position: "relative",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        cursor: "default",
      }}
    >
      {/* Image area */}
      <div
        style={{
          background: "rgb(248,250,252)",
          padding: 40,
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Model name badge */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            background: "rgb(22,24,83)",
            color: "white",
            fontSize: 12,
            fontWeight: 700,
            padding: "4px 12px",
            borderRadius: 20,
          }}
        >
          {model.label}
        </div>

        {/* Popular badge */}
        {model.popular && (
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "#f59e0b",
              color: "rgb(13,27,62)",
              fontSize: 11,
              fontWeight: 900,
              letterSpacing: 1,
              padding: "4px 10px",
              borderRadius: 20,
            }}
          >
            MÁS POPULAR
          </div>
        )}

        <Image
          src={model.image}
          alt={`Termotanque solar ${model.label}`}
          width={220}
          height={260}
          style={{
            maxWidth: 220,
            height: 260,
            objectFit: "contain",
            margin: "0 auto",
            display: "block",
          }}
        />
      </div>

      {/* Info area */}
      <div style={{ padding: 32 }}>
        {/* Specs */}
        <div>
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: 10,
                paddingBottom: 10,
                borderBottom:
                  i < specs.length - 1 ? "1px solid rgb(226,232,240)" : "none",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: "rgb(100,116,139)",
                  fontWeight: 500,
                  flexShrink: 0,
                }}
              >
                {spec.label}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: "rgb(13,27,62)",
                  fontWeight: 600,
                  textAlign: "right",
                }}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Price label */}
        <p
          style={{
            fontSize: 13,
            color: "rgb(100,116,139)",
            marginTop: 20,
            marginBottom: 0,
            textAlign: "center",
          }}
        >
          Consultá el precio
        </p>

        {/* CTA button */}
        <Link
          href="/#contacto"
          style={{
            display: "block",
            width: "100%",
            background: "rgb(22,24,83)",
            color: "white",
            textAlign: "center",
            padding: "14px",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 15,
            marginTop: 24,
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
            boxSizing: "border-box",
          }}
        >
          Solicitar presupuesto
        </Link>
      </div>
    </div>
  );
}

function ModelsSection() {
  return (
    <section id="modelos" style={{ background: "white", padding: "96px 24px" }}>
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
            MODELOS
          </p>
          <h2
            style={{
              color: "rgb(13, 27, 62)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Elegí el termotanque ideal para vos
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

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BENEFITS SECTION
───────────────────────────────────────────── */
const benefits = [
  {
    icon: "💧",
    title: "Agua caliente todo el año",
    desc: "El sistema funciona durante todo el año, incluso en invierno. Los días nublados el sistema auxiliar eléctrico entra automáticamente.",
  },
  {
    icon: "💰",
    title: "Ahorrá hasta un 80% en agua caliente",
    desc: "El agua caliente representa entre el 20% y 30% del consumo energético del hogar. Con solar, ese costo se reduce drásticamente.",
  },
  {
    icon: "🌱",
    title: "Cero emisiones",
    desc: "Calentás el agua con energía limpia y renovable. Sin gas, sin CO₂, sin impacto ambiental.",
  },
  {
    icon: "🛡️",
    title: "10 años de garantía",
    desc: "Todos nuestros modelos cuentan con garantía del fabricante de 10 años sobre el tanque inoxidable y el colector solar.",
  },
];

function BenefitsSection() {
  return (
    <section
      style={{ background: "rgb(13,27,62)", padding: "96px 24px" }}
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
            VENTAJAS
          </p>
          <h2
            style={{
              color: "white",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            ¿Por qué elegir un termotanque solar?
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
            <div
              key={benefit.title}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: 32,
                background: "rgba(255,255,255,0.04)",
                transition: "border-color 0.3s, background 0.3s",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{benefit.icon}</div>
              <h3
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: 700,
                  margin: "0 0 10px",
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   INSTALLATION SECTION
───────────────────────────────────────────── */
const installChecklist = [
  "Montaje del colector solar en techo",
  "Instalación del tanque en lugar adecuado",
  "Conexión al sistema de agua existente",
  "Sistema de respaldo eléctrico automático",
  "Prueba de presión y funcionamiento",
  "Capacitación de uso al propietario",
];

function InstallationSection() {
  return (
    <section
      style={{ background: "rgb(248,250,252)", padding: "96px 24px" }}
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
            INSTALACIÓN
          </p>
          <h2
            style={{
              color: "rgb(13, 27, 62)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Instalación profesional incluida
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

        {/* 2-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Left: text + checklist */}
          <div>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgb(71, 85, 105)",
                margin: "0 0 32px",
              }}
            >
              La instalación del termotanque solar está incluida en el precio.
              Nuestro equipo técnico realiza el montaje en un solo día,
              respetando las normas eléctricas y de plomería.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {installChecklist.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 16,
                    fontSize: 15,
                    color: "rgb(13, 27, 62)",
                    fontWeight: 500,
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: "#f59e0b",
                      fontWeight: 700,
                      fontSize: 16,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image */}
          <div style={{ position: "relative", height: 360 }}>
            <Image
              src="/images/gallery-1.webp"
              alt="Instalación de termotanque solar"
              fill
              style={{
                objectFit: "cover",
                borderRadius: 16,
              }}
            />
          </div>
        </div>
      </div>
    </section>
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
          ¿Empezás a ahorrar en agua caliente hoy?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 18,
            lineHeight: 1.7,
            margin: "0 0 36px",
          }}
        >
          Consultá disponibilidad y precio de los modelos. Instalación en menos
          de 1 semana.
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
            Consultar precio y disponibilidad
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
export default function TermotanqueSolarPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero />
        <ModelsSection />
        <BenefitsSection />
        <InstallationSection />
        <FaqAccordion />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
