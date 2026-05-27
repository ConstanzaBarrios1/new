'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const NetworkBackground = dynamic(() => import('./NetworkBackground'), { ssr: false })

const words = [
  { text: 'Intelligence.', italic: false },
  { text: 'Engineered.', italic: true },
  { text: 'Limits.', italic: false },
  { text: 'Redefined.', italic: true },
]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '120px 64px 80px',
        position: 'relative', overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(17,50,73,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(17,50,73,0.15) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
      }} />

      <NetworkBackground />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '55%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(17,50,73,0.35) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1100px' }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '40px',
          }}
        >
          <span style={{ width: '32px', height: '1px', background: '#113249', display: 'block' }} />
          <span style={{
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em',
            color: '#6BA4F8', textTransform: 'uppercase',
          }}>
            Alcazar Capital Management
          </span>
        </motion.div>

        {/* Headline - each word separated */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '900px',
          marginBottom: '48px',
        }}>
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-ibm-serif), IBM Plex Serif, serif',
                fontSize: 'clamp(42px, 6.5vw, 88px)',
                fontWeight: 300,
                lineHeight: 1.02,
                color: w.italic ? '#6BA4F8' : '#F8F5F0',
                fontStyle: w.italic ? 'italic' : 'normal',
                letterSpacing: '-0.02em',
                display: 'block',
              }}
            >
              {w.text}
            </motion.span>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '56px', height: '1px', background: '#113249',
            marginBottom: '28px', transformOrigin: 'left',
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            fontSize: '16px', fontWeight: 300,
            color: '#F8F5F0',
            opacity: 0.6,
            maxWidth: '540px', lineHeight: 1.9, marginBottom: '44px',
          }}
        >
          Alcazar Capital Management is the next generation of rigorous market research,
          quantitative performance, and deep fundamental conviction. We combine concentrated
          fundamental investing with systematic quantitative strategies to identify exceptional
          opportunities before the market recognizes their full potential.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#contact"
            style={{
              background: '#113249', color: '#F8F5F0',
              border: '1px solid #113249', borderRadius: '2px',
              padding: '14px 32px',
              fontFamily: 'var(--font-ibm-sans), IBM Plex Sans, sans-serif',
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em',
              textDecoration: 'none', textTransform: 'uppercase',
              transition: 'background 0.2s, border-color 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1a4a6e')}
            onMouseLeave={e => (e.currentTarget.style.background = '#113249')}
          >
            Request Access
          </a>
          <a
            href="#research"
            style={{
              color: '#F8F5F0',
              opacity: 0.6,
              fontSize: '13px', fontWeight: 400, letterSpacing: '0.04em',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
              gap: '8px', transition: 'opacity 0.2s, gap 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.gap = '14px'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '0.6'
              e.currentTarget.style.gap = '8px'
            }}
          >
            Explore Research <span>→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: '40px', left: '64px',
          display: 'flex', alignItems: 'center', gap: '14px',
        }}
      >
        <div style={{
          width: '1px', height: '56px', background: 'rgba(248,245,240,0.15)',
          position: 'relative', overflow: 'hidden',
        }}>
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '40%',
              background: '#113249',
            }}
          />
        </div>
        <span style={{
          fontSize: '12px', letterSpacing: '0.16em', color: '#F8F5F0',
          opacity: 0.4,
          textTransform: 'uppercase', fontWeight: 500,
        }}>
          Scroll
        </span>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #hero { padding: 100px 24px 80px !important; }
        }
      `}</style>
    </section>
  )
}
