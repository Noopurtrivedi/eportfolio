import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Camera, Brush, Heart, Mountain } from 'lucide-react'
import PageNav from '../components/PageNav'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

/* The human version of the career arc — the founder chapters live on /founder. */
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
  /* HIDDEN (temporary) — uncomment to bring the MTU chapter back
  {
    year:  '2023',
    title: 'MTU Maintenance Canada, leading modernization in aerospace.',
    body:  'I joined MTU Maintenance Canada as Business Analyst & Project Lead, and the role became a portfolio: the Canadian workstream of a global data migration and Microsoft 365 modernization program, an enterprise LMS replacement with 160+ documented requirements, a new RPA capability on UiPath, legacy application modernization toward Kubernetes/AKS, and global SAP finance and banking coordination.',
  },
  */
  {
    year:  'Now',
    title: 'Chestermere, Alberta, and a life built on purpose.',
    /* HIDDEN (temporary) — the original body named the modernization work and
       learning German:
       'Today I live in Chestermere, Alberta, leading enterprise modernization by day and building AI products the rest of the time. Between the two, there are cameras, canvases, animals, long trails, and a slow attempt at learning German. The wide life and the useful one turn out to need each other.' */
    body:  'Today I live in Chestermere, Alberta, with work that keeps me close to complex systems and a life that deliberately reaches past them. There are cameras, canvases, animals, and long roads, and time set aside for all of it. The wide life and the useful one turn out to need each other.',
  },
]

const pursuits = [
  {
    to:    '/life/photography',
    label: 'Photography',
    sub:   'A slow record of light, landscape and the in-between moments.',
    icon:  Camera,
    meta:  'Long-running series',
  },
  {
    to:    '/life/art',
    label: 'Painting & Art',
    sub:   'Paint as a quieter language, for the things specifications cannot hold.',
    icon:  Brush,
    meta:  'Originals · prints',
  },
  {
    to:    '/life/animals',
    label: 'Animal Advocacy',
    sub:   'Quietly and persistently, the cause that has stayed with me longest.',
    icon:  Heart,
    meta:  'Volunteer · advocate',
  },
  {
    to:    '/life/adventures',
    label: 'Adventures',
    sub:   'Mountains, haul trucks, long drives, and the rest of it.',
    icon:  Mountain,
    meta:  'Field journal',
  },
]

const WhoIAm: React.FC = () => {
  return (
    <div className="bg-canvas">

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative border-b border-ink/10 pt-36 pb-20 overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="pointer-events-none absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(15,93,74,0.08), transparent 70%)' }}
        />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow mb-5"
              >
                Who I Am
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="display-xl"
              >
                The person behind
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> the profile.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lead mt-8 max-w-2xl"
              >
                The profile page explains what I do for a living. This one is
                about how I got here and what fills the hours when I'm not
                working or coding: the cameras, the canvas, the causes, and the
                long roads. Wander as you like.
              </motion.p>
            </div>
            <motion.figure
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group lg:col-span-5 order-1 lg:order-2 relative overflow-hidden border border-ink/10 bg-sand"
            >
              <img
                src="/noopur-life.jpg"
                alt="Portrait of Noopur Trivedi"
                loading="eager"
                decoding="async"
                width={1280}
                height={1280}
                className="w-full h-auto block aspect-square object-cover img-zoom"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* ─── My journey ───────────────────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">My Journey</p>
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

      {/* ─── Beyond the work ──────────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-3">Beyond the work</p>
            <h2 className="display-lg">What I do when I'm not working or coding.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {pursuits.map((s, i) => (
              <motion.div
                key={s.to}
                {...inView(i * 0.08)}
                className={i >= 2 ? 'md:border-t md:border-ink/10' : ''}
              >
                <Link to={s.to} className="group block p-10 lg:p-14 h-full hover:bg-sand transition-colors duration-300">
                  <div className="flex items-start justify-between mb-10">
                    <div className="w-12 h-12 border border-ink/15 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300 group-hover:-rotate-3">
                      <s.icon className="w-5 h-5 text-accent group-hover:text-canvas transition-all duration-300 group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <span className="tag-ink">{s.meta}</span>
                  </div>
                  <p className="font-serif text-xs uppercase tracking-[0.22em] text-ink/35 transition-all duration-500 group-hover:tracking-[0.30em] group-hover:text-accent">
                    0{i + 1}
                  </p>
                  <h2 className="display-md mt-2 group-hover:text-accent transition-colors duration-300">
                    {s.label}
                  </h2>
                  <p className="mt-4 text-[15px] text-ink/65 leading-relaxed max-w-md">
                    {s.sub}
                  </p>
                  <div className="mt-10 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-semibold text-accent">
                    <span className="link-underline">Enter</span> <ArrowUpRight className="w-3.5 h-3.5 arrow-shift" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quiet quote ──────────────────────────────────────────────── */}
      <section className="bg-canvas">
        <div className="container-wide py-24 text-center">
          <motion.blockquote {...inView(0)} className="max-w-3xl mx-auto">
            <p className="font-serif text-3xl sm:text-4xl italic font-light text-ink leading-snug">
              "A useful life and a wide one. The two turn out to need
              each other."
            </p>
            <footer className="mt-8 text-[11px] uppercase tracking-[0.22em] text-ink/45 font-semibold">
              Noopur
            </footer>
          </motion.blockquote>
        </div>
      </section>

      <PageNav current="/who-i-am" />
    </div>
  )
}

export default WhoIAm
