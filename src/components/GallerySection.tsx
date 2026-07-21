import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryItems: Array<{ src: string; alt: string; caption: string; featured?: "large" | "wide" }> = [
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
];

interface GalleryItemProps {
  src: string;
  alt: string;
  caption: string;
  featured?: "large" | "wide";
}

function GalleryItem({ src, alt, caption, featured }: GalleryItemProps) {
  const isLarge = featured === "large";
  const isWide = featured === "wide";

  return (
    <div
      className={cn(
        "gallery-item",
        isLarge && "gallery-item--large",
        isWide && "gallery-item--wide"
      )}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        minHeight: isLarge ? "300px" : undefined,
        height: !isLarge ? "200px" : undefined,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={
          isLarge
            ? "(max-width: 768px) 50vw, 50vw"
            : isWide
            ? "(max-width: 768px) 50vw, 50vw"
            : "(max-width: 768px) 50vw, 25vw"
        }
        className="gallery-img object-cover"
        style={{ transition: "transform 0.5s ease" }}
      />
      {/* Hover overlay */}
      <div
        className="gallery-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(13,27,62,0.4)",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Caption */}
      <div
        className="gallery-caption"
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          color: "white",
          fontSize: "14px",
          fontWeight: 600,
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
        }}
      >
        {caption}
      </div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <>
      {/* Inline styles for hover effects (no JS needed) */}
      <style>{`
        .gallery-item:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-item:hover .gallery-caption {
          opacity: 1;
        }

        /* Desktop grid layout */
        @media (min-width: 768px) {
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
          }
          .gallery-item--large {
            grid-column: span 2;
            grid-row: span 2;
          }
          .gallery-item--wide {
            grid-column: span 2;
          }
        }

        /* Mobile grid layout */
        @media (max-width: 767px) {
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .gallery-item--large,
          .gallery-item--wide {
            grid-column: span 1;
            grid-row: span 1;
          }
          .gallery-item {
            height: 160px !important;
            min-height: unset !important;
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
        <div style={{ textAlign: "center" }}>
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
            className="section-divider"
            style={{ margin: "16px auto 64px" }}
          />
        </div>

        {/* Gallery grid */}
        <div
          className="gallery-grid mx-auto"
          style={{ maxWidth: "1152px" }}
        >
          {galleryItems.map((item) => (
            <GalleryItem
              key={item.src}
              src={item.src}
              alt={item.alt}
              caption={item.caption}
              featured={item.featured}
            />
          ))}
        </div>
      </section>
    </>
  );
}
