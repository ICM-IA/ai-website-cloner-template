import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StatsSection } from "@/components/StatsSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé nuestra historia, equipo y valores. Más de 4 años instalando energía solar en Brandsen y la región.",
};

const valores = [
  {
    icon: "⚡",
    title: "Calidad garantizada",
    desc: "Solo trabajamos con equipos certificados de primer nivel: paneles Tier 1, inversores de marcas líderes y estructuras de aluminio marine grade.",
  },
  {
    icon: "🤝",
    title: "Compromiso real",
    desc: "Acompañamos cada proyecto desde la visita técnica hasta la puesta en marcha y el seguimiento post-instalación.",
  },
  {
    icon: "🌿",
    title: "Sustentabilidad",
    desc: "Creemos en un futuro energético limpio. Cada instalación es un paso concreto hacia la independencia energética y el cuidado del medioambiente.",
  },
  {
    icon: "📏",
    title: "Dimensionamiento preciso",
    desc: "Analizamos tu consumo real y diseñamos el sistema exacto que necesitás, sin sobredimensionar ni quedarte corto.",
  },
  {
    icon: "🔧",
    title: "Servicio postventa",
    desc: "Contamos con soporte técnico para todo lo que necesites después de la instalación: mantenimiento, monitoreo y garantías.",
  },
  {
    icon: "💡",
    title: "Transparencia total",
    desc: "Te explicamos cada paso del proceso, los materiales que usamos y los resultados reales que podés esperar.",
  },
];

const equipo = [
  {
    nombre: "Equipo de Instalación",
    rol: "Técnicos certificados",
    desc: "Instaladores con capacitación en sistemas fotovoltaicos y habilitación eléctrica para trabajos en altura.",
  },
  {
    nombre: "Ingeniería & Diseño",
    rol: "Dimensionamiento y proyectos",
    desc: "Ingenieros especializados en energías renovables que diseñan cada sistema con simulaciones de producción real.",
  },
  {
    nombre: "Atención al Cliente",
    rol: "Asesoramiento y seguimiento",
    desc: "Te acompañamos desde la primera consulta hasta que el sistema esté funcionando y generando ahorro.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(13,27,62,0.85) 0%, rgba(22,24,83,0.85) 100%), url('/images/paneles-background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            padding: "140px 24px 96px",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                color: "#f59e0b",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              QUIÉNES SOMOS
            </p>
            <h1
              style={{
                color: "white",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Más de{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                4 años
              </span>{" "}
              transformando hogares y empresas con energía solar
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "18px",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Somos una empresa de Brandsen, Buenos Aires, especializada en instalaciones
              fotovoltaicas y termotanques solares para el sector residencial, comercial e
              industrial. Nacimos con la convicción de que la energía solar es el camino
              hacia una mayor independencia económica y ambiental.
            </p>
            <Link
              href="/contacto"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "rgb(13,27,62)",
                fontWeight: 800,
                fontSize: "16px",
                padding: "14px 36px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Contactanos
            </Link>
          </div>
        </section>

        {/* Stats */}
        <StatsSection />

        {/* Historia */}
        <section style={{ background: "white", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "64px",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#f59e0b",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  NUESTRA HISTORIA
                </p>
                <h2
                  style={{
                    color: "rgb(13,27,62)",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 800,
                    marginBottom: "20px",
                    lineHeight: 1.2,
                  }}
                >
                  Nacimos en Brandsen para servir a la región
                </h2>
                <p style={{ color: "rgb(100,116,139)", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                  Energia Solar Brandsen nació hace más de cuatro años con una misión clara:
                  llevar soluciones de energía renovable a los hogares y empresas del partido
                  de Brandsen y la región bonaerense, con la misma calidad que cualquier
                  empresa de capital federal.
                </p>
                <p style={{ color: "rgb(100,116,139)", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                  Comenzamos instalando sistemas residenciales pequeños y hoy contamos con
                  más de 55 instalaciones completadas, desde hogares particulares hasta
                  comercios, galpones industriales y emprendimientos agropecuarios.
                </p>
                <p style={{ color: "rgb(100,116,139)", fontSize: "16px", lineHeight: 1.8 }}>
                  También somos distribuidores mayoristas y minoristas de equipos solares,
                  por lo que podemos ofrecerte los mejores precios en paneles, inversores,
                  baterías y estructuras de montaje.
                </p>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg, rgb(13,27,62), rgb(22,24,83))",
                  borderRadius: "20px",
                  padding: "48px 40px",
                  color: "white",
                }}
              >
                <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "32px", color: "#f59e0b" }}>
                  ¿Por qué elegirnos?
                </h3>
                {[
                  "Empresa local con conocimiento de la zona",
                  "Distribuidores directos – precios de mayorista",
                  "Financiación disponible en cuotas",
                  "Garantía extendida en equipos e instalación",
                  "Monitoreo remoto incluido",
                  "Soporte postventa permanente",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "18px" }}>✔</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section style={{ background: "rgb(248,250,252)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p
                style={{
                  color: "#f59e0b",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                NUESTROS VALORES
              </p>
              <h2
                style={{
                  color: "rgb(13,27,62)",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                }}
              >
                Lo que nos define como empresa
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #f59e0b, #fde68a)",
                  borderRadius: "2px",
                  margin: "16px auto 0",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "32px",
              }}
            >
              {valores.map((v) => (
                <div
                  key={v.title}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "32px",
                    border: "1px solid rgb(226,232,240)",
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "16px" }}>{v.icon}</div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "rgb(13,27,62)",
                      marginBottom: "10px",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgb(100,116,139)", lineHeight: 1.7 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section style={{ background: "white", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p
                style={{
                  color: "#f59e0b",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                NUESTRO EQUIPO
              </p>
              <h2
                style={{
                  color: "rgb(13,27,62)",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                }}
              >
                Profesionales dedicados a tu proyecto
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #f59e0b, #fde68a)",
                  borderRadius: "2px",
                  margin: "16px auto 0",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "32px",
              }}
            >
              {equipo.map((e) => (
                <div
                  key={e.nombre}
                  style={{
                    background: "rgb(248,250,252)",
                    borderRadius: "16px",
                    padding: "32px",
                    border: "1px solid rgb(226,232,240)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "rgb(13,27,62)",
                      marginBottom: "6px",
                    }}
                  >
                    {e.nombre}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#f59e0b",
                      marginBottom: "12px",
                      textTransform: "uppercase",
                    }}
                  >
                    {e.rol}
                  </p>
                  <p style={{ fontSize: "14px", color: "rgb(100,116,139)", lineHeight: 1.7 }}>
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
