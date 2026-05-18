import Image from "next/image";
import { cn } from "@/lib/utils";

const cards = [
  {
    src: "/images/termotanque-180l.webp",
    alt: "Termotanque Solar 180L",
    label: "Termotanque Solar 180L",
  },
  {
    src: "/images/product-4.webp",
    alt: "Panel Solar",
    label: "Panel Solar Fotovoltaico",
  },
  {
    src: "/images/gallery-1.webp",
    alt: "Instalación Solar",
    label: "Instalación Profesional",
  },
  {
    src: "/images/termotanque-300l.webp",
    alt: "Termotanque Solar 300L",
    label: "Termotanque Solar 300L",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className={cn("w-full bg-white")}>
      {/* Two-column layout: left panel + right grid */}
      <div className={cn("flex flex-col md:flex-row")}>
        {/* Left panel — dark navy, 40% width on desktop */}
        <div
          className={cn(
            "flex min-h-[320px] items-center justify-center",
            "w-full md:w-[40%] md:min-h-[500px]"
          )}
          style={{ background: "rgb(22, 24, 83)" }}
        >
          <Image
            src="/images/termotanque-180l.webp"
            alt="Termotanque Solar 180L"
            width={320}
            height={320}
            className={cn("object-contain")}
            style={{ maxWidth: "320px", width: "100%", height: "auto" }}
          />
        </div>

        {/* Right panel — 2×2 grid of product cards */}
        <div
          className={cn(
            "grid grid-cols-2 w-full md:w-[60%]"
          )}
        >
          {cards.map((card) => (
            <div
              key={card.label}
              className={cn(
                "flex flex-col items-center justify-start p-6 text-center"
              )}
              style={{ border: "1px solid rgb(204,204,204)" }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={200}
                height={180}
                className={cn("mb-3 object-contain")}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "180px",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgb(33, 37, 41)",
                }}
              >
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
