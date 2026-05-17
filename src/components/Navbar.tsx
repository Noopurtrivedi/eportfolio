import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

const nav = [
  { name: 'Work',    href: '/portfolio' },
  { name: 'Journey', href: '/journey'   },
  { name: 'Life',    href: '/life'      },
  { name: 'About',   href: '/about'     },
  { name: 'Contact', href: '/contact'   },
]

const Navbar: React.FC = () => {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-ink/10 backdrop-blur-md' : '',
      )}
      style={{ background: scrolled ? 'rgba(250, 248, 243, 0.92)' : 'transparent' }}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">

          {/* Wordmark */}
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="font-serif text-[22px] font-medium tracking-tight text-ink leading-none">
              Noopur Trivedi
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] text-ink/40 font-semibold">
              · Founder · BA · EMBA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active =
                item.href === '/'
                  ? location.pathname === '/'
                  : location.pathname === item.href ||
                    location.pathname.startsWith(item.href.split('#')[0] + '/')
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={clsx(
                    'px-4 py-2 text-[13px] font-semibold transition-colors duration-200',
                    active ? 'text-accent' : 'text-ink/60 hover:text-ink',
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="ml-3 btn-primary px-5 py-2.5 text-[13px]"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-ink/70 hover:text-ink transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-ink/10" style={{ background: '#faf8f3' }}>
          <div className="container-wide py-4 flex flex-col gap-1">
            {nav.map((item) => {
              const active = location.pathname === item.href.split('#')[0]
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    'px-3 py-3 text-sm font-semibold transition-colors',
                    active ? 'text-accent' : 'text-ink/70 hover:text-ink',
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 btn-primary text-sm py-3 text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
