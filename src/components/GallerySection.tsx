"use client";

import Image from "next/image";
import { useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X, MapPin } from "lucide-react";

type Badge = "CONECTADO A RED" | "SISTEMA OFFGRID" | "BOMBEO SOLAR" | "TERMOTANQUE SOLAR";

interface Proyecto {
  id: string;
  cliente: string;
  ubicacion: string;
  kwp: string;
  badge: Badge;
  categoria: string;
  foto: string;
  detalle?: string;
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
    kwp: "",
    badge: "BOMBEO SOLAR",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/yety-entre-rios.jpg",
    detalle: "2200 W · Pozo de 66 m",
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
    kwp: "",
    badge: "BOMBEO SOLAR",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/julian-udaondo.jpg",
    detalle: "4 bombas (3×300 W + 1×600 W)",
  },
  {
    id: "hernan-mannarino",
    cliente: "Hernán Mannarino",
    ubicacion: "San Vicente, Buenos Aires",
    kwp: "",
    badge: "BOMBEO SOLAR",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/hernan-mannarino.jpg",
    detalle: "600 W · Pozo de 18 m",
  },
  {
    id: "nicolas-monaco",
    cliente: "Nicolás Monaco",
    ubicacion: "Zona rural, San Vicente",
    kwp: "",
    badge: "BOMBEO SOLAR",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/nicolas-monaco.jpg",
    detalle: "600 W · Pozo de 12 m",
  },
  {
    id: "haras-de-oroite",
    cliente: "Haras de Oroite",
    ubicacion: "Zona rural, Brandsen",
    kwp: "",
    badge: "BOMBEO SOLAR",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/haras-de-oroite.jpg",
    detalle: "750 W · Pozo de 12 m",
  },
  {
    id: "laura-la-victoria-bomba",
    cliente: "Estancia La Victoria - Bombeo",
    ubicacion: "Zona rural, Brandsen",
    kwp: "",
    badge: "BOMBEO SOLAR",
    categoria: "Rural / Agro",
    foto: "/images/proyectos-clientes/laura-la-victoria-bomba.jpg",
    detalle: "2 bombas · Pozo principal y auxiliar",
  },
  {
    id: "dario-pugliese-termotanque",
    cliente: "Darío Pugliese",
    ubicacion: "Buenos Aires, Argentina",
    kwp: "",
    badge: "TERMOTANQUE SOLAR",
    categoria: "Residencial",
    foto: "/images/proyectos-clientes/dario-pugliese-termotanque.jpg",
    detalle: "Termotanque inoxidable de 200 L",
  },
  {
    id: "club-mandarinas-termotanque",
    cliente: "Club Mandarinas",
    ubicacion: "Coronel Brandsen, Buenos Aires",
    kwp: "",
    badge: "TERMOTANQUE SOLAR",
    categoria: "Institucional",
    foto: "/images/proyectos-clientes/club-mandarinas-termotanque.jpg",
    detalle: "Termotanque atmosférico de 200 L, donado al club",
  },
];

const PAGE_SIZE = 8;

function chunk<T>(list: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < list.length; i += size) {
    result.push(list.slice(i, i + size));
  }
  return result;
}

const pages = chunk(proyectos, PAGE_SIZE);

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activePage, setActivePage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, startScroll: 0, moved: false });

  const nextImage = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i + 1) % proyectos.length));
  }, []);

  const prevImage = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i - 1 + proyectos.length) % proyectos.length));
  }, []);

  const scrollToPage = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(idx, pages.length - 1));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setActivePage(clamped);
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.clientWidth === 0) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActivePage(idx);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    dragState.current = { isDown: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !dragState.current.isDown) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 5) dragState.current.moved = true;
    el.scrollLeft = dragState.current.startScroll - dx;
  }, []);

  const onPointerUp = useCallback(() => {
    const el = scrollRef.current;
    if (!dragState.current.isDown) return;
    dragState.current.isDown = false;
    if (el && el.clientWidth > 0) {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      scrollToPage(idx);
    }
  }, [scrollToPage]);

  const handleCardClick = useCallback((globalIdx: number) => {
    if (dragState.current.moved) {
      dragState.current.moved = false;
      return;
    }
    setSelectedIndex(globalIdx);
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
        .proyectos-carousel-wrap {
          position: relative;
        }
        .proyectos-carousel {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          touch-action: pan-y;
        }
        .proyectos-carousel::-webkit-scrollbar {
          display: none;
        }
        .proyectos-carousel:active {
          cursor: grabbing;
        }
        .proyectos-page {
          flex: 0 0 100%;
          scroll-snap-align: start;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          padding: 4px;
        }
        .proyectos-page .proyecto-card img {
          pointer-events: none;
        }
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgb(13,27,62);
          color: #f59e0b;
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10;
          box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        }
        .carousel-arrow:hover:not(:disabled) {
          background: #f59e0b;
          color: rgb(13,27,62);
          transform: translateY(-50%) scale(1.08);
        }
        .carousel-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .carousel-arrow.prev {
          left: 8px;
        }
        .carousel-arrow.next {
          right: 8px;
        }
        @media (min-width: 1500px) {
          .carousel-arrow.prev {
            left: -64px;
          }
          .carousel-arrow.next {
            right: -64px;
          }
        }
        .carousel-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
        }
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: none;
          background: rgb(203,213,225);
          cursor: pointer;
          padding: 0;
          transition: all 0.2s;
        }
        .carousel-dot.active {
          background: #f59e0b;
          width: 26px;
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
          <div className="proyectos-carousel-wrap">
            <div
              ref={scrollRef}
              className="proyectos-carousel"
              onScroll={handleScroll}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            >
              {pages.map((pageItems, pageIdx) => (
                <div key={pageIdx} className="proyectos-page">
                  {pageItems.map((p) => {
                    const globalIdx = proyectos.findIndex((x) => x.id === p.id);
                    return (
                      <div
                        key={p.id}
                        className="proyecto-card"
                        onClick={() => handleCardClick(globalIdx)}
                      >
                        <Image
                          src={p.foto}
                          alt={`Instalación solar - ${p.cliente}`}
                          fill
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                          className="proyecto-img"
                          style={{ objectFit: "cover" }}
                          draggable={false}
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

                          {p.detalle ? (
                            <div
                              style={{
                                color: "#f59e0b",
                                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                                fontWeight: 700,
                                lineHeight: 1.2,
                              }}
                            >
                              {p.detalle}
                            </div>
                          ) : (
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
                          )}

                          <span className="proyecto-pill">{p.categoria}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {pages.length > 1 && (
              <>
                <button
                  className="carousel-arrow prev"
                  onClick={() => scrollToPage(activePage - 1)}
                  disabled={activePage === 0}
                  aria-label="Página anterior"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  className="carousel-arrow next"
                  onClick={() => scrollToPage(activePage + 1)}
                  disabled={activePage === pages.length - 1}
                  aria-label="Página siguiente"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          {pages.length > 1 && (
            <div className="carousel-dots">
              {pages.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === activePage ? "active" : ""}`}
                  onClick={() => scrollToPage(i)}
                  aria-label={`Ir a la página ${i + 1}`}
                />
              ))}
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
                {proyectos[selectedIndex].detalle
                  ? proyectos[selectedIndex].detalle
                  : `${proyectos[selectedIndex].kwp} kWp`}{" "}
                · {proyectos[selectedIndex].categoria} ·{" "}
                {selectedIndex + 1} / {proyectos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
