"use client";

import { useEffect, useRef } from "react";

export default function ContactMap({ height = 400 }: { height?: number }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const lat = -35.1735;
      const lng = -58.2295;

      const map = L.map(mapRef.current!).setView([lat, lng], 16);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const icon = L.divIcon({
        className: "",
        html: `<div style="
          width:40px;height:40px;border-radius:50% 50% 50% 0;
          background:linear-gradient(135deg,#f59e0b,#d97706);
          transform:rotate(-45deg);
          border:3px solid white;
          box-shadow:0 4px 16px rgba(0,0,0,0.35);
        ">
          <div style="transform:rotate(45deg);display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:16px;">☀️</div>
        </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -44],
      });

      L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family:Raleway,sans-serif;padding:4px 0;min-width:200px">
            <div style="font-weight:800;font-size:15px;color:#0d1b3e;margin-bottom:4px">Energia Solar Brandsen</div>
            <div style="font-size:13px;color:#64748b;margin-bottom:8px">Ituzaingó 1572, Coronel Brandsen<br>Buenos Aires</div>
            <a href="https://www.google.com/maps/search/?api=1&query=Ituzaingó+1572+Coronel+Brandsen+Buenos+Aires"
               target="_blank" rel="noopener noreferrer"
               style="font-size:12px;font-weight:700;color:#f59e0b;text-decoration:none">
              Ver en Google Maps →
            </a>
          </div>
        `, { maxWidth: 260 })
        .openPopup();
    });

    return () => {
      if (mapInstanceRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapInstanceRef.current as any).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: `${height}px`,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(13,27,62,0.15)",
        border: "1px solid rgb(226,232,240)",
      }}
    />
  );
}
