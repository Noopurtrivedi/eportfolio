import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, PawPrint, Megaphone, HandHeart } from 'lucide-react'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const pillars = [
  {
    icon: PawPrint,
    title: 'Rescue & care',
    body:  'Hands-on time with local rescues — fostering, transport runs, fundraising days. The unglamorous, ongoing kind of help.',
  },
  {
    icon: Megaphone,
    title: 'Advocacy & awareness',
    body:  'Quiet, consistent advocacy for ethical treatment, adoption over breeding, and protection of working and wild animals.',
  },
  {
    icon: HandHeart,
    title: 'Giving & support',
    body:  'Recurring support for sanctuaries and shelter networks that do the work day-in, day-out — and the volunteers behind them.',
  },
]

const causes = [
  { name: 'Local animal rescues',        note: 'Foster, transport, fundraising' },
  { name: 'Working-animal welfare',      note: 'Dignified retirement & rehoming' },
  { name: 'Wildlife sanctuary support',  note: 'Habitat & rehabilitation programs' },
  { name: 'Adoption-over-breeding',      note: 'Awareness & community education' },
  { name: 'Anti-cruelty advocacy',       note: 'Policy & community standards' },
  { name: 'Veterinary-access funds',     note: 'Care subsidies for low-income owners' },
]

const Animals: React.FC = () => {
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
              <p className="eyebrow mb-4 inline-flex items-center gap-2"><Heart className="w-3.5 h-3.5" /> Animal Advocacy</p>
              <h1 className="display-xl">
                Quietly, persistently —
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> the cause that has stayed with me longest.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] text-ink/65 leading-relaxed">
                Long before the career and the side builds, this was the thing I
                kept showing up for. Not as a campaign — as a way of moving
                through the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="max-w-3xl space-y-6 text-[18px] text-ink/75 leading-relaxed">
            <p>
              I've spent enough hours inside rescues, transport runs and shelter
              fundraisers to be allergic to performative advocacy. The work that
              actually changes outcomes for animals is mostly boring and mostly
              repeated — the foster home that opens up again, the volunteer who
              shows up another Saturday, the cheque that goes out every month.
            </p>
            <p>
              That's the kind of advocacy I keep coming back to. Local, ongoing,
              relational. The same operating principle as the rest of my work,
              applied to the part of the world I care about most.
            </p>
            <p className="font-serif italic text-ink/55">— Noopur</p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="mb-12">
            <p className="eyebrow mb-3">How I show up</p>
            <h2 className="display-lg">Three forms it takes.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink/10 bg-surface divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {pillars.map((p, i) => (
              <motion.div key={p.title} {...inView(i * 0.08)} className="p-10">
                <div className="w-11 h-11 border border-ink/15 flex items-center justify-center mb-6">
                  <p.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-ink leading-snug">{p.title}</h3>
                <p className="mt-4 text-[15px] text-ink/65 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes list */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-3">Causes I support</p>
              <h2 className="display-md">Where the time and money go.</h2>
              <p className="lead mt-6">
                If you run an organization working on any of these and you'd like
                to talk, write to me.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-0 border border-ink/10 bg-surface divide-y sm:divide-y-0 sm:divide-x divide-ink/10">
              {causes.map((c, i) => (
                <motion.div
                  key={c.name}
                  {...inView((i % 2) * 0.05)}
                  className={`p-6 ${i >= 2 ? 'sm:border-t sm:border-ink/10' : ''} ${i >= 4 ? 'sm:border-t sm:border-ink/10' : ''}`}
                >
                  <p className="font-serif text-lg font-medium text-ink">{c.name}</p>
                  <p className="mt-1 text-sm text-ink/55">{c.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Companions placeholder */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-20">
          <div className="mb-8">
            <p className="eyebrow mb-3">Companions</p>
            <h2 className="display-md">The ones I get to live with.</h2>
            <p className="lead mt-4 max-w-xl">Photos of the rescues and companions who share this life. Placeholders for now — real frames coming.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[1,2,3,4].map((n) => (
              <div key={n} className="relative aspect-square bg-surface border border-ink/10 overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 40%, rgba(15,93,74,0.12), transparent 70%)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PawPrint className="w-7 h-7 text-ink/20" strokeWidth={1.25} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset note */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-6 text-[12px] text-ink/55 font-medium">
          <span className="text-accent font-semibold uppercase tracking-[0.22em] text-[11px] mr-3">Placeholder</span>
          Drop companion photos into <code className="bg-sand px-1.5 py-0.5 border border-ink/10">/public/life/animals/</code>; tell me which organizations to name and link.
        </div>
      </section>

      <section className="border-t border-ink/10 bg-sand">
        <div className="container-wide py-16 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Next in Life</p>
            <h2 className="font-serif text-2xl font-medium text-ink">Adventures →</h2>
          </div>
          <Link to="/life/adventures" className="btn-outline px-7 py-3.5 text-[13px]">
            Continue
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Animals
