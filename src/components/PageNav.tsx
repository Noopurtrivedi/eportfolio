import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

/* Site reading order — drives the prev / next pagination on every page. */
const pageOrder = [
  { path: '/',          label: 'Profile' },
  { path: '/work',      label: 'Enterprise Work' },
  { path: '/ai',        label: 'AI Projects' },
  { path: '/founder',   label: 'Founder Journey' },
  { path: '/who-i-am',  label: 'Who I Am' },
  { path: '/contact',   label: 'Contact' },
]

interface PageNavProps {
  current: string
}

const PageNav: React.FC<PageNavProps> = ({ current }) => {
  const idx = pageOrder.findIndex((p) => p.path === current)
  if (idx === -1) return null
  const prev = idx > 0 ? pageOrder[idx - 1] : null
  const next = idx < pageOrder.length - 1 ? pageOrder[idx + 1] : null

  return (
    <nav aria-label="Page navigation" className="border-t border-ink/10 bg-sand">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="container-wide grid grid-cols-2 divide-x divide-ink/10 border-x border-ink/10"
      >
        {prev ? (
          <Link to={prev.path} className="group flex flex-col gap-2 py-10 pr-8 hover:bg-canvas transition-colors duration-300">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink/40 font-semibold">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 ease-out-soft group-hover:-translate-x-1" />
              Previous
            </span>
            <span className="font-serif text-xl sm:text-2xl font-medium text-ink group-hover:text-accent transition-colors duration-300">
              {prev.label}
            </span>
          </Link>
        ) : (
          <div className="py-10" />
        )}
        {next ? (
          <Link to={next.path} className="group flex flex-col items-end text-right gap-2 py-10 pl-8 hover:bg-canvas transition-colors duration-300">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink/40 font-semibold">
              Next
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
            </span>
            <span className="font-serif text-xl sm:text-2xl font-medium text-ink group-hover:text-accent transition-colors duration-300">
              {next.label}
            </span>
          </Link>
        ) : (
          <div className="py-10" />
        )}
      </motion.div>
      <p className="container-wide pb-6 pt-2 text-center text-[11px] uppercase tracking-[0.22em] text-ink/35 font-semibold">
        Page {idx + 1} of {pageOrder.length}
      </p>
    </nav>
  )
}

export default PageNav
