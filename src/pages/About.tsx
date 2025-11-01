import { useState, useEffect } from 'react'
import nriImg from '../assets/nri.png'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const coreValues = [
    {
      icon: '✓',
      title: 'Integrity',
      description: 'We maintain absolute honesty, ethical standards, and professionalism in every interaction and transaction.',
      gradient: 'from-brandGreen-400 to-brandGreen-600'
    },
    {
      icon: '💚',
      title: 'Courtesy',
      description: 'Every client is treated with genuine respect, empathy, and compassion – because your comfort matters.',
      gradient: 'from-brandGreen-500 to-brandGreen-700'
    },
    {
      icon: '⚡',
      title: 'Dynamism',
      description: 'We adapt quickly to evolving NRI challenges, regulations, and market changes to stay ahead.',
      gradient: 'from-brandBlue-400 to-brandBlue-600'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Committed to continuous improvement, delivering superior quality service, and setting industry benchmarks.',
      gradient: 'from-brandGreen-600 to-brandBlue-600'
    }
  ]

  const commitments = [
    'We value your time with prompt responses and fast-track execution.',
    'Transparent pricing – no hidden fees, clear quotes upfront for all NRI services.',
    'Only vetted, experienced professionals handling your needs with expertise.',
    'Quick, reliable delivery – because dependability is at the heart of what we do.'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-brandCream to-white">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-brandGreen-600 via-brandGreen-700 to-brandBlue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className={`max-w-3xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About Tipping Bridge
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-brandCream/90 leading-relaxed">
              Your one-stop solution for all NRI needs in India – seamless, trusted, and professional.
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brandGold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandPink/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container">
          {/* Introduction */}
          <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brandBlue-800 mb-6">
                Your Trusted NRI Partner
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Tipping Bridge is your one-stop solution for all NRI needs in India – from NRI documentation, immigration assistance, and visa services to everyday personal errands and property management. We specialize in making life seamless for Non-Resident Indians (NRIs) by delivering professional, reliable, and hassle-free services tailored to both minor tasks and major requirements.
                </p>
                <p>
                  Whether it's legal paperwork, banking support, tax filing, or family coordination, our goal is to turn every trip back home into a true stress-free holiday – fully managed, efficient, and enjoyable.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-float">
              <div className="relative">
                <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-brandGold-400/60 via-brandPink-300/50 to-brandBlue-300/50 blur-3xl opacity-70 animate-glow"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-brandGold-400/60 backdrop-blur-sm hover:border-brandGold-300 hover:shadow-[0_0_40px_rgba(228,191,122,0.5)] transition-all duration-500">
                  <img
                    src={nriImg}
                    alt="NRI care and property management"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="premium-card group p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brandGreen-200/30 rounded-full blur-2xl"></div>
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-brandGreen-500 to-brandGreen-600 rounded-full flex items-center justify-center text-3xl mr-4 icon-glow shadow-lg">
                  👁️
                </div>
                <h3 className="text-2xl font-bold text-brandBlue-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To emerge as the most trusted NRI service provider in India – a single, dependable platform where NRIs can rely on expert guidance and end-to-end solutions for all their India-related needs, building lasting confidence and peace of mind.
              </p>
            </div>

            <div className="premium-card group p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brandBlue-200/30 rounded-full blur-2xl"></div>
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-brandBlue-500 to-brandBlue-600 rounded-full flex items-center justify-center text-3xl mr-4 icon-glow shadow-lg">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-brandBlue-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To simplify NRI life by offering expert, comprehensive support across documentation, immigration, real estate, financial services, and more – saving valuable time and effort through streamlined processes, dedicated professionals, and unmatched efficiency.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h3 className="text-3xl sm:text-4xl font-bold text-brandBlue-800 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={value.title}
                  className="premium-card group p-6 rounded-3xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center text-3xl mb-4 icon-glow`}>
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold text-brandBlue-800 mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitments */}
          <div className="bg-gradient-to-br from-brandGreen-600 to-brandBlue-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              Our Commitments to You
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-brandGold rounded-full flex items-center justify-center font-bold text-brandGreen-800 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    ✓
                  </div>
                  <p className="text-lg leading-relaxed">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
