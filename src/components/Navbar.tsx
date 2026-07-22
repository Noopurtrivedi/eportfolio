import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'

const nav = [
  { name: 'About',   href: '/'          },
  { name: 'Work',    href: '/portfolio' },
  { name: 'Journey', href: '/journey'   },
  { name: 'Life',    href: '/life'      },
  { name: 'Contact', href: '/contact'   },
]

const Navbar: React.FC = () => {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  const isActive = (href: string) =>
    href === '/'
      ? location.pathname === '/'
      : location.pathname === href || location.pathname.startsWith(href + '/')

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-soft',
        scrolled
          ? 'border-b border-ink/10 backdrop-blur-md shadow-[0_1px_0_rgba(15,19,17,0.02)]'
          : 'border-b border-transparent',
      )}
      style={{ background: scrolled ? 'rgba(250, 248, 243, 0.88)' : 'transparent' }}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">

          {/* Wordmark */}
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="relative inline-flex items-center">
              <span className="font-serif text-[22px] font-medium tracking-tight text-ink leading-none transition-colors duration-300 group-hover:text-accent">
                Noopur Trivedi
              </span>
              <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-500 ease-out-soft group-hover:origin-left group-hover:scale-x-100" />
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] text-ink/40 font-semibold transition-colors duration-300 group-hover:text-ink/65">
              · <span className="text-accent">Founder</span> · AI Product Strategist
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={clsx(
                    'relative px-4 py-2 text-[13px] font-semibold transition-colors duration-200',
                    active ? 'text-accent' : 'text-ink/60 hover:text-ink',
                  )}
                >
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent"
                    />
                  )}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="relative ml-3 overflow-hidden btn-primary px-5 py-2.5 text-[13px] group"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-canvas/25 to-transparent transition-transform duration-700 ease-out-soft group-hover:translate-x-full" />
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-ink/70 hover:text-ink transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <motion.span
              key={open ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-ink/10 overflow-hidden"
            style={{ background: '#faf8f3' }}
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {nav.map((item, i) => {
                const active = isActive(item.href)
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.04 * i }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        'block px-3 py-3 text-sm font-semibold transition-colors',
                        active ? 'text-accent' : 'text-ink/70 hover:text-ink',
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.04 * nav.length }}
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 btn-primary text-sm py-3 text-center w-full block"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
