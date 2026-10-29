import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Linkedin, Mail, ArrowUpRight, FileText, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.2 },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const Footer: React.FC = () => {
  return (
    <footer className="ink-band border-t border-white/[0.06]">
      <div className="container-wide pt-24 pb-10">

        {/* Sign-off */}
        <motion.div {...fadeUp(0)} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-5">Next step</p>
            <p className="font-serif font-medium text-[#f5f1e8] leading-[1.02] tracking-[-0.02em]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Let’s build what <span className="italic font-light accent-word">comes next.</span>
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
            <Link to="/contact" className="group btn-primary rounded-full px-6 py-3.5 text-[13px]">
              Start a conversation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
            </Link>
            <a href="/Noopur-Trivedi-Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline rounded-full px-6 py-3.5 text-[13px]">
              <FileText className="mr-2 w-4 h-4" /> Résumé
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14">

          {/* Brand */}
          <motion.div {...fadeUp(0)} className="md:col-span-5">
            <Logo size={30} className="mb-5 text-gold-muted" />
            <p className="font-serif text-2xl font-medium text-[#f5f1e8] tracking-tight">
              Noopur Trivedi
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#ece7da]/45 font-semibold">
              Senior Business Analyst, Enterprise Transformation, AI Product Strategist
            </p>
            <p className="mt-5 text-sm text-[#ece7da]/60 leading-relaxed max-w-md">
              14+ years delivering technology, data, and digital-modernization
              initiatives across utilities, aerospace, telecommunications,
              logistics, and oil &amp; gas, with an active practice building
              proprietary AI in model verification, decision governance, and
              AI orchestration.
            </p>
          </motion.div>

          {/* Navigate */}
          <motion.div {...fadeUp(0.05)} className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ece7da]/40 mb-5">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Founder Journey', href: '/'               },
                { label: 'Profile',         href: '/profile'        },
                { label: 'Enterprise Work', href: '/work'           },
                { label: 'AI Projects',     href: '/ai'             },
                { label: 'Who I Am',        href: '/who-i-am'       },
                { label: 'Certifications',  href: '/certifications' },
                { label: 'Contact',         href: '/contact'        },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="group inline-flex items-center gap-2 text-sm text-[#ece7da]/60 hover:text-[#d9b96a] transition-colors w-fit"
                >
                  <span className="link-underline">{l.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out-soft" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div {...fadeUp(0.1)} className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ece7da]/40 mb-5">Connect</p>
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
                  className="flex items-center gap-2.5 text-sm text-[#ece7da]/60 hover:text-[#d9b96a] transition-colors group"
                >
                  <s.icon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <span className="link-underline">{s.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-out-soft" />
                </a>
              ))}
              <p className="mt-3 text-[12px] text-[#ece7da]/40">
                Tip: press <kbd className="border border-white/15 rounded px-1.5 py-0.5 text-[11px] text-[#ece7da]/70">⌘ K</kbd> anywhere to ask the profile guide.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.15)} className="pt-7 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#ece7da]/40">
            © 2021–{new Date().getFullYear()} Noopur Trivedi. All rights reserved.
          </p>
          <p className="text-xs text-[#ece7da]/40 italic font-serif">
            Designed with restraint. Built with intent.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
