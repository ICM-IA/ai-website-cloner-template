"use client";

import dynamic from "next/dynamic";
import type { Instalacion } from "@/components/InstalacionesMap";

const InstalacionesMap = dynamic(() => import("@/components/InstalacionesMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "480px",
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

export default function MapWrapper({ instalaciones }: { instalaciones: Instalacion[] }) {
  return <InstalacionesMap instalaciones={instalaciones} />;
}
