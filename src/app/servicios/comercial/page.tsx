import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaqAccordion from "./FaqAccordion";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Instalación Solar Comercial",
  description:
    "Reducí los costos energéticos de tu empresa hasta un 90% con energía solar. Presupuesto gratuito para comercios y pymes en Brandsen.",
};

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const metrics = [
  { number: "Hasta 90%", label: "Ahorro en energía" },
  { number: "3-5 años", label: "Retorno de inversión" },
  { number: "25 años", label: "Garantía de paneles" },
  { number: "48 hs", label: "Tiempo de instalación" },
];

const benefits = [
  {
    icon: "💰",
    title: "Reducción inmediata de costos",
    desc: "Los sistemas comerciales generan retorno visible desde el primer mes. Bajá tu factura de energía hasta un 90%.",
  },
  {
    icon: "📊",
    title: "ROI comprobable",
    desc: "Te presentamos un análisis financiero detallado: inversión, ahorro proyectado y punto de equilibrio mes a mes.",
  },
  {
    icon: "⚡",
    title: "Continuidad operativa",
    desc: "Con sistemas híbridos o con baterías, tu comercio sigue funcionando durante cortes de luz.",
  },
  {
    icon: "🏆",
    title: "Imagen sustentable",
    desc: "Tus clientes valoran el compromiso ambiental. Diferenciarte con energía renovable suma a tu marca.",
  },
  {
    icon: "🔧",
    title: "Mantenimiento mínimo",
    desc: "Los paneles no tienen partes móviles. El mantenimiento es simple y nosotros lo realizamos de forma preventiva.",
  },
  {
    icon: "📋",
    title: "Financiación disponible",
    desc: "Contamos con opciones de financiación para que la inversión no impacte en tu capital de trabajo.",
  },
];

const casos = [
  {
    title: "Supermercados y almacenes",
    img: "/images/gallery-1.webp",
    desc: "Establecimientos con alta demanda de frío y iluminación. Los sistemas de 15kW a 50kW reducen los costos operativos de manera significativa.",
    stats: "Ahorro promedio: 75-85%",
  },
  {
    title: "Talleres y galpones",
    img: "/images/gallery-4.webp",
    desc: "Superficies techadas amplias, ideales para instalaciones de gran potencia. El sistema paga la inversión en 2 a 4 años.",
    stats: "Sistema típico: 30-100kW",
  },
  {
    title: "Oficinas y consultorios",
    img: "/images/product-4.webp",
    desc: "Consumo concentrado en horario comercial, coincide perfectamente con la generación solar. Ideal para profesionales.",
    stats: "Retorno en: 3-4 años",
  },
];

const steps = [
  {
    icon: "🔍",
    title: "Auditoría energética gratuita",
    desc: "Analizamos tus facturas, equipos y horarios de consumo para diseñar el sistema más eficiente para tu negocio.",
  },
  {
    icon: "📊",
    title: "Propuesta técnica y financiera",
    desc: "Recibís un informe completo: plano de instalación, equipos seleccionados, análisis de ROI y opciones de financiación.",
  },
  {
    icon: "⚡",
    title: "Instalación certificada",
    desc: "Realizamos la instalación en días hábiles, coordinando para mínimo impacto en tus operaciones.",
  },
  {
    icon: "📡",
    title: "Monitoreo y soporte",
    desc: "Plataforma de monitoreo en tiempo real y soporte técnico posventa. Sabemos que tu negocio no puede parar.",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function ComercialPage() {
  return (
    <>
      <Navbar />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13,27,62,0.85) 0%, rgba(22,24,83,0.85) 60%, rgba(30,58,138,0.85) 100%), url('/images/servicios-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "120px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.4)",
              borderRadius: 24,
              padding: "8px 20px",
              marginBottom: 28,
            }}
          >
            <span style={{ fontSize: 16 }}>🏢</span>
            <span
              style={{
                color: "rgb(245,158,11)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Para tu empresa
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
            Instalación Solar{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fde68a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Comercial
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
              margin: "0 0 40px",
              maxWidth: 620,
              marginInline: "auto",
            }}
          >
            Reducí los costos energéticos de tu comercio o pyme hasta un 90%. Auditoría energética
            gratuita.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
            }}
          >
            <Link
              href="/#contacto"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "rgb(13,27,62)",
                fontWeight: 800,
                fontSize: 15,
                padding: "16px 32px",
                borderRadius: 8,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(245,158,11,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              Solicitar auditoría gratuita
            </Link>
            <Link
              href="#casos"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "white",
                fontWeight: 700,
                fontSize: 15,
                padding: "16px 32px",
                borderRadius: 8,
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.35)",
                transition: "border-color 0.2s, background 0.2s",
              }}
            >
              Ver casos de éxito
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. MetricsBar ───────────────────────────────────────────────────── */}
      <div
        style={{
          background: "rgb(245,158,11)",
          padding: "32px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            textAlign: "center",
          }}
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: "rgb(13,27,62)",
                  margin: "0 0 4px",
                  lineHeight: 1.1,
                }}
              >
                {m.number}
              </p>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(13,27,62,0.7)",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  margin: 0,
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. BenefitsSection ──────────────────────────────────────────────── */}
      <section style={{ background: "white", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                color: "#f59e0b",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              BENEFICIOS
            </p>
            <h2
              style={{
                color: "rgb(13,27,62)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                margin: "0 0 16px",
              }}
            >
              ¿Por qué elegir energía solar para tu comercio?
            </h2>
            <div
              style={{
                width: 60,
                height: 4,
                background: "linear-gradient(90deg, #f59e0b, #fde68a)",
                borderRadius: 2,
                margin: "0 auto",
              }}
            />
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
            }}
          >
            {benefits.map((b) => (
              <div
                key={b.title}
                style={{
                  border: "1px solid rgb(226,232,240)",
                  borderRadius: 16,
                  padding: "32px 28px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    marginBottom: 16,
                    lineHeight: 1,
                  }}
                >
                  {b.icon}
                </div>
                <h3
                  style={{
                    color: "rgb(13,27,62)",
                    fontSize: 17,
                    fontWeight: 700,
                    margin: "0 0 10px",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    color: "rgb(71,85,105)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CasosSection ─────────────────────────────────────────────────── */}
      <section
        id="casos"
        style={{ background: "rgb(248,250,252)", padding: "96px 24px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                color: "#f59e0b",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              CASOS
            </p>
            <h2
              style={{
                color: "rgb(13,27,62)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                margin: 0,
              }}
            >
              Tipos de comercios donde trabajamos
            </h2>
            <div
              style={{
                width: 60,
                height: 4,
                background: "linear-gradient(90deg, #f59e0b, #fde68a)",
                borderRadius: 2,
                margin: "16px auto 0",
              }}
            />
          </div>

          {/* Caso cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {casos.map((c) => (
              <div
                key={c.title}
                style={{
                  display: "flex",
                  gap: 24,
                  alignItems: "center",
                  background: "white",
                  borderRadius: 16,
                  padding: 28,
                  border: "1px solid rgb(226,232,240)",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <Image
                    src={c.img}
                    alt={c.title}
                    width={200}
                    height={160}
                    style={{ objectFit: "cover", borderRadius: 12 }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <h3
                    style={{
                      color: "rgb(13,27,62)",
                      fontSize: 18,
                      fontWeight: 700,
                      margin: "0 0 8px",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      color: "rgb(71,85,105)",
                      fontSize: 14,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {c.desc}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 12,
                      background: "rgba(245,158,11,0.1)",
                      color: "rgb(180,100,0)",
                      border: "1px solid rgba(245,158,11,0.3)",
                      borderRadius: 20,
                      padding: "4px 12px",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {c.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ProcessSection ───────────────────────────────────────────────── */}
      <section style={{ background: "white", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                color: "#f59e0b",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              PROCESO
            </p>
            <h2
              style={{
                color: "rgb(13,27,62)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                margin: 0,
              }}
            >
              El proceso para tu comercio
            </h2>
            <div
              style={{
                width: 60,
                height: 4,
                background: "linear-gradient(90deg, #f59e0b, #fde68a)",
                borderRadius: 2,
                margin: "16px auto 0",
              }}
            />
          </div>

          {/* Steps */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 32,
            }}
          >
            {steps.map((step, i) => (
              <div key={step.title} style={{ textAlign: "center" }}>
                {/* Step number + icon */}
                <div
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 72,
                    height: 72,
                    background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))",
                    border: "2px solid rgba(245,158,11,0.3)",
                    borderRadius: "50%",
                    marginBottom: 20,
                    fontSize: 32,
                  }}
                >
                  {step.icon}
                  <span
                    style={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      width: 24,
                      height: 24,
                      background: "rgb(245,158,11)",
                      color: "rgb(13,27,62)",
                      borderRadius: "50%",
                      fontSize: 11,
                      fontWeight: 900,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3
                  style={{
                    color: "rgb(13,27,62)",
                    fontSize: 16,
                    fontWeight: 700,
                    margin: "0 0 10px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "rgb(71,85,105)",
                    fontSize: 14,
                    lineHeight: 1.7,
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

      {/* ── 6. FAQ ──────────────────────────────────────────────────────────── */}
      <FaqAccordion />

      {/* ── 7. CtaSection ───────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, rgb(13,27,62), rgb(22,24,83))",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2
            style={{
              color: "white",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: "0 0 20px",
              lineHeight: 1.2,
            }}
          >
            ¿Querés reducir los costos de tu empresa?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: 17,
              lineHeight: 1.7,
              margin: "0 0 40px",
            }}
          >
            Pedí tu auditoría energética gratuita. Analizamos tu consumo y te presentamos una
            propuesta en 48 horas.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
            }}
          >
            <Link
              href="/#contacto"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "rgb(13,27,62)",
                fontWeight: 800,
                fontSize: 15,
                padding: "16px 36px",
                borderRadius: 8,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(245,158,11,0.4)",
              }}
            >
              Pedir auditoría gratuita
            </Link>
            <Link
              href="/"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "white",
                fontWeight: 700,
                fontSize: 15,
                padding: "16px 36px",
                borderRadius: 8,
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.35)",
              }}
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
