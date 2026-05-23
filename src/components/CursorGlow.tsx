"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let glowX  = 0, glowY  = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    // Glow follows with smooth lag
    const animate = () => {
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Outer glow — large, soft, lags behind */}
      <div
        ref={glowRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "400px",
          height: "400px",
          marginLeft: "-200px",
          marginTop: "-200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,20,20,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
        }}
      />

      {/* Inner dot — small, sharp, follows instantly */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          marginLeft: "-4px",
          marginTop: "-4px",
          borderRadius: "50%",
          backgroundColor: "#FF1414",
          boxShadow: "0 0 10px 3px rgba(255,20,20,0.6)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
    </>
  );
}
