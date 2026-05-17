import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-ink/10 bg-sand">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-serif text-2xl font-medium text-ink tracking-tight">
              Noopur Trivedi
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink/45 font-semibold">
              Founder · Senior Business Analyst · EMBA Candidate
            </p>
            <p className="mt-5 text-sm text-ink/60 leading-relaxed max-w-md">
              Founder of TrinityTalent.ai and co-founder of CreationX, anchored
              by eleven years of senior enterprise delivery. Preparing for the
              Executive MBA — formalizing the strategy and leadership toolkit
              alongside the operator one.
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <p className="section-label mb-5">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Work',           href: '/portfolio'      },
                { label: 'Journey',        href: '/journey'        },
                { label: 'Life',           href: '/life'           },
                { label: 'Certifications', href: '/certifications' },
                { label: 'About',          href: '/about'          },
                { label: 'Contact',        href: '/contact'        },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="text-sm text-ink/60 hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="section-label mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: Mail,     label: 'Noopur.trivedi@hotmail.com', href: 'mailto:Noopur.trivedi@hotmail.com' },
                { icon: Phone,    label: '+1 (306) 471-1222',          href: 'tel:+13064711222' },
                { icon: Linkedin, label: 'linkedin.com/in/noopur-trivedi', href: 'https://linkedin.com/in/noopur-trivedi' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ink/60 hover:text-accent transition-colors group"
                >
                  <s.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {s.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hr pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-ink/40">
            © {new Date().getFullYear()} Noopur Trivedi. All rights reserved.
          </p>
          <p className="text-xs text-ink/40 italic font-serif">
            Designed with restraint. Built with intent.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
