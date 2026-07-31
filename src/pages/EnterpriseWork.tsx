import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { enterprisePrograms, workExperience } from '../data/projects'
import PageNav from '../components/PageNav'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const EnterpriseWork: React.FC = () => {
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
            className="eyebrow mb-4"
          >
            Enterprise Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl mb-6 max-w-4xl"
          >
            Programs led and delivered
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> inside regulated, high-visibility environments.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="lead max-w-2xl"
          >
            Modernization, migration, governance, and analytics programs across
            utilities, aerospace, telecommunications, logistics, and oil &amp;
            gas: 13+ years of enterprise transformation, delivered end to end.
          </motion.p>
        </div>
      </section>

      {/* ─── Program highlights ───────────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-3">Program Highlights</p>
            <h2 className="display-lg">The work I'd walk you through first.</h2>
          </div>

          <div className="flex flex-col border border-ink/10 bg-surface">
            {enterprisePrograms.map((prog, i) => (
              <motion.article
                key={prog.id}
                {...inView(i * 0.04)}
                className="group grid grid-cols-12 gap-6 border-b border-ink/8 last:border-b-0 p-8 md:p-10 transition-colors duration-300 hover:bg-sand/60"
              >
                <div className="col-span-12 md:col-span-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold">{prog.org}</p>
                  <p className="mt-1 text-[11px] text-ink/45">{prog.period}</p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-serif text-2xl font-medium text-ink leading-snug transition-colors duration-300 group-hover:text-accent">
                    {prog.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-ink/65 leading-relaxed max-w-3xl">{prog.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {prog.tags.map((t) => (
                      <span key={t} className="tag-ink">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Where the programs happened ──────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">The organizations</p>
              <h2 className="display-lg">Five industries, one standard of delivery.</h2>
            </div>
            <Link
              to="/#experience"
              className="group inline-flex items-center gap-2 text-[12px] font-semibold text-accent hover:text-accent-dark transition-colors"
            >
              <span className="link-underline">Full experience timeline on the profile</span>
              <ArrowUpRight className="w-3 h-3 arrow-shift" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workExperience.map((role, i) => (
              <motion.div key={`${role.org}-${role.period}`} {...inView(i * 0.05)} className="card p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold">{role.period}</p>
                <h3 className="mt-3 font-serif text-xl font-medium text-ink leading-snug">{role.org}</h3>
                <p className="mt-1 text-[13px] text-ink/55">{role.title}</p>
                <p className="mt-4 text-sm text-ink/65 leading-relaxed">{role.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-canvas">
        <div className="container-wide py-24 text-center">
          <h2 className="display-md mb-3">Want the story behind any of this?</h2>
          <p className="text-ink/55 mb-8 text-sm max-w-md mx-auto">
            For hiring conversations, collaborations, or comparing notes on
            enterprise transformation, I would rather talk directly.
          </p>
          <Link to="/contact" className="group btn-primary px-10 py-4 text-[13px]">
            Schedule a Conversation
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <PageNav current="/work" />
    </div>
  )
}

export default EnterpriseWork
