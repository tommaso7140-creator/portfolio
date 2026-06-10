'use client'

import dynamic from 'next/dynamic'

const Cursor = dynamic(() => import('./Cursor'), { ssr: false })
const ScrollProgress = dynamic(() => import('./ScrollProgress'), { ssr: false })
const Navbar = dynamic(() => import('./Navbar'), { ssr: false })
const Hero = dynamic(() => import('./Hero'), { ssr: false })
const About = dynamic(() => import('./About'), { ssr: false })
const Projects = dynamic(() => import('./Projects'), { ssr: false })
const Contact = dynamic(() => import('./Contact'), { ssr: false })
const Footer = dynamic(() => import('./Footer'), { ssr: false })

export default function ClientPage() {
  return (
    <main className="bg-[#04050f] text-white min-h-screen">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
