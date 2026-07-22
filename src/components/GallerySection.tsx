"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryItems = [
  { src: "/images/proyectos/6.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/124325.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/12.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/1445.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/1.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/2.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/3.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/4.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/5.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/7.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/8.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/9.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/10.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/11.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/123.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/2134.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/23412345.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(8).jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(9).jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/edit%20mono.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/edit.jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(10).jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(11).jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(12).jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(13).jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(14).jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(15).jpg", alt: "Proyecto solar" },
  { src: "/images/proyectos/tec.jpg", alt: "Proyecto solar" },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const itemsPerView = 4;
  const totalPages = Math.ceil(galleryItems.length / itemsPerView);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % totalPages);
  }, [totalPages]);

  const visibleItems = galleryItems.slice(current * itemsPerView, current * itemsPerView + itemsPerView);

  const nextImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((i) => (i! + 1) % galleryItems.length);
    }
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((i) => (i! - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [selectedIndex]);

  return (
    <>
      <style>{`
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          height: 240px;
          cursor: pointer;
        }
        .gallery-img {
          transition: transform 0.5s ease;
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.1);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13, 27, 62, 0.3);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }
        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          max-height: 85vh;
          object-fit: contain;
        }
        .modal-nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(245, 158, 11, 0.8);
          color: white;
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10001;
        }
        .modal-nav-button:hover {
          background: #f59e0b;
          transform: translateY(-50%) scale(1.1);
        }
        .modal-nav-button.prev {
          left: 16px;
        }
        .modal-nav-button.next {
          right: 16px;
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10001;
        }
        .modal-close:hover {
          background: white;
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .gallery-item {
            height: 160px;
          }
          .modal-nav-button {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
          .modal-nav-button.prev {
            left: 8px;
          }
          .modal-nav-button.next {
            right: 8px;
          }
          .modal-close {
            width: 36px;
            height: 36px;
            top: 8px;
            right: 8px;
          }
        }
      `}</style>

      <section
        id="galeria"
        style={{
          background: "white",
          padding: "clamp(48px, 8vw, 96px) 16px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", paddingBottom: "32px" }}>
          {/* Gallery grid - responsive */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(clamp(140px, 40vw, 300px), 1fr))",
              gap: "clamp(12px, 3vw, 20px)",
              marginBottom: "32px",
            }}
          >
            {visibleItems.map((item, idx) => {
              const globalIdx = current * itemsPerView + idx;
              return (
                <div
                  key={item.src}
                  className="gallery-item"
                  onClick={() => setSelectedIndex(globalIdx)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 480px) 45vw, (max-width: 768px) 45vw, 23vw"
                    className="gallery-img"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="gallery-overlay" />
                </div>
              );
            })}
          </div>

          {/* Navigation arrows - hidden on mobile */}
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
            className="hidden md:flex"
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
            className="hidden md:flex"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: "24px",
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
              marginTop: "12px",
              margin: 0,
            }}
          >
            {current + 1} / {totalPages}
          </p>
        </div>
      </section>

      {/* Modal - Full screen image viewer with navigation */}
      {selectedIndex !== null && (
        <div className="modal-backdrop" onClick={() => setSelectedIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            {/* Prev button */}
            <button
              className="modal-nav-button prev"
              onClick={prevImage}
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <Image
              src={galleryItems[selectedIndex].src}
              alt={galleryItems[selectedIndex].alt}
              width={1200}
              height={900}
              className="modal-img"
              priority
            />

            {/* Next button */}
            <button
              className="modal-nav-button next"
              onClick={nextImage}
              aria-label="Siguiente imagen"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0, 0, 0, 0.6)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {selectedIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
