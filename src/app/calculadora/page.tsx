import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SavingsCalculator from "@/components/SavingsCalculator";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Ahorro Solar | Energia Solar Brandsen",
  description:
    "Calculá cuánto podés ahorrar instalando paneles solares. Ingresá tu factura mensual y descubrí el retorno de inversión.",
};

const pasos = [
  {
    num: "01",
    title: "Ingresá tu factura",
    desc: "Indicá el monto promedio de tu factura eléctrica mensual actual.",
  },
  {
    num: "02",
    title: "Elegí tu tipo de uso",
    desc: "Residencial, comercial o industrial: cada perfil tiene un factor de ahorro distinto.",
  },
  {
    num: "03",
    title: "Conocé tu ahorro",
    desc: "El sistema calcula el ahorro mensual, anual y a 10 años con un sistema solar.",
  },
  {
    num: "04",
    title: "Pedí tu presupuesto",
    desc: "Con esos datos te armamos un presupuesto real con el sistema exacto que necesitás.",
  },
];

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en pagarse la inversión?",
    a: "En sistemas residenciales, el retorno de inversión típico es de 4 a 6 años. En sistemas comerciales e industriales puede ser de 3 a 5 años, dependiendo de la tarifa eléctrica y el consumo.",
  },
  {
    q: "¿El cálculo incluye los paneles y la instalación?",
    a: "La calculadora estima el ahorro en base a tu consumo actual. Para el presupuesto completo con equipos e instalación, contactanos y te enviamos una cotización personalizada.",
  },
  {
    q: "¿Qué pasa en días nublados o de lluvia?",
    a: "Los paneles generan energía incluso con cielo nublado, aunque con menor eficiencia. El sistema on-grid te permite seguir usando la red eléctrica cuando la generación solar no alcanza.",
  },
  {
    q: "¿La factura queda en cero?",
    a: "Depende del tamaño del sistema. Muchos clientes logran reducir su factura entre un 70% y 100%. En sistemas on-grid con inyección a la red, podrías incluso generar créditos.",
  },
];

export default function CalculadoraPage() {
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
              HERRAMIENTA GRATUITA
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
              Calculá tu{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ahorro solar
              </span>{" "}
              en segundos
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              Ingresá el importe de tu factura de luz y descubrí cuánto podés ahorrar
              con un sistema de energía solar fotovoltaico.
            </p>
          </div>
        </section>

        {/* Pasos */}
        <section style={{ background: "rgb(248,250,252)", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2
                style={{
                  color: "rgb(13,27,62)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                }}
              >
                ¿Cómo funciona?
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #f59e0b, #fde68a)",
                  borderRadius: "2px",
                  margin: "12px auto 0",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
              }}
            >
              {pasos.map((p) => (
                <div
                  key={p.num}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "32px 24px",
                    border: "1px solid rgb(226,232,240)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "36px",
                      fontWeight: 900,
                      color: "#f59e0b",
                      marginBottom: "12px",
                      fontFamily: "Raleway, sans-serif",
                    }}
                  >
                    {p.num}
                  </div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "rgb(13,27,62)",
                      marginBottom: "8px",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgb(100,116,139)", lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculadora */}
        <SavingsCalculator />

        {/* FAQs */}
        <section style={{ background: "rgb(248,250,252)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
                PREGUNTAS FRECUENTES
              </p>
              <h2
                style={{
                  color: "rgb(13,27,62)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                }}
              >
                Todo sobre el ahorro solar
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #f59e0b, #fde68a)",
                  borderRadius: "2px",
                  margin: "12px auto 0",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "28px 32px",
                    border: "1px solid rgb(226,232,240)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "rgb(13,27,62)",
                      marginBottom: "10px",
                    }}
                  >
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: "15px", color: "rgb(100,116,139)", lineHeight: 1.7, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
              ¿Ya calculaste tu ahorro?
            </h2>
            <p style={{ color: "rgba(13,27,62,0.8)", fontSize: "17px", marginBottom: "32px" }}>
              Pedí tu visita técnica gratuita y te armamos el presupuesto exacto.
            </p>
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
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
