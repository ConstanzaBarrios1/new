'use client'

import { useState, FormEvent } from 'react'
import FadeIn from './FadeIn'

interface FieldProps {
  label: string
  type?: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  textarea?: boolean
}

function Field({ label, type = 'text', placeholder, value, onChange, required, textarea }: FieldProps) {
  const [focused, setFocused] = useState(false)
  const shared: React.CSSProperties = {
    width: '100%',
    border: `1px solid ${focused ? '#113249' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '4px',
    padding: '13px 14px',
    fontFamily: 'var(--font-ibm-sans), IBM Plex Sans, sans-serif',
    fontSize: '14px', fontWeight: 300,
    color: '#F8F5F0', background: '#0a0a0a',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{
        fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'rgba(248,245,240,0.45)',
      }}>
        {label}{required && <span style={{ color: '#6BA4F8', marginLeft: '3px' }}>*</span>}
      </label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          rows={5}
          style={{ ...shared, resize: 'vertical', minHeight: '120px' }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={shared}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function set(key: keyof typeof form) {
    return (v: string) => setForm(f => ({ ...f, [key]: v }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sent')
    setTimeout(() => {
      setStatus('idle')
      setForm({ firstName: '', lastName: '', phone: '', email: '', message: '' })
    }, 3500)
  }

  return (
    <section
      id="contact"
      style={{
        padding: '120px 64px',
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '80px', alignItems: 'start', maxWidth: '1200px', margin: '0 auto',
      }} className="contact-grid">
        {/* Left */}
        <div>
          <FadeIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{ width: '24px', height: '1px', background: '#6BA4F8', display: 'block' }} />
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', color: '#6BA4F8', textTransform: 'uppercase' }}>
                Contact
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: 'var(--font-ibm-serif), IBM Plex Serif, serif',
              fontSize: 'clamp(28px, 3vw, 44px)',
              fontWeight: 300, color: '#F8F5F0',
              lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: '24px',
            }}>
              Request Access
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p style={{ fontSize: '15px', color: 'rgba(248,245,240,0.5)', lineHeight: 1.85, marginBottom: '40px' }}>
              Interested in learning more about Alcazar Capital Management? We welcome conversations
              with qualified team aligned with our long-term vision.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { dot: true, text: 'info@alcazarcapital.com' },
                { dot: true, text: 'New York · San Francisco · Los Angeles' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#113249', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: 'rgba(248,245,240,0.55)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Form */}
        <FadeIn delay={0.2} direction="left">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="form-row">
              <Field label="First Name" placeholder="First name" value={form.firstName} onChange={set('firstName')} required />
              <Field label="Last Name" placeholder="Last name" value={form.lastName} onChange={set('lastName')} required />
            </div>
            <Field label="Phone" type="tel" placeholder="Phone number" value={form.phone} onChange={set('phone')} />
            <Field label="Email" type="email" placeholder="Email address" value={form.email} onChange={set('email')} required />
            <Field label="Message" placeholder="Your message or inquiry..." value={form.message} onChange={set('message')} textarea />
            <button
              type="submit"
              disabled={status === 'sent'}
              style={{
                background: status === 'sent' ? '#1a6a3a' : '#113249',
                color: '#F8F5F0',
                border: `1px solid ${status === 'sent' ? '#1a6a3a' : '#113249'}`,
                borderRadius: '4px', padding: '14px',
                fontFamily: 'var(--font-ibm-sans), IBM Plex Sans, sans-serif',
                fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em',
                textTransform: 'uppercase', cursor: status === 'sent' ? 'default' : 'pointer',
                transition: 'background 0.3s, border-color 0.3s',
              }}
            >
              {status === 'sent' ? 'Inquiry Sent — Thank You' : 'Send Inquiry'}
            </button>
          </form>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
          #contact { padding: 80px 24px !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(248,245,240,0.25); font-size: 13px; }
      `}</style>
    </section>
  )
}
