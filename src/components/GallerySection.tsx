"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, MapPin } from "lucide-react";

type Badge = "CONECTADO A RED" | "SISTEMA OFFGRID" | "BOMBEO SOLAR";

interface Proyecto {
  id: string;
  cliente: string;
  ubicacion: string;
  kwp: string;
  badge: Badge;
  categoria: string;
  foto: string;
}

const proyectos: Proyecto[] = [
  {
    id: "eduardo-guyet",
    cliente: "Eduardo Guyet",
    ubicacion: "Las Malvinas, Buenos Aires",
    kwp: "10.44",
    badge: "CONECTADO A RED",
    categoria: "Residencial",
    foto: "/images/proyectos-clientes/eduardo-guyet-malvinas.jpg",
  },
  {
    id: "mayorista-andell",
    cliente: "Mayorista Andell",
    ubicacion: "Jeppener, Buenos Aires",
    kwp: "55.68",
    badge: "CONECTADO A RED",
    categoria: "Comercial",
    foto: "/images/proyectos-clientes/mayorista-andell.jpg",
  },
  {
    id: "supermercado-el-mono",
    cliente: "Supermercado El Mono",
    ubicacion: "Jeppener, Buenos Aires",
    kwp: "44.08",
    badge: "CONECTADO A RED",
    categoria: "Comercial",
    foto: "/images/proyectos-clientes/supermercado-el-mono.jpg",
  },
  {
    id: "estancia-la-victoria",
    cliente: "Estancia La Victoria",
    ubicacion: "Zona rural, Brandsen",
    kwp: "13.92",
    badge: "CONECTADO A RED",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/estancia-la-victoria.jpg",
  },
  {
    id: "heladeria-grido",
    cliente: "Heladería Grido",
    ubicacion: "Glew, Buenos Aires",
    kwp: "13.44",
    badge: "CONECTADO A RED",
    categoria: "Comercial",
    foto: "/images/proyectos-clientes/heladeria-grido-glew.jpg",
  },
  {
    id: "fincas-manzana-48",
    cliente: "Fincas Manzana 48",
    ubicacion: "San Vicente, Buenos Aires",
    kwp: "9.99",
    badge: "CONECTADO A RED",
    categoria: "Residencial",
    foto: "/images/proyectos-clientes/fincas-manzana-48.jpg",
  },
  {
    id: "emiliano-cortes",
    cliente: "Emiliano Cortés",
    ubicacion: "Brandsen, Buenos Aires",
    kwp: "9.28",
    badge: "CONECTADO A RED",
    categoria: "Residencial",
    foto: "/images/proyectos-clientes/emiliano-cortes-esb.jpg",
  },
  {
    id: "judith-san-vicente",
    cliente: "Judith",
    ubicacion: "San Vicente, Buenos Aires",
    kwp: "6",
    badge: "CONECTADO A RED",
    categoria: "Residencial",
    foto: "/images/proyectos-clientes/judith-san-vicente.jpg",
  },
  {
    id: "hugo-ghilini",
    cliente: "Hugo Ghilini",
    ubicacion: "Ranchos, Buenos Aires",
    kwp: "4.64",
    badge: "CONECTADO A RED",
    categoria: "Residencial",
    foto: "/images/proyectos-clientes/hugo-ghilini.jpg",
  },
  {
    id: "mirta-jeppener",
    cliente: "Mirta",
    ubicacion: "Jeppener, Buenos Aires",
    kwp: "4.64",
    badge: "SISTEMA OFFGRID",
    categoria: "Residencial",
    foto: "/images/proyectos-clientes/mirta-jeppener.jpg",
  },
  {
    id: "alfredo-ferreti",
    cliente: "Alfredo Ferreti",
    ubicacion: "Glew, Buenos Aires",
    kwp: "4.44",
    badge: "CONECTADO A RED",
    categoria: "Residencial",
    foto: "/images/proyectos-clientes/alfredo-ferreti-glew.jpg",
  },
  {
    id: "escuela-tecnica",
    cliente: "Escuela Técnica N°1",
    ubicacion: "Brandsen, Buenos Aires",
    kwp: "4.44",
    badge: "SISTEMA OFFGRID",
    categoria: "Institucional",
    foto: "/images/proyectos-clientes/escuela-tecnica.jpg",
  },
  {
    id: "ruben-las-acacias",
    cliente: "Rubén - Las Acacias",
    ubicacion: "Brandsen, Buenos Aires",
    kwp: "4.4",
    badge: "SISTEMA OFFGRID",
    categoria: "Residencial",
    foto: "/images/proyectos-clientes/ruben-las-acacias.jpg",
  },
  {
    id: "yety-entre-rios",
    cliente: "Yety S.A.",
    ubicacion: "Entre Ríos, Argentina",
    kwp: "4.14",
    badge: "BOMBEO SOLAR",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/yety-entre-rios.jpg",
  },
  {
    id: "tosquera-domselaar",
    cliente: "Tosquera Domselaar",
    ubicacion: "Domselaar, Buenos Aires",
    kwp: "2.3",
    badge: "SISTEMA OFFGRID",
    categoria: "Residencial",
    foto: "/images/proyectos-clientes/tosquera-domselaar.jpg",
  },
  {
    id: "julian-udaondo",
    cliente: "Julián Udaondo",
    ubicacion: "Zona rural, Buenos Aires",
    kwp: "2.68",
    badge: "BOMBEO SOLAR",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/julian-udaondo.jpg",
  },
  {
    id: "hernan-mannarino",
    cliente: "Hernán Mannarino",
    ubicacion: "San Vicente, Buenos Aires",
    kwp: "0.94",
    badge: "BOMBEO SOLAR",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/hernan-mannarino.jpg",
  },
  {
    id: "nicolas-monaco",
    cliente: "Nicolás Monaco",
    ubicacion: "Zona rural, San Vicente",
    kwp: "0.94",
    badge: "BOMBEO SOLAR",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/nicolas-monaco.jpg",
  },
];

const INITIAL_COUNT = 9;

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProyectos = showAll ? proyectos : proyectos.slice(0, INITIAL_COUNT);

  const nextImage = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i + 1) % proyectos.length));
  }, []);

  const prevImage = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i - 1 + proyectos.length) % proyectos.length));
  }, []);

  return (
    <>
      <style>{`
        .proyecto-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          aspect-ratio: 3 / 4;
          cursor: pointer;
          background: rgb(13,27,62);
        }
        .proyecto-img {
          transition: transform 0.5s ease;
        }
        .proyecto-card:hover .proyecto-img {
          transform: scale(1.08);
        }
        .proyecto-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6,12,28,0.96) 0%, rgba(6,12,28,0.75) 32%, rgba(6,12,28,0.15) 62%, rgba(6,12,28,0) 80%);
        }
        .proyecto-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(6,12,28,0.82);
          backdrop-filter: blur(4px);
          padding: 6px 12px;
          border-radius: 999px;
        }
        .proyecto-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f59e0b;
          flex-shrink: 0;
        }
        .proyecto-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 20px;
        }
        .proyecto-pill {
          display: inline-block;
          margin-top: 12px;
          padding: 4px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.55);
          color: white;
          font-size: 12px;
          font-weight: 600;
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
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .modal-img {
          width: auto;
          height: auto;
          border-radius: 8px;
          max-height: 78vh;
          max-width: 90vw;
          object-fit: contain;
        }
        .modal-nav-button {
          position: absolute;
          top: 45%;
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
          left: -8px;
        }
        .modal-nav-button.next {
          right: -8px;
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

        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {visibleProyectos.map((p) => {
              const globalIdx = proyectos.findIndex((x) => x.id === p.id);
              return (
                <div
                  key={p.id}
                  className="proyecto-card"
                  onClick={() => setSelectedIndex(globalIdx)}
                >
                  <Image
                    src={p.foto}
                    alt={`Instalación solar - ${p.cliente}`}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                    className="proyecto-img"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="proyecto-gradient" />

                  <div className="proyecto-badge">
                    <span className="proyecto-badge-dot" />
                    <span
                      style={{
                        color: "white",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <div className="proyecto-content">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "rgb(203,213,225)",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                      }}
                    >
                      <MapPin size={13} strokeWidth={2.5} />
                      {p.ubicacion}
                    </div>

                    <h3
                      style={{
                        color: "white",
                        fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
                        fontWeight: 800,
                        margin: "6px 0 10px",
                        lineHeight: 1.15,
                      }}
                    >
                      {p.cliente}
                    </h3>

                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span
                        style={{
                          color: "#f59e0b",
                          fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                          fontWeight: 800,
                          lineHeight: 1,
                        }}
                      >
                        {p.kwp} kWp
                      </span>
                      <span
                        style={{
                          color: "rgb(203,213,225)",
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        Potencia
                      </span>
                    </div>

                    <span className="proyecto-pill">{p.categoria}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {proyectos.length > INITIAL_COUNT && (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button
                onClick={() => setShowAll((v) => !v)}
                style={{
                  background: "rgb(13,27,62)",
                  color: "#f59e0b",
                  border: "none",
                  borderRadius: "999px",
                  padding: "14px 32px",
                  fontSize: "15px",
                  fontWeight: 700,
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
              >
                {showAll ? "Ver menos proyectos" : `Ver los ${proyectos.length} proyectos`}
              </button>
            </div>
          )}
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

            <button
              className="modal-nav-button prev"
              onClick={prevImage}
              aria-label="Proyecto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <Image
              src={proyectos[selectedIndex].foto}
              alt={`Instalación solar - ${proyectos[selectedIndex].cliente}`}
              width={1200}
              height={900}
              className="modal-img"
              priority
            />

            <button
              className="modal-nav-button next"
              onClick={nextImage}
              aria-label="Siguiente proyecto"
            >
              <ChevronRight size={24} />
            </button>

            <div
              style={{
                marginTop: "16px",
                textAlign: "center",
                color: "white",
              }}
            >
              <p style={{ fontWeight: 700, fontSize: "16px", margin: 0 }}>
                {proyectos[selectedIndex].cliente} — {proyectos[selectedIndex].ubicacion}
              </p>
              <p style={{ color: "rgb(203,213,225)", fontSize: "14px", margin: "4px 0 0" }}>
                {proyectos[selectedIndex].kwp} kWp · {proyectos[selectedIndex].categoria} ·{" "}
                {selectedIndex + 1} / {proyectos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
