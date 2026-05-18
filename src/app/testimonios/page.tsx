import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import type { Metadata } from "next";
import type { Instalacion } from "@/components/InstalacionesMap";
import MapWrapper from "./MapWrapper";

export const metadata: Metadata = {
  title: "Testimonios | Energia Solar Brandsen",
  description:
    "Conocé las experiencias de nuestros clientes. Más de 50 instalaciones exitosas en Brandsen y la región bonaerense.",
};

const testimonios = [
  {
    nombre: "Roberto M.",
    ubicacion: "Brandsen, Buenos Aires",
    tipo: "Residencial",
    stars: 5,
    texto:
      "Instalaron un sistema de 3kW en mi casa. La reducción en la factura fue inmediata: pasé de pagar $45.000 a menos de $8.000 por mes. El equipo fue muy profesional y explicaron todo el proceso paso a paso. Totalmente recomendable.",
    ahorro: "82% de ahorro",
  },
  {
    nombre: "Marcela V.",
    ubicacion: "Brandsen",
    tipo: "Residencial",
    stars: 5,
    texto:
      "Hacía tiempo que quería instalar paneles pero tenía dudas sobre si valía la pena. Me asesoraron con mucha paciencia, me mostraron los números reales y me convencieron. En menos de un año ya recuperé una parte importante de lo invertido.",
    ahorro: "75% de ahorro",
  },
  {
    nombre: "Carlos F.",
    ubicacion: "Cañuelas, Buenos Aires",
    tipo: "Comercial",
    stars: 5,
    texto:
      "Tengo un taller mecánico con alto consumo de electricidad. Instalaron un sistema de 10kW y la diferencia es notable. En 3 años voy a recuperar la inversión completa. Excelente servicio y muy buena calidad de los equipos.",
    ahorro: "70% de ahorro",
  },
  {
    nombre: "Ana L.",
    ubicacion: "Brandsen",
    tipo: "Termotanque Solar",
    stars: 5,
    texto:
      "Instalé el termotanque solar TS30 de 300 litros. El agua caliente todo el año sin gastar gas es increíble. En invierno también funciona perfecto. La instalación fue en un día y quedó impecable.",
    ahorro: "Sin gasto de gas",
  },
  {
    nombre: "Diego P.",
    ubicacion: "Las Flores, Buenos Aires",
    tipo: "Industrial",
    stars: 5,
    texto:
      "Instalamos un sistema de 50kW en nuestro galpón de almacenamiento frigorífico. La inversión fue significativa pero los números no mienten: el retorno es en 4 años y después todo es ahorro puro. Muy conformes con el resultado.",
    ahorro: "65% de ahorro",
  },
  {
    nombre: "Liliana R.",
    ubicacion: "Brandsen",
    tipo: "Residencial",
    stars: 5,
    texto:
      "Lo que más me gustó fue la transparencia. Me explicaron exactamente qué equipo necesitaba, cuánto iba a costar y cuánto iba a ahorrar. Sin letra chica. La instalación fue prolija y el seguimiento post-venta es muy bueno.",
    ahorro: "80% de ahorro",
  },
  {
    nombre: "Sergio T.",
    ubicacion: "Chascomús, Buenos Aires",
    tipo: "Agropecuario",
    stars: 5,
    texto:
      "Instalamos paneles para el sistema de riego del campo. Antes el costo energético del bombeo era altísimo. Ahora prácticamente no pagamos electricidad en la temporada de riego. Excelente inversión para el campo.",
    ahorro: "90% en bombeo",
  },
  {
    nombre: "Patricia M.",
    ubicacion: "Brandsen",
    tipo: "Comercial",
    stars: 5,
    texto:
      "Tengo un local de venta de ropa con mucha iluminación y aire acondicionado. La factura era enorme. Con el sistema de 6kW que instalaron, bajé drásticamente. Además el personal fue muy cuidadoso con las instalaciones del local.",
    ahorro: "68% de ahorro",
  },
];

const instalaciones: Instalacion[] = [
  // Brandsen
  { lat: -35.1719, lng: -58.2353, ciudad: "Brandsen", direccion: "San Martín 450", tipo: "Residencial", potencia: "3 kW" },
  { lat: -35.1752, lng: -58.2289, ciudad: "Brandsen", direccion: "Rivadavia 1240", tipo: "Residencial", potencia: "4.2 kW" },
  { lat: -35.1695, lng: -58.2410, ciudad: "Brandsen", direccion: "Belgrano 320", tipo: "Comercial", potencia: "10 kW" },
  { lat: -35.1780, lng: -58.2320, ciudad: "Brandsen", direccion: "Hipólito Yrigoyen 780", tipo: "Termotanque", potencia: "300 L" },
  // La Plata
  { lat: -34.9215, lng: -57.9545, ciudad: "La Plata", direccion: "Calle 7 N°2340", tipo: "Residencial", potencia: "5 kW" },
  { lat: -34.9280, lng: -57.9480, ciudad: "La Plata", direccion: "Av. 44 N°890", tipo: "Comercial", potencia: "12 kW" },
  // Monte Grande
  { lat: -34.8146, lng: -58.4726, ciudad: "Monte Grande", direccion: "Av. Monteverde 680", tipo: "Residencial", potencia: "4 kW" },
  { lat: -34.8190, lng: -58.4680, ciudad: "Monte Grande", direccion: "Perón 1540", tipo: "Industrial", potencia: "50 kW" },
  // Ranchos (Gral. Paz)
  { lat: -35.5228, lng: -58.3244, ciudad: "Ranchos", direccion: "Alberdi 95", tipo: "Residencial", potencia: "3.5 kW" },
  { lat: -35.5260, lng: -58.3190, ciudad: "Ranchos", direccion: "Mitre 410", tipo: "Agropecuario", potencia: "20 kW" },
  // General Belgrano
  { lat: -35.7668, lng: -58.4970, ciudad: "Gral. Belgrano", direccion: "Av. Libertad 345", tipo: "Residencial", potencia: "4 kW" },
  { lat: -35.7700, lng: -58.5020, ciudad: "Gral. Belgrano", direccion: "Sarmiento 780", tipo: "Termotanque", potencia: "180 L" },
  // Jeppener
  { lat: -35.3020, lng: -58.1120, ciudad: "Jeppener", direccion: "Los Álamos 89", tipo: "Residencial", potencia: "3 kW" },
  { lat: -35.3050, lng: -58.1080, ciudad: "Jeppener", direccion: "Ruta 36 Km 82", tipo: "Agropecuario", potencia: "15 kW" },
];

const estadisticas = [
  { num: "50+", label: "Instalaciones completadas" },
  { num: "4+", label: "Años de experiencia" },
  { num: "98%", label: "Clientes satisfechos" },
  { num: "100%", label: "Garantía de instalación" },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: "16px" }}>★</span>
      ))}
    </div>
  );
}

export default function TestimoniosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, rgb(13,27,62) 0%, rgb(22,24,83) 100%)",
            padding: "140px 24px 96px",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                color: "#f59e0b",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              LO QUE DICEN NUESTROS CLIENTES
            </p>
            <h1
              style={{
                color: "white",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Más de{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                50 familias y empresas
              </span>{" "}
              ya ahorran con energía solar
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              Estos son los resultados reales de nuestros clientes en Brandsen y la región bonaerense.
            </p>
          </div>
        </section>

        {/* Estadísticas */}
        <section
          style={{
            background: "rgb(248,250,252)",
            padding: "64px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {estadisticas.map((e) => (
              <div key={e.label}>
                <div
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 900,
                    color: "#f59e0b",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {e.num}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "rgb(100,116,139)" }}>
                  {e.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonios grid */}
        <section style={{ background: "white", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p
                style={{
                  color: "#f59e0b",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                EXPERIENCIAS REALES
              </p>
              <h2
                style={{
                  color: "rgb(13,27,62)",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                }}
              >
                Lo que dicen nuestros clientes
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

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "32px",
              }}
            >
              {testimonios.map((t) => (
                <div
                  key={t.nombre}
                  style={{
                    background: "rgb(248,250,252)",
                    borderRadius: "16px",
                    padding: "32px",
                    border: "1px solid rgb(226,232,240)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Stars count={t.stars} />
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgb(51,65,85)",
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      flex: 1,
                      margin: 0,
                    }}
                  >
                    &ldquo;{t.texto}&rdquo;
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "8px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgb(226,232,240)",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "15px", color: "rgb(13,27,62)" }}>
                        {t.nombre}
                      </div>
                      <div style={{ fontSize: "13px", color: "rgb(100,116,139)" }}>
                        {t.ubicacion}
                      </div>
                    </div>
                    <span
                      style={{
                        background: "rgba(245,158,11,0.12)",
                        color: "#d97706",
                        fontSize: "12px",
                        fontWeight: 700,
                        padding: "4px 12px",
                        borderRadius: "20px",
                      }}
                    >
                      {t.ahorro}
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "rgb(100,116,139)",
                        background: "rgb(241,245,249)",
                        padding: "3px 10px",
                        borderRadius: "20px",
                      }}
                    >
                      {t.tipo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mapa de instalaciones */}
        <section style={{ background: "rgb(248,250,252)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p
                style={{
                  color: "#f59e0b",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                NUESTRA COBERTURA
              </p>
              <h2
                style={{
                  color: "rgb(13,27,62)",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  marginBottom: "12px",
                }}
              >
                Instalaciones en toda la región
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #f59e0b, #fde68a)",
                  borderRadius: "2px",
                  margin: "0 auto 16px",
                }}
              />
              <p style={{ color: "rgb(100,116,139)", fontSize: "16px", maxWidth: "580px", margin: "0 auto" }}>
                Cada marcador es una instalación real. Hacé click para ver los detalles del sistema instalado.
              </p>
            </div>

            {/* Leaflet CSS */}
            <link
              rel="stylesheet"
              href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
              integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
              crossOrigin=""
            />

            <MapWrapper instalaciones={instalaciones} />

            {/* Leyenda */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "24px",
                justifyContent: "center",
              }}
            >
              {[
                { label: "Residencial", color: "#fef3c7", text: "#d97706" },
                { label: "Comercial", color: "#eff6ff", text: "#1e3a8a" },
                { label: "Industrial", color: "#f0fdf4", text: "#15803d" },
                { label: "Agropecuario", color: "#f5f3ff", text: "#6d28d9" },
                { label: "Termotanque", color: "#fff1f2", text: "#be123c" },
              ].map((item) => (
                <span
                  key={item.label}
                  style={{
                    background: item.color,
                    color: item.text,
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: "20px",
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2
              style={{
                color: "rgb(13,27,62)",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 900,
                marginBottom: "16px",
              }}
            >
              ¿Querés ser el próximo caso de éxito?
            </h2>
            <p style={{ color: "rgba(13,27,62,0.8)", fontSize: "17px", marginBottom: "32px" }}>
              Pedí tu visita técnica gratuita y empezá a ahorrar este mes.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contacto"
                style={{
                  background: "rgb(13,27,62)",
                  color: "white",
                  fontWeight: 800,
                  fontSize: "16px",
                  padding: "14px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Pedir presupuesto gratis
              </Link>
              <Link
                href="/calculadora"
                style={{
                  background: "transparent",
                  color: "rgb(13,27,62)",
                  fontWeight: 700,
                  fontSize: "16px",
                  padding: "14px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "inline-block",
                  border: "2px solid rgb(13,27,62)",
                }}
              >
                Calculá tu ahorro
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
