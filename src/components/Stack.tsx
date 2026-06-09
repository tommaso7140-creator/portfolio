'use client'

import { motion } from 'framer-motion'

const tools = [
  {
    name: 'Klaviyo',
    tag: 'Outil principal',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.2)',
    description: 'Flows, segmentation avancée, A/B testing, attribution revenue. Je construis des séquences qui convertissent.',
    features: ['Welcome Flow', 'Abandon Cart', 'Re-engagement', 'Segmentation RFM'],
    logo: 'K',
  },
  {
    name: 'n8n',
    tag: 'Automatisation',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.2)',
    description: "Automatisation des tâches répétitives — scraping, sync CRM, enrichissement de données, pipelines custom.",
    features: ['Workflows custom', 'API integrations', 'Data pipelines', 'Scraping'],
    logo: 'n8',
  },
  {
    name: 'Zapier',
    tag: 'Intégrations',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    description: 'Connexion rapide entre outils — Shopify, Klaviyo, Notion, Slack. Zéro code pour les automatisations simples.',
    features: ['Shopify → Klaviyo', 'Triggers multi-apps', 'Zaps conditionnels', 'No-code'],
    logo: 'Z',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Stack() {
  return (
    <section id="stack" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Mes outils
          </h2>
          <p className="text-white/50 mt-4 max-w-lg">
            Trois outils maîtrisés, chacun avec un rôle précis dans ta stratégie email.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 border flex flex-col gap-5"
              style={{ background: tool.bg, borderColor: tool.border }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
                  style={{ background: `${tool.color}20`, color: tool.color }}
                >
                  {tool.logo}
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: `${tool.color}15`, color: tool.color }}
                >
                  {tool.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{tool.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {tool.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/50 border border-white/8"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
