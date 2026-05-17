import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Target, Settings, Layout } from 'lucide-react'
import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <Navigate to="/portfolio" replace />

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3)
  const isSide = project.kind === 'side'

  return (
    <div className="bg-canvas">
      {/* Header */}
      <section className="border-b border-ink/10 pt-32 pb-16">
        <div className="container-wide">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-ink/45 hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> All Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Title */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={isSide ? 'tag-gold' : 'tag-accent'}>
                  {isSide ? 'Side Build · Founder' : 'Client Engagement'}
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink/45 font-semibold">
                  {project.client}
                </span>
                <span className="text-[11px] text-ink/35">{project.period}</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="display-lg leading-[1.05] mb-5"
              >
                {project.title}
              </motion.h1>
              <p className="lead max-w-2xl">{project.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.category.map((c) => (
                  <span key={c} className="tag-ink">{c}</span>
                ))}
              </div>
            </div>

            {/* Meta */}
            <aside className="lg:col-span-4">
              <div className="card p-7 flex flex-col gap-6">
                <div>
                  <p className="section-label mb-2">Role</p>
                  <p className="text-ink font-semibold text-sm">{project.role}</p>
                </div>
                <div>
                  <p className="section-label mb-2">Client / Context</p>
                  <p className="text-ink font-semibold text-sm">{project.client}</p>
                  <p className="text-[11px] text-ink/45 mt-1">{project.period}</p>
                </div>
                <div>
                  <p className="section-label mb-3">Tools &amp; Tech</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span key={t} className="tag-ink">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container-wide py-20">
        <div className="max-w-3xl space-y-20">

          {[
            { icon: Target,   label: 'Challenge', text: project.problem   },
            { icon: Settings, label: 'Approach',  text: project.approach  },
            { icon: Layout,   label: 'Execution', text: project.execution },
          ].map(({ icon: Icon, label, text }, i) => (
            <motion.div key={label} {...inView(i * 0.08)} className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">{label}</h2>
                </div>
              </div>
              <div className="md:col-span-3">
                <p className="text-ink/75 leading-relaxed text-[17px]">{text}</p>
              </div>
            </motion.div>
          ))}

          {/* Results */}
          <motion.div {...inView(0.1)}>
            <div className="border border-accent/25 p-8 sm:p-12" style={{ background: 'rgba(15,93,74,0.04)' }}>
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Outcome</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {project.metrics?.map((m) => (
                  <div
                    key={m}
                    className="flex items-start gap-3 p-4 bg-surface border border-ink/8"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-ink font-medium leading-snug">{m}</span>
                  </div>
                ))}
              </div>
              <p className="text-ink/65 text-[15px] leading-relaxed border-t border-ink/10 pt-6">
                {project.outcome}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More work */}
      <section className="border-t border-ink/10 bg-sand">
        <div className="container-wide py-16">
          <h2 className="font-serif text-xl font-medium text-ink mb-8">More case studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-ink/10 bg-surface divide-y sm:divide-y-0 sm:divide-x divide-ink/10">
            {others.map((p) => (
              <Link
                key={p.id}
                to={`/portfolio/${p.slug}`}
                className="group p-7 hover:bg-sand transition-colors flex flex-col gap-3"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] font-semibold"
                   style={{ color: p.kind === 'side' ? '#7c5f1f' : '#0f5d4a' }}>
                  {p.client}
                </p>
                <h3 className="font-serif text-lg font-medium text-ink leading-snug group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-ink/50 leading-relaxed">{p.tagline}</p>
                <div className="mt-auto pt-4 flex items-center gap-1 text-[11px] uppercase tracking-[0.20em] font-semibold text-ink/45 group-hover:text-accent transition-colors">
                  Read <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudy
