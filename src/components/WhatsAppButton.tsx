"use client";
export default function WhatsAppButton() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 50,
        display: "inline-flex",
        alignItems: "center",
        pointerEvents: "auto",
      }}
      className="group"
    >
      {/* Tooltip */}
      <span
        style={{
          position: "absolute",
          right: 68,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgb(13, 27, 62)",
          color: "white",
          fontSize: 13,
          fontWeight: 600,
          padding: "8px 14px",
          borderRadius: 8,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.2s",
        }}
        className="group-hover:opacity-100"
      >
        ¡Escribinos!
      </span>

      {/* Button */}
      <a
        href="https://wa.me/+541152282070?text=Hola! tengo una consulta sobre energía solar."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        style={{
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          boxShadow: "0 4px 20px rgba(34,197,94,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          transition: "all 0.3s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1.1)";
          el.style.boxShadow = "0 6px 28px rgba(34,197,94,0.6)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1)";
          el.style.boxShadow = "0 4px 20px rgba(34,197,94,0.5)";
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width="30"
          height="30"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M11.999 1C5.926 1 1 5.925 1 12c0 1.943.497 3.768 1.368 5.354L1 23l5.793-1.34A10.97 10.97 0 0 0 12 23c6.074 0 11-4.926 11-11S18.073 1 11.999 1zm.001 20a8.985 8.985 0 0 1-4.59-1.254l-.329-.196-3.44.796.826-3.349-.213-.344A8.986 8.986 0 0 1 3 12c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9z" />
        </svg>
      </a>
    </div>
  );
}
