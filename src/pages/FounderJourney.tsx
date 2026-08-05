import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Lock, Sparkles } from 'lucide-react'
import PageNav from '../components/PageNav'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const chapters = [
  {
    tag:   'The origin',
    title: 'Thirteen years inside the enterprise came first.',
    body:  'Before I built anything of my own, I spent thirteen-plus years inside regulated enterprises: oil sands, utilities, aerospace, telecom, logistics. I learned how systems are actually delivered, how governance holds a global organization together, and how a single missed spec ripples for months. That apprenticeship is the foundation the product practice stands on.',
  },
  {
    tag:   'The conviction',
    title: 'AI must be verified before it is trusted.',
    body:  'Watching AI arrive inside enterprises made one thing obvious: the differentiator will not be the model. It will be whether the system around it can be verified, governed, and trusted with real work. I build AI the way regulated industries ship systems: verified before trusted, governed before scaled.',
  },
  {
    tag:   'The practice',
    title: 'A disciplined product practice, not a hobby line on a resume.',
    body:  'I design and develop proprietary AI technologies: AdaptIQ for model verification, Kestra DML for decision governance, an orchestration layer that lets many products share one intelligence architecture, Artha for local-first intelligent work, Trinity Talent for career intelligence, and OwlNest for AI agent marketplaces. Each has its own architecture, evaluation rigor, and commercialization strategy.',
  },
  {
    tag:   'The venture',
    title: 'CreationX, the venture I co-founded.',
    body:  'CreationX is an independent venture where I contribute product vision, strategic planning, business requirements, roadmap, market positioning, and commercialization. I transform the core concept into user journeys, workflows, capabilities, and phased implementation plans, and own the business-requirements and roadmap layer end to end.',
  },
  {
    tag:   'The bet',
    title: 'The seam my career prepared me to own.',
    body:  'AI will flood every product surface in the next few years. The companies that win will be the ones whose AI can be trusted with real work, in environments where mistakes are visible. That is exactly the seam between enterprise discipline and product creation, and it is where everything I build is aimed.',
  },
]

const principles = [
  {
    n: '01',
    t: 'Keep one foot inside.',
    d: 'Enterprise grounds you. Product work without it drifts into demoware. Product energy without enterprise drifts into bureaucracy.',
  },
  {
    n: '02',
    t: 'Build the boring layer first.',
    d: 'Governance, auditability, and error handling are the parts no one screenshots. They determine whether v2 is possible.',
  },
  {
    n: '03',
    t: 'Verification is the product.',
    d: 'Reliability, faithfulness, and policy alignment are not features to bolt on later. They are the foundation an AI system earns its place on.',
  },
  {
    n: '04',
    t: 'Launch when it is ready, not when it is loud.',
    d: 'Every product stays deliberately private until it goes live. Intrigue is fine; overexposure before the work is done is not.',
  },
]

const FounderJourney: React.FC = () => {
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
                The Founder Journey
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="display-xl"
              >
                An operator by day,
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> a builder the rest of the time.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lead mt-8 max-w-2xl"
              >
                The professional profile tells you what I deliver for
                enterprises. This page is the other thread: why I build
                proprietary AI products, the venture I co-founded, and the bet
                that ties it all together.
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

      {/* ─── Chapters ─────────────────────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">The Story</p>
              <h2 className="display-lg">How the builder thread happened.</h2>
            </div>
            <p className="hidden md:block text-sm text-ink/45 italic font-serif max-w-xs text-right">
              Not a pivot away from the enterprise. An extension of it.
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
                    <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold inline-flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_0_4px_rgba(15,93,74,0.15)]" />
                      {c.tag}
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

      {/* ─── Founder principles ───────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="mb-14">
            <p className="eyebrow mb-3">Operating principles</p>
            <h2 className="display-lg">How I run the practice.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {principles.map((l, i) => (
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
              {/* HIDDEN (temporary) — restore with the /ai page
              <Link to="/ai" className="group mt-8 btn-primary px-7 py-3.5 text-[13px] inline-flex">
                See the AI projects
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
              </Link>
              */}
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
                  name:  'CreationX',
                  stage: 'Active venture',
                  desc:  'The independent venture I co-founded, where I own product vision, business requirements, roadmap, market positioning, and commercialization end to end.',
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

      {/* ─── Discretion + CTA ─────────────────────────────────────────── */}
      <section className="bg-canvas">
        <div className="container-wide py-24">
          <motion.div {...inView(0)} className="border border-ink/10 bg-surface p-7 flex items-start gap-4 mb-14 max-w-4xl mx-auto">
            <div className="w-9 h-9 border border-ink/15 flex items-center justify-center flex-shrink-0">
              <Lock className="w-4 h-4 text-accent" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-ink/60 leading-relaxed">
              Everything here is pre-launch, and the deeper architecture stays
              private until each product is live. If you're an investor,
              collaborator, or potential partner, the full walkthrough is a
              conversation away.
            </p>
          </motion.div>
          <div className="text-center">
            <motion.h2 {...inView(0.05)} className="display-md mb-3">Building something too?</motion.h2>
            <motion.p {...inView(0.1)} className="text-ink/55 mb-8 text-sm max-w-md mx-auto">
              Founder-to-founder conversations, investor intros, and strategic
              partnerships are all welcome.
            </motion.p>
            <motion.div {...inView(0.15)}>
              <Link to="/contact" className="group btn-primary px-10 py-4 text-[13px]">
                Start the Conversation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <PageNav current="/founder" />
    </div>
  )
}

export default FounderJourney
