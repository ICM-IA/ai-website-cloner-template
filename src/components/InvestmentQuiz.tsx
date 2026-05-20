'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const steps = [
  {
    id: 'region',
    question: '¿En qué mercado te interesa invertir?',
    emoji: '🌍',
    options: [
      { label: 'Estados Unidos', value: 'usa', emoji: '🌐', flag: 'https://flagcdn.com/w40/us.png' },
      { label: 'Brasil', value: 'brasil', emoji: '🌐', flag: 'https://flagcdn.com/w40/br.png' },
      { label: 'Argentina', value: 'argentina', emoji: '🌐', flag: 'https://flagcdn.com/w40/ar.png' },
      { label: 'Otros mercados', value: 'other', emoji: '🌍' },
      { label: 'Me da igual, quiero la mejor oportunidad', value: 'any', emoji: '🌐' },
    ],
  },
  {
    id: 'goal',
    question: '¿Qué buscás con tu inversión?',
    emoji: '🎯',
    options: [
      { label: 'Renta', value: 'rent', emoji: '💵' },
      { label: 'Revalorización', value: 'growth', emoji: '📈' },
      { label: 'Uso personal', value: 'personal', emoji: '🏖️' },
      { label: 'Un poco de las 3', value: 'diversify', emoji: '🎯' },
    ],
  },
  {
    id: 'type',
    question: '¿En qué etapa preferís entrar?',
    emoji: '🏗️',
    options: [
      { label: 'Lanzamiento', value: 'pozo', emoji: '🚀' },
      { label: 'Construcción', value: 'preconstruction', emoji: '🏗️' },
      { label: 'Terminado', value: 'ready', emoji: '🔑' },
      { label: 'Es indistinto', value: 'any', emoji: '✅' },
    ],
  },
  {
    id: 'budget',
    question: '¿Con cuánto podés ingresar hoy?',
    emoji: '💰',
    options: [
      { label: 'Menos de U$ 20.000', value: 'low', emoji: '🟢' },
      { label: 'Entre U$ 20.000 y U$ 50.000', value: 'mid', emoji: '🔵' },
      { label: 'Entre U$ 50.000 y U$ 100.000', value: 'high', emoji: '💎' },
      { label: 'Más de U$ 100.000', value: 'premium', emoji: '👑' },
      { label: 'Todavía estoy evaluando', value: 'unknown', emoji: '🤔' },
    ],
  },
];

const getRecommendation = (answers: Record<string, string>) => {
  const { region, budget, goal, type } = answers;

  if (region === 'brasil' && budget === 'low') {
    return {
      title: 'Proyectos de entrada accesible en Brasil',
      desc: 'Tenemos studios en Praia dos Carneiros y Tamandaré desde U$ 36.000 con entrada menor a U$ 2.000. Perfectos para empezar a generar renta en el nordeste brasileño.',
      tags: ['Tamana Breeze', 'Carneiros Park Flats', 'Mau Loa'],
    };
  }
  if (region === 'brasil' && budget === 'mid') {
    return {
      title: 'Oportunidades mid-range en Brasil',
      desc: 'Studios y departamentos en Porto de Galinhas, Maragogi y Florianópolis con entrada entre U$ 10k y U$ 30k. Alta demanda turística y renta garantizada.',
      tags: ['Beach Square', 'Brisas de Maragogi', 'Essenzia', 'Breeza'],
    };
  }
  if (region === 'brasil' && (budget === 'high' || budget === 'unknown')) {
    return {
      title: 'Proyectos premium en Brasil',
      desc: 'Desde departamentos en Jurerê Internacional hasta residencias frente al mar en Maragogi. Valorización sostenida y el metro cuadrado más caro de Latinoamérica.',
      tags: ['Almare', 'Caminho do Mar', 'Orama Beach'],
    };
  }
  if (region === 'usa') {
    return {
      title: 'Real estate en USA — Miami y alrededores',
      desc: 'Studios con short term rental permitido en Brickell, Wynwood, Hallandale y más. Desde U$ 233.000 con financiación directa del developer.',
      tags: ['Domus Brickell Center', 'Frida Kahlo Wynwood', 'Square Offices Hallandale'],
    };
  }
  if (region === 'argentina') {
    return {
      title: 'Proyectos en Argentina',
      desc: 'Residenciales en Belgrano, Palermo y Colegiales. Oportunidad de comprar a precio de construcción en el mercado que viene de su piso histórico.',
      tags: ['Feel Belgrano G&D', 'Distrito Colegiales G&D', 'OM Palermo Newbery'],
    };
  }
  if (goal === 'ready') {
    return {
      title: 'Proyectos terminados y listos para usar',
      desc: 'Invertí hoy y empezá a generar renta mañana. Proyectos terminados, amoblados y con demanda de alquiler activa.',
      tags: ['Ora Beach', 'Viceroy Brickell', 'Beach House'],
    };
  }
  if (goal === 'rent' && type === 'studio') {
    return {
      title: 'Studios para renta corta',
      desc: 'El formato ideal para Airbnb y alquiler turístico. Alta ocupación, bajo costo de entrada y retorno en dólares.',
      tags: ['Tamana Beach Studios', 'Seven Park Residences', 'Gaia Residences'],
    };
  }
  return {
    title: 'Tenemos opciones para vos',
    desc: 'Con tu perfil, hay múltiples oportunidades que pueden encajar. Nuestro equipo puede asesorarte y mostrarte las mejores opciones según tu presupuesto y objetivos.',
    tags: [],
  };
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 8,
  padding: '11px 14px',
  color: '#efefef',
  fontSize: 13,
  outline: 'none',
  boxSizing: 'border-box',
};

export default function InvestmentQuiz() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [showLead, setShowLead] = useState(false);
  const [lead, setLead] = useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);

  // All hooks must be called before any conditional return
  if (pathname === '/faq') return null;

  const handleOption = (value: string) => {
    const stepId = steps[step].id;
    const newAnswers = { ...answers, [stepId]: value };
    setAnswers(newAnswers);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
    setShowLead(false);
    setLead({ name: '', phone: '', email: '' });
    setSubmitting(false);
  };

  const recommendation = done ? getRecommendation(answers) : null;

  const handleVerProyectos = () => {
    setShowLead(true);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.name.trim() || !lead.phone.trim() || !lead.email.trim()) return;
    setSubmitting(true);
    const tags = recommendation?.tags ?? [];
    const query = tags.length > 0 ? `?tags=${encodeURIComponent(tags.join(','))}` : '';
    setTimeout(() => {
      setOpen(false);
      router.push(`/nuevas-construcciones${query}`);
    }, 400);
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => { setOpen(true); reset(); }}
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 999,
          background: 'linear-gradient(135deg, #C9922A, #a87020)',
          color: '#fff',
          border: 'none',
          borderRadius: 50,
          padding: '14px 22px',
          fontSize: 13,
          fontWeight: 800,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          boxShadow: '0 4px 24px rgba(201,146,42,0.5)',
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
          WebkitTapHighlightColor: 'transparent',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
      >
        <span style={{ fontSize: 20 }}>🦁</span>
        ¿En qué proyecto invierto?
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <div
              onClick={() => setOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000, backdropFilter: 'blur(4px)' }}
            />

            {/* Modal panel */}
            <div
              style={{
                position: 'fixed',
                bottom: 90,
                right: 28,
                zIndex: 1001,
                background: '#0f0f1a',
                border: '1px solid rgba(201,146,42,0.3)',
                borderRadius: 16,
                width: 400,
                maxWidth: 'calc(100vw - 40px)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
                overflow: 'hidden',
              }}
            >

              {/* Header */}
              <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: 10, color: '#C9922A', fontWeight: 700, letterSpacing: '0.12em', margin: 0 }}>LION ADVISOR</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#efefef', margin: '2px 0 0' }}>Encontrá tu proyecto ideal</p>
                </div>
                <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'rgba(239,239,239,0.4)', cursor: 'pointer', fontSize: 20, lineHeight: 1, padding: 4 }}>✕</button>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>

                  {/* Quiz steps */}
                  {!done && (
                    <div key={step}>
                      <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                        {steps.map((_, i) => (
                          <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= step ? '#C9922A' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }} />
                        ))}
                      </div>
                      <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)', marginBottom: 8 }}>Pregunta {step + 1} de {steps.length}</p>
                      <p style={{ fontSize: 17, fontWeight: 700, color: '#efefef', marginBottom: 20, lineHeight: 1.4 }}>
                        {steps[step].emoji} {steps[step].question}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {steps[step].options.map((opt) => (
                          <button
                            type="button"
                            key={opt.value}
                            onClick={() => handleOption(opt.value)}
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              borderRadius: 10,
                              padding: '12px 16px',
                              color: '#efefef',
                              fontSize: 13,
                              fontWeight: 600,
                              cursor: 'pointer',
                              textAlign: 'left',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              transition: 'background 0.2s',
                              WebkitTapHighlightColor: 'transparent',
                            }}
                          >
                            {'flag' in opt && opt.flag
                              ? <img src={opt.flag as string} alt={opt.label} style={{ width: 28, height: 19, objectFit: 'cover', borderRadius: 3, flexShrink: 0 }} />
                              : <span style={{ fontSize: 18 }}>{opt.emoji}</span>
                            }
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      {step > 0 && (
                        <button type="button" onClick={() => setStep(step - 1)} style={{ background: 'none', border: 'none', color: 'rgba(239,239,239,0.35)', fontSize: 12, cursor: 'pointer', marginTop: 16, padding: 0, WebkitTapHighlightColor: 'transparent' }}>
                          ← Volver
                        </button>
                      )}
                    </div>
                  )}

                  {/* Result screen */}
                  {done && !showLead && (
                    <div>
                      <div style={{ textAlign: 'center', marginBottom: 20 }}>
                        <span style={{ fontSize: 40 }}>🎯</span>
                        <p style={{ fontSize: 11, color: '#C9922A', fontWeight: 700, letterSpacing: '0.1em', marginTop: 8 }}>TU RECOMENDACIÓN PERSONALIZADA</p>
                        <h3 style={{ fontSize: 17, fontWeight: 800, color: '#efefef', margin: '6px 0 0', lineHeight: 1.3 }}>{recommendation?.title}</h3>
                      </div>

                      <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.65)', lineHeight: 1.6, marginBottom: 16 }}>{recommendation?.desc}</p>

                      {recommendation?.tags && recommendation.tags.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                          {recommendation.tags.map(tag => (
                            <span key={tag} style={{ background: 'rgba(201,146,42,0.12)', border: '1px solid rgba(201,146,42,0.25)', borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 700, color: '#C9922A' }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={handleVerProyectos}
                        style={{
                          display: 'block',
                          width: '100%',
                          background: 'linear-gradient(90deg, #C9922A, #a87020)',
                          color: '#fff',
                          textAlign: 'center',
                          padding: '13px',
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 800,
                          border: 'none',
                          cursor: 'pointer',
                          letterSpacing: '0.06em',
                          marginBottom: 10,
                          WebkitTapHighlightColor: 'transparent',
                        }}
                      >
                        VER PROYECTOS →
                      </button>
                      <a
                        href="/contacto"
                        style={{
                          display: 'block',
                          background: 'transparent',
                          color: 'rgba(239,239,239,0.5)',
                          textAlign: 'center',
                          padding: '11px',
                          borderRadius: 8,
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: 'none',
                          border: '1px solid rgba(255,255,255,0.08)',
                          marginBottom: 10,
                        }}
                      >
                        Hablar con un asesor
                      </a>
                      <button type="button" onClick={reset} style={{ background: 'none', border: 'none', color: 'rgba(239,239,239,0.3)', fontSize: 11, cursor: 'pointer', width: '100%', textAlign: 'center', padding: 0 }}>
                        Empezar de nuevo
                      </button>
                    </div>
                  )}

                  {/* Lead capture form */}
                  {done && showLead && (
                    <div>
                      <div style={{ textAlign: 'center', marginBottom: 20 }}>
                        <span style={{ fontSize: 36 }}>📋</span>
                        <p style={{ fontSize: 11, color: '#C9922A', fontWeight: 700, letterSpacing: '0.1em', marginTop: 8 }}>UN PASO MÁS</p>
                        <h3 style={{ fontSize: 15, fontWeight: 800, color: '#efefef', margin: '6px 0 4px', lineHeight: 1.3 }}>
                          Dejanos tus datos para mostrarte los proyectos
                        </h3>
                        <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.4)', margin: 0 }}>Un asesor te va a acompañar en el proceso</p>
                      </div>

                      <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <div>
                          <label style={{ fontSize: 10, color: 'rgba(239,239,239,0.4)', letterSpacing: '0.08em', fontWeight: 700, display: 'block', marginBottom: 5 }}>NOMBRE Y APELLIDO</label>
                          <input
                            type="text"
                            placeholder="Juan García"
                            value={lead.name}
                            onChange={e => setLead(l => ({ ...l, name: e.target.value }))}
                            required
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={{ fontSize: 10, color: 'rgba(239,239,239,0.4)', letterSpacing: '0.08em', fontWeight: 700, display: 'block', marginBottom: 5 }}>NÚMERO DE TELÉFONO</label>
                          <input
                            type="tel"
                            placeholder="+54 9 11 1234-5678"
                            value={lead.phone}
                            onChange={e => setLead(l => ({ ...l, phone: e.target.value }))}
                            required
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={{ fontSize: 10, color: 'rgba(239,239,239,0.4)', letterSpacing: '0.08em', fontWeight: 700, display: 'block', marginBottom: 5 }}>CORREO ELECTRÓNICO</label>
                          <input
                            type="email"
                            placeholder="juan@email.com"
                            value={lead.email}
                            onChange={e => setLead(l => ({ ...l, email: e.target.value }))}
                            required
                            style={inputStyle}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          style={{
                            marginTop: 6,
                            background: submitting ? 'rgba(201,146,42,0.5)' : 'linear-gradient(90deg, #C9922A, #a87020)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '13px',
                            fontSize: 13,
                            fontWeight: 800,
                            cursor: submitting ? 'default' : 'pointer',
                            letterSpacing: '0.06em',
                            transition: 'background 0.2s',
                            WebkitTapHighlightColor: 'transparent',
                          }}
                        >
                          {submitting ? 'CARGANDO...' : 'VER MIS PROYECTOS →'}
                        </button>

                        <button
                          type="button"
                          onClick={() => setShowLead(false)}
                          style={{ background: 'none', border: 'none', color: 'rgba(239,239,239,0.35)', fontSize: 12, cursor: 'pointer', padding: '4px 0' }}
                        >
                          ← Volver
                        </button>
                      </form>
                    </div>
                  )}

              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
