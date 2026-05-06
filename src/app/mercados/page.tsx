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
