import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type ProjectCategory } from '../data/projects'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'

type Filter = 'All' | 'Client' | 'Side Builds' | ProjectCategory

const filters: Filter[] = [
  'All',
  'Client',
  'Side Builds',
  'Enterprise',
  'BSA',
  'Data & BI',
  'Integration',
  'Retail / POS',
  'AI',
  'Founder',
]

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const Portfolio: React.FC = () => {
  const [active, setActive] = useState<Filter>('All')

  const filtered = projects.filter((p) => {
    if (active === 'All')         return true
    if (active === 'Client')      return p.kind === 'client'
    if (active === 'Side Builds') return p.kind === 'side'
    return p.category.includes(active as ProjectCategory)
  })

  return (
    <div className="bg-canvas">
      {/* Header */}
      <section className="border-b border-ink/10 pt-36 pb-16">
        <div className="container-wide">
          <p className="eyebrow mb-4">Selected Work</p>
          <h1 className="display-xl mb-6 max-w-4xl">
            Case studies from regulated enterprises
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> and the side builds they inspire.</span>
          </h1>
          <p className="lead max-w-2xl">
            Each engagement is documented end-to-end: the problem, the approach,
            the execution, and what actually changed. Filter by discipline or by
            client vs. founder work.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-ink/10 sticky top-16 z-30 bg-canvas/90 backdrop-blur-sm">
        <div className="container-wide py-4 flex items-center gap-2 overflow-x-auto">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={clsx(
                'flex-shrink-0 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-200 border',
                active === cat
                  ? 'bg-accent text-canvas border-accent'
                  : 'text-ink/55 hover:text-ink border-ink/15 hover:border-ink/35 bg-surface',
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project list */}
      <section className="container-wide py-16">
        <div className="flex flex-col gap-0 border border-ink/10 bg-surface">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group grid grid-cols-12 gap-6 border-b border-ink/8 last:border-b-0 p-8 md:p-10 hover:bg-sand transition-colors"
                >
                  {/* Number */}
                  <div className="col-span-12 md:col-span-1">
                    <span
                      className="font-serif text-4xl font-light"
                      style={{ color: 'rgba(15,93,74,0.40)', lineHeight: 1 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Client + period */}
                  <div className="col-span-12 md:col-span-3">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-ink/45 font-semibold">
                      {project.client}
                    </p>
                    <p className="mt-1 text-[11px] text-ink/45">{project.period}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.20em] font-semibold"
                       style={{ color: project.kind === 'side' ? '#7c5f1f' : '#0f5d4a' }}>
                      {project.kind === 'side' ? 'Side Build' : 'Client Engagement'}
                    </p>
                  </div>

                  {/* Title + description */}
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-serif text-2xl sm:text-[26px] font-medium text-ink leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink/60 max-w-2xl leading-relaxed">
                      {project.tagline}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.category.slice(0, 4).map((c) => (
                        <span key={c} className="tag-ink">{c}</span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-12 md:col-span-1 flex md:justify-end md:items-start">
                    <div className="w-11 h-11 border border-ink/15 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-ink/55 group-hover:text-canvas transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="p-16 text-center text-ink/50 text-sm">
              No case studies in this category yet.
            </div>
          )}
        </div>

        {/* Counter */}
        <motion.p {...inView(0.1)} className="mt-6 text-[11px] uppercase tracking-[0.22em] text-ink/40 font-semibold">
          Showing {filtered.length} of {projects.length} engagements
        </motion.p>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10 bg-sand">
        <div className="container-wide py-24 text-center">
          <h2 className="display-md mb-3">Have a brief I should look at?</h2>
          <p className="text-ink/55 mb-8 text-sm max-w-md mx-auto">
            Senior BSA contracts, BI/integration programs, or product partnerships
            — send the context, I’ll respond within a day.
          </p>
          <Link to="/contact" className="btn-primary px-10 py-4 text-[13px]">
            Start a Conversation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
