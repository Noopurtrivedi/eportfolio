import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Linkedin, Mail, Phone, MapPin, FileText } from 'lucide-react'
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
            Senior delivery from a regulated-IT background,
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> and a builder’s instinct for what comes next.</span>
          </h1>
        </div>
      </section>

      {/* ─── Bio ──────────────────────────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-6 text-ink/70 leading-relaxed text-[17px]">
              <p>
                I’m a Senior Business Analyst with eleven years of experience
                delivering complex IT change inside large, regulated enterprises —
                BC Hydro, MTU Canada, Bell Canada, Syncrude, Imperial Oil.
              </p>
              <p>
                My specialty is the unglamorous middle: translating cross-functional
                business needs into the kind of technical specifications engineering
                can actually build against, then coordinating the data migrations,
                API and file-based integrations, and reporting layers that make a
                system safe to release. I work natively in Agile and Scrum, and I’m
                most useful in environments where audit, governance, and stakeholder
                alignment matter as much as the code.
              </p>
              <p>
                On the side, I’m the founder of <strong className="text-ink">TrinityTalent.ai</strong>,
                an AI-native hiring intelligence platform, and co-founder of
                <strong className="text-ink"> CreationX</strong>, an AI agent
                marketplace for operators. They’re where I apply enterprise rigor
                to a modern stack — and where I harden the patterns I bring back
                into client work.
              </p>
            </div>

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

              <div className="card p-8">
                <p className="eyebrow mb-5">At a glance</p>
                <dl className="flex flex-col gap-4 text-sm">
                  {[
                    { k: 'Current role', v: 'Senior Business Analyst · BC Hydro' },
                    { k: 'Founder',      v: 'TrinityTalent.ai — AI hiring intelligence' },
                    { k: 'Co-founder',   v: 'CreationX — AI agent marketplace' },
                    { k: 'Experience',   v: '11+ years · Enterprise IT delivery' },
                    { k: 'Industries',   v: 'Utilities · Aerospace · Telecom · Retail · Energy' },
                    { k: 'Specialty',    v: 'SAP · BI · Data integration · POS / payments' },
                    { k: 'Method',       v: 'Agile / Scrum, audit-grade documentation' },
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

      {/* ─── Three lenses ─────────────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <p className="eyebrow mb-12">How I work</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {[
              {
                num: '01',
                title: 'I write the spec before the slide.',
                desc: "The deliverable I’m proudest of is rarely a deck. It’s the requirements document, the data flow, the test plan — the artifact a build team can act on without ambiguity.",
              },
              {
                num: '02',
                title: 'I treat reporting as the product.',
                desc: "Dashboards aren’t the by-product of the project; they’re the system of record once it ships. I build the KPI and governance layer that outlives the rollout.",
              },
              {
                num: '03',
                title: 'I build what I keep being asked to build.',
                desc: "TrinityTalent.ai and CreationX both started as bespoke patterns I kept building one client at a time. Productizing them is how I make sure each pattern is hardened, not just shipped once.",
              },
            ].map((lens, i) => (
              <motion.div key={lens.num} {...inView(i * 0.1)} className="p-10">
                <span className="font-serif text-sm" style={{ color: 'rgba(15,93,74,0.55)' }}>
                  {lens.num}
                </span>
                <h3 className="font-serif text-xl font-medium text-ink mt-3 mb-4 leading-snug">{lens.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{lens.desc}</p>
              </motion.div>
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
          </div>

          <div className="md:col-span-6">
            <p className="eyebrow mb-5">Direct contact</p>
            <div className="card divide-y divide-ink/8">
              {[
                { icon: Mail,  label: 'Email',    value: 'Noopur.trivedi@hotmail.com', href: 'mailto:Noopur.trivedi@hotmail.com' },
                { icon: Phone, label: 'Phone',    value: '+1 (306) 471-1222',          href: 'tel:+13064711222' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/noopur-trivedi', href: 'https://linkedin.com/in/noopur-trivedi' },
                { icon: MapPin, label: 'Based in', value: 'Canada · Remote-first',     href: null },
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
        <h2 className="display-md mb-3">Ready to bring me onto your team?</h2>
        <p className="text-ink/55 text-sm mb-8 max-w-md mx-auto">
          If you’re hiring for a Senior BA, BI lead or integration analyst — or
          you want to discuss product work — let’s talk.
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
