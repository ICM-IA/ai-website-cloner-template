"use client";

import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("./ContactMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "16px",
        background: "rgb(241,245,249)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgb(100,116,139)",
        fontSize: "15px",
        fontWeight: 600,
      }}
    >
      Cargando mapa...
    </div>
  ),
});

export default function ContactMapWrapper() {
  return <ContactMap />;
}
