import { useState } from 'react'

const WHATSAPP_NUMBER = '73036676000'

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const composed = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composed)}`
    window.open(url, '_blank')
  }

  const serviceAreas = [
    { state: 'Delhi NCR', cities: ['Gurgaon', 'Manesar', 'Noida', 'Ghaziabad', 'Meerut', 'Faridabad', 'Palwal', 'Delhi'] },
    { state: 'Punjab', cities: ['Chandigarh', 'Amritsar', 'Ludhiana'] },
    { state: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur'] },
    { state: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Allahabad'] },
    { state: 'West Bengal', cities: ['Kolkata'] },
    { state: 'Maharashtra', cities: ['Mumbai', 'Pune'] }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-brandCream to-white">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-brandGreen-500 via-brandGreen-600 to-brandBlue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl text-brandCream/90 text-center max-w-3xl mx-auto">
            We usually respond within minutes on WhatsApp.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brandGold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandPink/20 rounded-full blur-3xl"></div>
      </div>

      <div className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-16">
            <div>
              <form
                onSubmit={submitWhatsApp}
                className="space-y-4 sm:space-y-5 premium-card group p-5 sm:p-6 md:p-8 rounded-3xl"
              >
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white/50 backdrop-blur-sm border-2 border-white/30 focus:border-brandGreen focus:ring-2 focus:ring-brandGreen/20 focus:bg-white/80 text-base transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white/50 backdrop-blur-sm border-2 border-white/30 focus:border-brandGreen focus:ring-2 focus:ring-brandGreen/20 focus:bg-white/80 text-base transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    What do you want to talk about?
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white/50 backdrop-blur-sm border-2 border-white/30 focus:border-brandGreen focus:ring-2 focus:ring-brandGreen/20 focus:bg-white/80 text-base transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full py-3 sm:py-4 text-base sm:text-lg mt-2"
                >
                  Send to WhatsApp
                </button>
              </form>
            </div>
            <div className="premium-card group p-5 sm:p-6 md:p-8 rounded-3xl h-fit lg:sticky lg:top-24">
              <h2 className="text-xl sm:text-2xl font-semibold text-brandGreen-800 mb-4 sm:mb-6">
                Business Info
              </h2>
              <ul className="space-y-3 sm:space-y-4 text-gray-800 text-sm sm:text-base">
                <li className="flex items-start">
                  <strong className="text-brandGreen-700 min-w-[70px] sm:min-w-[80px]">Email:</strong>
                  <a
                    href="mailto:info@tippingbridge.com"
                    className="text-brandGreen-600 hover:text-brandGreen-800 hover:underline break-all"
                  >
                    info@tippingbridge.com
                  </a>
                </li>
                <li className="flex items-start">
                  <strong className="text-brandGreen-700 min-w-[70px] sm:min-w-[80px]">Mobile:</strong>
                  <a
                    href={`tel:+91${WHATSAPP_NUMBER}`}
                    className="text-brandGreen-600 hover:text-brandGreen-800 hover:underline"
                  >
                    +91 {WHATSAPP_NUMBER}
                  </a>
                </li>
                <li className="flex items-start">
                  <strong className="text-brandGreen-700 min-w-[70px] sm:min-w-[80px]">Address:</strong>
                  <span className="text-gray-700">
                    Plot No- 1791, Sector 52, Gurgaon, Haryana. Pin - 122002
                  </span>
                </li>
              </ul>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary text-center"
                >
                  WhatsApp Chat
                </a>
                <a
                  href="mailto:info@tippingbridge.com"
                  className="btn btn-secondary text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas Section */}
          <div className="mt-16 mb-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-brandGreen-800 mb-4">Our Service Areas</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">Comprehensive support across major cities in India</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <div
                  key={area.state}
                  className="premium-card group p-6 rounded-3xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-brandGreen-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-brandGreen-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      📍
                    </span>
                    {area.state}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map((city) => (
                      <span
                        key={city}
                        className="inline-block bg-brandCream-100/80 backdrop-blur-sm text-brandGreen-700 px-3 py-1 rounded-full text-sm font-medium border border-brandGreen-200/50 hover:border-brandGreen-300 hover:scale-110 transition-all duration-300 hover:shadow-lg"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
