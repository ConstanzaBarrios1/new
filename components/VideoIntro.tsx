'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VideoIntro({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked, skip to main content
        handleComplete()
      })
    }
  }, [])

  function handleComplete() {
    setShow(false)
    setTimeout(onComplete, 600)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#0a0a0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={handleComplete}
        >
          <video
            ref={videoRef}
            onEnded={handleComplete}
            muted
            playsInline
            style={{
              maxWidth: '80%',
              maxHeight: '80%',
              objectFit: 'contain',
            }}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-2-9RtTC9hJgdVeCoDHvlt5MjUy68Gigo.mp4" type="video/mp4" />
          </video>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
              position: 'absolute',
              bottom: '40px',
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: 'rgba(248,245,240,0.3)',
              textTransform: 'uppercase',
            }}
          >
            Click to skip
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
