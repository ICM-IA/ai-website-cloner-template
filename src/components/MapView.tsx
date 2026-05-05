'use client';

import { useEffect, useRef } from 'react';

interface Project {
  id: number;
  name: string;
  city: string;
  country: string;
  type: string;
  price: string;
  status: string;
  statusColor: string;
  lat: number;
  lng: number;
  photos?: string[];
  desc?: string;
}

interface MapViewProps {
  projects: Project[];
  selectedProject: Project;
  onSelect: (project: Project) => void;
  mapCenter?: { lat: number; lng: number; zoom: number };
}

export default function MapView({ projects, selectedProject, onSelect, mapCenter }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);
  const markersRef = useRef<{ marker: unknown; id: number }[]>([]);
  const leafletRef = useRef<unknown>(null);
  // Keep latest onSelect in a ref so marker click handlers don't stale-close
  const onSelectRef = useRef(onSelect);
  useEffect(() => { onSelectRef.current = onSelect; });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createIcon = (L: any, isSelected: boolean) =>
    L.divIcon({
      className: '',
      html: `<div style="
        width: ${isSelected ? 38 : 26}px;
        height: ${isSelected ? 38 : 26}px;
        background: ${isSelected ? '#FFD700' : 'rgba(201,146,42,0.75)'};
        border: 3px solid ${isSelected ? '#fff' : 'rgba(255,255,255,0.4)'};
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: ${isSelected ? '0 0 14px 4px rgba(255,215,0,0.55)' : '0 2px 8px rgba(0,0,0,0.5)'};
        transition: all 0.25s;
      "></div>`,
      iconSize: [isSelected ? 38 : 26, isSelected ? 38 : 26],
      iconAnchor: [isSelected ? 19 : 13, isSelected ? 38 : 26],
    });

  // ── Init map once ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initMap = async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (!mapRef.current || mapInstanceRef.current) return;

      leafletRef.current = L;

      const map = L.map(mapRef.current, {
        center: [selectedProject.lat, selectedProject.lng],
        zoom: 5,
        zoomControl: true,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      mapInstanceRef.current = map;
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
        markersRef.current = [];
        leafletRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Rebuild markers whenever projects list changes ─────────────────────────
  useEffect(() => {
    if (!mapInstanceRef.current || !leafletRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const L = leafletRef.current as any;
    const map = mapInstanceRef.current as { addLayer: (l: unknown) => void };

    // Remove old markers
    markersRef.current.forEach(({ marker }) => {
      (marker as { remove: () => void }).remove();
    });
    markersRef.current = [];

    // Add new markers
    projects.forEach((p) => {
      const isSelected = p.id === selectedProject.id;
      const tooltipHtml = `
        <div class="lion-card">
          <p class="lion-card-name">${p.name}</p>
          <p class="lion-card-loc">📍 ${p.city}, ${p.country}</p>
          <hr class="lion-card-divider" />
          <div class="lion-card-row">
            <span class="lion-card-label">Precio desde</span>
            <span class="lion-card-value">${p.price}</span>
          </div>
          <div class="lion-card-row">
            <span class="lion-card-label">Estado</span>
            <span class="lion-card-status" style="font-size:11px;font-weight:700;color:${p.statusColor}">${p.status}</span>
          </div>
          <div class="lion-card-cta">Click para ver detalles →</div>
        </div>
      `;

      const marker = L.marker([p.lat, p.lng], {
        icon: createIcon(L, isSelected),
      })
        .addTo(map)
        .bindTooltip(tooltipHtml, {
          className: 'lion-tooltip',
          direction: 'top',
          offset: [0, -10],
          opacity: 1,
        });

      marker.on('click', () => onSelectRef.current(p));
      markersRef.current.push({ marker, id: p.id });
    });

    // Fit map bounds to show all current markers if we have valid coords
    if (projects.length > 1) {
      try {
        const bounds = L.latLngBounds(projects.map((p: Project) => [p.lat, p.lng]));
        (map as { fitBounds: (b: unknown, opts: unknown) => void }).fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
      } catch {
        // ignore invalid bounds
      }
    } else if (projects.length === 1) {
      (map as { setView: (latlng: [number, number], zoom: number) => void }).setView(
        [projects[0].lat, projects[0].lng], 13
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  // ── Pan + highlight when selected project changes ──────────────────────────
  useEffect(() => {
    if (!mapInstanceRef.current || !leafletRef.current) return;
    const map = mapInstanceRef.current as { flyTo: (latlng: [number, number], zoom: number) => void };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const L = leafletRef.current as any;

    map.flyTo([selectedProject.lat, selectedProject.lng], 14);

    markersRef.current.forEach(({ marker, id }) => {
      const m = marker as { setIcon: (icon: unknown) => void };
      m.setIcon(createIcon(L, id === selectedProject.id));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  // ── Fly to mapCenter when market changes ───────────────────────────────────
  useEffect(() => {
    if (!mapInstanceRef.current || !mapCenter) return;
    const map = mapInstanceRef.current as { flyTo: (latlng: [number, number], zoom: number) => void };
    map.flyTo([mapCenter.lat, mapCenter.lng], mapCenter.zoom);
  }, [mapCenter]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%', background: '#0d0d1a' }} />
  );
}
