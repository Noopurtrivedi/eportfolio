import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Mountain, Truck, Compass, Tent } from 'lucide-react'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const entries = [
  {
    icon: Mountain,
    period: 'Ongoing',
    title: 'Mountaineering',
    body:
      'Cascades, Coast Range, Rockies. Long approaches, alpine starts, the kind of quiet you only earn on a glacier at first light. The mountains have taught me more about decision-making under uncertainty than any meeting room.',
    tags: ['Glacier travel', 'Alpine routes', 'Multi-day approaches'],
  },
  {
    icon: Truck,
    period: '2013 – 2018',
    title: 'Driving haul trucks at Syncrude',
    body:
      'Operated heavy haul equipment on the oil sands. Twelve-hour shifts, frozen mornings, an industrial ballet conducted by radio. It is one of the most physical, disciplined, and oddly meditative jobs I have done — and the foundation for how I think about operations.',
    tags: ['Heavy equipment', 'Shift work', 'Industrial operations'],
  },
  {
    icon: Compass,
    period: 'Ongoing',
    title: 'Long driving trips',
    body:
      'Cross-continent road trips when I need to think. The Trans-Canada in different seasons, the Pacific Coast Highway, prairie loops with no destination. Some of the best work I have ever planned has been planned at 110 km/h.',
    tags: ['Road trips', 'Solo travel', 'Driving meditations'],
  },
  {
    icon: Tent,
    period: 'Ongoing',
    title: 'Backcountry & camping',
    body:
      'Tents on ridges, hot tea at sunrise, the discipline of carrying everything you need. I keep coming back to it because the system of a well-packed pack is the most honest project plan I know.',
    tags: ['Backcountry', 'Wild camping', 'Lightweight kit'],
  },
]

const fieldNotes = [
  '"The mountain is the most patient stakeholder I\'ve worked with."',
  '"A haul truck doesn\'t care about your job title."',
  '"The best PMO I ever ran was a roof rack."',
  '"Specs that survive the spreadsheet rarely survive the storm."',
]

const Adventures: React.FC = () => {
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
              <p className="eyebrow mb-4 inline-flex items-center gap-2"><Mountain className="w-3.5 h-3.5" /> Adventures</p>
              <h1 className="display-xl">
                Mountains, haul trucks, and the
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> long way around.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] text-ink/65 leading-relaxed">
                A loose field journal of the places, jobs and trips that don't
                fit on a résumé but explain a lot of how I think about work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entries */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="flex flex-col">
            {entries.map((e, i) => (
              <motion.article
                key={e.title}
                {...inView(i * 0.05)}
                className="grid grid-cols-12 gap-6 border-t border-ink/10 py-12 first:border-t-0 first:pt-0"
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="w-12 h-12 border border-ink/15 flex items-center justify-center mb-4">
                    <e.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold">
                    {e.period}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-serif text-2xl sm:text-[28px] font-medium text-ink leading-tight">
                    {e.title}
                  </h3>
                  <p className="mt-4 text-[17px] text-ink/70 leading-relaxed max-w-3xl">
                    {e.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span key={t} className="tag-ink">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Field notes */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <p className="eyebrow mb-3">Field notes</p>
          <h2 className="display-lg mb-12">Things I've muttered to myself on a ridge.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {fieldNotes.map((q, i) => (
              <motion.blockquote
                key={q}
                {...inView(i * 0.06)}
                className={`p-10 ${i >= 2 ? 'md:border-t md:border-ink/10' : ''}`}
              >
                <p className="font-serif text-xl italic text-ink leading-snug">{q}</p>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-sand">
        <div className="container-wide py-16 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Wander further</p>
            <h2 className="font-serif text-2xl font-medium text-ink">Back to the Life hub →</h2>
          </div>
          <Link to="/life" className="btn-outline px-7 py-3.5 text-[13px]">
            Back to Life
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Adventures
