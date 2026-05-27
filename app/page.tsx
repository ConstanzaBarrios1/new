'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Strategy from '@/components/Strategy'
import Research from '@/components/Research'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const VideoIntro = dynamic(() => import('@/components/VideoIntro'), { ssr: false })

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <VideoIntro onComplete={() => setIntroComplete(true)} />
      {introComplete && (
        <>
          <Nav />
          <main>
            <Hero />
            <About />
            <Strategy />
            <Research />
            <Team />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
