import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Linkedin, Mail, MapPin, FileText, Coffee,
  Compass, Layers, Anchor, Sparkles, Briefcase, Rocket, User, Check,
} from 'lucide-react'
import { workExperience, earlierRoles, education, skills, aiProducts } from '../data/projects'
import PageNav from '../components/PageNav'
import CountUp from '../components/CountUp'
import DeliveryArc from '../components/DeliveryArc'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const Home: React.FC = () => {
  return (
    <div className="bg-canvas">

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero-dark relative border-b border-ink/10 pt-36 lg:pt-40 pb-16 overflow-hidden">
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

            {/* Message */}
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] pl-2 pr-4 py-1.5 text-[12px] text-[#ece7da]/75 mb-7"
              >
                <span className="relative flex w-2 h-2 ml-1">
                  <span className="absolute inset-0 rounded-full bg-[#3fbf8f] animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-[#3fbf8f]" />
                </span>
                Open to senior, lead &amp; product-strategy roles
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="eyebrow mb-5"
              >
                Enterprise Transformation · AI Product Strategy
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif font-medium leading-[1.02] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2.75rem, 6.2vw, 5.4rem)' }}
              >
                I lead enterprise modernization
                <span className="italic font-light accent-word"> from strategy through stabilization.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="lead mt-8 max-w-xl"
              >
                Senior business analyst and enterprise transformation professional
                with 14+ years delivering technology, data, and
                digital-modernization initiatives across utilities, aerospace,
                telecommunications, logistics, and oil &amp; gas. Trusted with the
                programs where the audit trail matters as much as the outcome.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Link to="/contact" className="group btn-primary rounded-full px-7 py-3.5 text-[13px]">
                  <Coffee className="mr-2 w-4 h-4" />
                  Schedule a Coffee Chat
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
                </Link>
                <Link to="/work" className="btn-outline rounded-full px-7 py-3.5 text-[13px]">
                  See the Enterprise Work
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-ink/50"
              >
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Chestermere, Canada</span>
                <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Canadian Citizen</span>
                <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> CSM · ISTQB CTFL</span>
              </motion.div>
            </div>

            {/* Portrait with floating proof chips */}
            <div className="lg:col-span-5">
              <motion.figure
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto max-w-[420px] lg:ml-auto"
              >
                <div aria-hidden className="absolute -inset-3 rounded-[36px] border border-[#c8a558]/25" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121a16]">
                  <img
                    src="/noopur.jpg"
                    alt="Portrait of Noopur Trivedi"
                    loading="eager"
                    decoding="async"
                    width={848}
                    height={1264}
                    className="w-full h-auto block aspect-[4/5] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b100e]/70 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-serif text-lg text-[#f5f1e8] leading-tight">Noopur Trivedi</p>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#ece7da]/60 font-semibold mt-1">
                      Transformation · AI Product Strategy
                    </p>
                  </figcaption>
                </div>

              </motion.figure>
            </div>
          </div>

          {/* Proof in numbers */}
          <dl className="mt-20 pt-10 border-t border-ink/10 grid grid-cols-2 lg:grid-cols-4 gap-y-8">
            {[
              { n: 14,                suffix: '+', label: 'Years of enterprise delivery' },
              { n: 5,                 suffix: '',  label: 'Industries served' },
              { n: 160,               suffix: '+', label: 'Requirements on a single program' },
              { n: aiProducts.length, suffix: '',  label: 'AI & venture products' },
            ].map((stat, i) => (
              <div key={stat.label} className={`px-0 lg:px-8 ${i % 2 === 1 ? 'pl-6 border-l border-ink/10' : ''} ${i === 2 ? 'lg:pl-8 lg:border-l lg:border-ink/10' : ''} ${i === 0 ? 'lg:pl-0' : ''}`}>
                <dd><CountUp to={stat.n} suffix={stat.suffix} className="block font-serif text-4xl font-light text-ink tracking-tight" /></dd>
                <dt className="mt-1.5 text-[12px] uppercase tracking-[0.16em] text-ink/50">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── Bio + portrait + at-a-glance ───────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Bio prose */}
            <div className="lg:col-span-7 text-ink/75 leading-relaxed text-[17px] space-y-12">

              <div>
                <p className="eyebrow mb-3">The professional record</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  Modernization delivered end to end, in environments where
                  mistakes are visible.
                </h2>
                <p>
                  I lead modernization programs from discovery through
                  stabilization, often several at once: enterprise data
                  migration and Microsoft 365 modernization, system
                  replacements defined through 160+ documented requirements,
                  robotic process automation, legacy applications moved toward
                  cloud-native platforms, and SAP finance and access work
                  coordinated across global teams.
                </p>
                <p className="mt-4">
                  The foundation is broad: SAP delivery for a utility, business
                  intelligence and ETL for a media marketplace, ERP
                  integrations, quality engineering, and five years of planning
                  and cost analysis in oil sands operations. The toolkit spans
                  SAP, Microsoft 365, Azure, data migration, business
                  intelligence, application modernization, automation, and
                  organizational change.
                </p>
              </div>

              <div>
                <p className="eyebrow mb-3">How I operate</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  Structured requirements, governed delivery, analytics
                  executives can act on.
                </h2>
                <p>
                  My work translates complex operational and strategic
                  challenges into structured requirements, roadmaps, governance
                  frameworks, and analytical solutions, then leads the
                  cross-functional delivery that makes them real. Metadata,
                  classification, retention, permissions, and auditability are
                  built in from day one, because governance is how trust scales
                  in a global organization.
                </p>
              </div>

              <div>
                <p className="eyebrow mb-3">Beyond the day job</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  An active AI product practice, held to the same standard.
                </h2>
                <p>
                  Alongside the enterprise work, I run a disciplined product
                  practice designing proprietary AI in model verification,
                  decision governance, and AI orchestration. The full story
                  lives on its own pages: the{' '}
                  <Link to="/ai" className="text-accent underline">AI projects</Link>, the{' '}
                  <Link to="/" className="text-accent underline">founder journey</Link>,
                  and <Link to="/who-i-am" className="text-accent underline">who I am</Link>{' '}
                  when I'm not working.
                </p>
              </div>
            </div>

            {/* Portrait + at-a-glance */}
            <aside className="lg:col-span-5">
              <div className="card p-8 sticky top-24">
                <p className="eyebrow mb-5">At a glance</p>
                <dl className="flex flex-col gap-4 text-sm">
                  {[
                    { k: 'Focus',        v: 'Building proprietary AI products · Trinity Talent in beta' },
                    { k: 'Most recent',  v: 'Business Analyst & Project Lead · MTU Maintenance Canada, 2023–2026' },
                    { k: 'Experience',   v: '14+ years · Enterprise transformation & delivery' },
                    { k: 'Industries',   v: 'Utilities · Aerospace · Telecom · Logistics · Oil & Gas' },
                    { k: 'Specialty',    v: 'SAP · M365 / Azure · Data migration · BI · RPA · LLM evaluation' },
                    { k: 'Building',     v: 'Proprietary AI in verification, governance, and orchestration' },
                    { k: 'Venture',      v: 'Co-Founder · CreationX' },
                    { k: 'Based in',     v: 'Chestermere, Alberta · Canada' },
                    { k: 'Citizenship',  v: 'Canadian Citizen' },
                    { k: 'Education',    v: 'BBA, Marketing · Thompson Rivers University' },
                    { k: 'Languages',    v: 'English · Hindi · Punjabi' },
                  ].map((row) => (
                    <motion.div
                      key={row.k}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-12 gap-3 border-b border-ink/8 pb-3 last:border-b-0 last:pb-0"
                    >
                      <dt className="col-span-4 text-[11px] uppercase tracking-[0.20em] text-ink/45 font-semibold pt-0.5">{row.k}</dt>
                      <dd className="col-span-8 text-ink/80">{row.v}</dd>
                    </motion.div>
                  ))}
                </dl>

                <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap gap-3">
                  <Link to="/contact" className="group btn-primary px-5 py-2.5 text-[12px]">
                    Get in Touch
                    <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="https://linkedin.com/in/noopur-trivedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group btn-outline px-5 py-2.5 text-[12px]"
                  >
                    <Linkedin className="mr-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" /> LinkedIn
                  </a>
                  <a
                    href="/Noopur-Trivedi-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group btn-outline px-5 py-2.5 text-[12px]"
                  >
                    <FileText className="mr-2 w-3.5 h-3.5" /> Résumé
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
                title: 'Transformation delivered end to end.',
                desc: 'From discovery and planning through pilots, validation, and stabilization, I have led the full arc of modernization programs in regulated environments where the audit trail matters as much as the outcome.',
              },
              {
                icon: Layers,
                title: 'Requirements and governance as craft.',
                desc: 'Structured requirements, traceability, governance frameworks, and acceptance criteria that teams can build against, from an LMS program with 160+ documented requirements to global SAP coordination.',
              },
              {
                icon: Compass,
                title: 'Analytics executives can act on.',
                desc: 'KPI frameworks, dashboards, and adoption metrics built for decision-making rather than decoration. Reporting that becomes the system of record once the project ends.',
              },
              {
                icon: Sparkles,
                title: 'An active AI product practice.',
                desc: 'Hands-on design and development of proprietary AI in model verification, decision governance, and orchestration, including local LLMs, fine-tuning, and evaluation frameworks.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...inView(i * 0.06)}
                className="group p-8 flex flex-col gap-5 transition-colors duration-300 hover:bg-canvas"
              >
                <div className="w-11 h-11 border border-ink/15 flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                  <item.icon className="w-4 h-4 text-accent transition-colors duration-300 group-hover:text-canvas" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-ink leading-snug transition-colors duration-300 group-hover:text-accent">{item.title}</h3>
                <p className="text-[15px] text-ink/65 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DeliveryArc />

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
                desc: 'The deliverable I am proudest of is rarely a deck. It is the requirements document, the data flow, and the test plan: the artifacts a team can act on without ambiguity.',
              },
              {
                num: '02',
                title: 'Reporting is the product.',
                desc: 'Dashboards aren’t the by-product of the project; they’re the system of record once it ships. I deliver the KPI and governance layer that outlives the rollout.',
              },
              {
                num: '03',
                title: 'Governance is how trust scales.',
                desc: 'Metadata, classification, retention, permissions, and auditability form the quiet layer that lets a global organization move fast without losing control. I build it in from day one.',
              },
              {
                num: '04',
                title: 'AI must be verified before it is trusted.',
                desc: 'The thesis behind my product work: reliability, faithfulness, and policy alignment aren’t features to bolt on later. They’re the foundation an AI system earns its place on.',
              },
            ].map((lens, i) => (
              <motion.div
                key={lens.num}
                {...inView(i * 0.08)}
                className={`group p-10 transition-colors duration-300 hover:bg-sand ${i >= 2 ? 'md:border-t md:border-ink/10' : ''}`}
              >
                <span
                  className="font-serif text-sm transition-all duration-500 group-hover:tracking-widest"
                  style={{ color: 'rgba(15,93,74,0.55)' }}
                >
                  {lens.num}
                </span>
                <h3 className="font-serif text-xl font-medium text-ink mt-3 mb-4 leading-snug transition-colors duration-300 group-hover:text-accent">{lens.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{lens.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience timeline ─────────────────────────────────────── */}
      <section id="experience" className="border-b border-ink/10 bg-sand scroll-mt-20">
        <div className="container-wide py-20">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">Experience</p>
            <h2 className="display-lg">Fourteen-plus years, five industries.</h2>
            <p className="lead mt-5">
              A progression through technical analysis, planning, quality,
              integration, business intelligence, and senior business analysis,
              spanning utilities, aerospace, telecommunications, logistics, and
              oil &amp; gas.
            </p>
          </div>

          <div className="flex flex-col">
            {workExperience.map((role, i) => (
              <motion.article
                key={`${role.org}-${role.period}`}
                {...inView(i * 0.05)}
                className="group grid grid-cols-12 gap-6 border-t border-ink/10 py-10 transition-colors duration-300 hover:bg-canvas/60"
              >
                <div className="col-span-12 md:col-span-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold">
                    {role.period}
                  </p>
                  <p className="mt-2 text-[13px] text-ink/55 transition-colors duration-300 group-hover:text-ink/80">
                    {role.org}{role.location ? ` · ${role.location}` : ''}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-serif text-2xl font-medium text-ink leading-snug transition-colors duration-300 group-hover:text-accent">{role.title}</h3>
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

            {/* Earlier roles, compact */}
            <motion.div {...inView(0.05)} className="border-t border-b border-ink/10 py-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink/45 font-semibold mb-6">
                Earlier roles
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {earlierRoles.map((r) => (
                  <div key={r.org}>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold">{r.period}</p>
                    <p className="mt-2 font-serif text-lg font-medium text-ink leading-snug">{r.title}</p>
                    <p className="mt-1 text-[13px] text-ink/55">
                      {r.org}{r.location ? ` · ${r.location}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Skills ──────────────────────────────────────────────────── */}
      <section id="skills" className="border-b border-ink/10 scroll-mt-24">
        <div className="container-wide py-20">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-3">Skills</p>
            <h2 className="display-lg">The toolkit, in two columns.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {[
              { head: 'Business & Delivery',  items: skills.delivery },
              { head: 'Technology & Data',    items: skills.technology },
            ].map((col, i) => (
              <motion.div key={col.head} {...inView(i * 0.06)} className="p-10">
                <h3 className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold mb-6">{col.head}</h3>
                <div className="flex flex-wrap gap-2">
                  {col.items.map((s) => (
                    <span key={s} className="tag-ink">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What I'm open to ───────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-3">What I’m open to</p>
              <h2 className="display-lg">Open to the right conversations.</h2>
              <p className="lead mt-6">
                This site exists so the right people can find me and start a
                conversation, whether over coffee, a call, or a well-written
                email. If any of these fit, reach out.
              </p>
              <Link to="/contact" className="group mt-8 btn-primary px-7 py-3.5 text-[13px] inline-flex">
                <Coffee className="mr-2 w-4 h-4" />
                Schedule a Coffee Chat
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y sm:divide-y-0 sm:divide-x divide-ink/10">
              {[
                {
                  k: 'Senior & lead roles',
                  d: 'Senior BA, transformation lead, and product-strategy roles inside complex enterprises, spanning SAP, M365, data, and modernization programs.',
                },
                {
                  k: 'Coffee chats & collaborations',
                  d: 'Directors, founders, and builders who want to compare notes on enterprise transformation or AI products, or explore working together.',
                },
                {
                  k: 'Advisory & speaking',
                  d: 'Advisory on AI adoption, decision governance, and modernization, along with speaking on how enterprises can trust AI responsibly.',
                },
                {
                  k: 'Investor & partner conversations',
                  d: 'As my AI products approach launch, I’m selectively opening conversations with investors and strategic partners.',
                },
              ].map((row, i) => (
                <motion.div
                  key={row.k}
                  {...inView(i * 0.05)}
                  className={`p-7 ${i >= 2 ? 'sm:border-t sm:border-ink/10' : ''}`}
                >
                  <p className="font-serif text-lg font-medium text-ink">{row.k}</p>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{row.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Education + Contact strip ───────────────────────────────── */}
      <section className="border-b border-ink/10">
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
              className="group mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-accent hover:text-accent-dark transition-colors"
            >
              <span className="link-underline">See all certifications</span>
              <ArrowUpRight className="w-3 h-3 arrow-shift" />
            </Link>
          </div>

          <div className="md:col-span-6">
            <p className="eyebrow mb-5">Direct contact</p>
            <div className="card divide-y divide-ink/8">
              {[
                { icon: Mail,     label: 'Email',    value: 'noopur.trivedi@hotmail.com', href: 'mailto:noopur.trivedi@hotmail.com' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/noopur-trivedi', href: 'https://linkedin.com/in/noopur-trivedi' },
                { icon: MapPin,   label: 'Based in', value: 'Chestermere, Alberta · Canada', href: null },
              ].map((row) => {
                const Inner = (
                  <div className="group flex items-center gap-4 p-5">
                    <div className="w-9 h-9 border border-ink/15 flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                      <row.icon className="w-4 h-4 text-accent transition-colors duration-300 group-hover:text-canvas" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45 mb-0.5">{row.label}</p>
                      <p className="text-sm text-ink/80 transition-colors duration-300 group-hover:text-ink">{row.value}</p>
                    </div>
                    {row.href && <ArrowUpRight className="w-4 h-4 text-ink/35 arrow-shift" />}
                  </div>
                )
                return row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    target={row.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block hover:bg-sand transition-colors duration-300"
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

      {/* ─── Explore the rest of the site ────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-10">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-3">Explore</p>
              <h2 className="display-lg">The profile is the front door. There's more inside.</h2>
            </div>
            <p className="lg:col-span-5 text-[15px] text-ink/65 leading-relaxed">
              The delivery record, the product practice, and the person behind
              both, each on its own page.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-ink/10 bg-surface divide-x divide-y lg:divide-y-0 divide-ink/10">
            {[
              { to: '/work',      label: 'Enterprise Work',  sub: 'Programs led and delivered', icon: Briefcase },
              { to: '/ai',        label: 'AI Projects',      sub: 'The product portfolio',      icon: Sparkles },
              { to: '/',          label: 'Founder Journey',  sub: 'Why I build',                icon: Rocket },
              { to: '/who-i-am',  label: 'Who I Am',         sub: 'The person behind the work', icon: User },
            ].map((tile, i) => (
              <Link
                key={tile.to}
                to={tile.to}
                className={`group p-8 hover:bg-sand transition-colors duration-300 flex flex-col gap-4 ${i === 0 ? 'lg:border-l-0' : ''} ${i === 1 ? 'lg:border-t-0' : ''}`}
              >
                <div className="w-10 h-10 border border-ink/15 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <tile.icon className="w-4 h-4 text-accent group-hover:text-canvas transition-colors duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-xl font-medium text-ink group-hover:text-accent transition-colors duration-300">
                    {tile.label}
                  </p>
                  <p className="mt-1 text-[13px] text-ink/55">{tile.sub}</p>
                </div>
                <div className="mt-auto pt-3 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] font-semibold text-accent">
                  Enter <ArrowUpRight className="w-3 h-3 arrow-shift" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageNav current="/profile" />
    </div>
  )
}

export default Home
