'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { animate, useInView } from 'framer-motion';

const stats = [
  { value: 10, suffix: '', label: 'Países' },
  { value: 3, suffix: '', label: 'Continentes' },
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 500, suffix: '+', label: 'Inversores asesorados' },
];

const services = [
  {
    tag: 'PARA INVERSORES',
    icon: '📈',
    title: 'Alternativas de inversión en Real Estate',
    desc: 'Acceso a un portafolio diversificado de oportunidades inmobiliarias en América, Europa y Asia con rendimientos seguros y competitivos.',
  },
  {
    tag: 'PARA INVERSORES',
    icon: '🏗️',
    title: 'Acompañamiento y formación de estructuras',
    desc: 'Te acompañamos desde la selección del activo hasta la firma, con asesoramiento legal, financiero y comercial en cada etapa.',
  },
];

const countries = [
  { name: 'Argentina',       flag: 'https://flagcdn.com/w80/ar.png' },
  { name: 'Brasil',          flag: 'https://flagcdn.com/w80/br.png' },
  { name: 'Colombia',        flag: 'https://flagcdn.com/w80/co.png' },
  { name: 'Paraguay',        flag: 'https://flagcdn.com/w80/py.png' },
  { name: 'Uruguay',         flag: 'https://flagcdn.com/w80/uy.png' },
  { name: 'USA',             flag: 'https://flagcdn.com/w80/us.png' },
  { name: 'México',          flag: 'https://flagcdn.com/w80/mx.png' },
  { name: 'Panamá',          flag: 'https://flagcdn.com/w80/pa.png' },
  { name: 'España',          flag: 'https://flagcdn.com/w80/es.png' },
  { name: 'Italia',          flag: 'https://flagcdn.com/w80/it.png' },
  { name: 'Emiratos Árabes', flag: 'https://flagcdn.com/w80/ae.png' },
  { name: 'Georgia',         flag: 'https://flagcdn.com/w80/ge.png' },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

function CountUpStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: easeOut,
      onUpdate(v) { setDisplay(Math.round(v)); },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <p style={{ fontSize: 44, fontWeight: 800, color: '#C9922A', marginBottom: 4 }}>
        {display}{suffix}
      </p>
      <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</p>
    </div>
  );
}

const MAPS_URL = 'https://www.google.com/maps/place/Lion+Global+Sales+Consulting/@-34.5369211,-58.4698353,17z/data=!4m8!3m7!1s0x9584ddae84cff001:0x54fb515e4900f951!8m2!3d-34.5369255!4d-58.4672604!9m1!1b1!16s%2Fg%2F11y43zrwcm?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D';
const IG_URL = 'https://www.instagram.com/lion.gsc';

const reels = [
  { file: '/videos/reel-1.mp4', available: true },
  { file: '/videos/reel-2.mp4', available: true },
  { file: '/videos/reel-3.mp4', available: true },
];

function ReelCard({ file, available }: { file: string; available: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !available) return;
    v.muted = true;
    v.play().catch(() => {});
  }, [available]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.2)', aspectRatio: '9/16', maxWidth: 280, width: '100%' }}>
      {available ? (
        <>
          <video
            ref={videoRef}
            src={file}
            autoPlay muted loop playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Mute toggle */}
          <button
            type="button"
            onClick={toggleMute}
            style={{ position: 'absolute', bottom: 56, right: 12, background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', WebkitTapHighlightColor: 'transparent', backdropFilter: 'blur(4px)' }}
            aria-label={muted ? 'Activar audio' : 'Silenciar'}
          >
            {muted ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#efefef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#efefef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            )}
          </button>
          {/* IG badge */}
          <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,0,0,0.5)', borderRadius: 20, padding: '4px 10px', backdropFilter: 'blur(4px)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="url(#igGrad)">
              <defs>
                <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433"/>
                  <stop offset="25%" stopColor="#e6683c"/>
                  <stop offset="50%" stopColor="#dc2743"/>
                  <stop offset="75%" stopColor="#cc2366"/>
                  <stop offset="100%" stopColor="#bc1888"/>
                </linearGradient>
              </defs>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#efefef', letterSpacing: '0.04em' }}>Reel</span>
          </div>
        </>
      ) : (
        /* Placeholder cuando no hay video aún */
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, minHeight: 400 }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(201,146,42,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.3)', textAlign: 'center', letterSpacing: '0.06em', margin: 0 }}>REEL<br/>PRÓXIMAMENTE</p>
        </div>
      )}
      {/* Ver en Instagram */}
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)', padding: '24px 12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, textDecoration: 'none', color: '#efefef', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', WebkitTapHighlightColor: 'transparent' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#efefef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        Ver en Instagram
      </a>
    </div>
  );
}

const steps = [
  { num: '01', icon: '📞', title: 'Consulta inicial', desc: 'Nos contás tus objetivos, presupuesto y horizonte de inversión. Sin compromiso.' },
  { num: '02', icon: '🔍', title: 'Analizamos tu perfil', desc: 'Evaluamos las mejores opciones según tu capital, mercado objetivo y nivel de riesgo.' },
  { num: '03', icon: '🏗️', title: 'Te presentamos opciones', desc: 'Selección de oportunidades reales con forma de pago a medida de tu situación.' },
  { num: '04', icon: '🤝', title: 'Cerramos la operación', desc: 'Te acompañamos en la firma, transferencia y toda la documentación legal necesaria.' },
  { num: '05', icon: '📈', title: 'Rentabilizás tu inversión', desc: 'Administración, alquiler turístico o reventa. Tu propiedad trabaja para vos.' },
];

const newsItems = [
  {
    code: 'br', market: 'Brasil', tag: 'MERCADO', date: 'ABR 2026', color: '#22c55e',
    img: '/images/news/brazil.jpg',
    headline: 'São Paulo y el Nordeste lideran el crecimiento inmobiliario con un 18% interanual',
    desc: 'La demanda en zonas premium del Nordeste y São Paulo alcanza récords históricos. Inversores de Argentina, Europa y Medio Oriente lideran las operaciones.',
  },
  {
    code: 'us', market: 'USA', tag: 'ANÁLISIS', date: 'ABR 2026', color: '#3b82f6',
    img: '/images/news/usa.jpg',
    headline: 'Miami consolida su posición como destino #1 para inversores latinoamericanos en 2026',
    desc: 'Brickell y Wynwood registran mínimos históricos de vacancia. Las rentabilidades de alquiler superan el 8% anual en propiedades de nueva construcción.',
  },
  {
    code: 'ae', market: 'Dubái', tag: 'OPORTUNIDAD', date: 'MAR 2026', color: '#f59e0b',
    img: '/images/news/dubai.jpg',
    headline: 'Dubái supera las 180.000 transacciones inmobiliarias y bate su récord histórico',
    desc: 'Con precios aún un 30% por debajo de Londres y sin impuesto a las ganancias, el emirato sigue siendo la apuesta más atractiva para inversores internacionales.',
  },
];

const faqs = [
  { q: '¿Cuánto capital necesito para empezar?', a: 'Trabajamos con inversores desde USD 30.000. Dependiendo del mercado y tipo de proyecto, el ticket mínimo varía. Te asesoramos para encontrar la opción ideal para tu presupuesto. En algunos proyectos podés ingresar con solo el 7% al 10% del valor total y financiar el resto, lo que te permite acceder a oportunidades de alto valor con una inversión inicial mucho menor.' },
  { q: '¿En qué países puedo invertir?', a: 'Tenemos oportunidades en 10 países: Argentina, Brasil, Rep. Dominicana, Paraguay, Uruguay, USA, México, España, Italia y Emiratos Árabes. Cada mercado tiene sus propias oportunidades y rendimientos.' },
  { q: '¿Es seguro invertir en EEUU o Brasil?', a: 'Hoy tanto Estados Unidos como Brasil representan dos de los mercados con mayor rentabilidad y solidez para el inversor latinoamericano. Todos los proyectos que ofrecemos pasan por un riguroso proceso de due diligence legal y comercial. Trabajamos exclusivamente con desarrolladoras de primer nivel y garantizamos transparencia en cada etapa de la operación.' },
  { q: '¿Qué tipo de rentabilidad puedo esperar?', a: 'Depende del mercado y del proyecto. En general, nuestros proyectos ofrecen entre un 8% y un 18% anual en dólares, combinando plusvalía y renta. Te presentamos proyecciones reales en cada caso.' },
  { q: '¿Necesito viajar para comprar una propiedad?', a: 'No es necesario. Gestionamos todo el proceso de forma remota: firma digital, transferencias internacionales y acompañamiento legal en el país destino. Muchos de nuestros clientes invierten sin salir de su ciudad.' },
  { q: '¿Cuánto tiempo tarda el proceso de compra?', a: 'Desde la consulta inicial hasta la firma puede llevar entre 2 y 6 semanas según el proyecto. En proyectos en pozo, la entrega varía según la etapa de construcción.' },
];

const BOOKING_SRC = 'https://api.icm-ia.com/widget/booking/eUHMDjB5oFxtYa1y7Bbd';

export default function Page() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [testimonialsPage, setTestimonialsPage] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    vid.defaultMuted = true;
    const tryPlay = () => {
      vid.play().catch(() => {});
    };
    tryPlay();
    // iOS requires user gesture — retry on first touch/click
    document.addEventListener('touchstart', tryPlay, { once: true });
    document.addEventListener('click', tryPlay, { once: true });
    return () => {
      document.removeEventListener('touchstart', tryPlay);
      document.removeEventListener('click', tryPlay);
    };
  }, []);

  return (
    <main style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#101010' }}>

      {/* Hero */}
      <section className="hero-section" style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '80px 32px 80px 8%', position: 'relative', overflow: 'hidden' }}>
        {/* Background video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
        >
          <source src="/videos/hero-construction-hd.mp4" type="video/mp4" />
          <source src="/videos/hero-construction.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.70) 60%, rgba(16,16,16,0.95) 100%)', pointerEvents: 'none' }} />
        {/* Gold grid overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,146,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,42,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />

        <div className="hero-content" style={{ position: 'relative', maxWidth: 720 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/lion-logo-white.png" alt="Lion Global Sales Consulting" className="hero-logo" style={{ width: 240, height: 'auto', objectFit: 'contain', display: 'block', marginBottom: 32 }} />

          <div className="fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(201,146,42,0.12)', border: '1px solid rgba(201,146,42,0.3)', borderRadius: 20, padding: '5px 14px', marginBottom: 24 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9922A' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.1em' }}>ESPECIALISTAS EN REAL ESTATE GLOBAL</span>
          </div>

          <h1 className="hero-h1 fade-in-up fade-delay-1" style={{ fontSize: 62, fontWeight: 800, color: '#efefef', lineHeight: 1.08, marginBottom: 20, letterSpacing: '-0.01em' }}>
            Tu próxima inversión<br />está en otro país.<br /><span style={{ color: '#C9922A' }}>Nosotros ya estamos ahí.</span>
          </h1>

          <p className="fade-in-up fade-delay-2" style={{ fontSize: 15, color: 'rgba(239,239,239,0.60)', lineHeight: 1.8, maxWidth: 560, margin: '0 0 40px' }}>
            10 mercados. Análisis real. Respaldo jurídico, contable y comercial en cada paso — antes, durante y después de tu inversión.
          </p>

          <div className="fade-in-up fade-delay-3" style={{ display: 'flex', gap: 16, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <Link href="/mercados" style={{ background: '#C9922A', color: '#101010', padding: '14px 36px', fontSize: 13, fontWeight: 800, borderRadius: 4, textDecoration: 'none', letterSpacing: '0.08em' }}>
              VER PROYECTOS DEL MES ↗
            </Link>
            <button
              onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              style={{ background: 'transparent', color: '#C9922A', padding: '14px 36px', fontSize: 13, fontWeight: 800, border: '2px solid #C9922A', borderRadius: 4, letterSpacing: '0.08em', cursor: 'pointer' }}
            >
              AGENDAR REUNIÓN →
            </button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#0d0d0d', borderTop: '1px solid rgba(201,146,42,0.15)', borderBottom: '1px solid rgba(201,146,42,0.15)', padding: '40px 32px' }}>
        <div className="stats-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {stats.map((s) => (
            <CountUpStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* Countries */}
      <section className="countries-section" style={{ background: '#0d0d0d', padding: '72px 32px', borderTop: '1px solid rgba(201,146,42,0.15)', borderBottom: '1px solid rgba(201,146,42,0.1)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>PRESENCIA INTERNACIONAL</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#efefef' }}>Oportunidades en 10 Países</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', margin: '12px auto 0' }} />
          </div>
          <div style={{ overflow: 'hidden', position: 'relative', maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
            <div className="marquee-track">
              {[...countries, ...countries].map((c, i) => (
                <div
                  key={i}
                  style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 10, padding: '14px 24px', fontSize: 14, fontWeight: 600, color: 'rgba(239,239,239,0.85)', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 10, whiteSpace: 'nowrap', flexShrink: 0 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.flag} alt={c.name} style={{ width: 36, height: 24, objectFit: 'cover', borderRadius: 4, display: 'block', flexShrink: 0 }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/mercados" style={{ color: '#C9922A', fontSize: 13, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.08em', borderBottom: '1px solid rgba(201,146,42,0.4)', paddingBottom: 2 }}>
              VER TODOS LOS MERCADOS →
            </Link>
          </div>
        </div>
      </section>

      {/* Lo que hacemos + El proceso — sección unificada */}
      <section style={{ padding: '80px 32px', background: '#0d0d0d', borderTop: '1px solid rgba(201,146,42,0.1)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 16 }}>LO QUE HACEMOS</p>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: '#efefef', lineHeight: 1.15, maxWidth: 560 }}>
              Invertís con respaldo —<br />antes, durante y después
            </h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', marginTop: 16 }} />
          </div>

          {/* 3 phase cards */}
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 72 }}>
            {[
              { label: 'Antes de invertir', icon: '🔎', desc: 'Análisis de mercado, selección de proyectos y armado del plan según tu capital y objetivos.' },
              { label: 'Durante la inversión', icon: '🏗️', desc: 'Respaldo jurídico, contable y seguimiento de obra. Sabés cómo avanza tu proyecto en todo momento.' },
              { label: 'Después de la entrega', icon: '📈', desc: 'Administración, alquiler turístico o reventa. Tu propiedad trabaja para vos sin que estés presente.' },
            ].map((phase, i) => (
              <div key={i} className="lion-hover-card" style={{ background: '#131326', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 12, padding: '28px 28px 32px' }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{phase.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#efefef', marginBottom: 10, lineHeight: 1.3 }}>{phase.label}</h3>
                <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.5)', lineHeight: 1.75, margin: 0 }}>{phase.desc}</p>
              </div>
            ))}
          </div>

          {/* El proceso en 5 pasos */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 40 }}>EL PROCESO EN 5 PASOS</p>
            <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative' }}>
              {/* Línea conectora */}
              <div className="steps-line" style={{ position: 'absolute', top: 36, left: '10%', right: '10%', height: 2, background: 'linear-gradient(to right, #C9922A, rgba(201,146,42,0.2))', zIndex: 0 }} />
              {steps.map((s, i) => (
                <div key={i} className="card-appear" style={{ animationDelay: `${i * 0.12}s`, position: 'relative', zIndex: 1, padding: '0 12px', textAlign: 'center' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: i === 0 ? '#C9922A' : '#1a1a2e', border: `2px solid ${i === 0 ? '#C9922A' : 'rgba(201,146,42,0.35)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: i === 0 ? '0 0 24px rgba(201,146,42,0.4)' : 'none' }}>
                    <span style={{ fontSize: 22 }}>{s.icon}</span>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#C9922A', letterSpacing: '0.12em', marginBottom: 6 }}>PASO {s.num}</div>
                  <h3 style={{ fontSize: 13, fontWeight: 700, color: '#efefef', marginBottom: 8, lineHeight: 1.35 }}>{s.title}</h3>
                  <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.5)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 56 }}>
              <Link href="/contacto" style={{ background: '#C9922A', color: '#101010', padding: '13px 36px', fontSize: 13, fontWeight: 800, borderRadius: 4, textDecoration: 'none', letterSpacing: '0.08em' }}>
                COMENZAR AHORA →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Calendario — Agendar reunión */}
      <section id="agendar" style={{ padding: '80px 32px', background: '#101010', borderTop: '1px solid rgba(201,146,42,0.1)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 48, textAlign: 'center' }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 14 }}>PRIMER PASO</p>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: '#efefef', lineHeight: 1.15, marginBottom: 16 }}>
              Agendá una reunión con un asesor
            </h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', margin: '0 auto 20px' }} />
            <p style={{ fontSize: 15, color: 'rgba(239,239,239,0.5)', lineHeight: 1.75, maxWidth: 500, margin: '0 auto' }}>
              Una charla de 15 minutos por Zoom. Te asignamos el asesor especializado según el mercado que te interesa.
            </p>
          </div>

          <div style={{ maxWidth: 1060, margin: '0 auto', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.5)', background: '#1a1a2e', height: 620 }}>
            <iframe
              src="https://api.icm-ia.com/widget/booking/eUHMDjB5oFxtYa1y7Bbd"
              style={{ width: '100%', border: 'none', display: 'block', height: 780, marginTop: -80 }}
              scrolling="no"
              id="eUHMDjB5oFxtYa1y7Bbd_1778008722391"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 32px', background: '#101010', borderTop: '1px solid rgba(201,146,42,0.1)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>OPINIONES DE CLIENTES</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#efefef', marginBottom: 12 }}>Lo que dicen nuestros clientes</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', margin: '0 auto 16px' }} />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(201,146,42,0.1)', border: '1px solid rgba(201,146,42,0.25)', borderRadius: 20, padding: '6px 16px' }}>
              <span style={{ color: '#C9922A', fontSize: 16 }}>★★★★★</span>
              <span style={{ fontSize: 13, color: 'rgba(239,239,239,0.7)', fontWeight: 600 }}>5.0 · 28 reseñas en Google</span>
            </div>
          </div>
          {/* Carrusel */}
          {(() => {
            const testimonials = [
              { name: 'Romina Pedroli', photo: 'https://lh3.googleusercontent.com/a/ACg8ocJdsrxJyXzuPEhE8ZX7sG6hKRWwBD912gRsvDJgYLpBcHCc=w72-h72-p-rp-mo-ba2-br100', text: 'La experiencia con la asesoría para comprar una propiedad en Brasil fue excelente de principio a fin. Andrés nos atendió con una dedicación y una claridad que realmente marcaron la diferencia. Muy recomendable.' },
              { name: 'Claudio Fernández', photo: 'https://lh3.googleusercontent.com/a/ACg8ocIOUj2dJwiUX-f0WBFKgXzh8V_Go5EXcqQf_FzUXBvVXlqkoA=w72-h72-p-rp-mo-ba3-br100', text: 'Conocí a Alan en la pandemia. Me asesoró excelentemente en mi primer emprendimiento. Ya van varios años de relación comercial. Lo recomiendo ampliamente.' },
              { name: 'Ivo Kraljev', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjXTgnOCBzDPYipR56Hx_pV9sUm9HwIElh1iuPcpe2nHa2MNjkgWAg=w72-h72-p-rp-mo-br100', text: 'Sorprendido por la calidad de atención. Decidí realizar una inversión y caí en manos de las personas adecuadas. Profesionalismo, claridad y acompañamiento en todo el proceso.' },
              { name: 'Gonzalo Leiva', photo: 'https://lh3.googleusercontent.com/a/ACg8ocJ_HREt7rYVx0gnsX8o-fVNKKItCI0G85LAIfasH3ZdzZniPQ=w72-h72-p-rp-mo-ba3-br100', text: 'En dos semanas me resolvieron todo. Desde Miami me era imposible resolver algunas cosas y se encargaron de todo. Realmente un equipo muy comprometido.' },
              { name: 'Natacha Suárez', photo: 'https://lh3.googleusercontent.com/a/ACg8ocIc7_QbNZUJIOfC2Nnj9wS5GGJN3PC6pu89BETKRAq5AL4gPg=w72-h72-p-rp-mo-br100', text: 'Lion me guió y asesoró en todo el proceso de compra de un inmueble en Brasil. Siempre disponibles para evacuar mis dudas. Una experiencia muy satisfactoria.' },
              { name: 'Damian Terzano', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjXfCdcDIhXvtyC_n4trhKztx__3AvVG1r_-4gntx39kucsX-Wb-=w72-h72-p-rp-mo-ba3-br100', text: 'Primer nivel, te asesoran en todo, están hasta en el más mínimo detalle. No dudaría en recomendarlos a cualquiera que quiera invertir en Real Estate.' },
              { name: 'Mauro Antenucci', photo: 'https://lh3.googleusercontent.com/a/ACg8ocIY2SugHYi9HaVnrItYOEwBaz-S-Y0KToWYlLja5-BoN8omQg=w72-h72-p-rp-mo-ba3-br100', text: 'Servicio sumamente profesional y muy calificado. Fui atendido de manera virtual y presencial en el lugar del emprendimiento. Quedé muy conforme.' },
              { name: 'Leonardo Mesiti', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjXx_1Ls5KtlBpyo6T4nqC30zzPeFWOt3znImUHvhbKH9eKHAuuQ=w72-h72-p-rp-mo-ba4-br100', text: 'Trabajo con Alan desde hace unos 6 años y puedo decir que es muy profesional en todo lo que hace. Siempre buscando las mejores opciones para sus clientes.' },
              { name: 'Claudia Sanagua', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjVf_6UJUT7x9tBbSwMpmDTvxK36bIsV1QqpoEeX0sWiR85xSVY=w72-h72-p-rp-mo-br100', text: 'Todo muy transparente, muy pacientes, te sacan todas las dudas que tenés. Pedro Vence un genio, nos acompañó en todo el proceso sin problemas.' },
            ];
            const totalPages = Math.ceil(testimonials.length / 3);
            const visible = testimonials.slice(testimonialsPage * 3, testimonialsPage * 3 + 3);
            return (
              <div>
                {/* Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 36 }}>
                  {visible.map((t, i) => (
                    <div
                      key={`${testimonialsPage}-${i}`}
                      onClick={() => setShowReviewModal(true)}
                      style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 12, padding: '28px', cursor: 'pointer', display: 'flex', flexDirection: 'column', animation: 'fadeInUp 0.35s ease both', animationDelay: `${i * 0.07}s` }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                        <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0 }}>
                          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(201,146,42,0.2)', border: '2px solid rgba(201,146,42,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: '#C9922A', position: 'absolute', inset: 0 }}>
                            {t.name.charAt(0)}
                          </div>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={t.photo} alt={t.name} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(201,146,42,0.3)', position: 'absolute', inset: 0 }} />
                        </div>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 700, color: '#efefef', margin: '0 0 2px' }}>{t.name}</p>
                          <span style={{ color: '#C9922A', fontSize: 12 }}>★★★★★</span>
                        </div>
                      </div>
                      <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.72)', lineHeight: 1.8, margin: 0, fontStyle: 'italic', flexGrow: 1 }}>"{t.text}"</p>
                    </div>
                  ))}
                </div>
                {/* Controls */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                  <button
                    onClick={() => setTestimonialsPage(p => Math.max(0, p - 1))}
                    disabled={testimonialsPage === 0}
                    style={{ width: 40, height: 40, borderRadius: '50%', background: testimonialsPage === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(201,146,42,0.15)', border: `1px solid ${testimonialsPage === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(201,146,42,0.4)'}`, color: testimonialsPage === 0 ? 'rgba(255,255,255,0.2)' : '#C9922A', fontSize: 18, cursor: testimonialsPage === 0 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >‹</button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialsPage(i)}
                      style={{ width: i === testimonialsPage ? 24 : 8, height: 8, borderRadius: 4, background: i === testimonialsPage ? '#C9922A' : 'rgba(201,146,42,0.25)', border: 'none', cursor: 'pointer', transition: 'all 0.25s', padding: 0 }}
                    />
                  ))}
                  <button
                    onClick={() => setTestimonialsPage(p => Math.min(totalPages - 1, p + 1))}
                    disabled={testimonialsPage === totalPages - 1}
                    style={{ width: 40, height: 40, borderRadius: '50%', background: testimonialsPage === totalPages - 1 ? 'rgba(255,255,255,0.05)' : 'rgba(201,146,42,0.15)', border: `1px solid ${testimonialsPage === totalPages - 1 ? 'rgba(255,255,255,0.1)' : 'rgba(201,146,42,0.4)'}`, color: testimonialsPage === totalPages - 1 ? 'rgba(255,255,255,0.2)' : '#C9922A', fontSize: 18, cursor: testimonialsPage === totalPages - 1 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >›</button>
                </div>
                {/* Google Maps CTA */}
                <div style={{ textAlign: 'center', marginTop: 36 }}>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', border: '2px solid rgba(201,146,42,0.5)', color: '#C9922A', padding: '12px 28px', fontSize: 13, fontWeight: 800, borderRadius: 4, textDecoration: 'none', letterSpacing: '0.08em', transition: 'all 0.2s' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    VER TODAS LAS RESEÑAS EN GOOGLE MAPS
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Instagram Reels */}
      <section style={{ padding: '80px 32px', background: '#0d0d0d', borderTop: '1px solid rgba(201,146,42,0.1)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="url(#igGradTitle)">
                <defs>
                  <linearGradient id="igGradTitle" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="50%" stopColor="#dc2743"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', margin: 0 }}>INSTAGRAM</p>
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#efefef' }}>Nuestros últimos Reels</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', margin: '12px auto 0' }} />
          </div>

          <div className="reels-grid" style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {reels.map((r, i) => (
              <ReelCard key={i} file={r.file} available={r.available} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#C9922A', fontSize: 13, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.08em', borderBottom: '1px solid rgba(201,146,42,0.4)', paddingBottom: 2 }}
            >
              VER PERFIL COMPLETO @lion.gsc →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 32px', background: '#101010', borderTop: '1px solid rgba(201,146,42,0.1)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>PREGUNTAS FRECUENTES</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#efefef' }}>Todo lo que necesitás saber</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', margin: '12px auto 0' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.slice(0, 3).map((faq, i) => (
              <div
                key={i}
                style={{ background: '#1a1a2e', border: `1px solid ${faqOpen === i ? 'rgba(201,146,42,0.45)' : 'rgba(201,146,42,0.15)'}`, borderRadius: 10, overflow: 'hidden', transition: 'border-color 0.2s' }}
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left', WebkitTapHighlightColor: 'transparent' }}
                >
                  <span style={{ fontSize: 14, fontWeight: 700, color: faqOpen === i ? '#C9922A' : '#efefef', lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ fontSize: 20, color: '#C9922A', flexShrink: 0, transition: 'transform 0.25s', transform: faqOpen === i ? 'rotate(45deg)' : 'rotate(0deg)', display: 'inline-block' }}>+</span>
                </button>
                {faqOpen === i && (
                  <div style={{ padding: '0 24px 20px', fontSize: 13, color: 'rgba(239,239,239,0.6)', lineHeight: 1.8 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/faq" style={{ color: '#C9922A', fontSize: 13, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.08em', borderBottom: '1px solid rgba(201,146,42,0.4)', paddingBottom: 2 }}>
              VER TODAS LAS PREGUNTAS →
            </Link>
          </div>
        </div>
      </section>

      {/* Noticias del mercado */}
      <section style={{ padding: '80px 32px', background: '#0d0d0d', borderTop: '1px solid rgba(201,146,42,0.1)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>ACTUALIDAD</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#efefef' }}>Noticias del mercado</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', margin: '12px auto 0' }} />
            <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(239,239,239,0.4)' }}>Las tendencias que mueven el real estate global</p>
          </div>
          <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {newsItems.map((n, i) => (
              <div key={i} className="lion-hover-card" style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Hero image */}
                <div style={{ position: 'relative', height: 200, flexShrink: 0, overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={n.img} alt={n.market} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  {/* gradient overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,20,0.75) 0%, transparent 55%)' }} />
                  {/* Color accent bar */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: n.color }} />
                  {/* Tag badge over image */}
                  <span style={{ position: 'absolute', top: 14, left: 14, fontSize: 10, fontWeight: 700, color: n.color, letterSpacing: '0.1em', background: 'rgba(0,0,0,0.65)', border: `1px solid ${n.color}66`, borderRadius: 20, padding: '4px 12px', backdropFilter: 'blur(6px)' }}>{n.tag}</span>
                  <span style={{ position: 'absolute', top: 14, right: 14, fontSize: 10, color: 'rgba(239,239,239,0.6)', letterSpacing: '0.06em', background: 'rgba(0,0,0,0.5)', borderRadius: 20, padding: '4px 10px', backdropFilter: 'blur(6px)' }}>{n.date}</span>
                </div>
                {/* Content */}
                <div style={{ padding: '22px 22px 26px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: '#efefef', lineHeight: 1.45, marginBottom: 10, flexGrow: 1 }}>{n.headline}</h3>
                  <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.5)', lineHeight: 1.8, margin: 0 }}>{n.desc}</p>
                  <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://flagcdn.com/w40/${n.code}.png`} alt={n.market} style={{ width: 22, height: 15, objectFit: 'cover', borderRadius: 2, flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.4)' }} />
                    <span style={{ fontSize: 11, color: n.color, fontWeight: 700, letterSpacing: '0.08em' }}>{n.market.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 28, fontSize: 11, color: 'rgba(239,239,239,0.2)', letterSpacing: '0.04em' }}>
            Contenido informativo elaborado por el equipo de Lion GSC. Las condiciones de mercado pueden variar.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 32px' }}>
        <div className="cta-box" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', background: 'rgba(201,146,42,0.06)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 16, padding: '64px 48px' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#efefef', marginBottom: 16, lineHeight: 1.2 }}>
            ¿Listo para invertir en<br />Real Estate global?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(239,239,239,0.5)', marginBottom: 36, lineHeight: 1.7 }}>
            Nuestro equipo de especialistas está disponible para asesorarte sin compromiso sobre las mejores oportunidades del mercado.
          </p>
          <Link href="/contacto" style={{ background: '#C9922A', color: '#101010', padding: '14px 40px', fontSize: 13, fontWeight: 800, borderRadius: 4, textDecoration: 'none', letterSpacing: '0.08em' }}>
            CONTACTAR AHORA
          </Link>
        </div>
      </section>

      <style>{`
        /* Fade-in animations — pure CSS, always work on iOS */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          animation: fadeInUp 0.7s ease both;
        }
        .fade-delay-1 { animation-delay: 0.15s; }
        .fade-delay-2 { animation-delay: 0.30s; }
        .fade-delay-3 { animation-delay: 0.45s; }

        @keyframes cardAppear {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-appear {
          animation: cardAppear 0.55s ease both;
        }

        /* CSS marquee — no JS needed */
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-section { padding: 48px 20px !important; min-height: 90vh !important; }
          .hero-h1 { font-size: 32px !important; }
          .hero-logo { width: 200px !important; margin-bottom: 20px !important; }
          .hero-content { padding: 0 8px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .cta-box { padding: 40px 24px !important; }
          .countries-section { padding: 48px 16px !important; }
          .reels-grid { gap: 16px !important; }
          .reels-grid > div { max-width: 100% !important; width: calc(50% - 8px) !important; min-width: 140px; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px 16px !important; }
          .steps-line { display: none !important; }
          .roi-grid { grid-template-columns: 1fr !important; }
          .news-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .hero-section { padding: 32px 16px !important; }
          .hero-h1 { font-size: 26px !important; }
          .hero-logo { width: 160px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .cta-box { padding: 28px 16px !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Calendar modal ── */}
      {showCalendar && (
        <div
          onClick={() => setShowCalendar(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.82)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.3)', borderRadius: 16, maxWidth: 1100, width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid rgba(201,146,42,0.15)', flexShrink: 0 }}>
              <p style={{ fontSize: 15, fontWeight: 800, color: '#efefef', margin: 0 }}>📅 Agendá tu reunión — 15 min por Zoom</p>
              <button
                onClick={() => setShowCalendar(false)}
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '50%', width: 34, height: 34, cursor: 'pointer', color: 'rgba(239,239,239,0.7)', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
              >×</button>
            </div>
            <div style={{ overflow: 'hidden', height: 630, background: '#1a1a2e', borderRadius: '0 0 16px 16px' }}>
              <iframe
                src={BOOKING_SRC}
                style={{ width: '100%', height: 780, border: 'none', display: 'block', marginTop: -80 }}
                scrolling="no"
              />
            </div>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <div
          onClick={() => setShowReviewModal(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.3)', borderRadius: 16, padding: '48px 40px', maxWidth: 420, width: '100%', textAlign: 'center' }}
          >
            <div style={{ fontSize: 36, marginBottom: 16 }}>⭐</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', marginBottom: 12, lineHeight: 1.3 }}>¿Querés ver esta reseña en Google Maps?</h3>
            <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.5)', marginBottom: 32, lineHeight: 1.7 }}>Podés leer todas las opiniones de nuestros clientes directamente en Google.</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', background: '#C9922A', color: '#101010', padding: '13px 28px', fontSize: 13, fontWeight: 800, borderRadius: 4, textDecoration: 'none', letterSpacing: '0.08em', marginBottom: 12 }}
            >
              SÍ, QUIERO VER TODAS LAS RESEÑAS
            </a>
            <button
              onClick={() => setShowReviewModal(false)}
              style={{ background: 'transparent', border: 'none', color: 'rgba(239,239,239,0.4)', fontSize: 12, cursor: 'pointer', padding: '8px 16px', letterSpacing: '0.06em' }}
            >
              CANCELAR
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
