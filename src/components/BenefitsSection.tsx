import Image from "next/image";

const benefits = [
  "Ahorro real en costos operativos",
  "Integraciones completas entre sistemas",
  "Procesos más rápidos y sin errores",
  "Escalá sin aumentar personal",
];

export default function BenefitsSection() {
  return (
    <section
      style={{
        backgroundColor: "#000",
        background:
          "radial-gradient(circle at 50% 100%, rgba(255,0,0,0.12) 0%, transparent 60%), #000",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        <div className="benefits-inner">
          {/* Image column */}
          <div
            className="benefits-image-col"
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/robot-reading.png"
              alt="Robot ICM-IA"
              width={420}
              height={420}
              className="benefits-image"
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Content column */}
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "Poppins, sans-serif",
                marginBottom: "32px",
                lineHeight: 1.3,
              }}
            >
              <span style={{ color: "#ff1414" }}>Beneficios</span>
              {" de "}
              <span
                style={{
                  backgroundColor: "#ff1414",
                  color: "#ffffff",
                  padding: "2px 6px",
                  borderRadius: "2px",
                }}
              >
                automatizar
              </span>
              {" tu empresa con nosotros"}
            </h2>

            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  style={{
                    fontSize: "18px",
                    color: "#ffffff",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: 1.6,
                  }}
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .benefits-inner {
          display: flex;
          gap: 64px;
          align-items: center;
        }

        @media (max-width: 767px) {
          .benefits-inner {
            flex-direction: column;
          }

          .benefits-image {
            width: 280px !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
