'use client';

import { useState } from 'react';

const MAPS_URL = 'https://www.google.com/maps/place/Lion+Global+Sales+Consulting/@-34.5369211,-58.4698353,17z/data=!4m8!3m7!1s0x9584ddae84cff001:0x54fb515e4900f951!8m2!3d-34.5369255!4d-58.4672604!9m1!1b1!16s%2Fg%2F11y43zrwcm?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D';

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

const reviews = [
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

export default function NosotrosPage() {
  const [reviewPage, setReviewPage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const totalPages = Math.ceil(reviews.length / 3);
  const visible = reviews.slice(reviewPage * 3, reviewPage * 3 + 3);

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
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 18 }}>
                    {['Martillero Público', 'Corredor Público', '+10 años de experiencia', 'Especialista América + Europa'].map((c, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#C9922A', fontSize: 13, fontWeight: 700 }}>✓</span>
                        <span style={{ fontSize: 12, color: 'rgba(239,239,239,0.65)' }}>{c}</span>
                      </div>
                    ))}
                  </div>

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

      {/* ── RESEÑAS GOOGLE MAPS (carrusel) ── */}
      <section style={{ padding: '80px 32px', background: '#101010', borderTop: '1px solid rgba(201,146,42,0.1)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>● LO QUE DICEN</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#efefef', marginBottom: 12 }}>Opiniones de nuestros clientes</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', margin: '0 auto 16px' }} />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(201,146,42,0.1)', border: '1px solid rgba(201,146,42,0.25)', borderRadius: 20, padding: '6px 16px' }}>
              <span style={{ color: '#C9922A', fontSize: 16 }}>★★★★★</span>
              <span style={{ fontSize: 13, color: 'rgba(239,239,239,0.7)', fontWeight: 600 }}>5.0 · 28 reseñas en Google</span>
            </div>
          </div>

          {/* Cards */}
          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 36 }}>
            {visible.map((t, i) => (
              <div
                key={`${reviewPage}-${i}`}
                onClick={() => setShowModal(true)}
                style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 12, padding: '28px', cursor: 'pointer', display: 'flex', flexDirection: 'column', animation: 'fadeInUp 0.35s ease both', animationDelay: `${i * 0.07}s` }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(201,146,42,0.2)', border: '2px solid rgba(201,146,42,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: '#C9922A', position: 'absolute', inset: 0 }}>
                      {t.name.charAt(0)}
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.photo}
                      alt={t.name}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(201,146,42,0.3)', position: 'absolute', inset: 0 }}
                    />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#efefef', margin: '0 0 2px' }}>{t.name}</p>
                    <span style={{ color: '#C9922A', fontSize: 12 }}>★★★★★</span>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.72)', lineHeight: 1.8, margin: 0, fontStyle: 'italic', flexGrow: 1 }}>&ldquo;{t.text}&rdquo;</p>
              </div>
            ))}
          </div>

          {/* Controles paginación */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <button
              onClick={() => setReviewPage(p => Math.max(0, p - 1))}
              disabled={reviewPage === 0}
              style={{ width: 40, height: 40, borderRadius: '50%', background: reviewPage === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(201,146,42,0.15)', border: `1px solid ${reviewPage === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(201,146,42,0.4)'}`, color: reviewPage === 0 ? 'rgba(255,255,255,0.2)' : '#C9922A', fontSize: 18, cursor: reviewPage === 0 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >‹</button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewPage(i)}
                style={{ width: i === reviewPage ? 24 : 8, height: 8, borderRadius: 4, background: i === reviewPage ? '#C9922A' : 'rgba(201,146,42,0.25)', border: 'none', cursor: 'pointer', transition: 'all 0.25s', padding: 0 }}
              />
            ))}
            <button
              onClick={() => setReviewPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={reviewPage === totalPages - 1}
              style={{ width: 40, height: 40, borderRadius: '50%', background: reviewPage === totalPages - 1 ? 'rgba(255,255,255,0.05)' : 'rgba(201,146,42,0.15)', border: `1px solid ${reviewPage === totalPages - 1 ? 'rgba(255,255,255,0.1)' : 'rgba(201,146,42,0.4)'}`, color: reviewPage === totalPages - 1 ? 'rgba(255,255,255,0.2)' : '#C9922A', fontSize: 18, cursor: reviewPage === totalPages - 1 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >›</button>
          </div>

          {/* CTA Google Maps */}
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', border: '2px solid rgba(201,146,42,0.5)', color: '#C9922A', padding: '12px 28px', fontSize: 13, fontWeight: 800, borderRadius: 4, textDecoration: 'none', letterSpacing: '0.08em' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              VER TODAS LAS RESEÑAS EN GOOGLE MAPS
            </a>
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

      {/* ── Modal Google Maps ── */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
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
              onClick={() => setShowModal(false)}
              style={{ background: 'transparent', border: 'none', color: 'rgba(239,239,239,0.4)', fontSize: 12, cursor: 'pointer', padding: '8px 16px', letterSpacing: '0.06em' }}
            >
              CANCELAR
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .founder-grid { grid-template-columns: 1fr !important; }
          .diffs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .values-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
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
