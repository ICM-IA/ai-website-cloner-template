import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  { src: "/images/gallery-1.webp", alt: "Instalación solar" },
  { src: "/images/termotanque-300l.webp", alt: "Termotanque solar 300L" },
  { src: "/images/termotanque-180l.webp", alt: "Termotanque solar 180L" },
  { src: "/images/gallery-2.webp", alt: "Instalación 1" },
  { src: "/images/gallery-3.webp", alt: "Instalación 2" },
  { src: "/images/gallery-4.webp", alt: "Instalación 3" },
  { src: "/images/product-4.webp", alt: "Panel solar" },
  { src: "/images/product-5.webp", alt: "Sistema solar" },
];

export default function GallerySection() {
  return (
    <section
      id="galeria"
      className={cn("w-full px-6 text-center")}
      style={{
        background: "rgb(245, 245, 245)",
        padding: "64px 24px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: 700,
          color: "rgb(22, 24, 83)",
          marginBottom: "8px",
        }}
      >
        Galería de fotos
      </h2>

      <p
        style={{
          fontSize: "18px",
          fontWeight: 500,
          color: "rgb(89, 89, 89)",
          marginBottom: "40px",
        }}
      >
        Nuestro trabajos
      </p>

      <div
        className={cn(
          "mx-auto grid gap-4",
          "grid-cols-2 sm:grid-cols-4"
        )}
      >
        {images.map((image) => (
          <div key={image.src} className="relative w-full" style={{ height: "220px" }}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              style={{ borderRadius: "8px" }}
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
