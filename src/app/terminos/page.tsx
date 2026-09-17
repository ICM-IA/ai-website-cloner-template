import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones · ICM-IA",
  robots: "noindex, nofollow",
};

export default function TerminosPage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
        color: "#ECECEC",
        fontFamily: "var(--font-poppins), Poppins, sans-serif",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto", paddingLeft: "32px", paddingRight: "32px" }}>
        <Link
          href="/"
          style={{ fontSize: "13px", color: "#6B7280", textDecoration: "none", display: "inline-block", marginBottom: "40px" }}
        >
          ← Volver al inicio
        </Link>

        <h1 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "8px" }}>
          Términos y Condiciones
        </h1>
        <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "48px" }}>
          Última actualización: septiembre de 2026
        </p>

        <Section title="1. Información del responsable del sitio">
          <p>
            El presente sitio web <strong>icm-ia.com</strong> es administrado por:
          </p>
          <ul style={{ marginTop: "12px", paddingLeft: "20px", lineHeight: 2 }}>
            <li><strong>Nombre:</strong> Santiago De La Canal</li>
            <li><strong>DNI:</strong> 41.999.488</li>
            <li><strong>Correo electrónico:</strong> icm.marketingyconsultoria@gmail.com</li>
          </ul>
        </Section>

        <Section title="2. Objeto">
          <p>
            ICM-IA ofrece soluciones de automatización e inteligencia artificial orientadas al sector
            inmobiliario. El uso de este sitio web implica la aceptación plena de los presentes términos.
          </p>
        </Section>

        <Section title="3. Uso del sitio">
          <p>
            El usuario se compromete a utilizar el sitio web de conformidad con la ley y el presente
            aviso legal. Queda prohibido el uso del sitio con fines ilícitos o contrarios a buenas
            prácticas.
          </p>
        </Section>

        <Section title="4. Propiedad intelectual">
          <p>
            Todos los contenidos del sitio (textos, imágenes, logotipos, código) son propiedad de
            ICM-IA o de sus respectivos titulares. Queda prohibida su reproducción sin autorización
            expresa.
          </p>
        </Section>

        <Section title="5. Limitación de responsabilidad">
          <p>
            ICM-IA no garantiza la disponibilidad continua del sitio y no se hace responsable de
            los daños derivados del uso o imposibilidad de uso del mismo.
          </p>
        </Section>

        <Section title="6. Privacidad">
          <p>
            El tratamiento de datos personales se rige por nuestra{" "}
            <Link href="/politica-de-privacidad" style={{ color: "#FF1414" }}>
              Política de Privacidad
            </Link>
            .
          </p>
        </Section>

        <Section title="7. Legislación aplicable">
          <p>
            Estos términos se rigen por la legislación de la República Argentina. Para cualquier
            controversia, las partes se someten a la jurisdicción de los tribunales ordinarios
            de la Ciudad Autónoma de Buenos Aires.
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "36px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ECECEC", marginBottom: "12px" }}>
        {title}
      </h2>
      <div style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: 1.8 }}>{children}</div>
    </section>
  );
}
