import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Camera, Brush, Heart, Mountain } from 'lucide-react'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const sections = [
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
    sub:   'Paint as a quieter language — for the things specs can\'t hold.',
    icon:  Brush,
    meta:  'Originals · prints',
  },
  {
    to:    '/life/animals',
    label: 'Animal Advocacy',
    sub:   'Quietly, persistently — the cause that has stayed with me longest.',
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

const Life: React.FC = () => {
  return (
    <div className="bg-canvas">

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="border-b border-ink/10 pt-36 pb-20">
        <div className="container-wide">
          <p className="eyebrow mb-5">Life Beyond the Work</p>
          <h1 className="display-xl max-w-4xl">
            The rest of the
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> address.</span>
          </h1>
          <p className="lead mt-8 max-w-2xl">
            The career sections explain what I do for a living. These are the
            places that explain why I am the way I am about it — the cameras,
            the canvas, the causes, and the long roads. Wander as you like.
          </p>
        </div>
      </section>

      {/* ─── Section tiles ────────────────────────────────────────────── */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {sections.map((s, i) => (
              <motion.div
                key={s.to}
                {...inView(i * 0.08)}
                className={i >= 2 ? 'md:border-t md:border-ink/10' : ''}
              >
                <Link to={s.to} className="group block p-10 lg:p-14 h-full hover:bg-sand transition-colors">
                  <div className="flex items-start justify-between mb-10">
                    <div className="w-12 h-12 border border-ink/15 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
                      <s.icon className="w-5 h-5 text-accent group-hover:text-canvas transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="tag-ink">{s.meta}</span>
                  </div>
                  <p className="font-serif text-xs uppercase tracking-[0.22em] text-ink/35">
                    0{i + 1}
                  </p>
                  <h2 className="display-md mt-2 group-hover:text-accent transition-colors">
                    {s.label}
                  </h2>
                  <p className="mt-4 text-[15px] text-ink/65 leading-relaxed max-w-md">
                    {s.sub}
                  </p>
                  <div className="mt-10 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-semibold text-accent">
                    Enter <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quiet quote ──────────────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-24 text-center">
          <motion.blockquote {...inView(0)} className="max-w-3xl mx-auto">
            <p className="font-serif text-3xl sm:text-4xl italic font-light text-ink leading-snug">
              "I have lived a useful life, but it has been a wide life too — the
              two things turned out to need each other."
            </p>
            <footer className="mt-8 text-[11px] uppercase tracking-[0.22em] text-ink/45 font-semibold">
              Editor's note · placeholder, swap with your own
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </div>
  )
}

export default Life
