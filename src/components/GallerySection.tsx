"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  { src: "/images/proyectos/1.jpg", alt: "Proyecto solar 1", caption: "Instalación residencial" },
  { src: "/images/proyectos/2.jpg", alt: "Proyecto solar 2", caption: "Sistema fotovoltaico" },
  { src: "/images/proyectos/3.jpg", alt: "Proyecto solar 3", caption: "Paneles solares" },
  { src: "/images/proyectos/4.jpg", alt: "Proyecto solar 4", caption: "Instalación comercial" },
  { src: "/images/proyectos/5.jpg", alt: "Proyecto solar 5", caption: "Termotanque solar" },
  { src: "/images/proyectos/6.jpg", alt: "Proyecto solar 6", caption: "Instalación industrial" },
  { src: "/images/proyectos/7.jpg", alt: "Proyecto solar 7", caption: "Sistema híbrido" },
  { src: "/images/proyectos/8.jpg", alt: "Proyecto solar 8", caption: "Paneles instalados" },
  { src: "/images/proyectos/9.jpg", alt: "Proyecto solar 9", caption: "Conexión eléctrica" },
  { src: "/images/proyectos/10.jpg", alt: "Proyecto solar 10", caption: "Inversor solar" },
  { src: "/images/proyectos/11.jpg", alt: "Proyecto solar 11", caption: "Estructura de soporte" },
  { src: "/images/proyectos/12.jpg", alt: "Proyecto solar 12", caption: "Sistema completo" },
  { src: "/images/proyectos/123.jpg", alt: "Proyecto solar 13", caption: "Instalación residencial" },
  { src: "/images/proyectos/124325.jpg", alt: "Proyecto solar 14", caption: "Paneles en tejado" },
  { src: "/images/proyectos/1445.jpg", alt: "Proyecto solar 15", caption: "Sistema de monitoreo" },
  { src: "/images/proyectos/2134.jpg", alt: "Proyecto solar 16", caption: "Conexión al tablero" },
  { src: "/images/proyectos/23412345.jpg", alt: "Proyecto solar 17", caption: "Instalación completa" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(8).jpg", alt: "Proyecto solar 18", caption: "Vista general" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(9).jpg", alt: "Proyecto solar 19", caption: "Detalle técnico" },
  { src: "/images/proyectos/edit%20mono.jpg", alt: "Proyecto solar 20", caption: "Equipo instalado" },
  { src: "/images/proyectos/edit.jpg", alt: "Proyecto solar 21", caption: "Trabajo finalizado" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(10).jpg", alt: "Bomba solar 1", caption: "Bomba solar instalada" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(11).jpg", alt: "Bomba solar 2", caption: "Sistema de bombeo" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(12).jpg", alt: "Bomba solar 3", caption: "Bomba en funcionamiento" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(13).jpg", alt: "Bomba solar 4", caption: "Instalación de bombas" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(14).jpg", alt: "Bomba solar 5", caption: "Sistema hidráulico" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(15).jpg", alt: "Bomba solar 6", caption: "Bomba de agua solar" },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const itemsPerView = 6;
  const totalPages = Math.ceil(galleryItems.length / itemsPerView);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % totalPages);
  }, [totalPages]);

  const visibleItems = galleryItems.slice(current * itemsPerView, current * itemsPerView + itemsPerView);

  return (
    <section
      id="galeria"
      style={{
        background: "white",
        padding: "96px 24px",
      }}
    >
      <style>{`
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          height: 240px;
        }
        .gallery-img {
          transition: transform 0.5s ease;
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13, 27, 62, 0.4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-caption {
          position: absolute;
          bottom: 16px;
          left: 16px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }
        .gallery-item:hover .gallery-caption {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .gallery-item {
            height: 160px;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <p
          style={{
            color: "#f59e0b",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          NUESTRO TRABAJO
        </p>
        <h2
          style={{
            color: "rgb(13,27,62)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            marginTop: "12px",
            marginBottom: 0,
          }}
        >
          Proyectos realizados
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

      {/* Carousel container */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
        {/* Gallery grid - 6 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {visibleItems.map((item) => (
            <div key={item.src} className="gallery-item">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="gallery-img"
                style={{ objectFit: "cover" }}
              />
              <div className="gallery-overlay" />
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            left: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgb(13,27,62)",
            color: "#f59e0b",
            border: "none",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#f59e0b";
            e.currentTarget.style.color = "rgb(13,27,62)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgb(13,27,62)";
            e.currentTarget.style.color = "#f59e0b";
          }}
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={next}
          style={{
            position: "absolute",
            right: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgb(13,27,62)",
            color: "#f59e0b",
            border: "none",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#f59e0b";
            e.currentTarget.style.color = "rgb(13,27,62)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgb(13,27,62)";
            e.currentTarget.style.color = "#f59e0b";
          }}
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "32px",
          }}
        >
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: current === idx ? "32px" : "12px",
                height: "12px",
                borderRadius: "6px",
                background: current === idx ? "#f59e0b" : "rgb(226,232,240)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              aria-label={`Ir a página ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p
          style={{
            textAlign: "center",
            color: "rgb(100,116,139)",
            fontSize: "14px",
            marginTop: "16px",
            margin: 0,
          }}
        >
          {current + 1} / {totalPages}
        </p>
      </div>
    </section>
  );
}
