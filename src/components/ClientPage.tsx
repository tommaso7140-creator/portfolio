'use client'

import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./Navbar'), { ssr: false })
const Hero = dynamic(() => import('./Hero'), { ssr: false })
const Stack = dynamic(() => import('./Stack'), { ssr: false })
const Approach = dynamic(() => import('./Approach'), { ssr: false })
const Portfolio = dynamic(() => import('./Portfolio'), { ssr: false })
const Projects = dynamic(() => import('./Projects'), { ssr: false })
const Contact = dynamic(() => import('./Contact'), { ssr: false })
const Footer = dynamic(() => import('./Footer'), { ssr: false })

export default function ClientPage() {
  return (
    <main className="bg-[#06060f] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stack />
      <Approach />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
