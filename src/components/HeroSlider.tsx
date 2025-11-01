import { useEffect, useState } from 'react'

interface Slide {
  title: string
  subtitle: string
}

const slides: Slide[] = [
  { title: 'Caring for your loved ones, just like family.', subtitle: 'Elderly Care for NRIs' },
  { title: 'Your property, our priority.', subtitle: 'End‑to‑End Property Management' },
  { title: 'Legal ease for NRIs, wherever you are.', subtitle: 'Legal & Documentation' },
  { title: 'Every little task handled back home.', subtitle: 'Concierge & Lifestyle Services' },
  { title: 'Invest in India with confidence.', subtitle: 'Investment & Financial Guidance' },
]

export default function HeroSlider() {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[500px] sm:h-[560px] md:h-[640px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-brandGreen-600 via-brandGreen-700 to-brandBlue-800">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandGold/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandPink/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Slide content */}
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-20 sm:pt-24">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-x-0 px-4 sm:px-6 lg:px-8 flex items-center transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className={`max-w-3xl w-full ${i === index ? 'animate-slide-up' : ''}`}>
              <span className="inline-block px-4 sm:px-5 py-2 mb-5 sm:mb-6 rounded-full bg-white/25 backdrop-blur-md text-white text-xs sm:text-sm font-bold border border-white/40 shadow-xl hover:bg-white/35 transition-all duration-300 cursor-default tracking-wide uppercase">
                {s.subtitle}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] mb-6 sm:mb-8">
                {s.title}
              </h1>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
                <a href="#services" className="btn btn-primary text-center px-8 py-4 text-base sm:text-lg transform hover:scale-105 transition-transform duration-200 shadow-xl">Explore Services</a>
                <a href="/contact" className="btn bg-white/90 backdrop-blur-md text-brandGreen-600 hover:bg-white border-2 border-white/50 text-center px-8 py-4 text-base sm:text-lg transform hover:scale-105 transition-transform duration-200 shadow-xl">Contact Us</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-white w-10 sm:w-12 shadow-xl shadow-white/50' : 'bg-white/40 w-2.5 sm:w-3 hover:bg-white/70 hover:w-8'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
