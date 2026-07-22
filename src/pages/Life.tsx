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

const Life: React.FC = () => {
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
                Life Beyond the Work
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="display-xl"
              >
                The rest of the
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> address.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lead mt-8 max-w-2xl"
              >
                The career sections explain what I do for a living. These are
                the places that explain why I am the way I am about it, the
                cameras, the canvas, the causes, and the long roads. Wander as
                you like.
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
      <section className="border-b border-ink/10 bg-sand">
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
    </div>
  )
}

export default Life
