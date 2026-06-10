'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Profil', href: '#profil' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.3 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#04050f]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-white font-black text-lg tracking-tight">
            TI<span className="text-orange-500">.</span>
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8">
            {links.map((l) => {
              const id = l.href.slice(1)
              const isActive = active === id
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative text-sm transition-colors tracking-wide py-1 ${
                    isActive ? 'text-white' : 'text-white/40 hover:text-white/90'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-orange-500"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="text-xs bg-orange-500 hover:bg-orange-400 text-black font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105 tracking-wide uppercase"
            >
              Me contacter
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-white/70 origin-center transition-colors"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-5 h-px bg-white/70"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-white/70 origin-center transition-colors"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#04050f]/98 backdrop-blur-xl border-b border-white/8 md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((l) => {
                const id = l.href.slice(1)
                const isActive = active === id
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={handleNavClick}
                    className={`text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                      isActive
                        ? 'text-orange-400 bg-orange-500/8'
                        : 'text-white/60 hover:text-white hover:bg-white/4'
                    }`}
                  >
                    {l.label}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
