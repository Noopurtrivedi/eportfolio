import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.2 },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-ink/10 bg-sand">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
          <motion.div {...fadeUp(0)} className="md:col-span-5">
            <p className="font-serif text-2xl font-medium text-ink tracking-tight">
              Noopur Trivedi
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink/45 font-semibold inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
              Senior Business Analyst · Enterprise Transformation · AI Product Strategist
            </p>
            <p className="mt-5 text-sm text-ink/60 leading-relaxed max-w-md">
              13+ years delivering technology, data, and digital-modernization
              initiatives across utilities, aerospace, telecommunications,
              logistics, and oil &amp; gas, with an active practice building
              proprietary AI in model verification, decision governance, and
              AI orchestration.
            </p>
          </motion.div>

          {/* Navigate */}
          <motion.div {...fadeUp(0.05)} className="md:col-span-3">
            <p className="section-label mb-5">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Work',           href: '/portfolio'      },
                { label: 'Journey',        href: '/journey'        },
                { label: 'Life',           href: '/life'           },
                { label: 'Certifications', href: '/certifications' },
                { label: 'About',          href: '/'               },
                { label: 'Contact',        href: '/contact'        },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="group inline-flex items-center gap-2 text-sm text-ink/60 hover:text-accent transition-colors w-fit"
                >
                  <span className="link-underline">{l.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out-soft" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div {...fadeUp(0.1)} className="md:col-span-4">
            <p className="section-label mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: Mail,     label: 'noopur.trivedi@hotmail.com', href: 'mailto:noopur.trivedi@hotmail.com' },
                { icon: Linkedin, label: 'linkedin.com/in/noopur-trivedi', href: 'https://linkedin.com/in/noopur-trivedi' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ink/60 hover:text-accent transition-colors group"
                >
                  <s.icon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <span className="link-underline">{s.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-out-soft" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.15)} className="hr pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-ink/40">
            © {new Date().getFullYear()} Noopur Trivedi. All rights reserved.
          </p>
          <p className="text-xs text-ink/40 italic font-serif">
            Designed with restraint. Built with intent.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
