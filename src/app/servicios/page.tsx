'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1] as const;

function CountUp({ target, prefix = '', suffix = '', duration = 1800 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function ShineCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {children}
      <motion.div
        initial={false}
        animate={{ x: hovered ? '100%' : '-100%' }}
        transition={{ duration: 0.5, ease: easeOut }}
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, transparent 35%, rgba(201,146,42,0.18) 50%, transparent 65%)', pointerEvents: 'none' }}
      />
    </div>
  );
}

const investorServices = [
  {
    icon: '📈',
    title: 'Alternativas de inversión en Real Estate',
    desc: 'Acceso a un portafolio diversificado de oportunidades inmobiliarias en América, Europa y Asia. Analizamos cada proyecto para garantizar rendimientos seguros y competitivos adaptados a tu perfil inversor.',
  },
  {
    icon: '🏗️',
    title: 'Acompañamiento y formación de estructuras',
    desc: 'Te acompañamos en todo el proceso de estructuración de tu inversión: desde la selección del activo hasta la firma, con asesoramiento legal, financiero y comercial en cada etapa.',
  },
];

const differentiators = [
  {
    icon: '🤝',
    title: 'Sin costo para el inversor',
    desc: 'Nuestra asesoría es completamente gratuita para vos. Nos compensan las desarrolladoras, no nuestros clientes. Sin letra chica, sin sorpresas.',
  },
  {
    icon: '🌎',
    title: '+80 proyectos activos',
    desc: 'Accedés a un portafolio curado de más de 80 proyectos en 12 países. No te ofrecemos lo que tenemos disponible — te ofrecemos lo que es mejor para tu perfil.',
  },
  {
    icon: '⚖️',
    title: 'Respaldo legal en destino',
    desc: 'Trabajamos con estudios jurídicos locales en cada país. Tu inversión está protegida desde el primer día con contratos revisados y procesos transparentes.',
  },
  {
    icon: '🏆',
    title: '+10 años de experiencia',
    desc: 'Más de una década conectando inversores latinoamericanos con oportunidades inmobiliarias globales. Conocemos los mercados porque los vivimos.',
  },
];

const commitments = [
  { icon: '✦', title: 'Asesoría sin costo', desc: 'Nunca te cobramos por asesorarte. Nuestro modelo de negocio no depende de vos.' },
  { icon: '✦', title: 'Transparencia total', desc: 'Te mostramos todos los números: costos, comisiones, proyecciones realistas y riesgos.' },
  { icon: '✦', title: 'Acompañamiento post-compra', desc: 'No desaparecemos después de la firma. Te acompañamos hasta la escritura y más allá.' },
];

const processSteps = [
  { num: '01', title: 'Primera reunión', desc: 'Nos contás tus objetivos, presupuesto y horizonte de inversión. Sin compromiso y totalmente gratuito.' },
  { num: '02', title: 'Análisis de perfil', desc: 'Evaluamos tu perfil inversor: capital disponible, tolerancia al riesgo, mercados de interés y objetivos (renta, plusvalía o ambos).' },
  { num: '03', title: 'Presentación de opciones', desc: 'Te presentamos una selección personalizada de proyectos que encajan con tu perfil. Con números reales, no promesas.' },
  { num: '04', title: 'Due diligence', desc: 'Verificamos la solidez legal y financiera del proyecto con nuestros socios locales antes de que tomes cualquier decisión.' },
  { num: '05', title: 'Estructuración y firma', desc: 'Te guiamos en la firma del contrato, transferencias internacionales y cualquier trámite legal en el país destino.' },
  { num: '06', title: 'Post-compra', desc: 'Seguimiento de la construcción, gestión de renta y soporte ante cualquier consulta. Estamos con vos a largo plazo.' },
];


const quizQuestions = [
  {
    q: '¿Cuánto capital tenés disponible para invertir?',
    options: ['Hasta U$ 50.000', 'Entre U$ 50.000 y U$ 150.000', 'Entre U$ 150.000 y U$ 500.000', 'Más de U$ 500.000'],
  },
  {
    q: '¿En cuánto tiempo esperás ver resultados?',
    options: ['1 a 2 años', '3 a 5 años', 'Más de 5 años'],
  },
  {
    q: '¿Qué buscás principalmente?',
    options: ['Renta mensual (alquiler turístico)', 'Plusvalía (vender más caro después)', 'Las dos por igual'],
  },
];

type QuizProfile = {
  badge: string;
  title: string;
  tagline: string;
  market: string;
  desde: string;
  renta: string;
  desc: string;
  waMsg: string;
};

function getProfile(answers: number[]): QuizProfile {
  const [budget, , obj] = answers;
  if (budget === 0) return {
    badge: '🌱', title: 'Inversor Inicial',
    tagline: 'Empezás fuerte con bajo capital de entrada',
    market: 'Brasil Nordeste', desde: 'U$ 36.000', renta: '12–15% anual',
    desc: 'El Nordeste brasileño es ideal para vos: studios desde U$ 36.000 con la posibilidad de ingresar con solo el 7–10% del valor. Alta rentabilidad turística y mercado en pleno crecimiento.',
    waMsg: 'Hola! Hice el quiz de perfil inversor y me salió *Inversor Inicial*. Me interesan proyectos en Brasil Nordeste desde U$ 36.000. ¿Me pueden asesorar?',
  };
  if (budget === 1 && obj === 0) return {
    badge: '🛡️', title: 'Inversor Conservador',
    tagline: 'Priorizás ingresos estables y seguros en USD',
    market: 'Brasil Sur / Nordeste', desde: 'U$ 65.000', renta: '10–13% anual',
    desc: 'Tu perfil busca rentabilidad predecible. Los proyectos de renta turística en Florianópolis y el Nordeste brasileño ofrecen ingresos en dólares con alta demanda todo el año.',
    waMsg: 'Hola! Hice el quiz de perfil inversor y me salió *Inversor Conservador*. Busco renta estable en USD. ¿Qué proyectos me recomiendan?',
  };
  if (budget === 1) return {
    badge: '⚖️', title: 'Inversor Moderado',
    tagline: 'Buscás crecimiento con equilibrio riesgo-retorno',
    market: 'Brasil Sur / Argentina', desde: 'U$ 80.000', renta: '12–16% anual',
    desc: 'Combinás renta con plusvalía. Los proyectos en Florianópolis y Buenos Aires ofrecen valorización constante y buenos retornos anuales en un horizonte de 3 a 5 años.',
    waMsg: 'Hola! Hice el quiz de perfil inversor y me salió *Inversor Moderado*. Busco combinar renta y plusvalía. ¿Qué me recomiendan?',
  };
  if (budget === 2) return {
    badge: '🚀', title: 'Inversor Estratégico',
    tagline: 'Pensás en grande con visión de mediano plazo',
    market: 'Miami / España / Brasil Premium', desde: 'U$ 150.000', renta: '10–14% anual',
    desc: 'Con tu capital accedés a mercados premium: Miami con short-term rental permitido, España con Golden Visa o los proyectos más exclusivos de Brasil. Rentabilidad sólida en mercados de alta demanda.',
    waMsg: 'Hola! Hice el quiz de perfil inversor y me salió *Inversor Estratégico*. Me interesan proyectos en Miami, España o Brasil Premium. ¿Podemos hablar?',
  };
  return {
    badge: '💎', title: 'Inversor Premium',
    tagline: 'Ultra lujo con la máxima rentabilidad del mercado',
    market: 'Miami Ultra Lujo / Dubái / Barcelona', desde: 'U$ 500.000', renta: '10–18% anual',
    desc: 'Accedés a lo mejor del mercado global: residencias firmadas por Bentley, St. Regis y Mercedes-Benz en Miami, Golden Visa en Dubái con exención impositiva total, y el Mandarin Oriental en Barcelona.',
    waMsg: 'Hola! Hice el quiz de perfil inversor y me salió *Inversor Premium*. Busco proyectos de ultra lujo. ¿Podemos coordinar una reunión?',
  };
}

function InvestorQuiz() {
  const [step, setStep] = useState(0);          // 0–2 preguntas, 3 resultado
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const choose = (idx: number) => setSelected(idx);

  const next = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (step < quizQuestions.length - 1) setStep(step + 1);
    else setStep(3);
  };

  const reset = () => { setStep(0); setAnswers([]); setSelected(null); };

  const profile = step === 3 ? getProfile(answers) : null;

  return (
    <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)', border: '1px solid rgba(201,146,42,0.25)', borderRadius: 20, padding: '48px 40px', marginBottom: 80 }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>HERRAMIENTA INTERACTIVA</p>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#efefef', margin: '0 0 6px' }}>¿Qué tipo de inversor sos?</h2>
        <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.45)', margin: 0 }}>3 preguntas · menos de 1 minuto · resultado personalizado</p>
      </div>

      {step < 3 ? (
        <>
          {/* Progress bar */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 36 }}>
            {quizQuestions.map((_, i) => (
              <div key={i} style={{ height: 3, flex: 1, borderRadius: 2, background: i <= step ? '#C9922A' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }} />
            ))}
          </div>

          {/* Question */}
          <p style={{ fontSize: 11, color: '#C9922A', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 12 }}>
            PREGUNTA {step + 1} DE {quizQuestions.length}
          </p>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', marginBottom: 24, lineHeight: 1.3 }}>
            {quizQuestions[step].q}
          </h3>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {quizQuestions[step].options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => choose(i)}
                style={{
                  background: selected === i ? 'rgba(201,146,42,0.18)' : 'rgba(255,255,255,0.04)',
                  border: `1.5px solid ${selected === i ? '#C9922A' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: 10, padding: '14px 20px',
                  color: selected === i ? '#C9922A' : 'rgba(239,239,239,0.75)',
                  fontSize: 14, fontWeight: selected === i ? 700 : 500,
                  cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
                  WebkitTapHighlightColor: 'transparent',
                  display: 'flex', alignItems: 'center', gap: 12,
                }}
              >
                <span style={{ width: 22, height: 22, borderRadius: '50%', border: `2px solid ${selected === i ? '#C9922A' : 'rgba(255,255,255,0.2)'}`, background: selected === i ? '#C9922A' : 'transparent', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {selected === i && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#101010', display: 'block' }} />}
                </span>
                {opt}
              </button>
            ))}
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={next}
            disabled={selected === null}
            style={{
              width: '100%', padding: '14px', borderRadius: 10, border: 'none',
              background: selected !== null ? '#C9922A' : 'rgba(255,255,255,0.08)',
              color: selected !== null ? '#101010' : 'rgba(255,255,255,0.3)',
              fontSize: 13, fontWeight: 800, cursor: selected !== null ? 'pointer' : 'default',
              letterSpacing: '0.08em', transition: 'all 0.2s',
            }}
          >
            {step < quizQuestions.length - 1 ? 'SIGUIENTE →' : 'VER MI PERFIL →'}
          </button>
        </>
      ) : profile && (
        /* Resultado */
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>{profile.badge}</div>
          <p style={{ fontSize: 11, color: '#C9922A', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 6 }}>TU PERFIL ES</p>
          <h3 style={{ fontSize: 30, fontWeight: 900, color: '#efefef', margin: '0 0 8px' }}>{profile.title}</h3>
          <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.5)', marginBottom: 28 }}>{profile.tagline}</p>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            {[
              { label: 'MERCADO RECOMENDADO', val: profile.market },
              { label: 'INVERSIÓN DESDE',     val: profile.desde  },
              { label: 'RENTABILIDAD EST.',   val: profile.renta  },
            ].map((s, i) => (
              <div key={i} style={{ background: 'rgba(201,146,42,0.08)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 10, padding: '12px 18px', minWidth: 140 }}>
                <p style={{ fontSize: 9, color: 'rgba(239,239,239,0.35)', fontWeight: 700, letterSpacing: '0.1em', margin: '0 0 4px' }}>{s.label}</p>
                <p style={{ fontSize: 14, fontWeight: 800, color: '#C9922A', margin: 0 }}>{s.val}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.6)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 32px' }}>{profile.desc}</p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/5492233559834?text=${encodeURIComponent(profile.waMsg)}`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', padding: '13px 28px', borderRadius: 8, fontSize: 13, fontWeight: 800, textDecoration: 'none', letterSpacing: '0.06em', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              HABLAR CON UN ASESOR
            </a>
            <button
              type="button" onClick={reset}
              style={{ background: 'transparent', border: '1.5px solid rgba(201,146,42,0.3)', color: '#C9922A', padding: '13px 24px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer', letterSpacing: '0.06em' }}
            >
              REPETIR QUIZ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServiciosPage() {
  return (
    <main className="servicios-main" style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#101010', minHeight: 'calc(100vh - 64px)', padding: '60px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>LO QUE HACEMOS</p>
          <h1 style={{ fontSize: 44, fontWeight: 800, color: '#efefef' }}>Nuestros Servicios</h1>
          <div style={{ height: 3, width: 56, background: '#C9922A', marginTop: 12 }} />
          <p style={{ marginTop: 16, fontSize: 14, color: 'rgba(239,239,239,0.5)', maxWidth: 580 }}>
            Asesoramiento especializado para inversores en Real Estate. Soluciones adaptadas a tu perfil en el mercado inmobiliario global.
          </p>
        </div>

        {/* Video */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(201,146,42,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <iframe
              src="https://www.youtube.com/embed/vscwfdAmc00?start=33"
              title="Lion Global Sales Consulting"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>

        {/* Texto debajo del video */}
        <div className="servicios-intro" style={{ marginBottom: 72, background: 'rgba(201,146,42,0.05)', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 16, padding: '48px 56px', display: 'flex', gap: 48, alignItems: 'flex-start' }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: 56, height: 56, background: 'rgba(201,146,42,0.15)', border: '1px solid rgba(201,146,42,0.3)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/images/lion-icon-transparent.png" alt="Lion" style={{ width: 44, height: 44, objectFit: 'contain' }} />
              </div>
          </div>
          <div>
            <p style={{ fontSize: 15, color: 'rgba(239,239,239,0.75)', lineHeight: 1.9, marginBottom: 18 }}>
              En Lion, estamos comprometidos a convertir sus objetivos de inversión en realidad. Estamos aquí para guiarlo en cada paso del camino, brindándole la confianza y el respaldo que necesita para tomar decisiones informadas y exitosas.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(239,239,239,0.75)', lineHeight: 1.9, margin: 0 }}>
              No dude en ponerse en contacto con nosotros para explorar cómo podemos ayudarlo a lograr sus objetivos de inversión en el mercado inmobiliario. Esperamos con entusiasmo la oportunidad de colaborar y construir un futuro financiero sólido y próspero juntos.
            </p>
          </div>
        </div>

        {/* Servicios para Inversores */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {investorServices.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6, ease: easeOut }}>
                <ShineCard style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 10, padding: 36, height: '100%' }}>
                  <div style={{ fontSize: 44, marginBottom: 18 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#C9922A', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.65)', lineHeight: 1.75 }}>{s.desc}</p>
                </ShineCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Proceso detallado ── */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>CÓMO TRABAJAMOS</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef', marginBottom: 0 }}>El proceso de inversión</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', marginTop: 12 }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {processSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 28 }}>
                {/* Timeline */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: i === 0 ? '#C9922A' : '#1a1a2e', border: `2px solid ${i === 0 ? '#C9922A' : 'rgba(201,146,42,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: i === 0 ? '0 0 20px rgba(201,146,42,0.4)' : 'none' }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: i === 0 ? '#101010' : '#C9922A' }}>{step.num}</span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div style={{ width: 2, flexGrow: 1, minHeight: 32, background: 'linear-gradient(to bottom, rgba(201,146,42,0.4), rgba(201,146,42,0.1))', margin: '4px 0' }} />
                  )}
                </div>
                {/* Content */}
                <div style={{ paddingBottom: 32, paddingTop: 10 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: '#efefef', margin: '0 0 6px' }}>{step.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.55)', lineHeight: 1.75, margin: 0, maxWidth: 580 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Por qué elegirnos ── */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>NUESTROS DIFERENCIADORES</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef', marginBottom: 0 }}>¿Por qué elegirnos?</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', marginTop: 12 }} />
          </div>
          <div className="diff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {differentiators.map((d, i) => (
              <div key={i} className="lion-hover-card" style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 14, padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(201,146,42,0.1)', border: '1px solid rgba(201,146,42,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
                  {d.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: '#efefef', margin: 0, lineHeight: 1.3 }}>{d.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.55)', lineHeight: 1.75, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Números reales ── */}
        <div style={{ marginBottom: 80, background: 'linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 16, padding: '48px 40px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 32, textAlign: 'center' }}>NÚMEROS QUE NOS RESPALDAN</p>
          <div className="stats-servicios" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
            {[
              { target: 12, prefix: 'USD ', suffix: 'M+', label: 'En operaciones cerradas' },
              { target: 80, prefix: '',     suffix: '+',  label: 'Proyectos en portafolio' },
              { target: 12, prefix: '',     suffix: '',   label: 'Países activos' },
              { target: 100,prefix: '',     suffix: '+',  label: 'Inversores asesorados' },
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontSize: 36, fontWeight: 900, color: '#C9922A', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
                  <CountUp target={s.target} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Compromisos ── */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>NUESTRAS PROMESAS</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef', marginBottom: 0 }}>Lo que garantizamos</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', marginTop: 12 }} />
          </div>
          <div className="commit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {commitments.map((c, i) => (
              <div key={i} className="lion-hover-card" style={{ background: 'rgba(201,146,42,0.05)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 14, padding: '32px 28px' }}>
                <div style={{ fontSize: 20, color: '#C9922A', marginBottom: 14, fontWeight: 900 }}>{c.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#efefef', margin: '0 0 10px' }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.55)', lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Quiz ── */}
        <InvestorQuiz />

        <style>{`
          @media (max-width: 768px) {
            .servicios-main { padding: 40px 16px !important; }
            .servicios-intro { flex-direction: column !important; padding: 28px 20px !important; gap: 20px !important; }
            .diff-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .stats-servicios { grid-template-columns: repeat(2, 1fr) !important; }
            .commit-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 480px) {
            .servicios-main { padding: 32px 12px !important; }
            .servicios-intro { padding: 20px 16px !important; }
            .diff-grid { grid-template-columns: 1fr !important; }
            .stats-servicios { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '56px 32px', background: 'rgba(201,146,42,0.06)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 12 }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: '#efefef', marginBottom: 12 }}>¿Listo para empezar?</h2>
          <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.55)', marginBottom: 28 }}>Contactanos y te asesoramos sin compromiso.</p>
          <Link href="/contacto" style={{ background: '#C9922A', color: '#101010', padding: '13px 36px', fontSize: 13, fontWeight: 800, borderRadius: 4, textDecoration: 'none', letterSpacing: '0.08em' }}>
            CONTACTAR AHORA
          </Link>
        </div>
      </div>
    </main>
  );
}
