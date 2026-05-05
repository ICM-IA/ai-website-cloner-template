'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV = [
  { label: 'INICIO', href: '/' },
  { label: 'MERCADOS', href: '/mercados' },
  { label: 'NOTICIAS', href: '/noticias' },
  { label: 'FAQ', href: '/faq' },
  { label: 'NOSOTROS', href: '/nosotros' },
  { label: 'CONTACTO', href: '/contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <header style={{
        background: '#101010',
        borderBottom: '2px solid #C9922A',
        padding: '0 20px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: 64,
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/lion-icon-transparent.png" alt="Lion Global Sales Consulting" style={{ height: 44, width: 44, objectFit: 'contain' }} />
          </Link>

          {/* Desktop nav — hidden on mobile */}
          {!isMobile && (
            <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
              {NAV.map(({ label, href }) => {
                const isActive = pathname === href;
                const isContact = href === '/contacto';
                return (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      background: isContact ? '#C9922A' : 'none',
                      color: isContact ? '#101010' : isActive ? '#C9922A' : '#efefef',
                      fontSize: 11,
                      fontWeight: 700,
                      textDecoration: 'none',
                      letterSpacing: '0.07em',
                      padding: isContact ? '7px 18px' : '2px 0',
                      borderRadius: isContact ? 4 : 0,
                      borderBottom: !isContact && isActive ? '2px solid #C9922A' : '2px solid transparent',
                      transition: 'color 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Hamburger — visible only on mobile */}
          {isMobile && (
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 6,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '12px',
                zIndex: 1001,
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <span style={{
                display: 'block', width: 26, height: 2.5,
                background: '#efefef',
                borderRadius: 2,
                transition: 'all 0.25s',
                transform: menuOpen ? 'translateY(8.5px) rotate(45deg)' : 'none',
              }} />
              <span style={{
                display: 'block', width: 26, height: 2.5,
                background: '#efefef',
                borderRadius: 2,
                transition: 'all 0.25s',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: 26, height: 2.5,
                background: '#efefef',
                borderRadius: 2,
                transition: 'all 0.25s',
                transform: menuOpen ? 'translateY(-8.5px) rotate(-45deg)' : 'none',
              }} />
            </button>
          )}
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            background: '#101010',
            borderBottom: '2px solid #C9922A',
            zIndex: 998,
            padding: '8px 16px 20px',
          }}
        >
          {NAV.map(({ label, href }) => {
            const isActive = pathname === href;
            const isContact = href === '/contacto';
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  background: isContact ? '#C9922A' : isActive ? 'rgba(201,146,42,0.1)' : 'transparent',
                  color: isContact ? '#101010' : isActive ? '#C9922A' : '#efefef',
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  padding: '14px 16px',
                  borderRadius: 6,
                  borderLeft: !isContact && isActive ? '3px solid #C9922A' : '3px solid transparent',
                  marginBottom: 4,
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
