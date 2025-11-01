import HeroSlider from '../components/HeroSlider'
import { Link } from 'react-router-dom'
import pmIcon from '../assets/icons/icons/pm.png'
import stayIcon from '../assets/icons/icons/stay.png'
import ecIcon from '../assets/icons/icons/ec.png'
import docsIcon from '../assets/icons/icons/docs.png'
import investIcon from '../assets/icons/icons/invest.png'
import eventsIcon from '../assets/icons/icons/events.png'
import assistIcon from '../assets/icons/icons/assist.png'

export default function Home() {
  const highlights = [
    { title: 'Property Management', text: 'End‑to‑end care for your home in India.', link: '/services' },
    { title: 'Elderly Care', text: 'Compassionate, reliable support for your loved ones.', link: '/services' },
    { title: 'Legal & Documentation', text: 'Paperwork made simple and secure.', link: '/services' },
    { title: 'Concierge Services', text: 'Utilities, bills, and errands handled.', link: '/services' },
  ]

  const services = [
    { title: 'Property Management', icon: pmIcon, bgColor: 'bg-blue-100', link: '/services' },
    { title: 'Service Apartments', icon: stayIcon, bgColor: 'bg-rose-100', link: '/services' },
    { title: 'Elderly Care', icon: ecIcon, bgColor: 'bg-cyan-100', link: '/services' },
    { title: 'Legal & Documentation', icon: docsIcon, bgColor: 'bg-emerald-100', link: '/services' },
    { title: 'Investments & Insurance', icon: investIcon, bgColor: 'bg-yellow-100', link: '/services' },
    { title: 'Event Management', icon: eventsIcon, bgColor: 'bg-violet-100', link: '/services' },
    { title: 'Medical Assistance', icon: assistIcon, bgColor: 'bg-orange-100', link: '/services' },
  ]

  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* Service Icons Grid */}
      <section className="section-padding bg-white py-12">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-4 md:grid-cols-7 gap-6 md:gap-8 justify-items-center">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group flex flex-col items-center justify-center"
              >
                {/* Icon Container with Gradient Background */}
                <div className="relative mb-4 group-hover:scale-105 transition-all duration-300">
                  <div className={`w-40 h-40 rounded-full ${service.bgColor} p-2 shadow-md`}>
                    <div className="w-full h-full rounded-full bg-white p-3 flex items-center justify-center">
                      <img src={service.icon} alt={service.title} className="w-[900%] h-[900%] object-contain" />
                    </div>
                  </div>
                </div>
                <h4 className="text-xs md:text-sm font-semibold text-gray-900 text-center leading-tight">
                  {service.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-gradient-to-b from-brandCream to-white" id="about-preview">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-brandGreen-800">About </span>
              <span className="text-brandGold-600">Tipping</span>
              <span className="text-brandGreen-800"> Bridge</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              We help NRIs manage property, care for family, and handle paperwork back home with
              transparency and trust. Wherever you live, we keep you connected to India.
            </p>
            <Link to="/about" className="btn mt-6 sm:mt-8 inline-block px-8 py-3 bg-gradient-to-r from-brandGold-500 to-brandGold-600 text-white hover:from-brandGold-600 hover:to-brandGold-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold">
              Learn More
            </Link>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-br from-brandGold-200/40 via-brandPink-200/30 to-brandBlue-200/40 blur-2xl opacity-60" />
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-brandBlue-400/30 via-brandCream to-brandPink-300/40 shadow-2xl border border-brandGold-300/30" />
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="section-padding bg-gradient-to-b from-brandCream/30 to-white" id="services">
        <div className="container">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brandBlue-800 mb-8 sm:mb-10 text-center sm:text-left">
            What We Do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-3xl p-5 sm:p-6 premium-card group"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-brandBlue-800 mb-2 sm:mb-3">
                  {h.title}
                </h4>
                <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
                  {h.text}
                </p>
                <Link
                  to={h.link}
                  className="inline-flex items-center text-brandGreen-600 hover:text-brandGreen-700 font-semibold text-sm sm:text-base transition-all duration-300 group-hover:translate-x-2"
                >
                  View Service → 
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-b from-brandCream to-white">
        <div className="container text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brandGreen-800 mb-4 sm:mb-6">
            Need Assistance?
          </h3>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Reach out to us anytime. We are here 24/7.
          </p>
          <Link
            to="/contact"
            className="btn inline-block px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-brandGold-500 to-brandGold-600 text-white hover:from-brandGold-600 hover:to-brandGold-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
