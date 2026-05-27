'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About Alcazar', href: '#about' },
  { label: 'Investment Strategy', href: '#strategy' },
  { label: 'Research & Insights', href: '#research' },
  { label: 'Leadership', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 48px', height: '72px',
          background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          {/* Logo - SVG recreation without background */}
          <svg 
            width="44" 
            height="44" 
            viewBox="0 0 100 100" 
            fill="none"
            style={{ flexShrink: 0 }}
          >
            {/* Connection lines */}
            <line x1="50" y1="15" x2="20" y2="50" stroke="#6BA4F8" strokeWidth="1.5" />
            <line x1="50" y1="15" x2="80" y2="50" stroke="#6BA4F8" strokeWidth="1.5" />
            <line x1="20" y1="50" x2="50" y2="50" stroke="#6BA4F8" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="80" y2="50" stroke="#6BA4F8" strokeWidth="1.5" />
            <line x1="20" y1="50" x2="35" y2="70" stroke="#6BA4F8" strokeWidth="1.5" />
            <line x1="80" y1="50" x2="65" y2="70" stroke="#6BA4F8" strokeWidth="1.5" />
            <line x1="35" y1="70" x2="50" y2="85" stroke="#6BA4F8" strokeWidth="1.5" />
            <line x1="65" y1="70" x2="50" y2="85" stroke="#6BA4F8" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="35" y2="70" stroke="#6BA4F8" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="65" y2="70" stroke="#6BA4F8" strokeWidth="1.5" />
            
            {/* Outer circles with rings */}
            <circle cx="50" cy="15" r="8" fill="none" stroke="#6BA4F8" strokeWidth="1.5" />
            <circle cx="50" cy="15" r="4" fill="#6BA4F8" />
            
            <circle cx="20" cy="50" r="8" fill="none" stroke="#6BA4F8" strokeWidth="1.5" />
            <circle cx="20" cy="50" r="4" fill="#6BA4F8" />
            
            <circle cx="80" cy="50" r="8" fill="none" stroke="#6BA4F8" strokeWidth="1.5" />
            <circle cx="80" cy="50" r="4" fill="#6BA4F8" />
            
            <circle cx="50" cy="85" r="8" fill="none" stroke="#6BA4F8" strokeWidth="1.5" />
            <circle cx="50" cy="85" r="4" fill="#6BA4F8" />
            
            {/* Inner nodes (smaller) */}
            <circle cx="50" cy="50" r="3" fill="#6BA4F8" />
            <circle cx="35" cy="70" r="3" fill="#6BA4F8" />
            <circle cx="65" cy="70" r="3" fill="#6BA4F8" />
          </svg>
          <span style={{
            fontFamily: 'var(--font-ibm-sans), IBM Plex Sans, sans-serif',
            fontSize: '18px', fontWeight: 600,
            color: '#fff', letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}>
            ALCAZAR CAPITAL MANAGEMENT
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}
          className="hidden-mobile">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: '14px', fontWeight: 400, color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none', letterSpacing: '0.06em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="#contact"
            style={{
              fontSize: '12px', fontWeight: 500, color: '#fff',
              border: '1px solid rgba(255,255,255,0.25)', borderRadius: '2px',
              padding: '10px 22px', textDecoration: 'none', letterSpacing: '0.1em',
              textTransform: 'uppercase', transition: 'background 0.2s, border-color 0.2s',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#113249'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#113249'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.25)'
            }}
          >
            Request Access
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'none', flexDirection: 'column', gap: '5px', padding: '4px',
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '1px',
                background: '#fff', transition: 'transform 0.3s',
              }} />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: '72px', left: 0, right: 0, zIndex: 99,
              background: 'rgba(0,0,0,0.97)', borderBottom: '1px solid rgba(255,255,255,0.06)',
              padding: '24px 48px',
            }}
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '14px', color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none', letterSpacing: '0.04em',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
