export type TipoInstalacion = "residencial" | "comercial" | "industrial" | "agro";

export interface Distribuidora {
  id: string;
  nombre: string;
  tarifa: number; // $/kWh
  energiaNeta: number; // % de la factura atribuible al consumo eléctrico
  impuestos: number; // % de impuestos sobre la energía
  provincias: string[];
}

export interface ProvinciaFactor {
  provincia: string;
  factor: number; // kWh generados por Wp instalado, por mes
  viaticos: number; // % adicional de costo por traslado
}

/* Constantes globales del modelo (mismas que usa la competencia, aprobadas para reutilizar) */
export const TIPO_DE_CAMBIO = 1530; // ARS / USD
export const CORTE_FACTURA_1 = 150000;
export const CORTE_FACTURA_2 = 500000;
export const COSTO_BASE_USD_WP = 1.7;
export const COSTO_CONSUMO_USD_WP = 0.8;
export const COSTO_CONSUMO_ALTO_USD_WP = 0.65;
export const COBERTURA_BUSCADA_PCT = 60;
export const VIDA_UTIL_SISTEMA_ANIOS = 30;

export const DISTRIBUIDORAS: Distribuidora[] = [
  { id: "edenor", nombre: "Edenor - Buenos Aires", tarifa: 186.121, energiaNeta: 57, impuestos: 25, provincias: ["Buenos Aires", "CABA"] },
  { id: "edesur", nombre: "Edesur - Buenos Aires", tarifa: 197.288, energiaNeta: 57, impuestos: 25, provincias: ["Buenos Aires", "CABA"] },
  { id: "edelap", nombre: "Edelap - Buenos Aires", tarifa: 184.26, energiaNeta: 57, impuestos: 35, provincias: ["Buenos Aires"] },
  { id: "eden", nombre: "Eden - Buenos Aires", tarifa: 282.904, energiaNeta: 59, impuestos: 55, provincias: ["Buenos Aires"] },
  { id: "zarate", nombre: "Coop. Eléctrica Zárate", tarifa: 215.9, energiaNeta: 57, impuestos: 54, provincias: ["Buenos Aires"] },
  { id: "dpec", nombre: "DPEC - Corrientes", tarifa: 219.623, energiaNeta: 72, impuestos: 21, provincias: ["Corrientes"] },
  { id: "secheep", nombre: "SECHEEP - Chaco", tarifa: 197.288, energiaNeta: 72, impuestos: 21, provincias: ["Chaco"] },
  { id: "refsa", nombre: "REFSA - Formosa", tarifa: 180.537, energiaNeta: 80, impuestos: 21, provincias: ["Formosa"] },
  { id: "epe", nombre: "EPE - Santa Fé", tarifa: 390.854, energiaNeta: 80, impuestos: 28, provincias: ["Santa Fe"] },
  { id: "epec", nombre: "EPEC - Córdoba", tarifa: 348.046, energiaNeta: 71, impuestos: 41, provincias: ["Córdoba"] },
  {
    id: "otros",
    nombre: "Otra / No sé",
    tarifa: 186.121,
    energiaNeta: 57,
    impuestos: 21,
    provincias: [
      "CABA", "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes",
      "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones",
      "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe",
      "Santiago del Estero", "Tierra del Fuego", "Tucumán",
    ],
  },
];

export const PROVINCIA_FACTORES: ProvinciaFactor[] = [
  { provincia: "CABA", factor: 0.12, viaticos: 0 },
  { provincia: "Buenos Aires", factor: 0.12, viaticos: 0 },
  { provincia: "Catamarca", factor: 0.12, viaticos: 0 },
  { provincia: "Chaco", factor: 0.135, viaticos: 15 },
  { provincia: "Chubut", factor: 0.12, viaticos: 0 },
  { provincia: "Córdoba", factor: 0.12, viaticos: 0 },
  { provincia: "Corrientes", factor: 0.135, viaticos: 20 },
  { provincia: "Entre Ríos", factor: 0.135, viaticos: 10 },
  { provincia: "Formosa", factor: 0.135, viaticos: 0 },
  { provincia: "Jujuy", factor: 0.154, viaticos: 0 },
  { provincia: "La Pampa", factor: 0.12, viaticos: 0 },
  { provincia: "La Rioja", factor: 0.151, viaticos: 0 },
  { provincia: "Mendoza", factor: 0.154, viaticos: 0 },
  { provincia: "Misiones", factor: 0.135, viaticos: 0 },
  { provincia: "Neuquén", factor: 0.12, viaticos: 0 },
  { provincia: "Río Negro", factor: 0.117, viaticos: 0 },
  { provincia: "Salta", factor: 0.151, viaticos: 0 },
  { provincia: "San Juan", factor: 0.12, viaticos: 0 },
  { provincia: "San Luis", factor: 0.141, viaticos: 0 },
  { provincia: "Santa Cruz", factor: 0.102, viaticos: 0 },
  { provincia: "Santa Fe", factor: 0.12, viaticos: 10 },
  { provincia: "Santiago del Estero", factor: 0.12, viaticos: 0 },
  { provincia: "Tierra del Fuego", factor: 0.086, viaticos: 0 },
  { provincia: "Tucumán", factor: 0.12, viaticos: 0 },
];

export function getDistribuidorasPorProvincia(provincia: string): Distribuidora[] {
  return DISTRIBUIDORAS.filter((d) => d.provincias.includes(provincia));
}

interface CostoTierResult {
  costoUsdWp: number;
  tramo: 1 | 2 | 3;
}

function getCostoTier(facturaMensual: number): CostoTierResult {
  let resultado: CostoTierResult = { costoUsdWp: COSTO_BASE_USD_WP, tramo: 1 };
  if (facturaMensual > CORTE_FACTURA_1) {
    resultado = { costoUsdWp: COSTO_CONSUMO_USD_WP, tramo: 2 };
  }
  if (facturaMensual > CORTE_FACTURA_2) {
    resultado = { costoUsdWp: COSTO_CONSUMO_ALTO_USD_WP, tramo: 3 };
  }
  return resultado;
}

export interface CalculoSolarInput {
  facturaMensual: number;
  distribuidoraId: string;
  provincia: string;
}

export interface CalculoSolarResultado {
  potenciaWp: number;
  inversionArs: number;
  ahorroMesArs: number;
  ahorroAnioArs: number;
  paybackAnios: number;
  aniosDeEnergiaGratis: number;
  rentabilidadPct: number;
}

export function calcularSolar({
  facturaMensual,
  distribuidoraId,
  provincia,
}: CalculoSolarInput): CalculoSolarResultado | null {
  const distribuidora = DISTRIBUIDORAS.find((d) => d.id === distribuidoraId);
  const provinciaFactor = PROVINCIA_FACTORES.find((p) => p.provincia === provincia);

  if (!distribuidora || !provinciaFactor || facturaMensual <= 0) return null;

  const consumoEnergiaArs = (facturaMensual * distribuidora.energiaNeta) / 100;
  const kwhMensuales = consumoEnergiaArs / distribuidora.tarifa;
  const potenciaWp = ((COBERTURA_BUSCADA_PCT / 100) * kwhMensuales) / provinciaFactor.factor;

  const { costoUsdWp } = getCostoTier(facturaMensual);
  const inversionArs =
    potenciaWp * costoUsdWp * TIPO_DE_CAMBIO * (1 + provinciaFactor.viaticos / 100);

  const ahorroMesArs =
    (COBERTURA_BUSCADA_PCT / 100) * consumoEnergiaArs * (1 + distribuidora.impuestos / 100);
  const ahorroAnioArs = ahorroMesArs * 12;

  const paybackAnios = inversionArs > 0 ? inversionArs / ahorroAnioArs : 0;
  const aniosDeEnergiaGratis = Math.max(0, VIDA_UTIL_SISTEMA_ANIOS - paybackAnios);
  const rentabilidadPct = inversionArs > 0 ? (ahorroAnioArs / inversionArs) * 100 : 0;

  return {
    potenciaWp,
    inversionArs,
    ahorroMesArs,
    ahorroAnioArs,
    paybackAnios,
    aniosDeEnergiaGratis,
    rentabilidadPct,
  };
}

export function formatArs(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}
