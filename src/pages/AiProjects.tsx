import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Lock, Sparkles } from 'lucide-react'
import { aiProducts } from '../data/projects'
import PageNav from '../components/PageNav'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const statusTone = (status: string) =>
  status === 'Active development' || status === 'Active venture' || status === 'Active research'
    ? 'tag-accent'
    : 'tag-ink'

const AiProjects: React.FC = () => {
  const featured = aiProducts.filter((p) => p.featured)
  const rest     = aiProducts.filter((p) => !p.featured)

  return (
    <div className="bg-canvas">

      {/* ─── Header ───────────────────────────────────────────────────── */}
      <section className="relative border-b border-ink/10 pt-36 pb-16 overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="pointer-events-none absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(15,93,74,0.10), transparent 70%)' }}
        />
        <div className="container-wide relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4 inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse-soft" /> AI Projects
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl mb-6 max-w-4xl"
          >
            A portfolio of proprietary AI,
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> built with enterprise discipline.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="lead max-w-2xl"
          >
            I design and build proprietary AI technologies in model
            verification, decision governance, AI orchestration, career
            intelligence, and agent marketplaces. Kept deliberately separate
            from my <Link to="/work" className="text-accent underline">enterprise work</Link>,
            and held to the same standard.
          </motion.p>
        </div>
      </section>

      {/* ─── AI product portfolio ─────────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">The Portfolio</p>
              <h2 className="display-lg">What I’m building.</h2>
            </div>
            <p className="text-sm text-ink/50 italic font-serif max-w-xs md:text-right">
              Presented at the level I share publicly ahead of launch. The full
              picture is a conversation.
            </p>
          </div>

          {/* Featured pair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y lg:divide-y-0 lg:divide-x divide-ink/10 mb-10">
            {featured.map((p, i) => (
              <motion.article key={p.id} {...inView(i * 0.08)} className="group p-9 md:p-12 transition-colors duration-300 hover:bg-sand/50">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={statusTone(p.status)}>{p.status}</span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/45 font-semibold">{p.domain}</span>
                </div>
                <h3 className="font-serif text-3xl font-medium text-ink leading-tight transition-colors duration-300 group-hover:text-accent">
                  {p.name}
                </h3>
                <p className="mt-1 text-[13px] uppercase tracking-[0.18em] text-ink/50 font-semibold">
                  {p.descriptor}
                </p>
                <p className="mt-2 text-[12px] text-accent font-semibold">{p.role}</p>
                <p className="mt-5 text-[16px] text-ink/70 leading-relaxed">{p.oneLiner}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-ink/65 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* Remaining products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p, i) => (
              <motion.article key={p.id} {...inView(i * 0.05)} className="group card card-hover lift p-7 flex flex-col">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className={statusTone(p.status)}>{p.status}</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-ink leading-tight transition-colors duration-300 group-hover:text-accent">
                  {p.name}
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink/50 font-semibold">
                  {p.descriptor}
                </p>
                <p className="mt-2 text-[12px] text-accent font-semibold">{p.role}</p>
                <p className="mt-4 text-sm text-ink/65 leading-relaxed">{p.oneLiner}</p>
                <ul className="mt-5 pt-5 border-t border-ink/8 flex flex-col gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[13px] text-ink/60 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-[7px]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* Discretion note */}
          <motion.div {...inView(0.1)} className="mt-10 border border-ink/10 bg-surface p-7 flex items-start gap-4">
            <div className="w-9 h-9 border border-ink/15 flex items-center justify-center flex-shrink-0">
              <Lock className="w-4 h-4 text-accent" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-ink/60 leading-relaxed max-w-3xl">
              These products are pre-launch, and I keep the architectures,
              feature sets, and evaluation methodologies deliberately private
              until each one goes live. If you’re an investor, collaborator, or
              potential partner and want the deeper story, I’m happy to walk
              through it directly.{' '}
              <Link to="/contact" className="text-accent underline">Start that conversation</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-canvas">
        <div className="container-wide py-24 text-center">
          <h2 className="display-md mb-3">Why do I build? That story has its own page.</h2>
          <p className="text-ink/55 mb-8 text-sm max-w-md mx-auto">
            The founder journey covers where the product practice came from and
            the bet behind it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/founder" className="group btn-primary px-8 py-4 text-[13px]">
              Read the Founder Journey
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="btn-outline px-8 py-4 text-[13px]">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <PageNav current="/ai" />
    </div>
  )
}

export default AiProjects
