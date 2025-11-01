import { Link } from 'react-router-dom'
import logo from '../assets/tippinglogo.jpg'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brandGreen-700 via-brandGreen-800 to-brandBlue-800 text-white relative overflow-hidden border-t border-white/10">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandGold/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandPink/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brandBlue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/20">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-brandGreen-400/30 via-brandBlue-300/30 to-brandGold-300/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src={logo} alt="Tipping Bridge" className="w-14 h-14 rounded-xl object-cover shadow-lg mr-4 border-2 border-white/30 relative" />
              </div>
              <h4 className="text-3xl font-bold bg-gradient-to-r from-white via-brandCream to-white bg-clip-text text-transparent">
                Tipping Bridge
              </h4>
            </div>
            <p className="mb-6 text-white/90 text-lg leading-relaxed font-light">
              Your trusted partner for NRIs — comprehensive property management, elderly care, legal services, concierge support, and more. We bridge the gap between you and India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100088852623320" 
                target="_blank" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-brandGreen-500 hover:to-brandBlue-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-rotate-6 hover:shadow-2xl hover:shadow-white/20 border border-white/20 hover:border-white/40" 
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/tipping-bridge/" 
                target="_blank" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-brandBlue-500 hover:to-brandGreen-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:rotate-6 hover:shadow-2xl hover:shadow-white/20 border border-white/20 hover:border-white/40" 
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/tipping.bridge/" 
                target="_blank" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-brandPink-500 hover:to-brandGold-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-rotate-6 hover:shadow-2xl hover:shadow-white/20 border border-white/20 hover:border-white/40" 
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-6 text-xl tracking-wide">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-brandGold transition-all duration-300 inline-flex items-center group">
                  <span className="w-2 h-2 bg-brandGold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brandGold transition-all duration-300 inline-flex items-center group">
                  <span className="w-2 h-2 bg-brandGold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brandGold transition-all duration-300 inline-flex items-center group">
                  <span className="w-2 h-2 bg-brandGold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brandGold transition-all duration-300 inline-flex items-center group">
                  <span className="w-2 h-2 bg-brandGold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h5 className="font-bold mb-6 text-xl tracking-wide">Legal & Support</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="hover:text-brandGold transition-all duration-300 inline-flex items-center group">
                  <span className="w-2 h-2 bg-brandGold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brandGold transition-all duration-300 inline-flex items-center group">
                  <span className="w-2 h-2 bg-brandGold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="mailto:info@tippingbridge.com" className="hover:text-brandGold transition-all duration-300 inline-flex items-center group">
                  <span className="w-2 h-2 bg-brandGold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                  info@tippingbridge.com
                </a>
              </li>
              <li>
                <a href="tel:+9173036676000" className="hover:text-brandGold transition-all duration-300 inline-flex items-center group">
                  <span className="w-2 h-2 bg-brandGold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                  +91 73036676000
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10">
          <p className="text-sm text-white/80 font-light">
            &copy; {new Date().getFullYear()} Tipping Bridge. All rights reserved.
          </p>
          <p className="text-sm text-white/80 font-light flex items-center gap-2">
            Made with <span className="text-xl animate-pulse">❤️</span> for NRIs worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
