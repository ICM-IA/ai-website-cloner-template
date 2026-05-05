'use client';

import { useEffect } from 'react';

export default function ContactoPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.icm-ia.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#0d0d0d', minHeight: 'calc(100vh - 64px)', padding: '60px 32px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>HABLEMOS</p>
          <h1 style={{ fontSize: 44, fontWeight: 800, color: '#efefef' }}>Contacto</h1>
          <div style={{ height: 3, width: 56, background: '#C9922A', marginTop: 12 }} />
          <p style={{ marginTop: 16, fontSize: 14, color: 'rgba(239,239,239,0.5)', maxWidth: 520 }}>
            Nuestro equipo está listo para asesorarte sobre las mejores oportunidades de inversión inmobiliaria.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 40 }}>
          {[
            { icon: '💬', title: 'WhatsApp', value: '+54 9 223 355-9834', href: 'https://wa.me/5492233559834', sub: 'Respuesta inmediata' },
            { icon: '✉️', title: 'Email', value: 'info@liongsc.com', href: 'mailto:info@liongsc.com', sub: 'Respondemos en 24hs' },
            { icon: '📍', title: 'Oficina', value: 'Pico 1671 4° D, CABA', href: 'https://maps.app.goo.gl/ejEfA9MV8MGtcYeH9', sub: 'Ciudad Autónoma de Buenos Aires' },
          ].map((item) => (
            <div key={item.title} style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.2)', padding: 28, borderRadius: 10, textAlign: 'center' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#C9922A', marginBottom: 6, letterSpacing: '0.06em' }}>{item.title}</h3>
              <a href={item.href} style={{ color: 'rgba(239,239,239,0.85)', textDecoration: 'none', fontSize: 14, fontWeight: 600, display: 'block', marginBottom: 4 }}>{item.value}</a>
              <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.35)' }}>{item.sub}</p>
            </div>
          ))}
        </div>

        <div>
          <iframe
            src="https://api.icm-ia.com/widget/form/ObdWKp9erbfZyX8AmG2X"
            style={{ width: '100%', height: 900, border: 'none', borderRadius: 3, display: 'block' }}
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
      </div>

    </main>
  );
}
