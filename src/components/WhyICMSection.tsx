export default function WhyICMSection() {
  return (
    <section
      style={{
        background:
          "radial-gradient(rgba(255,20,20,0.92) 24%, rgba(0,0,0,0) 100%), radial-gradient(circle at 50% 50%, rgba(180,0,0,0.8) 0%, #000 70%)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        className="why-icm-inner"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <h2
          className="why-icm-h2"
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#020202",
            fontFamily: "Poppins, sans-serif",
            marginBottom: "8px",
          }}
        >
          Por qué elegir ICM?
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#ffffff",
            lineHeight: 1.7,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          En ICM analizamos tu operación, encontramos los cuellos de botella y
          creamos flujos inteligentes que trabajan para vos.
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#ffffff",
            lineHeight: 1.7,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Nuestras soluciones no son genéricas: se adaptan a tu empresa, tu
          equipo y tus objetivos.
        </p>

        <h3
          className="why-icm-h3"
          style={{
            fontSize: "40px",
            fontWeight: 800,
            color: "#020202",
            fontFamily: "Poppins, sans-serif",
            marginTop: "48px",
          }}
        >
          ¿El resultado?
        </h3>

        <p
          style={{
            fontSize: "18px",
            color: "#ffffff",
            lineHeight: 1.7,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Procesos más rápidos, menos errores y más tiempo para enfocarte en lo
          que realmente mueve tu negocio.
        </p>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .why-icm-h2 {
            font-size: 36px !important;
          }
          .why-icm-h3 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
