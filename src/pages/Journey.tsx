import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const chapters = [
  {
    year:  '2012',
    title: 'Fort McMurray, where the discipline started.',
    body:  'My first analyst role: technical analysis supporting Imperial Oil through Acrodex, in an industry where systems fail loudly and documentation is not optional. It set the tone for everything after: respect the operational reality before proposing the change.',
  },
  {
    year:  '2013',
    title: 'A degree, an agency, and a five-year apprenticeship in rigor.',
    body:  'I finished my BBA in Marketing at Thompson Rivers University, coordinated projects at a Vancouver agency, and then joined Syncrude, where I spent five years in planning, cost analysis, and data management. Oil sands operations taught me what a well-run system actually looks like: audit trails, disciplined change control, and the way a single missed spec ripples for months.',
  },
  {
    year:  '2019',
    title: 'Quality as a craft, not a checklist.',
    body:  'At X360 Digital I built automated QA and data-reporting pipelines and executed hundreds of functional and regression tests. Defect rates dropped 31%, but the lesson that stuck was different: when the metric is visible, the team starts owning it. Visibility is leverage.',
  },
  {
    year:  '2021',
    title: 'Two consultant hats: integration and intelligence.',
    body:  'At NRI Distribution I designed integrations between the company database and customer ERPs, the unforgiving world of cross-system mapping and audit compliance. In parallel, at Bell Canada / Bell Media, I built BI infrastructure, ETL workflows, and executive reporting for a marketplace serving vendors, contractors, and internal stakeholders. Different domains, one lesson: the seams between systems are where programs live or die.',
  },
  {
    year:  '2022',
    title: 'BC Hydro and enterprise delivery at utility scale.',
    body:  'As SAP Business Decision Analyst at BC Hydro, I translated complex business, operational, financial, and technology needs into structured requirements and governance artifacts, supporting SAP EAM and CCS operations, test strategies, traceability, and acceptance criteria for a Crown utility where rigor is non-negotiable.',
  },
  {
    year:  '2023',
    title: 'MTU Maintenance Canada, leading modernization in aerospace.',
    body:  'I joined MTU Maintenance Canada as Business Analyst & Project Lead, and the role became a portfolio: the Canadian workstream of a global data migration and Microsoft 365 modernization program, an enterprise LMS replacement with 160+ documented requirements, a new RPA capability on UiPath, legacy application modernization toward Kubernetes/AKS, and global SAP finance and banking coordination. Enterprise transformation, end to end.',
  },
  {
    year:  'Now',
    title: 'The product chapter: building proprietary AI.',
    body:  'Alongside the enterprise work, I design and develop proprietary AI technologies: AdaptIQ for model verification, Kestra DML for decision governance, an orchestration layer that lets many products share one intelligence architecture, Artha for local-first intelligent work, Trinity Talent for career intelligence, OwlNest for AI agent marketplaces, and CreationX, the venture I co-founded. Each is pre-launch by design; each is built with the discipline the last thirteen years taught me.',
  },
  {
    year:  'Next',
    title: 'The bet I’m making.',
    body:  'AI will flood every product surface in the next few years. The differentiator will not be the model. It will be whether the system around it can be verified, governed, and trusted with real work. That is exactly the seam my career has prepared me to own, and it’s where my products are aimed.',
  },
]

const lessons = [
  {
    n: '01',
    t: 'Ship the spec, not the slide.',
    d: 'The thing engineers can build against is the artifact that matters. Everything else is preamble.',
  },
  {
    n: '02',
    t: 'Visibility beats willpower.',
    d: 'Teams don\'t lift the metric they don\'t see. Reporting is the cheapest leverage in any organization.',
  },
  {
    n: '03',
    t: 'Build the boring layer first.',
    d: 'Governance, auditability, and error handling are the parts no one screenshots. They determine whether v2 is possible.',
  },
  {
    n: '04',
    t: 'Keep one foot inside.',
    d: 'Enterprise grounds you. Product work without it drifts into demoware. Product energy without enterprise drifts into bureaucracy.',
  },
]

const Journey: React.FC = () => {
  return (
    <div className="bg-canvas">

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative border-b border-ink/10 pt-36 pb-20 overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="pointer-events-none absolute -top-24 right-1/4 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(15,93,74,0.08), transparent 70%)' }}
        />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow mb-5"
              >
                The Journey
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="display-xl"
              >
                From the oil sands to AI products,
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> one standard, carried the whole way.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lead mt-8 max-w-2xl"
              >
                Thirteen-plus years inside regulated enterprises in utilities,
                aerospace, telecommunications, logistics, and oil &amp; gas,
                learning how systems are actually delivered. Now an active
                product practice applying that rigor to proprietary AI. This is
                how the two threads ran together, and where they’re heading.
              </motion.p>
            </div>
            <motion.figure
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group lg:col-span-4 order-1 lg:order-2 relative overflow-hidden border border-ink/10 bg-sand"
            >
              <img
                src="/noopur-journey.jpg"
                alt="Portrait of Noopur Trivedi"
                loading="eager"
                decoding="async"
                width={853}
                height={1280}
                className="w-full h-auto block aspect-[2/3] object-cover img-zoom"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* ─── Chapter timeline ─────────────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">Chapters</p>
              <h2 className="display-lg">How it actually happened.</h2>
            </div>
            <p className="hidden md:block text-sm text-ink/45 italic font-serif max-w-xs text-right">
              Not the LinkedIn version. The one with the long apprenticeship
              and the quiet pivots.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Rail */}
            <div className="hidden md:block col-span-1">
              <div className="sticky top-32 w-px bg-ink/15 mx-auto h-[60vh]" />
            </div>

            {/* Chapters */}
            <div className="col-span-12 md:col-span-11 flex flex-col">
              {chapters.map((c, i) => (
                <motion.article
                  key={c.title}
                  {...inView(i * 0.04)}
                  className="group grid grid-cols-12 gap-6 border-t border-ink/10 py-12 first:border-t-0 first:pt-0 transition-colors duration-300 hover:bg-sand/40"
                >
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-serif text-3xl font-medium text-accent leading-none inline-flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_0_4px_rgba(15,93,74,0.15)]" />
                      {c.year}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink/40 font-semibold">
                      Chapter {String(i + 1).padStart(2, '0')}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-serif text-2xl sm:text-[28px] font-medium text-ink leading-tight transition-colors duration-300 group-hover:text-accent">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-[17px] text-ink/70 leading-relaxed max-w-3xl">
                      {c.body}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Lessons ──────────────────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="mb-14">
            <p className="eyebrow mb-3">What I take with me</p>
            <h2 className="display-lg">Lessons that became operating principles.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {lessons.map((l, i) => (
              <motion.div
                key={l.n}
                {...inView(i * 0.08)}
                className={`group p-10 transition-colors duration-300 hover:bg-canvas ${i >= 2 ? 'md:border-t md:border-ink/10' : ''}`}
              >
                <span
                  className="font-serif text-sm transition-all duration-500 group-hover:tracking-widest"
                  style={{ color: 'rgba(15,93,74,0.55)' }}
                >
                  {l.n}
                </span>
                <h3 className="font-serif text-2xl font-medium text-ink mt-3 leading-snug transition-colors duration-300 group-hover:text-accent">{l.t}</h3>
                <p className="mt-4 text-[15px] text-ink/65 leading-relaxed">{l.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Currently building ───────────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 animate-pulse-soft" /> Currently
              </p>
              <h2 className="display-lg">What I'm building right now.</h2>
              <p className="lead mt-6">
                The public version. The full architectures stay private until
                each product goes live, by design.
              </p>
              <Link to="/portfolio" className="group mt-8 btn-primary px-7 py-3.5 text-[13px] inline-flex">
                See the full portfolio
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {[
                {
                  name:  'AdaptIQ & Kestra DML',
                  stage: 'Verification & governance',
                  desc:  'A verification layer that makes AI models measurably more reliable and faithful, and a governance layer that decides how an AI application should respond before it answers. Two halves of one thesis: AI must be verified before it is trusted.',
                },
                {
                  name:  'Artha · Trinity Talent · OwlNest',
                  stage: 'Platforms in motion',
                  desc:  'A local-first intelligent work platform, an AI career-intelligence platform, and a multi-tenant AI agent marketplace, each at a different stage between architecture and active development.',
                },
                {
                  name:  'MTU Maintenance Canada',
                  stage: 'Current role',
                  desc:  'Business Analyst & Project Lead at a global aerospace MRO, leading enterprise data migration, Microsoft 365 modernization, and a portfolio of transformation initiatives. The enterprise discipline that keeps the product work honest.',
                },
              ].map((b, i) => (
                <motion.div
                  key={b.name}
                  {...inView(i * 0.06)}
                  className="group card p-7 card-hover lift"
                >
                  <div className="flex items-center justify-between mb-3 gap-4">
                    <h3 className="font-serif text-xl font-medium text-ink transition-colors duration-300 group-hover:text-accent">{b.name}</h3>
                    <span className="tag-accent flex-shrink-0">{b.stage}</span>
                  </div>
                  <p className="text-sm text-ink/65 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cross-links ──────────────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'See the work',           to: '/portfolio', sub: 'The AI portfolio and the enterprise programs behind it.' },
            { label: 'The other side of life', to: '/life',      sub: 'Mountains, animals, art, and the rest of me.' },
            { label: 'Schedule a coffee chat', to: '/contact',   sub: 'Hiring, collaboration, investment, or simply comparing notes.' },
          ].map((c, i) => (
            <motion.div key={c.label} {...inView(i * 0.06)}>
              <Link
                to={c.to}
                className="card p-7 card-hover lift group flex flex-col gap-3 h-full"
              >
                <h3 className="font-serif text-xl font-medium text-ink group-hover:text-accent transition-colors duration-300">
                  {c.label}
                </h3>
                <p className="text-sm text-ink/55 leading-relaxed">{c.sub}</p>
                <div className="mt-auto pt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] font-semibold text-accent">
                  Continue <ArrowUpRight className="w-3 h-3 arrow-shift" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Journey
