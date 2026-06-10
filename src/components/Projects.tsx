'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    label: 'Pipeline Acquisition B2B',
    desc: 'Système self-hosted complet : scraping LinkedIn, enrichissement Apollo, scoring LLM, outreach automatisé. Ce mail vous est peut-être arrivé via ce pipeline.',
    tags: ['n8n', 'Apify', 'OpenRouter', 'Twenty CRM', 'Python'],
    status: 'Live',
    statusColor: '#4ade80',
    color: '#f97316',
  },
  {
    label: 'TitanWear — Email Marketing',
    desc: 'Séquences Klaviyo sur marque fictive streetwear : Welcome Flow 5 emails, Abandoned Cart 3 emails, segmentation RFM, revenue attribution.',
    tags: ['Klaviyo', 'Copywriting', 'Segmentation', 'A/B Testing'],
    status: 'En cours',
    statusColor: '#f97316',
    color: '#8b5cf6',
  },
  {
    label: 'Projet 3',
    desc: 'Bientôt disponible',
    tags: [],
    status: 'À venir',
    statusColor: '#ffffff30',
    color: '#60a5fa',
    placeholder: true,
  },
  {
    label: 'Projet 4',
    desc: 'Bientôt disponible',
    tags: [],
    status: 'À venir',
    statusColor: '#ffffff30',
    color: '#4ade80',
    placeholder: true,
  },
]

export default function Projects() {
  return (
    <section id="projets" className="py-28 px-6 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">Projets</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Ce que j&apos;ai construit</h2>
          <p className="text-white/40 mt-4 max-w-lg text-sm">
            Projets réels, pas de théorie. Chaque case est un système que je peux défendre ligne par ligne.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border p-8 flex flex-col min-h-52 transition-all ${
                p.placeholder
                  ? 'border-dashed items-center justify-center text-center'
                  : 'border-white/6 hover:border-white/12 bg-[#080920]'
              }`}
              style={{ borderColor: p.placeholder ? `${p.color}20` : undefined }}
            >
              {p.placeholder ? (
                <>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ background: `${p.color}10` }}
                  >
                    <span className="text-xl font-thin" style={{ color: `${p.color}40` }}>+</span>
                  </div>
                  <p className="text-white/25 text-sm font-medium">{p.label}</p>
                  <p className="text-white/15 text-xs mt-1">{p.desc}</p>
                </>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-base font-black tracking-tight leading-tight">{p.label}</h3>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ background: `${p.statusColor}15`, color: p.statusColor }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded bg-white/4 text-white/35 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-white/25 text-sm">
            Tu veux être le premier case study client de ce portfolio ?{' '}
            <a href="#contact" className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors">
              Discutons
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
