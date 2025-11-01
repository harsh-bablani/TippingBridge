import { useState } from 'react'
import propertyImg from '../assets/propertymanagement.png'
import elderlyImg from '../assets/elderlycare.png'
import legalImg from '../assets/legalservices.png'
import conciergeImg from '../assets/nri.png'
import investImg from '../assets/mainnrispropertymanagement.png'

interface Service {
  title: string
  subtitle: string
  description: string
  img: string
  gradient: string
  icon: string
  textColor: string
  iconColor: string
  features: {
    title: string
    items: string[]
  }[]
  benefits?: string[]
}

const services: Service[] = [
  {
    title: 'Property Management',
    subtitle: 'Your Property, Our Priority',
    description: 'Complete end-to-end property management services ensuring your investment is well-maintained, profitable, and stress-free.',
    img: propertyImg,
    gradient: 'from-brandGreen-500 to-brandGreen-700',
    icon: '🏠',
    textColor: 'brandGreen',
    iconColor: 'brandGreen',
    features: [
      {
        title: 'Rent Collection & Deposit',
        items: [
          'Monthly rent collection with instant bank deposits',
          'Scanned cheques and deposit slips emailed for your NRI tax records',
          'Property tax payments made on your behalf – never miss a deadline',
          'Lease renewal reminders sent to both landlord and tenant',
          'Rent escalations, security deposits, advance payments, and TDS deductions managed seamlessly',
          'Periodic property inspections plus tenant dispute resolution'
        ]
      },
      {
        title: 'Possession Assistance',
        items: [
          'Gather property details and outstanding dues',
          'Manage payments, stamp duty, and legal documentation',
          'Complete possession formalities on your behalf – no travel required',
          'Deliver final documents (sale deed, possession letter, etc.) securely to you',
          '24/7 NRI support via phone, email, or WhatsApp',
          'Experienced legal experts handling registry, mutation, and encumbrance clearance'
        ]
      },
      {
        title: 'Keys & Property Management',
        items: [
          'Biometric-safe storage with controlled access logs',
          'Coordinated property visits only with your prior approval',
          'On-demand photos/videos delivered within 48 hours',
          'Dedicated support team for instant updates and emergency handling'
        ]
      },
      {
        title: 'Property Maintenance',
        items: [
          '200-point inspection checklist conducted regularly',
          'Comprehensive repair reports with photos and cost breakdowns',
          'Handpicked, vetted vendors with supervised execution',
          'Final repair summary submitted to you for approval and records',
          'From plumbing leaks and electrical fixes to painting and pest control'
        ]
      },
      {
        title: 'Tenancy Management',
        items: [
          'Tenant onboarding, background verification, and agreement drafting',
          'Eviction coordination (if needed) with legal compliance',
          'Rent collection, cheque bounces, and expense tracking',
          'Monthly property condition checks and tenant compliance monitoring',
          'Complete check-in/check-out documentation with inventory and photos'
        ]
      },
      {
        title: 'Property Marketing',
        items: [
          'Professional photoshoots and 4K video walkthroughs',
          'Branded brochures and SEO-optimized digital listings',
          'Targeted ads on Facebook, Instagram, 99acres, MagicBricks, and Google',
          'Luxury mailers to corporate HRs and relocation agents',
          'Dedicated property microsite for premium showcasing'
        ]
      }
    ],
    benefits: [
      'Shorter vacancies. Higher rents. Stronger returns.',
      'Zero delays – we coordinate with builders, societies, and authorities.',
      'Full transparency with real-time updates and digital documentation.'
    ]
  },
  {
    title: 'Long and Short Service Apartments',
    subtitle: 'Your Home Away from Home',
    description: 'Whether you are traveling for work, reuniting with family, relocating, or planning a long vacation, Tipping Bridge Homes offers comfortable, fully furnished serviced apartments in prime locations.',
    img: conciergeImg,
    gradient: 'from-brandBlue-500 to-brandBlue-700',
    icon: '🏡',
    textColor: 'brandBlue',
    iconColor: 'brandBlue',
    features: [
      {
        title: 'Why Choose Tipping Bridge Homes',
        items: [
          'Fully furnished & spacious apartments equipped with kitchen, furniture, and modern amenities',
          'Prime locations close to grocery stores, shopping, entertainment, and pharmacies',
          'Cost-effective stays with attractive packages and special discounts for extended stays',
          'Home comforts: enjoy Wi-Fi, laundry, fitness rooms, and essential utilities',
          'Flexible bookings: choose your move-in and move-out dates with ease',
          'Work-friendly: high-speed internet and dedicated workspace for professionals',
          'Trusted support: 24/7 assistance and verified properties for a worry-free stay'
        ]
      }
    ]
  },
  {
    title: 'Elderly Care',
    subtitle: 'Compassionate Care for Your Loved Ones',
    description: 'Comprehensive care services ensuring your elderly family members receive the best support while you\'re away.',
    img: elderlyImg,
    gradient: 'from-brandPink-500 to-brandPink-700',
    icon: '❤️',
    textColor: 'brandPink',
    iconColor: 'brandPink',
    features: [
      {
        title: 'Health & Fitness',
        items: [
          'Tele-consultations and home doctor visits',
          'Sample collection and medicine delivery',
          'Nurse and medical attendant support',
          'Hospitalization and emergency assistance',
          'Medical equipment rental and physiotherapy',
          'Dietician consultations and customized meal plans',
          'Fitness coaches and wellness tracking'
        ]
      },
      {
        title: 'Filing & Forms',
        items: [
          'Income tax return filing',
          'Banking and legal documentation',
          'Aadhar Card, Voter ID, and Senior Citizen Card',
          'General form submissions and verifications'
        ]
      },
      {
        title: 'Technology & Troubleshooting',
        items: [
          'Virtual meetings (Zoom, Google Meet)',
          'Social media and app setup (Facebook, WhatsApp, Netflix, Uber, etc.)',
          'Hardware troubleshooting and repairs',
          'Personalized tech tutorials (online or in-person)'
        ]
      },
      {
        title: 'Memories & Milestones',
        items: [
          'Event planning and personalized gifting',
          'Floral arrangements and décor',
          'Home salon and spa services',
          'Family photoshoots and experiences',
          'Religious ceremonies and Pooja services',
          'Movie, theatre, and runner services'
        ]
      }
    ]
  },
  {
    title: 'Investments & Insurance',
    subtitle: 'Secure Your Future',
    description: 'Comprehensive financial guidance and insurance solutions tailored for NRIs.',
    img: investImg,
    gradient: 'from-brandGold-500 to-brandGold-700',
    icon: '💰',
    textColor: 'brandGold',
    iconColor: 'brandGold',
    features: [
      {
        title: 'Insurance Services',
        items: [
          'Term Life Insurance: Pure life cover essential for any earning member with dependents',
          'Motor & Auto Insurance: Comprehensive protection with on-road assistance',
          'Health Insurance: Tailor-made plans protecting your and your family\'s health',
          'Home Insurance: Safeguards your home and belongings against unexpected events'
        ]
      },
      {
        title: 'Mutual Funds & Wealth Advisory',
        items: [
          'Unbiased, goal-based financial guidance',
          'Direct Mutual Funds, Stocks, ETFs, Bonds, and more',
          'Comprehensive financial planning tailored to your goals and risk appetite',
          'Strategic portfolio balance across multiple asset classes',
          'Continuous performance tracking and timely rebalancing'
        ]
      },
      {
        title: 'Real Estate Advisory',
        items: [
          'Deep market knowledge and insights into India\'s property sector',
          'Awareness of government development plans and growth corridors',
          'Transparent, unbiased, and expert advisory for property investments',
          'End-to-end support including formalities, due diligence, and negotiations'
        ]
      }
    ],
    benefits: [
      'Expected growth of 12–15% CAGR in Indian real estate',
      'Plans can extend up to 30–40 years with locked premiums',
      'All services compliant with IRDA regulations'
    ]
  },
  {
    title: 'Legal & Documentation',
    subtitle: 'Simplifying Paperwork',
    description: 'Expert assistance with all legal and documentation needs for NRIs in India.',
    img: legalImg,
    gradient: 'from-brandGreen-500 to-brandBlue-600',
    icon: '📋',
    textColor: 'brandGreen',
    iconColor: 'brandBlue',
    features: [
      {
        title: 'Document Procurement',
        items: [
          'Birth Certificate',
          'Syllabus Copy',
          'Marriage Certificate',
          'Changes and non-Availability of Birth Certificate',
          'Degree Certificate',
          'Death Certificate',
          'Marksheet / Transcription',
          'Reference Letters'
        ]
      },
      {
        title: 'Legal & Financial Services',
        items: [
          'PAN Card Application and Submission',
          'Attending to IT Notice Tax Authority visits',
          'Life Insurance / General Insurance and Mediclaim claim follow ups',
          'Loan Syndicate Follow-up',
          'Arranging Lawyers opinion and Legal Matter experts advise',
          'Financial Taxation and Legal Advice',
          'Filling IT Returns',
          'Legalisation / Notarisation / Attestation of Documents court visits',
          'Hidden Wealth Facilitation'
        ]
      }
    ]
  },
  {
    title: 'Healthcare Services',
    subtitle: 'Trusted Medical Support',
    description: 'Professional healthcare coordination ensuring you and your loved ones receive the best medical care.',
    img: elderlyImg,
    gradient: 'from-brandPink-500 to-brandBlue-600',
    icon: '🏥',
    textColor: 'brandPink',
    iconColor: 'brandBlue',
    features: [
      {
        title: 'Doctor & Hospitalization Support',
        items: [
          'Doctor appointments and specialist consultations',
          'Hospitalization assistance and coordination',
          'Emergency medical support',
          'Sample collection and medicine delivery',
          'Insurance claim processing',
          'Medical records management'
        ]
      }
    ],
    benefits: [
      'Eliminate the stress of scheduling and coordination',
      'Focus on your health while we handle the rest',
      'Trusted healthcare services in India'
    ]
  },
  {
    title: 'Small Events & Gatherings',
    subtitle: 'Celebrate Every Moment',
    description: 'End-to-end event planning and management for family gatherings and special occasions.',
    img: conciergeImg,
    gradient: 'from-brandGold-500 to-brandPink-600',
    icon: '🎉',
    textColor: 'brandGold',
    iconColor: 'brandPink',
    features: [
      {
        title: 'Our Event Services',
        items: [
          'Venue Selection: Choose the perfect venue for your event',
          'Catering Services: Coordinate with trusted caterers to design menus',
          'Decoration & Setup: Elegant floral décor to contemporary themed setups',
          'Transportation & Accommodation: Airport transfers and hotel stays',
          'Event planning from abroad made effortless',
          'Personalized planning to suit your style and budget',
          'Reliable vendor network across India'
        ]
      }
    ],
    benefits: [
      'End-to-end event management',
      'Dedicated coordination for NRIs',
      'Complete transparency and care'
    ]
  }
]

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  // Color mapping for dynamic styling
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { text800: string; text600: string; gradient500: string; gradient600: string; shadow: string; bg50: string }> = {
      brandGreen: {
        text800: 'text-brandGreen-800',
        text600: 'text-brandGreen-600',
        gradient500: 'from-brandGreen-500',
        gradient600: 'to-brandGreen-600',
        shadow: 'shadow-brandGreen/50',
        bg50: 'from-brandGreen-50/80'
      },
      brandBlue: {
        text800: 'text-brandBlue-800',
        text600: 'text-brandBlue-600',
        gradient500: 'from-brandBlue-500',
        gradient600: 'to-brandBlue-600',
        shadow: 'shadow-brandBlue/50',
        bg50: 'from-brandBlue-50/80'
      },
      brandPink: {
        text800: 'text-brandPink-800',
        text600: 'text-brandPink-600',
        gradient500: 'from-brandPink-500',
        gradient600: 'to-brandPink-600',
        shadow: 'shadow-brandPink/50',
        bg50: 'from-brandPink-50/80'
      },
      brandGold: {
        text800: 'text-brandGold-800',
        text600: 'text-brandGold-600',
        gradient500: 'from-brandGold-500',
        gradient600: 'to-brandGold-600',
        shadow: 'shadow-brandGold/50',
        bg50: 'from-brandGold-50/80'
      }
    }
    return colorMap[color] || colorMap.brandGreen
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brandCream to-white">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-brandGreen-500 via-brandGreen-600 to-brandBlue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight">
            Our Comprehensive Services
          </h1>
          <p className="text-xl sm:text-2xl text-brandCream/90 text-center max-w-3xl mx-auto">
            Everything you need for seamless NRI life management in India
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brandGold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandPink/20 rounded-full blur-3xl"></div>
      </div>

      {/* Services List */}
      <div className="section-padding bg-gradient-to-b from-white to-brandCream/20">
        <div className="container max-w-6xl">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="premium-card group rounded-3xl overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div
                  className={`relative bg-gradient-to-br ${service.gradient} p-8 md:p-12 text-white cursor-pointer`}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="text-6xl md:text-7xl animate-bounce-slow icon-glow">{service.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-4xl font-bold mb-3">{service.title}</h2>
                      <p className="text-xl md:text-2xl mb-2 text-white/90">{service.subtitle}</p>
                      <p className="text-lg text-white/80 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="text-4xl font-bold transition-transform duration-300 transform hover:scale-125">
                      {expandedService === index ? '−' : '+'}
                    </div>
                  </div>
                  {/* Decorative blur */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-500"></div>
                </div>

                {/* Expanded Content */}
                {expandedService === index && (() => {
                  const colors = getColorClasses(service.textColor)
                  return (
                    <div className="p-8 md:p-12 space-y-8 animate-slide-up">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                          <h3 className={`text-2xl font-bold ${colors.text800} mb-4 flex items-center`}>
                            <span className={`w-4 h-4 bg-gradient-to-br ${colors.gradient500} ${colors.gradient600} rounded-full mr-3 animate-glow shadow-lg ${colors.shadow}`}></span>
                            {feature.title}
                          </h3>
                          <ul className="space-y-3">
                            {feature.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start text-gray-700 group/item">
                                <span className={`${colors.text600} mr-3 mt-1 flex-shrink-0 text-lg group-hover/item:scale-125 transition-transform duration-200 font-bold`}>✓</span>
                                <span className="leading-relaxed text-base">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {service.benefits && (
                        <div className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${colors.bg50} to-brandBlue-50/80`}>
                          <h3 className={`text-2xl font-bold ${colors.text800} mb-4`}>Benefits</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className={`flex items-start ${colors.text800} font-medium group/item`}>
                                <span className="text-brandGold-500 mr-3 mt-1 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300">⭐</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })()}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 relative bg-gradient-to-br from-brandGreen-600 via-brandGreen-700 to-brandBlue-700 rounded-3xl p-10 md:p-14 text-white text-center shadow-2xl animate-scale-in overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandGold/20 rounded-full blur-3xl"></div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to Simplify Your NRI Life?</h3>
            <p className="text-xl md:text-2xl mb-8 text-white/95 relative z-10">Contact us today and experience the peace of mind you deserve</p>
            <a href="/contact" className="btn bg-white text-brandGold-700 hover:bg-brandCream border-2 border-white/50 relative z-10 px-10 py-4 text-lg inline-block font-bold">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  )
}
