import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactanos para una visita tÃ©cnica gratuita y presupuesto sin cargo. Estamos en Brandsen, Buenos Aires.",
};

const infoCards = [
  {
    icon: "ðŸ“",
    title: "UbicaciÃ³n",
    lines: ["Brandsen, Buenos Aires", "Atendemos toda la regiÃ³n"],
  },
  {
    icon: "ðŸ“ž",
    title: "TelÃ©fono / WhatsApp",
    lines: ["+54 11 5228-2070", "Lunâ€“SÃ¡b 8:00 a 18:00"],
  },
  {
    icon: "âœ‰ï¸",
    title: "Email",
    lines: ["info@energiasolarbrandsen.com", "Respondemos en menos de 24hs"],
  },
  {
    icon: "ðŸ•’",
    title: "Horario de atenciÃ³n",
    lines: ["Lunes a Viernes: 8:00 â€“ 18:00", "SÃ¡bados: 9:00 â€“ 13:00"],
  },
];

const pasos = [
  {
    num: "01",
    title: "Nos contactÃ¡s",
    desc: "CompletÃ¡s el formulario o nos escribÃ­s por WhatsApp con tu consulta.",
  },
  {
    num: "02",
    title: "Visita tÃ©cnica gratuita",
    desc: "Un tÃ©cnico va a tu domicilio o empresa para evaluar el consumo y las condiciones de instalaciÃ³n.",
  },
  {
    num: "03",
    title: "RecibÃ­s el presupuesto",
    desc: "Te enviamos una propuesta detallada con el sistema recomendado, el costo y el retorno de inversiÃ³n.",
  },
  {
    num: "04",
    title: "Instalamos y te capacitamos",
    desc: "Coordinar la instalaciÃ³n lleva entre 1 y 3 dÃ­as. Al finalizar, te explicamos cÃ³mo monitorear tu sistema.",
  },
];

export default function ContactoPage() {
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
              HABLEMOS
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
              PedÃ­ tu{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                visita tÃ©cnica gratuita
              </span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              Sin compromiso. Un tÃ©cnico va a tu domicilio, evalÃºa tu caso y te armamos
              un presupuesto personalizado.
            </p>
          </div>
        </section>

        {/* Info cards */}
        <section style={{ background: "rgb(248,250,252)", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
              }}
            >
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "32px 24px",
                    border: "1px solid rgb(226,232,240)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "16px" }}>{card.icon}</div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "rgb(13,27,62)",
                      marginBottom: "10px",
                    }}
                  >
                    {card.title}
                  </h3>
                  {card.lines.map((line) => (
                    <p
                      key={line}
                      style={{
                        fontSize: "14px",
                        color: "rgb(100,116,139)",
                        margin: "4px 0",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section style={{ background: "white", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
                EL PROCESO
              </p>
              <h2
                style={{
                  color: "rgb(13,27,62)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                }}
              >
                Â¿CÃ³mo es el proceso de instalaciÃ³n?
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
                gap: "32px",
              }}
            >
              {pasos.map((p) => (
                <div key={p.num} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, rgb(13,27,62), rgb(22,24,83))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      color: "#f59e0b",
                      fontSize: "18px",
                      fontWeight: 900,
                    }}
                  >
                    {p.num}
                  </div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "rgb(13,27,62)",
                      marginBottom: "10px",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgb(100,116,139)", lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulario */}
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
