'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Audit',
    description: "J'analyse ta liste, tes flows existants, ta délivrabilité. En 48h, tu sais exactement ce qui te coûte du revenu.",
    detail: 'Open rate, click rate, unsubscribe rate, segmentation actuelle',
  },
  {
    number: '02',
    title: 'Construction',
    description: 'Je monte les 3 flows essentiels — welcome, abandon panier, re-engagement — avec du copy qui convertit.',
    detail: 'Minimum 3 emails par flow, A/B test sur les objets, intégration Klaviyo',
  },
  {
    number: '03',
    title: 'Optimisation',
    description: "Chaque semaine, je lis les stats et j'ajuste. Pas de pilote automatique — du suivi actif.",
    detail: 'Rapport mensuel, itérations sur les objets et CTAs, nettoyage liste',
  },
]

export default function Approach() {
  return (
    <section id="approche" className="py-28 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">Méthode</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Comment je travaille</h2>
          <p className="text-white/50 mt-4 max-w-lg">
            Simple et direct. Trois étapes, zéro blabla, des résultats mesurables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Ligne connecteur desktop */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-orange-500/40 via-orange-500/20 to-orange-500/40" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="flex items-start gap-4 md:flex-col md:gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 font-bold text-lg">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">{step.description}</p>
                  <p className="text-white/30 text-xs border-t border-white/8 pt-3">{step.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
