import type { MetadataRoute } from "next";

const SITE_URL = "https://energiasolarbrandsen.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/servicios/residencial", priority: 0.9 },
    { path: "/servicios/comercial", priority: 0.9 },
    { path: "/servicios/industrial", priority: 0.9 },
    { path: "/servicios/termotanque-solar", priority: 0.9 },
    { path: "/calculadora", priority: 0.8 },
    { path: "/contacto", priority: 0.8 },
    { path: "/nosotros", priority: 0.7 },
    { path: "/testimonios", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
