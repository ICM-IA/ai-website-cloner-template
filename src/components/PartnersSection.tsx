import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

const proveedores: Logo[] = [
  { src: "/images/logos/proveedores/amerisolar.png", alt: "Amerisolar" },
  { src: "/images/logos/proveedores/deye.png", alt: "Deye" },
  { src: "/images/logos/proveedores/fantastic.png", alt: "Fantastic" },
  { src: "/images/logos/proveedores/growatt.png", alt: "Growatt" },
  { src: "/images/logos/proveedores/handuro.png", alt: "Handuro" },
  { src: "/images/logos/proveedores/huawei.png", alt: "Huawei" },
  { src: "/images/logos/proveedores/ja-solar.png", alt: "JA Solar" },
  { src: "/images/logos/proveedores/jinko-solar.png", alt: "Jinko Solar" },
  { src: "/images/logos/proveedores/leoch.png", alt: "Leoch" },
  { src: "/images/logos/proveedores/chiko-solar.png", alt: "Chiko Solar" },
  { src: "/images/logos/proveedores/longi-solar.png", alt: "Longi Solar" },
  { src: "/images/logos/proveedores/pylontech.png", alt: "Pylontech" },
  { src: "/images/logos/proveedores/schneider.png", alt: "Schneider Electric" },
  { src: "/images/logos/proveedores/siemens.png", alt: "Siemens" },
  { src: "/images/logos/proveedores/slocable.png", alt: "Slocable" },
  { src: "/images/logos/proveedores/sma.png", alt: "SMA" },
  { src: "/images/logos/proveedores/suntree.png", alt: "Suntree" },
  { src: "/images/logos/proveedores/tonka-solar.png", alt: "Tonka Solar" },
  { src: "/images/logos/proveedores/trina-solar.svg", alt: "Trina Solar" },
  { src: "/images/logos/proveedores/ultracell.png", alt: "Ultracell" },
  { src: "/images/logos/proveedores/victron-energy.png", alt: "Victron Energy" },
];

const socios: Logo[] = [
  { src: "/images/logos/aliados/beto-perforaciones.jpg", alt: "Beto Perforaciones" },
  { src: "/images/logos/aliados/multiradio.png", alt: "Multiradio" },
  { src: "/images/logos/aliados/multisolar.png", alt: "Multisolar" },
  { src: "/images/logos/aliados/susplify.png", alt: "Susplify" },
];

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div
      style={{
        position: "relative",
        height: "56px",
        width: "150px",
        flexShrink: 0,
      }}
    >
      <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: "contain" }} />
    </div>
  );
}

function MarqueeRow({
  label,
  logos,
  direction,
  duration,
}: {
  label: string;
  logos: Logo[];
  direction: "left" | "right";
  duration: string;
}) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <p
        style={{
          color: "rgb(100,116,139)",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "24px",
        }}
      >
        {label}
      </p>
      <div className="marquee-viewport">
        <div
          className={direction === "left" ? "marquee-track" : "marquee-track marquee-track-reverse"}
          style={{ animationDuration: duration, gap: "56px", paddingRight: "56px" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={`${logo.alt}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section
      id="aliados"
      style={{
        background: "white",
        padding: "96px 24px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            NUESTROS ALIADOS
          </p>
          <h2
            style={{
              color: "rgb(13,27,62)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              marginTop: "12px",
            }}
          >
            Empresas que confían en nosotros
          </h2>
          <div className="section-divider" style={{ margin: "16px auto 64px" }} />
        </div>

        <MarqueeRow label="Proveedores" logos={proveedores} direction="left" duration="45s" />
        <MarqueeRow label="Socios estratégicos" logos={socios} direction="right" duration="30s" />
      </div>
    </section>
  );
}
