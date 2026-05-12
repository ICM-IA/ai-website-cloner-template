'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { articles } from './articles';

const FILTERS = [
  { label: 'Todos',     flag: '' },
  { label: 'USA',       flag: '🇺🇸' },
  { label: 'Brasil',    flag: '🇧🇷' },
  { label: 'Dubai',     flag: '🇦🇪' },
  { label: 'Argentina', flag: '🇦🇷' },
  { label: 'España',    flag: '🇪🇸' },
  { label: 'Lion GSC',  flag: '🦁' },
];

export default function NoticiasPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return articles.filter(a => {
      const matchesFilter = activeFilter === 'Todos' || a.country === activeFilter;
      const q = search.toLowerCase();
      const matchesSearch = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);

  return (
    <main style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#101010', minHeight: '100vh' }}>

      {/* ── Header ── */}
      <section style={{ background: '#0d0d0d', borderBottom: '1px solid rgba(201,146,42,0.15)', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 12 }}>ACTUALIDAD DEL MERCADO GLOBAL</p>
          <h1 style={{ fontSize: 46, fontWeight: 800, color: '#efefef', lineHeight: 1.1, marginBottom: 14 }}>Noticias e Informes</h1>
          <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.5)', lineHeight: 1.75, maxWidth: 500 }}>
            Análisis semanales de los mercados donde operamos — generados por nuestro equipo con inteligencia artificial.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section style={{ background: '#0d0d0d', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0 32px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, overflowX: 'auto', paddingTop: 16, paddingBottom: 16 }}>
          {FILTERS.map(f => (
            <button
              key={f.label}
              onClick={() => setActiveFilter(f.label)}
              style={{
                background: activeFilter === f.label ? 'rgba(201,146,42,0.12)' : 'transparent',
                border: `1px solid ${activeFilter === f.label ? 'rgba(201,146,42,0.5)' : 'rgba(255,255,255,0.1)'}`,
                color: activeFilter === f.label ? '#C9922A' : 'rgba(239,239,239,0.55)',
                borderRadius: 20,
                padding: '7px 16px',
                fontSize: 12,
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                letterSpacing: '0.03em',
                transition: 'all 0.15s',
              }}
            >
              {f.flag && <span style={{ marginRight: 6 }}>{f.flag}</span>}
              {f.label}
            </button>
          ))}
          <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
            <input
              type="text"
              placeholder="Buscar noticia..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                padding: '7px 16px',
                fontSize: 12,
                color: '#efefef',
                outline: 'none',
                width: 200,
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 32px 80px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>

          {/* ── Featured hero (Opción C) ── */}
          {featured && (
            <Link href={`/noticias/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: 56 }}>
              <div className="featured-hero lion-hover-card" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: '#1a1a2e',
                border: '1px solid rgba(201,146,42,0.18)',
                borderRadius: 16,
                overflow: 'hidden',
                minHeight: 360,
                transition: 'border-color 0.2s',
                animation: 'fadeInUp 0.45s ease both',
              }}>
                {/* Left: cover photo */}
                <div style={{ position: 'relative', minHeight: 300, overflow: 'hidden' }}>
                  {featured.coverImage ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={featured.coverImage} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
                  ) : (
                    <div style={{ background: featured.coverBg, width: '100%', height: '100%', position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 100 }}>{featured.coverEmoji}</span>
                    </div>
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent)' }} />
                  <div style={{ position: 'absolute', top: 16, left: 16 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: '#C9922A', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(201,146,42,0.5)', borderRadius: 20, padding: '5px 14px', letterSpacing: '0.06em', backdropFilter: 'blur(8px)' }}>
                      🔥 Noticia destacada — Abril 2026
                    </span>
                  </div>
                </div>
                {/* Right: content */}
                <div style={{ padding: '40px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: featured.tagColor, background: `${featured.tagColor}18`, border: `1px solid ${featured.tagColor}40`, borderRadius: 20, padding: '4px 12px', letterSpacing: '0.08em' }}>{featured.tag}</span>
                    <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)' }}>{featured.countryFlag} {featured.country}{featured.region ? ` · ${featured.region}` : ''}</span>
                    <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.3)' }}>·</span>
                    <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)' }}>{featured.date}</span>
                  </div>
                  <h2 style={{ fontSize: 26, fontWeight: 800, color: '#efefef', lineHeight: 1.35, marginBottom: 16 }}>{featured.title}</h2>
                  <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.5)', lineHeight: 1.8, marginBottom: 28, flexGrow: 1 }}>{featured.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#C9922A' }}>Leer artículo completo →</span>
                    <span style={{ fontSize: 11, color: 'rgba(239,239,239,0.3)' }}>{featured.readTime} min de lectura</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* ── Grid: more articles ── */}
          {rest.length > 0 && (
            <>
              <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(239,239,239,0.35)', letterSpacing: '0.14em', marginBottom: 24 }}>MÁS NOTICIAS RECIENTES</p>
              <div className="noticias-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                {rest.map(a => (
                  <Link key={a.slug} href={`/noticias/${a.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="lion-hover-card card-appear" style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', animationDelay: `${rest.indexOf(a) * 0.1}s` }}>
                      {/* Cover photo */}
                      <div style={{ height: 180, position: 'relative', overflow: 'hidden' }}>
                        {a.coverImage ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img src={a.coverImage} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} className="card-img" />
                        ) : (
                          <div style={{ background: a.coverBg, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: 52 }}>{a.coverEmoji}</span>
                          </div>
                        )}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
                        <div style={{ position: 'absolute', top: 12, left: 12 }}>
                          <span style={{ fontSize: 10, color: 'rgba(239,239,239,0.9)', background: 'rgba(0,0,0,0.55)', borderRadius: 20, padding: '4px 10px', backdropFilter: 'blur(8px)' }}>
                            {a.countryFlag} {a.country}
                          </span>
                        </div>
                        <div style={{ position: 'absolute', top: 12, right: 12 }}>
                          <span style={{ fontSize: 10, fontWeight: 700, color: a.tagColor, background: `${a.tagColor}22`, border: `1px solid ${a.tagColor}44`, borderRadius: 20, padding: '4px 10px', backdropFilter: 'blur(8px)' }}>{a.tag}</span>
                        </div>
                      </div>
                      {/* Content */}
                      <div style={{ padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.3)', letterSpacing: '0.04em', marginBottom: 8 }}>📅 {a.date}</p>
                        <h3 style={{ fontSize: 14, fontWeight: 800, color: '#efefef', lineHeight: 1.45, marginBottom: 10, flexGrow: 1 }}>{a.title}</h3>
                        <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.45)', lineHeight: 1.75, margin: '0 0 16px' }}>
                          {a.excerpt.length > 110 ? `${a.excerpt.slice(0, 110)}…` : a.excerpt}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#C9922A' }}>Leer más →</span>
                          <span style={{ fontSize: 10, color: 'rgba(239,239,239,0.25)' }}>{a.readTime} min</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(239,239,239,0.3)' }}>
              <p style={{ fontSize: 32, marginBottom: 12 }}>🔍</p>
              <p style={{ fontSize: 14 }}>No hay noticias para esta búsqueda.</p>
            </div>
          )}

        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-appear {
          animation: fadeInUp 0.45s ease both;
        }
        @media (max-width: 768px) {
          .featured-hero { grid-template-columns: 1fr !important; }
          .noticias-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .noticias-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .lion-hover-card { transition: transform 0.26s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.26s ease, border-color 0.2s !important; }
        .lion-hover-card:hover { transform: translateY(-6px) !important; box-shadow: 0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,146,42,0.28) !important; border-color: rgba(201,146,42,0.4) !important; }
        .lion-hover-card:hover .card-img { transform: scale(1.04); }
        .featured-hero:hover { border-color: rgba(201,146,42,0.5) !important; }
      `}</style>

    </main>
  );
}
