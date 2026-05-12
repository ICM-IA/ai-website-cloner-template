'use client';

import { useEffect, useState } from 'react';

const WA_URL = 'https://wa.me/5492233559834';
const MAPS_BUE = 'https://www.google.com/maps/search/?api=1&query=Pico+1671+4D+Buenos+Aires+Argentina';
const MAPS_MDQ = 'https://www.google.com/maps/search/?api=1&query=Av+Constitucion+4569+Piso+3+Mar+del+Plata';
const BOOKING_SRC = 'https://api.icm-ia.com/widget/booking/eUHMDjB5oFxtYa1y7Bbd';

export default function ContactoPage() {
  const [showCalModal, setShowCalModal] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.icm-ia.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

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

          <div className="quick-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {[
              { icon: '💬', label: 'WhatsApp', sub: 'Respuesta inmediata', href: WA_URL },
              { icon: '📅', label: 'Zoom', sub: 'Agendar reunión', href: '#form' },
              { icon: '✉️', label: 'Email', sub: 'info@liongsc.com', href: 'mailto:info@liongsc.com' },
              { icon: '📍', label: 'Oficinas', sub: 'Buenos Aires · Mar del Plata', href: MAPS_BUE },
            ].map((c, i) => (
              <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="quick-card"
                style={{ background: '#151515', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '18px 20px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}
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
      <section id="form" style={{ padding: '56px 32px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 52, alignItems: 'start' }}>

          {/* LEFT: FORM EMBED */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>● ESCRIBINOS</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef', marginBottom: 6 }}>Envianos tu consulta</h2>
            <div style={{ height: 3, width: 40, background: '#C9922A', marginBottom: 32 }} />
            <iframe
              src="https://api.icm-ia.com/widget/form/ObdWKp9erbfZyX8AmG2X"
              style={{ width: '100%', height: 900, border: 'none', borderRadius: 8, display: 'block' }}
              id="inline-ObdWKp9erbfZyX8AmG2X"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form pagina contactos - web"
              data-height="900"
              data-layout-iframe-id="inline-ObdWKp9erbfZyX8AmG2X"
              data-form-id="ObdWKp9erbfZyX8AmG2X"
              title="Form pagina contactos - web"
            />
          </div>

          {/* RIGHT: SIDEBAR — solo mapas */}
          <aside>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', marginBottom: 8 }}>Nuestras oficinas</h3>
            <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.4)', lineHeight: 1.7, marginBottom: 24 }}>
              Podés visitarnos en cualquiera de nuestras sedes. También atendemos por Zoom para inversores de todo el país y el exterior.
            </p>

            {/* Buenos Aires */}
            <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden', marginBottom: 20 }}>
              <div style={{ height: 140, overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7!2d-58.4672604!3d-34.5369255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddae84cff001%3A0x54fb515e4900f951!2sPico%201671%2C%20C1425%20CABA!5e0!3m2!1ses!2sar!4v1"
                  width="100%" height="140"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Buenos Aires"
                />
              </div>
              <div style={{ padding: '16px 18px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: '#efefef' }}>Buenos Aires</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#101010', background: '#C9922A', borderRadius: 20, padding: '2px 10px' }}>Sede Principal</span>
                </div>
                {[
                  { icon: '📍', text: 'Pico 1671, Oficina 4D — Ciudad Autónoma de Buenos Aires' },
                  { icon: '🕐', text: 'Lunes a viernes · 9:00 a 19:00 hs' },
                  { icon: '📞', text: 'Consultas presenciales y por Zoom' },
                  { icon: '🚇', text: 'Accesible en subte y colectivo' },
                ].map((r, i) => (
                  <p key={i} style={{ fontSize: 11, color: 'rgba(239,239,239,0.5)', margin: '0 0 5px', display: 'flex', gap: 6 }}>
                    <span>{r.icon}</span><span>{r.text}</span>
                  </p>
                ))}
                <a href={MAPS_BUE} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', marginTop: 14, border: '1px solid rgba(201,146,42,0.3)', borderRadius: 6, padding: '9px', fontSize: 11, fontWeight: 700, color: '#C9922A', textDecoration: 'none' }}>
                  Ver en Google Maps →
                </a>
              </div>
            </div>

            {/* Mar del Plata */}
            <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ height: 140, overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.0!2d-57.5442!3d-38.0055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc7b7b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sAv.+Constituci%C3%B3n+4569%2C+Mar+del+Plata!5e0!3m2!1ses!2sar!4v1"
                  width="100%" height="140"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Mar del Plata"
                />
              </div>
              <div style={{ padding: '16px 18px 18px' }}>
                <p style={{ fontSize: 15, fontWeight: 800, color: '#efefef', marginBottom: 10 }}>Mar del Plata</p>
                {[
                  { icon: '📍', text: 'Av. Constitución 4569, Piso 3 — Mar del Plata, Buenos Aires' },
                  { icon: '🕐', text: 'Lunes a viernes · 9:00 a 19:00 hs' },
                  { icon: '📞', text: 'Consultas presenciales y por Zoom' },
                  { icon: '🌊', text: 'A 10 minutos del centro' },
                ].map((r, i) => (
                  <p key={i} style={{ fontSize: 11, color: 'rgba(239,239,239,0.5)', margin: '0 0 5px', display: 'flex', gap: 6 }}>
                    <span>{r.icon}</span><span>{r.text}</span>
                  </p>
                ))}
                <a href={MAPS_MDQ} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', marginTop: 14, border: '1px solid rgba(201,146,42,0.3)', borderRadius: 6, padding: '9px', fontSize: 11, fontWeight: 700, color: '#C9922A', textDecoration: 'none' }}>
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── FILA INFERIOR: las dos cards al mismo nivel y mismo tamaño ── */}
      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 52, alignItems: 'stretch' }}>

          {/* Card izquierda: contacto directo */}
          <div style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.18)', borderRadius: 14, padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: 15, fontWeight: 800, color: '#efefef', marginBottom: 8 }}>
                ¿Preferís contactarnos directamente?
              </p>
              <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.5)', lineHeight: 1.75 }}>
                Dejanos tu consulta por WhatsApp y te respondemos en minutos, o agendá una reunión con uno de nuestros asesores en el horario que más te convenga.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 24, flexWrap: 'wrap' }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, minWidth: 160, background: '#25D366', color: '#fff', borderRadius: 8, padding: '13px 20px', fontSize: 13, fontWeight: 800, textDecoration: 'none', textAlign: 'center', letterSpacing: '0.03em' }}>
                💬 Escribir por WhatsApp
              </a>
              <button onClick={() => setShowCalModal(true)}
                style={{ flex: 1, minWidth: 160, background: 'transparent', color: '#C9922A', border: '2px solid rgba(201,146,42,0.5)', borderRadius: 8, padding: '13px 20px', fontSize: 13, fontWeight: 800, cursor: 'pointer', letterSpacing: '0.03em' }}>
                📅 Agendar una reunión
              </button>
            </div>
          </div>

          {/* Card derecha: contacto directo info */}
          <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 800, color: '#efefef', marginBottom: 16 }}>Contacto directo</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {[
                  { icon: '✉️', label: 'Email', value: 'info@liongsc.com', href: 'mailto:info@liongsc.com' },
                  { icon: '🌐', label: 'Web', value: 'www.liongsc.com', href: 'https://www.liongsc.com' },
                  { icon: '📸', label: 'Instagram', value: '@lion.gsc', href: 'https://instagram.com/lion.gsc' },
                  { icon: '💼', label: 'LinkedIn', value: '/liongsc', href: 'https://linkedin.com/company/liongsc' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 14, width: 22, flexShrink: 0 }}>{c.icon}</span>
                    <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)' }}>{c.label} ·</span>
                    <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: '#C9922A', fontWeight: 700, textDecoration: 'none' }}>{c.value}</a>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 14, marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 14 }}>🕐</span>
              <div>
                <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.45)' }}>Horario de atención</span>
                <span style={{ fontSize: 11, color: '#C9922A', fontWeight: 700, marginLeft: 8 }}>Lun–Vie · 9:00 a 19:00 hs (ARG)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Modal calendario — con scroll ── */}
      {showCalModal && (
        <div
          onClick={() => setShowCalModal(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.82)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.25)', borderRadius: 16, width: '100%', maxWidth: 820, maxHeight: '92vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
              <div>
                <p style={{ fontSize: 16, fontWeight: 800, color: '#efefef', margin: '0 0 2px' }}>📅 Agendar reunión con un asesor</p>
                <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.4)', margin: 0 }}>Elegí el día y horario que mejor te quede</p>
              </div>
              <button onClick={() => setShowCalModal(false)}
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(239,239,239,0.5)', fontSize: 20, width: 38, height: 38, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                ×
              </button>
            </div>
            {/* Calendario con scroll */}
            <div style={{ overflowY: 'auto', flexGrow: 1, background: '#1a1a2e' }}>
              <iframe
                src={BOOKING_SRC}
                style={{ width: '100%', border: 'none', display: 'block', height: 800 }}
                id="eUHMDjB5oFxtYa1y7Bbd_modal"
                title="Agendar reunión"
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .quick-card:hover { border-color: rgba(201,146,42,0.35) !important; transition: border-color 0.15s; }
        @media (max-width: 900px) {
          .quick-cards { grid-template-columns: repeat(2, 1fr) !important; }
          section > div[style*="grid-template-columns: 1fr 380px"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .quick-cards { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

    </main>
  );
}
