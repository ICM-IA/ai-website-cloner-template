"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/funnel/Footer";

const RED = "#FF1414";
const lastUpdated = "Mayo 2026";

const sections = [
  {
    title: "1. Información que recopilamos",
    body: `Recopilamos información que nos proporcionás directamente al agendar una llamada, completar formularios de contacto o comunicarte con nosotros por WhatsApp o email. Esta información puede incluir: nombre completo, dirección de correo electrónico, número de teléfono, nombre de tu empresa y cualquier otra información que decidas compartir durante el proceso de contacto.`,
  },
  {
    title: "2. Cómo usamos tu información",
    body: `Utilizamos la información recopilada exclusivamente para: contactarte en relación a los servicios de ICM-IA, agendar y confirmar reuniones de diagnóstico, enviarte información relevante sobre nuestros servicios cuando nos lo solicitás, y mejorar la calidad de nuestros servicios. No utilizamos tu información para fines distintos a los mencionados sin tu consentimiento previo.`,
  },
  {
    title: "3. Compartición de datos",
    body: `ICM-IA no vende, alquila ni comparte tu información personal con terceros con fines comerciales. Podemos compartir datos con proveedores de servicios tecnológicos que nos ayudan a operar nuestro negocio (como plataformas de agendamiento o CRM), siempre bajo acuerdos de confidencialidad y únicamente en la medida necesaria para prestar el servicio.`,
  },
  {
    title: "4. WhatsApp y comunicaciones",
    body: `Al contactarnos vía WhatsApp o al proporcionarnos tu número de teléfono, aceptás recibir comunicaciones de ICM-IA relacionadas con los servicios solicitados. Podés solicitar en cualquier momento que dejemos de contactarte enviando un mensaje con la palabra "STOP" o comunicándote a nuestro email de contacto.`,
  },
  {
    title: "5. Cookies y tecnologías de seguimiento",
    body: `Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario y analizar el tráfico del sitio a través de herramientas como Google Analytics. Estas tecnologías recopilan información de forma anónima sobre cómo los visitantes usan el sitio. Podés configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.`,
  },
  {
    title: "6. Seguridad de los datos",
    body: `Implementamos medidas de seguridad razonables para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por internet es 100% seguro, por lo que no podemos garantizar seguridad absoluta.`,
  },
  {
    title: "7. Retención de datos",
    body: `Conservamos tu información personal durante el tiempo necesario para cumplir con los fines descritos en esta política, o según lo requiera la ley. Si deseás que eliminemos tus datos, podés solicitarlo en cualquier momento y lo haremos en un plazo razonable.`,
  },
  {
    title: "8. Tus derechos",
    body: `Tenés derecho a: acceder a la información personal que tenemos sobre vos, solicitar la corrección de datos incorrectos, solicitar la eliminación de tus datos personales, oponerte al procesamiento de tus datos, y retirar tu consentimiento en cualquier momento. Para ejercer cualquiera de estos derechos, contactanos a través de los medios indicados al final de esta política.`,
  },
  {
    title: "9. Menores de edad",
    body: `Nuestros servicios están dirigidos exclusivamente a empresas y profesionales adultos. No recopilamos intencionalmente información personal de menores de 18 años. Si tomamos conocimiento de que hemos recopilado datos de un menor, los eliminaremos de inmediato.`,
  },
  {
    title: "10. Cambios a esta política",
    body: `Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios significativos publicando la nueva versión en esta página con la fecha de actualización. Te recomendamos revisar esta política regularmente.`,
  },
  {
    title: "11. Contacto",
    body: `Si tenés preguntas, dudas o solicitudes relacionadas con esta Política de Privacidad, podés contactarnos por:\n\nWhatsApp: +54 9 2223 507821\nEmail: icm.marketingyconsultoria@gmail.com`,
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#000" }}>
      <Navbar />

      {/* Header */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px", textAlign: "center", paddingLeft: "24px", paddingRight: "24px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, color: RED, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
          LEGAL
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#ECECEC", lineHeight: 1.1, marginBottom: "16px", fontFamily: "Poppins, sans-serif" }}>
          Política de Privacidad
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", margin: 0 }}>
          Última actualización: {lastUpdated}
        </p>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "760px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingBottom: "120px" }}>

        {/* Intro */}
        <div style={{ backgroundColor: "#0D0D0D", border: "1px solid rgba(255,20,20,0.12)", borderRadius: "14px", padding: "24px 28px", marginBottom: "48px" }}>
          <p style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: 1.8, margin: 0 }}>
            En <strong style={{ color: "#ECECEC" }}>ICM-IA</strong> respetamos tu privacidad y nos comprometemos a proteger la información personal que compartís con nosotros. Esta política describe cómo recopilamos, usamos y protegemos tus datos cuando utilizás nuestros servicios o visitás nuestro sitio web.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {sections.map((section, i) => (
            <div
              key={i}
              style={{
                borderBottom: i < sections.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                paddingTop: "32px",
                paddingBottom: "32px",
              }}
            >
              <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ECECEC", marginBottom: "12px", marginTop: 0, fontFamily: "Poppins, sans-serif" }}>
                {section.title}
              </h2>
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.85, margin: 0, whiteSpace: "pre-line" }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
