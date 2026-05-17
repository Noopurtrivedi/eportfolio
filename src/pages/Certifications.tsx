import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

interface Cert {
  name: string
  issuer: string
  year: string
  credentialId?: string
  url?: string
  pdf?: string
  category: 'Quality & Testing' | 'Agile & Delivery' | 'Data & BI' | 'Platforms' | 'AI & Automation'
}

const certifications: Cert[] = [
  {
    name:         'Certified Tester, Foundation Level (CTFL)',
    issuer:       'ASTQB · ISTQB Certification in the U.S.',
    year:         'July 2021',
    credentialId: '21-CTFL-01364-USA',
    url:          'https://atsqa.org/certified-testers',
    pdf:          '/credentials/ctfl-21-01364-usa.pdf',
    category:     'Quality & Testing',
  },
]

const Certifications: React.FC = () => {
  const categories = Array.from(new Set(certifications.map((c) => c.category)))

  return (
    <div className="bg-canvas">
      {/* Header */}
      <section className="border-b border-ink/10 pt-36 pb-20">
        <div className="container-wide">
          <p className="eyebrow mb-4 inline-flex items-center gap-2"><Award className="w-3.5 h-3.5" /> Certifications</p>
          <h1 className="display-xl max-w-4xl">
            Formal credentials behind
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> the case studies.</span>
          </h1>
          <p className="lead mt-8 max-w-2xl">
            A short, real list. Each credential below is verifiable — by PDF, by
            ID, or via the issuing body’s public registry.
          </p>
        </div>
      </section>

      {/* Cert grid by category */}
      <section className="container-wide py-20">
        <div className="flex flex-col gap-16">
          {categories.map((cat, ci) => {
            const items = certifications.filter((c) => c.category === cat)
            if (items.length === 0) return null
            return (
              <motion.div key={cat} {...inView(ci * 0.05)}>
                <div className="flex items-end justify-between mb-6 border-b border-ink/10 pb-4">
                  <h2 className="font-serif text-3xl font-medium text-ink">{cat}</h2>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-ink/45 font-semibold">
                    {items.length} credential{items.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink/10 bg-surface">
                  {items.map((c, i) => (
                    <div
                      key={c.name}
                      className={`p-7 ${items.length > 1 ? `border-b border-ink/8 ${i % 2 === 0 ? 'md:border-r md:border-ink/8' : ''}` : ''}`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-9 h-9 border border-ink/15 flex items-center justify-center flex-shrink-0">
                          <ShieldCheck className="w-4 h-4 text-accent" strokeWidth={1.5} />
                        </div>
                        <span className="tag-accent">Verified</span>
                      </div>
                      <h3 className="font-serif text-lg font-medium text-ink leading-snug">{c.name}</h3>
                      <p className="mt-2 text-sm text-ink/60">{c.issuer}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-ink/45 font-semibold">
                          {c.year}
                        </p>
                        <div className="flex items-center gap-4">
                          {c.pdf && (
                            <a
                              href={c.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent hover:text-accent-dark transition-colors"
                            >
                              <FileText className="w-3 h-3" /> View PDF
                            </a>
                          )}
                          {c.url && (
                            <a
                              href={c.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent hover:text-accent-dark transition-colors"
                            >
                              Verify <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                      {c.credentialId && (
                        <p className="mt-3 text-[11px] text-ink/40 font-mono">ID: {c.credentialId}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* Additional credentials note */}
          <motion.div {...inView(0.1)} className="border border-ink/10 bg-surface p-8 md:p-10">
            <p className="eyebrow mb-3">Also on file</p>
            <p className="text-[15px] text-ink/65 leading-relaxed max-w-2xl">
              Additional formal coursework and certifications across SAP, Microsoft
              data platforms, Tableau and AI — happy to share the underlying
              transcripts and credential IDs for any role that requires them.
              Reach out and I’ll send what’s relevant.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-accent hover:text-accent-dark transition-colors"
            >
              Request additional credentials <ArrowUpRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10 bg-sand">
        <div className="container-wide py-20 text-center">
          <h2 className="display-md mb-3">Need a specific credential verified?</h2>
          <p className="text-ink/55 text-sm mb-8 max-w-md mx-auto">
            Happy to share IDs or verification links on request — and to send
            the underlying transcripts for any role that needs them.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-4 text-[13px]">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Certifications
