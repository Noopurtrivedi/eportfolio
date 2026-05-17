import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Brush } from 'lucide-react'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const works = [
  { id: 1, title: 'Untitled, after the storm',     medium: 'Acrylic on canvas',  size: '24 × 30 in', year: '2024' },
  { id: 2, title: 'Letter from the high country',  medium: 'Watercolour & ink',   size: '12 × 16 in', year: '2024' },
  { id: 3, title: 'Field study no. 7',             medium: 'Gouache on paper',    size: '8 × 10 in',  year: '2023' },
  { id: 4, title: 'Self portrait as a sparrow',    medium: 'Oil on linen',        size: '18 × 24 in', year: '2023' },
  { id: 5, title: 'Notes on quiet',                medium: 'Mixed media',         size: '16 × 20 in', year: '2022' },
  { id: 6, title: 'Two trees, one root',           medium: 'Charcoal on paper',   size: '14 × 18 in', year: '2022' },
]

const Art: React.FC = () => {
  return (
    <div className="bg-canvas">
      {/* Header */}
      <section className="border-b border-ink/10 pt-36 pb-16">
        <div className="container-wide">
          <Link to="/life" className="inline-flex items-center gap-2 text-sm text-ink/45 hover:text-accent transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Life
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-4 inline-flex items-center gap-2"><Brush className="w-3.5 h-3.5" /> Painting & Art</p>
              <h1 className="display-xl">
                Paint as a quieter
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> language.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] text-ink/65 leading-relaxed">
                Specifications are precise. Paint is honest about what it can't
                say. I work in small, deliberate series — colour studies,
                portraits, the occasional landscape I've actually walked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asset note */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-6 text-[12px] text-ink/55 font-medium">
          <span className="text-accent font-semibold uppercase tracking-[0.22em] text-[11px] mr-3">Placeholder</span>
          Drop scans into <code className="bg-surface px-1.5 py-0.5 border border-ink/10">/public/life/art/</code> and replace this list with real titles, mediums and dimensions.
        </div>
      </section>

      {/* Grid */}
      <section className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.figure
              key={w.id}
              {...inView((i % 3) * 0.05)}
              className="group"
            >
              <div className="relative aspect-[4/5] bg-sand border border-ink/10 overflow-hidden">
                {/* Placeholder texture */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 30%, rgba(15,93,74,0.10), transparent 60%), radial-gradient(circle at 70% 70%, rgba(169,133,50,0.08), transparent 60%)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brush className="w-7 h-7 text-ink/15" strokeWidth={1.25} />
                </div>
              </div>
              <figcaption className="mt-4">
                <p className="font-serif text-lg font-medium text-ink italic">{w.title}</p>
                <p className="mt-1 text-xs text-ink/55">{w.medium} · {w.size}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-accent font-semibold">{w.year}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="border-t border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-3">Artist statement</p>
              <h2 className="display-md">Why I paint.</h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-[17px] text-ink/70 leading-relaxed">
              <p>
                I spend most of my workday turning ambiguity into precision —
                specifications, dashboards, integration contracts. Paint is the
                opposite practice. It lets the ambiguity stay.
              </p>
              <p>
                I tend to work small and slow. The pieces here are placeholders
                — when the real scans go in, the captions will read differently.
                If you'd like to see something in person, write to me.
              </p>
              <p className="font-serif italic text-ink/55">— Noopur</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <div className="container-wide py-16 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Next in Life</p>
            <h2 className="font-serif text-2xl font-medium text-ink">Animal Advocacy →</h2>
          </div>
          <Link to="/life/animals" className="btn-outline px-7 py-3.5 text-[13px]">
            Continue
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Art
