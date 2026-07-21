import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StatsSection } from "@/components/StatsSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "ConocÃ© nuestra historia, equipo y valores. MÃ¡s de 4 aÃ±os instalando energÃ­a solar en Brandsen y la regiÃ³n.",
};

const valores = [
  {
    icon: "âš¡",
    title: "Calidad garantizada",
    desc: "Solo trabajamos con equipos certificados de primer nivel: paneles Tier 1, inversores de marcas lÃ­deres y estructuras de aluminio marine grade.",
  },
  {
    icon: "ðŸ¤",
    title: "Compromiso real",
    desc: "AcompaÃ±amos cada proyecto desde la visita tÃ©cnica hasta la puesta en marcha y el seguimiento post-instalaciÃ³n.",
  },
  {
    icon: "ðŸŒ¿",
    title: "Sustentabilidad",
    desc: "Creemos en un futuro energÃ©tico limpio. Cada instalaciÃ³n es un paso concreto hacia la independencia energÃ©tica y el cuidado del medioambiente.",
  },
  {
    icon: "ðŸ“",
    title: "Dimensionamiento preciso",
    desc: "Analizamos tu consumo real y diseÃ±amos el sistema exacto que necesitÃ¡s, sin sobredimensionar ni quedarte corto.",
  },
  {
    icon: "ðŸ”§",
    title: "Servicio postventa",
    desc: "Contamos con soporte tÃ©cnico para todo lo que necesites despuÃ©s de la instalaciÃ³n: mantenimiento, monitoreo y garantÃ­as.",
  },
  {
    icon: "ðŸ’¡",
    title: "Transparencia total",
    desc: "Te explicamos cada paso del proceso, los materiales que usamos y los resultados reales que podÃ©s esperar.",
  },
];

const equipo = [
  {
    nombre: "Equipo de InstalaciÃ³n",
    rol: "TÃ©cnicos certificados",
    desc: "Instaladores con capacitaciÃ³n en sistemas fotovoltaicos y habilitaciÃ³n elÃ©ctrica para trabajos en altura.",
  },
  {
    nombre: "IngenierÃ­a & DiseÃ±o",
    rol: "Dimensionamiento y proyectos",
    desc: "Ingenieros especializados en energÃ­as renovables que diseÃ±an cada sistema con simulaciones de producciÃ³n real.",
  },
  {
    nombre: "AtenciÃ³n al Cliente",
    rol: "Asesoramiento y seguimiento",
    desc: "Te acompaÃ±amos desde la primera consulta hasta que el sistema estÃ© funcionando y generando ahorro.",
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
            background: "linear-gradient(135deg, rgb(13,27,62) 0%, rgb(22,24,83) 100%)",
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
              QUIÃ‰NES SOMOS
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
              MÃ¡s de{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                4 aÃ±os
              </span>{" "}
              transformando hogares y empresas con energÃ­a solar
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
              industrial. Nacimos con la convicciÃ³n de que la energÃ­a solar es el camino
              hacia una mayor independencia econÃ³mica y ambiental.
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
                  Nacimos en Brandsen para servir a la regiÃ³n
                </h2>
                <p style={{ color: "rgb(100,116,139)", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                  Energia Solar Brandsen naciÃ³ hace mÃ¡s de cuatro aÃ±os con una misiÃ³n clara:
                  llevar soluciones de energÃ­a renovable a los hogares y empresas del partido
                  de Brandsen y la regiÃ³n bonaerense, con la misma calidad que cualquier
                  empresa de capital federal.
                </p>
                <p style={{ color: "rgb(100,116,139)", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                  Comenzamos instalando sistemas residenciales pequeÃ±os y hoy contamos con
                  mÃ¡s de 50 instalaciones completadas, desde hogares particulares hasta
                  comercios, galpones industriales y emprendimientos agropecuarios.
                </p>
                <p style={{ color: "rgb(100,116,139)", fontSize: "16px", lineHeight: 1.8 }}>
                  TambiÃ©n somos distribuidores mayoristas y minoristas de equipos solares,
                  por lo que podemos ofrecerte los mejores precios en paneles, inversores,
                  baterÃ­as y estructuras de montaje.
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
                  Â¿Por quÃ© elegirnos?
                </h3>
                {[
                  "Empresa local con conocimiento de la zona",
                  "Distribuidores directos â€” precios de mayorista",
                  "FinanciaciÃ³n disponible en cuotas",
                  "GarantÃ­a extendida en equipos e instalaciÃ³n",
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
                    <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "18px" }}>âœ“</span>
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
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
                Profesionales comprometidos con tu proyecto
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
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "32px",
              }}
            >
              {equipo.map((e) => (
                <div
                  key={e.nombre}
                  style={{
                    background: "linear-gradient(135deg, rgb(13,27,62), rgb(22,24,83))",
                    borderRadius: "16px",
                    padding: "36px 28px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "rgba(245,158,11,0.15)",
                      border: "2px solid rgba(245,158,11,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      fontSize: "28px",
                    }}
                  >
                    ðŸ‘·
                  </div>
                  <h3 style={{ color: "white", fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>
                    {e.nombre}
                  </h3>
                  <p style={{ color: "#f59e0b", fontSize: "13px", fontWeight: 600, marginBottom: "14px" }}>
                    {e.rol}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.7 }}>
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2
              style={{
                color: "rgb(13,27,62)",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 900,
                marginBottom: "16px",
              }}
            >
              Â¿Listo para dar el paso a la energÃ­a solar?
            </h2>
            <p
              style={{
                color: "rgba(13,27,62,0.8)",
                fontSize: "17px",
                marginBottom: "32px",
              }}
            >
              PedÃ­ una visita tÃ©cnica gratuita y te armamos un presupuesto a medida.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contacto"
                style={{
                  background: "rgb(13,27,62)",
                  color: "white",
                  fontWeight: 800,
                  fontSize: "16px",
                  padding: "14px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Pedir presupuesto gratis
              </Link>
              <Link
                href="/servicios/residencial"
                style={{
                  background: "transparent",
                  color: "rgb(13,27,62)",
                  fontWeight: 700,
                  fontSize: "16px",
                  padding: "14px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "inline-block",
                  border: "2px solid rgb(13,27,62)",
                }}
              >
                Ver servicios
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
