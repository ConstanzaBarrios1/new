'use client'

import FadeIn from './FadeIn'

const members = [
  {
    initials: 'RD',
    name: 'Richard Dedu',
    role: 'Founder & Portfolio Manager',
    bio: 'Engineer-turned-investor focused on deep fundamental research, capital allocation, and long-term value creation. Architect of Alcazar\'s quantitative framework and PSIF methodology.',
  },
  {
    initials: 'DR',
    name: 'Dereck',
    role: 'Co-Founder',
    bio: 'Research, strategy development, and quantitative systems. Strategic operator and business development leader focused on partnerships, market expansion, and institutional presence.',
  },
]

export default function Team() {
  return (
    <section
      id="team"
      style={{
        padding: '120px 64px',
        background: '#000',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '60px', marginBottom: '64px', alignItems: 'end',
        }} className="team-intro-grid">
          <div>
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{ width: '24px', height: '1px', background: '#6BA4F8', display: 'block' }} />
                <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', color: '#6BA4F8', textTransform: 'uppercase' }}>
                  Leadership
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 style={{
                fontFamily: 'var(--font-ibm-serif), IBM Plex Serif, serif',
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: 300, color: '#F8F5F0',
                lineHeight: 1.2, letterSpacing: '-0.01em',
              }}>
                The people behind the conviction.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p style={{ fontSize: '15px', color: 'rgba(248,245,240,0.5)', lineHeight: 1.85 }}>
              Our team brings together experience across quantitative research, capital allocation,
              and global markets. We are builders, analysts, and relationship architects.
            </p>
          </FadeIn>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }} className="team-grid">
          {members.map((m, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.15}>
              <div
                style={{
                  background: '#0a0a0a',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px', padding: '36px 28px',
                  height: '100%', transition: 'border-color 0.25s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(17,50,73,0.5)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                {/* Avatar */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: 'rgba(17,50,73,0.5)',
                  border: '1px solid rgba(17,50,73,0.8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-ibm-sans), IBM Plex Sans, sans-serif',
                  fontSize: '16px', fontWeight: 500, color: '#6BA4F8',
                  marginBottom: '20px', letterSpacing: '0.06em',
                }}>
                  {m.initials}
                </div>
                <div style={{
                  fontFamily: 'var(--font-ibm-sans), IBM Plex Sans, sans-serif',
                  fontSize: '17px', fontWeight: 500, color: '#F8F5F0', marginBottom: '4px',
                }}>
                  {m.name}
                </div>
                <div style={{
                  fontSize: '10px', color: '#6BA4F8',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  fontWeight: 600, marginBottom: '16px',
                }}>
                  {m.role}
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(248,245,240,0.5)', lineHeight: 1.75 }}>
                  {m.bio}
                </p>
              </div>
            </FadeIn>
          ))}

          {/* Join card */}
          <FadeIn delay={0.35}>
            <div
              style={{
                background: 'rgba(17,50,73,0.08)',
                border: '1px solid rgba(17,50,73,0.3)',
                borderRadius: '10px', padding: '36px 28px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                minHeight: '260px', textAlign: 'center',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(17,50,73,0.6)'
                e.currentTarget.style.background = 'rgba(17,50,73,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(17,50,73,0.3)'
                e.currentTarget.style.background = 'rgba(17,50,73,0.08)'
              }}
            >
              <div style={{
                fontSize: '10px', color: '#6BA4F8', letterSpacing: '0.14em',
                textTransform: 'uppercase', fontWeight: 600, marginBottom: '10px',
              }}>
                Join Our Team
              </div>
              <p style={{
                fontSize: '13px', color: 'rgba(248,245,240,0.45)',
                lineHeight: 1.65, maxWidth: '180px', marginBottom: '20px',
              }}>
                We are growing. Reach out if you share our conviction.
              </p>
              <a
                href="#contact"
                style={{
                  background: '#113249', color: '#F8F5F0',
                  border: '1px solid #113249', borderRadius: '2px',
                  padding: '10px 20px', fontSize: '10px', fontWeight: 500,
                  letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1a4a6e')}
                onMouseLeave={e => (e.currentTarget.style.background = '#113249')}
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-intro-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          #team { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
