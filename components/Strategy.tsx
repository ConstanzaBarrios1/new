'use client'

import FadeIn from './FadeIn'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function DiagramCard({ title }: { title: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const nodes = [
    { label: 'Signal', active: true, x: 50, y: 10 },
    { label: 'Alpha', active: true, x: 80, y: 40 },
    { label: 'Risk', active: false, x: 20, y: 40 },
    { label: 'Exec', active: true, x: 50, y: 70 },
    { label: '', active: false, x: 65, y: 55 },
    { label: '', active: false, x: 35, y: 55 },
  ]

  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 3], [1, 4], [2, 5], [4, 3], [5, 3],
  ]

  return (
    <div ref={ref} style={{
      background: 'rgba(17,50,73,0.08)',
      border: '1px solid rgba(17,50,73,0.3)',
      borderRadius: '10px', padding: '24px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '160px', position: 'relative', overflow: 'hidden',
    }}>
      <svg width="200" height="120" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s' }}>
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x * 2} y1={nodes[a].y * 1.2}
            x2={nodes[b].x * 2} y2={nodes[b].y * 1.2}
            stroke="rgba(107,164,248,0.2)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x * 2} cy={n.y * 1.2}
            r={n.active ? 5 : 3}
            fill={n.active ? 'rgba(107,164,248,0.7)' : 'rgba(107,164,248,0.15)'}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
          />
        ))}
      </svg>
      <div style={{
        position: 'absolute', bottom: '12px', right: '14px',
        fontSize: '9px', color: 'rgba(107,164,248,0.4)',
        letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
      }}>
        {title}
      </div>
    </div>
  )
}

const engines = [
  {
    num: '01',
    tag: 'Engine I',
    title: 'PSIF Framework',
    subtitle: 'Fundamental Research & Capital Allocation',
    body: 'A concentrated investment framework focused on identifying high-quality businesses. We analyze every position through a proprietary scoring model built over four years of research.',
    features: ['Concentrated positions', 'Long-term horizon', 'Deep fundamental analysis', 'Quality compounders'],
  },
  {
    num: '02',
    tag: 'Engine II',
    title: 'Algorithmic Hedging Overlay',
    subtitle: 'Systematic Risk Management',
    body: 'Quantitative models designed to manage portfolio risk, preserve capital, and improve risk-adjusted returns across changing market environments. Our systematic overlay dynamically adjusts exposure based on volatility regimes and macro signals.',
    features: ['Dynamic hedging', 'Volatility regime detection', 'Macro signal integration', 'Capital preservation'],
  },
]

export default function Strategy() {
  return (
    <section
      id="strategy"
      style={{
        padding: '120px 64px',
        background: '#000',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ width: '24px', height: '1px', background: '#6BA4F8', display: 'block' }} />
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', color: '#6BA4F8', textTransform: 'uppercase' }}>
              Investment Strategy
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: 'var(--font-ibm-serif), IBM Plex Serif, serif',
            fontSize: 'clamp(28px, 3vw, 44px)',
            fontWeight: 300, color: '#F8F5F0',
            lineHeight: 1.2, letterSpacing: '-0.01em',
            marginBottom: '64px', maxWidth: '480px',
          }}>
            How we generate edge.
          </h2>
        </FadeIn>

        {/* Engine cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '2px', marginBottom: '2px',
        }} className="strategy-grid">
          {engines.map((eng, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.15} direction={i === 0 ? 'right' : 'left'}>
              <div
                style={{
                  background: '#0a0a0a',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px', padding: '44px 36px',
                  height: '100%', transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(17,50,73,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div style={{
                  fontFamily: 'var(--font-ibm-serif), IBM Plex Serif, serif',
                  fontSize: '52px', fontWeight: 300,
                  color: 'rgba(107,164,248,0.12)', lineHeight: 1, marginBottom: '20px',
                  letterSpacing: '-0.02em',
                }}>
                  {eng.num}
                </div>
                <div style={{
                  fontSize: '9px', fontWeight: 600, letterSpacing: '0.16em',
                  color: '#6BA4F8', textTransform: 'uppercase', marginBottom: '8px',
                }}>
                  {eng.tag}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-ibm-serif), IBM Plex Serif, serif',
                  fontSize: '24px', fontWeight: 300, color: '#F8F5F0',
                  marginBottom: '6px', lineHeight: 1.2,
                }}>
                  {eng.title}
                </h3>
                <div style={{
                  fontSize: '12px', color: '#6BA4F8', marginBottom: '20px',
                  letterSpacing: '0.02em',
                }}>
                  {eng.subtitle}
                </div>

                <DiagramCard title={eng.tag} />

                <p style={{
                  fontSize: '14px', color: 'rgba(248,245,240,0.55)', lineHeight: 1.85,
                  margin: '24px 0',
                }}>
                  {eng.body}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {eng.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        width: '4px', height: '4px', borderRadius: '50%',
                        background: '#113249', flexShrink: 0,
                      }} />
                      <span style={{ fontSize: '12px', color: 'rgba(248,245,240,0.5)', letterSpacing: '0.02em' }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer */}
        <FadeIn delay={0.3}>
          <div style={{
            marginTop: '48px', padding: '36px 40px',
            background: '#080808',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', gap: '32px',
            flexWrap: 'wrap',
          }}>
            <p style={{ fontSize: '14px', color: 'rgba(248,245,240,0.5)', maxWidth: '500px', lineHeight: 1.8 }}>
              Our strategy is built for the long cycle. We think in decades, not quarters — and structure
              every position around the asymmetry of time.
            </p>
            <a
              href="#contact"
              style={{
                background: '#113249', color: '#F8F5F0',
                border: '1px solid #113249', borderRadius: '2px',
                padding: '12px 28px', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase',
                whiteSpace: 'nowrap', transition: 'background 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1a4a6e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#113249')}
            >
              Talk to Our Team
            </a>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .strategy-grid { grid-template-columns: 1fr !important; }
          #strategy { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
