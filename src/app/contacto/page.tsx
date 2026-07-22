import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import ContactPageContent from "@/components/ContactPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactanos para una visita técnica gratuita y presupuesto sin cargo. Estamos en Brandsen, Buenos Aires.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
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
              Pedí tu{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                visita técnica gratuita
              </span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              Sin compromiso. Un técnico va a tu domicilio, evalúa tu caso y te armamos
              un presupuesto personalizado.
            </p>
          </div>
        </section>

        <ContactPageContent />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
