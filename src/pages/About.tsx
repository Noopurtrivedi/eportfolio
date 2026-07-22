import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Linkedin, Mail, MapPin, FileText, Coffee,
  Compass, Layers, Anchor, Sparkles, Camera, Brush, Heart, Mountain,
} from 'lucide-react'
import { workExperience, earlierRoles, education, skills } from '../data/projects'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const About: React.FC = () => {
  return (
    <div className="bg-canvas">

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative border-b border-ink/10 pt-36 pb-20 overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="pointer-events-none absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(15,93,74,0.10), transparent 70%)' }}
        />
        <div className="container-wide relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-5 inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
            Noopur Trivedi · Senior Business Analyst · Enterprise Transformation · AI Product Strategist
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl max-w-4xl"
          >
            I modernize complex enterprises —
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> and build the AI products that come next.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lead mt-8 max-w-2xl"
          >
            I’m a senior business analyst and enterprise transformation
            professional with 13+ years delivering technology, data, and
            digital-modernization initiatives across utilities, aerospace,
            telecommunications, logistics, and oil &amp; gas. Alongside that, I
            run an active practice designing proprietary AI products in model
            verification, decision governance, and AI orchestration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link to="/contact" className="group btn-primary px-7 py-3.5 text-[13px]">
              <Coffee className="mr-2 w-4 h-4" />
              Schedule a Coffee Chat
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
            </Link>
            <Link to="/portfolio" className="btn-outline px-7 py-3.5 text-[13px]">
              See the AI Portfolio
            </Link>
            <span className="inline-flex items-center gap-2 text-[13px] text-ink/50">
              <MapPin className="w-3.5 h-3.5" /> Chestermere, Canada
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── Bio + portrait + at-a-glance ───────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Bio prose */}
            <div className="lg:col-span-7 text-ink/75 leading-relaxed text-[17px] space-y-12">

              <div>
                <p className="eyebrow mb-3">Two threads, one standard</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  An enterprise operator who builds — and a builder who delivers
                  like an enterprise operator.
                </h2>
                <p>
                  My work runs on two threads that strengthen each other. The
                  first is an enterprise track record: thirteen-plus years
                  translating complex operational and strategic challenges into
                  structured requirements, roadmaps, governance frameworks, and
                  analytical solutions — and then leading the cross-functional
                  delivery that makes them real.
                </p>
                <p className="mt-4">
                  The second is product creation. I actively design and develop
                  proprietary AI technologies — in model verification, decision
                  governance, AI orchestration, career intelligence, and agent
                  marketplaces. That isn’t a hobby line on a resume; it’s a
                  disciplined product practice with its own architecture,
                  evaluation rigor, and commercialization strategy.
                </p>
              </div>

              <div>
                <p className="eyebrow mb-3">The enterprise thread</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  Modernization delivered end to end, in environments where
                  mistakes are visible.
                </h2>
                <p>
                  As Business Analyst &amp; Project Lead at
                  <strong className="text-ink"> MTU Maintenance Canada</strong> —
                  a global aerospace MRO — I lead enterprise modernization across
                  multiple concurrent, high-visibility initiatives: the Canadian
                  workstream of a global data migration and Microsoft 365
                  modernization program, an enterprise LMS replacement with 160+
                  documented requirements, the Canadian RPA capability on UiPath,
                  legacy application modernization toward Kubernetes/AKS-aligned
                  solutions, and global SAP finance, banking, and access
                  coordination.
                </p>
                <p className="mt-4">
                  Before that: SAP EAM and CCS delivery at
                  <strong className="text-ink"> BC Hydro</strong>, business
                  intelligence for a <strong className="text-ink">Bell Media</strong> marketplace,
                  ERP integrations at NRI Distribution, quality engineering at
                  X360 Digital, and five years of planning and cost analysis at
                  Syncrude. Proven across SAP, Microsoft 365, Azure, data
                  migration, business intelligence, application modernization,
                  automation, and organizational change.
                </p>
              </div>

              <div>
                <p className="eyebrow mb-3">The builder thread</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  AI products built with the discipline enterprises taught me.
                </h2>
                <p>
                  I build AI the way regulated industries ship systems: verified
                  before trusted, governed before scaled. That conviction runs
                  through the portfolio — a verification layer that makes AI
                  models measurably more faithful, a governance layer that
                  decides how an AI application should respond before it
                  answers, an orchestration architecture that lets many products
                  share one intelligence layer, and platforms for career
                  intelligence and AI agent marketplaces.
                </p>
                <p className="mt-4">
                  The products are pre-launch, and I keep their inner workings
                  deliberately private until each goes live. What I can say
                  publicly is on the <Link to="/portfolio" className="text-accent underline">portfolio page</Link> —
                  the rest is a conversation I’m glad to have.
                </p>
              </div>

              <div>
                <p className="eyebrow mb-3">The eye behind it</p>
                <h2 className="font-serif text-3xl font-medium text-ink leading-snug mb-5">
                  Craft and creativity aren’t separate from the work.
                </h2>
                <p>
                  I take pride in work that is both rigorous and beautiful. The
                  same eye that composes a photograph or a painting shapes how I
                  design a governance framework or a product experience — with
                  restraint, intention, and respect for the person on the other
                  side. If you want to know why I am the way I am about the
                  work, the <Link to="/life" className="text-accent underline">Life</Link> section
                  is the honest answer.
                </p>
              </div>
            </div>

            {/* Portrait + at-a-glance */}
            <aside className="lg:col-span-5">
              <motion.figure
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="group mb-6 relative overflow-hidden border border-ink/10 bg-sand"
              >
                <img
                  src="/noopur.jpg"
                  alt="Portrait of Noopur Trivedi"
                  loading="eager"
                  decoding="async"
                  width={848}
                  height={1264}
                  className="w-full h-auto block aspect-[2/3] object-cover img-zoom"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-canvas/95 via-canvas/70 to-transparent">
                  <p className="font-serif text-sm font-medium text-ink leading-tight">
                    Noopur Trivedi
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-ink/55 font-semibold mt-0.5">
                    Enterprise Transformation · AI Product Strategist
                  </p>
                </figcaption>
              </motion.figure>

              <div className="card p-8 sticky top-24">
                <p className="eyebrow mb-5">At a glance</p>
                <dl className="flex flex-col gap-4 text-sm">
                  {[
                    { k: 'Current role', v: 'Business Analyst & Project Lead · MTU Maintenance Canada' },
                    { k: 'Experience',   v: '13+ years · Enterprise transformation & delivery' },
                    { k: 'Building',     v: 'Proprietary AI — verification, governance, orchestration' },
                    { k: 'Venture',      v: 'Co-Founder · CreationX' },
                    { k: 'Industries',   v: 'Utilities · Aerospace · Telecom · Logistics · Oil & Gas' },
                    { k: 'Specialty',    v: 'SAP · M365 / Azure · Data migration · BI · RPA · LLM evaluation' },
                    { k: 'Based in',     v: 'Chestermere, Alberta · Canada' },
                    { k: 'Citizenship',  v: 'Canadian Citizen' },
                    { k: 'Education',    v: 'BBA, Marketing · Thompson Rivers University' },
                    { k: 'Languages',    v: 'English · Hindi · Punjabi · learning German' },
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
                  {/* PLACEHOLDER: drop the current resume at public/Noopur-Trivedi-Resume.pdf */}
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
                desc: 'Discovery, planning, pilots, validation, stabilization — I’ve led the full arc of modernization programs in regulated environments where the audit trail matters as much as the outcome.',
              },
              {
                icon: Layers,
                title: 'Requirements and governance as craft.',
                desc: 'Structured requirements, traceability, governance frameworks, and acceptance criteria that teams can actually build against — from 160+ requirement LMS programs to global SAP coordination.',
              },
              {
                icon: Compass,
                title: 'Analytics executives can act on.',
                desc: 'KPI frameworks, dashboards, and adoption metrics built for decision-making — not decoration. Reporting that becomes the system of record once the project ends.',
              },
              {
                icon: Sparkles,
                title: 'An active AI product practice.',
                desc: 'Hands-on design and development of proprietary AI in model verification, decision governance, and orchestration — including local LLMs, fine-tuning, and evaluation frameworks.',
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
                title: 'Governance is how trust scales.',
                desc: 'Metadata, classification, retention, permissions, auditability — the unglamorous layer that lets a global organization move fast without losing control. I build it in from day one.',
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

      {/* ─── What I'm open to ───────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-3">What I’m open to</p>
              <h2 className="display-lg">Pull up a chair — literally.</h2>
              <p className="lead mt-6">
                This site exists so the right people can find me and start a
                conversation — over coffee, a call, or a well-written email.
                If any of these fit, reach out.
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
                  k: 'Coffee chats & collaborations',
                  d: 'Directors, founders, and builders who want to compare notes on enterprise transformation or AI products — or explore working together.',
                },
                {
                  k: 'Senior & lead roles',
                  d: 'Senior BA, transformation lead, and product-strategy roles inside complex enterprises — SAP, M365, data, and modernization programs.',
                },
                {
                  k: 'Investor & partner conversations',
                  d: 'As my AI products approach launch, I’m selectively opening conversations with investors and strategic partners.',
                },
                {
                  k: 'Advisory & speaking',
                  d: 'Advisory on AI adoption, decision governance, and modernization — and speaking on how enterprises can trust AI responsibly.',
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

      {/* ─── Currently (now strip) ──────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="eyebrow mb-3 inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 animate-pulse-soft" /> Currently
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
                  'AdaptIQ — AI verification & model improvement',
                  'Kestra DML — decision governance for AI',
                  'Artha, Trinity Talent, OwlNest & more — moving toward launch',
                ],
              },
              {
                head: 'Delivering',
                items: [
                  'MTU Maintenance Canada — enterprise modernization portfolio',
                  'Global M365 & data-migration program, Canadian workstream',
                  'KPI frameworks and adoption metrics for executive decisions',
                ],
              },
              {
                head: 'Living',
                items: [
                  'Based in Chestermere, Alberta',
                  'Photography, painting, animals, and long trails',
                  'Learning German — langsam, aber sicher',
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
                className={`group p-8 hover:bg-sand transition-colors duration-300 flex flex-col gap-4 ${i === 0 ? 'lg:border-l-0' : ''} ${i === 1 ? 'lg:border-t-0' : ''}`}
              >
                <div className="w-10 h-10 border border-ink/15 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <tile.icon className="w-4 h-4 text-accent group-hover:text-canvas transition-colors duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
                <p className="font-serif text-xl font-medium text-ink group-hover:text-accent transition-colors duration-300">
                  {tile.label}
                </p>
                <div className="mt-auto pt-3 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] font-semibold text-accent">
                  Enter <ArrowUpRight className="w-3 h-3 arrow-shift" />
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
            <h2 className="display-lg">Thirteen-plus years, five industries.</h2>
            <p className="lead mt-5">
              A progression through technical analysis, planning, quality,
              integration, business intelligence, and senior business analysis —
              across utilities, aerospace, telecommunications, logistics, and
              oil &amp; gas.
            </p>
          </div>

          <div className="flex flex-col">
            {workExperience.map((role, i) => (
              <motion.article
                key={`${role.org}-${role.period}`}
                {...inView(i * 0.05)}
                className="group grid grid-cols-12 gap-6 border-t border-ink/10 py-10 transition-colors duration-300 hover:bg-sand/40"
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
      <section className="border-b border-ink/10 bg-sand">
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

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="container-wide py-24 text-center">
        <motion.h2 {...inView(0)} className="display-md mb-3">The best conversations start over coffee.</motion.h2>
        <motion.p {...inView(0.05)} className="text-ink/55 text-sm mb-8 max-w-md mx-auto">
          Hiring conversations, collaborations, investor and partner intros,
          advisory — or simply comparing notes on where enterprise and AI meet.
        </motion.p>
        <motion.div {...inView(0.1)} className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="group btn-primary px-8 py-4 text-[13px]">
            <Coffee className="mr-2 w-4 h-4" />
            Schedule a Coffee Chat
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
          </Link>
          <Link to="/portfolio" className="btn-outline px-8 py-4 text-[13px]">
            See the Work
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default About
