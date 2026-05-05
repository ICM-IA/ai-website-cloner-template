'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectsSection from './ProjectsSection';

type Zone    = { icon: string; name: string; desc: string };
type Project = { icon: string; name: string; tags: string[]; price: string; sub: string };
type Model   = { label: string; sub: string };

type Market = {
  name: string;
  subtitle: string;
  regionFilter: 'América' | 'Europa' | 'Medio Oriente';
  code: string;
  detail: string;
  foco: boolean;
  badge: { label: string; color: string };
  tags: string[];
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  stat3: { value: string; label: string };
  whyInvest: string;
  zones: Zone[];
  models: Model[];
  note: string;
  projects: Project[];
};

const markets: Market[] = [
  {
    name: 'Estados Unidos',
    subtitle: 'El mercado inmobiliario más sólido y transparente del mundo',
    regionFilter: 'América', code: 'us',
    detail: 'Miami · Orlando · Florida',
    foco: true,
    badge: { label: '⭐ Foco', color: '#C9922A' },
    tags: ['Miami · Orlando · Florida', 'Hipoteca 30 años', 'Airbnb permitido', 'Sin impuesto estadual'],
    stat1: { value: '+8%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 200K', label: 'Ticket mínimo de entrada' },
    stat3: { value: '30 años', label: 'Financiación disponible' },
    whyInvest: 'Florida ofrece algo que pocos mercados pueden garantizar: estabilidad jurídica, demanda sostenida y retornos en dólares. El 79% de los inversores latinos que salen al exterior eligen Florida como primer destino. Sin impuesto estadual a los ingresos, con acceso a crédito hipotecario para extranjeros y una demanda de alquiler sostenida todo el año.',
    zones: [
      { icon: '🏢', name: 'Miami — Brickell', desc: 'Hub financiero de América Latina. Alta demanda de alquiler ejecutivo, proyectos premium con rentabilidad del 7.3% anual y fuerte apreciación histórica.' },
      { icon: '🏙️', name: 'Orlando', desc: '#1 en crecimiento de empleo y población en EE.UU. (2025). Alta demanda de alquiler turístico. Ticket más accesible que Miami con fuerte plusvalía proyectada.' },
    ],
    models: [
      { label: 'Compra en pozo', sub: 'Mayor plusvalía' },
      { label: 'Crédito 30 años', sub: 'Renta inmediata' },
      { label: 'Construcción', sub: 'Control total' },
      { label: 'Flipping', sub: 'Retorno rápido' },
    ],
    note: 'Importante: cada desarrollo tiene sus propias restricciones de uso. Algunos permiten Airbnb y otros solo alquiler a largo plazo. Definimos juntos tu objetivo antes de elegir el proyecto correcto.',
    projects: [
      { icon: '🏗️', name: 'GZ Tower', tags: ['Orlando', 'En obra', 'Amueblado', 'Sin restricción Airbnb', 'Entrega 2027'], price: 'USD 200.000', sub: 'Ingreso desde USD 100K' },
      { icon: '🏛️', name: 'Parkside Brickell', tags: ['Miami', 'Pre-construcción', 'Amueblado', 'Entrega Q2 2028'], price: 'USD 450.000', sub: '20% entrada · Crédito disponible' },
    ],
  },
  {
    name: 'Brasil',
    subtitle: 'Mayor crecimiento inmobiliario de Latinoamérica',
    regionFilter: 'América', code: 'br',
    detail: 'SC · Floripa · Nordeste',
    foco: true,
    badge: { label: '⭐ Foco', color: '#C9922A' },
    tags: ['Florianópolis · Nordeste · São Paulo', 'Financiación desde 7%', 'Alta demanda turística', 'Precios en USD'],
    stat1: { value: '+15%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 36K', label: 'Ticket mínimo de entrada' },
    stat3: { value: '7%', label: 'Financiación desde' },
    whyInvest: 'Brasil es el mercado de mayor crecimiento de Latinoamérica con precios en dólares y alta demanda turística. El Nordeste y Florianópolis registran récords de ocupación y proyectos con planes de pago accesibles desde solo el 7% de entrada. Inversores de Argentina, Europa y Medio Oriente lideran las operaciones.',
    zones: [
      { icon: '🌴', name: 'Nordeste — Maceió · Fortaleza', desc: 'Las playas más buscadas por inversores internacionales. Proyectos en pozo con hasta 18% anual y financiación directa con la desarrolladora.' },
      { icon: '🏝️', name: 'Florianópolis', desc: 'La Ibiza de Sudamérica. Alta demanda de alquiler premium todo el año, turismo consolidado y proyectos de lujo en primera línea de playa.' },
    ],
    models: [
      { label: 'Compra en pozo', sub: 'Mayor plusvalía' },
      { label: 'Financiación directa', sub: 'Desde 7% entrada' },
      { label: 'Alquiler turístico', sub: 'Renta inmediata' },
      { label: 'Reventa anticipada', sub: 'Retorno rápido' },
    ],
    note: 'Los contratos se realizan en reales brasileños pero el valor de referencia es en dólares. Contamos con socios jurídicos locales en todos los estados donde operamos.',
    projects: [
      { icon: '🌅', name: 'Reserva do Atlântico', tags: ['Maceió', 'En pozo', 'Alquiler turístico', 'Entrega 2026'], price: 'USD 36.000', sub: 'Ingreso desde 7% · Financiación directa' },
      { icon: '🏖️', name: 'Beira Mar Floripa', tags: ['Florianópolis', 'En construcción', 'Primera línea', 'Entrega 2027'], price: 'USD 85.000', sub: 'Rentabilidad estimada 14% anual' },
    ],
  },
  {
    name: 'Argentina',
    subtitle: 'Oportunidad histórica en el piso del ciclo inmobiliario',
    regionFilter: 'América', code: 'ar',
    detail: 'Buenos Aires · MdP · Neuquén',
    foco: false,
    badge: { label: 'En expansión', color: '#eab308' },
    tags: ['Buenos Aires · Mar del Plata', 'Precio mínimo histórico', 'Alta revalorización esperada'],
    stat1: { value: '+12%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 1.800', label: 'Precio mínimo por m²' },
    stat3: { value: '40%', label: 'Por debajo del valor real' },
    whyInvest: 'Los precios en dólares están en mínimos históricos y el mercado da señales claras de recuperación. Quien compra hoy, compra en el piso del ciclo. Con el nuevo marco macroeconómico, la demanda reprimida anticipa una fuerte revalorización en los próximos años. Ideal para inversores con visión de mediano y largo plazo.',
    zones: [
      { icon: '🏙️', name: 'Buenos Aires — Palermo / Belgrano', desc: 'Los barrios premium de CABA con mayor demanda de alquiler. Propiedades 40% por debajo de su valor histórico real en USD.' },
      { icon: '🌊', name: 'Mar del Plata · Neuquén', desc: 'Destinos con alta demanda turística y de alquiler temporal. Precios muy accesibles con proyección de revalorización.' },
    ],
    models: [
      { label: 'Compra directa', sub: 'Mayor plusvalía' },
      { label: 'Pozo en pesos', sub: 'Protección inflación' },
      { label: 'Alquiler temporal', sub: 'Renta en USD' },
      { label: 'Reventa', sub: 'Ciclo alcista' },
    ],
    note: 'Las operaciones se realizan en dólares billete (contado o transferencia). Contamos con estructuras legales para inversores del exterior sin necesidad de residencia fiscal.',
    projects: [
      { icon: '🏛️', name: 'Palermo Soho — Unidad Premium', tags: ['CABA', 'A estrenar', 'Alquiler garantizado', 'Entrega inmediata'], price: 'USD 95.000', sub: 'Renta estimada USD 650/mes' },
      { icon: '🏗️', name: 'Proyecto Neuquén Centro', tags: ['Neuquén', 'En pozo', 'En pesos', 'Entrega 2026'], price: 'USD 52.000', sub: 'Financiación en pesos cuotas fijas' },
    ],
  },
  {
    name: 'Paraguay',
    subtitle: 'Menor ticket de entrada con alto potencial de valorización',
    regionFilter: 'América', code: 'py',
    detail: 'Asunción',
    foco: false,
    badge: { label: 'En expansión', color: '#eab308' },
    tags: ['Asunción · Ciudad del Este', 'Menor ticket de entrada', 'Economía en crecimiento'],
    stat1: { value: '+10%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 1.200', label: 'Precio mínimo por m²' },
    stat3: { value: '0%', label: 'Impuesto a la renta' },
    whyInvest: 'Paraguay es el mercado de menor costo de entrada de la región con una de las economías de mayor crecimiento del continente. Asunción se moderniza aceleradamente y el m² tiene alto potencial de valorización. Régimen fiscal muy favorable con 0% de impuesto a la renta para inversores extranjeros.',
    zones: [
      { icon: '🌆', name: 'Asunción — Centro Histórico', desc: 'La capital en plena transformación urbana. Proyectos residenciales premium con alta demanda de alquiler ejecutivo y turístico.' },
      { icon: '🏙️', name: 'Asunción — Zona Norte', desc: 'Las nuevas áreas de desarrollo residencial con los tickets más accesibles y mayor proyección de valorización.' },
    ],
    models: [
      { label: 'Compra en pozo', sub: 'Mayor plusvalía' },
      { label: 'Alquiler ejecutivo', sub: 'Renta estable' },
      { label: 'Residencia fiscal', sub: 'Beneficio impositivo' },
      { label: 'Reventa', sub: 'Mercado en alza' },
    ],
    note: 'Paraguay ofrece uno de los regímenes fiscales más amigables de la región. Podés obtener residencia con una inversión mínima y acceder a beneficios impositivos significativos.',
    projects: [
      { icon: '🏗️', name: 'Torre Ycuá Bolaños', tags: ['Asunción Centro', 'En construcción', 'Alquiler permitido', 'Entrega 2026'], price: 'USD 68.000', sub: 'Ingreso desde USD 15.000' },
    ],
  },
  {
    name: 'Uruguay',
    subtitle: 'Mayor seguridad jurídica y estabilidad de la región',
    regionFilter: 'América', code: 'uy',
    detail: 'Punta del Este · Montevideo',
    foco: false,
    badge: { label: 'Alta estabilidad', color: '#22c55e' },
    tags: ['Punta del Este · Montevideo', 'Residencia fiscal', 'Alta seguridad jurídica'],
    stat1: { value: '+7%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 3.080', label: 'Precio mínimo por m²' },
    stat3: { value: 'AAA', label: 'Seguridad jurídica' },
    whyInvest: 'El país con mayor seguridad jurídica de la región. Punta del Este atrae inversores del mundo gracias a su exclusividad, estabilidad macroeconómica y la posibilidad de obtener residencia fiscal con beneficios impositivos. Ideal para quienes buscan preservar capital en un entorno seguro.',
    zones: [
      { icon: '🌊', name: 'Punta del Este', desc: 'El destino más exclusivo de Sudamérica. Alta demanda internacional de alquiler premium y propiedades de lujo con rentas en dólares.' },
      { icon: '🏙️', name: 'Montevideo — Carrasco', desc: 'El barrio más cotizado de la capital. Demanda residencial consolidada y proyectos de alta gama con rentabilidad estable.' },
    ],
    models: [
      { label: 'Compra directa', sub: 'Seguridad jurídica' },
      { label: 'Alquiler premium', sub: 'Renta en USD' },
      { label: 'Residencia fiscal', sub: 'Beneficio impositivo' },
      { label: 'Preservación de capital', sub: 'Activo dolarizado' },
    ],
    note: 'Uruguay permite obtener residencia fiscal con una inversión inmobiliaria desde USD 380.000 o acreditando ingresos regulares. Nuestros socios legales locales gestionan todo el proceso.',
    projects: [
      { icon: '🏖️', name: 'Playa Mansa Residences', tags: ['Punta del Este', 'A estrenar', 'Alquiler turístico', 'Entrega inmediata'], price: 'USD 180.000', sub: 'Renta estimada USD 1.200/mes' },
    ],
  },
  {
    name: 'México',
    subtitle: 'Cancún y Tulum, destinos de mayor crecimiento de América',
    regionFilter: 'América', code: 'mx',
    detail: 'Riviera Maya',
    foco: false,
    badge: { label: 'En expansión', color: '#eab308' },
    tags: ['CDMX · Cancún · Tulum', 'Turismo internacional', 'Alta demanda vacacional'],
    stat1: { value: '+11%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 2.000', label: 'Precio mínimo por m²' },
    stat3: { value: '40M+', label: 'Turistas anuales' },
    whyInvest: 'Cancún y Tulum son los destinos turísticos de mayor crecimiento de América. La demanda de alquiler vacacional supera la oferta y los precios suben sostenidamente. El Caribe mexicano recibe más de 40 millones de turistas al año con ocupación hotelera superior al 85%.',
    zones: [
      { icon: '🏖️', name: 'Tulum — Zona Hotelera', desc: 'El destino de moda de América Latina. Proyectos ecoturísticos con rentabilidades del 12-15% anual y alta ocupación todo el año.' },
      { icon: '🌴', name: 'Cancún — Hotel Zone', desc: 'El destino turístico más visitado de México. Alta demanda de alquiler a corto plazo con rentabilidades de 2 dígitos.' },
    ],
    models: [
      { label: 'Alquiler vacacional', sub: 'Renta inmediata' },
      { label: 'Compra en pozo', sub: 'Mayor plusvalía' },
      { label: 'Fideicomiso', sub: 'Extranjeros zona restringida' },
      { label: 'Reventa', sub: 'Mercado en alza' },
    ],
    note: 'Los extranjeros no pueden comprar directamente en zona costera. Se opera mediante fideicomiso bancario, figura totalmente legal y segura que usamos en todas nuestras operaciones.',
    projects: [
      { icon: '🌿', name: 'Tulum Eco Residences', tags: ['Tulum', 'En construcción', 'Airbnb permitido', 'Entrega 2026'], price: 'USD 95.000', sub: 'Rentabilidad estimada 13% anual' },
    ],
  },
  {
    name: 'Rep. Dominicana',
    subtitle: 'Caribe con turismo en máximos históricos y sin impuesto',
    regionFilter: 'América', code: 'do',
    detail: 'Por definir',
    foco: false,
    badge: { label: 'Próximamente', color: '#6b7280' },
    tags: ['Punta Cana · Santo Domingo', 'Sin impuesto de ganancia', 'Turismo en récord'],
    stat1: { value: '+10%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 1.500', label: 'Precio mínimo por m²' },
    stat3: { value: '10M+', label: 'Turistas anuales' },
    whyInvest: 'República Dominicana recibe más de 10 millones de turistas al año con Punta Cana como epicentro del turismo caribeño. Sin impuesto a las ganancias de capital y con proyectos en zonas de alto tráfico turístico, es uno de los destinos emergentes con mayor proyección de la región.',
    zones: [
      { icon: '🏝️', name: 'Punta Cana', desc: 'El destino turístico del Caribe con mayor crecimiento. Alta ocupación hotelera y demanda de alquiler vacacional todo el año.' },
      { icon: '🏙️', name: 'Santo Domingo', desc: 'Capital en modernización con alta demanda residencial y de alquiler ejecutivo. Precios aún muy accesibles.' },
    ],
    models: [
      { label: 'Alquiler vacacional', sub: 'Renta inmediata' },
      { label: 'Compra en pozo', sub: 'Mayor plusvalía' },
      { label: 'Condo-hotel', sub: 'Gestión incluida' },
      { label: 'Reventa', sub: 'Mercado en alza' },
    ],
    note: 'Estamos finalizando acuerdos con desarrolladoras locales para comenzar operaciones en 2026. Registrate para recibir las primeras oportunidades disponibles.',
    projects: [],
  },
  {
    name: 'Emiratos Árabes',
    subtitle: 'Exención impositiva total y rentabilidad de dos dígitos',
    regionFilter: 'Medio Oriente', code: 'ae',
    detail: 'Dubai',
    foco: false,
    badge: { label: 'Sin impuestos', color: '#C9922A' },
    tags: ['Dubái · Abu Dhabi', '0% impuesto a las ganancias', 'Golden Visa', 'Alta demanda internacional'],
    stat1: { value: '+10%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 3.540', label: 'Precio mínimo por m²' },
    stat3: { value: '0%', label: 'Impuesto a las ganancias' },
    whyInvest: 'Dubái ofrece lo que ningún otro mercado combina: exención impositiva total, rentabilidad en dólares de dos dígitos, Golden Visa por inversión y un mercado regulado de alta demanda internacional. Con precios aún 30% por debajo de Londres y en constante apreciación.',
    zones: [
      { icon: '🌆', name: 'Downtown Dubái · Burj Khalifa', desc: 'El corazón financiero y turístico del emirato. Propiedades de lujo con rentabilidades del 8-10% y demanda de alquiler ejecutivo permanente.' },
      { icon: '🏖️', name: 'Palm Jumeirah', desc: 'El icónico archipiélago artificial. Propiedades exclusivas con rentabilidades superiores al 7% y apreciación histórica sostenida.' },
    ],
    models: [
      { label: 'Off-plan', sub: 'Mayor plusvalía' },
      { label: 'Alquiler ejecutivo', sub: 'Renta estable' },
      { label: 'Golden Visa', sub: 'Residencia incluida' },
      { label: 'Reventa', sub: 'Mercado activo' },
    ],
    note: 'Con una inversión desde USD 205.000 accedés a la Golden Visa de los Emiratos Árabes, que incluye residencia por 10 años renovable para vos y tu familia.',
    projects: [
      { icon: '🏙️', name: 'Creek Waters Tower', tags: ['Dubái Creek', 'Off-plan', 'Alquiler permitido', 'Entrega 2027'], price: 'USD 320.000', sub: 'Rentabilidad estimada 9% anual' },
    ],
  },
  {
    name: 'España',
    subtitle: 'Golden Visa europea y mercado sólido del sur de Europa',
    regionFilter: 'Europa', code: 'es',
    detail: 'Barcelona · Alicante',
    foco: false,
    badge: { label: 'Golden Visa EU', color: '#3b82f6' },
    tags: ['Barcelona · Madrid · Valencia', 'Golden Visa UE', 'Residencia europea', 'Alta demanda internacional'],
    stat1: { value: '+8%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 4.000', label: 'Precio mínimo por m²' },
    stat3: { value: 'EU', label: 'Residencia con inversión' },
    whyInvest: 'Invertir en España permite acceder a la residencia europea y al mercado inmobiliario más sólido del sur de Europa. Barcelona lidera la demanda internacional con proyectos de ultra lujo. La Golden Visa española otorga residencia en toda la Unión Europea con una inversión desde €500.000.',
    zones: [
      { icon: '🏛️', name: 'Barcelona — Eixample', desc: 'El barrio más cotizado de Barcelona. Alta demanda de alquiler turístico y ejecutivo con rentabilidades del 6-8% anual.' },
      { icon: '🌊', name: 'Costa Blanca — Alicante', desc: 'La costa mediterránea más buscada por inversores internacionales. Precios más accesibles que Barcelona con alta demanda vacacional.' },
    ],
    models: [
      { label: 'Compra directa', sub: 'Golden Visa' },
      { label: 'Alquiler turístico', sub: 'Renta en euros' },
      { label: 'Reforma y reventa', sub: 'Flipping' },
      { label: 'Residencia fiscal', sub: 'Beneficio UE' },
    ],
    note: 'La Golden Visa española está vigente para inversiones realizadas antes de que se apruebe la reforma. Te asesoramos sobre los plazos y alternativas disponibles en cada comunidad autónoma.',
    projects: [
      { icon: '🏛️', name: 'Eixample Luxury Apartments', tags: ['Barcelona', 'A estrenar', 'Alquiler turístico', 'Entrega inmediata'], price: 'USD 420.000', sub: 'Rentabilidad estimada 7% anual' },
    ],
  },
  {
    name: 'Italia',
    subtitle: 'Rentabilidad, historia y calidad de vida en Europa',
    regionFilter: 'Europa', code: 'it',
    detail: 'Ragusa, Sicilia',
    foco: false,
    badge: { label: 'En expansión', color: '#eab308' },
    tags: ['Milán · Roma · Florencia', 'Visa por inversión', 'Alta demanda turística'],
    stat1: { value: '+6%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 3.000', label: 'Precio mínimo por m²' },
    stat3: { value: 'EU', label: 'Visa por inversión' },
    whyInvest: 'Italia ofrece una combinación única de rentabilidad, historia y calidad de vida. Los mercados de Milán y las zonas turísticas del sur registran crecimiento constante en la demanda internacional. Sicilia y la Costa Amalfitana son los destinos con mayor crecimiento de alquiler vacacional premium.',
    zones: [
      { icon: '🏙️', name: 'Milán — Porta Nuova', desc: 'El distrito financiero más moderno de Italia. Alta demanda de alquiler ejecutivo y proyectos de nueva construcción con apreciación constante.' },
      { icon: '🌄', name: 'Sicilia — Ragusa / Taormina', desc: 'El destino turístico premium del Mediterráneo. Villas y apartamentos con alta ocupación y rentabilidad vacacional superior al 8%.' },
    ],
    models: [
      { label: 'Compra directa', sub: 'Visa Investidore' },
      { label: 'Alquiler turístico', sub: 'Renta en euros' },
      { label: 'Reforma de palazzo', sub: 'Patrimonio histórico' },
      { label: 'Reventa', sub: 'Mercado en alza' },
    ],
    note: 'Italia ofrece beneficios fiscales especiales para extranjeros que establezcan residencia fiscal, incluyendo una flat tax de €100.000 anuales sobre ingresos de fuente extranjera.',
    projects: [
      { icon: '🏛️', name: 'Villa Mediterranea Taormina', tags: ['Sicilia', 'A estrenar', 'Alquiler vacacional', 'Entrega inmediata'], price: 'USD 280.000', sub: 'Rentabilidad estimada 8% anual' },
    ],
  },
];

const REGIONS = ['Todos', 'América', 'Europa', 'Medio Oriente', '⭐ Foco principal'] as const;

export default function MercadosPage() {
  const [region, setRegion] = useState<string>('Todos');
  const [selected, setSelected] = useState<string>('Estados Unidos');

  const filtered =
    region === 'Todos'
      ? markets
      : region === '⭐ Foco principal'
      ? markets.filter((m) => m.foco)
      : markets.filter((m) => m.regionFilter === region);

  const mkt = markets.find((m) => m.name === selected) || markets[0];

  return (
    <main style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#0d0d0d', minHeight: 'calc(100vh - 64px)' }}>

      {/* ── Hero ── */}
      <section style={{ padding: '64px 40px 56px', borderBottom: '1px solid rgba(201,146,42,0.1)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C9922A', flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em' }}>MERCADOS INTERNACIONALES</span>
            </div>
            <h1 style={{ fontSize: 48, fontWeight: 800, color: '#efefef', lineHeight: 1.1, marginBottom: 16, maxWidth: 680 }}>
              Cada inversión empieza<br />por <span style={{ color: '#C9922A' }}>entender tu objetivo</span>
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(239,239,239,0.55)', lineHeight: 1.75, maxWidth: 560, margin: 0 }}>
              Antes de elegir un mercado, definimos juntos qué buscás — renta, plusvalía, diversificación o residencia.{' '}
              <strong style={{ color: 'rgba(239,239,239,0.85)', fontWeight: 700 }}>
                Eso es lo que determina el destino correcto para tu capital.
              </strong>
            </p>
          </div>

          {/* Video + stats */}
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'stretch' }}>
            <div style={{ borderRadius: 14, overflow: 'hidden', background: '#101010', border: '1px solid rgba(201,146,42,0.15)', position: 'relative', paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/vscwfdAmc00?rel=0&modestbranding=1"
                title="¿Cómo elegir el mercado correcto para tu perfil?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { value: '10', label: 'Mercados activos en', sub: '3 continentes' },
                { value: 'USD 7K', label: 'Ticket mínimo de entrada', sub: '(Nordeste Brasil)' },
                { value: '500+', label: 'Inversores asesorados', sub: 'en los últimos 10 años' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#131326', border: '1px solid rgba(201,146,42,0.18)', borderRadius: 12, padding: '22px 24px', flexGrow: 1, display: 'flex', alignItems: 'center', gap: 18 }}>
                  <span style={{ fontSize: 28, fontWeight: 800, color: '#C9922A', flexShrink: 0, lineHeight: 1 }}>{s.value}</span>
                  <div>
                    <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.75)', margin: '0 0 2px', fontWeight: 600 }}>{s.label}</p>
                    <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.35)', margin: 0 }}>{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter + Two-panel ── */}
      <section style={{ padding: '48px 40px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: 'rgba(239,239,239,0.35)', fontWeight: 600, marginRight: 4 }}>Filtrar por:</span>
            {REGIONS.map((r) => (
              <button
                key={r} type="button" onClick={() => setRegion(r)}
                style={{ background: region === r ? '#C9922A' : 'transparent', border: `1.5px solid ${region === r ? '#C9922A' : 'rgba(255,255,255,0.15)'}`, borderRadius: 20, padding: '7px 18px', color: region === r ? '#101010' : 'rgba(239,239,239,0.65)', fontSize: 12, fontWeight: 700, cursor: 'pointer', letterSpacing: '0.04em', transition: 'all 0.15s', WebkitTapHighlightColor: 'transparent' }}
              >{r}</button>
            ))}
          </div>

          {/* Two-panel */}
          <div className="two-panel" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', background: '#131326', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 16, overflow: 'hidden' }}>

            {/* Left sidebar */}
            <div style={{ borderRight: '1px solid rgba(201,146,42,0.1)', overflowY: 'auto', maxHeight: 780 }}>
              <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(239,239,239,0.3)', letterSpacing: '0.12em', margin: 0 }}>SELECCIONÁ UN MERCADO</p>
              </div>
              {filtered.map((m) => {
                const isActive = selected === m.name;
                return (
                  <div
                    key={m.name}
                    onClick={() => setSelected(m.name)}
                    style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.04)', borderLeft: `3px solid ${isActive ? '#C9922A' : 'transparent'}`, background: isActive ? 'rgba(201,146,42,0.07)' : 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, transition: 'all 0.15s' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://flagcdn.com/w40/${m.code}.png`} alt={m.name} style={{ width: 30, height: 20, objectFit: 'cover', borderRadius: 3, flexShrink: 0 }} />
                    <div style={{ flexGrow: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: isActive ? '#C9922A' : '#efefef', margin: '0 0 2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.name}</p>
                      <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.35)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.detail}</p>
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 700, color: m.badge.color, background: `${m.badge.color}18`, border: `1px solid ${m.badge.color}44`, borderRadius: 10, padding: '3px 7px', flexShrink: 0, whiteSpace: 'nowrap' }}>
                      {m.badge.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right detail */}
            <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', maxHeight: 780 }}>

              {/* Top header band */}
              <div style={{ background: 'rgba(0,0,0,0.25)', borderBottom: '1px solid rgba(201,146,42,0.12)', padding: '28px 36px', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                {/* Watermark */}
                <div style={{ position: 'absolute', top: -10, right: 0, opacity: 0.07, pointerEvents: 'none' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://flagcdn.com/w320/${mkt.code}.png`} alt="" style={{ width: 200 }} />
                </div>
                {/* Breadcrumb */}
                <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.3)', marginBottom: 16, letterSpacing: '0.04em' }}>
                  Mercados › <span style={{ color: '#C9922A', fontWeight: 700 }}>{mkt.name}</span>
                </p>
                {/* Flag + title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 18 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://flagcdn.com/w80/${mkt.code}.png`} alt={mkt.name} style={{ width: 60, height: 40, objectFit: 'cover', borderRadius: 6, flexShrink: 0, boxShadow: '0 4px 14px rgba(0,0,0,0.5)' }} />
                  <div>
                    <h2 style={{ fontSize: 28, fontWeight: 800, color: '#efefef', margin: '0 0 5px', lineHeight: 1.15 }}>{mkt.name}</h2>
                    <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.4)', margin: 0 }}>{mkt.subtitle}</p>
                  </div>
                </div>
                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {mkt.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(239,239,239,0.65)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '5px 14px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '28px 36px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 28 }}>

                {/* 3 key stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                  {[mkt.stat1, mkt.stat2, mkt.stat3].map((s, i) => (
                    <div key={i} style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 10, padding: '16px 18px', textAlign: 'center' }}>
                      <p style={{ fontSize: 22, fontWeight: 800, color: '#C9922A', margin: '0 0 4px' }}>{s.value}</p>
                      <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.4)', margin: 0, letterSpacing: '0.04em' }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Por qué invertir */}
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: '#C9922A', letterSpacing: '0.12em', marginBottom: 10 }}>POR QUÉ INVERTIR AQUÍ</p>
                  <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.65)', lineHeight: 1.85, margin: 0 }}>{mkt.whyInvest}</p>
                </div>

                {/* Dónde operamos */}
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: '#C9922A', letterSpacing: '0.12em', marginBottom: 12 }}>DÓNDE OPERAMOS</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {mkt.zones.map((z, i) => (
                      <div key={i} style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.12)', borderRadius: 10, padding: '16px 18px' }}>
                        <p style={{ fontSize: 13, fontWeight: 800, color: '#efefef', margin: '0 0 6px' }}>{z.icon} {z.name}</p>
                        <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.5)', lineHeight: 1.7, margin: 0 }}>{z.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modelos de inversión */}
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: '#C9922A', letterSpacing: '0.12em', marginBottom: 12 }}>MODELOS DE INVERSIÓN</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {mkt.models.map((model, i) => (
                      <div key={i} style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '10px 16px', textAlign: 'center', minWidth: 110 }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#efefef', margin: '0 0 2px' }}>{model.label}</p>
                        <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.35)', margin: 0 }}>{model.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nota importante */}
                <div style={{ background: 'rgba(201,146,42,0.05)', border: '1px solid rgba(201,146,42,0.2)', borderLeft: '3px solid #C9922A', borderRadius: 8, padding: '14px 16px' }}>
                  <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.6)', lineHeight: 1.75, margin: 0 }}>
                    <span style={{ color: '#C9922A', fontWeight: 700 }}>Importante: </span>{mkt.note}
                  </p>
                </div>

                {/* Proyectos activos */}
                {mkt.projects.length > 0 && (
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#C9922A', letterSpacing: '0.12em', marginBottom: 12 }}>
                      PROYECTOS ACTIVOS — MAYO 2026
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {mkt.projects.map((p, i) => (
                        <div key={i} style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.12)', borderRadius: 10, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
                          <div style={{ width: 44, height: 44, borderRadius: 10, background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{p.icon}</div>
                          <div style={{ flexGrow: 1, minWidth: 0 }}>
                            <p style={{ fontSize: 14, fontWeight: 800, color: '#efefef', margin: '0 0 4px' }}>{p.name}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                              {p.tags.map((tag, j) => (
                                <span key={j} style={{ fontSize: 10, color: 'rgba(239,239,239,0.4)', background: 'rgba(255,255,255,0.04)', borderRadius: 4, padding: '2px 7px' }}>{tag}</span>
                              ))}
                            </div>
                          </div>
                          <div style={{ textAlign: 'right', flexShrink: 0 }}>
                            <p style={{ fontSize: 15, fontWeight: 800, color: '#C9922A', margin: '0 0 3px' }}>{p.price}</p>
                            <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.35)', margin: 0 }}>{p.sub}</p>
                          </div>
                          <span style={{ color: 'rgba(239,239,239,0.3)', fontSize: 16, flexShrink: 0 }}>›</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {mkt.projects.length === 0 && (
                  <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '24px', textAlign: 'center' }}>
                    <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.35)', margin: 0 }}>Próximas oportunidades en camino. Consultanos para registrarte en lista de espera.</p>
                  </div>
                )}
              </div>

              {/* Bottom CTA bar */}
              <div style={{ borderTop: '1px solid rgba(201,146,42,0.12)', padding: '20px 36px', background: 'rgba(0,0,0,0.2)', display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 }}>
                <Link
                  href="/contacto"
                  style={{ flexGrow: 1, background: '#C9922A', color: '#101010', padding: '12px 24px', fontSize: 13, fontWeight: 800, borderRadius: 6, textDecoration: 'none', letterSpacing: '0.06em', textAlign: 'center', display: 'block' }}
                >
                  Ver todos los proyectos de {mkt.name} →
                </Link>
                <Link
                  href="/contacto"
                  style={{ background: 'transparent', color: '#efefef', padding: '12px 20px', fontSize: 12, fontWeight: 700, border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 6, textDecoration: 'none', letterSpacing: '0.05em', whiteSpace: 'nowrap', display: 'block' }}
                >
                  Descargar guía gratuita
                </Link>
                <Link
                  href="/contacto"
                  style={{ background: 'transparent', color: '#efefef', padding: '12px 20px', fontSize: 12, fontWeight: 700, border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 6, textDecoration: 'none', letterSpacing: '0.05em', whiteSpace: 'nowrap', display: 'block' }}
                >
                  Agendar reunión
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .two-panel { grid-template-columns: 1fr !important; }
          .two-panel > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(201,146,42,0.1) !important; max-height: 260px !important; }
          section { padding-left: 20px !important; padding-right: 20px !important; }
        }
        @media (max-width: 480px) {
          h1 { font-size: 30px !important; }
        }
      `}</style>

      {/* Projects section — auto-filtered by selected market */}
      <ProjectsSection selectedMarket={selected} />
    </main>
  );
}
