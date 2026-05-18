import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryItems = [
  {
    src: "/images/gallery-1.webp",
    alt: "Instalación residencial",
    caption: "Instalación residencial",
    featured: "large" as const, // span 2 cols × 2 rows
  },
  {
    src: "/images/termotanque-300l.webp",
    alt: "Termotanque 300L",
    caption: "Termotanque 300L",
  },
  {
    src: "/images/termotanque-180l.webp",
    alt: "Termotanque 180L",
    caption: "Termotanque 180L",
  },
  {
    src: "/images/gallery-2.webp",
    alt: "Instalación industrial",
    caption: "Instalación industrial",
  },
  {
    src: "/images/gallery-3.webp",
    alt: "Panel solar",
    caption: "Panel solar",
  },
  {
    src: "/images/gallery-4.webp",
    alt: "Sistema fotovoltaico",
    caption: "Sistema fotovoltaico",
  },
  {
    src: "/images/product-4.webp",
    alt: "Equipos",
    caption: "Equipos",
    featured: "wide" as const, // span 2 cols
  },
  {
    src: "/images/product-5.webp",
    alt: "Instalación comercial",
    caption: "Instalación comercial",
  },
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
