import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, type BodySection } from '../articles';

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

function renderSection(section: BodySection, i: number) {
  switch (section.type) {
    case 'lead':
      return (
        <blockquote key={i} style={{ borderLeft: '3px solid #C9922A', paddingLeft: 20, margin: '0 0 28px', color: 'rgba(239,239,239,0.75)', fontSize: 15, lineHeight: 1.8, fontStyle: 'normal' }}>
          {section.text}
        </blockquote>
      );
    case 'stats':
      return (
        <div key={i} style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 10, padding: '20px 24px', marginBottom: 28, display: 'flex', gap: 0 }}>
          <p style={{ fontSize: 9, fontWeight: 700, color: '#C9922A', letterSpacing: '0.12em', marginBottom: 16 }}>DATOS CLAVE DEL MERCADO — ABRIL 2026</p>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${section.items.length}, 1fr)`, gap: 16 }}>
            {section.items.map((item, j) => (
              <div key={j} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 22, fontWeight: 800, color: '#C9922A', margin: '0 0 4px' }}>{item.value}</p>
                <p style={{ fontSize: 9, color: 'rgba(239,239,239,0.4)', letterSpacing: '0.1em', margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'h2':
      return <h2 key={i} style={{ fontSize: 20, fontWeight: 800, color: '#efefef', margin: '32px 0 14px', lineHeight: 1.3 }}>{section.text}</h2>;
    case 'p':
      return <p key={i} style={{ fontSize: 14, color: 'rgba(239,239,239,0.65)', lineHeight: 1.85, marginBottom: 18 }}>{section.text}</p>;
    case 'boldp': {
      const parts = section.text.split(section.bold);
      return (
        <p key={i} style={{ fontSize: 14, color: 'rgba(239,239,239,0.65)', lineHeight: 1.85, marginBottom: 18 }}>
          {parts[0]}<strong style={{ color: 'rgba(239,239,239,0.9)', fontWeight: 700 }}>{section.bold}</strong>{parts[1] ?? ''}
        </p>
      );
    }
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter(a => a.country === article.country && a.slug !== article.slug).slice(0, 3);

  return (
    <main style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#101010', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <section style={{ background: article.coverBg, minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 32px' }}>
        <span style={{ fontSize: 96, lineHeight: 1 }}>{article.coverEmoji}</span>
      </section>

      {/* ── Breadcrumb + meta ── */}
      <section style={{ background: '#0d0d0d', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.3)', marginBottom: 0 }}>
            <Link href="/noticias" style={{ color: 'rgba(239,239,239,0.35)', textDecoration: 'none' }}>Noticias</Link>
            {' › '}
            <span style={{ color: 'rgba(239,239,239,0.35)' }}>{article.country}</span>
            {' › '}
            <span style={{ color: 'rgba(239,239,239,0.5)' }}>{article.title.slice(0, 50)}…</span>
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section style={{ padding: '48px 32px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, alignItems: 'start' }}>

          {/* Main content */}
          <div>
            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: article.tagColor, background: `${article.tagColor}18`, border: `1px solid ${article.tagColor}40`, borderRadius: 20, padding: '4px 12px', letterSpacing: '0.08em' }}>{article.tag}</span>
              <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.45)' }}>{article.countryFlag} {article.country}{article.region ? ` · ${article.region}` : ''}</span>
              <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.25)' }}>·</span>
              <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)' }}>📅 {article.date} · {article.readTime} min de lectura</span>
            </div>

            {/* Title */}
            <h1 style={{ fontSize: 34, fontWeight: 800, color: '#efefef', lineHeight: 1.25, marginBottom: 32 }}>{article.title}</h1>

            {/* Body sections */}
            <div>
              {article.body.map((section, i) => renderSection(section, i))}
            </div>

            {/* Share */}
            <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, color: 'rgba(239,239,239,0.4)' }}>Compartir:</span>
              {['WhatsApp', 'LinkedIn', 'Copiar link'].map(s => (
                <button key={s} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '6px 16px', fontSize: 11, color: 'rgba(239,239,239,0.55)', cursor: 'pointer' }}>{s}</button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            {/* Newsletter */}
            <div style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.18)', borderRadius: 14, padding: '24px 22px', marginBottom: 28 }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#C9922A', letterSpacing: '0.1em', marginBottom: 6 }}>📰 RECIBÍ NOTICIAS SEMANALES</p>
              <p style={{ fontSize: 13, fontWeight: 800, color: '#efefef', marginBottom: 6 }}>Análisis directo a tu email</p>
              <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)', lineHeight: 1.65, marginBottom: 18 }}>Análisis de los mercados donde operamos, cada lunes.</p>
              <input type="email" placeholder="tu@email.com" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '10px 14px', fontSize: 12, color: '#efefef', marginBottom: 10, outline: 'none', boxSizing: 'border-box' }} />
              <button style={{ width: '100%', background: '#C9922A', color: '#101010', border: 'none', borderRadius: 6, padding: '11px', fontSize: 12, fontWeight: 800, cursor: 'pointer', letterSpacing: '0.04em' }}>
                Suscribirme gratis →
              </button>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(239,239,239,0.4)', letterSpacing: '0.12em', marginBottom: 14 }}>MÁS NOTICIAS DE {article.country.toUpperCase()}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {related.map(r => (
                    <Link key={r.slug} href={`/noticias/${r.slug}`} style={{ textDecoration: 'none' }}>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '14px 16px', transition: 'border-color 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,146,42,0.3)')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                      >
                        <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.3)', marginBottom: 4 }}>📅 {r.date} · {r.readTime} min</p>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#efefef', lineHeight: 1.4, margin: '0 0 4px' }}>{r.title}</p>
                        <p style={{ fontSize: 10, color: r.tagColor, fontWeight: 700 }}>{r.countryFlag} {r.country}{r.region ? ` · ${r.region}` : ''}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* ── Related projects ── */}
      {article.relatedProjects && article.relatedProjects.length > 0 && (
        <section style={{ padding: '0 32px 80px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#efefef', margin: 0 }}>Proyectos disponibles en {article.country}</h2>
              <Link href="/mercados" style={{ fontSize: 12, color: '#C9922A', fontWeight: 700, textDecoration: 'none' }}>Ver todos los proyectos →</Link>
            </div>
            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {article.relatedProjects.map((p, i) => (
                <div key={i} style={{ background: '#0d0d0d', border: '1px solid rgba(201,146,42,0.12)', borderRadius: 14, overflow: 'hidden' }}>
                  <div style={{ background: article.coverBg, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 56 }}>{p.emoji}</span>
                  </div>
                  <div style={{ padding: '18px 18px 20px' }}>
                    <p style={{ fontSize: 14, fontWeight: 800, color: '#efefef', margin: '0 0 6px' }}>{p.name}</p>
                    <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.35)', marginBottom: 12 }}>📍 {p.location}</p>
                    <p style={{ fontSize: 18, fontWeight: 800, color: '#C9922A', margin: '0 0 4px' }}>{p.price}</p>
                    <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.35)', marginBottom: 16 }}>{p.priceDetail}</p>
                    <Link href="/mercados" style={{ display: 'block', textAlign: 'center', background: 'rgba(201,146,42,0.08)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 6, padding: '9px', fontSize: 11, fontWeight: 700, color: '#C9922A', textDecoration: 'none' }}>
                      Ver proyecto →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 340px"] { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

    </main>
  );
}
