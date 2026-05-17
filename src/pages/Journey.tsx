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
    year:    '2018',
    title:   'The corporate floor — and the first itch.',
    body:    'After five years inside Syncrude, I had learned what a well-run system actually looks like — the audit trails, the disciplined change control, the way a single missed spec ripples for months. I also learned how much of the work was, quietly, the same problem repeated. That was the first time I caught myself thinking, "this could be a product."',
  },
  {
    year:    '2019',
    title:   'Quality as a craft, not a checklist.',
    body:    'At X360 Digital I stopped treating quality as something you bolt on at the end and started building reporting pipelines around it. Defect rates dropped 31% — but the lesson that stuck was different: when the metric is visible, the team starts owning it. Visibility is leverage.',
  },
  {
    year:    '2021',
    title:   'Integrations — the language of money.',
    body:    'At NRI I led the BA work on POS, ERP and payment gateway integrations. I learned how unforgiving real systems are when money moves through them. Specs aren\'t aesthetic — they\'re structural. A loose definition costs reconciliation cycles and audit findings. I started writing differently.',
  },
  {
    year:    '2022',
    title:   'Bell Canada, BI, and the first AI experiments.',
    body:    'Building executive dashboards in Pentaho during the day, I was also reading every paper I could find on LLMs at night. GPT-3.5 had just opened up. I started prototyping outreach automations on top of my own contact list. Most of them were bad. A few were uncanny.',
  },
  {
    year:    '2023',
    title:   'The first builds that paid for themselves.',
    body:    'Sketches turned into systems. I wired GPT-4 into orchestration layers around outbound, lead enrichment and pipeline work — the first commercial AI builds, the first paying clients. The pattern was obvious early: the bottleneck wasn\'t AI capability, it was the orchestration layer wrapped around it.',
  },
  {
    year:    '2024',
    title:   'TrinityTalent.ai — flipping the side I was on.',
    body:    'After years of writing resumes for myself and watching the hiring system reject good people for the wrong reasons, I founded TrinityTalent.ai — an AI-native hiring platform using semantic embeddings to match intent, not keywords. Pilots cut time-to-first-interview by 60%. The deeper insight: the same orchestration patterns worked here, and they\'d work everywhere.',
  },
  {
    year:    '2024 – 25',
    title:   'BC Hydro — the other half of the brain.',
    body:    'A deliberate stint as SAP Business Decision Analyst at BC Hydro, alongside the founder work and the ongoing role at MTU Maintenance Canada. I wanted to keep one foot in the world where rigor is non-negotiable. Building products without that ballast tends to produce demos; building with it produces systems. The engagement wrapped in October 2025.',
  },
  {
    year:    '2025',
    title:   'CreationX — co-founding the productized pattern.',
    body:    'CreationX is the marketplace operators kept asking for — people who see what AI can do but can\'t hire a team. Co-founded with a small group, the catalog is intentionally tight: a few opinionated agents, hardened from real client work, with sane defaults. We\'re treating the build like an enterprise rollout — instrumented, documented, with a real user feedback loop.',
  },
  {
    year:    'Next',
    title:   'The bet I\'m making.',
    body:    'AI is going to flood every product surface in the next 24 months. The differentiator won\'t be the model — it\'ll be whether the team around it can specify, integrate, and govern the system well enough to trust it with the work. That\'s the seam I sit on, and it\'s where the next decade of my career is being built.',
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
    d: 'Orchestration, auth, logging, error handling — the parts no one screenshots. They\'re what determine whether v2 is possible.',
  },
  {
    n: '04',
    t: 'Keep one foot inside.',
    d: 'Enterprise grounds you. Founder work without it drifts into demoware. Founder energy without enterprise drifts into bureaucracy.',
  },
]

const Journey: React.FC = () => {
  return (
    <div className="bg-canvas">

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="border-b border-ink/10 pt-36 pb-20">
        <div className="container-wide">
          <p className="eyebrow mb-5">The Journey</p>
          <h1 className="display-xl max-w-4xl">
            From operator to founder —
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> and the long arc that turned both into one craft.</span>
          </h1>
          <p className="lead mt-8 max-w-2xl">
            Eleven years inside regulated enterprises learning how systems are
            actually delivered. Six years on the side building products that
            apply that rigor to a modern stack. Two companies founded along the
            way. This is how those tracks ran together — and where they’re
            heading next.
          </p>
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
              Not the LinkedIn version. The one with the side bets, wrong turns
              and quiet pivots.
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
                  className="grid grid-cols-12 gap-6 border-t border-ink/10 py-12 first:border-t-0 first:pt-0"
                >
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-serif text-3xl font-medium text-accent leading-none">
                      {c.year}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink/40 font-semibold">
                      Chapter {String(i + 1).padStart(2, '0')}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-serif text-2xl sm:text-[28px] font-medium text-ink leading-tight">
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
                className={`p-10 ${i >= 2 ? 'md:border-t md:border-ink/10' : ''}`}
              >
                <span className="font-serif text-sm" style={{ color: 'rgba(15,93,74,0.55)' }}>
                  {l.n}
                </span>
                <h3 className="font-serif text-2xl font-medium text-ink mt-3 leading-snug">{l.t}</h3>
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
                <Sparkles className="w-3.5 h-3.5" /> Currently
              </p>
              <h2 className="display-lg">What I'm building right now.</h2>
              <p className="lead mt-6">
                The list is small on purpose. I'd rather ship three things well
                than seven things half-finished.
              </p>
              <Link to="/portfolio" className="mt-8 btn-primary px-7 py-3.5 text-[13px] inline-flex">
                See the full work <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {[
                {
                  name:   'TrinityTalent.ai',
                  stage:  'Founder · live build',
                  desc:   'AI-native hiring intelligence — semantic matching, explainable scoring and an automated pipeline. Expanding interview scoring and recruiter co-pilot features.',
                },
                {
                  name:   'CreationX',
                  stage:  'Co-founder · MVP',
                  desc:   'AI agent marketplace for operators. Productized layer over the bespoke client builds — small, opinionated catalog, instrumented from day one.',
                },
                {
                  name:   'MTU Maintenance Canada · Senior BA',
                  stage:  'Current role',
                  desc:   'Senior Business Analyst at the Canadian operation of a global aerospace MRO — leading analytics modernization across Microsoft 365 and SharePoint. The enterprise discipline that keeps the founder work honest.',
                },
              ].map((b, i) => (
                <motion.div key={b.name} {...inView(i * 0.06)} className="card p-7 card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl font-medium text-ink">{b.name}</h3>
                    <span className="tag-accent">{b.stage}</span>
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
            { label: 'Read the case studies',  to: '/portfolio',      sub: 'How the work shows up day-to-day.' },
            { label: 'The other side of life', to: '/life',           sub: 'Mountains, animals, art, and the rest of me.' },
            { label: 'Get in touch',           to: '/contact',        sub: 'Founding, advisory, board, or senior contract conversation.' },
          ].map((c) => (
            <Link
              key={c.label}
              to={c.to}
              className="card p-7 card-hover group flex flex-col gap-3"
            >
              <h3 className="font-serif text-xl font-medium text-ink group-hover:text-accent transition-colors">
                {c.label}
              </h3>
              <p className="text-sm text-ink/55 leading-relaxed">{c.sub}</p>
              <div className="mt-auto pt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] font-semibold text-accent">
                Continue <ArrowUpRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Journey
