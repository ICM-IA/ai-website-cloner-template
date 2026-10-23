import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CalculadoraSolar from "@/components/CalculadoraSolar";

export const metadata: Metadata = {
  title: "Calculadora de Energía Solar",
  description:
    "Calculá en segundos la inversión, el ahorro y el tiempo de recupero de un sistema de energía solar según tu factura de luz, tu distribuidora y tu provincia.",
};

function CalculadoraHero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "180px 24px 80px",
        background: "linear-gradient(135deg, rgb(13,27,62) 0%, rgb(22,24,83) 100%)",
        textAlign: "center",
      }}
    >
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
          Calculadora gratuita
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
        Calculá tu ahorro con energía solar
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: 18,
          lineHeight: 1.7,
          maxWidth: 640,
          margin: "0 auto",
        }}
      >
        Ingresá tu factura mensual y te mostramos la inversión estimada, el ahorro anual y en
        cuántos años recuperás tu sistema solar.
      </p>
    </section>
  );
}

export default function CalculadoraEnergiaSolarPage() {
  return (
    <>
      <Navbar />
      <main>
        <CalculadoraHero />
        <section style={{ background: "rgb(248, 250, 252)", padding: "0 24px 96px" }}>
          <div style={{ transform: "translateY(-56px)" }}>
            <CalculadoraSolar />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
