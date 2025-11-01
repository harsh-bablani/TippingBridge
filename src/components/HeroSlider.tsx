import { useEffect, useState } from 'react'
import carousel1 from '../assets/carousel/027d4e26-02a5-4af6-afc1-82f41e207d03.png'
import carousel2 from '../assets/carousel/434de8a8-025b-4764-aaa2-fcf602f535a3.png'
import carousel3 from '../assets/carousel/9f3b64fc-1475-4e86-89c9-d8ea911371cc.png'
import carousel4 from '../assets/carousel/ee7ffbea-08f2-4d6a-99f2-18e4bcf16c19.png'

interface Slide {
  title: string
  subtitle: string
  image: string
}

const slides: Slide[] = [
  { title: 'Caring for your loved ones, just like family.', subtitle: 'Elderly Care for NRIs', image: carousel1 },
  { title: 'Your property, our priority.', subtitle: 'End‑to‑End Property Management', image: carousel2 },
  { title: 'Legal ease for NRIs, wherever you are.', subtitle: 'Legal & Documentation', image: carousel3 },
  { title: 'Every little task handled back home.', subtitle: 'Concierge & Lifestyle Services', image: carousel4 },
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
    <section className="relative h-[500px] sm:h-[560px] md:h-[640px] lg:h-[700px] overflow-hidden">
      {/* Background carousel images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 to-transparent"></div>
        </div>
      ))}

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandGold/25 rounded-full blur-3xl animate-pulse z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandPink/25 rounded-full blur-3xl animate-pulse z-10" style={{ animationDelay: '1s' }}></div>

      {/* Slide content */}
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-20 sm:pt-24 z-20">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-x-0 px-4 sm:px-6 lg:px-8 flex items-center transition-opacity duration-700 ${i === index ? 'opacity-100 z-30' : 'opacity-0 z-20'}`}
          >
            <div className={`max-w-3xl w-full ${i === index ? 'animate-slide-up' : ''}`}>
              <span className="inline-block px-4 sm:px-5 py-2 mb-5 sm:mb-6 rounded-full bg-brandGreen-600/90 backdrop-blur-md text-white text-xs sm:text-sm font-bold border border-brandGreen-500/40 shadow-xl hover:bg-brandGreen-700/90 transition-all duration-300 cursor-default tracking-wide uppercase">
                {s.subtitle}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)] mb-6 sm:mb-8">
                {s.title.split(' ').map((word, idx) => (
                  <span key={idx} className={idx % 3 === 0 ? 'text-brandBlue-800' : idx % 3 === 1 ? 'text-brandGreen-700' : 'text-brandGold-600'}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
                <a href="#services" className="btn btn-primary text-center px-8 py-4 text-base sm:text-lg transform hover:scale-105 transition-transform duration-200 shadow-xl">Explore Services</a>
                <a href="/contact" className="btn bg-brandBlue-700 text-white hover:bg-brandBlue-800 border-2 border-brandBlue-600 text-center px-8 py-4 text-base sm:text-lg transform hover:scale-105 transition-transform duration-200 shadow-xl">Contact Us</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-40">
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
