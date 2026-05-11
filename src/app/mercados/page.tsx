'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectsSection from './ProjectsSection';

type Zone    = { icon: string; name: string; desc: string };
type Project = { icon: string; name: string; tags: string[]; price: string; sub: string };
type Model   = { label: string; sub: string; badge?: string; fullDesc?: string };
type Faq     = { q: string; a: string; bold?: string };
type Step    = { title: string; desc: string };

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
  steps?: Step[];
  note: string;
  projects: Project[];
  faqs?: Faq[];
  ctaTitle?: string;
  ctaDesc?: string;
  ctaHideMap?: boolean;
  ctaMapLabel?: string;
};

const markets: Market[] = [
  {
    name: 'Estados Unidos',
    subtitle: 'El mercado inmobiliario más sólido y transparente del mundo',
    regionFilter: 'América', code: 'us',
    detail: 'Florida — Miami y Orlando',
    foco: true,
    badge: { label: '⭐ Foco', color: '#C9922A' },
    tags: ['Hipoteca 30 años', 'Airbnb permitido', 'Sin impuesto estadual', 'Retornos en dólares', 'Proceso 100% remoto'],
    stat1: { value: '+8%', label: 'Rentabilidad anual estimada' },
    stat2: { value: 'USD 200K', label: 'Ticket mínimo de entrada' },
    stat3: { value: '79%', label: 'Inversores latinos eligen Florida' },
    whyInvest: 'Florida ofrece algo que pocos mercados pueden garantizar: estabilidad jurídica, demanda sostenida y retornos en dólares. El 79% de los inversores latinoamericanos que salen al exterior eligen Florida como primer destino. Sistema legal transparente, sin impuesto estadual a los ingresos, acceso a financiamiento hipotecario para extranjeros a 30 años y demanda de alquiler sostenida por turismo, migración interna y crecimiento corporativo. Entre agosto 2024 y julio 2025, las compras internacionales en Florida crecieron un 51% interanual, alcanzando USD 10.4 mil millones. El 64% de los compradores extranjeros en el sur de Florida provienen de América Latina.',
    zones: [
      { icon: '🏢', name: 'Miami — Brickell', desc: 'Hub financiero de América Latina. Más de 70 fondos de cobertura y empresas Fortune 500 se trasladaron aquí desde 2020. Precio mediano de condominios Q1 2026: USD 620.000 con rentabilidades brutas del 7.3% anual. El FIFA World Cup 2026 generará demanda de alquiler sin precedentes.' },
      { icon: '🏙️', name: 'Orlando — Triple Crown 2025', desc: '#1 en creación de empleo, #1 en crecimiento poblacional y #1 en PIB nominal entre los 30 mayores metros de EE.UU. Con USD 50.000M en proyectos activos y Epic Universe inaugurado en mayo 2025, la demanda turística sigue en expansión. +3.8% apreciación interanual · USD 427K precio mediano hogar.' },
    ],
    models: [
      { label: 'Compra en pozo', sub: 'Mayor plusvalía', badge: 'Mayor plusvalía', fullDesc: 'Ingresás en preventa al precio más bajo del ciclo. El desarrollador financia la obra en cuotas escalonadas. Ideal para maximizar la apreciación entre la compra y la entrega.' },
      { label: 'Crédito hipotecario 30 años', sub: 'Renta inmediata', badge: 'Renta inmediata', fullDesc: 'Comprás una propiedad terminada financiando hasta el 70% con hipoteca local. Generás renta desde el primer mes. Tasas actuales: 6.0% - 6.5% anual. Disponible para extranjeros.' },
      { label: 'Construcción de casas', sub: 'Control total', badge: 'Control total', fullDesc: 'Desarrollamos la propiedad desde cero en lotes seleccionados de Florida. Mayor control del proceso, especificaciones a medida y margen de ganancia superior sobre el valor final.' },
      { label: 'Flipping', sub: 'Retorno rápido', badge: 'Retorno rápido', fullDesc: 'Compramos, remodelamos y revendemos en ciclos cortos de 6 a 18 meses. Retornos históricos del 15-25% sobre la inversión. Ideal para quien busca liquidez en plazos cortos.' },
    ],
    steps: [
      { title: 'Definimos tu objetivo', desc: 'Renta, plusvalía, flipping o residencia. Cada objetivo tiene su mercado y su proyecto ideal dentro de Florida.' },
      { title: 'Te presentamos los proyectos del mes', desc: 'Proyectos activos en Miami y Orlando con análisis de retorno, condiciones de pago y restricciones de uso.' },
      { title: 'Apertura de LLC (si aplica)', desc: 'Te guiamos en la constitución de la empresa en Florida — proceso remoto, desde USD 400, listo en 3-5 días hábiles.' },
      { title: 'Firma del contrato y primer pago', desc: 'Firma digital desde tu país. El ingreso queda reservado en fideicomiso hasta que recibís el título de propiedad.' },
      { title: 'Acompañamiento durante la obra', desc: 'Te informamos del avance, coordinamos con el desarrollador y gestionamos cualquier novedad hasta la entrega.' },
      { title: 'Entrega y gestión post-compra', desc: 'Te conectamos con administradoras de alquiler locales para que tu propiedad genere ingresos desde el primer día.' },
    ],
    note: 'Cada desarrollo tiene sus propias regulaciones. Algunos proyectos permiten alquiler por Airbnb y otros solo alquiler a largo plazo. Antes de elegir un proyecto, definimos juntos tu objetivo para asegurarnos de que el desarrollo sea compatible con tu estrategia de renta.',
    projects: [
      { icon: '🏗️', name: 'GZ Tower', tags: ['Orlando', 'En obra', '✓ Airbnb', 'International Drive', 'Entrega 2027'], price: 'USD 200.000', sub: 'Ingreso desde USD 100.000 · Entrega 2027' },
      { icon: '🏛️', name: 'Parkside Brickell', tags: ['Miami', 'Pre-construcción', 'Brickell Key', 'Entrega Q2 2028'], price: 'USD 450.000', sub: '20% entrada · Amueblado · Crédito disponible' },
    ],
    faqs: [
      { q: '¿Necesito visa para comprar en USA?', a: 'No necesitás visa especial para comprar. Sí necesitás visa de turista B-1/B-2 vigente si querés acceder a financiamiento hipotecario local. Para la compra directa al desarrollador alcanza con el pasaporte.' },
      { q: '¿Qué es el FIRPTA y cómo me afecta?', a: 'El FIRPTA es una retención del 10-15% sobre el precio de venta que se aplica cuando un extranjero vende una propiedad en USA. No es un impuesto final — se descuenta al cierre y se regulariza con la declaración impositiva. La estructura de compra (LLC vs. personal) influye directamente en su aplicación.', bold: '10-15% sobre el precio de venta' },
      { q: '¿Puedo alquilar por Airbnb desde el primer día de entrega?', a: 'Depende del desarrollo. GZ Tower en Orlando sí permite Airbnb sin restricciones. Parkside en Brickell permite alquiler sin restricciones de plazo mínimo. Siempre verificamos las restricciones del HOA antes de recomendarte un proyecto.', bold: 'GZ Tower en Orlando sí permite Airbnb' },
      { q: '¿Cómo cobro los ingresos del alquiler desde Argentina?', a: 'Los ingresos se acreditan en la cuenta bancaria de tu LLC o cuenta personal en USA. Desde ahí podés transferir al exterior. Con cuenta en Wise o similar el proceso es simple y económico. Te asesoramos sobre el método más eficiente.' },
      { q: '¿Qué pasa si el desarrollador no entrega la obra?', a: 'Los contratos de pre-construcción en Florida tienen cláusulas de protección al comprador: si el desarrollador incumple, tiene 7 días para notificar y los compradores tienen derecho a reclamar el depósito con intereses. Solo trabajamos con desarrolladores con trayectoria comprobada.', bold: 'protección al comprador' },
    ],
    ctaTitle: '¿Listo para dar el primer paso en USA?',
    ctaDesc: 'Agendá una reunión de 30 minutos con nuestro asesor especializado en el mercado de Florida. Te presentamos los proyectos disponibles este mes y resolvemos todas tus dudas.',
    ctaHideMap: true,
  },
  {
    name: 'Brasil',
    subtitle: 'El mercado que más crece en América del Sur',
    regionFilter: 'América', code: 'br',
    detail: 'Santa Catarina · Nordeste · Río de Janeiro',
    foco: true,
    badge: { label: '⭐ Foco', color: '#C9922A' },
    tags: ['Financiación 10 años', 'Sin banco ni historial', 'Desde USD 7.000', 'Proceso 100% remoto', 'Aeropuerto Maragogi 2026'],
    stat1: { value: 'R$14.906', label: 'M² Balneário Camboriú — #1 Brasil' },
    stat2: { value: 'USD 7K', label: 'Ticket mínimo de entrada' },
    stat3: { value: '+86%', label: 'Plusvalía Porto Belo — 3 años' },
    whyInvest: 'Brasil combina lo que pocos mercados ofrecen al mismo tiempo: ciudades con el metro cuadrado más caro del país (Balneário Camboriú e Itapema superan São Paulo, Río y todas las capitales brasileñas), destinos turísticos de clase mundial en el Nordeste, y financiación directa del desarrollador de hasta 10 años sin banco ni historial local. Para el inversor latinoamericano, la ventaja cambiaria es estructural: el real históricamente debilitado frente al dólar genera una ventana de entrada favorable. Un extranjero puede comprar con su pasaporte y CPF (número fiscal gratuito que se tramita online), sin visa especial ni cuenta bancaria local.',
    zones: [
      { icon: '🏖️', name: 'Santa Catarina — La costa de oro', desc: 'Balneário Camboriú (#1 m² Brasil), Itapema (#2), Porto Belo (+86% plusvalía 3 años), Bombinhas y Florianópolis. El litoral norte concentra la mayor valorización del país con financiación directa hasta 10 años.' },
      { icon: '🌴', name: 'Nordeste — Alagoas · Pernambuco', desc: 'Maragogi, São Miguel dos Milagres, Japaratinga, Tamandaré y Porto de Galinhas. Ingreso desde USD 7K. El aeropuerto de Maragogi abre en diciembre 2026 — el catalizador que acelera la plusvalía.' },
      { icon: '🏙️', name: 'Río de Janeiro — Zona Sur', desc: 'El destino turístico más icónico de Brasil. Alta demanda de alquiler premium todo el año. Proyectos en zonas consolidadas con rentabilidad de corto y largo plazo.' },
    ],
    models: [
      { label: 'Financiación directa del desarrollador', sub: 'Más popular', badge: 'Más popular', fullDesc: 'Ingresás con el 10-25% del valor, pagás cuotas mensuales durante y post obra y saldo a la entrega. Sin banco, sin historial local. Hasta 10 años de financiación.' },
      { label: 'Compra en pozo anticipado', sub: 'Mayor plusvalía', badge: 'Mayor plusvalía', fullDesc: 'Ingresás en los primeros lanzamientos al precio más bajo del ciclo. Proyectos en Porto Belo registraron 86% de plusvalía en 3 años.' },
      { label: 'Ticket bajo Nordeste', sub: 'Desde USD 7K', badge: 'Desde USD 7K', fullDesc: 'Studios en Maragogi y Tamandaré desde USD 43.999 con ingresos de USD 7.000-8.000. Plan de cuotas desde USD 335/mes.' },
      { label: 'Renta turística anual', sub: 'Renta inmediata', badge: 'Renta inmediata', fullDesc: 'Propiedades terminadas para alquiler por temporada en destinos con alta demanda. Operadoras locales gestionan todo sin que debas estar presente.' },
    ],
    steps: [
      { title: 'Definimos tu objetivo y zona', desc: '¿Buscás plusvalía, renta o ticket mínimo? ¿Preferís el litoral de Santa Catarina o el Nordeste? Eso determina el proyecto ideal.' },
      { title: 'Tramitás el CPF', desc: 'El número fiscal brasileño (gratuito, se obtiene online o en el consulado en 1-5 días). Te acompañamos en el proceso.' },
      { title: 'Reserva de la unidad', desc: 'Con el ingreso inicial la unidad queda a tu nombre. Firma digital del contrato en español desde tu país.' },
      { title: 'Cuotas mensuales', desc: 'Pagos mensuales vía transferencia internacional. Refuerzos semestrales según el plan del proyecto elegido.' },
      { title: 'Escritura y entrega', desc: 'Al completarse la obra firmás escritura ante notario. La propiedad queda inscripta en el Registro de Imóveis a tu nombre.' },
      { title: 'Renta o reventa', desc: 'Te conectamos con operadoras de alquiler turístico locales. Tu propiedad empieza a generar ingresos sin que tengas que estar presente.' },
    ],
    note: 'Las operaciones se realizan en reales brasileños pero el valor de referencia es en dólares. Un extranjero puede comprar con pasaporte y CPF (se tramita online en 1-5 días, gratuito). Sin necesidad de cuenta bancaria local. Contamos con socios jurídicos en Santa Catarina, Alagoas y Pernambuco.',
    projects: [
      { icon: '🌅', name: 'Riviera Home Club', tags: ['Itapema · SC', '2 dorm', 'Entrega 2030', 'Foco principal'], price: 'USD 163.761', sub: 'Ingreso USD 16.376 · 100 cuotas USD 573' },
      { icon: '🌊', name: 'Horizon — Maragogi', tags: ['Maragogi · AL', 'Studio', 'Entrega sep 2027', 'Nordeste'], price: 'USD 43.999', sub: 'Ingreso USD 8.800 · 26 cuotas USD 339' },
      { icon: '🏗️', name: 'Catalunya Porto Belo', tags: ['Porto Belo · SC', '2 dorm', 'Entrega dic 2029', '+86% plusvalía'], price: 'USD 250.368', sub: 'Ingreso USD 37.500 · 84 cuotas USD 1.500' },
      { icon: '🏖️', name: 'Beach Square 12', tags: ['Porto de Galinhas · PE', 'Studio', 'Entrega ene 2028', 'Nordeste'], price: 'USD 75.347', sub: 'Ingreso USD 15.070' },
      { icon: '🌊', name: 'Summer Dreams — Bombinhas', tags: ['Bombinhas · SC', '50m de la playa', 'Entrega 2030', 'Premium'], price: 'USD 403.012', sub: 'Ingreso USD 40.300' },
    ],
    faqs: [
      { q: '¿Qué es el CPF y cómo lo obtengo?', a: 'El CPF (Cadastro de Pessoas Físicas) es el número fiscal brasileño, equivalente al CUIL. Es obligatorio para firmar contratos inmobiliarios en Brasil. Se tramita gratis online o en el Consulado de Brasil — tarda entre 1 y 5 días hábiles. Te guiamos en cada paso.', bold: 'gratis online' },
      { q: '¿Qué pasa si el real se devalúa frente al dólar?', a: 'Cuando el real se devalúa, tus cuotas en reales se vuelven más baratas en dólares — es una ventaja para quien paga desde Argentina o Uruguay. El riesgo real es el inverso: si el real se fortalece, tus cuotas aumentan en dólares. Por eso siempre analizamos el timing de entrada.', bold: 'timing' },
      { q: '¿Puedo alquilar por Airbnb en Santa Catarina?', a: 'Sí, en la mayoría de los proyectos costeros de Santa Catarina el alquiler turístico es libre y sin restricciones. Algunos desarrollos incluso tienen operadora de alquiler propia que gestiona todo por vos. Siempre verificamos las condiciones del proyecto antes de recomendarlo.', bold: 'libre y sin restricciones' },
      { q: '¿Cómo cobro los ingresos del alquiler desde Argentina?', a: 'Los ingresos se depositan en una cuenta bancaria local en Brasil. Podés abrir cuenta de no-residente en Nubank o Banco do Brasil. Las transferencias internacionales desde Brasil son legales — te asesoramos sobre el método más eficiente según tu situación.' },
      { q: '¿Por qué el Nordeste ahora y no después?', a: 'Porque el aeropuerto de Maragogi abre en diciembre 2026. Quien invierte antes de la apertura entra al precio de mercado emergente y captura la mayor parte de la plusvalía cuando la demanda turística se acelere. Es el mismo patrón que siguió Balneário Camboriú hace 15 años.', bold: 'aeropuerto de Maragogi abre en diciembre 2026' },
    ],
    ctaTitle: '¿Listo para dar el primer paso en Brasil?',
    ctaDesc: 'Agendá una reunión de 30 minutos con nuestro asesor especializado en el mercado brasileño. Te presentamos las zonas y proyectos más adecuados para tu objetivo y presupuesto.',
  },
  {
    name: 'Argentina',
    subtitle: 'Tres mercados, tres perfiles de inversor',
    regionFilter: 'América', code: 'ar',
    detail: 'Buenos Aires · Mar del Plata · Vaca Muerta',
    foco: false,
    badge: { label: 'Piso del ciclo', color: '#eab308' },
    tags: ['CABA · MdP · Añelo', '+40% escrituras CABA 2025', 'USD/m² en mínimos históricos'],
    stat1: { value: '+40%', label: 'Escrituras CABA — 2025 vs 2024' },
    stat2: { value: 'USD/m² bajo', label: 'Precios en mínimos históricos' },
    stat3: { value: 'Vaca Muerta', label: '2do yacimiento de shale del mundo' },
    whyInvest: 'Argentina concentra hoy una de las oportunidades de entrada más atractivas de la región. Los precios en dólares están en mínimos históricos — quien compra ahora compra en el piso del ciclo. Con el crédito hipotecario reactivándose y las escrituras en CABA creciendo un 40% en 2025, la demanda reprimida anticipa una fuerte revalorización. Tres mercados, tres perfiles: Buenos Aires para plusvalía, Mar del Plata para uso personal + renta, Vaca Muerta para renta garantizada sin estacionalidad.',
    zones: [
      { icon: '🏙️', name: 'Buenos Aires — CABA + GBA', desc: 'La mayor demanda inmobiliaria del país. Palermo, Belgrano, Caballito, Puerto Madero y Villa Urquiza concentran la mayor plusvalía histórica. Precios 40% por debajo de su valor real en USD con el crédito hipotecario reactivándose.' },
      { icon: '🌊', name: 'Mar del Plata — Costa Atlántica', desc: 'Más de 8 millones de turistas por temporada. Destino #1 elegido por los argentinos. Comprás en pozo, usás en enero/febrero y alquilás el resto del año. Centro, Los Troncos, Playa Grande y Güemes son las zonas más demandadas.' },
      { icon: '⛽', name: 'Vaca Muerta — Añelo, Neuquén', desc: '2do yacimiento de shale del mundo. Miles de trabajadores de YPF, Chevron, Shell y Total generan una demanda habitacional sostenida durante todo el año. Ocupación del 100% sin estacionalidad turística.' },
    ],
    models: [
      { label: 'Pozo en pesos (CAC)', sub: 'Cobertura cambiaria' },
      { label: 'Pozo en dólares', sub: 'Resguardo directo' },
      { label: 'Uso personal + renta', sub: 'Mar del Plata — doble propósito' },
      { label: 'Inversión pura', sub: 'Vaca Muerta — renta garantizada' },
    ],
    note: 'Las operaciones se realizan en dólares billete (contado o transferencia internacional). Inversores extranjeros pueden comprar con pasaporte y CUIT/CDI — sin necesidad de residencia. Contamos con estudio jurídico local en CABA y Mar del Plata.',
    projects: [
      { icon: '🏛️', name: 'Palermo / Belgrano — En pozo', tags: ['CABA', 'En pozo', 'Alta demanda', 'Entrega 2026'], price: 'Desde USD 2.600/m²', sub: 'Financiación en pesos ajustado CAC' },
      { icon: '🌊', name: 'Mar del Plata — Zona Güemes', tags: ['MdP', 'En pozo', 'Uso personal + renta', 'Entrega 2026'], price: 'Desde USD 1.800/m²', sub: 'Uso en temporada · renta resto del año' },
      { icon: '⛽', name: 'Añelo — Vaca Muerta', tags: ['Neuquén', 'Inversión pura', 'Renta garantizada', 'En obra'], price: 'Desde USD 1.500/m²', sub: 'Ocupación 100% · demanda laboral sostenida' },
    ],
    faqs: [
      {
        q: '¿Qué ventaja tiene comprar en pozo frente a un usado?',
        a: 'Al comprar en pozo entrás al precio más bajo del ciclo — antes de que la propiedad exista. Al momento de la escritura, el valor de mercado suele ser 20% a 40% superior al precio de lanzamiento dependiendo del proyecto y la zona. Además pagás en cuotas durante la obra, lo que facilita el acceso sin necesitar el capital total disponible desde el inicio.',
        bold: '20% a 40% superior al precio de lanzamiento',
      },
      {
        q: '¿Qué pasa si el desarrollador no termina la obra?',
        a: 'Trabajamos exclusivamente con desarrolladores con trayectoria verificada y proyectos que cuentan con fideicomiso al costo o garantías bancarias. Además te acompañamos con asesoramiento jurídico local en todo el proceso. Los contratos en Argentina contemplan penalidades para el desarrollador en caso de incumplimiento de plazos.',
      },
      {
        q: '¿Puedo comprar siendo extranjero o uruguayo?',
        a: 'Sí. Un extranjero puede comprar propiedades en Argentina con su pasaporte y CUIT/CDI (que se tramita en AFIP). No necesitás residencia ni cuenta bancaria local para iniciar el proceso. Te acompañamos en todos los trámites necesarios.',
      },
      {
        q: '¿Por qué invertir en Mar del Plata y no solo en Buenos Aires?',
        a: 'Mar del Plata ofrece algo que CABA no tiene: la posibilidad de uso personal en temporada. Comprás en pozo, usás la propiedad en enero/febrero y la alquilás el resto del año. Además los precios por m² son generalmente más accesibles que en los mejores barrios porteños.',
        bold: 'uso personal en temporada',
      },
      {
        q: '¿Por qué Vaca Muerta es una oportunidad de inversión?',
        a: 'Añelo tiene un déficit habitacional estructural: miles de trabajadores del sector energético (YPF, Chevron, Shell, Total) necesitan alojamiento y la oferta es crónicamente insuficiente. Esto genera alquileres elevados y ocupación del 100% durante todo el año — sin depender del turismo ni de la estacionalidad.',
        bold: 'déficit habitacional estructural',
      },
    ],
  },
  {
    name: 'Paraguay',
    subtitle: 'Asunción — el Hub de negocios de Sudamérica',
    regionFilter: 'América', code: 'py',
    detail: 'Asunción · Gran Asunción · Ciudad del Este',
    foco: false,
    badge: { label: 'Hub LATAM', color: '#eab308' },
    tags: ['Impuesto a la renta 10%', 'Moneda estable (PYG/USD)', 'M² más accesible de LATAM', 'Residencia fiscal disponible', 'Hub de negocios en expansión'],
    stat1: { value: '10%', label: 'Impuesto máximo a la renta personal' },
    stat2: { value: 'USD 800', label: 'Precio promedio m² en Asunción' },
    stat3: { value: '0%', label: 'Impuesto a bienes en el exterior para residentes' },
    whyInvest: 'Paraguay es el mercado inmobiliario con mayor potencial sin descubrir de América Latina. Asunción combina algo que ninguna otra capital de la región ofrece al mismo tiempo: el metro cuadrado más accesible entre las capitales latinoamericanas, una de las economías con mayor estabilidad cambiaria de la región, impuestos mínimos y un régimen de residencia fiscal que atrae cada año a más empresarios, profesionales e inversores de toda América del Sur. El PIB de Paraguay creció un 7% en 2024 — uno de los mayores crecimientos de la región — impulsado por el sector energético, agroindustrial y un boom de servicios financieros que consolida a Asunción como nuevo hub de negocios regional. El mercado inmobiliario todavía no refleja este crecimiento: los precios del m² son entre 3 y 8 veces menores que en las demás capitales de la región.',
    zones: [
      { icon: '🏘️', name: 'Asunción Zona Norte', desc: 'Villa Morra, Carmelitas y Las Mercedes concentran el mercado premium de la ciudad. Alta concentración de empresas, restaurantes y servicios. USD 1.200/m² zona premium · Mayor apreciación histórica de Asunción · Alta demanda de alquiler corporativo.' },
      { icon: '🏙️', name: 'Gran Asunción', desc: 'El Gran Asunción ofrece precios más accesibles con alta demanda de alquiler residencial: USD 600/m² promedio. Ideal para inversión en pozo con ticket de entrada bajo y renta sostenida. Mayor accesibilidad de entrada.' },
      { icon: '🏢', name: 'Zona Hub de Negocios', desc: 'Paseo La Galería · WTC Asunción · Zona Bancaria. El corredor financiero concentra bancos internacionales, estudios jurídicos, empresas tecnológicas y sedes de multinacionales. Alta demanda de oficinas y departamentos ejecutivos con alquiler corporativo en dólares.' },
      { icon: '🌐', name: 'Ciudad del Este', desc: 'Triple Frontera · Hub comercial regional. Segundo centro económico de Paraguay. La Triple Frontera con Brasil y Argentina genera una demanda única de alquiler comercial y residencial sostenida todo el año.' },
    ],
    models: [
      { label: 'Departamento en pozo', sub: 'Mayor plusvalía', badge: 'Mayor plusvalía', fullDesc: 'Entrás al precio más bajo del ciclo en el mercado más accesible de LATAM. Al momento de la entrega, el valor de mercado ya incorpora la apreciación del período de construcción.' },
      { label: 'Alquiler corporativo', sub: 'Renta estable', badge: 'Renta estable', fullDesc: 'Departamentos y oficinas para empresas instaladas en Asunción. La llegada de multinacionales y el crecimiento del hub financiero generan demanda corporativa sostenida con alquileres en dólares.' },
      { label: 'Residencia + inversión', sub: 'Dual', badge: 'Dual', fullDesc: 'Comprás una propiedad como base para tu residencia fiscal y simultáneamente generás renta cuando no estés en el país. La propiedad justifica parte del proceso de residencia.' },
      { label: 'Diversificación patrimonial', sub: 'Protección', badge: 'Protección', fullDesc: 'Diversificar con un activo físico en Paraguay protege tu patrimonio frente a riesgos del país de origen. La estabilidad cambiaria del guaraní y los bajos impuestos son factores adicionales de seguridad.' },
    ],
    steps: [
      { title: 'Definimos tu objetivo', desc: '¿Buscás invertir, obtener residencia fiscal o ambas cosas? Según tu objetivo priorizamos Asunción zona norte, Gran Asunción o Ciudad del Este.' },
      { title: 'Selección del proyecto', desc: 'Te presentamos proyectos en pozo activos con análisis de retorno, zona, plan de pagos y perfil de demanda de alquiler.' },
      { title: 'Reserva y contrato', desc: 'Firma digital del boleto de compra y pago de la reserva. El proceso es 100% remoto — no necesitás viajar a Paraguay para adquirir la propiedad.' },
      { title: 'Proceso de residencia fiscal (si aplica)', desc: 'Gestionamos con nuestros socios locales: cédula paraguaya, antecedentes apostillados y cuenta bancaria. El trámite tarda entre 30 y 60 días desde la presentación de la documentación.' },
      { title: 'Entrega y gestión de renta', desc: 'Te conectamos con administradoras locales para gestionar el alquiler sin necesidad de estar presente en el país.' },
    ],
    note: 'El sistema fiscal de Paraguay es territorial: solo tributás sobre lo que generás dentro del país. IRP máximo 10%, impuesto corporativo 10%, impuesto inmobiliario 1% sobre valor fiscal, sin impuesto a los dividendos ni a las ganancias por revalorización. La residencia fiscal requiere solo 120 horas al año (5 días) de estadía y se obtiene en 30-60 días.',
    projects: [
      { icon: '🏗️', name: 'Asunción Norte — En pozo', tags: ['Asunción Norte', 'En construcción', 'Alquiler corporativo', 'Plan de pagos cuotas'], price: 'USD 1.200/m²', sub: 'Ticket accesible · Villa Morra · Entrega 2026' },
      { icon: '🏙️', name: 'Gran Asunción — Residencial', tags: ['Gran Asunción', 'En pozo', 'Alta demanda residencial', 'Ticket bajo'], price: 'USD 600/m²', sub: 'Ingreso bajo · Renta sostenida en guaraníes/USD' },
    ],
    faqs: [
      { q: '¿Por qué la moneda de Paraguay es más estable que el resto de la región?', a: 'El guaraní paraguayo ha mantenido una de las inflaciones más bajas de América del Sur durante los últimos 15 años — promedio del 3-4% anual. El Banco Central de Paraguay tiene una política monetaria ortodoxa y el país no tiene deuda externa significativa. Esto genera estabilidad cambiaria real frente al dólar.', bold: 'estabilidad cambiaria real' },
      { q: '¿La residencia fiscal paraguaya es legal y reconocida internacionalmente?', a: 'Sí. Paraguay es miembro del MERCOSUR y de la OCDE en proceso de adhesión. La residencia fiscal paraguaya es reconocida por los sistemas tributarios de Argentina, Uruguay, Brasil y la mayoría de los países latinoamericanos. Te recomendamos siempre consultar con un asesor impositivo de tu país de origen para analizar el caso particular.' },
      { q: '¿Puedo comprar propiedad en Paraguay sin ser residente?', a: 'Sí. Un extranjero puede comprar propiedades en Paraguay con su pasaporte. No necesitás residencia ni cuenta bancaria local para la compra. La residencia fiscal es opcional y separada del proceso de compra inmobiliaria.', bold: 'opcional' },
      { q: '¿Por qué Asunción se está convirtiendo en un hub de negocios?', a: 'Tres factores clave: impuestos corporativos del 10% (los más bajos de la región), estabilidad macroeconómica sostenida y costos operativos muy inferiores a Buenos Aires, São Paulo o Bogotá. Empresas de tecnología, finanzas, logística y comercio exterior se están instalando en Asunción para operar regionalmente con menores costos.', bold: 'costos operativos muy inferiores' },
      { q: '¿Cuál es la rentabilidad esperada de un alquiler en Asunción?', a: 'Las rentabilidades brutas de alquiler en Asunción zona norte oscilan entre el 6% y el 9% anual sobre el valor de compra, según la zona y el tipo de propiedad. Los alquileres corporativos (empresas y ejecutivos) suelen estar en la parte alta del rango, en dólares y con contratos de 1 a 2 años.', bold: '6% y el 9% anual' },
    ],
    ctaTitle: '¿Querés explorar Paraguay como destino de inversión?',
    ctaDesc: 'Agendá una reunión de 30 minutos con nuestro asesor especializado. Te presentamos las oportunidades disponibles en Asunción y te explicamos cómo funciona la residencia fiscal si te interesa ese camino.',
  },
  {
    name: 'Uruguay',
    subtitle: 'Montevideo · Punta del Este · Interior',
    regionFilter: 'América', code: 'uy',
    detail: 'Estabilidad institucional · Beneficios fiscales · Alta calidad de vida',
    foco: false,
    badge: { label: 'Seguridad jurídica', color: '#22c55e' },
    tags: ['Proyectos en pozo en USD', 'Residencia fiscal — 10 años exonerado', 'País más estable de la región', 'Seguridad jurídica total', 'Calidad de vida #1 LATAM'],
    stat1: { value: '#1', label: 'Calidad de vida en América Latina (Mercer 2025)' },
    stat2: { value: '10 años', label: 'Exoneración impuestos sobre rentas del exterior' },
    stat3: { value: 'AAA', label: 'Calificación institucional — el más sólido de la región' },
    whyInvest: 'Uruguay no necesita convencer con promesas de alto rendimiento especulativo. Su propuesta es diferente y más profunda: estabilidad institucional real, seguridad jurídica total, beneficios fiscales concretos y la mejor calidad de vida del continente. Es el único país de la región donde un inversor extranjero puede comprar propiedad, obtener residencia y saber con certeza que las reglas del juego no van a cambiar de un año al otro. Para el inversor argentino en particular, Uruguay representa algo único: la posibilidad de invertir en dólares a 30 kilómetros de Buenos Aires, con un sistema jurídico independiente, una moneda estable y un régimen fiscal que exonera por 10 años los impuestos sobre rentas generadas en el exterior.',
    zones: [
      { icon: '🏙️', name: 'Montevideo', desc: 'Capital · Mayor demanda. El corredor de Pocitos, Punta Carretas y Carrasco concentra la mayor valorización histórica. Alta demanda de alquiler residencial y ejecutivo impulsada por empresas regionales y multinacionales. USD 2.800/m² zona premium · Barrios clave: Pocitos, Punta Carretas, Carrasco, Cordón, Parque Batlle, Ciudad Vieja.' },
      { icon: '🏖️', name: 'Punta del Este', desc: 'Turismo premium. El destino de veraneo más exclusivo de América del Sur. Recibe turismo premium de Argentina, Brasil y Europa todo el año, con pico en diciembre-marzo. Doble propósito natural: uso personal en temporada + alquiler vacacional el resto del año. USD 3.500+/m² zona premium.' },
      { icon: '⛵', name: 'Colonia del Sacramento', desc: 'Patrimonio UNESCO. A 50 minutos en Buquebus de Buenos Aires. Alta demanda de alquiler vacacional de argentinos los fines de semana y feriados. Precios todavía más accesibles que Montevideo o Punta del Este, con potencial de valorización sostenido.' },
      { icon: '🌿', name: 'Canelones', desc: 'Costa · Accesible. Zona costera con los tickets de entrada más bajos de Uruguay. Ideal para inversores que buscan ingresar al mercado uruguayo con menor capital inicial y perfil de renta vacacional o largo plazo.' },
      { icon: '🌾', name: 'Soriano', desc: 'Interior · Proyectos. Zona agroindustrial en crecimiento con oportunidades de inversión en proyectos residenciales de menor escala. Perfil de diversificación patrimonial y renta en pesos/dólares.' },
    ],
    models: [
      { label: 'Pozo en dólares', sub: 'Sin riesgo cambiario', badge: 'Sin riesgo cambiario', fullDesc: 'Todos los proyectos están pactados en dólares. Sin exposición a devaluaciones ni ajustes por inflación. El valor de tu inversión en divisa está fijo desde el primer día.' },
      { label: 'Residencia + inversión', sub: 'Dual', badge: 'Dual', fullDesc: 'Combinás la compra de una propiedad con el trámite de residencia fiscal. Los 10 años de exoneración sobre rentas del exterior hacen que la inversión inmobiliaria tenga un atractivo fiscal adicional.' },
      { label: 'Uso personal + renta', sub: 'Punta del Este', badge: 'Punta del Este', fullDesc: 'Especialmente en Punta del Este y Colonia: comprás en pozo para uso en temporada y alquilás el resto del año. Alta demanda de turismo premium de Argentina y Brasil.' },
      { label: 'Diversificación patrimonial', sub: 'Protección', badge: 'Protección', fullDesc: 'Activo físico en el país más estable de la región, en dólares y con sistema jurídico sólido. La herramienta de diversificación favorita del inversor argentino preocupado por la seguridad de su patrimonio.' },
    ],
    steps: [
      { title: 'Definimos tu objetivo', desc: '¿Buscás inversión pura, residencia fiscal, uso personal o diversificación patrimonial? Cada objetivo tiene su zona y tipo de proyecto ideal.' },
      { title: 'Selección de zona y proyecto', desc: 'Montevideo para renta sostenida, Punta del Este para doble uso, Colonia para cercanía con Argentina, Canelones y Soriano para ticket accesible.' },
      { title: 'Reserva y boleto de compraventa', desc: 'Con el ingreso en dólares la unidad queda reservada. Firma digital del contrato desde tu país.' },
      { title: 'Cuotas durante la obra', desc: 'Pagos en dólares según el cronograma del proyecto. Sin ajustes por inflación ni variaciones cambiarias.' },
      { title: 'Residencia fiscal (opcional)', desc: 'Si también querés tramitar la residencia, te conectamos con estudios jurídicos especializados en Montevideo. El proceso tarda entre 60 y 90 días.' },
      { title: 'Entrega y gestión post-compra', desc: 'Te conectamos con administradoras locales para la gestión del alquiler. Tu propiedad trabaja para vos sin que estés presente.' },
    ],
    note: 'Los nuevos residentes fiscales uruguayos están exonerados del IRPF durante 10 años sobre todas las rentas generadas en el exterior: alquileres en Argentina, dividendos, retiros de fondos y cualquier renta de fuente extranjera. El requisito de estadía es de 183 días al año. Trámite: 60-90 días.',
    projects: [
      { icon: '🏗️', name: 'Montevideo — Proyectos en pozo', tags: ['Montevideo', 'En pozo', 'En dólares', 'Pocitos / Punta Carretas'], price: 'USD 2.800/m²', sub: 'Consultanos disponibilidad este mes' },
      { icon: '🏖️', name: 'Punta del Este — En pozo', tags: ['Punta del Este', 'En pozo', 'En dólares', 'Uso personal + renta'], price: 'USD 3.500+/m²', sub: 'Proyectos seleccionados disponibles' },
    ],
    faqs: [
      { q: '¿Qué diferencia hay entre la residencia fiscal de Uruguay y la de Paraguay?', a: 'Uruguay exige 183 días al año de estadía (vs. 5 días de Paraguay), pero ofrece una exoneración de 10 años sobre rentas del exterior que Paraguay no tiene. Para quien genuinamente quiere vivir en Uruguay o tiene rentas del exterior importantes, Uruguay es más conveniente. Para quien solo quiere la residencia fiscal con mínima estadía, Paraguay es más sencillo.', bold: '183 días al año' },
      { q: '¿Por qué los proyectos en Uruguay están en dólares?', a: 'El mercado inmobiliario uruguayo opera históricamente en dólares — es una característica estructural del país. Esto elimina el riesgo cambiario: el valor de tu inversión en divisa está fijo desde el primer día, sin dependencia de la evolución del peso uruguayo.', bold: 'elimina el riesgo cambiario' },
      { q: '¿Puede comprar un argentino sin ser residente en Uruguay?', a: 'Sí. Un argentino puede comprar propiedades en Uruguay con su DNI o pasaporte. No necesitás ser residente para comprar. La residencia fiscal es un trámite completamente opcional que podés hacer después o simultáneamente con la compra.' },
      { q: '¿Qué rentabilidad puedo esperar en Montevideo?', a: 'Las rentabilidades brutas de alquiler en Montevideo zona Pocitos-Punta Carretas oscilan entre el 5% y el 8% anual en dólares sobre el valor de compra. Los departamentos chicos de 1-2 ambientes tienen la mejor relación precio/alquiler. En Punta del Este, el alquiler vacacional en temporada puede generar retornos más altos pero con mayor estacionalidad.', bold: '5% y el 8% anual' },
      { q: '¿Colonia del Sacramento es una buena opción de inversión?', a: 'Sí, especialmente para el inversor argentino. Colonia está a 50 minutos en Buquebus desde Buenos Aires y recibe turismo argentino masivo. Alta demanda de alquiler vacacional de fines de semana y feriados. Los precios todavía son más accesibles que en Montevideo o Punta del Este, con potencial de valorización sostenido.', bold: '50 minutos en Buquebus desde Buenos Aires' },
    ],
    ctaTitle: '¿Uruguay es tu próximo destino de inversión?',
    ctaDesc: 'Agendá una reunión de 30 minutos con nuestro asesor. Te presentamos los proyectos disponibles en las 5 zonas y te explicamos cómo funciona la residencia fiscal si te interesa ese camino.',
  },
  {
    name: 'México',
    subtitle: 'El mercado correcto para el perfil correcto',
    regionFilter: 'América', code: 'mx',
    detail: 'Riviera Maya — Tulum · Playa del Carmen · Cancún',
    foco: false,
    badge: { label: 'Airbnb · Caribe', color: '#eab308' },
    tags: ['Renta vacacional en dólares', 'Turismo masivo todo el año', 'Proyectos en dólares', 'Tulum y Bacalar emergentes', 'Uso personal + inversión'],
    stat1: { value: '32M', label: 'Turistas internacionales por año en Cancún' },
    stat2: { value: '+18%', label: 'Crecimiento turístico en Tulum 2023-2025' },
    stat3: { value: '65-80%', label: 'Ocupación Airbnb temporada alta Playa del Carmen' },
    whyInvest: 'Seamos honestos: México no es el mercado más sólido de nuestra cartera en términos de estabilidad institucional o seguridad jurídica. Pero tiene algo que ningún otro mercado puede replicar: la Riviera Maya es el destino de playa más visitado del hemisferio occidental, con una demanda de turismo internacional que no para de crecer. Para el inversor que ya conoce y ama este destino — y quiere convertir sus vacaciones en una fuente de ingresos — la ecuación puede tener mucho sentido. 5 destinos: Tulum (bohemio · emergente), Playa del Carmen (consolidado · Airbnb), Cancún (masivo · hotelero), Los Cabos (premium · Baja California) y Bacalar (ecológico · emergente).',
    zones: [
      { icon: '🌿', name: 'Tulum — Mayor demanda actual', desc: '+18% crecimiento turístico 2023-2025. Aeropuerto internacional nuevo (2024). USD 150-300/noche Airbnb temporada alta. Celebrities, nómadas digitales y turismo premium. Proyectos con cenote, selva o frente al mar.' },
      { icon: '🏖️', name: 'Playa del Carmen — Consolidado', desc: 'La Quinta Avenida atrae turismo todo el año. 65-80% ocupación Airbnb temporada alta. USD 80-200/noche. Más conservador que Tulum — renta estable, menos especulativo.' },
      { icon: '🌊', name: 'Cancún · Los Cabos · Bacalar', desc: 'Cancún: 32M turistas/año, condominios zona hotelera. Los Cabos: turismo USA premium, lujo accesible vs. Palm Springs. Bacalar: Laguna 7 Colores, emergente, precios bajos y demanda en fuerte crecimiento.' },
    ],
    models: [
      { label: 'Compra en pozo', sub: 'Mayor plusvalía', badge: 'Mayor plusvalía', fullDesc: 'Ingresás al precio más bajo del ciclo. Financiación directa del desarrollador en dólares. La diferencia entre precio de lanzamiento y entrega puede ser del 30-50% en Tulum.' },
      { label: 'Airbnb corto plazo', sub: 'Renta en USD', badge: 'Renta en USD', fullDesc: 'Alta demanda vacacional dic-abr. USD 80-300/noche según zona y tipo de propiedad. Administradoras locales gestionan sin que estés presente. Cobro en dólares o vía Wise.' },
      { label: 'Uso personal + renta', sub: 'Doble propósito', badge: 'Doble propósito', fullDesc: 'Usás en temporada baja, rentás en temporada alta (dic-abr). Los ingresos de renta cubren el costo del fideicomiso y generan ingresos adicionales.' },
      { label: 'Largo plazo — emergentes', sub: 'Tulum · Bacalar', badge: 'Largo plazo', fullDesc: 'Tulum y Bacalar todavía tienen precios emergentes pero requieren paciencia. La apreciación es real pero no inmediata. Ideal para diversificación geográfica.' },
    ],
    steps: [
      { title: 'Definimos zona y objetivo', desc: '¿Tulum, Playa del Carmen, Cancún, Los Cabos o Bacalar? ¿Buscás plusvalía, renta inmediata o uso personal con renta? Eso determina el proyecto.' },
      { title: 'Seleccionás el proyecto', desc: 'Te presentamos oportunidades en dólares con financiación directa del desarrollador según tu presupuesto y perfil de riesgo.' },
      { title: 'Selección del proyecto y reserva', desc: 'Proyectos en dólares con financiación directa del desarrollador. Ingreso inicial y cuotas durante la obra.' },
      { title: 'Apertura del fideicomiso', desc: 'El banco mexicano actúa como fiduciario. Vos sos el beneficiario con todos los derechos de uso, venta y transmisión. Costo anual aproximado: USD 500-700.' },
      { title: 'Entrega y gestión Airbnb', desc: 'Te conectamos con administradoras especializadas en Airbnb y alquiler vacacional en la Riviera Maya.' },
    ],
    note: 'La situación de seguridad en algunas zonas de Quintana Roo requiere atención. La demanda de alquiler es estacional — la temporada alta (diciembre-abril) concentra la mayor parte de los ingresos. El marco jurídico para extranjeros tiene particularidades: en zona restringida costera (50 km) se requiere fideicomiso bancario (USD 500-700/año). Te asesoramos con transparencia total en todos estos puntos.',
    projects: [
      { icon: '🌿', name: 'Tulum — Proyecto en pozo', tags: ['Tulum', 'En pozo', 'Airbnb permitido', 'Cenote / selva'], price: 'USD 95.000', sub: '+18% crecimiento turístico · aeropuerto 2024' },
      { icon: '🏖️', name: 'Playa del Carmen — En pozo', tags: ['Playa del Carmen', 'En pozo', 'Airbnb', '65-80% ocupación'], price: 'USD 80.000', sub: 'USD 80-200/noche · demanda todo el año' },
    ],
    faqs: [
      { q: '¿Puede un extranjero comprar propiedad costera en México?', a: 'Sí, pero no en forma directa dentro de los 50 km de la costa (zona restringida). Se utiliza un fideicomiso bancario: un banco mexicano figura como propietario legal, pero vos sos el beneficiario con todos los derechos (usar, alquilar, vender, heredar). El costo anual del fideicomiso es de aproximadamente USD 500-700.', bold: 'fideicomiso bancario' },
      { q: '¿Cuánto se puede ganar con Airbnb en Tulum o Playa del Carmen?', a: 'En Tulum, una villa con cenote o piscina puede generar USD 300-500 por noche en temporada alta con ocupación del 60-70%. Un departamento estándar en Playa del Carmen: USD 80-150 por noche con 65-80% de ocupación en temporada alta (dic-abr). Fuera de temporada la ocupación cae significativamente.', bold: 'USD 300-500 por noche' },
      { q: '¿Por qué Tulum tiene tanto potencial?', a: 'Tres factores convergentes: aeropuerto internacional nuevo (inaugurado 2024) que conecta directamente con EE.UU. y Europa, posicionamiento global como destino de wellness y lujo bohemio, y precios todavía muy inferiores a destinos comparables en el Caribe como St. Barth o Mykonos. La demanda internacional sigue creciendo a doble dígito anual.', bold: 'aeropuerto internacional nuevo' },
      { q: '¿Cómo cobro los ingresos del alquiler desde Argentina?', a: 'Los ingresos del alquiler se acreditan en la cuenta bancaria del fideicomiso o en una cuenta personal en México. Desde ahí se pueden transferir al exterior. Muchas administradoras de Airbnb pagan directamente en dólares a cuentas internacionales o vía Wise.' },
      { q: '¿Qué pasa con la situación de seguridad en México?', a: 'La situación varía significativamente por zona. Tulum, Playa del Carmen y Cancún — las zonas turísticas principales — mantienen niveles de seguridad aceptables para residentes y turistas. Los Cabos tiene excelente reputación de seguridad. Bacalar es una zona tranquila y poco desarrollada. Como en cualquier inversión, recomendamos conocer el destino personalmente antes de comprar.', bold: 'Tulum, Playa del Carmen y Cancún' },
    ],
    ctaTitle: '¿La Riviera Maya es tu próximo destino de inversión?',
    ctaDesc: 'Agendá una reunión con nuestro asesor. Te contamos con total transparencia los pro y contra de cada zona y te presentamos los proyectos disponibles este mes.',
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
    subtitle: 'Sin impuestos · Golden Visa · Récord histórico de transacciones',
    regionFilter: 'Medio Oriente', code: 'ae',
    detail: 'Dubai — Downtown · Marina · Palm · Business Bay',
    foco: false,
    badge: { label: 'Sin impuestos', color: '#C9922A' },
    tags: ['0% impuesto a la renta', 'Golden Visa desde USD 205K', 'Retornos 6-9% en USD', '30% más barato que Londres', 'Mercado récord 2025'],
    stat1: { value: '0%', label: 'Impuesto a la renta y ganancias de capital' },
    stat2: { value: '180K', label: 'Transacciones 2025 — récord histórico' },
    stat3: { value: '6-9%', label: 'Rentabilidad bruta anual en USD' },
    whyInvest: 'Dubai ofrece una combinación que ningún otro mercado puede igualar: cero impuestos, residencia por inversión y un mercado en expansión récord. Es el único destino donde el inversor latinoamericano puede comprar una propiedad, obtener residencia de 10 años en un país con cero impuestos a la renta y al mismo tiempo acceder a retornos en dólares del 6% al 9% anual con apreciación sostenida. En 2025, Dubai registró 180.000 transacciones inmobiliarias — el mayor volumen de su historia — impulsado por la llegada masiva de capital de Europa, Rusia, India y América Latina. Con precios todavía un 30% por debajo de Londres y una política de cero impuestos estructural, la demanda sigue creciendo sin señales de reversión.',
    zones: [
      { icon: '🏙️', name: 'Downtown Dubai', desc: 'Zona icónica — Burj Khalifa, Dubai Mall y la Fuente de Dubai. Mayor demanda de alquiler corporativo y turístico de todo el emirato. Alta ocupación todo el año. Rentabilidad 7-9% · Ticket desde USD 400K.' },
      { icon: '⛵', name: 'Dubai Marina', desc: 'Alta rentabilidad — El skyline marino más fotografiado del mundo. Vista al mar, acceso a JBR Beach. Mejor relación precio/rentabilidad del emirato. Rentabilidad 7-8% · Ticket desde USD 300K.' },
      { icon: '🌴', name: 'Palm Jumeirah', desc: 'Lujo premium — La isla artificial más famosa del mundo. Precios premium con la mayor apreciación histórica del emirato. Altísima demanda vacacional de ultra lujo. Rentabilidad 6-8% · Ticket desde USD 600K.' },
      { icon: '💼', name: 'Business Bay', desc: 'Mejor relación precio/renta — Hub corporativo que limita con Downtown. Precios más accesibles con rentabilidades similares gracias a la altísima demanda corporativa. Rentabilidad 8-9% · Ticket desde USD 200K.' },
    ],
    models: [
      { label: 'Compra en pozo (off-plan)', sub: 'Mayor plusvalía', badge: 'Mayor plusvalía', fullDesc: 'Planes 40/60 o 50/50 sin intereses directo con el desarrollador. Ingresás al precio más bajo del ciclo. Máxima apreciación entre la reserva y la entrega.' },
      { label: 'Propiedad terminada', sub: 'Renta inmediata', badge: 'Renta inmediata', fullDesc: 'Comprás unidades listas y empezás a generar ingresos desde el primer mes. Ideal para quienes buscan cash flow inmediato en dólares sin esperar obra.' },
      { label: 'Golden Visa', sub: 'Residencia 10 años', badge: 'Residencia incluida', fullDesc: 'Con inversión desde AED 750.000 (≈ USD 205.000) en propiedad terminada accedés a la Golden Visa. 10 años renovables, incluye familia, sin estadía mínima.' },
      { label: 'Reventa premium', sub: 'Mercado en máximos', badge: 'Retorno rápido', fullDesc: 'Dubai registró récord histórico de transacciones en 2025. El mercado secundario es uno de los más activos del mundo con alta liquidez y compradores internacionales.' },
    ],
    steps: [
      { title: 'Definimos zona y objetivo', desc: '¿Priorizás rentabilidad (Business Bay), lujo (Palm), dinamismo (Marina) o ubicación icónica (Downtown)? ¿Buscás la Golden Visa también?' },
      { title: 'Selección del proyecto', desc: 'Apartamentos en torres premium con financiación directa del desarrollador. Muchos proyectos en Dubai ofrecen planes 40/60 o 50/50 sin intereses.' },
      { title: 'Reserva y pago del transfer fee', desc: 'El único costo impositivo es el 4% de transfer fee (pago único al comprar). Sin impuestos anuales ni sobre alquileres.' },
      { title: 'Escritura en Dubai Land Department', desc: 'El título de propiedad se inscribe en el Dubai Land Department (DLD). El proceso es ágil, transparente y totalmente digital.' },
      { title: 'Golden Visa (si aplica)', desc: 'Con la propiedad registrada a tu nombre podés tramitar la Golden Visa. El proceso tarda entre 2 y 4 semanas. Incluye familia.' },
      { title: 'Gestión de alquiler', desc: 'Te conectamos con property managers locales especializados en alquiler corto y largo plazo. Tu propiedad genera renta sin que estés presente.' },
    ],
    note: 'El único costo impositivo en Dubai es el 4% de transfer fee al momento de la compra. No hay impuesto a la renta, ganancias de capital, alquileres ni propiedad. El dírham está indexado al dólar desde 1997 (AED 3.67 = USD 1) — sin riesgo cambiario. Golden Visa desde USD 205.000 en propiedad terminada, incluye cónyuge, hijos y padres.',
    projects: [
      { icon: '🏙️', name: 'Creek Waters Tower', tags: ['Dubai Creek', 'Off-plan', 'Alquiler permitido', 'Entrega 2027'], price: 'USD 320.000', sub: 'Rentabilidad estimada 9% anual' },
      { icon: '💼', name: 'Business Bay — Torre Premium', tags: ['Business Bay', 'Off-plan', 'Golden Visa aplicable', 'Entrega 2026'], price: 'USD 220.000', sub: '8-9% rentabilidad · Plan 50/50 sin intereses' },
    ],
    faqs: [
      { q: '¿Puede comprar un latinoamericano en Dubai sin ser residente?', a: 'Sí. Dubai permite la propiedad 100% extranjera en las zonas designadas como freehold (que incluyen Downtown, Marina, Palm y Business Bay). No necesitás ser residente ni tener cuenta bancaria local para comprar. Solo el pasaporte y los fondos.' },
      { q: '¿La política de cero impuestos es permanente?', a: 'Dubai introdujo un impuesto corporativo del 9% en 2023 para empresas (no para individuos). El impuesto a la renta personal y a las ganancias de capital sigue siendo cero sin fecha de cambio anunciada. El 4% de transfer fee es el único costo al comprar. No hay impuesto anual sobre la propiedad.', bold: 'cero sin fecha de cambio anunciada' },
      { q: '¿Cómo funciona el dírham frente al dólar?', a: 'El dírham de los EAU (AED) está indexado al dólar desde 1997 a una tasa fija de AED 3.67 por USD. Esto significa que invertir en Dubai es prácticamente invertir en dólares — sin riesgo cambiario. La única variación es con otras monedas (pesos, reales, euros).', bold: 'indexado al dólar desde 1997' },
      { q: '¿Qué pasa con la Golden Visa si vendo la propiedad?', a: 'Si vendés la propiedad que generó la Golden Visa, la visa queda suspendida hasta que la reemplaces con otra inversión inmobiliaria equivalente o superior. La Golden Visa no es un derecho permanente — está vinculada a la inversión. Al vender, tenés tiempo para reinvertir antes de que caduque.' },
      { q: '¿Cuánto tarda el proceso completo de compra?', a: 'El proceso de compra en Dubai es notablemente ágil: desde la firma del contrato hasta la inscripción en el DLD (Dubai Land Department) tarda entre 2 y 4 semanas. La Golden Visa, si aplica, se tramita en 2 a 4 semanas adicionales. Todo el proceso puede gestionarse de forma remota con poder notarial.', bold: '2 y 4 semanas' },
    ],
    ctaTitle: '¿Dubai es tu próximo destino de inversión?',
    ctaDesc: 'Agendá una reunión con nuestro asesor. Te presentamos los proyectos disponibles en las 4 zonas y te explicamos cómo funciona la Golden Visa si te interesa ese camino.',
  },
  {
    name: 'España',
    subtitle: 'Europa en tu idioma, para quien ya la siente como propia',
    regionFilter: 'Europa', code: 'es',
    detail: 'Alicante · Málaga · Costa del Sol',
    foco: false,
    badge: { label: 'Residencia EU', color: '#3b82f6' },
    tags: ['Uso personal + vacaciones', 'Idioma y cultura familiar', 'Residencia europea disponible', 'Precios accesibles vs. Europa', 'Conexión directa con Argentina'],
    stat1: { value: 'EUR 2.100', label: 'M² promedio Alicante — accesible vs. Europa' },
    stat2: { value: '+12%', label: 'Valorización Málaga 2023-2025' },
    stat3: { value: 'NIE', label: 'Único requisito para comprar — se tramita en Argentina' },
    whyInvest: 'Seamos directos: España no es el mercado de mayor rentabilidad de nuestra cartera. Los impuestos sobre alquileres son reales, el proceso burocrático es más lento que Dubai o Brasil, y los retornos puramente financieros son moderados. Pero tiene algo que ningún otro mercado puede ofrecer: Europa, en tu idioma, con una cultura que ya conocés, con vuelos directos desde Buenos Aires y un vínculo histórico que hace que instalarse allá se sienta menos extranjero que en cualquier otro destino. El perfil de quien invierte en España no busca principalmente renta — busca una propiedad para usar en vacaciones, en períodos más largos, o eventualmente como base para vivir en Europa. La renta del alquiler cubre los gastos fijos, pero el valor principal es el uso personal y la opción de residencia europea.',
    zones: [
      { icon: '🌊', name: 'Alicante — Costa Blanca', desc: 'Zona de foco. 300 días de sol al año, playas de primer nivel, comunidad argentina importante. EUR 2.100/m² promedio — el precio de entrada más accesible del Mediterráneo. Barrios: Playa de San Juan, Centro histórico, Albufereta, El Campello, Torrevieja.' },
      { icon: '🌆', name: 'Málaga y Costa del Sol', desc: 'Zona de foco. La ciudad más dinámica del sur de Europa. +12% valorización 2023-2025. EUR 3.200/m² promedio. Costa del Sol: Marbella, Nerja, Torremolinos, Fuengirola — mayor turismo de lujo de España.' },
    ],
    models: [
      { label: 'Uso personal + vacaciones', sub: 'Más popular', badge: 'Más popular', fullDesc: 'Comprás tu propiedad para pasar temporadas en España. La tenés disponible cuando viajás a Europa. La renta que generás cuando no estás puede cubrir los gastos fijos (expensas, impuesto de bienes, seguro).' },
      { label: 'Alquiler turístico', sub: 'Renta moderada', badge: 'Renta moderada', fullDesc: 'En Alicante y la Costa del Sol hay alta demanda de alquiler vacacional de turistas del norte de Europa. Plataformas como Airbnb y Booking tienen buena penetración. Rentabilidades del 4-6% bruto anual según zona.' },
      { label: 'Alquiler largo plazo', sub: 'Renta estable', badge: 'Renta estable', fullDesc: 'Contrato de alquiler de 1 año o más con inquilino estable. Menor rentabilidad que el turístico pero más predecible y con menor carga de gestión. Más conveniente para quien no quiere administrar activamente.' },
      { label: 'Base para vivir en Europa', sub: 'Largo plazo', badge: 'Largo plazo', fullDesc: 'España como plataforma de residencia europea. Mientras no estás, la propiedad genera renta. Cuando te instalás, tenés tu casa. El camino más habitual del argentino que se muda a Europa.' },
    ],
    steps: [
      { title: 'NIE y documentación', desc: 'Tramitás el NIE (Número de Identidad Extranjero) en el Consulado español en Buenos Aires. Es el único requisito junto con tu pasaporte para comprar en España.' },
      { title: 'Búsqueda y oferta', desc: 'Análisis de la propiedad, negociación del precio y verificación registral. Te presentamos las opciones en Alicante y Málaga según tu perfil y presupuesto.' },
      { title: 'Firma de arras o señal', desc: 'Contrato privado de reserva con el 10% del precio. Si el comprador se arrepiente pierde la señal. Si el vendedor, la devuelve por duplicado.' },
      { title: 'Escritura pública ante notario', desc: 'Firma ante notario español con todas las partes o mediante poder notarial apostillado desde Argentina.' },
      { title: 'Impuestos al comprar', desc: 'IVA del 10% para obra nueva o ITP del 6-10% para segunda mano según comunidad autónoma. Más AJD (Actos Jurídicos Documentados) del 0.5-1.5%.' },
      { title: 'Registro de la propiedad', desc: 'Inscripción en el Registro de la Propiedad. El proceso completo desde la firma de arras hasta el registro final tarda entre 4 y 8 semanas.' },
    ],
    note: 'España tiene impuesto a la renta del alquiler para no residentes (IRNR) del 19-24% según tratado con el país de origen. El proceso incluye más pasos que otros mercados (NIE, notario, registro). La Golden Visa inmobiliaria fue suspendida en 2024 para nuevas solicitudes — la alternativa vigente es la Residencia No Lucrativa (EUR 2.400/mes ingresos propios, 1-3 meses de trámite). Te asesoramos con total transparencia sobre todo esto antes de avanzar.',
    projects: [
      { icon: '🌊', name: 'Alicante — Playa de San Juan', tags: ['Alicante', 'Zona de foco', 'Alquiler turístico', 'A estrenar'], price: 'EUR 180.000', sub: 'Rentabilidad 4-6% bruto anual' },
      { icon: '🌆', name: 'Málaga Centro — Soho', tags: ['Málaga', 'Zona de foco', 'Nómadas digitales', 'Alta valorización'], price: 'EUR 280.000', sub: '+12% valorización 2023-2025' },
    ],
    faqs: [
      { q: '¿Puede un argentino comprar propiedad en España sin ser residente?', a: 'Sí. Un argentino puede comprar en España con su pasaporte y el NIE (Número de Identidad Extranjero). No necesitás ser residente ni tener cuenta bancaria española para iniciar el proceso — aunque la cuenta facilita los pagos. El NIE se tramita en el Consulado español en Buenos Aires.' },
      { q: '¿Cuánto paga un argentino de impuestos si alquila su propiedad en España?', a: 'Un no residente tributa el IRNR (Impuesto sobre la Renta de No Residentes). Para residentes de países con convenio de doble imposición con España (Argentina lo tiene), la tasa es del 19% sobre la renta neta. Es un impuesto real a tener en cuenta al calcular la rentabilidad.', bold: 'IRNR (Impuesto sobre la Renta de No Residentes)' },
      { q: '¿Por qué Alicante y no Barcelona o Madrid?', a: 'Tres razones: precio del m² notablemente más accesible, menor presión regulatoria sobre el alquiler turístico y calidad de vida similar con menos aglomeración. Barcelona tiene restricciones muy estrictas al alquiler vacacional. Madrid tiene precios elevados para los retornos que ofrece. Alicante es el punto de entrada con mejor ecuación calidad/precio del Mediterráneo.' },
      { q: '¿La Golden Visa de España sigue vigente?', a: 'La Golden Visa inmobiliaria fue suspendida por el gobierno español en 2024 para nuevas solicitudes. Las visas ya otorgadas antes de esa fecha siguen vigentes hasta su vencimiento. Para nuevas solicitudes, las alternativas son inversión en bonos o empresas desde EUR 1.000.000, o la Residencia No Lucrativa que es mucho más accesible para el perfil habitual.', bold: 'Residencia No Lucrativa' },
      { q: '¿Es necesario viajar a España para comprar?', a: 'No es obligatorio. Podés otorgar un poder notarial apostillado desde Argentina a un representante legal en España para que firme en tu nombre. Este es el método más habitual para argentinos que compran en España sin estar presentes. El NIE también puede tramitarse desde Argentina en el Consulado.', bold: 'poder notarial apostillado' },
    ],
    ctaTitle: '¿España es tu próximo destino?',
    ctaDesc: 'Agendá una reunión con nuestro asesor. Te explicamos el proceso completo para comprar siendo argentino, las opciones de residencia vigentes y los proyectos disponibles en Alicante y Málaga.',
  },
  {
    name: 'Italia',
    subtitle: 'Flipping para renta vacacional — el modelo Italia de Lion GSC',
    regionFilter: 'Europa', code: 'it',
    detail: 'Costa Amalfitana · Ragusa · Flipping para renta',
    foco: false,
    badge: { label: 'Flipping + Airbnb', color: '#eab308' },
    tags: ['Flipping + Airbnb', 'Patrimonio UNESCO', 'Tarifa EUR 300-600/noche', 'Propiedades históricas desde EUR 30K', 'Temporada alta 8 meses'],
    stat1: { value: 'EUR 30K', label: 'Propiedades históricas para reformar desde' },
    stat2: { value: 'EUR 400', label: 'Tarifa promedio por noche Airbnb Costa Amalfitana' },
    stat3: { value: '+150%', label: 'Plusvalía estimada post-reforma en zonas históricas' },
    whyInvest: 'Italia tiene algo único: propiedades históricas en dos de los destinos más fotografiados y visitados del mundo, a precios que no reflejan en absoluto su potencial turístico. Una casa antigua en el centro de Ragusa Ibla o en las colinas sobre la Costa Amalfitana puede comprarse por EUR 30.000-80.000 en estado de reforma, reformarse por EUR 40.000-80.000 más, y generar EUR 300-600 por noche en Airbnb durante 8 meses al año. El modelo no es vender propiedades: es acompañar la operación completa — identificación, compra, reforma con arquitectos locales, habilitación turística (CIR) y puesta en marcha del alquiler vacacional. Un negocio diferente al resto de la cartera, con mayor complejidad operativa pero también mayor potencial de retorno.',
    zones: [
      { icon: '🌊', name: 'Costa Amalfitana — Campania', desc: 'Zona activa · Patrimonio UNESCO. Positano, Amalfi, Ravello y Praiano. Temporada alta (mayo-octubre) + media. EUR 300-600/noche · 85%+ ocupación · Inversión total EUR 90-220K · Plusvalía 150-300%.' },
      { icon: '🏛️', name: 'Ragusa Ibla — Sicilia', desc: 'Patrimonio UNESCO · Valle del Noto. Inspector Montalbano. Precios todavía bajos vs. potencial turístico. EUR 150-350/noche · Compra EUR 30-80K · Reforma EUR 40-70K · Plusvalía 150-200%.' },
    ],
    models: [
      { label: '1. Identificamos', sub: 'EUR 30K-120K compra', badge: 'Paso 1', fullDesc: 'Propiedad histórica en zona turística premium con potencial de reforma. Precio de compra: EUR 30K-80K en Ragusa, EUR 40K-120K en Costa Amalfitana.' },
      { label: '2. Reformamos', sub: 'EUR 40K-100K · 6-12 meses', badge: 'Paso 2', fullDesc: 'Reforma integral con arquitectos y constructores locales. Presupuesto EUR 40K-80K en Ragusa, EUR 50K-100K en Costa Amalfitana. Plazo: 6-12 meses.' },
      { label: '3. Habilitamos', sub: 'CIR + Airbnb + registro', badge: 'Paso 3', fullDesc: 'Licencia turística italiana (CIR — Codice Identificativo di Riferimento), apertura Airbnb y registro fiscal. Obligatorio desde 2024. Gestión 100% local.' },
      { label: '4. Rentamos', sub: 'EUR 300-600/noche · 8 meses', badge: 'Paso 4', fullDesc: 'EUR 300-600 por noche en temporada alta. 8 meses de temporada activa al año. Operadora local gestiona sin que estés presente.' },
    ],
    steps: [
      { title: 'Identificamos la propiedad', desc: 'Seleccionamos propiedades históricas en zona turística premium con potencial de reforma. Precio de compra objetivo: EUR 30K-120K según zona.' },
      { title: 'Reformamos', desc: 'Reforma integral con arquitectos y constructores locales. EUR 40K-100K · Plazo 6-12 meses. Arquitectos locales, artesanos de la región.' },
      { title: 'Habilitamos el CIR', desc: 'Tramitamos la licencia turística italiana (CIR) — obligatoria para publicar en Airbnb desde 2024. Apertura del listado y registro fiscal.' },
      { title: 'Rentamos por Airbnb', desc: 'EUR 150-600/noche según zona · 8 meses de temporada activa · Gestión local sin que tengas que estar presente.' },
    ],
    note: 'Impuesto: 21% de cedolare secca sobre ingresos brutos de alquiler turístico (régimen simplificado, no se declara en IRPEF). Argentina e Italia tienen convenio de doble imposición. El CIR (Codice Identificativo di Riferimento) es obligatorio para publicar en Airbnb desde 2024 — lo tramitamos nosotros. Inversión total (compra + reforma): EUR 70K-220K según propiedad y zona.',
    projects: [
      { icon: '🌊', name: 'Positano — Casa histórica para reforma', tags: ['Costa Amalfitana', 'Flipping', 'Airbnb', 'UNESCO'], price: 'EUR 80.000', sub: 'Reforma EUR 70K · Renta EUR 300-600/noche' },
      { icon: '🏛️', name: 'Ragusa Ibla — Palazzo barroco', tags: ['Ragusa · Sicilia', 'Flipping', 'Airbnb', 'UNESCO'], price: 'EUR 45.000', sub: 'Reforma EUR 55K · Renta EUR 150-350/noche' },
    ],
    faqs: [
      { q: '¿Cuánto tarda y cuánto cuesta una reforma completa en Italia?', a: 'Una reforma integral de una propiedad histórica de 60-80 m² en Ragusa tarda entre 8 y 14 meses y cuesta entre EUR 50.000 y EUR 90.000 dependiendo del estado original y las terminaciones elegidas. En la Costa Amalfitana los costos son entre un 20% y un 40% más altos por la complejidad logística del terreno.' },
      { q: '¿Qué rentabilidad se puede esperar en Airbnb en la Costa Amalfitana?', a: 'Una propiedad de 2 habitaciones bien reformada en Positano o Praiano puede generar entre EUR 80.000 y EUR 130.000 al año en ingresos brutos de Airbnb con una ocupación del 75-85% en temporada alta (mayo-octubre) a EUR 400-600 por noche. Los costos de gestión (property manager, limpieza, servicios) representan el 25-35% del ingreso bruto.', bold: 'EUR 80.000 y EUR 130.000 al año' },
      { q: '¿Qué impuestos paga un argentino sobre la renta del alquiler en Italia?', a: 'Un no residente tributa el 21% de cedolare secca (impuesto especial para alquileres turísticos) sobre los ingresos brutos del alquiler. Es un régimen simplificado — pagás el 21% y no tenés que declarar esos ingresos en el IRPEF (impuesto a la renta ordinario). Argentina e Italia tienen convenio de doble imposición.', bold: '21% de cedolare secca' },
      { q: '¿Qué es el CIR y por qué es obligatorio para Airbnb en Italia?', a: 'El CIR (Codice Identificativo di Riferimento) es el código de registro turístico obligatorio para publicar en Airbnb en Italia desde 2024. Cada propiedad en alquiler turístico debe tenerlo y mostrarlo en todos los anuncios. Se obtiene en el municipio local y requiere que la propiedad cumpla con los requisitos mínimos de habitabilidad y seguridad. Sin CIR, Airbnb bloquea o elimina el listado.', bold: 'CIR (Codice Identificativo di Riferimento)' },
      { q: '¿Las casas a 1 euro en Sicilia son una oportunidad real?', a: 'Son reales pero requieren compromiso: hay que presentar un plan de reforma y ejecutarlo en 3 años, depositar una garantía de EUR 5.000-10.000 y encargarse de todos los trámites municipales. La propiedad en sí es casi gratuita — el costo real es la reforma (EUR 40.000-80.000) y la gestión del proceso. Para quien tiene el capital y la paciencia, el retorno puede ser excepcional.', bold: 'capital y la paciencia' },
    ],
    ctaTitle: '¿Italia es tu próxima operación de flipping?',
    ctaDesc: 'Agendá una reunión con nuestro asesor. Te presentamos las propiedades identificadas en Costa Amalfitana y Ragusa, los costos de reforma estimados y la proyección de ingresos Airbnb.',
    ctaMapLabel: '🏠 Ver propiedades disponibles',
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
                  <p style={{ fontSize: 10, fontWeight: 700, color: '#C9922A', letterSpacing: '0.12em', marginBottom: 4 }}>MODELOS DE INVERSIÓN</p>
                  {mkt.models[0]?.fullDesc && (
                    <p style={{ fontSize: 14, fontWeight: 800, color: '#efefef', marginBottom: 12, marginTop: 6 }}>
                      Cómo invertir en {mkt.name} desde Argentina
                    </p>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: mkt.models[0]?.fullDesc ? '1fr 1fr' : 'repeat(auto-fit, minmax(110px, 1fr))', gap: 10 }}>
                    {mkt.models.map((model, i) => (
                      <div key={i} style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 10, padding: '14px 16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: model.fullDesc ? 8 : 0 }}>
                          <p style={{ fontSize: 13, fontWeight: 800, color: '#efefef', margin: 0, flexGrow: 1 }}>{model.label}</p>
                          {model.badge && (
                            <span style={{ fontSize: 9, fontWeight: 700, color: '#C9922A', background: 'rgba(201,146,42,0.12)', border: '1px solid rgba(201,146,42,0.3)', borderRadius: 8, padding: '2px 7px', whiteSpace: 'nowrap', flexShrink: 0 }}>{model.badge}</span>
                          )}
                        </div>
                        {model.fullDesc ? (
                          <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.45)', lineHeight: 1.65, margin: 0 }}>{model.fullDesc}</p>
                        ) : (
                          <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.35)', margin: '4px 0 0' }}>{model.sub}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proceso paso a paso — solo si el mercado tiene steps */}
                {mkt.steps && mkt.steps.length > 0 && (
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#C9922A', letterSpacing: '0.12em', marginBottom: 4 }}>CÓMO EMPEZAR</p>
                    <p style={{ fontSize: 14, fontWeight: 800, color: '#efefef', marginBottom: 14, marginTop: 6 }}>El proceso paso a paso</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {mkt.steps.map((step, i) => (
                        <div key={i} style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '14px 18px', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,146,42,0.15)', border: '1px solid rgba(201,146,42,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#C9922A', flexShrink: 0 }}>{i + 1}</div>
                          <div>
                            <p style={{ fontSize: 13, fontWeight: 700, color: '#efefef', margin: '0 0 4px' }}>{step.title}</p>
                            <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.45)', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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

                {/* FAQs — solo si el mercado tiene preguntas frecuentes */}
                {mkt.faqs && mkt.faqs.length > 0 && (
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#C9922A', letterSpacing: '0.12em', marginBottom: 4 }}>
                      PREGUNTAS FRECUENTES — {mkt.name.toUpperCase()}
                    </p>
                    <p style={{ fontSize: 20, fontWeight: 800, color: '#efefef', marginBottom: 20, marginTop: 6 }}>Lo que más nos preguntan</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {mkt.faqs.map((faq, i) => {
                        const parts = faq.bold ? faq.a.split(faq.bold) : null;
                        return (
                          <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '18px 0' }}>
                            <p style={{ fontSize: 13, fontWeight: 700, color: '#efefef', margin: '0 0 8px' }}>{faq.q}</p>
                            <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.55)', lineHeight: 1.8, margin: 0 }}>
                              {parts ? (
                                <>{parts[0]}<strong style={{ color: 'rgba(239,239,239,0.85)', fontWeight: 700 }}>{faq.bold}</strong>{parts[1]}</>
                              ) : faq.a}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA especial por mercado */}
                    <div style={{ marginTop: 24, background: 'linear-gradient(135deg, #0d1a2e 0%, #131326 100%)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 14, padding: '32px 28px', textAlign: 'center' }}>
                      <div style={{ fontSize: 36, marginBottom: 12 }}>📅</div>
                      <p style={{ fontSize: 20, fontWeight: 800, color: '#efefef', margin: '0 0 10px' }}>{mkt.ctaTitle ?? `¿Querés invertir en ${mkt.name}?`}</p>
                      <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.5)', lineHeight: 1.75, margin: '0 0 24px', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
                        {mkt.ctaDesc ?? `Agendá una reunión con nuestro asesor especializado en el mercado de ${mkt.name}. Te presentamos las opciones más adecuadas según tu presupuesto y objetivo.`}
                      </p>
                      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                          href="/contacto"
                          style={{ background: '#C9922A', color: '#101010', padding: '12px 22px', fontSize: 13, fontWeight: 800, borderRadius: 8, textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-block' }}
                        >
                          Agendar reunión por Zoom →
                        </a>
                        <a
                          href="https://wa.me/14075551234"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ background: 'rgba(37,211,102,0.12)', color: '#25d366', border: '1.5px solid rgba(37,211,102,0.3)', padding: '12px 22px', fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: 'none', display: 'inline-block' }}
                        >
                          💬 WhatsApp
                        </a>
                        {!mkt.ctaHideMap && (
                          <a
                            href="#proyectos"
                            style={{ background: 'rgba(99,102,241,0.1)', color: 'rgba(239,239,239,0.8)', border: '1.5px solid rgba(99,102,241,0.25)', padding: '12px 22px', fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: 'none', display: 'inline-block' }}
                          >
                            {mkt.ctaMapLabel ?? '🗺️ Ver proyectos en el mapa'}
                          </a>
                        )}
                      </div>
                    </div>
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
