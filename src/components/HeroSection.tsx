"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/videos/hero-robot.mp4"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "50%",
          objectFit: "cover",
          zIndex: 1,
        }}
        className="hero-video"
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 14%, rgba(255,20,20,0.36) 100%)",
        }}
      />

      {/* Red blob */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,0,0,0.55) 15%, rgba(255,0,0,0) 70%)",
          filter: "blur(60px)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "55%",
          paddingRight: "80px",
        }}
      >
        <h1
          className={`hero-h1${mounted ? " hero-animate" : ""}`}
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#ececec",
            lineHeight: 1.2,
            marginBottom: "24px",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            opacity: 0,
            transform: "translateY(30px)",
            animationDelay: "0.2s",
            animationDuration: "0.8s",
            animationTimingFunction: "ease",
            animationFillMode: "forwards",
            animationName: mounted ? "heroFadeUp" : "none",
          }}
        >
          Acelera tu empresa con Inteligencia Artificial
        </h1>

        <p
          className={`hero-subtitle${mounted ? " hero-animate-subtitle" : ""}`}
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#ececec",
            lineHeight: 1.6,
            maxWidth: "520px",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            opacity: 0,
            transform: "translateY(30px)",
            animationDelay: "0.5s",
            animationDuration: "0.8s",
            animationTimingFunction: "ease",
            animationFillMode: "forwards",
            animationName: mounted ? "heroFadeUp" : "none",
          }}
        >
          <span
            style={{
              color: "#ff1414",
              fontWeight: 700,
            }}
          >
            Automatizamos procesos
          </span>
          , reducimos costos operativos y escalamos tu productividad con{" "}
          <span
            style={{
              backgroundColor: "#ff1414",
              color: "#ffffff",
              padding: "2px 4px",
              borderRadius: "2px",
              fontWeight: 700,
            }}
          >
            soluciones de IA integradas
          </span>{" "}
          a tus sistemas actuales.
        </p>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 767px) {
          .hero-video {
            width: 100% !important;
            height: 100% !important;
            left: 0 !important;
            top: 0 !important;
            opacity: 0.4 !important;
          }

          .hero-content {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .hero-h1 {
            font-size: 32px !important;
          }

          .hero-subtitle {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
