'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#06060f] via-[#06060f]/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-[#06060f] to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-400 text-xs font-medium tracking-wide uppercase">Disponible pour missions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Tommaso <br />
            <span className="text-orange-500">Inglisa</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 font-light mb-3 max-w-lg">
            Email Marketing Freelance
          </p>

          <p className="text-white/50 text-base max-w-md mb-10 leading-relaxed">
            Je construis des systèmes d&apos;emails qui génèrent du revenu récurrent
            pour les boutiques e-commerce — flows, campagnes, automatisations.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-400 text-black font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95"
            >
              Travailler ensemble
            </a>
            <a
              href="#portfolio"
              className="border border-white/15 hover:border-white/30 text-white/80 hover:text-white font-medium px-7 py-3.5 rounded-full transition-all"
            >
              Voir le portfolio
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-wrap gap-8 mt-20"
        >
          {[
            { value: '35%+', label: 'Open rate cible' },
            { value: '3 flows', label: 'Automatisés dès J1' },
            { value: 'Klaviyo', label: 'Certifié' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
              <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
