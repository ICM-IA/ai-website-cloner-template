"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Home, Building2, Sun, Factory, Droplets, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

const services: ServiceCard[] = [
  {
    icon: Home,
    title: "Instalación Residencial",
    desc: "Sistemas fotovoltaicos On-Grid, Off-Grid e Híbridos diseñados a la medida de tu consumo familiar para maximizar el ahorro y garantizar respaldo eléctrico.",
    features: [
      "Sistemas On-Grid, Off-Grid e Híbridos",
      "Paneles y baterías de última tecnología",
      "Inversores inteligentes certificados",
      "Monitoreo en tiempo real por App",
    ],
    cta: "Ver más →",
    href: "/servicios/residencial",
  },
  {
    icon: Building2,
    title: "Instalación Comercial",
    desc: "Optimización de costos operativos para comercios y PyMEs. Diseñamos e instalamos sistemas para aplanar picos de consumo y asegurar continuidad operativa.",
    features: [
      "Auditoría y diagnóstico de potencia (kW)",
      "Asesoramiento en Créditos Verdes bancarios",
      "Respaldo por baterías de litio (Backup)",
      "Telemetría y monitoreo de generación (kWh)",
    ],
    cta: "Ver más →",
    href: "/servicios/comercial",
    featured: true,
  },
  {
    icon: Sun,
    title: "Termotanques Solares",
    desc: "Agua caliente sanitaria durante todo el año mediante colectores solares de tubos de vacío. Reducí hasta un 80% tu consumo de gas o electricidad.",
    features: [
      "Capacidades de 150 L hasta 300 L",
      "Tanque interior de acero inoxidable 0.5mm",
      "Ahorro drástico en gas o electricidad",
      "Larga vida útil y fácil instalación",
    ],
    cta: "Ver más →",
    href: "/servicios/termotanque-solar",
  },
  {
    icon: Factory,
    title: "Instalación Industrial",
    desc: "Ingeniería fotovoltaica de gran escala para industrias, plantas fabriles y agro. Maximizá la eficiencia energética y reducí la huella de carbono.",
    features: [
      "Proyectos de 30 kWp a +1 MWp",
      "Integración bajo Ley 27.424 (Generación Distribuida)",
      "Estudios de calidad de energía y cargas",
      "Monitoreo y telemetría de planta",
    ],
    cta: "Ver más →",
    href: "/servicios/industrial",
    featured: false,
  },
  {
    icon: Droplets,
    title: "Bombeo Solar",
    desc: "Sistemas de bombeo solar sumergible para campo, ganadería y riego. Agua constante sin gastos de combustible ni dependencia de la red eléctrica.",
    features: [
      "Bombas sumergibles Handuro de 120 W a 5.500 W",
      "Caudales de hasta 280.000 L/día para riego y ganadería",
      "Garantía escrita de 1 año directa de fábrica",
      "Instalación coordinada con perforación en el día",
    ],
    cta: "Ver más →",
    href: "/servicios/bombeo-solar",
    featured: false,
  },
];

function Card({ service }: { service: ServiceCard }) {
  const Icon = service.icon;
  const { featured } = service;

  return (
    <Link
      href={service.href}
      className={cn("card-hover flex flex-col no-underline")}
      style={
        featured
          ? {
              background:
                "linear-gradient(135deg, rgb(13,27,62) 0%, rgb(22,24,83) 100%)",
              border: "none",
              boxShadow: "0 20px 60px rgba(13,27,62,0.3)",
              borderRadius: "16px",
              padding: "40px 32px",
              cursor: "pointer",
              height: "100%",
            }
          : {
              background: "white",
              border: "1px solid rgb(226,232,240)",
              borderRadius: "16px",
              padding: "40px 32px",
              cursor: "pointer",
              height: "100%",
            }
      }
    >
      {/* Icon container */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          background: featured ? "rgba(245,158,11,0.2)" : "rgb(239,246,255)",
          flexShrink: 0,
        }}
      >
        <Icon size={24} style={{ color: featured ? "#f59e0b" : "rgb(22,24,83)" }} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: featured ? "white" : "rgb(13,27,62)",
          marginBottom: "12px",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.7,
          color: featured ? "rgba(255,255,255,0.75)" : "rgb(100,116,139)",
          marginBottom: "24px",
        }}
      >
        {service.desc}
      </p>

      {/* Features list */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {service.features.map((feat) => (
          <li
            key={feat}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              fontWeight: 500,
              color: featured ? "rgba(255,255,255,0.85)" : "rgb(30,41,59)",
              marginBottom: "8px",
            }}
          >
            <span style={{ color: "#f59e0b", fontWeight: 700 }}>✓</span>
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <span
        style={{
          marginTop: "auto",
          paddingTop: "24px",
          fontSize: "14px",
          fontWeight: 700,
          color: featured ? "#f59e0b" : "rgb(22,24,83)",
          display: "block",
        }}
      >
        {service.cta}
      </span>
    </Link>
  );
}

const GAP = 32;
const AUTOPLAY_MS = 2000;
const N = services.length;

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Anterior" : "Siguiente"}
      style={{
        position: "absolute",
        top: "50%",
        [direction === "prev" ? "left" : "right"]: "-8px",
        transform: "translateY(-50%)",
        background: "rgb(13,27,62)",
        color: "#f59e0b",
        border: "none",
        borderRadius: "50%",
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.2s",
        zIndex: 2,
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
      {direction === "prev" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}

function ServicesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(3);
  const [withTransition, setWithTransition] = useState(true);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      setContainerWidth(w);
      setItemsPerView(w < 640 ? 1 : w < 900 ? 2 : 3);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setWithTransition(false);
    setIndex(itemsPerView);
    const id = requestAnimationFrame(() => setWithTransition(true));
    return () => cancelAnimationFrame(id);
  }, [itemsPerView]);

  const extended = [
    ...services.slice(-itemsPerView),
    ...services,
    ...services.slice(0, itemsPerView),
  ];

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => setIndex((i) => i - 1), []);
  const goTo = useCallback((i: number) => setIndex(i), []);

  // Snap the clone-zone position back to the equivalent real position once the
  // slide transition has had time to finish. Timer-based (not transitionend)
  // so it still resolves if a transition gets interrupted by a new click.
  useEffect(() => {
    if (index < itemsPerView || index >= itemsPerView + N) {
      const id = setTimeout(() => {
        setWithTransition(false);
        setIndex((i) => {
          if (i >= itemsPerView + N) return i - N;
          if (i < itemsPerView) return i + N;
          return i;
        });
      }, 520);
      return () => clearTimeout(id);
    }
  }, [index, itemsPerView]);

  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [withTransition, index]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!draggingRef.current && !pausedRef.current) next();
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next]);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    setWithTransition(false);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setDragDeltaX(e.clientX - dragStartXRef.current);
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const threshold = 50;
    setWithTransition(true);
    if (dragDeltaX < -threshold) next();
    else if (dragDeltaX > threshold) prev();
    setDragDeltaX(0);
  };

  const cardWidth =
    itemsPerView > 0
      ? Math.max(0, (containerWidth - GAP * (itemsPerView - 1)) / itemsPerView)
      : 0;
  const translateX = -(index * (cardWidth + GAP)) + dragDeltaX;
  const activeDot = ((index - itemsPerView) % N + N) % N;

  return (
    <div style={{ position: "relative", padding: "0 8px" }}>
      <div
        ref={containerRef}
        style={{ position: "relative", overflow: "hidden" }}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          style={{
            display: "flex",
            gap: `${GAP}px`,
            cursor: draggingRef.current ? "grabbing" : "grab",
            transform: `translateX(${translateX}px)`,
            transition: withTransition ? "transform 0.5s ease" : "none",
            touchAction: "pan-y",
          }}
        >
          {extended.map((service, i) => (
            <div key={i} style={{ flex: `0 0 ${cardWidth}px` }}>
              <Card service={service} />
            </div>
          ))}
        </div>
      </div>

      <ArrowButton direction="prev" onClick={prev} />
      <ArrowButton direction="next" onClick={next} />

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "32px",
        }}
      >
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(itemsPerView + i)}
            aria-label={`Ir al servicio ${i + 1}`}
            style={{
              width: activeDot === i ? "28px" : "10px",
              height: "10px",
              borderRadius: "5px",
              border: "none",
              background: activeDot === i ? "#f59e0b" : "rgb(226,232,240)",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      style={{
        background: "rgb(248, 250, 252)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#f59e0b",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            LO QUE HACEMOS
          </p>

          <h2
            style={{
              color: "rgb(13,27,62)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              marginTop: "12px",
            }}
          >
            Servicios completos en energía solar
          </h2>

          <div className="section-divider" style={{ margin: "16px auto 0" }} />

          <p
            style={{
              color: "rgb(100,116,139)",
              fontSize: "16px",
              maxWidth: "600px",
              margin: "24px auto 64px",
            }}
          >
            Ofrecemos soluciones integrales para hogares, comercios e industrias.
            Desde el dimensionamiento hasta la instalación llave en mano.
          </p>
        </div>

        <ServicesCarousel />
      </div>
    </section>
  );
}
