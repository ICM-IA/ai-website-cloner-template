import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Bombeo Solar Fotovoltaico",
  description:
    "Bombas solares sumergibles Handuro para campo, ganadería y riego. Agua constante sin gastos de combustible ni dependencia de la red eléctrica en Brandsen.",
};

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function ServiceHero() {
  return (
    <section
      style={{
        position: "relative",
        height: 520,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background image */}
      <Image
        src="/images/bombeo-solar-background.jpg"
        alt="Bombeo solar para campo y ganadería"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(13,27,62,0.93) 0%, rgba(22,24,83,0.85) 100%)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 800,
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(245,158,11,0.15)",
            border: "1px solid rgba(245,158,11,0.4)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 20,
          }}
        >
          <span style={{ fontSize: 14 }}>💧</span>
          <span
            style={{
              color: "#f59e0b",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            Agua para el campo
          </span>
        </div>

        <h1
          style={{
            color: "white",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            margin: "0 0 20px",
          }}
        >
          Bombeo Solar Fotovoltaico para Campo, Ganadería y Riego
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 18,
            lineHeight: 1.7,
            maxWidth: 620,
            margin: "0 auto 36px",
          }}
        >
          Agua constante para tu hacienda o cultivo sin gastos de combustible,
          sin mantenimiento complejo y sin depender de la red eléctrica.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/#contacto"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #f97316)",
              color: "rgb(13, 27, 62)",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 8,
              textDecoration: "none",
              border: "none",
              display: "inline-block",
              transition: "opacity 0.2s, transform 0.2s",
            }}
          >
            Solicitar Cotización a Medida
          </Link>
          <Link
            href="https://wa.me/+541152282070?text=Hola! Quiero consultar sobre bombeo solar para mi campo."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: "white",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 8,
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.5)",
              display: "inline-block",
              transition: "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
          >
            Asesoramiento por WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DIAGNÓSTICO TÉCNICO SECTION
───────────────────────────────────────────── */
const problems = [
  {
    title: "Límite físico de succión (7 m a 8 m)",
    desc: "Los sistemas mecánicos por aspiración superficial no pueden superar el límite físico de 7 m a 8 m de profundidad de columna de agua. Si las napas descienden por sequía o mayor demanda estacional, el molino pierde depresión, cavita y deja de extraer agua.",
  },
  {
    title: "Falta de viento en días críticos",
    desc: "La falta de brisa suele coincidir con las épocas de mayor calor en verano, justamente cuando la hacienda requiere mayor volumen de agua.",
  },
  {
    title: "Escasez de molineros y repuestos costosos",
    desc: "La mano de obra especializada para la reparación de máquinas, cilindros y varillajes es cada vez más escasa, generando paradas prolongadas de suministro.",
  },
];

function DiagnosticoSection() {
  return (
    <section style={{ background: "white", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#f59e0b",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              margin: "0 0 12px 0",
            }}
          >
            DIAGNÓSTICO TÉCNICO
          </p>
          <h2
            style={{
              color: "rgb(13, 27, 62)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Del molino tradicional a la innovación solar
          </h2>
          <div
            style={{
              width: 60,
              height: 4,
              background: "linear-gradient(90deg, #f59e0b, #fde68a)",
              borderRadius: 2,
              margin: "16px auto 40px",
            }}
          />
        </div>

        <h3
          style={{
            color: "rgb(13, 27, 62)",
            fontSize: 20,
            fontWeight: 700,
            margin: "0 0 16px",
          }}
        >
          🌾 ¿Tu molino ya no da abasto o el mantenimiento se volvió un
          problema?
        </h3>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "rgb(71, 85, 105)",
            margin: "0 0 40px",
          }}
        >
          El molino de viento ha sido un gran aliado del campo argentino,
          pero presenta limitaciones físicas y operativas críticas frente a
          las exigencias actuales:
        </p>

        {/* Problems list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {problems.map((p) => (
            <div
              key={p.title}
              style={{
                borderLeft: "3px solid #cbd5e1",
                background: "rgb(248,250,252)",
                borderRadius: "0 12px 12px 0",
                padding: "20px 24px",
              }}
            >
              <p
                style={{
                  color: "rgb(13, 27, 62)",
                  fontSize: 15,
                  fontWeight: 700,
                  margin: "0 0 8px",
                }}
              >
                {p.title}
              </p>
              <p
                style={{
                  color: "rgb(100,116,139)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Solution highlight */}
        <div
          style={{
            background: "linear-gradient(135deg, rgb(13,27,62), rgb(22,24,83))",
            borderRadius: 16,
            padding: "36px 32px",
            marginBottom: 24,
          }}
        >
          <p
            style={{
              color: "#f59e0b",
              fontSize: 18,
              fontWeight: 800,
              margin: "0 0 12px",
            }}
          >
            💧 La Solución Solar Sumergible
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 15,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Nuestras bombas trabajan totalmente sumergidas en la profundidad
            real del pozo (20 m, 50 m, 80 m o más). Al empujar la columna de
            agua desde el fondo en lugar de succionarla desde la superficie,
            se eliminan los límites de aspiración y se garantiza un caudal
            diario constante (L/día) impulsado por el sol.
          </p>
        </div>

        {/* Flexibility note */}
        <div
          style={{
            background: "rgb(255, 251, 235)",
            border: "1px solid rgba(245,158,11,0.35)",
            borderRadius: 12,
            padding: "20px 24px",
          }}
        >
          <p
            style={{
              color: "rgb(13, 27, 62)",
              fontSize: 14,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <strong>💡 Flexibilidad total:</strong> Podés reemplazar el
            molino definitivamente o instalar el sistema solar en paralelo
            como fuente principal, dejando el molino como respaldo
            secundario.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VENTAJAS SECTION
───────────────────────────────────────────── */
const ventajas = [
  {
    icon: "💧",
    title: "Cero costo de operación",
    desc: "Eliminá por completo el gasto en gasoil, generadores a combustión o tarifas eléctricas para el llenado de tanques australianos y bebederos.",
  },
  {
    icon: "⚡",
    title: "Operación 100% automática",
    desc: "El sistema enciende de manera autónoma con los primeros rayos del sol y ajusta la potencia de bombeo según la radiación disponible.",
  },
  {
    icon: "🎯",
    title: "Dimensionamiento de ingeniería a medida",
    desc: "Calculamos la profundidad de instalación (m), la altura manométrica total (AMT en m.c.a.), la distancia de conducción (m) y la demanda de volumen diario (L/día) para definir la bomba y la cantidad de paneles fotovoltaicos exactos.",
  },
  {
    icon: "🛠️",
    title: "Servicio integral e instalación en el día",
    desc: "Trabajamos en alianza estratégica local con Perforaciones Beto. Si tu campo requiere una nueva perforación, coordinamos la ejecución del pozo, el montaje de la estructura fotovoltaica, la interconexión hidráulica/eléctrica y la puesta en marcha en una sola jornada.",
  },
];

function VentajasSection() {
  return (
    <section style={{ background: "rgb(13,27,62)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#f59e0b",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              margin: "0 0 12px 0",
            }}
          >
            VENTAJAS PRINCIPALES
          </p>
          <h2
            style={{
              color: "white",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Un sistema pensado para el campo
          </h2>
          <div
            style={{
              width: 60,
              height: 4,
              background: "linear-gradient(90deg, #f59e0b, #fde68a)",
              borderRadius: 2,
              margin: "16px auto 64px",
            }}
          />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {ventajas.map((v) => (
            <div
              key={v.title}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: 32,
                background: "rgba(255,255,255,0.04)",
                transition: "border-color 0.3s, background 0.3s",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{v.icon}</div>
              <h3
                style={{
                  color: "white",
                  fontSize: 17,
                  fontWeight: 700,
                  margin: "0 0 10px",
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CATÁLOGO SECTION
───────────────────────────────────────────── */
const pumpLines = [
  {
    icon: "🌀",
    title: "Bombas Helicoidales para Pozos Estrechos y Profundos",
    line: "Línea SS",
    specs: [
      { label: "Diámetro de pozo", value: "2'' y 3''" },
      { label: "Potencias", value: "Desde 120 W hasta 750 W" },
    ],
    desc: "Su motor de alta presión con rotor helicoidal permite elevar agua a gran altura desde pozos estrechos con un consumo mínimo de paneles. Ideal para puestos rurales, viviendas de campo y bebederos de menor volumen.",
  },
  {
    icon: "🌊",
    title: "Bombas Centrífugas de Alto Caudal",
    line: "Líneas SSC, SC y HV",
    specs: [
      { label: "Diámetro de pozo", value: "3'', 4'' y 6''" },
      { label: "Potencias", value: "Desde 300 W hasta 5.500 W (5,5 kW)" },
    ],
    desc: "Diseñadas con impulsores multietapa para mover importantes volúmenes de agua en ganadería intensiva, feedlots, llenado de tanques australianos y sistemas de riego (desde 20.000 L/día hasta más de 280.000 L/día).",
  },
  {
    icon: "⛲",
    title: "Bombas de Superficie",
    line: "Línea SCPM",
    specs: [{ label: "Potencias", value: "550 W y 1.500 W" }],
    desc: "Impulsión y trasvase de agua desde tanques cisterna, tajamares o arroyos hacia tanques elevados o red de distribución.",
  },
];

const controllers = [
  {
    title: "Línea DC Directa",
    desc: "Conectadas 100% al campo de paneles solares para una operación diurna automatizada sin costos operativos.",
  },
  {
    title: "Línea AC/DC (Bombeo Nocturno)",
    desc: "Cuentan con entradas independientes y aisladas para Corriente Continua (CC) y Corriente Alterna (CA). Si necesitás extraer agua durante la noche o en emergencias, podés conmutar de forma 100% segura mediante su térmica correspondiente hacia la red eléctrica o un grupo electrógeno, sin riesgo de dañar la electrónica del controlador.",
  },
];

function CatalogoSection() {
  return (
    <section id="catalogo" style={{ background: "white", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#f59e0b",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              margin: "0 0 12px 0",
            }}
          >
            CATÁLOGO
          </p>
          <h2
            style={{
              color: "rgb(13, 27, 62)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Bombas Solares Handuro, calidad internacional
          </h2>
          <div
            style={{
              width: 60,
              height: 4,
              background: "linear-gradient(90deg, #f59e0b, #fde68a)",
              borderRadius: 2,
              margin: "16px auto 24px",
            }}
          />
          <p
            style={{
              color: "rgb(100,116,139)",
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 760,
              margin: "0 auto 64px",
            }}
          >
            Comercializamos la línea oficial de electrobombas Handuro
            (fabricante global con más de 15 años de trayectoria),
            equipadas con motores sumergibles sin escobillas (BLDC) de imán
            permanente y máxima eficiencia energética.
          </p>
        </div>

        {/* Pump line cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
            marginBottom: 48,
          }}
        >
          {pumpLines.map((pump) => (
            <div
              key={pump.title}
              style={{
                border: "1px solid rgb(226,232,240)",
                borderRadius: 20,
                padding: 32,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{pump.icon}</div>
              <p
                style={{
                  color: "#f59e0b",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  margin: "0 0 8px",
                }}
              >
                {pump.line}
              </p>
              <h3
                style={{
                  color: "rgb(13,27,62)",
                  fontSize: 18,
                  fontWeight: 700,
                  margin: "0 0 20px",
                  lineHeight: 1.35,
                }}
              >
                {pump.title}
              </h3>

              <div style={{ marginBottom: 20 }}>
                {pump.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderBottom:
                        i < pump.specs.length - 1
                          ? "1px solid rgb(226,232,240)"
                          : "none",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: "rgb(100,116,139)",
                        fontWeight: 500,
                        flexShrink: 0,
                      }}
                    >
                      {spec.label}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: "rgb(13,27,62)",
                        fontWeight: 600,
                        textAlign: "right",
                      }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <p
                style={{
                  color: "rgb(100,116,139)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {pump.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Controllers */}
        <div
          style={{
            background: "rgb(248,250,252)",
            borderRadius: 20,
            padding: "40px 32px",
          }}
        >
          <h3
            style={{
              color: "rgb(13,27,62)",
              fontSize: 20,
              fontWeight: 700,
              margin: "0 0 24px",
              textAlign: "center",
            }}
          >
            🔄 Controladores Solares Directos (DC) y de Conmutación Nocturna
            (AC/DC)
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {controllers.map((c) => (
              <div
                key={c.title}
                style={{
                  background: "white",
                  border: "1px solid rgb(226,232,240)",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <p
                  style={{
                    color: "rgb(13,27,62)",
                    fontSize: 15,
                    fontWeight: 700,
                    margin: "0 0 10px",
                  }}
                >
                  {c.title}
                </p>
                <p
                  style={{
                    color: "rgb(100,116,139)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GARANTÍA SECTION
───────────────────────────────────────────── */
const garantiaItems = [
  "Garantía escrita de 1 año directa de fábrica en bombas y controladores Handuro.",
  "Disponibilidad de repuestos originales y soporte técnico especializado.",
  "Ingeniería llave en mano: proyecto, provisión, montaje mecánico, conexionado eléctrico con protecciones y prueba de caudal en campo.",
];

function GarantiaSection() {
  return (
    <section style={{ background: "rgb(22, 24, 83)", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            color: "#f59e0b",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: "0 0 12px 0",
          }}
        >
          GARANTÍA Y RESPALDO
        </p>
        <h2
          style={{
            color: "white",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            margin: 0,
          }}
        >
          Tranquilidad de fábrica, de principio a fin
        </h2>
        <div
          style={{
            width: 60,
            height: 4,
            background: "linear-gradient(90deg, #f59e0b, #fde68a)",
            borderRadius: 2,
            margin: "16px auto 56px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            textAlign: "left",
          }}
        >
          {garantiaItems.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: 24,
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <span
                style={{
                  color: "#f59e0b",
                  fontWeight: 700,
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────────── */
function CtaSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, rgb(13,27,62), rgb(22,24,83))",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <h2
          style={{
            color: "white",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 800,
            margin: "0 0 20px",
            lineHeight: 1.2,
          }}
        >
          Llevá agua constante a tu campo con energía solar
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 18,
            lineHeight: 1.7,
            margin: "0 0 36px",
          }}
        >
          Contanos la profundidad de tu pozo y el volumen de agua que
          necesitás. Te asesoramos y coordinamos la instalación en el día.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/#contacto"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #f97316)",
              color: "rgb(13, 27, 62)",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 8,
              textDecoration: "none",
              display: "inline-block",
              transition: "opacity 0.2s, transform 0.2s",
            }}
          >
            Solicitar cotización a medida
          </Link>
          <Link
            href="/"
            style={{
              background: "transparent",
              color: "white",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 8,
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.5)",
              display: "inline-block",
              transition: "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
          >
            Volver a servicios
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function BombeoSolarPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero />
        <DiagnosticoSection />
        <VentajasSection />
        <CatalogoSection />
        <GarantiaSection />
        <FaqAccordion />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
