import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Camera, Mail } from 'lucide-react'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const series = [
  { title: 'Coast Series',     note: 'Long-form work along the Pacific coastline: light, water, and weather.' },
  { title: 'BC Wild',          note: 'Quiet frames from the rainforests, mountains and waterways of British Columbia.' },
  { title: 'High Country',     note: 'Alpine and backcountry photography from multi-day approaches.' },
  { title: 'Quiet Objects',    note: 'Studio still lifes, the small, deliberate frames that ask for a second look.' },
  { title: 'Companions',       note: 'A long-running record of the animals who have shared this life.' },
  { title: 'Working Land',     note: 'Industrial and rural landscapes from years on field sites.' },
]

const Photography: React.FC = () => {
  return (
    <div className="bg-canvas">
      {/* Header */}
      <section className="border-b border-ink/10 pt-36 pb-16">
        <div className="container-wide">
          <Link to="/who-i-am" className="group inline-flex items-center gap-2 text-sm text-ink/45 hover:text-accent transition-colors mb-10">
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:-translate-x-1" />
            <span className="link-underline">Back to Who I Am</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow mb-4 inline-flex items-center gap-2"
              >
                <Camera className="w-3.5 h-3.5 animate-float-y" /> Photography
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="display-xl"
              >
                A slow record of light,
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> landscape, and the in-between.</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] text-ink/65 leading-relaxed">
                Mostly natural light, mostly Pacific Northwest. I shoot for the
                quiet frames, the ones that do not ask anything of the viewer
                except a second look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Series list */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="mb-12">
            <p className="eyebrow mb-3">Series in progress</p>
            <h2 className="display-md">The bodies of work I’m putting together.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {series.map((s, i) => (
              <motion.div
                key={s.title}
                {...inView((i % 3) * 0.06)}
                className={`group p-8 transition-colors duration-300 hover:bg-sand ${i >= 3 ? 'md:border-t md:border-ink/10' : ''}`}
              >
                <p className="font-serif text-xs uppercase tracking-[0.22em] text-ink/35 mb-2 transition-all duration-500 group-hover:tracking-[0.30em] group-hover:text-accent">0{i + 1}</p>
                <h3 className="font-serif text-xl font-medium text-ink leading-snug transition-colors duration-300 group-hover:text-accent">{s.title}</h3>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">{s.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery in preparation */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-24">
          <motion.div {...inView(0)} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 border border-ink/15 items-center justify-center mb-8">
              <Camera className="w-5 h-5 text-accent" strokeWidth={1.25} />
            </div>
            <h2 className="display-md mb-5">The gallery is being curated.</h2>
            <p className="lead">
              Full prints, sequencing, and titles are coming together for each
              series above. If you would like an early look, or you are interested
              in a print of something specific, write to me.
            </p>
            <a
              href="mailto:Noopur.trivedi@hotmail.com?subject=Photography%20%E2%80%94%20early%20look"
              className="group mt-10 btn-primary px-8 py-3.5 text-[13px] inline-flex"
            >
              <Mail className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              Request an early look
            </a>
          </motion.div>
        </div>
      </section>

      {/* Next */}
      <section className="border-t border-ink/10">
        <div className="container-wide py-16 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Next in Life</p>
            <h2 className="font-serif text-2xl font-medium text-ink">Painting &amp; Art →</h2>
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
