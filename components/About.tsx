'use client'

import FadeIn from './FadeIn'

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: '#6BA4F8', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Risk Discipline',
    body: 'Systematic risk controls at every layer of portfolio construction.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: '#6BA4F8', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Global Access',
    body: 'Active presence across developed and emerging market geographies.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: '#6BA4F8', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Strategic Partners',
    body: 'Deep relationships with complementary firms driving co-investment and deal flow.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: '#6BA4F8', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Research First',
    body: 'Proprietary insights from original quantitative and qualitative analysis.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 64px',
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '80px', alignItems: 'start', maxWidth: '1200px', margin: '0 auto',
      }} className="about-grid">
        {/* Left */}
        <div>
          <FadeIn delay={0}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{ width: '24px', height: '1px', background: '#6BA4F8', display: 'block' }} />
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', color: '#6BA4F8', textTransform: 'uppercase' }}>
                About Alcazar
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: 'var(--font-ibm-serif), IBM Plex Serif, serif',
              fontSize: 'clamp(28px, 3vw, 44px)',
              fontWeight: 300, color: '#F8F5F0',
              lineHeight: 1.2, letterSpacing: '-0.01em',
              marginBottom: '28px',
            }}>
              Four Years of Conviction Before the Market Caught Up
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p style={{ fontSize: '15px', color: 'rgba(248,245,240,0.55)', lineHeight: 1.9, marginBottom: '20px' }}>
              Alcazar Capital Management was built on four years of rigorous market research,
              strategy development, and proven quantitative performance. Our mission is to maximize
              risk-adjusted returns through two complementary engines: concentrated fundamental
              analysis and systematic quantitative strategies — targeting companies with exceptional
              growth and improvement potential.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: '15px', color: 'rgba(248,245,240,0.55)', lineHeight: 1.9 }}>
              What sets us apart is our founding philosophy: an engineer-turned-capital-allocator
              mindset that identified critical infrastructure and financial platform opportunities
              before the broader market recognized their strategic value.
            </p>
          </FadeIn>
        </div>

        {/* Right — pillars */}
        <FadeIn delay={0.2} direction="left">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '1px', background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px', overflow: 'hidden',
          }}>
            {pillars.map((p, i) => (
              <div
                key={i}
                style={{
                  background: '#0d0d0d', padding: '28px 22px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#111')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0d0d0d')}
              >
                <div style={{
                  width: '36px', height: '36px',
                  background: 'rgba(17,50,73,0.4)',
                  borderRadius: '8px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  marginBottom: '14px',
                }}>
                  {p.icon}
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-ibm-sans), IBM Plex Sans, sans-serif',
                  fontSize: '13px', fontWeight: 600,
                  color: '#F8F5F0', marginBottom: '6px', letterSpacing: '0.02em',
                }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '12px', color: 'rgba(248,245,240,0.5)', lineHeight: 1.65 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
