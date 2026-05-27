'use client'

import FadeIn from './FadeIn'

const reports = [
  {
    tag: 'Equity Research · Featured',
    title: 'UnitedHealth Group: A Blue-Chip Compounder at a Distressed Valuation',
    excerpt: 'An analysis of valuation dislocations and long-term compounding opportunities — examining UNH\'s durable competitive moat and the rare entry point created by near-term headwinds.',
    featured: true,
  },
  {
    tag: 'Semiconductor & AI',
    title: 'KLA Corporation: The Immune System of the AI Chip Era',
    excerpt: 'Examining the critical infrastructure enabling the next generation of semiconductor innovation and KLA\'s structural position as a beneficiary of the AI buildout.',
    featured: false,
  },
  {
    tag: 'Macro & Cycles',
    title: 'The Reminiscent Trader: Analyzing Indicators and Factors for a Potential 2024 U.S. Recession',
    excerpt: 'A data-driven examination of macroeconomic indicators, yield curve dynamics, and historical recession analogs to assess probability and depth of contraction.',
    featured: false,
  },
  {
    tag: 'Market Structure',
    title: 'Lights Out',
    excerpt: 'A research publication focused on emerging market inefficiencies, structural shifts in microstructure, and asymmetric opportunities for active managers seeking alpha.',
    featured: false,
  },
]

function ResearchCard({ report, delay }: { report: typeof reports[0]; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '10px', padding: '32px 28px',
          display: 'flex', flexDirection: 'column', gap: '14px',
          height: '100%', cursor: 'pointer',
          transition: 'background 0.25s, border-color 0.25s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#0d0d0d'
          e.currentTarget.style.borderColor = 'rgba(17,50,73,0.5)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = '#0a0a0a'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        }}
      >
        <div style={{
          fontSize: '9px', fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#6BA4F8',
        }}>
          {report.tag}
        </div>
        <div style={{
          fontFamily: 'var(--font-ibm-serif), IBM Plex Serif, serif',
          fontSize: report.featured ? '22px' : '17px',
          fontWeight: 400, color: '#F8F5F0', lineHeight: 1.35,
        }}>
          {report.title}
        </div>
        <p style={{ fontSize: '13px', color: 'rgba(248,245,240,0.5)', lineHeight: 1.75, flex: 1 }}>
          {report.excerpt}
        </p>
        <div style={{
          fontSize: '11px', fontWeight: 500, color: '#6BA4F8',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: '6px',
          marginTop: '4px',
        }}>
          Read Report →
        </div>
      </div>
    </FadeIn>
  )
}

export default function Research() {
  const [featured, ...rest] = reports

  return (
    <section
      id="research"
      style={{
        padding: '120px 64px',
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ width: '24px', height: '1px', background: '#6BA4F8', display: 'block' }} />
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', color: '#6BA4F8', textTransform: 'uppercase' }}>
              Research & Insights
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: 'var(--font-ibm-serif), IBM Plex Serif, serif',
            fontSize: 'clamp(28px, 3vw, 44px)',
            fontWeight: 300, color: '#F8F5F0',
            lineHeight: 1.2, letterSpacing: '-0.01em',
            marginBottom: '56px', maxWidth: '480px',
          }}>
            Original Thinking. Published Conviction.
          </h2>
        </FadeIn>

        {/* Featured */}
        <div style={{ marginBottom: '2px' }}>
          <FadeIn delay={0.15}>
            <div
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px', padding: '40px 36px',
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: '48px', alignItems: 'center', cursor: 'pointer',
                transition: 'background 0.25s, border-color 0.25s',
                marginBottom: '2px',
              }}
              className="featured-card"
              onMouseEnter={e => {
                e.currentTarget.style.background = '#0d0d0d'
                e.currentTarget.style.borderColor = 'rgba(17,50,73,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#0a0a0a'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              <div>
                <div style={{
                  fontSize: '9px', fontWeight: 600, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: '#6BA4F8', marginBottom: '14px',
                }}>
                  {featured.tag}
                </div>
                <div style={{
                  fontFamily: 'var(--font-ibm-serif), IBM Plex Serif, serif',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  fontWeight: 400, color: '#F8F5F0', lineHeight: 1.3,
                }}>
                  {featured.title}
                </div>
              </div>
              <div>
                <p style={{ fontSize: '14px', color: 'rgba(248,245,240,0.5)', lineHeight: 1.8, marginBottom: '20px' }}>
                  {featured.excerpt}
                </p>
                <div style={{
                  fontSize: '11px', fontWeight: 500, color: '#6BA4F8',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  Read Report →
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }} className="research-grid">
          {rest.map((r, i) => (
            <ResearchCard key={i} report={r} delay={0.15 + i * 0.1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-card { grid-template-columns: 1fr !important; gap: 24px !important; }
          .research-grid { grid-template-columns: 1fr !important; }
          #research { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
