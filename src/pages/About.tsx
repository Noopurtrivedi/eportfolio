import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Linkedin, Mail, Phone, MapPin, FileText,
  Compass, Layers, Anchor, Sparkles, Camera, Brush, Heart, Mountain,
} from 'lucide-react'
import { workExperience, education } from '../data/projects'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const About: React.FC = () => {
  return (
    <div className="bg-canvas">

      {/* ─── Header ───────────────────────────────────────────────────── */}
      <section className="border-b border-ink/10 pt-36 pb-20">
        <div className="container-wide">
          <p className="eyebrow mb-5">About</p>
          <h1 className="display-xl max-w-4xl">
            Founder, operator,
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> and a senior analyst who treats both as one craft.</span>
          </h1>
          <p className="lead mt-8 max-w-2xl">
            Founder of TrinityTalent.ai. Co-founder of CreationX. Senior
            Business Analyst at BC Hydro. Eleven years of regulated-enterprise
            delivery underneath all of it — and an operating style that
            refuses to separate the strategy from the execution.
          </p>
        </div>
      </section>

      {/* ─── Bio + portrait + at-a-glance ───────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Bio prose */}
            <div className="lg:col-span-7 text-ink/75 leading-relaxed text-[17px] space-y-12">

              {/* Section 1: who I am now */}
              <div>
                <p className="eyebrow mb-3">Where I am now</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  Founder of TrinityTalent.ai. Co-founder of CreationX. Senior
                  Business Analyst at BC Hydro.
                </h2>
                <p>
                  I founded <strong className="text-ink">TrinityTalent.ai</strong>
                  — an AI-native hiring intelligence platform that uses semantic
                  embeddings to match candidates to roles by intent, not
                  keywords — and I’m co-founder of <strong className="text-ink">CreationX</strong>,
                  an AI agent marketplace for operators who see what AI can do
                  but can’t hire a team to do it.
                </p>
                <p className="mt-4">
                  My day role is Senior Business Analyst on the SAP program at
                  BC Hydro — a 1,000+ person Crown utility where the standard
                  for delivery is whatever survives an audit. It’s the shape of
                  work I keep gravitating to: cross-functional,
                  integration-heavy, unforgiving of vague specs.
                </p>
                <p className="mt-4">
                  Two roles, one operating style. The same disciplines that
                  make a Crown utility’s SAP rollout reliable are what keep a
                  founder-stage AI product from breaking in front of its users.
                </p>
              </div>

              {/* Section 2: the path */}
              <div>
                <p className="eyebrow mb-3">How I got here</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  An indirect path that turned into the right one.
                </h2>
                <p>
                  I didn’t take a straight line. I started in oil-sands operations
                  at Syncrude — six years of cost analysis, planning, and a stretch
                  behind the wheel of a haul truck — which is probably where I
                  learned that any process that depends on heroics is not a
                  process. From there came technical analyst work at Imperial Oil
                  through Acrodex, agency project coordination at Opal Marketing,
                  quality engineering at X360 Digital, lead-BA integration work at
                  NRI Distributions, BI development at Bell Canada, and analytics
                  ownership for MTU Canada’s M365 modernization.
                </p>
                <p className="mt-4">
                  Each role taught me something the next one needed. Operations
                  taught me about reliability. Quality work taught me about
                  visibility. Integration work taught me about contracts between
                  systems. BI work taught me that reporting is the product, not the
                  by-product. By the time I arrived at senior BA work, the shape of
                  what I wanted to do had stopped being a question.
                </p>
              </div>

              {/* Section 3: the founder side */}
              <div>
                <p className="eyebrow mb-3">Why I build companies</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  Founding as application of enterprise discipline, not escape from it.
                </h2>
                <p>
                  TrinityTalent.ai and CreationX aren’t an escape from enterprise
                  work — they’re an application of it. The same disciplines that
                  make a Crown utility’s SAP rollout reliable are what keep an AI
                  product from breaking in front of its users. Audit-grade
                  documentation, explicit contracts between components, clean
                  reporting from day one — they don’t become less valuable
                  because the stack is younger.
                </p>
                <p className="mt-4">
                  Founding gives me freedom to take the patterns I’ve hardened
                  inside enterprises and ship them in a form operators can
                  actually use. It also keeps me close to the technology layer
                  — the only honest way to remain useful as a senior operator
                  in an AI-saturated world.
                </p>
              </div>

              {/* Section 4: what I care about */}
              <div>
                <p className="eyebrow mb-3">What I actually care about</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  The boring layer underneath everything.
                </h2>
                <p>
                  Systems that survive their first stress test. Reporting that
                  becomes the system of record, not a slide for the steering
                  committee. Teams that ship instead of re-plan. And, mostly,
                  the boring layer underneath everything — the spec, the audit
                  trail, the contract between two services — because that’s
                  where products live or die.
                </p>
                <p className="mt-4">
                  Outside all of this I’m at my best on a long approach with a
                  pack on, in a studio with paint and slow light, or with the
                  rescue community I’ve been part of for years. Those parts of
                  my life aren’t a counterweight to the work — they share an
                  operating style with it.
                </p>
              </div>
            </div>

            {/* Portrait + at-a-glance */}
            <aside className="lg:col-span-5">
              <figure className="mb-6 relative overflow-hidden border border-ink/10 bg-sand">
                <img
                  src="/noopur.jpg"
                  alt="Portrait of Noopur Trivedi"
                  loading="eager"
                  decoding="async"
                  width={848}
                  height={1264}
                  className="w-full h-auto block aspect-[2/3] object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-canvas/95 via-canvas/70 to-transparent">
                  <p className="font-serif text-sm font-medium text-ink leading-tight">
                    Noopur Trivedi
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-ink/55 font-semibold mt-0.5">
                    Senior BA · Founder · Co-founder
                  </p>
                </figcaption>
              </figure>

              <div className="card p-8 sticky top-24">
                <p className="eyebrow mb-5">At a glance</p>
                <dl className="flex flex-col gap-4 text-sm">
                  {[
                    { k: 'Founder',      v: 'TrinityTalent.ai — AI hiring intelligence' },
                    { k: 'Co-founder',   v: 'CreationX — AI agent marketplace' },
                    { k: 'Current role', v: 'Senior Business Analyst · BC Hydro' },
                    { k: 'Experience',   v: '11+ years · Enterprise IT delivery' },
                    { k: 'Industries',   v: 'Utilities · Aerospace · Telecom · Retail · Energy' },
                    { k: 'Specialty',    v: 'SAP · BI · Data integration · POS / payments' },
                    { k: 'Method',       v: 'Agile / Scrum · audit-grade documentation' },
                    { k: 'Based in',     v: 'British Columbia · Canada · Remote-first' },
                    { k: 'Education',    v: 'BBA · Thompson Rivers University (verified)' },
                    { k: 'Languages',    v: 'English · Hindi' },
                  ].map((row) => (
                    <div key={row.k} className="grid grid-cols-12 gap-3 border-b border-ink/8 pb-3 last:border-b-0 last:pb-0">
                      <dt className="col-span-4 text-[11px] uppercase tracking-[0.20em] text-ink/45 font-semibold pt-0.5">{row.k}</dt>
                      <dd className="col-span-8 text-ink/80">{row.v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary px-5 py-2.5 text-[12px]">
                    Get in Touch <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://linkedin.com/in/noopur-trivedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline px-5 py-2.5 text-[12px]"
                  >
                    <Linkedin className="mr-2 w-3.5 h-3.5" /> LinkedIn
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── What I bring ────────────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">What I bring</p>
            <h2 className="display-lg">Four things you can count on, regardless of brief.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-ink/10 bg-surface divide-y lg:divide-y-0 lg:divide-x divide-ink/10">
            {[
              {
                icon: Anchor,
                title: 'Senior delivery in regulated environments.',
                desc: 'Eleven years inside organizations where mistakes are visible — utilities, aerospace, telecom, energy. Audit trails, governance and stakeholder alignment are second nature.',
              },
              {
                icon: Layers,
                title: 'Cross-domain depth at the seams.',
                desc: 'Not just SAP, not just BI, not just integration — the seams between them, where most programs actually fail. I’ve worked all three sides of that wall.',
              },
              {
                icon: Compass,
                title: 'Founder pace, enterprise discipline.',
                desc: 'I own outcomes, run with low management overhead, and know when to ship vs. when to wait. Years of running products on the side made that reflex permanent.',
              },
              {
                icon: Sparkles,
                title: 'A real, practical bridge to AI.',
                desc: 'Hands-on with LLM orchestration, embeddings and modern AI stacks through TrinityTalent.ai and CreationX — not theory, not slides. I’ve shipped this work.',
              },
            ].map((item, i) => (
              <motion.div key={item.title} {...inView(i * 0.06)} className="p-8 flex flex-col gap-5">
                <div className="w-11 h-11 border border-ink/15 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-ink leading-snug">{item.title}</h3>
                <p className="text-[15px] text-ink/65 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How I work — principles ─────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">How I work</p>
            <h2 className="display-lg">A few opinions that have stopped being negotiable.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {[
              {
                num: '01',
                title: 'I write the spec before the slide.',
                desc: 'The deliverable I’m proudest of is rarely a deck. It’s the requirements document, the data flow, the test plan — the artifact a team can act on without ambiguity.',
              },
              {
                num: '02',
                title: 'Reporting is the product.',
                desc: 'Dashboards aren’t the by-product of the project; they’re the system of record once it ships. I deliver the KPI and governance layer that outlives the rollout.',
              },
              {
                num: '03',
                title: 'Visibility beats willpower.',
                desc: 'Teams don’t lift the metric they can’t see. Instrumentation and clean reporting are the cheapest leverage in any organization — and the first thing I add.',
              },
              {
                num: '04',
                title: 'I keep one foot inside.',
                desc: 'Enterprise grounds you. Founder work without it drifts into demos. Founder energy without enterprise drifts into bureaucracy. I want both, on purpose.',
              },
            ].map((lens, i) => (
              <motion.div
                key={lens.num}
                {...inView(i * 0.08)}
                className={`p-10 ${i >= 2 ? 'md:border-t md:border-ink/10' : ''}`}
              >
                <span className="font-serif text-sm" style={{ color: 'rgba(15,93,74,0.55)' }}>
                  {lens.num}
                </span>
                <h3 className="font-serif text-xl font-medium text-ink mt-3 mb-4 leading-snug">{lens.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{lens.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What I'm looking for next ──────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-3">What I’m open to</p>
              <h2 className="display-lg">The kind of work I’d like to do next.</h2>
              <p className="lead mt-6">
                I’m open to a small number of conversations a year — the kind worth
                doing well. If any of these match what you’re hiring or partnering
                on, write to me.
              </p>
              <Link to="/contact" className="mt-8 btn-primary px-7 py-3.5 text-[13px] inline-flex">
                Start a conversation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y sm:divide-y-0 sm:divide-x divide-ink/10">
              {[
                {
                  k: 'Founding &amp; advisory',
                  d: 'Founding partners, design partners, or advisory roles with AI-first companies that need an operator-founder at the table.',
                },
                {
                  k: 'Board &amp; executive conversations',
                  d: 'Independent board, fractional executive or strategic advisory work with companies operating at the intersection of enterprise and AI.',
                },
                {
                  k: 'Senior BA / Lead BA contracts',
                  d: 'Long engagements inside complex enterprises — SAP, M365, BI or integration programs.',
                },
                {
                  k: 'BI, data &amp; integration programs',
                  d: 'ETL, reporting, POS / ERP / payments — the kind of program where the audit trail is non-negotiable.',
                },
              ].map((row, i) => (
                <motion.div
                  key={row.k}
                  {...inView(i * 0.05)}
                  className={`p-7 ${i >= 2 ? 'sm:border-t sm:border-ink/10' : ''}`}
                >
                  <p className="font-serif text-lg font-medium text-ink" dangerouslySetInnerHTML={{ __html: row.k }} />
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{row.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Currently (now strip) ──────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="eyebrow mb-3 inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Currently
              </p>
              <h2 className="display-lg">A "now" page, for the people who like those.</h2>
            </div>
            <p className="hidden sm:block text-sm text-ink/45 italic font-serif max-w-xs text-right">
              Updated when something meaningful changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {[
              {
                head: 'Building',
                items: [
                  'TrinityTalent.ai — AI hiring intelligence (Founder)',
                  'CreationX — AI agent marketplace (Co-founder)',
                  'BC Hydro — Senior BA on the SAP program',
                ],
              },
              {
                head: 'Thinking about',
                items: [
                  'Capital strategy and governance for AI-first companies',
                  'How AI changes the senior BA role — and where it doesn’t',
                  'The right shape for hiring software once embeddings replace keywords',
                ],
              },
              {
                head: 'Living',
                items: [
                  'Based in British Columbia · Pacific Northwest',
                  'Hiking, photography, paint, rescue work on the side',
                  'Replying to every message that isn’t obvious spam',
                ],
              },
            ].map((col, i) => (
              <motion.div key={col.head} {...inView(i * 0.06)} className="p-10">
                <h3 className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold mb-5">{col.head}</h3>
                <ul className="flex flex-col gap-3">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[15px] text-ink/70 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Beyond the work cross-link ─────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-10">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-3">Beyond the work</p>
              <h2 className="display-lg">There’s a wider address — wander through it.</h2>
            </div>
            <p className="lg:col-span-5 text-[15px] text-ink/65 leading-relaxed">
              The career sections explain what I do for a living. These are the
              places that explain why I am the way I am about it.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-ink/10 bg-surface divide-x divide-y lg:divide-y-0 divide-ink/10">
            {[
              { to: '/life/photography', label: 'Photography', icon: Camera },
              { to: '/life/art',         label: 'Painting & Art', icon: Brush },
              { to: '/life/animals',     label: 'Animal Advocacy', icon: Heart },
              { to: '/life/adventures',  label: 'Adventures', icon: Mountain },
            ].map((tile, i) => (
              <Link
                key={tile.to}
                to={tile.to}
                className={`group p-8 hover:bg-sand transition-colors flex flex-col gap-4 ${i === 0 ? 'lg:border-l-0' : ''} ${i === 1 ? 'lg:border-t-0' : ''}`}
              >
                <div className="w-10 h-10 border border-ink/15 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
                  <tile.icon className="w-4 h-4 text-accent group-hover:text-canvas transition-colors" strokeWidth={1.5} />
                </div>
                <p className="font-serif text-xl font-medium text-ink group-hover:text-accent transition-colors">
                  {tile.label}
                </p>
                <div className="mt-auto pt-3 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] font-semibold text-accent">
                  Enter <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience timeline ─────────────────────────────────────── */}
      <section id="experience" className="border-b border-ink/10 scroll-mt-20">
        <div className="container-wide py-20">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">Experience</p>
            <h2 className="display-lg">Twelve years, eight organizations.</h2>
            <p className="lead mt-5">
              A progression through technical analyst, integration specialist, BI
              developer, business analyst, project manager and senior decision
              analyst — across utilities, aerospace, telecom, retail and energy.
            </p>
          </div>

          <div className="flex flex-col">
            {workExperience.map((role, i) => (
              <motion.article
                key={`${role.org}-${role.period}`}
                {...inView(i * 0.05)}
                className="grid grid-cols-12 gap-6 border-t border-ink/10 py-10 last:border-b"
              >
                <div className="col-span-12 md:col-span-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold">
                    {role.period}
                  </p>
                  <p className="mt-2 text-[13px] text-ink/55">{role.org}</p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-serif text-2xl font-medium text-ink leading-snug">{role.title}</h3>
                  <p className="mt-3 text-[15px] text-ink/65 leading-relaxed max-w-3xl">
                    {role.summary}
                  </p>
                  {role.highlights && (
                    <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
                      {role.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-ink/65 leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Education + Contact strip ───────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="eyebrow mb-5">Education</p>
            {education.map((e) => (
              <div key={e.credential} className="card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-xl font-medium text-ink">{e.credential}</p>
                    <p className="mt-1 text-sm text-ink/55">{e.school}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-accent font-semibold">{e.period}</p>
                  </div>
                  <span className="tag-accent">Verified</span>
                </div>
                <div className="mt-5 pt-5 border-t border-ink/10">
                  <a
                    href="/credentials/bba-thompson-rivers.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[12px] font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" /> View degree (PDF)
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}

            <Link
              to="/certifications"
              className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-accent hover:text-accent-dark transition-colors"
            >
              See all certifications <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="md:col-span-6">
            <p className="eyebrow mb-5">Direct contact</p>
            <div className="card divide-y divide-ink/8">
              {[
                { icon: Mail,  label: 'Email',    value: 'Noopur.trivedi@hotmail.com', href: 'mailto:Noopur.trivedi@hotmail.com' },
                { icon: Phone, label: 'Phone',    value: '+1 (306) 471-1222',          href: 'tel:+13064711222' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/noopur-trivedi', href: 'https://linkedin.com/in/noopur-trivedi' },
                { icon: MapPin, label: 'Based in', value: 'British Columbia · Canada · Remote-first', href: null },
              ].map((row) => {
                const Inner = (
                  <div className="flex items-center gap-4 p-5">
                    <div className="w-9 h-9 border border-ink/15 flex items-center justify-center">
                      <row.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45 mb-0.5">{row.label}</p>
                      <p className="text-sm text-ink/80">{row.value}</p>
                    </div>
                    {row.href && <ArrowUpRight className="w-4 h-4 text-ink/35" />}
                  </div>
                )
                return row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    target={row.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block hover:bg-sand transition-colors"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={row.label}>{Inner}</div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="container-wide py-24 text-center">
        <h2 className="display-md mb-3">Let’s talk — founding, hiring, or partnership.</h2>
        <p className="text-ink/55 text-sm mb-8 max-w-md mx-auto">
          Founding and advisory conversations, board and executive intros,
          Senior BA / integration engagements, or strategic partnerships —
          all welcome.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="btn-primary px-8 py-4 text-[13px]">
            Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link to="/portfolio" className="btn-outline px-8 py-4 text-[13px]">
            See the Work
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
