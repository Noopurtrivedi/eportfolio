import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Networking', href: '/network' },
  { name: 'Contact', href: '/contact' },
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed w-full z-50">
      <div className="container-custom">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">
              Noopur<span className="text-primary-600">.</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-primary-600',
                  location.pathname === item.href ? 'text-primary-600' : 'text-gray-600'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === item.href
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
