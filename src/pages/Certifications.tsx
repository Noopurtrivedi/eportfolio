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
  category: 'Agile & Delivery' | 'AI & Cloud' | 'Quality & Testing' | 'Product & Engineering'
}

const certifications: Cert[] = [
  {
    name:     'Certified Scrum Master (CSM)',
    issuer:   'Scrum Alliance',
    year:     '2021',
    category: 'Agile & Delivery',
  },
  {
    name:     'Azure AI Fundamentals',
    issuer:   'Microsoft',
    year:     '2021',
    category: 'AI & Cloud',
  },
  {
    name:         'Certified International Software Testing (CTFL)',
    issuer:       'ATSQ / ASTQB · ISTQB Certification in the U.S.',
    year:         '2021',
    credentialId: '21-CTFL-01364-USA',
    url:          'https://atsqa.org/certified-testers',
    pdf:          '/credentials/ctfl-21-01364-usa.pdf',
    category:     'Quality & Testing',
  },
  {
    name:     'Software Product Management',
    issuer:   'University of Alberta',
    year:     '2020',
    category: 'Product & Engineering',
  },
  {
    name:     'Full Stack Development',
    issuer:   'EvolveU',
    year:     '2020',
    category: 'Product & Engineering',
  },
]

const Certifications: React.FC = () => {
  const categories = Array.from(new Set(certifications.map((c) => c.category)))

  return (
    <div className="bg-canvas">
      {/* Header */}
      <section className="relative border-b border-ink/10 pt-36 pb-20 overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="pointer-events-none absolute -top-32 left-1/3 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(15,93,74,0.08), transparent 70%)' }}
        />
        <div className="container-wide relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4 inline-flex items-center gap-2"
          >
            <Award className="w-3.5 h-3.5 animate-float-y" /> Certifications
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl max-w-4xl"
          >
            Formal credentials behind
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> the work.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lead mt-8 max-w-2xl"
          >
            A short, real list: Scrum, Azure AI, software testing, product
            management, and full-stack development. Credential IDs and
            verification links available where the issuing body provides them.
          </motion.p>
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
                    <motion.div
                      key={c.name}
                      {...inView(i * 0.05)}
                      className={`group p-7 transition-colors duration-300 hover:bg-sand ${items.length > 1 ? `border-b border-ink/8 ${i % 2 === 0 ? 'md:border-r md:border-ink/8' : ''}` : ''}`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-9 h-9 border border-ink/15 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                          <ShieldCheck className="w-4 h-4 text-accent transition-colors duration-300 group-hover:text-canvas" strokeWidth={1.5} />
                        </div>
                        {(c.pdf || c.credentialId) && <span className="tag-accent">Verified</span>}
                      </div>
                      <h3 className="font-serif text-lg font-medium text-ink leading-snug transition-colors duration-300 group-hover:text-accent">{c.name}</h3>
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
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* Additional credentials note */}
          <motion.div {...inView(0.1)} className="border border-ink/10 bg-surface p-8 md:p-10">
            <p className="eyebrow mb-3">Verification</p>
            <p className="text-[15px] text-ink/65 leading-relaxed max-w-2xl">
              Happy to share underlying certificates, transcripts, and
              credential IDs for any role or engagement that requires them.
              Reach out and I will send what is relevant.
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-accent hover:text-accent-dark transition-colors"
            >
              <span className="link-underline">Request additional credentials</span>
              <ArrowUpRight className="w-3 h-3 arrow-shift" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10 bg-sand">
        <div className="container-wide py-20 text-center">
          <h2 className="display-md mb-3">Need a specific credential verified?</h2>
          <p className="text-ink/55 text-sm mb-8 max-w-md mx-auto">
            Happy to share IDs or verification links on request, and to send
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
