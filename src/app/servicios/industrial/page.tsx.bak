import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaqAccordion from "./FaqAccordion";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Instalación Solar Industrial",
  description:
    "Sistemas fotovoltaicos de gran escala para industrias, fábricas y agronegocios en Buenos Aires. Desde 50kW hasta 1MW+.",
};

// ─── Tier card data ───────────────────────────────────────────────────────────
const tiers = [
  {
    name: "Sistema Mediano",
    potencia: "50kW – 200kW",
    ideal: "Pymes industriales, talleres grandes, frigoríficos",
    paneles: "100 – 400 paneles",
    superficie: "400 – 1.600 m²",
    ahorro: "Hasta $3.000.000/mes",
    featured: false,
  },
  {
    name: "Sistema Grande",
    potencia: "200kW – 500kW",
    ideal: "Plantas industriales medianas, industria alimenticia, metalúrgica",
    paneles: "400 – 1.000 paneles",
    superficie: "1.600 – 4.000 m²",
    ahorro: "Hasta $8.000.000/mes",
    featured: true,
  },
  {
    name: "Sistema Megawatt",
    potencia: "500kW – 1MW+",
    ideal: "Grandes industrias, parques solares, agronegocios extensivos",
    paneles: "1.000+ paneles",
    superficie: "4.000+ m²",
    ahorro: "Ahorro personalizado",
    featured: false,
  },
];

// ─── Benefits data ────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: "⚡",
    title: "Reducción masiva de costos",
    desc: "Para industrias con facturas de millones de pesos mensuales, la energía solar puede reducir el costo energético un 80-90%, con retorno en 2-4 años.",
  },
  {
    icon: "🔒",
    title: "Cobertura ante incrementos tarifarios",
    desc: "Fijás parte de tu costo energético por 25 años, protegiéndote de aumentos de tarifas y brindando previsibilidad financiera.",
  },
  {
    icon: "📡",
    title: "Monitoreo SCADA en tiempo real",
    desc: "Sistema de telemetría industrial con alertas automáticas, reportes de producción y análisis de rendimiento para tu equipo técnico.",
  },
  {
    icon: "🌿",
    title: "Certificación ESG y RSE",
    desc: "Cumplí con estándares ambientales, obtenés certificaciones verdes y mejorás el perfil ESG de tu empresa ante inversores y clientes.",
  },
];

// ─── Process steps ────────────────────────────────────────────────────────────
const steps = [
  {
    icon: "🔍",
    title: "Relevamiento técnico",
    desc: "Visita técnica para analizar consumo, calidad de red, infraestructura eléctrica, orientación y capacidad estructural del techo o terreno.",
  },
  {
    icon: "📐",
    title: "Ingeniería del proyecto",
    desc: "Ingenieros especializados diseñan el sistema, cálculo estructural, diagrama unifilar, simulación de producción anual y análisis financiero.",
  },
  {
    icon: "📋",
    title: "Gestión de permisos",
    desc: "Nos encargamos de toda la documentación ante municipio, distribuidora eléctrica y organismos regulatorios correspondientes.",
  },
  {
    icon: "🏗️",
    title: "Instalación y comisionamiento",
    desc: "Equipo técnico especializado, coordinación con tu área de mantenimiento y puesta en marcha con pruebas de rendimiento certificadas.",
  },
  {
    icon: "📡",
    title: "Operación y mantenimiento",
    desc: "Plan de mantenimiento preventivo, monitoreo SCADA 24/7 y soporte técnico prioritario para garantizar la máxima disponibilidad del sistema.",
  },
];

export default function IndustrialPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── 1. HERO ────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(135deg, rgb(13,27,62) 0%, rgb(22,24,83) 60%, rgb(13,27,62) 100%)",
            padding: "140px 24px 100px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative glow */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
            {/* Badge */}
            <span
              style={{
                display: "inline-block",
                background: "rgba(245,158,11,0.15)",
                border: "1px solid rgba(245,158,11,0.4)",
                color: "#f59e0b",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 2,
                padding: "6px 18px",
                borderRadius: 20,
                marginBottom: 24,
              }}
            >
              🏭 Para industrias
            </span>

            <h1
              style={{
                color: "white",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                margin: "0 0 24px 0",
              }}
            >
              Instalación Solar Industrial
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: 1.7,
                maxWidth: 680,
                margin: "0 auto 40px",
              }}
            >
              Sistemas de 50kW a 1MW+ para fábricas, plantas industriales y agronegocios.
              Máximo ahorro energético a escala.
            </p>

            {/* CTAs */}
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
                  background: "#f59e0b",
                  color: "rgb(13,27,62)",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 800,
                  fontSize: 15,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.2s",
                }}
              >
                Consultar para mi industria
              </Link>
              <Link
                href="#specs"
                style={{
                  background: "transparent",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  display: "inline-block",
                  border: "2px solid rgba(255,255,255,0.35)",
                  transition: "all 0.2s",
                }}
              >
                Ver especificaciones
              </Link>
            </div>
          </div>
        </section>

        {/* ── 2. SPECS ───────────────────────────────────────────────────── */}
        <section
          id="specs"
          style={{
            background: "rgb(13,27,62)",
            padding: "80px 24px",
            color: "white",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 64 }}>
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
                ESPECIFICACIONES
              </p>
              <h2
                style={{
                  color: "white",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                Soluciones para cada escala industrial
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

            {/* Tier cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
                alignItems: "start",
              }}
            >
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    padding: 32,
                    background: tier.featured
                      ? "rgba(245,158,11,0.12)"
                      : "rgba(255,255,255,0.05)",
                    border: tier.featured
                      ? "1.5px solid rgba(245,158,11,0.6)"
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Featured badge */}
                  {tier.featured && (
                    <span
                      style={{
                        position: "absolute",
                        top: -12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#f59e0b",
                        color: "rgb(13,27,62)",
                        fontSize: 11,
                        fontWeight: 900,
                        letterSpacing: 2,
                        padding: "4px 12px",
                        borderRadius: 20,
                        whiteSpace: "nowrap",
                      }}
                    >
                      MÁS ELEGIDO
                    </span>
                  )}

                  {/* Card name */}
                  <p
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: 800,
                      margin: "0 0 16px 0",
                    }}
                  >
                    {tier.name}
                  </p>

                  {/* Potencia */}
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      margin: "0 0 8px 0",
                    }}
                  >
                    POTENCIA
                  </p>
                  <p
                    style={{
                      color: "#f59e0b",
                      fontSize: 28,
                      fontWeight: 900,
                      margin: "0 0 24px 0",
                      lineHeight: 1,
                    }}
                  >
                    {tier.potencia}
                  </p>

                  {/* Rows */}
                  {[
                    { label: "Ideal para", value: tier.ideal },
                    { label: "Paneles", value: tier.paneles },
                    { label: "Superficie", value: tier.superficie },
                    { label: "Ahorro estimado", value: tier.ahorro, gold: true },
                  ].map((row) => (
                    <div
                      key={row.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 12,
                        padding: "10px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                        fontSize: 14,
                      }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>
                        {row.label}
                      </span>
                      <span
                        style={{
                          color: row.gold ? "#f59e0b" : "white",
                          fontWeight: row.gold ? 700 : 500,
                          textAlign: "right",
                        }}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. BENEFITS ───────────────────────────────────────────────── */}
        <section style={{ background: "white", padding: "96px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 64 }}>
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
                  color: "rgb(13, 27, 62)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                Por qué las industrias eligen energía solar
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

            {/* 2x2 grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 28,
              }}
            >
              {benefits.map((b) => (
                <div
                  key={b.title}
                  style={{
                    background: "rgb(248, 250, 252)",
                    border: "1px solid rgb(226, 232, 240)",
                    borderRadius: 16,
                    padding: 40,
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      background: "rgba(245,158,11,0.1)",
                      borderRadius: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 26,
                      marginBottom: 20,
                    }}
                  >
                    {b.icon}
                  </div>
                  <h3
                    style={{
                      color: "rgb(13, 27, 62)",
                      fontSize: 18,
                      fontWeight: 800,
                      margin: "0 0 12px 0",
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      color: "rgb(71, 85, 105)",
                      fontSize: 15,
                      lineHeight: 1.8,
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

        {/* ── 4. PROCESS ────────────────────────────────────────────────── */}
        <section style={{ background: "rgb(248, 250, 252)", padding: "96px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 64 }}>
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
                METODOLOGÍA
              </p>
              <h2
                style={{
                  color: "rgb(13, 27, 62)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                Proceso para proyectos industriales
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
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  style={{
                    display: "flex",
                    gap: 28,
                    alignItems: "flex-start",
                  }}
                >
                  {/* Number + connector */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "rgb(13, 27, 62)",
                        border: "3px solid #f59e0b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        flexShrink: 0,
                      }}
                    >
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        style={{
                          width: 2,
                          height: 48,
                          background: "rgba(245,158,11,0.3)",
                          margin: "4px 0",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: 10, paddingBottom: index < steps.length - 1 ? 0 : 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          background: "#f59e0b",
                          color: "rgb(13,27,62)",
                          fontSize: 11,
                          fontWeight: 900,
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {index + 1}
                      </span>
                      <h3
                        style={{
                          color: "rgb(13, 27, 62)",
                          fontSize: 17,
                          fontWeight: 800,
                          margin: 0,
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        color: "rgb(71, 85, 105)",
                        fontSize: 15,
                        lineHeight: 1.8,
                        margin: "0 0 32px 0",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. FAQ ─────────────────────────────────────────────────────── */}
        <FaqAccordion />

        {/* ── 6. CTA ─────────────────────────────────────────────────────── */}
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
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 900,
                margin: "0 0 20px 0",
                lineHeight: 1.2,
              }}
            >
              ¿Tu empresa está lista para dar el salto a solar?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 17,
                lineHeight: 1.7,
                margin: "0 0 40px 0",
              }}
            >
              Contactanos para una visita técnica sin cargo. Evaluamos tu proyecto y te
              presentamos una propuesta de ingeniería completa.
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
                  background: "#f59e0b",
                  color: "rgb(13,27,62)",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 800,
                  fontSize: 15,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.2s",
                }}
              >
                Solicitar visita técnica
              </Link>
              <Link
                href="/"
                style={{
                  background: "transparent",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  display: "inline-block",
                  border: "2px solid rgba(255,255,255,0.35)",
                  transition: "all 0.2s",
                }}
              >
                Volver a servicios
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
