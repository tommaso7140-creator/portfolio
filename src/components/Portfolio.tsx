'use client'

import { motion } from 'framer-motion'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Projets</h2>
          <p className="text-white/50 mt-4 max-w-lg">
            En cours de construction. Premier case study complet disponible bientôt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* TitanWear Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-7 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full">
                Case study
              </span>
            </div>

            <div className="mb-5">
              <h3 className="text-2xl font-bold">TitanWear</h3>
              <p className="text-white/40 text-sm mt-1">Marque sportswear — Angle : Mental Discipline over Motivation</p>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Stratégie email complète pour une boutique de vêtements de sport. Welcome flow 5 emails, abandon cart 3 emails, campagnes segmentées.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { value: '42%', label: 'Open rate' },
                { value: '3.8%', label: 'Click rate' },
                { value: '+28%', label: 'Revenue email' },
              ].map((m) => (
                <div key={m.label} className="text-center p-3 rounded-xl bg-white/5">
                  <div className="text-orange-400 font-bold text-lg">{m.value}</div>
                  <div className="text-white/40 text-xs mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {['Klaviyo', 'Welcome Flow', 'Abandon Cart', 'Copywriting'].map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/50 border border-white/8">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Slot futur */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-2xl border border-white/8 border-dashed p-7 flex flex-col items-center justify-center text-center min-h-64"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <span className="text-white/30 text-2xl">+</span>
            </div>
            <p className="text-white/30 text-sm font-medium">Prochain client</p>
            <p className="text-white/20 text-xs mt-2 max-w-xs">
              Tu peux être le premier vrai case study de ce portfolio.
            </p>
            <a
              href="#contact"
              className="mt-6 text-xs text-orange-500 hover:text-orange-400 border border-orange-500/30 hover:border-orange-400/50 px-4 py-2 rounded-full transition-all"
            >
              Discutons →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
