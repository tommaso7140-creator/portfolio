'use client'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-orange-500 font-bold">TI.</span>
        <p className="text-white/30 text-xs">
          © 2025 Tommaso Inglisa — Email Marketing Freelance
        </p>
        <div className="flex gap-6">
          {['Klaviyo', 'n8n', 'Zapier'].map((t) => (
            <span key={t} className="text-white/20 text-xs">{t}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
