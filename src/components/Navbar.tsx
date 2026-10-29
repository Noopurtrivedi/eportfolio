import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Command } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { clsx } from 'clsx'
import Logo from './Logo'
import { introWillPlay, INTRO_TOTAL } from './SignatureIntro'

const nav = [
  { name: 'Founder',     href: '/'          },
  { name: 'Profile',     href: '/profile'   },
  { name: 'Work',        href: '/work'      },
  { name: 'AI Projects', href: '/ai'        },
  { name: 'Who I Am',    href: '/who-i-am'  },
]

/** Opens the profile guide (rendered in Layout) without prop drilling. */
export const openGuide = () => window.dispatchEvent(new CustomEvent('open-guide'))

const Navbar: React.FC = () => {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Gold reading-progress line along the top edge of the viewport.
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

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
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{ scaleX: progress, background: 'linear-gradient(90deg, #0f5d4a, #c8a558 60%, #f1dfae)' }}
      />

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          'fixed left-0 right-0 z-50 transition-all duration-500 ease-out-soft',
          scrolled ? 'top-3' : 'top-5',
        )}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={clsx(
              'flex items-center justify-between h-14 pl-5 pr-2 rounded-full border transition-all duration-500 ease-out-soft',
              scrolled
                ? 'border-white/10 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.55)]'
                : 'border-white/[0.07]',
            )}
            style={{
              background: scrolled ? 'rgba(11, 16, 14, 0.82)' : 'rgba(11, 16, 14, 0.45)',
              backdropFilter: 'blur(16px) saturate(140%)',
              WebkitBackdropFilter: 'blur(16px) saturate(140%)',
            }}
          >

            {/* Wordmark */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <Logo
                size={20}
                sign={introWillPlay ? INTRO_TOTAL - 0.2 : 0.35}
                className="text-gold-muted transition-transform duration-500 ease-out-soft group-hover:-rotate-6"
              />
              <span className="font-serif text-[19px] font-medium tracking-tight text-[#f5f1e8] leading-none">
                Noopur Trivedi
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {nav.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={clsx(
                      'relative px-3.5 py-2 text-[13px] font-medium rounded-full transition-colors duration-200',
                      active ? 'text-[#0b100e]' : 'text-[#ece7da]/65 hover:text-[#f5f1e8]',
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-[#ece7da]"
                      />
                    )}
                    <span className="relative">{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={openGuide}
                className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full text-[12px] font-medium text-[#ece7da]/60 border border-white/10 hover:text-[#f5f1e8] hover:border-white/25 transition-colors"
                aria-label="Open the profile guide"
              >
                <Command className="w-3.5 h-3.5" /> K
              </button>
              <Link
                to="/contact"
                className="relative overflow-hidden inline-flex items-center h-10 px-5 rounded-full text-[13px] font-semibold bg-gold-muted text-[#0b100e] hover:bg-[#d9b96a] transition-colors group"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out-soft group-hover:translate-x-full" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full text-[#ece7da]/80 hover:text-[#f5f1e8] transition-colors"
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

          {/* Mobile menu */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden mt-2 rounded-3xl border border-white/10 overflow-hidden p-3"
                style={{ background: 'rgba(11, 16, 14, 0.96)' }}
              >
                {[...nav, { name: 'Contact', href: '/contact' }].map((item, i) => {
                  const active = isActive(item.href)
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.035 * i }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className={clsx(
                          'block px-4 py-3 rounded-2xl text-[15px] font-medium transition-colors',
                          active ? 'bg-[#ece7da] text-[#0b100e]' : 'text-[#ece7da]/75 hover:text-[#f5f1e8]',
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
                <button
                  onClick={() => { setOpen(false); openGuide() }}
                  className="mt-2 w-full px-4 py-3 rounded-2xl text-left text-[15px] font-medium text-[#d9b96a] border border-white/10"
                >
                  Ask the profile guide
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  )
}

export default Navbar
