import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import type { Metadata } from "next";
import type { Instalacion } from "@/components/InstalacionesMap";
import MapWrapper from "./MapWrapper";
import TestimonialsCarousel from "./TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Conocé las experiencias de nuestros clientes. Más de 50 instalaciones exitosas en Brandsen y la región bonaerense.",
};

const instalaciones: Instalacion[] = [
  { lat: -35.1719, lng: -58.2353, ciudad: "Brandsen", direccion: "San Martín 450", tipo: "Residencial", potencia: "3 kW" },
  { lat: -35.1752, lng: -58.2289, ciudad: "Brandsen", direccion: "Rivadavia 1240", tipo: "Residencial", potencia: "4.2 kW" },
  { lat: -35.1695, lng: -58.2410, ciudad: "Brandsen", direccion: "Belgrano 320", tipo: "Comercial", potencia: "10 kW" },
  { lat: -35.1780, lng: -58.2320, ciudad: "Brandsen", direccion: "Hipólito Yrigoyen 780", tipo: "Termotanque", potencia: "300 L" },
  { lat: -35.1660, lng: -58.2270, ciudad: "Brandsen", direccion: "9 de Julio 85", tipo: "Residencial", potencia: "5 kW" },
  { lat: -35.1730, lng: -58.2400, ciudad: "Brandsen", direccion: "Sarmiento 630", tipo: "Residencial", potencia: "3.5 kW" },
  { lat: -35.1800, lng: -58.2250, ciudad: "Brandsen", direccion: "Mitre 1100", tipo: "Comercial", potencia: "8 kW" },
  { lat: -35.1640, lng: -58.2360, ciudad: "Brandsen", direccion: "Av. Garibaldi 200", tipo: "Termotanque", potencia: "180 L" },
  { lat: -35.1710, lng: -58.2440, ciudad: "Brandsen", direccion: "Los Pinos 45", tipo: "Residencial", potencia: "6 kW" },
  { lat: -35.1770, lng: -58.2190, ciudad: "Brandsen", direccion: "Colón 980", tipo: "Industrial", potencia: "30 kW" },
  { lat: -34.9215, lng: -57.9545, ciudad: "La Plata", direccion: "Calle 7 N°2340", tipo: "Residencial", potencia: "5 kW" },
  { lat: -34.9280, lng: -57.9480, ciudad: "La Plata", direccion: "Av. 44 N°890", tipo: "Comercial", potencia: "12 kW" },
  { lat: -34.9150, lng: -57.9600, ciudad: "La Plata", direccion: "Calle 19 N°1450", tipo: "Residencial", potencia: "4 kW" },
  { lat: -34.9320, lng: -57.9420, ciudad: "La Plata", direccion: "Calle 60 N°320", tipo: "Termotanque", potencia: "300 L" },
  { lat: -34.9250, lng: -57.9700, ciudad: "La Plata", direccion: "Av. 13 N°560", tipo: "Residencial", potencia: "3.5 kW" },
  { lat: -34.9100, lng: -57.9500, ciudad: "La Plata", direccion: "Calle 32 N°1800", tipo: "Comercial", potencia: "20 kW" },
  { lat: -34.8146, lng: -58.4726, ciudad: "Monte Grande", direccion: "Av. Monteverde 680", tipo: "Residencial", potencia: "4 kW" },
  { lat: -34.8190, lng: -58.4680, ciudad: "Monte Grande", direccion: "Perón 1540", tipo: "Industrial", potencia: "50 kW" },
  { lat: -34.8100, lng: -58.4800, ciudad: "Monte Grande", direccion: "San Lorenzo 340", tipo: "Residencial", potencia: "5 kW" },
  { lat: -34.8220, lng: -58.4750, ciudad: "Monte Grande", direccion: "Rivadavia 890", tipo: "Termotanque", potencia: "180 L" },
  { lat: -35.5228, lng: -58.3244, ciudad: "Ranchos", direccion: "Alberdi 95", tipo: "Residencial", potencia: "3.5 kW" },
  { lat: -35.5260, lng: -58.3190, ciudad: "Ranchos", direccion: "Mitre 410", tipo: "Agropecuario", potencia: "20 kW" },
  { lat: -35.5180, lng: -58.3300, ciudad: "Ranchos", direccion: "San Martín 750", tipo: "Residencial", potencia: "4 kW" },
  { lat: -35.5310, lng: -58.3120, ciudad: "Ranchos", direccion: "Ruta 36 Km 96", tipo: "Agropecuario", potencia: "15 kW" },
  { lat: -35.7668, lng: -58.4970, ciudad: "Gral. Belgrano", direccion: "Av. Libertad 345", tipo: "Residencial", potencia: "4 kW" },
  { lat: -35.7700, lng: -58.5020, ciudad: "Gral. Belgrano", direccion: "Sarmiento 780", tipo: "Termotanque", potencia: "180 L" },
  { lat: -35.7630, lng: -58.4920, ciudad: "Gral. Belgrano", direccion: "Rivadavia 1200", tipo: "Residencial", potencia: "5 kW" },
  { lat: -35.7740, lng: -58.5080, ciudad: "Gral. Belgrano", direccion: "Belgrano 440", tipo: "Comercial", potencia: "8 kW" },
  { lat: -35.3020, lng: -58.1120, ciudad: "Jeppener", direccion: "Los lamos 89", tipo: "Residencial", potencia: "3 kW" },
  { lat: -35.3050, lng: -58.1080, ciudad: "Jeppener", direccion: "Ruta 36 Km 82", tipo: "Agropecuario", potencia: "15 kW" },
];

const testimonios = [
  { nombre: "Roberto M.", ubicacion: "Brandsen", tipo: "Residencial", stars: 5, texto: "Instalaron un sistema de 3kW en mi casa. La reducción en la factura fue inmediata: pasé de pagar $45.000 a menos de $8.000 por mes. El equipo fue muy profesional y explicaron todo el proceso paso a paso.", ahorro: "82% de ahorro" },
  { nombre: "Marcela V.", ubicacion: "Brandsen", tipo: "Residencial", stars: 5, texto: "Hacía tiempo que quería instalar paneles pero tenía dudas. Me asesoraron con mucha paciencia, me mostraron los números reales y me convencieron. En menos de un año ya recuperé parte de lo invertido.", ahorro: "75% de ahorro" },
  { nombre: "Carlos F.", ubicacion: "Cañuelas", tipo: "Comercial", stars: 5, texto: "Tengo un taller mecánico con alto consumo. Instalaron un sistema de 10kW y la diferencia es notable. En 3 años voy a recuperar la inversión completa. Excelente servicio y muy buena calidad de los equipos.", ahorro: "70% de ahorro" },
  { nombre: "Ana L.", ubicacion: "Brandsen", tipo: "Termotanque", stars: 5, texto: "Instalé el termotanque solar TS30 de 300 litros. El agua caliente todo el año sin gastar gas es increíble. En invierno también funciona perfecto. La instalación fue en un día y quedó impecable.", ahorro: "Sin gasto de gas" },
  { nombre: "Diego P.", ubicacion: "Las Flores", tipo: "Industrial", stars: 5, texto: "Instalamos un sistema de 50kW en nuestro galpón frigorífico. La inversión fue significativa pero los números no mienten: el retorno es en 4 años y después todo es ahorro puro.", ahorro: "65% de ahorro" },
  { nombre: "Liliana R.", ubicacion: "Brandsen", tipo: "Residencial", stars: 5, texto: "Lo que más me gustó fue la transparencia. Me explicaron exactamente qué equipo necesitaba, cuánto iba a costar y cuánto iba a ahorrar. Sin letra chica. El seguimiento post-venta es muy bueno.", ahorro: "80% de ahorro" },
  { nombre: "Sergio T.", ubicacion: "Chascomús", tipo: "Agropecuario", stars: 5, texto: "Instalamos paneles para el sistema de riego del campo. Antes el costo energético del bombeo era altísimo. Ahora prácticamente no pagamos electricidad en la temporada de riego.", ahorro: "90% en bombeo" },
  { nombre: "Patricia M.", ubicacion: "Brandsen", tipo: "Comercial", stars: 5, texto: "Tengo un local de ropa con mucha iluminación y aire acondicionado. La factura era enorme. Con el sistema de 6kW bajé drásticamente. El personal fue muy cuidadoso con las instalaciones del local.", ahorro: "68% de ahorro" },
  { nombre: "Hernán G.", ubicacion: "La Plata", tipo: "Residencial", stars: 5, texto: "Muy satisfecho con el trabajo. Desde la visita técnica hasta la instalación todo fue perfecto. Me explicaron cómo monitorear la producción desde el celular. Lo recomendaría sin dudar.", ahorro: "73% de ahorro" },
  { nombre: "Claudia B.", ubicacion: "Ranchos", tipo: "Residencial", stars: 5, texto: "Tenía miedo de hacer una inversión grande pero los números cerraron perfectamente. El asesor me mostró la proyección a 10 años y quedé convencida. Ahora me arrepiento de no haberlo hecho antes.", ahorro: "78% de ahorro" },
  { nombre: "Juan P.", ubicacion: "Monte Grande", tipo: "Industrial", stars: 5, texto: "Sistema de 50kW en nuestro galpón de logística. El proceso fue ágil, cumplieron los plazos y el resultado superó las expectativas. El retorno de inversión va a ser en menos de 4 años.", ahorro: "60% de ahorro" },
  { nombre: "Verónica S.", ubicacion: "Gral. Belgrano", tipo: "Termotanque", stars: 5, texto: "El termotanque solar fue la mejor inversión que hice en el año. No pago más gas para agua caliente y en verano el rendimiento es increíble. El equipo quedó instalado prolijo y sin problemas.", ahorro: "100% agua caliente" },
  { nombre: "Oscar N.", ubicacion: "Jeppener", tipo: "Agropecuario", stars: 5, texto: "Para el campo fue fundamental. El sistema de bombeo solar funciona de maravilla. Ya no dependemos de los cortes de luz y el costo de operación bajó drásticamente.", ahorro: "85% en energía" },
  { nombre: "Fernanda R.", ubicacion: "La Plata", tipo: "Comercial", stars: 5, texto: "Restaurante con alta demanda eléctrica. Instalamos 12kW y en los primeros tres meses ya notamos un ahorro enorme. El servicio postventa también es muy bueno, responden rápido cualquier consulta.", ahorro: "72% de ahorro" },
  { nombre: "Gustavo M.", ubicacion: "Brandsen", tipo: "Residencial", stars: 5, texto: "Segunda instalación que hago con ellos. La primera fue hace dos años y quedé tan conforme que llamé para ampliar el sistema. Son serios, puntuales y el trabajo siempre queda impecable.", ahorro: "85% de ahorro" },
  { nombre: "Raquel T.", ubicacion: "Monte Grande", tipo: "Residencial", stars: 5, texto: "El proceso fue muy ordenado. Primero la visita técnica, después el presupuesto detallado y finalmente la instalación en dos días. Pasé de factura de $60.000 a menos de $12.000 mensuales.", ahorro: "80% de ahorro" },
  { nombre: "Martín L.", ubicacion: "Ranchos", tipo: "Agropecuario", stars: 5, texto: "El sistema de riego solar para mis 80 hectáreas fue un cambio total. Cero dependencia de la red eléctrica en temporada. La inversión se paga sola en dos años con lo que ahorramos en energía.", ahorro: "90% en bomba" },
  { nombre: "Sandra K.", ubicacion: "Gral. Belgrano", tipo: "Residencial", stars: 5, texto: "Muy buena atención desde el primer contacto. Me explicaron todo sin apuros, me dieron varias opciones según mi presupuesto y el resultado fue excelente. Totalmente recomendable.", ahorro: "76% de ahorro" },
];

const estadisticas = [
  { num: "50+", label: "Instalaciones completadas" },
  { num: "4+", label: "Años de experiencia" },
  { num: "98%", label: "Clientes satisfechos" },
  { num: "100%", label: "Garantía de instalación" },
];

export default function TestimoniosPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: "linear-gradient(135deg, rgb(13,27,62) 0%, rgb(22,24,83) 100%)", padding: "140px 24px 96px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#f59e0b", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
              LO QUE DICEN NUESTROS CLIENTES
            </p>
            <h1 style={{ color: "white", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "24px" }}>
              Más de{" "}
              <span style={{ background: "linear-gradient(135deg, #f59e0b, #fde68a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                50 familias y empresas
              </span>{" "}
              ya ahorran con energía solar
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7 }}>
              Resultados reales de nuestros clientes en Brandsen y toda la región bonaerense.
            </p>
          </div>
        </section>

        <section style={{ background: "rgb(248,250,252)", padding: "64px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px", textAlign: "center" }}>
            {estadisticas.map((e) => (
              <div key={e.label}>
                <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#f59e0b", lineHeight: 1, marginBottom: "8px" }}>{e.num}</div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "rgb(100,116,139)" }}>{e.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "white", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{ color: "#f59e0b", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                NUESTRA COBERTURA
              </p>
              <h2 style={{ color: "rgb(13,27,62)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, marginBottom: "12px" }}>
                Instalaciones en toda la región
              </h2>
              <div style={{ width: "60px", height: "4px", background: "linear-gradient(90deg, #f59e0b, #fde68a)", borderRadius: "2px", margin: "0 auto 16px" }} />
              <p style={{ color: "rgb(100,116,139)", fontSize: "16px", maxWidth: "580px", margin: "0 auto" }}>
                Cada marcador es una instalación real. Hacé click para ver el tipo de sistema y la potencia instalada.
              </p>
            </div>

            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
            <MapWrapper instalaciones={instalaciones} />

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px", justifyContent: "center" }}>
              {[
                { label: "Residencial", bg: "#fef3c7", color: "#d97706" },
                { label: "Comercial", bg: "#eff6ff", color: "#1e3a8a" },
                { label: "Industrial", bg: "#f0fdf4", color: "#15803d" },
                { label: "Agropecuario", bg: "#f5f3ff", color: "#6d28d9" },
                { label: "Termotanque", bg: "#fff1f2", color: "#be123c" },
              ].map((item) => (
                <span key={item.label} style={{ background: item.bg, color: item.color, fontSize: "12px", fontWeight: 700, padding: "4px 14px", borderRadius: "20px" }}>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "rgb(248,250,252)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p style={{ color: "#f59e0b", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                EXPERIENCIAS REALES
              </p>
              <h2 style={{ color: "rgb(13,27,62)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>
                Lo que dicen nuestros clientes
              </h2>
              <div style={{ width: "60px", height: "4px", background: "linear-gradient(90deg, #f59e0b, #fde68a)", borderRadius: "2px", margin: "16px auto 0" }} />
            </div>
            <TestimonialsCarousel testimonios={testimonios} />
          </div>
        </section>

        <section style={{ background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", padding: "80px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ color: "rgb(13,27,62)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, marginBottom: "16px" }}>
              ¿Querés ser el próximo en ahorrar hasta un 85% en tu factura de luz?
            </h2>
            <p style={{ color: "rgba(13,27,62,0.8)", fontSize: "17px", marginBottom: "32px" }}>
              Pedí tu visita técnica gratuita y te armamos el presupuesto sin cargo.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contacto" style={{ background: "rgb(13,27,62)", color: "white", fontWeight: 800, fontSize: "16px", padding: "14px 36px", borderRadius: "8px", textDecoration: "none", display: "inline-block" }}>
                Pedir presupuesto gratis
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
