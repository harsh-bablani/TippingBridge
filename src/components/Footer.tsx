import { Link } from 'react-router-dom'
import logo from '../assets/tippinglogo.jpg'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brandGreen-800 via-brandGreen-900 to-brandBlue-900 text-white relative overflow-hidden border-t border-white/10">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandGold/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandPink/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brandBlue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/20">
          {/* Brand Section */}
          <div className="md:col-span-2">
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
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📘</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/tipping-bridge/" 
                target="_blank" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-brandBlue-500 hover:to-brandGreen-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:rotate-6 hover:shadow-2xl hover:shadow-white/20 border border-white/20 hover:border-white/40" 
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">💼</span>
              </a>
              <a 
                href="https://www.instagram.com/tipping.bridge/" 
                target="_blank" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-brandPink-500 hover:to-brandGold-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-rotate-6 hover:shadow-2xl hover:shadow-white/20 border border-white/20 hover:border-white/40" 
                rel="noreferrer"
                aria-label="Instagram"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📷</span>
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
