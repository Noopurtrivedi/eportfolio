import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Linkedin } from 'lucide-react'
import { clientProjects, sideProjects, skills } from '../data/projects'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const marqueeItems = [
  'Founder · TrinityTalent.ai',
  'Co-founder · CreationX',
  'Senior BA · MTU Maintenance Canada',
  'M365 Modernization',
  'ETL & BI Pipelines',
  'POS · Payments · ERP Integration',
  'GPT-4 Workflow Design',
  'Five Industries · One Operating Style',
]

const Home: React.FC = () => {
  const featured = clientProjects.slice(0, 4)

  return (
    <div className="bg-canvas">

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-20 overflow-hidden">

        {/* Soft accent wash */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(15,93,74,0.07) 0%, transparent 65%)' }}
        />

        <div className="container-wide relative z-10 pt-36">

          {/* Availability badge */}
          <motion.div {...fadeUp(0)} className="mb-10">
            <span className="tag-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
              Open to founding, advisory and senior engagements
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p {...fadeUp(0.05)} className="eyebrow mb-6">
            Noopur Trivedi  ·  Founder  ·  Operator
          </motion.p>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl"
            >
              Founder.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl"
            >
              Senior Business Analyst.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl italic font-light"
              style={{ color: '#0f5d4a' }}
            >
              Operator at the seam.
            </motion.h1>
          </div>

          {/* Sub + CTAs */}
          <div className="mt-14 flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">
            <motion.p
              {...fadeUp(0.45)}
              className="lead max-w-xl"
            >
              I’m the founder of TrinityTalent.ai and co-founder of CreationX,
              currently Senior Business Analyst at MTU Maintenance Canada —
              anchored by eleven years of senior enterprise delivery across
              MTU, BC Hydro, Bell and Syncrude. Two careers, one operating
              style — executed where systems meet strategy.
            </motion.p>

            <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link to="/portfolio" className="btn-primary px-8 py-4 text-[13px]">
                View Case Studies <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline px-8 py-4 text-[13px]">
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Tag strip */}
          <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-3 mt-14">
            {[
              'Founder · TrinityTalent.ai',
              'Co-founder · CreationX',
              'MTU Maintenance Canada · Senior BA',
              'BC Hydro · SAP (past)',
              'Bell · BI & ETL',
              'Pacific Northwest · Remote-first',
            ].map((t) => (
              <span key={t} className="tag-ink">{t}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="border-y border-ink/10 py-4 overflow-hidden bg-sand">
        <div className="marquee-track select-none">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-5 px-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55 whitespace-nowrap">
                {item}
              </span>
              <span className="text-accent text-sm">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          METRICS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="container-wide py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-ink/10">
          {[
            { value: '2',     label: 'Companies Founded' },
            { value: '11+',   label: 'Years Enterprise IT' },
            { value: '1,000+',label: 'Person Enterprise Served' },
            { value: '5',     label: 'Industries Served' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              {...inView(i * 0.07)}
              className={`p-10 flex flex-col gap-2 ${i !== 0 ? 'md:border-l border-ink/10' : ''} ${i === 2 ? 'border-t md:border-t-0' : ''} ${i === 3 ? 'border-t md:border-t-0 border-l' : ''} ${i === 1 ? 'border-l' : ''}`}
            >
              <span className="font-serif text-5xl font-medium text-ink leading-none">{s.value}</span>
              <span className="text-[11px] text-ink/45 uppercase tracking-[0.22em] font-semibold">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURED — CLIENT CASE STUDIES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-ink/10">
        <div className="container-wide py-24">

          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="eyebrow mb-3">Selected Engagements</p>
              <h2 className="display-lg">
                Enterprise case studies.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-ink/55 hover:text-accent transition-colors group"
            >
              All Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col gap-0 border border-ink/10 bg-surface">
            {featured.map((project, i) => (
              <motion.div key={project.id} {...inView(i * 0.06)}>
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group grid grid-cols-12 gap-6 border-b border-ink/8 last:border-b-0 p-8 md:p-10 hover:bg-sand transition-colors"
                >
                  {/* Index */}
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
                    <p className="text-[11px] uppercase tracking-[0.22em] text-ink/40 font-semibold">
                      {project.client}
                    </p>
                    <p className="mt-1 text-[11px] text-ink/40">{project.period}</p>
                  </div>

                  {/* Title + tagline */}
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-serif text-2xl sm:text-[28px] font-medium text-ink leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink/60 max-w-2xl leading-relaxed">
                      {project.tagline}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.category.slice(0, 3).map((c) => (
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
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          EXPERTISE PILLARS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-ink/10 bg-sand">
        <div className="container-wide py-24">
          <div className="mb-16">
            <p className="eyebrow mb-3">Practice Areas</p>
            <h2 className="display-lg">Three disciplines, one delivery style.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink/10 divide-y md:divide-y-0 md:divide-x divide-ink/10 bg-surface">
            {[
              {
                num: '01',
                title: 'Enterprise BSA',
                items: ['Requirements & technical specifications', 'SAP / M365 / SharePoint', 'Stakeholder & governance leadership', 'Agile / Scrum delivery'],
                note: 'I’ve translated complex business needs into the kind of specs engineering can actually build against — at MTU Maintenance Canada, BC Hydro and Syncrude.',
              },
              {
                num: '02',
                title: 'Data, BI & Integration',
                items: ['ETL pipelines (Pentaho, ctools)', 'Power BI · Tableau · Power Query', 'POS · ERP · Payment Gateway APIs', 'Audit-grade documentation'],
                note: 'From Bell Canada’s executive dashboards to NRI’s POS/payment integrations — making data trustworthy and interfaces clean.',
              },
              {
                num: '03',
                title: 'AI & Automation',
                items: ['GPT-4 agents · vector embeddings', 'Zapier · Make · Python workflows', 'Founder · TrinityTalent.ai', 'Co-founder · CreationX'],
                note: 'I build production AI products on the side — TrinityTalent.ai and CreationX — applying enterprise rigor to modern stacks.',
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.num}
                {...inView(i * 0.1)}
                className="p-10 flex flex-col gap-8"
              >
                <div>
                  <span className="font-serif text-sm" style={{ color: 'rgba(15,93,74,0.55)' }}>
                    {pillar.num}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-ink mt-2">{pillar.title}</h3>
                </div>

                <ul className="flex flex-col gap-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/65">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-ink/50 leading-relaxed border-t border-ink/10 pt-6 italic font-serif">
                  {pillar.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SIDE BUILDS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-ink/10">
        <div className="container-wide py-24">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow mb-3">Building on the Side</p>
            <h2 className="display-lg">Products born from the patterns I keep being asked to build.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-ink/10 bg-surface divide-y sm:divide-y-0 sm:divide-x divide-ink/10">
            {sideProjects.map((proj, i) => (
              <motion.div
                key={proj.id}
                {...inView(i * 0.08)}
                className="p-8 flex flex-col gap-5 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm" style={{ color: 'rgba(15,93,74,0.55)' }}>
                    0{i + 1}
                  </span>
                  <span className="tag-gold">Founder Build</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-ink">{proj.title.split(' — ')[0]}</h3>
                <p className="text-[11px] text-ink/40 uppercase tracking-[0.20em] font-semibold">{proj.tagline}</p>
                <p className="text-sm text-ink/65 leading-relaxed">{proj.description}</p>
                <Link
                  to={`/portfolio/${proj.slug}`}
                  className="mt-auto pt-5 border-t border-ink/10 inline-flex items-center gap-2 text-[12px] font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  Read the build <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CAPABILITIES MATRIX
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-ink/10 bg-sand">
        <div className="container-wide py-24">
          <div className="mb-16">
            <p className="eyebrow mb-3">Capabilities</p>
            <h2 className="display-lg">Toolkit.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-ink/10 bg-surface divide-y lg:divide-y-0 lg:divide-x divide-ink/10">
            {[
              { label: 'Delivery',         items: skills.delivery },
              { label: 'Data & BI',        items: skills.data     },
              { label: 'Systems',          items: skills.systems  },
              { label: 'AI & Automation',  items: skills.ai       },
            ].map((group, i) => (
              <motion.div key={group.label} {...inView(i * 0.06)} className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 bg-accent" />
                  <h3 className="text-[11px] font-semibold text-ink uppercase tracking-[0.22em]">
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="text-sm text-ink/65">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MORE THAN THE RESUME
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-ink/10">
        <div className="container-wide py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-3">More than the resume</p>
              <h2 className="display-lg">
                The wider address —
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> founder story, mountains, art, animals.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-[15px] text-ink/65 leading-relaxed">
              This site is meant to be a real place to know me, not a PDF that
              opens once. Wander through the chapters that don't fit on a job
              description.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {[
              {
                to:    '/journey',
                label: 'The Journey',
                sub:   'How the BSA work and the founder builds became one career.',
              },
              {
                to:    '/life',
                label: 'Life Beyond Work',
                sub:   'Photography, painting, animal advocacy, mountains, haul-truck stories.',
              },
              {
                to:    '/certifications',
                label: 'Certifications',
                sub:   'Formal credentials behind the case studies.',
              },
            ].map((c, i) => (
              <motion.div key={c.to} {...inView(i * 0.06)}>
                <Link to={c.to} className="group block p-10 h-full hover:bg-sand transition-colors">
                  <p className="font-serif text-xs uppercase tracking-[0.22em] text-ink/35">
                    0{i + 1}
                  </p>
                  <h3 className="display-md mt-2 group-hover:text-accent transition-colors">
                    {c.label}
                  </h3>
                  <p className="mt-4 text-[15px] text-ink/65 leading-relaxed">{c.sub}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-semibold text-accent">
                    Enter <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-ink/10">
        <div className="container-wide py-32 text-center">
          <motion.div {...inView(0)} className="max-w-2xl mx-auto">
            <p className="eyebrow mb-8">Currently open to work</p>
            <h2 className="display-lg mb-4">
              Let’s talk about what you’re building.
            </h2>
            <p className="lead mt-6 mb-12">
              Founding partnerships, advisory and board conversations, Senior
              BA contracts, or strategic engagements — I bring the
              operator-founder lens and the discipline behind it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10 py-4 text-[13px]">
                Start a Conversation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="https://linkedin.com/in/noopur-trivedi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-10 py-4 text-[13px]"
              >
                <Linkedin className="mr-2 w-4 h-4" /> Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home
