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
                            🗺️ Ver proyectos en el mapa
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
