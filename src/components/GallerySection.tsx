"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryItems = [
  { src: "/images/proyectos/1.jpg", alt: "Proyecto solar 1" },
  { src: "/images/proyectos/2.jpg", alt: "Proyecto solar 2" },
  { src: "/images/proyectos/3.jpg", alt: "Proyecto solar 3" },
  { src: "/images/proyectos/4.jpg", alt: "Proyecto solar 4" },
  { src: "/images/proyectos/5.jpg", alt: "Proyecto solar 5" },
  { src: "/images/proyectos/6.jpg", alt: "Proyecto solar 6" },
  { src: "/images/proyectos/7.jpg", alt: "Proyecto solar 7" },
  { src: "/images/proyectos/8.jpg", alt: "Proyecto solar 8" },
  { src: "/images/proyectos/9.jpg", alt: "Proyecto solar 9" },
  { src: "/images/proyectos/10.jpg", alt: "Proyecto solar 10" },
  { src: "/images/proyectos/11.jpg", alt: "Proyecto solar 11" },
  { src: "/images/proyectos/12.jpg", alt: "Proyecto solar 12" },
  { src: "/images/proyectos/123.jpg", alt: "Proyecto solar 13" },
  { src: "/images/proyectos/124325.jpg", alt: "Proyecto solar 14" },
  { src: "/images/proyectos/1445.jpg", alt: "Proyecto solar 15" },
  { src: "/images/proyectos/2134.jpg", alt: "Proyecto solar 16" },
  { src: "/images/proyectos/23412345.jpg", alt: "Proyecto solar 17" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(8).jpg", alt: "Proyecto solar 18" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(9).jpg", alt: "Proyecto solar 19" },
  { src: "/images/proyectos/edit%20mono.jpg", alt: "Proyecto solar 20" },
  { src: "/images/proyectos/edit.jpg", alt: "Proyecto solar 21" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(10).jpg", alt: "Bomba solar 1" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(11).jpg", alt: "Bomba solar 2" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(12).jpg", alt: "Bomba solar 3" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(13).jpg", alt: "Bomba solar 4" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(14).jpg", alt: "Bomba solar 5" },
  { src: "/images/proyectos/Diseño%20sin%20título%20(15).jpg", alt: "Bomba solar 6" },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const itemsPerView = 4;
  const totalPages = Math.ceil(galleryItems.length / itemsPerView);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % totalPages);
  }, [totalPages]);

  const visibleItems = galleryItems.slice(current * itemsPerView, current * itemsPerView + itemsPerView);

  return (
    <>
      <style>{`
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          height: 300px;
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
          background: rgba(0, 0, 0, 0.8);
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
        }
        .modal-img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .modal-close:hover {
          background: #f59e0b;
          color: white;
        }
        @media (max-width: 768px) {
          .gallery-item {
            height: 200px;
          }
          .modal-close {
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.5);
            color: white;
          }
          .modal-close:hover {
            background: #f59e0b;
          }
        }
      `}</style>

      <section
        id="galeria"
        style={{
          background: "white",
          padding: "96px 24px",
        }}
      >
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
          {/* Gallery grid - 4 columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginBottom: "32px",
            }}
          >
            {visibleItems.map((item) => (
              <div
                key={item.src}
                className="gallery-item"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 23vw"
                  className="gallery-img"
                  style={{ objectFit: "cover" }}
                />
                <div className="gallery-overlay" />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: "-70px",
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
              right: "-70px",
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

      {/* Modal - Full screen image viewer */}
      {selectedImage && (
        <div className="modal-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={900}
              className="modal-img"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
