import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/tippinglogo.jpg'

interface NavLink {
  path: string
  label: string
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const location = useLocation()

  const isActive = (path: string): boolean => location.pathname === path

  const navLinks: NavLink[] = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-gradient-to-b from-white/95 to-white/85 backdrop-blur-2xl shadow-2xl shadow-brandGreen/10 border-b border-white/40'
          : 'bg-white/70 backdrop-blur-xl border-b border-white/20'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105 relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-brandGreen-400/30 via-brandBlue-300/20 to-brandGold-300/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <img src={logo} alt="Tipping Bridge" className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover shadow-lg group-hover:shadow-2xl group-hover:shadow-brandGreen/30 transition-all duration-300 group-hover:rotate-3 border-2 border-white/50 group-hover:border-brandGreen/30" />
              <div className="absolute inset-0 bg-gradient-to-br from-brandGreen-400/20 to-brandBlue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brandBlue-700 via-brandBlue-800 to-brandGreen-700 bg-clip-text text-transparent group-hover:from-brandGreen-600 group-hover:via-brandGreen-700 group-hover:to-brandBlue-700 transition-all duration-500 group-hover:translate-x-1 drop-shadow-sm">
              Tipping Bridge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                  className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 group ${isActive(link.path)
                    ? 'text-brandGreen-600'
                    : 'text-gray-700 hover:text-brandGreen-600'
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brandGreen-400 via-brandGreen-600 to-brandGreen-400 rounded-full shadow-lg shadow-brandGreen/50"></span>
                )}
                <span className="absolute inset-0 bg-gradient-to-br from-brandGreen-50 to-brandBlue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brandGreen-600 to-brandBlue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            ))}
          </nav>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-brandGreen-600 hover:bg-brandBlue/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brandGreen/40"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-brandGreen-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}
              ></span>
              <span
                className={`absolute top-2.5 left-0 w-full h-0.5 bg-brandGreen-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              ></span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-brandGreen-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="pb-6 pt-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${isActive(link.path)
                      ? 'text-brandGreen-600 bg-brandBlue/20 border-l-4 border-brandGreen-600'
                      : 'text-gray-700 hover:text-brandGreen-600 hover:bg-brandBlue/10'
                    }`}
                >
                  <span className="flex items-center justify-between">
                    {link.label}
                    {isActive(link.path) && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
