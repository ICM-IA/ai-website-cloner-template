"use client";

import { useEffect, useRef } from "react";

export interface Instalacion {
  lat: number;
  lng: number;
  ciudad: string;
  direccion: string;
  tipo: string;
  potencia: string;
}

interface InstalacionesMapProps {
  instalaciones: Instalacion[];
}

export default function InstalacionesMap({ instalaciones }: InstalacionesMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import Leaflet (browser-only)
    import("leaflet").then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return;

      // Fix default marker icon paths for Next.js
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!).setView([-35.35, -58.3], 9);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      // Custom gold icon
      const goldIcon = L.divIcon({
        className: "",
        html: `<div style="
          width:32px;height:32px;border-radius:50% 50% 50% 0;
          background:linear-gradient(135deg,#f59e0b,#d97706);
          transform:rotate(-45deg);
          border:3px solid white;
          box-shadow:0 4px 12px rgba(0,0,0,0.35);
        ">
          <div style="
            transform:rotate(45deg);
            display:flex;align-items:center;justify-content:center;
            width:100%;height:100%;
            font-size:13px;
          ">☀️</div>
        </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -36],
      });

      instalaciones.forEach((inst) => {
        L.marker([inst.lat, inst.lng], { icon: goldIcon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family:Raleway,sans-serif;min-width:180px;padding:4px 0">
              <div style="font-weight:800;font-size:14px;color:#0d1b3e;margin-bottom:4px">${inst.ciudad}</div>
              <div style="font-size:12px;color:#64748b;margin-bottom:6px">${inst.direccion}</div>
              <div style="display:flex;gap:6px;flex-wrap:wrap">
                <span style="background:#fef3c7;color:#d97706;font-size:11px;font-weight:700;padding:2px 8px;border-radius:20px">${inst.tipo}</span>
                <span style="background:#eff6ff;color:#1e3a8a;font-size:11px;font-weight:700;padding:2px 8px;border-radius:20px">${inst.potencia}</span>
              </div>
            </div>
          `, { maxWidth: 240 });
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapInstanceRef.current as any).remove();
        mapInstanceRef.current = null;
      }
    };
  }, [instalaciones]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "480px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(13,27,62,0.15)",
        border: "1px solid rgb(226,232,240)",
      }}
    />
  );
}
