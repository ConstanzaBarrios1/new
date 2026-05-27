'use client'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#000',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '40px 64px',
      }}
    >
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
      }}>
        <span style={{
          fontFamily: 'var(--font-ibm-sans), IBM Plex Sans, sans-serif',
          fontSize: '13px', color: '#F8F5F0', fontWeight: 600,
          letterSpacing: '0.22em', textTransform: 'uppercase',
        }}>
          ALCAZAR
        </span>

        <p style={{
                fontSize: '11px', color: 'rgba(248,245,240,0.4)',
          letterSpacing: '0.04em', textAlign: 'center',
        }}>
          &copy; 2025 Alcazar Capital Management. All rights reserved. For qualified investors only.
        </p>

        <div style={{ display: 'flex', gap: '28px' }}>
          {['Privacy Policy', 'Terms of Use', 'Contact'].map(link => (
            <a
              key={link}
              href={link === 'Contact' ? '#contact' : '#'}
              style={{
          fontSize: '11px', color: 'rgba(248,245,240,0.4)',
                textDecoration: 'none', letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,245,240,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,240,0.4)')}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 32px 24px !important; }
          footer > div { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
