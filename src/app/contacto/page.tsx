'use client';

import { useState } from 'react';

const WA_NUMBER = '5492233559834';
const WA_URL = `https://wa.me/${WA_NUMBER}`;
const MAPS_BUE = 'https://www.google.com/maps/search/?api=1&query=Pico+1671+4D+Buenos+Aires+Argentina';
const MAPS_MDQ = 'https://www.google.com/maps/search/?api=1&query=Av+Constitucion+4569+Piso+3+Mar+del+Plata';

const MARKETS = [
  { label: 'USA', flag: '🇺🇸' },
  { label: 'Brasil', flag: '🇧🇷' },
  { label: 'Argentina', flag: '🇦🇷' },
  { label: 'Dubai', flag: '🇦🇪' },
  { label: 'España', flag: '🇪🇸' },
  { label: 'Italia', flag: '🇮🇹' },
  { label: 'Otro', flag: '' },
];

const OBJECTIVES = ['Renta / alquiler', 'Plusvalía', 'Diversificar patrimonio', 'Residencia + inversión'];

const BUDGET_OPTIONS = [
  'Hasta USD 50.000',
  'USD 50.000 – 100.000',
  'USD 100.000 – 200.000',
  'USD 200.000 – 500.000',
  'Más de USD 500.000',
];

export default function ContactoPage() {
  const [market, setMarket] = useState('USA');
  const [objective, setObjective] = useState('Renta / alquiler');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [mensaje, setMensaje] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Lion GSC! Te escribo desde la web.\n\n` +
      `📍 Mercado: ${market}\n🎯 Objetivo: ${objective}\n` +
      `👤 Nombre: ${nombre}\n📧 Email: ${email}\n📱 Teléfono: ${telefono}\n` +
      `💰 Presupuesto: ${presupuesto || 'No indicado'}\n\n` +
      `${mensaje}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
  }

  const pillBtn = (active: boolean) => ({
    background: active ? 'rgba(201,146,42,0.15)' : 'transparent',
    border: `1px solid ${active ? 'rgba(201,146,42,0.6)' : 'rgba(255,255,255,0.12)'}`,
    color: active ? '#C9922A' : 'rgba(239,239,239,0.55)',
    borderRadius: 20,
    padding: '6px 16px',
    fontSize: 12,
    fontWeight: 700,
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
    letterSpacing: '0.02em',
    transition: 'all 0.15s',
  });

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    padding: '12px 16px',
    fontSize: 13,
    color: '#efefef',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  return (
    <main style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#101010', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{ background: '#0d0d0d', borderBottom: '1px solid rgba(201,146,42,0.12)', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 16 }}>● CONTACTO</p>
          <h1 style={{ fontSize: 46, fontWeight: 800, color: '#efefef', lineHeight: 1.15, marginBottom: 18 }}>
            Hablemos sobre<br />tu próxima <span style={{ color: '#C9922A' }}>inversión</span>
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.5)', lineHeight: 1.8, maxWidth: 540, marginBottom: 44 }}>
            Estamos en Buenos Aires y Mar del Plata, pero atendemos inversores de toda América Latina. Escribinos por el canal que prefieras — respondemos en menos de 24 horas.
          </p>

          {/* Quick contact cards */}
          <div className="quick-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {[
              { icon: '💬', label: 'WhatsApp', sub: 'Respuesta inmediata', href: WA_URL },
              { icon: '📅', label: 'Zoom', sub: 'Agendar reunión', href: '#form' },
              { icon: '✉️', label: 'Email', sub: 'alan@liongsc.com', href: 'mailto:alan@liongsc.com' },
              { icon: '📍', label: 'Oficinas', sub: 'Buenos Aires · Mar del Plata', href: MAPS_BUE },
            ].map((c, i) => (
              <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ background: '#151515', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '18px 20px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14, transition: 'border-color 0.15s' }}
                className="quick-card"
              >
                <span style={{ fontSize: 26, flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 800, color: '#efefef', margin: '0 0 2px' }}>{c.label}</p>
                  <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)', margin: 0 }}>{c.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section id="form" style={{ padding: '56px 32px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 52, alignItems: 'start' }}>

          {/* ── LEFT: FORM ── */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>● ESCRIBINOS</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef', marginBottom: 6 }}>Envianos tu consulta</h2>
            <div style={{ height: 3, width: 40, background: '#C9922A', marginBottom: 36 }} />

            <form onSubmit={handleSubmit}>
              {/* Mercado */}
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(239,239,239,0.45)', letterSpacing: '0.12em', marginBottom: 10 }}>¿QUÉ MERCADO TE INTERESA?</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {MARKETS.map(m => (
                    <button key={m.label} type="button" onClick={() => setMarket(m.label)} style={pillBtn(market === m.label)}>
                      {m.flag && <span style={{ marginRight: 5 }}>{m.flag}</span>}{m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Objetivo */}
              <div style={{ marginBottom: 28 }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(239,239,239,0.45)', letterSpacing: '0.12em', marginBottom: 10 }}>¿CUÁL ES TU OBJETIVO?</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {OBJECTIVES.map(o => (
                    <button key={o} type="button" onClick={() => setObjective(o)} style={pillBtn(objective === o)}>{o}</button>
                  ))}
                </div>
              </div>

              {/* Nombre + Email */}
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 12, color: 'rgba(239,239,239,0.55)', display: 'block', marginBottom: 6 }}>Nombre completo *</label>
                  <input type="text" placeholder="Ej: Juan García" value={nombre} onChange={e => setNombre(e.target.value)} required style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: 'rgba(239,239,239,0.55)', display: 'block', marginBottom: 6 }}>Email *</label>
                  <input type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
                </div>
              </div>

              {/* Teléfono + Presupuesto */}
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 12, color: 'rgba(239,239,239,0.55)', display: 'block', marginBottom: 6 }}>Teléfono / WhatsApp *</label>
                  <input type="tel" placeholder="+54 9 223..." value={telefono} onChange={e => setTelefono(e.target.value)} required style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: 'rgba(239,239,239,0.55)', display: 'block', marginBottom: 6 }}>Presupuesto aproximado</label>
                  <select value={presupuesto} onChange={e => setPresupuesto(e.target.value)} style={{ ...inputStyle, appearance: 'none' as const }}>
                    <option value="">Seleccionar rango...</option>
                    {BUDGET_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div style={{ marginBottom: 28 }}>
                <label style={{ fontSize: 12, color: 'rgba(239,239,239,0.55)', display: 'block', marginBottom: 6 }}>¿En qué podemos ayudarte?</label>
                <textarea
                  placeholder="Contanos tu objetivo, dudas o cualquier consulta que tengas sobre inversiones inmobiliarias..."
                  value={mensaje}
                  onChange={e => setMensaje(e.target.value)}
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                />
              </div>

              {/* Botones */}
              <button type="submit" style={{ width: '100%', background: '#C9922A', color: '#101010', border: 'none', borderRadius: 8, padding: '14px', fontSize: 14, fontWeight: 800, cursor: 'pointer', letterSpacing: '0.04em', marginBottom: 12 }}>
                Enviar consulta →
              </button>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', width: '100%', background: '#25D366', color: '#fff', border: 'none', borderRadius: 8, padding: '14px', fontSize: 14, fontWeight: 800, cursor: 'pointer', letterSpacing: '0.04em', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box' }}
              >
                💬 Escribir por WhatsApp directamente
              </a>

              <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.3)', textAlign: 'center', marginTop: 14 }}>
                🔒 Tu información es 100% confidencial y no será compartida
              </p>
            </form>
          </div>

          {/* ── RIGHT: SIDEBAR ── */}
          <aside>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', marginBottom: 8 }}>Nuestras oficinas</h3>
            <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.4)', lineHeight: 1.7, marginBottom: 24 }}>
              Podés visitarnos en cualquiera de nuestras sedes. También atendemos por Zoom para inversores de todo el país y el exterior.
            </p>

            {/* Buenos Aires */}
            <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden', marginBottom: 20 }}>
              <div style={{ height: 140, overflow: 'hidden', position: 'relative' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7!2d-58.4672604!3d-34.5369255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddae84cff001%3A0x54fb515e4900f951!2sPico%201671%2C%20C1425%20CABA!5e0!3m2!1ses!2sar!4v1"
                  width="100%"
                  height="140"
                  style={{ border: 0, display: 'block', filter: 'grayscale(1) invert(1) brightness(0.85)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Buenos Aires"
                />
              </div>
              <div style={{ padding: '16px 18px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: '#efefef' }}>Buenos Aires</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#101010', background: '#C9922A', borderRadius: 20, padding: '2px 10px' }}>Sede Principal</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    { icon: '📍', text: 'Pico 1671, Oficina 4D — Ciudad Autónoma de Buenos Aires' },
                    { icon: '🕐', text: 'Lunes a viernes · 9:00 a 19:00 hs' },
                    { icon: '📞', text: 'Consultas presenciales y por Zoom' },
                    { icon: '🚇', text: 'Accesible en subte y colectivo' },
                  ].map((r, i) => (
                    <p key={i} style={{ fontSize: 11, color: 'rgba(239,239,239,0.5)', margin: 0, display: 'flex', gap: 6 }}>
                      <span>{r.icon}</span><span>{r.text}</span>
                    </p>
                  ))}
                </div>
                <a href={MAPS_BUE} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', marginTop: 14, background: 'transparent', border: '1px solid rgba(201,146,42,0.3)', borderRadius: 6, padding: '9px', fontSize: 11, fontWeight: 700, color: '#C9922A', textDecoration: 'none' }}>
                  Ver en Google Maps →
                </a>
              </div>
            </div>

            {/* Mar del Plata */}
            <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden', marginBottom: 20 }}>
              <div style={{ height: 140, overflow: 'hidden', position: 'relative' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.0!2d-57.5442!3d-38.0055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc7b7b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sAv.+Constituci%C3%B3n+4569%2C+Mar+del+Plata!5e0!3m2!1ses!2sar!4v1"
                  width="100%"
                  height="140"
                  style={{ border: 0, display: 'block', filter: 'grayscale(1) invert(1) brightness(0.85)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mar del Plata"
                />
              </div>
              <div style={{ padding: '16px 18px 18px' }}>
                <p style={{ fontSize: 15, fontWeight: 800, color: '#efefef', marginBottom: 10 }}>Mar del Plata</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    { icon: '📍', text: 'Av. Constitución 4569, Piso 3 — Mar del Plata, Buenos Aires' },
                    { icon: '🕐', text: 'Lunes a viernes · 9:00 a 19:00 hs' },
                    { icon: '📞', text: 'Consultas presenciales y por Zoom' },
                    { icon: '🌊', text: 'A 10 minutos del centro' },
                  ].map((r, i) => (
                    <p key={i} style={{ fontSize: 11, color: 'rgba(239,239,239,0.5)', margin: 0, display: 'flex', gap: 6 }}>
                      <span>{r.icon}</span><span>{r.text}</span>
                    </p>
                  ))}
                </div>
                <a href={MAPS_MDQ} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', marginTop: 14, background: 'transparent', border: '1px solid rgba(201,146,42,0.3)', borderRadius: 6, padding: '9px', fontSize: 11, fontWeight: 700, color: '#C9922A', textDecoration: 'none' }}>
                  Ver en Google Maps →
                </a>
              </div>
            </div>

            {/* Contacto directo */}
            <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px 18px 20px' }}>
              <p style={{ fontSize: 13, fontWeight: 800, color: '#efefef', marginBottom: 14 }}>Contacto directo</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                {[
                  { icon: '✉️', label: 'Email', value: 'alan@liongsc.com', href: 'mailto:alan@liongsc.com' },
                  { icon: '🌐', label: 'Web', value: 'www.liongsc.com', href: 'https://www.liongsc.com' },
                  { icon: '📸', label: 'Instagram', value: '@lion.gsc', href: 'https://instagram.com/lion.gsc' },
                  { icon: '💼', label: 'LinkedIn', value: '/liongsc', href: 'https://linkedin.com/company/liongsc' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 14, width: 22, flexShrink: 0 }}>{c.icon}</span>
                    <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)' }}>{c.label} ·</span>
                    <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: '#C9922A', fontWeight: 700, textDecoration: 'none' }}>{c.value}</a>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 14 }}>🕐</span>
                <div>
                  <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.45)' }}>Horario de atención</span>
                  <span style={{ fontSize: 11, color: '#C9922A', fontWeight: 700, marginLeft: 8 }}>Lun–Vie · 9:00 a 19:00 hs (ARG)</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .quick-card:hover { border-color: rgba(201,146,42,0.35) !important; }
        @media (max-width: 900px) {
          .quick-cards { grid-template-columns: repeat(2, 1fr) !important; }
          section > div[style*="grid-template-columns: 1fr 380px"] { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .quick-cards { grid-template-columns: 1fr 1fr !important; }
        }
        select option { background: #1a1a1a; color: #efefef; }
        input::placeholder, textarea::placeholder { color: rgba(239,239,239,0.25); }
        input:focus, textarea:focus, select:focus { border-color: rgba(201,146,42,0.5) !important; }
      `}</style>

    </main>
  );
}
