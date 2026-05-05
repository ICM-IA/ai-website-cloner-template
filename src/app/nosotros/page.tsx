'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: easeOut },
});

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

const values = [
  { icon: '⭐', title: 'Excelencia', desc: 'Brindamos servicios de consultoría de alta calidad que superan las expectativas de nuestros clientes.' },
  { icon: '🤝', title: 'Profesionalismo', desc: 'Actuamos con integridad, ética y respeto hacia clientes y socios en cada interacción.' },
  { icon: '🎯', title: 'Enfoque en el cliente', desc: 'Centramos las necesidades del cliente en todas nuestras acciones con soluciones a medida.' },
  { icon: '💡', title: 'Innovación', desc: 'Buscamos continuamente nuevas ideas para mejorar nuestros servicios y mantener el liderazgo.' },
  { icon: '🌐', title: 'Colaboración', desc: 'Fomentamos el trabajo en equipo internamente y con partners para construir relaciones sólidas.' },
];

export default function NosotrosPage() {
  return (
    <main className="nosotros-main" style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#101010', minHeight: 'calc(100vh - 64px)', padding: '60px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>QUIÉNES SOMOS</p>
          <h1 style={{ fontSize: 44, fontWeight: 800, color: '#efefef' }}>Nosotros</h1>
          <div style={{ height: 3, width: 56, background: '#C9922A', marginTop: 12 }} />
        </motion.div>

        {/* About + CEO */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 72, alignItems: 'start' }}>

          {/* Columna izquierda */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <motion.div {...fadeUp(0.1)}>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: '#efefef', marginBottom: 20, lineHeight: 1.2 }}>
                Consultoría comercial especializada en Real Estate
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.65)', lineHeight: 1.85, marginBottom: 16 }}>
                Lion Global Sales Consulting es una firma de consultoría comercial especializada en el mercado inmobiliario. Ofrecemos un conjunto completo de soluciones que responden a los desafíos y requerimientos de inversores y desarrolladores, respaldados por una amplia experiencia en el sector.
              </p>
              <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.65)', lineHeight: 1.85 }}>
                Nuestra presencia en más de 12 países de América, Europa y Asia nos permite conectar oportunidades globales con inversores locales, generando valor real en cada operación.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <ShineCard style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 10, padding: '24px 28px' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>🎯</div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#C9922A', marginBottom: 10, letterSpacing: '0.08em' }}>MISIÓN</h3>
                <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.65)', lineHeight: 1.75, margin: 0 }}>
                  Brindar servicios de consultoría comercial integrales en el mercado inmobiliario, ayudando a inversores y desarrolladores a alcanzar sus objetivos y maximizar el éxito en el sector.
                </p>
              </ShineCard>
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <ShineCard style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 10, padding: '24px 28px' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>🔭</div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#C9922A', marginBottom: 10, letterSpacing: '0.08em' }}>VISIÓN</h3>
                <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.65)', lineHeight: 1.75, margin: 0 }}>
                  Ser la consultora comercial líder en Latinoamérica en el sector inmobiliario, brindando soluciones innovadoras y de calidad que generen un impacto positivo en nuestros clientes.
                </p>
              </ShineCard>
            </motion.div>
          </div>

          {/* Columna derecha: foto de Alan */}
          <motion.div {...fadeUp(0.2)} style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.25)', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ width: '100%' }}>
              <img src="/images/alan-yorno.png" alt="Alan Yorno" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ padding: '28px 32px' }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#efefef', marginBottom: 4 }}>Alan Yorno</h3>
              <p style={{ fontSize: 11, color: '#C9922A', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 16 }}>CEO & FUNDADOR</p>
              <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.6)', lineHeight: 1.75, margin: 0 }}>
                Más de 10 años de experiencia en Real Estate, habiendo asesorado a cientos de inversores y dirigido equipos comerciales internacionales para desarrolladores de prestigio. Lidera Lion Global con visión estratégica y profundo conocimiento del mercado global.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Por qué elegirnos */}
        <div style={{ marginBottom: 72 }}>
          <motion.div {...fadeUp(0)} style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>NUESTRA DIFERENCIA</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef', marginBottom: 16, lineHeight: 1.2 }}>¿Por qué elegirnos?</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', marginBottom: 20 }} />
            <p style={{ fontSize: 15, color: 'rgba(239,239,239,0.6)', lineHeight: 1.85, maxWidth: 680 }}>
              Porque el valor que aportamos a clientes con nuestras soluciones es lo más importante para nosotros. Nuestro enfoque es descubrir y resolver las necesidades con el más alto nivel de profesionalismo.
            </p>
          </motion.div>
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            {[
              { icon: '📈', label: 'PARA INVERSORES', desc: 'Ofrecemos las mejores alternativas de inversión a nivel global, para que tomes decisiones informadas y acertadas con nuestro equipo de asesores.' },
              { icon: '🏗️', label: 'PARA DESARROLLADORES', desc: 'Proporcionamos los mejores servicios que garantizan el éxito de la comercialización de sus proyectos.' },
              { icon: '🌐', label: 'NUESTRA EXPERIENCIA', desc: 'Nos enorgullece ofrecer una gama completa de soluciones que abordan sus requerimientos y desafíos, respaldados por nuestra amplia experiencia en el sector inmobiliario.' },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.15)}>
                <ShineCard style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 12, padding: '28px 28px', borderTop: '3px solid #C9922A', height: '100%' }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#C9922A', letterSpacing: '0.1em', marginBottom: 12 }}>{item.label}</p>
                  <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.65)', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                </ShineCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div style={{ marginBottom: 64 }}>
          <motion.div {...fadeUp(0)} style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>LO QUE NOS DEFINE</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#efefef' }}>Nuestros valores</h2>
            <div style={{ height: 3, width: 48, background: '#C9922A', marginTop: 10 }} />
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
            {values.map((v, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}>
                <ShineCard style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.15)', borderRadius: 10, padding: '24px 20px', textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{v.icon}</div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: '#C9922A', marginBottom: 8 }}>{v.title}</h4>
                  <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.5)', lineHeight: 1.65 }}>{v.desc}</p>
                </ShineCard>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .nosotros-main {
              padding: 40px 16px !important;
            }
            .about-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            .why-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 480px) {
            .nosotros-main {
              padding: 32px 12px !important;
            }
            .why-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        {/* CTA */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', padding: '48px 32px', background: 'rgba(201,146,42,0.06)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 12 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#efefef', marginBottom: 12 }}>¿Querés trabajar con nosotros?</h2>
          <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.5)', marginBottom: 28 }}>Contactanos y te asesoramos sin compromiso.</p>
          <Link href="/contacto" style={{ background: '#C9922A', color: '#101010', padding: '13px 36px', fontSize: 13, fontWeight: 800, borderRadius: 4, textDecoration: 'none', letterSpacing: '0.08em' }}>
            CONTACTAR AHORA
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
