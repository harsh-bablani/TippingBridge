import HeroSlider from '../components/HeroSlider'
import { Link } from 'react-router-dom'
import approachImg from '../assets/approach.png'
import documentationImg from '../assets/documentation1.png'
import eldercareImg from '../assets/eldercare.png'
import gatheringsImg from '../assets/gatherings.png'
import healthcareImg from '../assets/healthcare.png'
import investmentImg from '../assets/investment.png'
import propermanagImg from '../assets/propermanag.png'

export default function Home() {
  const serviceImages = [
    { img: documentationImg, title: 'Legal & Documentation', color: '#9333ea' }, // Purple
    { img: eldercareImg, title: 'Elderly Care', color: '#ec4899' }, // Pink
    { img: gatheringsImg, title: 'Event Management', color: '#ef4444' }, // Red
    { img: healthcareImg, title: 'Healthcare', color: '#3b82f6' }, // Blue (default)
    { img: investmentImg, title: 'Investment & Insurance', color: '#eab308' }, // Yellow
    { img: propermanagImg, title: 'Property Management', color: '#1e40af' }, // Navy Blue
  ]

  const services = [
    { title: 'Property Management', icon: '🏠', link: '/services' },
    { title: 'Service Apartments', icon: '🏢', link: '/services' },
    { title: 'Elderly Care', icon: '👴', link: '/services' },
    { title: 'Legal & Documentation', icon: '📋', link: '/services' },
    { title: 'Investments & Insurance', icon: '💰', link: '/services' },
    { title: 'Event Management', icon: '🎉', link: '/services' },
    { title: 'Medical Assistance', icon: '🏥', link: '/services' },
    { title: 'Concierge Services', icon: '🎯', link: '/services' },
  ]

  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* Service Icons Grid */}
      <section className="section-padding bg-white py-12">
        <div className="container">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group flex flex-col items-center justify-center"
              >
                {/* Icon Container with Gradient Background */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-brandGreen-400 via-brandGreen-500 to-brandBlue-500 p-4 mb-3 flex items-center justify-center shadow-lg shadow-brandGreen/20 group-hover:shadow-2xl group-hover:shadow-brandGreen/30 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl">
                    {service.icon}
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
          <div className="relative order-1">
            <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-br from-brandGold-200/40 via-brandPink-200/30 to-brandBlue-200/40 blur-2xl opacity-60" />
            {/* Multi-colored border frame */}
            <div className="relative w-full aspect-[4/3] rounded-2xl shadow-2xl"
                 style={{
                   background: 'linear-gradient(135deg, #fce7f3 0%, #fbbf24 50%, #93c5fd 100%)',
                   padding: '6px',
                 }}>
              <div className="relative w-full h-full rounded-xl bg-white overflow-hidden">
                {/* Layered colored borders */}
                <div className="absolute inset-0 rounded-xl" 
                     style={{
                       boxShadow: 'inset 0 0 0 2px #fbcfe8, inset 0 0 0 4px #fcd34d, inset 0 0 0 6px #bfdbfe',
                     }}></div>
                {/* Image with transparent background handling */}
                <div className="relative w-full h-full p-2 sm:p-3 flex items-center justify-center">
                  <img 
                    src={approachImg} 
                    alt="Our Approach" 
                    className="w-full h-full object-contain"
                    style={{ 
                      backgroundColor: 'transparent',
                      mixBlendMode: 'multiply',
                      filter: 'contrast(1.1) brightness(1.05)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order-2">
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
        </div>
      </section>

      {/* Service Highlights - Image Grid */}
      <section className="section-padding bg-gradient-to-b from-brandCream/30 to-white" id="services">
        <div className="container">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brandBlue-800 mb-8 sm:mb-10 text-center sm:text-left">
            What We Do
          </h3>
          
          {/* Service Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {serviceImages.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Image Container with colored border */}
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl"
                     style={{
                       background: 'linear-gradient(135deg, #fce7f3 0%, #fbbf24 50%, #93c5fd 100%)',
                       padding: '6px',
                     }}>
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden">
                    {/* Colored border layers */}
                    <div className="absolute inset-0 rounded-xl" 
                         style={{
                           boxShadow: 'inset 0 0 0 2px #fbcfe8, inset 0 0 0 4px #fcd34d, inset 0 0 0 6px #bfdbfe',
                         }}></div>
                    {/* Image */}
                    <div className="relative w-full h-full p-3 flex items-center justify-center">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                        style={{ 
                          backgroundColor: 'transparent',
                          mixBlendMode: 'multiply',
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Title */}
                <div className="mt-4 p-3 text-center bg-white rounded-xl border-2 transition-all group-hover:shadow-lg"
                     style={{
                       borderColor: service.color,
                     }}>
                  <h4 className="text-lg sm:text-xl font-bold transition-colors"
                      style={{
                        color: service.color,
                      }}>
                    {service.title}
                  </h4>
                </div>
              </Link>
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
