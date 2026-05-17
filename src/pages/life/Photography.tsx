import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Camera } from 'lucide-react'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

/* Placeholders — replace with real images dropped into /public/life/photography/
   then update this list. Aspect ratios are mixed on purpose for a masonry feel. */
const placeholders = [
  { id: 1,  aspect: 'aspect-[4/5]',  label: 'Pacific coast',           series: 'Coast Series' },
  { id: 2,  aspect: 'aspect-[3/2]',  label: 'Highway 99 at golden hr', series: 'Roads' },
  { id: 3,  aspect: 'aspect-square', label: 'Studio detail',           series: 'Quiet Objects' },
  { id: 4,  aspect: 'aspect-[4/5]',  label: 'Rainforest morning',      series: 'BC Wild' },
  { id: 5,  aspect: 'aspect-[3/2]',  label: 'Mountain pass · winter',  series: 'High Country' },
  { id: 6,  aspect: 'aspect-square', label: 'Street portrait',         series: 'Strangers' },
  { id: 7,  aspect: 'aspect-[3/2]',  label: 'Industrial silhouette',   series: 'Working Land' },
  { id: 8,  aspect: 'aspect-[4/5]',  label: 'Calm before the storm',   series: 'Skies' },
  { id: 9,  aspect: 'aspect-square', label: 'Animal sanctuary',        series: 'Field Visits' },
  { id: 10, aspect: 'aspect-[3/2]',  label: 'Roadside chapel',         series: 'Roads' },
  { id: 11, aspect: 'aspect-[4/5]',  label: 'Dog at the lake',         series: 'Companions' },
  { id: 12, aspect: 'aspect-square', label: 'Tea, light, hands',       series: 'Quiet Objects' },
]

const Photography: React.FC = () => {
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
              <p className="eyebrow mb-4 inline-flex items-center gap-2"><Camera className="w-3.5 h-3.5" /> Photography</p>
              <h1 className="display-xl">
                A slow record of light,
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> landscape, and the in-between.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] text-ink/65 leading-relaxed">
                Mostly natural light, mostly Pacific Northwest. I shoot for the
                quiet frames — the ones that don't ask anything of the viewer
                except a second look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asset note */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-6 text-[12px] text-ink/55 font-medium">
          <span className="text-accent font-semibold uppercase tracking-[0.22em] text-[11px] mr-3">Placeholder</span>
          Drop final images into <code className="bg-surface px-1.5 py-0.5 border border-ink/10">/public/life/photography/</code> and swap in real captions.
        </div>
      </section>

      {/* Masonry */}
      <section className="container-wide py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {placeholders.map((p, i) => (
            <motion.figure
              key={p.id}
              {...inView((i % 6) * 0.04)}
              className="break-inside-avoid mb-5 group"
            >
              <div className={`relative ${p.aspect} bg-sand border border-ink/10 overflow-hidden`}>
                {/* subtle ornamental placeholder */}
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      'repeating-linear-gradient(135deg, rgba(15,93,74,0.05) 0px, rgba(15,93,74,0.05) 1px, transparent 1px, transparent 18px)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-7 h-7 text-ink/15" strokeWidth={1.25} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-canvas/95 via-canvas/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-serif text-sm font-medium text-ink leading-snug">{p.label}</p>
                  <p className="text-[10px] text-ink/55 uppercase tracking-[0.22em] mt-1 font-semibold">{p.series}</p>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Next */}
      <section className="border-t border-ink/10 bg-sand">
        <div className="container-wide py-16 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Next in Life</p>
            <h2 className="font-serif text-2xl font-medium text-ink">Painting & Art →</h2>
          </div>
          <Link to="/life/art" className="btn-outline px-7 py-3.5 text-[13px]">
            Continue to the studio
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Photography
