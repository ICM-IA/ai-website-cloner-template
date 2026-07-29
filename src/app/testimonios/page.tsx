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
  description: "Conocé las experiencias de nuestros clientes. Más de 100 instalaciones exitosas en Brandsen y la región bonaerense.",
};

const instalaciones: Instalacion[] = [
  { lat: -35.2150446, lng: -58.2451647, ciudad: "Eduardo Guyet – Las Malvinas", direccion: "Sistema fotovoltaico híbrido trifásico + carport solar", tipo: "Residencial", potencia: "10 kW" },
  { lat: -35.287135, lng: -58.191897, ciudad: "Liliana – Jeppener", direccion: "Sistema fotovoltaico híbrido para vivienda y sector laboral", tipo: "Comercial", potencia: "8 kW + 20 kW" },
  { lat: -35.5182551, lng: -58.310992, ciudad: "Diego – Ranchos", direccion: "Termotanque solar FAM inoxidable", tipo: "Termotanque", potencia: "200 L" },
  { lat: -35.4968614, lng: -58.3826282, ciudad: "Hugo Ghilini", direccion: "Sistema fotovoltaico híbrido monofásico", tipo: "Residencial", potencia: "6 kW" },
  { lat: -34.0631123, lng: -60.074885, ciudad: "Jorge Zabaleta", direccion: "3 termotanques solares inoxidables", tipo: "Termotanque", potencia: "3 x 200 L" },
  { lat: -35.277236, lng: -58.199908, ciudad: "Supermercado El Mono", direccion: "Sistema fotovoltaico híbrido trifásico con banco de baterías", tipo: "Comercial", potencia: "30 kW" },
  { lat: -35.1166978, lng: -58.2790097, ciudad: "Rubén – Las Acacias", direccion: "Sistema fotovoltaico off-grid", tipo: "Residencial", potencia: "5 kW" },
  { lat: -35.2758585, lng: -58.2041943, ciudad: "Pedro Pacheco", direccion: "Sistema fotovoltaico híbrido monofásico", tipo: "Residencial", potencia: "6 kW" },
  { lat: -35.05443, lng: -58.3696166, ciudad: "Nicolás Monaco", direccion: "Bomba solar sumergible para agua de ganado", tipo: "Agropecuario", potencia: "600 W" },
  { lat: -35.40542, lng: -58.374685, ciudad: "Pablo – Ranchos", direccion: "Termotanque solar FAM inoxidable", tipo: "Termotanque", potencia: "300 L" },
  { lat: -35.277698, lng: -58.189733, ciudad: "Isabel Saavedra", direccion: "Termotanque solar FAM inoxidable", tipo: "Termotanque", potencia: "200 L" },
  { lat: -35.5101613, lng: -58.3154904, ciudad: "María Oporto", direccion: "Termotanque solar FAM galvanizado", tipo: "Termotanque", potencia: "200 L" },
  { lat: -35.6325417, lng: -58.2847254, ciudad: "Agustín Santalucía", direccion: "Bomba solar sumergible para agua de ganado", tipo: "Agropecuario", potencia: "300 W" },
  { lat: -35.0713102, lng: -58.1678952, ciudad: "Matías Longoni", direccion: "Termotanque solar FAM galvanizado", tipo: "Termotanque", potencia: "150 L" },
  { lat: -34.964616, lng: -58.248025, ciudad: "Hernán Mannarino", direccion: "Bomba solar sumergible para agua de ganado", tipo: "Agropecuario", potencia: "600 W" },
  { lat: -35.385838, lng: -58.650491, ciudad: "Julián Udaondo", direccion: "4 bombas solares sumergibles para riego y ganado", tipo: "Agropecuario", potencia: "4 bombas" },
  { lat: -35.457084, lng: -58.355241, ciudad: "Pablo Suárez", direccion: "Bomba solar 1,5 HP para agua de ganado", tipo: "Agropecuario", potencia: "1,5 HP" },
  { lat: -35.274953, lng: -58.200538, ciudad: "Mayorista Andell", direccion: "Sistema fotovoltaico híbrido trifásico con banco de baterías", tipo: "Comercial", potencia: "50 kW" },
  { lat: -35.277017, lng: -58.203064, ciudad: "Mirta – Jeppener", direccion: "Sistema fotovoltaico off-grid", tipo: "Residencial", potencia: "6 kW" },
  { lat: -35.244891, lng: -58.222614, ciudad: "Estancia La Victoria", direccion: "Sistema fotovoltaico híbrido trifásico. Mismo cliente que Estancia La Victoria – Bombeo.", tipo: "Agropecuario", potencia: "20 kW" },
  { lat: -35.24639, lng: -58.22112, ciudad: "Estancia La Victoria – Bombeo", direccion: "2 bombas solares para agua de ganado. Mismo cliente: también cuenta con sistema fotovoltaico.", tipo: "Agropecuario", potencia: "2 bombas" },
  { lat: -35.174455, lng: -58.228884, ciudad: "Emiliano Cortés – ESB", direccion: "Sistema fotovoltaico híbrido monofásico", tipo: "Residencial", potencia: "6 kW" },
  { lat: -32.625696, lng: -59.971763, ciudad: "Yety S.A. – Entre Ríos", direccion: "Bomba solar híbrida de alta profundidad", tipo: "Agropecuario", potencia: "2200 W" },
  { lat: -35.203853, lng: -58.394904, ciudad: "Haras de Oroite", direccion: "Bomba solar sumergible", tipo: "Agropecuario", potencia: "750 W" },
  { lat: -35.040642, lng: -58.443735, ciudad: "Miguel Gambarte", direccion: "Sistema fotovoltaico híbrido trifásico", tipo: "Residencial", potencia: "10 kW" },
  { lat: -34.8766962, lng: -58.3894315, ciudad: "Heladería Grido – Glew", direccion: "Sistema fotovoltaico on-grid", tipo: "Comercial", potencia: "10 kW" },
  { lat: -34.87805, lng: -58.38765, ciudad: "Alfredo Ferreti – Glew", direccion: "Sistema fotovoltaico híbrido monofásico", tipo: "Residencial", potencia: "6 kW" },
  { lat: -35.0246477, lng: -58.4192803, ciudad: "Graciela Huerdo", direccion: "Sistema fotovoltaico off-grid, bajo consumo", tipo: "Residencial", potencia: "6 kW" },
  { lat: -35.169664, lng: -58.224109, ciudad: "Escuela Técnica N°1 – Brandsen", direccion: "Sistema fotovoltaico off-grid (equipos donados)", tipo: "Comercial", potencia: "5 kW" },
  { lat: -35.081594, lng: -58.293534, ciudad: "Tosquera – Domselaar", direccion: "Sistema fotovoltaico off-grid para puesto móvil", tipo: "Industrial", potencia: "5 kW" },
  { lat: -35.03444, lng: -58.44123, ciudad: "Fincas 48", direccion: "Sistema fotovoltaico híbrido trifásico", tipo: "Agropecuario", potencia: "10 kW" },
  { lat: -35.0281, lng: -58.4227, ciudad: "Judhit – San Vicente", direccion: "Sistema fotovoltaico híbrido monofásico", tipo: "Residencial", potencia: "6 kW" },
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
  { num: "100+", label: "Instalaciones completadas" },
  { num: "5+", label: "Años de experiencia" },
  { num: "98%", label: "Clientes satisfechos" },
  { num: "100%", label: "Garantía de instalación" },
];

export default function TestimoniosPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ backgroundImage: `linear-gradient(135deg, rgba(13,27,62,0.85) 0%, rgba(22,24,83,0.85) 100%), url('/images/testimonios-background.webp')`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", padding: "140px 24px 96px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#f59e0b", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
              LO QUE DICEN NUESTROS CLIENTES
            </p>
            <h1 style={{ color: "white", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "24px" }}>
              Más de{" "}
              <span style={{ background: "linear-gradient(135deg, #f59e0b, #fde68a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                100 familias y empresas
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
