'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  { q: '¿Cuánto capital necesito para empezar?', a: 'Trabajamos con inversores desde USD 30.000. Dependiendo del mercado y tipo de proyecto, el ticket mínimo varía. Te asesoramos para encontrar la opción ideal para tu presupuesto. En algunos proyectos podés ingresar con solo el 7% al 10% del valor total y financiar el resto, lo que te permite acceder a oportunidades de alto valor con una inversión inicial mucho menor.' },
  { q: '¿En qué países puedo invertir?', a: 'Operamos en 10 países: Argentina, Brasil, Paraguay, Uruguay, USA, México, Rep. Dominicana, Emiratos Árabes, España e Italia. Cada mercado tiene sus propias oportunidades y rendimientos.' },
  { q: '¿Es seguro invertir en EEUU o Brasil?', a: 'Hoy tanto Estados Unidos como Brasil representan dos de los mercados con mayor rentabilidad y solidez para el inversor latinoamericano. Todos los proyectos que ofrecemos pasan por un riguroso proceso de due diligence legal y comercial. Trabajamos exclusivamente con desarrolladoras de primer nivel y garantizamos transparencia en cada etapa de la operación.' },
  { q: '¿Qué tipo de rentabilidad puedo esperar?', a: 'Depende del mercado y del proyecto. En general, nuestros proyectos ofrecen entre un 8% y un 18% anual en dólares, combinando plusvalía y renta. Te presentamos proyecciones reales en cada caso.' },
  { q: '¿Necesito viajar para comprar una propiedad?', a: 'No es necesario. Gestionamos todo el proceso de forma remota: firma digital, transferencias internacionales y acompañamiento legal en el país destino. Muchos de nuestros clientes invierten sin salir de su ciudad.' },
  { q: '¿Cuánto tiempo tarda el proceso de compra?', a: 'Desde la consulta inicial hasta la firma puede llevar entre 2 y 6 semanas según el proyecto. En proyectos en pozo, la entrega varía según la etapa de construcción.' },
  { q: '¿Puedo invertir desde cualquier país?', a: 'Sí. Asesoramos inversores de todo el mundo. Contamos con experiencia en estructuras internacionales y conocemos los requisitos legales para inversores extranjeros en cada mercado donde operamos.' },
  { q: '¿Qué pasa si quiero vender mi inversión antes del plazo?', a: 'Dependiendo del proyecto y el mercado, existen mecanismos de cesión de boleto o reventa anticipada. Te asesoramos sobre las opciones disponibles y los plazos más convenientes para maximizar tu retorno.' },
  { q: '¿Cobran comisión o honorarios?', a: 'Nuestros honorarios varían según el tipo de operación y el mercado. En la consulta inicial te detallamos exactamente cómo funciona el esquema de costos para que puedas tomar una decisión informada. No hay sorpresas.' },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#101010', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ background: '#0d0d0d', borderBottom: '1px solid rgba(201,146,42,0.15)', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 12 }}>PREGUNTAS FRECUENTES</p>
          <h1 style={{ fontSize: 48, fontWeight: 800, color: '#efefef', lineHeight: 1.1, marginBottom: 16 }}>
            Todo lo que necesitás saber
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(239,239,239,0.5)', lineHeight: 1.7, maxWidth: 560 }}>
            Resolvemos las dudas más comunes sobre inversión en real estate internacional. Si no encontrás tu pregunta, <Link href="/contacto" style={{ color: '#C9922A', textDecoration: 'none', fontWeight: 700 }}>contactanos</Link>.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ padding: '64px 32px 80px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: '#1a1a2e',
                border: `1px solid ${open === i ? 'rgba(201,146,42,0.45)' : 'rgba(201,146,42,0.15)'}`,
                borderRadius: 10,
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left', WebkitTapHighlightColor: 'transparent' }}
              >
                <span style={{ fontSize: 15, fontWeight: 700, color: open === i ? '#C9922A' : '#efefef', lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{ fontSize: 22, color: '#C9922A', flexShrink: 0, transition: 'transform 0.25s', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', display: 'inline-block' }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 28px 24px', fontSize: 14, color: 'rgba(239,239,239,0.6)', lineHeight: 1.85 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', background: 'rgba(201,146,42,0.06)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 14, padding: '48px 40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#efefef', marginBottom: 12 }}>¿Tenés otra pregunta?</h2>
          <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.5)', marginBottom: 28 }}>Nuestro equipo te responde sin compromiso.</p>
          <Link href="/contacto" style={{ background: '#C9922A', color: '#101010', padding: '13px 36px', fontSize: 13, fontWeight: 800, borderRadius: 4, textDecoration: 'none', letterSpacing: '0.08em' }}>
            CONTACTAR AHORA
          </Link>
        </div>
      </section>

    </main>
  );
}
