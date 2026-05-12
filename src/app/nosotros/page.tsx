import Link from 'next/link';

const heroStats = [
  { value: '500+', label: 'Inversores asesorados' },
  { value: '10', label: 'Mercados activos' },
  { value: '5.0★', label: 'Google Reviews' },
  { value: '100%', label: 'Operaciones online' },
];

const team = [
  { role: 'Asesor USA', zones: 'Miami · Orlando · Florida', flag: '🇺🇸' },
  { role: 'Asesor Brasil Sur', zones: 'Santa Catarina · Florianópolis · Balneário Camboriú · Itapema', flag: '🇧🇷' },
  { role: 'Asesor Brasil Nordeste', zones: 'Maragogi · Tamandaré · Porto de Galinhas', flag: '🇧🇷' },
  { role: 'Asesor Europa + Dubai', zones: 'Dubai · España · Italia', flag: '🌍' },
];

const diffs = [
  { icon: '🎯', title: 'Acompañamiento real', desc: 'Estamos con vos en cada paso, desde el análisis hasta la firma del contrato.' },
  { icon: '🌍', title: '10 mercados', desc: 'Cobertura en América, Europa y Medio Oriente con presencia local.' },
  { icon: '⚖️', title: 'Respaldo jurídico', desc: 'Asesoramiento legal local en cada destino donde operamos.' },
  { icon: '🔍', title: 'Selección rigurosa', desc: 'Solo presentamos proyectos que superan nuestros estándares de calidad.' },
  { icon: '📱', title: '100% remoto', desc: 'Operamos desde donde estés. Sin burocracia, sin viajes innecesarios.' },
  { icon: '🤝', title: 'Largo plazo', desc: 'No somos vendedores: somos socios estratégicos de tu patrimonio.' },
];

const values = [
  { n: '01', title: 'Transparencia total', desc: 'Te decimos exactamente cómo funciona cada mercado, con datos reales.' },
  { n: '02', title: 'El objetivo del cliente, primero', desc: 'Tu rentabilidad y seguridad jurídica antes que cualquier comisión.' },
  { n: '03', title: 'Acompañamiento de largo plazo', desc: 'Seguimos a tu lado después del cierre. La relación no termina en la firma.' },
  { n: '04', title: 'Rigor en la selección', desc: 'Analizamos decenas de proyectos para que solo veas los mejores.' },
];

const testimonials = [
  {
    name: 'Romina Pedrolí',
    subtitle: 'Inversora · Brasil SC',
    stars: 5,
    text: 'Invertí en Santa Catarina con Lion GSC y fue una experiencia impecable. Cada paso explicado, sin sorpresas, y la rentabilidad superó mis expectativas.',
  },
  {
    name: 'Damián Terzano',
    subtitle: 'Real Estate Internacional',
    stars: 5,
    text: 'Lo que más valoro es la honestidad. Alan y su equipo te muestran el mercado real, no el cuento de hadas. Eso genera confianza.',
  },
  {
    name: 'Leonardo Mesiti',
    subtitle: 'Cliente desde 2018',
    stars: 5,
    text: 'Ya llevo tres operaciones con ellos en distintos mercados. La consistencia y el acompañamiento de largo plazo son únicos en el sector.',
  },
];

export default function NosotrosPage() {
  return (
    <main style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#101010', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{ background: '#0d0d0d', borderBottom: '1px solid rgba(201,146,42,0.15)', padding: '72px 32px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 16 }}>● QUIÉNES SOMOS</p>
            <h1 style={{ fontSize: 44, fontWeight: 800, color: '#efefef', lineHeight: 1.15, marginBottom: 36 }}>
              Más de 10 años conectando inversores con mercados reales
            </h1>
            <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {heroStats.map((s, i) => (
                <div key={i}>
                  <p style={{ fontSize: 28, fontWeight: 800, color: '#C9922A', margin: '0 0 4px' }}>{s.value}</p>
                  <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.45)', lineHeight: 1.4, margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lion card */}
          <div style={{ background: 'linear-gradient(135deg, #1a1206, #0e0e0e)', border: '1px solid rgba(201,146,42,0.25)', borderRadius: 20, padding: '40px 28px', textAlign: 'center' }}>
            <div style={{ marginBottom: 18, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/lion-icon-transparent.png" alt="Lion GSC" style={{ width: 90, height: 90, objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: 18, fontWeight: 800, color: '#efefef', margin: '0 0 6px' }}>Lion GSC</p>
            <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.45)', marginBottom: 24 }}>Desde Argentina al mundo</p>
            <div style={{ paddingTop: 20, borderTop: '1px solid rgba(201,146,42,0.15)' }}>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                {['🇦🇷', '🇧🇷', '🇺🇸', '🇦🇪', '🇪🇸', '🇮🇹', '🇵🇾', '🇺🇾'].map((f, i) => (
                  <span key={i} style={{ fontSize: 22 }}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FUNDADOR ── */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 12 }}>● EL FUNDADOR</p>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#efefef', lineHeight: 1.2, marginBottom: 52 }}>
            Una trayectoria construida<br />operación por operación
          </h2>

          <div className="founder-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'start' }}>

            {/* Left: foto de Alan — PRESERVADA */}
            <div>
              <div style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.25)', borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
                <div style={{ width: '100%' }}>
                  <img src="/images/alan-yorno.png" alt="Alan Yorno" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div style={{ padding: '22px 26px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', margin: '0 0 3px' }}>Alan Yorno</h3>
                      <p style={{ fontSize: 10, color: '#C9922A', fontWeight: 700, letterSpacing: '0.12em', margin: 0 }}>FUNDADOR & CEO</p>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#101010', background: '#C9922A', borderRadius: 20, padding: '4px 12px', whiteSpace: 'nowrap' }}>
                      Fundador & CEO
                    </span>
                  </div>

                  {/* Credenciales */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 18 }}>
                    {['Martillero Público', 'Corredor Público', '+10 años de experiencia', 'Especialista América + Europa'].map((c, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#C9922A', fontSize: 13, fontWeight: 700 }}>✓</span>
                        <span style={{ fontSize: 12, color: 'rgba(239,239,239,0.65)' }}>{c}</span>
                      </div>
                    ))}
                  </div>

                  {/* Social */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {['LinkedIn', 'Instagram', 'WhatsApp'].map(s => (
                      <a key={s} href="#" style={{ fontSize: 11, color: 'rgba(239,239,239,0.5)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '5px 12px', textDecoration: 'none' }}>
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: quote + bio + stats */}
            <div>
              <blockquote style={{ borderLeft: '3px solid #C9922A', paddingLeft: 22, margin: '0 0 28px', color: '#efefef', fontSize: 17, fontWeight: 700, lineHeight: 1.55, fontStyle: 'italic' }}>
                &ldquo;Empecé cerrando operaciones en Mar del Plata. Hoy cerramos en Dubai, Miami y Brasil. El secreto siempre fue el mismo: entender lo que el inversor realmente necesita.&rdquo;
              </blockquote>

              <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.65)', lineHeight: 1.85, marginBottom: 14 }}>
                Alan Yorno es Martillero y Corredor Público con más de 10 años de trayectoria en el sector inmobiliario. Comenzó su carrera en Mar del Plata y Buenos Aires, donde construyó una sólida base en comercialización de proyectos residenciales y de inversión.
              </p>
              <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.65)', lineHeight: 1.85, marginBottom: 36 }}>
                Con el tiempo, expandió su red hacia mercados internacionales — Brasil, USA, España y Dubai — hasta fundar Lion GSC, una consultora especializada en conectar inversores argentinos y latinoamericanos con las mejores oportunidades del mundo.
              </p>

              {/* Stats boxes */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
                {[
                  { value: 'Martillero y CP', label: 'Matriculado' },
                  { value: '10 mercados', label: 'Internacionales' },
                  { value: '500+', label: 'Inversores asesorados' },
                  { value: '5.0 ⭐', label: 'Google Reviews' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 10, padding: '16px 20px' }}>
                    <p style={{ fontSize: 15, fontWeight: 800, color: '#C9922A', margin: '0 0 4px' }}>{s.value}</p>
                    <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)', margin: 0 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <section style={{ background: '#0d0d0d', padding: '72px 32px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 12 }}>● NUESTRO EQUIPO</p>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef', marginBottom: 40 }}>Especialistas en cada mercado</h2>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {team.map((m, i) => (
              <div key={i} style={{ background: '#151515', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ background: 'rgba(201,146,42,0.05)', height: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: 44, marginBottom: 10 }}>👤</span>
                  <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.2)', margin: 0, textAlign: 'center', padding: '0 16px' }}>Foto del equipo próximamente</p>
                </div>
                <div style={{ padding: '18px 18px 22px' }}>
                  <span style={{ fontSize: 20 }}>{m.flag}</span>
                  <p style={{ fontSize: 13, fontWeight: 800, color: '#efefef', margin: '8px 0 6px' }}>{m.role}</p>
                  <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.35)', lineHeight: 1.55, margin: 0 }}>{m.zones}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADORES ── */}
      <section style={{ padding: '72px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 12 }}>● POR QUÉ ELEGIRNOS</p>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef', marginBottom: 40 }}>Lo que nos diferencia</h2>
          <div className="diffs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {diffs.map((d, i) => (
              <div key={i} className="diff-card" style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 24px' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{d.icon}</div>
                <p style={{ fontSize: 14, fontWeight: 800, color: '#efefef', margin: '0 0 8px' }}>{d.title}</p>
                <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.5)', lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILOSOFÍA / VALORES ── */}
      <section style={{ background: '#0d0d0d', padding: '72px 32px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 12 }}>● NUESTRA FILOSOFÍA</p>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef', lineHeight: 1.25, marginBottom: 20 }}>Por qué los clientes vuelven</h2>
              <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.55)', lineHeight: 1.85 }}>
                No somos un call center de inversiones. Somos un equipo pequeño, especializado, con presencia real en cada mercado donde operamos. Cada asesor conoce el terreno, los desarrolladores, los riesgos y las oportunidades de primera mano.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {values.map((v, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#C9922A', minWidth: 28, paddingTop: 1, letterSpacing: '0.02em' }}>{v.n}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 800, color: '#efefef', margin: '0 0 4px' }}>{v.title}</p>
                    <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.5)', lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section style={{ padding: '72px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 12 }}>● LO QUE DICEN</p>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef', marginBottom: 40 }}>Inversores que nos eligen</h2>
          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 18 }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} style={{ color: '#C9922A', fontSize: 14 }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.7)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 20, flexGrow: 1 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 800, color: '#efefef', margin: '0 0 2px' }}>{t.name}</p>
                  <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)', margin: 0 }}>{t.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#0d0d0d', borderTop: '1px solid rgba(201,146,42,0.15)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 16 }}>● ¿HABLAMOS?</p>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#efefef', lineHeight: 1.2, marginBottom: 14 }}>¿Querés conocernos mejor?</h2>
          <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.5)', marginBottom: 36, lineHeight: 1.75 }}>
            Agendá una reunión de 30 minutos sin cargo. Te contamos cómo trabajamos, qué mercados operamos y si tu perfil de inversor encaja con nuestra propuesta.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', borderRadius: 6, padding: '13px 28px', fontSize: 13, fontWeight: 800, textDecoration: 'none', letterSpacing: '0.04em' }}
            >
              💬 WhatsApp
            </a>
            <a
              href="#"
              style={{ background: 'transparent', color: '#efefef', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 6, padding: '13px 28px', fontSize: 13, fontWeight: 800, textDecoration: 'none', letterSpacing: '0.04em' }}
            >
              📅 Zoom — Agendar reunión
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .founder-grid { grid-template-columns: 1fr !important; }
          .diffs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .values-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr !important; }
          .diffs-grid { grid-template-columns: 1fr !important; }
        }
        .diff-card:hover { border-color: rgba(201,146,42,0.3) !important; transition: border-color 0.2s; }
      `}</style>

    </main>
  );
}
