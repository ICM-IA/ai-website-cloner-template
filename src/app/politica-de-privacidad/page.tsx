import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo Energía Solar Brandsen recopila, usa y protege los datos que dejás en nuestros formularios de Facebook, Instagram y sitio web.",
};

const EMAIL = "info@energiasolarbrandsen.com";

const sections = [
  {
    title: "Datos que recopilamos a través de formularios de Meta (Facebook e Instagram)",
    body: "Cuando completás un formulario de nuestros anuncios en Facebook o Instagram, recopilamos los datos que nos brindás de forma voluntaria: nombre y apellido, número de WhatsApp o teléfono, correo electrónico, localidad, tipo de negocio, motivo de tu consulta y tipo de propiedad (existente u obra nueva).",
  },
  {
    title: "Para qué los usamos",
    body: "Usamos esos datos únicamente para contactarte por WhatsApp, teléfono o correo, responder tu consulta y enviarte información y presupuestos sobre instalaciones de energía solar.",
  },
  {
    title: "Con quién los compartimos",
    body: "No vendemos ni cedemos tus datos a terceros. Pueden tratarlos proveedores que usamos para operar, como Meta y Google (hojas de cálculo y almacenamiento), y solo para los fines indicados.",
  },
  {
    title: "Conservación y tus derechos",
    body: `Conservamos tus datos mientras sea necesario para atender tu consulta. Podés pedirnos en cualquier momento acceder a ellos, corregirlos o eliminarlos escribiendo a ${EMAIL}. Los responderemos a la brevedad.`,
  },
  {
    title: "Eliminación de datos",
    body: `Para solicitar la eliminación de tus datos, escribinos a ${EMAIL} indicando tu nombre y el teléfono o correo con el que completaste el formulario.`,
  },
];

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          style={{
            padding: "160px 24px 64px",
            background: "linear-gradient(135deg, rgb(13,27,62) 0%, rgb(22,24,83) 100%)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Política de Privacidad
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "16px auto 0",
            }}
          >
            Energía Solar Brandsen
          </p>
        </section>

        <section style={{ background: "rgb(248, 250, 252)", padding: "56px 24px 96px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {sections.map((s) => (
              <div key={s.title} style={{ marginBottom: 32 }}>
                <h2
                  style={{
                    color: "rgb(13,27,62)",
                    fontSize: 20,
                    fontWeight: 800,
                    margin: "0 0 10px",
                  }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    color: "rgb(71,85,105)",
                    fontSize: 16,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
