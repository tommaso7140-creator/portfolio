'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const mailto = `mailto:tommaso7140@icloud.com?subject=Mission freelance - ${name}&body=${message}%0A%0AEmail: ${email}`
    window.open(mailto)
    setSent(true)
  }

  return (
    <section id="contact" className="py-28 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              On travaille<br />ensemble ?
            </h2>
            <p className="text-white/55 leading-relaxed mb-8">
              Tu as une boutique e-commerce et tu veux générer plus de revenu via l&apos;email. Je t&apos;aide à construire le système complet — flows, campagnes, segmentation.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Setup complet (one-shot)', price: '500–800€' },
                { label: 'Gestion mensuelle (retainer)', price: '800–1 200€/mois' },
                { label: 'Audit email', price: '150–300€' },
              ].map((offer) => (
                <div key={offer.label} className="flex items-center justify-between p-4 rounded-xl bg-white/4 border border-white/8">
                  <span className="text-sm text-white/70">{offer.label}</span>
                  <span className="text-orange-400 font-semibold text-sm">{offer.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="text-center p-10 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-white/50 text-sm">Je te réponds dans les 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wide mb-2 block">Nom</label>
                  <input
                    name="name"
                    required
                    placeholder="Ta boutique ou ton prénom"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-orange-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wide mb-2 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="ton@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-orange-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wide mb-2 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Décris ta boutique, ta situation actuelle, ce que tu cherches..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-400 text-black font-semibold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Envoyer →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
