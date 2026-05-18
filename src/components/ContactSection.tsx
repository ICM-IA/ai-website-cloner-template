"use client";
import { Phone, MessageCircle, Clock } from "lucide-react";
import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("@/app/contacto/ContactMap"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "220px", borderRadius: "12px", background: "rgb(241,245,249)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(100,116,139)", fontSize: "14px", fontWeight: 600 }}>
      Cargando mapa...
    </div>
  ),
});

const infoCards = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+54 11 6229-7037",
    href: "tel:+541162297037",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+54 11 5228-2070",
    href: "https://wa.me/+541152282070",
  },
  {
    icon: Clock,
    title: "Horarios",
    value: "Lunes a sábados: 09:00 a 18:00",
    href: undefined,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      style={{ background: "white", padding: "96px 24px" }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            color: "#f59e0b",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          CONTACTO
        </p>
        <h2
          style={{
            color: "rgb(13, 27, 62)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            margin: 0,
          }}
        >
          ¿Listo para empezar a ahorrar?
        </h2>
        <div className="section-divider" style={{ margin: "16px auto 40px" }} />
        <p
          style={{
            fontSize: 16,
            color: "rgb(71, 85, 105)",
            marginBottom: 64,
          }}
        >
          Solicita tu presupuesto gratuito. Nos comunicamos en menos de 24 horas.
        </p>
      </div>

      {/* Two-column layout */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          alignItems: "flex-start",
        }}
      >
        {/* Left: form — 60% */}
        <div style={{ flex: "3 1 340px", minWidth: 0 }}>
          <div
            style={{
              background: "white",
              border: "1px solid rgb(226, 232, 240)",
              borderRadius: 20,
              padding: 40,
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            <form>
              {/* Nombre */}
              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="nombre"
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    marginBottom: 6,
                  }}
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  style={{
                    width: "100%",
                    border: "1.5px solid rgb(226, 232, 240)",
                    borderRadius: 10,
                    padding: "13px 16px",
                    fontSize: 15,
                    fontFamily: "Raleway, sans-serif",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#f59e0b";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,158,11,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgb(226, 232, 240)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    marginBottom: 6,
                  }}
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tucorreo@email.com"
                  style={{
                    width: "100%",
                    border: "1.5px solid rgb(226, 232, 240)",
                    borderRadius: 10,
                    padding: "13px 16px",
                    fontSize: 15,
                    fontFamily: "Raleway, sans-serif",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#f59e0b";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,158,11,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgb(226, 232, 240)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Teléfono */}
              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="telefono"
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    marginBottom: 6,
                  }}
                >
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+54 11 XXXX-XXXX"
                  style={{
                    width: "100%",
                    border: "1.5px solid rgb(226, 232, 240)",
                    borderRadius: 10,
                    padding: "13px 16px",
                    fontSize: 15,
                    fontFamily: "Raleway, sans-serif",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#f59e0b";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,158,11,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgb(226, 232, 240)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Mensaje */}
              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="mensaje"
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    marginBottom: 6,
                  }}
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Contanos sobre tu proyecto (consumo mensual, tipo de instalación, ubicación...)"
                  style={{
                    width: "100%",
                    border: "1.5px solid rgb(226, 232, 240)",
                    borderRadius: 10,
                    padding: "13px 16px",
                    fontSize: 15,
                    fontFamily: "Raleway, sans-serif",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#f59e0b";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,158,11,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgb(226, 232, 240)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: 16,
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 800,
                  fontFamily: "Raleway, sans-serif",
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  color: "rgb(13, 27, 62)",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.92";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(245,158,11,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Solicitar presupuesto gratis →
              </button>

              <p
                style={{
                  fontSize: 12,
                  color: "rgb(148, 163, 184)",
                  textAlign: "center",
                  marginTop: 12,
                  marginBottom: 0,
                }}
              >
                Al enviar aceptás nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>

        {/* Right: map + info cards — 40% */}
        <div
          style={{
            flex: "2 1 260px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Mapa */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossOrigin=""
          />
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgb(226,232,240)" }}>
            <ContactMap height={220} />
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ituzaingó+1572+Coronel+Brandsen+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              fontSize: 13,
              fontWeight: 700,
              color: "#f59e0b",
              textDecoration: "none",
              marginTop: -8,
            }}
          >
            📍 Ituzaingó 1572, Coronel Brandsen — Ver en Google Maps →
          </a>

          {infoCards.map(({ icon: Icon, title, value, href }) => (
            <div
              key={title}
              style={{
                background: "rgb(248, 250, 252)",
                borderRadius: 16,
                padding: 24,
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              {/* Icon container */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "rgb(254, 243, 199)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={24} style={{ color: "#f59e0b" }} />
              </div>

              <div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgb(100, 116, 139)",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 4,
                    margin: "0 0 4px 0",
                  }}
                >
                  {title}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "rgb(13, 27, 62)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#f59e0b";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgb(13, 27, 62)";
                    }}
                  >
                    {value}
                  </a>
                ) : (
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "rgb(13, 27, 62)",
                      margin: 0,
                    }}
                  >
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
