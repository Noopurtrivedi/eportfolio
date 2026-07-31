import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Brush, Mail } from 'lucide-react'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const Art: React.FC = () => {
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
                <Brush className="w-3.5 h-3.5 animate-float-y" /> Painting &amp; Art
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="display-xl"
              >
                Paint as a quieter
                <span className="italic font-light" style={{ color: '#0f5d4a' }}> language.</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] text-ink/65 leading-relaxed">
                Specifications are precise. Paint is honest about what it can’t
                say. I work in small, deliberate series: colour studies,
                portraits, and the occasional landscape I’ve actually walked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artist statement — anchored */}
      <section className="border-b border-ink/10">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-3">Artist statement</p>
              <h2 className="display-md">Why I paint.</h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-[17px] text-ink/70 leading-relaxed">
              <p>
                I spend most of my workday turning ambiguity into precision;
                specifications, dashboards, integration contracts. Paint is the
                opposite practice. It lets the ambiguity stay.
              </p>
              <p>
                I work small and slow. A study at a time, mostly in series, mostly
                from memory rather than reference. The work isn’t a commercial
                practice, but the catalog is real and I am happy to share
                originals or scans by request.
              </p>
              <p className="font-serif italic text-ink/55">Noopur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio in preparation */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="container-wide py-24">
          <motion.div {...inView(0)} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 border border-ink/15 items-center justify-center mb-8">
              <Brush className="w-5 h-5 text-accent" strokeWidth={1.25} />
            </div>
            <h2 className="display-md mb-5">The studio gallery is being assembled.</h2>
            <p className="lead">
              Scans of the current series are coming up here: colour studies,
              charcoal, gouache and a small body of oil work. If you’d like to
              see a piece in person, or you’re curious about something specific,
              write to me.
            </p>
            <a
              href="mailto:Noopur.trivedi@hotmail.com?subject=Art%20%E2%80%94%20studio%20visit"
              className="mt-10 btn-primary px-8 py-3.5 text-[13px] inline-flex"
            >
              <Mail className="mr-2 w-4 h-4" /> Ask about a piece
            </a>
          </motion.div>
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
