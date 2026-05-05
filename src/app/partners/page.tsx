'use client';

const partners = [
  { name: 'FSR',           region: 'Argentina', country: 'ar', desc: 'Desarrolladora líder en el mercado residencial premium de Buenos Aires.' },
  { name: 'Gesmar',        region: 'Argentina', country: 'ar', desc: 'Especialistas en comercialización y gestión de proyectos inmobiliarios.' },
  { name: 'Metro Cúbico',  region: 'México',    country: 'mx', desc: 'Plataforma líder de búsqueda y venta de inmuebles en México.' },
  { name: 'Forest',        region: 'Brasil',    country: 'br', desc: 'Desarrolladora enfocada en proyectos sostenibles y de alto valor.' },
  { name: 'Floripa',       region: 'Brasil',    country: 'br', desc: 'Referente en el mercado inmobiliario de Florianópolis y Santa Catarina.' },
  { name: 'Q Group',       region: 'Panamá',    country: 'pa', desc: 'Grupo desarrollador con proyectos residenciales y comerciales en Centroamérica.' },
  { name: 'Fortune',       region: 'UAE',       country: 'ae', desc: 'Bróker internacional con presencia en los Emiratos Árabes y Asia.' },
  { name: 'American Homes',region: 'USA',       country: 'us', desc: 'Agencia especializada en propiedades residenciales en el mercado americano.' },
  { name: 'Petra Urbana',  region: 'España',    country: 'es', desc: 'Promotora inmobiliaria con proyectos en las principales ciudades españolas.' },
];

export default function PartnersPage() {
  return (
    <main className="partners-main" style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#101010', minHeight: 'calc(100vh - 64px)', padding: '60px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>ALIANZAS ESTRATÉGICAS</p>
          <h1 style={{ fontSize: 44, fontWeight: 800, color: '#efefef' }}>Nuestros Partners</h1>
          <div style={{ height: 3, width: 56, background: '#C9922A', marginTop: 12 }} />
          <p style={{ marginTop: 16, fontSize: 14, color: 'rgba(239,239,239,0.5)', maxWidth: 580 }}>
            Trabajamos con líderes internacionales del mercado inmobiliario para ofrecerte las mejores oportunidades.
          </p>
        </div>

        {/* Grid */}
        <div className="partners-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {partners.map((p) => (
            <div
              key={p.name}
              style={{
                background: '#1a1a2e',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14,
                padding: '28px 28px 26px',
                transition: 'border-color 0.2s, transform 0.2s, background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,146,42,0.5)';
                e.currentTarget.style.background = 'rgba(201,146,42,0.06)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.background = '#1a1a2e';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Flag + Region */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <img
                  src={`https://flagcdn.com/w40/${p.country}.png`}
                  alt={p.region}
                  style={{ width: 28, height: 19, objectFit: 'cover', borderRadius: 3, flexShrink: 0 }}
                />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(239,239,239,0.35)', letterSpacing: '0.08em' }}>{p.region.toUpperCase()}</span>
              </div>

              {/* Name */}
              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', marginBottom: 10, lineHeight: 1.2 }}>{p.name}</h3>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 14 }} />

              {/* Desc */}
              <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.5)', lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .partners-main {
              padding: 40px 16px !important;
            }
            .partners-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 480px) {
            .partners-main {
              padding: 32px 12px !important;
            }
            .partners-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        {/* CTA */}
        <div style={{ marginTop: 72, textAlign: 'center', padding: '56px 32px', background: 'rgba(201,146,42,0.06)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 12 }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: '#efefef', marginBottom: 12 }}>¿Querés ser nuestro partner?</h2>
          <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.55)', marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
            Si sos desarrollador, bróker o inversora y querés sumar tu empresa a nuestra red global, contactanos.
          </p>
          <a href="/contacto" style={{ background: '#C9922A', color: '#fff', padding: '13px 36px', fontSize: 13, fontWeight: 800, borderRadius: 6, textDecoration: 'none', letterSpacing: '0.08em' }}>
            SUMATE A LA RED
          </a>
        </div>
      </div>
    </main>
  );
}
