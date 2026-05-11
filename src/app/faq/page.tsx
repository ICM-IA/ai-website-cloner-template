'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import React from 'react';

// ── Data ────────────────────────────────────────────────────────────────────

type Tag = { label: string; color: string };
type FaqItem = { q: string; a: string; tags: Tag[] };
type Category = { id: string; icon: string; name: string; faqs: FaqItem[] };

const categories: Category[] = [
  {
    id: 'primeros-pasos',
    icon: '🚀',
    name: 'Primeros pasos',
    faqs: [
      {
        q: '¿Cuánto capital necesito para empezar a invertir?',
        a: 'Depende del mercado. En **Brasil (Nordeste)** podés ingresar desde **USD 7.142** con el primer pago de reserva y continuar con cuotas de USD 335/mes. En **Santa Catarina** el ingreso mínimo ronda los USD 16.000. En **Estados Unidos** el ticket mínimo es USD 200.000 con un ingreso del 50% en dos cuotas durante la obra. En todos los casos no necesitás tener el total disponible — la propiedad se financia en cuotas durante y después de la obra.',
        tags: [
          { label: '🇧🇷 Brasil desde USD 7K', color: '#22c55e' },
          { label: '🇺🇸 USA desde USD 200K', color: '#3b82f6' },
        ],
      },
      {
        q: '¿Por dónde empiezo si nunca invertí en el exterior?',
        a: 'El primer paso es una **reunión de 30 minutos por Zoom** con uno de nuestros asesores. Ahí definimos juntos tu objetivo (renta, plusvalía o diversificación), tu presupuesto y el mercado que mejor se adapta a tu situación. A partir de esa charla te presentamos las oportunidades concretas con números reales — sin compromiso ni costos. Todo el proceso posterior lo guiamos nosotros paso a paso.',
        tags: [{ label: 'Todos los mercados', color: '#C9922A' }],
      },
      {
        q: '¿Necesito viajar al país donde compro?',
        a: '**No.** El proceso completo se realiza de forma remota. En Brasil, con tu pasaporte y CPF (que se obtiene online o en el consulado) podés firmar el contrato y hacer todos los pagos desde Argentina o Uruguay. En USA los desarrolladores con los que trabajamos aceptan firmas digitales y transferencias internacionales. Nunca es obligatorio viajar para cerrar la compra — aunque sí podés hacerlo si querés conocer el proyecto en persona.',
        tags: [{ label: 'Todos los mercados', color: '#C9922A' }],
      },
      {
        q: '¿Puedo invertir siendo argentino o uruguayo sin residencia en el exterior?',
        a: '**Sí, completamente legal.** Tanto Brasil como Estados Unidos permiten que extranjeros no residentes compren propiedades con total libertad. No necesitás visa especial, residencia ni cuenta bancaria local para iniciar el proceso. Solo tu documento de identidad (pasaporte) y seguir el proceso de documentación que te guiamos nosotros en cada caso.',
        tags: [
          { label: '🇧🇷 Brasil', color: '#22c55e' },
          { label: '🇺🇸 USA', color: '#3b82f6' },
        ],
      },
      {
        q: '¿Qué documentos necesito para comenzar el proceso?',
        a: 'Para **Brasil**: pasaporte vigente y CPF (número fiscal brasileño que se tramita gratis online o en el consulado — te ayudamos). Para **USA**: pasaporte con visa de turista B-1/B-2, extractos bancarios de los últimos 6 meses y carta de referencia de tu banco. En ambos casos comenzamos con el pasaporte y vamos gestionando el resto durante el proceso, sin que necesitás tenerlo todo desde el primer día.',
        tags: [
          { label: '🇧🇷 Brasil', color: '#22c55e' },
          { label: '🇺🇸 USA', color: '#3b82f6' },
        ],
      },
      {
        q: '¿Cuánto tiempo tarda todo el proceso de compra?',
        a: 'Desde la reunión inicial hasta la firma del contrato, el proceso tarda entre **2 y 4 semanas** dependiendo del mercado. La reserva de la unidad se puede hacer en 48 horas. La obtención del CPF en Brasil tarda entre 1 y 5 días hábiles. La firma del contrato en USA con verificación legal puede tomar entre 1 y 3 semanas. La entrega de la propiedad depende del estado de la obra: entre 1 y 4 años según el proyecto elegido.',
        tags: [{ label: 'Todos los mercados', color: '#C9922A' }],
      },
      {
        q: '¿Puedo invertir a nombre de otra persona o empresa?',
        a: 'Sí. En **USA** es muy común comprar a través de una LLC (empresa de responsabilidad limitada), lo que ofrece ventajas fiscales y protección patrimonial. Un extranjero no residente puede formar una LLC en Florida. En **Brasil** también es posible comprar a nombre de una empresa constituida localmente o a nombre de terceros con poder notarial. Analizamos cuál es la estructura más conveniente para tu caso en la primera reunión.',
        tags: [
          { label: '🇺🇸 USA — LLC', color: '#3b82f6' },
          { label: '🇧🇷 Brasil', color: '#22c55e' },
        ],
      },
    ],
  },
  {
    id: 'financiacion-pagos',
    icon: '💳',
    name: 'Financiación y pagos',
    faqs: [
      {
        q: '¿Cómo funciona el plan de cuotas en Brasil?',
        a: 'En Brasil los desarrolladores financian directamente la compra sin necesidad de banco: pagás una reserva inicial, cuotas mensuales durante la obra y el saldo restante a la entrega. Algunos proyectos ofrecen hasta **10 años de financiación** posterior a la entrega. No necesitás historial crediticio local ni aval bancario. El contrato es directamente con el desarrollador.',
        tags: [{ label: '🇧🇷 Brasil — hasta 10 años', color: '#22c55e' }],
      },
      {
        q: '¿Qué pasa si no puedo pagar una cuota?',
        a: 'En Brasil, los contratos de los desarrolladores con los que trabajamos contemplan un período de gracia de **30 a 60 días** antes de aplicar penalidades. Pasado ese plazo, se aplica un interés de mora y multa según lo estipulado en el contrato (generalmente entre el 2% y el 5%). En casos de dificultad sostenida, es posible renegociar el plan de pagos directamente con el desarrollador o incluso vender la posición contractual a un tercero. Te acompañamos en cualquier gestión que necesites.',
        tags: [
          { label: '🇧🇷 Brasil', color: '#22c55e' },
          { label: '🇺🇸 USA', color: '#3b82f6' },
        ],
      },
      {
        q: '¿Puedo acceder a un crédito hipotecario siendo extranjero en USA?',
        a: '**Sí.** Hay bancos e instituciones financieras en Florida que otorgan hipotecas a extranjeros no residentes. Los requisitos básicos son: pasaporte con visa B-1/B-2, entre el 30% y 50% de entrada según el tipo de propiedad, extractos bancarios de los últimos 6 meses y carta de referencia de tu banco. Las tasas actuales rondan el **6.0% - 6.5% a 30 años** — una mejora sustancial frente al 7.5%+ de 2023-2024. Te acompañamos en todo el proceso de calificación.',
        tags: [{ label: '🇺🇸 USA — 30 años', color: '#3b82f6' }],
      },
    ],
  },
  {
    id: 'legal-fiscal',
    icon: '⚖️',
    name: 'Legal y fiscal',
    faqs: [
      {
        q: '¿Qué es el CPF y cómo lo obtengo para comprar en Brasil?',
        a: 'El **CPF (Cadastro de Pessoas Físicas)** es el número de identificación fiscal brasileño — equivalente al CUIL/RUT. Es obligatorio para firmar cualquier contrato inmobiliario en Brasil. Podés obtenerlo de tres formas: online a través del sitio oficial de la Receita Federal, en el Consulado de Brasil más cercano a tu ciudad, o en agencias bancarias Banco do Brasil. El trámite es **gratuito** y tarda entre 1 y 5 días hábiles. Te guiamos en cada paso del proceso.',
        tags: [{ label: '🇧🇷 Solo Brasil — gratuito', color: '#22c55e' }],
      },
      {
        q: '¿Conviene comprar a nombre personal o a través de una empresa?',
        a: 'Depende de tu objetivo y situación particular. Comprar **a nombre personal** es más simple y económico inicialmente. Comprar a través de una **empresa o LLC** ofrece protección patrimonial, ventajas fiscales (evitar doble impuesto en USA, reducir impuestos sucesorios), mayor privacidad y flexibilidad para agregar socios. En USA recomendamos siempre analizar la opción de LLC. En Brasil también existe la posibilidad de estructuras societarias. Evaluamos tu caso en la primera reunión sin costo.',
        tags: [
          { label: '🇺🇸 USA — LLC recomendada', color: '#3b82f6' },
          { label: '🇧🇷 Brasil', color: '#22c55e' },
        ],
      },
      {
        q: '¿Qué es una LLC y para qué sirve en USA?',
        a: 'Una **LLC (Limited Liability Company)** es una empresa de responsabilidad limitada que podés constituir en Florida como extranjero no residente. Tiene tres ventajas clave: (1) **protección patrimonial** — separa tu patrimonio personal de la propiedad; (2) **ventajas fiscales** — permite optimizar la carga impositiva y evitar la retención FIRPTA en la venta; (3) **privacidad** — el propietario registral es la empresa, no tu nombre personal. El costo de constitución parte desde USD 400 y el proceso toma 3-5 días hábiles.',
        tags: [{ label: '🇺🇸 Solo USA — desde USD 400', color: '#3b82f6' }],
      },
    ],
  },
  {
    id: 'renta-rentabilidad',
    icon: '📊',
    name: 'Renta y rentabilidad',
    faqs: [
      {
        q: '¿Quién administra el alquiler si no estoy presente?',
        a: 'Te conectamos con **administradoras locales especializadas** en cada mercado. En Orlando y Miami hay empresas que gestionan el alquiler turístico en plataformas como Airbnb y VRBO, cobran el pago, realizan el check-in/check-out, la limpieza y el mantenimiento. En Brasil también existen operadoras de alquiler por temporada, especialmente en Santa Catarina y el Nordeste. La comisión de administración suele ser entre el 20% y el 30% del ingreso bruto de alquiler. Vos recibís el neto directamente en tu cuenta.',
        tags: [{ label: 'Todos los mercados', color: '#C9922A' }],
      },
      {
        q: '¿Cómo cobro los ingresos del alquiler desde mi país?',
        a: 'En **USA** los ingresos se acreditan en la cuenta bancaria americana de tu LLC o en una cuenta personal. Desde ahí podés transferir al exterior con relativa facilidad. En **Brasil** los ingresos se depositan en una cuenta bancaria local (podés abrir una cuenta de no-residente en bancos como Nubank o Banco do Brasil). Las transferencias internacionales desde Brasil al exterior están reguladas pero son legales — te asesoramos sobre el método más eficiente según tu caso y país de residencia.',
        tags: [
          { label: '🇧🇷 Brasil', color: '#22c55e' },
          { label: '🇺🇸 USA', color: '#3b82f6' },
        ],
      },
    ],
  },
  {
    id: 'seguridad-riesgos',
    icon: '🛡️',
    name: 'Seguridad y riesgos',
    faqs: [
      {
        q: '¿Qué pasa si el desarrollador no termina la obra?',
        a: 'En **Brasil**, todos los proyectos que presentamos tienen el **patrimônio de afetação** — un mecanismo legal que separa los fondos del proyecto del resto de los activos del desarrollador, protegiendo tu dinero ante una quiebra. Además trabajamos solo con desarrolladoras con trayectoria comprobada. En **USA**, los contratos de pre-construcción tienen cláusulas de protección al comprador: si el desarrollador incumple, se devuelve el depósito con intereses. Ambos mercados tienen marcos legales sólidos para proteger al inversor.',
        tags: [
          { label: '🇧🇷 Patrimônio de afetação', color: '#22c55e' },
          { label: '🇺🇸 Protección contractual', color: '#3b82f6' },
        ],
      },
      {
        q: '¿Es seguro invertir en Brasil siendo extranjero?',
        a: '**Sí.** Brasil tiene un sistema registral inmobiliario sólido — al comprar una propiedad, tu nombre queda inscripto en el Registro de Imóveis (equivalente al Registro de la Propiedad), lo que te da plena titularidad legal. Los contratos están regulados por el Código Civil brasileño y el Código de Defesa do Consumidor, que protege fuertemente al comprador en proyectos de pre-construcción. Miles de inversores argentinos y uruguayos compran en Brasil anualmente sin inconvenientes, especialmente en Santa Catarina y el Nordeste.',
        tags: [{ label: '🇧🇷 Solo Brasil', color: '#22c55e' }],
      },
      {
        q: '¿Qué garantías tengo sobre mi inversión?',
        a: 'Las garantías varían por mercado. En **USA**: título de propiedad inscripto, posibilidad de seguro de título, marco legal transparente y acceso a crédito hipotecario respaldado. En **Brasil**: escritura pública inscripta en el Registro de Imóveis, patrimônio de afetação en proyectos en pozo, y contratos regulados por ley. En ambos casos Lion GSC te acompaña con asesoramiento jurídico local de profesionales licenciados en cada país. Nunca trabajamos con desarrolladores sin trayectoria verificada.',
        tags: [{ label: 'Todos los mercados', color: '#C9922A' }],
      },
    ],
  },
  {
    id: 'sobre-lion-gsc',
    icon: '🦁',
    name: 'Sobre Lion GSC',
    faqs: [
      {
        q: '¿Qué pasa después de que compro? ¿Me siguen acompañando?',
        a: '**Sí, el servicio no termina con la firma.** Después de la compra te mantenemos informado sobre el avance de la obra, coordinamos con la administradora de alquiler, te avisamos ante cualquier novedad relevante del proyecto y estamos disponibles para cualquier consulta. Si en algún momento querés vender la propiedad, también te acompañamos en ese proceso. Nuestra relación con el cliente es de largo plazo — muchos de nuestros inversores ya tienen 2 o 3 propiedades con nosotros.',
        tags: [{ label: 'Todos los mercados', color: '#C9922A' }],
      },
      {
        q: '¿Tienen casos reales de clientes que pueda conocer?',
        a: '**Sí.** Contamos con más de 500 inversores asesorados en los últimos 10 años, con casos reales en Brasil, USA, Argentina y otros mercados. Tenemos reseñas verificadas en Google con calificación de **5.0 sobre 5.0** (28 reseñas). En nuestra reunión inicial podemos compartirte casos concretos — sin datos personales de los clientes, pero con los números reales de cada operación — para que tengas una referencia clara de lo que es posible según tu perfil y presupuesto.',
        tags: [{ label: '500+ inversores · 5.0 ★ Google', color: '#C9922A' }],
      },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function parseBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} style={{ color: '#efefef', fontWeight: 700 }}>{part.slice(2, -2)}</strong>
      : part
  );
}

// ── Component ────────────────────────────────────────────────────────────────

export default function FaqPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('primeros-pasos');
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    const all = new Set<string>();
    categories.forEach(cat => cat.faqs.forEach((_, i) => all.add(`${cat.id}-${i}`)));
    return all;
  });

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const toggleItem = useCallback((id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const goToCategory = useCallback((id: string) => {
    setActiveCategory(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const q = search.toLowerCase();
  const visibleCategories = useMemo(() =>
    categories.map(cat => ({
      ...cat,
      faqs: q
        ? cat.faqs.filter(faq => faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q))
        : cat.faqs,
    })).filter(cat => cat.faqs.length > 0),
  [q]);

  return (
    <main style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#101010', minHeight: '100vh', paddingBottom: 80 }}>

      {/* ── Header ── */}
      <section style={{ background: 'linear-gradient(160deg, #0a1428 0%, #0d0d0d 100%)', padding: '72px 32px 56px' }}>
        <div style={{ maxWidth: 680 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#C9922A', display: 'inline-block' }} />
            PREGUNTAS FRECUENTES
          </p>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#efefef', lineHeight: 1.12, marginBottom: 20 }}>
            Todo lo que necesitás saber<br />
            antes de <span style={{ color: '#C9922A' }}>dar el primer paso</span>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(239,239,239,0.5)', lineHeight: 1.75, marginBottom: 36, maxWidth: 500 }}>
            Reunimos las 20 dudas más frecuentes de nuestros inversores. Si tu pregunta no está acá, escribinos directamente y te respondemos en menos de 24 horas.
          </p>
          {/* Search */}
          <div style={{ display: 'flex', gap: 0, maxWidth: 560 }}>
            <div style={{ position: 'relative', flexGrow: 1 }}>
              <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 16 }}>🔍</span>
              <input
                type="text"
                placeholder="Buscar una pregunta... ej: ¿Necesito viajar para comprar?"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRight: 'none',
                  borderRadius: '6px 0 0 6px',
                  padding: '14px 16px 14px 44px',
                  fontSize: 13,
                  color: '#efefef',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <button style={{ background: '#C9922A', color: '#101010', border: 'none', borderRadius: '0 6px 6px 0', padding: '14px 24px', fontSize: 13, fontWeight: 800, cursor: 'pointer', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* ── 2-column body ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 0, maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* ── Left sidebar ── */}
        <aside style={{ paddingTop: 40, paddingRight: 24 }}>
          <div style={{ position: 'sticky', top: 24 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(239,239,239,0.3)', letterSpacing: '0.14em', marginBottom: 14 }}>CATEGORÍAS</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 32 }}>
              {categories.map(cat => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => goToCategory(cat.id)}
                    style={{
                      background: isActive ? 'rgba(201,146,42,0.08)' : 'transparent',
                      border: 'none',
                      borderLeft: `3px solid ${isActive ? '#C9922A' : 'transparent'}`,
                      borderRadius: '0 6px 6px 0',
                      padding: '10px 14px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.15s',
                    }}
                  >
                    <span style={{ fontSize: 12, fontWeight: isActive ? 700 : 500, color: isActive ? '#C9922A' : 'rgba(239,239,239,0.55)' }}>
                      {cat.icon} {cat.name}
                    </span>
                    <span style={{ fontSize: 10, color: 'rgba(239,239,239,0.25)' }}>{cat.faqs.length}</span>
                  </button>
                );
              })}
            </nav>

            {/* Datos rápidos */}
            <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '16px 16px' }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(239,239,239,0.3)', letterSpacing: '0.12em', marginBottom: 12 }}>DATOS RÁPIDOS</p>
              {[
                'Desde USD 7.000 de entrada',
                'Sin necesidad de viajar',
                'Solo con pasaporte',
                '10 mercados activos',
                'Proceso 100% remoto',
              ].map((item, i) => (
                <p key={i} style={{ fontSize: 11, color: 'rgba(239,239,239,0.55)', margin: '0 0 7px', display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ color: '#22c55e', fontWeight: 700 }}>✓</span> {item}
                </p>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Right content ── */}
        <div style={{ paddingTop: 40, paddingLeft: 8 }}>
          {visibleCategories.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(239,239,239,0.3)' }}>
              <p style={{ fontSize: 32, marginBottom: 12 }}>🔍</p>
              <p style={{ fontSize: 14 }}>No encontramos preguntas para esa búsqueda.</p>
            </div>
          )}

          {visibleCategories.map(cat => (
            <section
              key={cat.id}
              id={cat.id}
              ref={el => { sectionRefs.current[cat.id] = el; }}
              style={{ marginBottom: 56 }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', margin: 0 }}>
                  {cat.icon} {cat.name}
                </h2>
                <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.3)' }}>{cat.faqs.length} preguntas</span>
              </div>

              {/* FAQ items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {cat.faqs.map((faq, i) => {
                  const itemId = `${cat.id}-${i}`;
                  const isOpen = openItems.has(itemId);
                  return (
                    <div
                      key={i}
                      style={{
                        background: '#0d0d0d',
                        border: `1px solid ${isOpen ? 'rgba(201,146,42,0.3)' : 'rgba(255,255,255,0.07)'}`,
                        borderRadius: 10,
                        overflow: 'hidden',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        style={{
                          width: '100%',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '20px 24px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 16,
                          textAlign: 'left',
                        }}
                      >
                        <span style={{ fontSize: 14, fontWeight: 700, color: isOpen ? '#efefef' : 'rgba(239,239,239,0.85)', lineHeight: 1.4 }}>
                          {faq.q}
                        </span>
                        <span style={{
                          width: 28, height: 28, borderRadius: '50%',
                          background: '#C9922A',
                          color: '#101010',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 16, fontWeight: 700,
                          flexShrink: 0,
                          transition: 'transform 0.2s',
                          transform: isOpen ? 'rotate(0deg)' : 'rotate(45deg)',
                        }}>
                          −
                        </span>
                      </button>

                      {isOpen && (
                        <div style={{ padding: '0 24px 20px' }}>
                          <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.6)', lineHeight: 1.85, margin: '0 0 16px' }}>
                            {parseBold(faq.a)}
                          </p>
                          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {faq.tags.map((tag, j) => (
                              <span
                                key={j}
                                style={{
                                  fontSize: 10,
                                  fontWeight: 700,
                                  color: tag.color,
                                  background: `${tag.color}15`,
                                  border: `1px solid ${tag.color}35`,
                                  borderRadius: 20,
                                  padding: '4px 12px',
                                  letterSpacing: '0.04em',
                                }}
                              >
                                {tag.label}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* ── Bottom sticky bar ── */}
      <div style={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        background: 'rgba(13,13,13,0.97)',
        borderTop: '1px solid rgba(201,146,42,0.2)',
        padding: '18px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        backdropFilter: 'blur(12px)',
        zIndex: 50,
      }}>
        <span style={{ fontSize: 28 }}>💬</span>
        <div style={{ flexGrow: 1 }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: '#efefef', margin: '0 0 2px' }}>¿Tu pregunta no está en la lista?</p>
          <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)', margin: 0 }}>Un asesor especializado te responde en menos de 24 horas. Sin compromiso.</p>
        </div>
        <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
          <Link href="/contacto" style={{ background: '#C9922A', color: '#101010', border: 'none', borderRadius: 6, padding: '10px 20px', fontSize: 12, fontWeight: 800, textDecoration: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            Agendar reunión por Zoom →
          </Link>
          <a href="https://wa.me/14075551234" style={{ background: '#22c55e', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 20px', fontSize: 12, fontWeight: 800, textDecoration: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            💬 WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 220px 1fr"] { grid-template-columns: 1fr !important; }
          aside { display: none; }
          div[style*="position: fixed"] { padding: 12px 16px !important; flex-wrap: wrap; }
        }
      `}</style>

    </main>
  );
}
