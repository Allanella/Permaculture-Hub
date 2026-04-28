'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const programs = [
  {
    title: 'Youth Agriculture Training',
    description: 'Comprehensive training in sustainable farming practices, soil health, water management, and climate-smart agriculture techniques.',
    details: 'Our flagship program trains youth aged 18-35 on best practices in permaculture, organic farming, and eco-friendly techniques that improve yields while protecting the environment.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA00160001-WOnmgNMCSCe41JKHX6a8xgbpv5BdxH.jpg',
  },
  {
    title: 'Women Empowerment Initiative',
    description: 'Skills development, financial literacy, and support for women-led agricultural enterprises and household gardens.',
    details: 'We empower over 150 women through training in kitchen gardening, vegetable production, mushroom farming, and small-scale agribusiness to improve food security and household income.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0020-rX0wSby5Pq8D5rLzWbkQfqEgMfj9kb.jpg',
  },
  {
    title: 'School Clubs & Youth Groups',
    description: 'Educational programs in schools and communities promoting sustainable agriculture and environmental awareness.',
    details: 'We establish clubs in schools where young people learn practical farming skills, tree planting, environmental conservation, and become green ambassadors in their communities.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0017-STuShu49QnPKa6Xx2jarxDpIFO8NM1.jpg',
  },
  {
    title: 'Green Entrepreneurship',
    description: 'Business development support for sustainable agricultural enterprises and value addition projects.',
    details: 'We support youth in starting and scaling green businesses like mushroom farming, beekeeping, vegetable production, and agricultural input supply shops that create jobs and income.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0030-y398eVuoDTrcQwMrCnCMVinG1bCVlx.jpg',
  },
]

export function Programs() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We implement integrated programs that build sustainable livelihoods and protect the environment across Northern Uganda.
          </p>
        </div>

        <div className="space-y-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                className="w-full px-6 py-5 flex items-start justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="text-left flex-1">
                  <h3 className="font-serif font-bold text-xl text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {program.description}
                  </p>
                </div>
                <div
                  className={`ml-4 mt-1 transition-transform flex-shrink-0 ${
                    expandedId === index ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown className="text-primary" size={24} />
                </div>
              </button>

              {expandedId === index && (
                <div className="border-t border-border px-6 py-4 bg-background">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-foreground leading-relaxed mb-4">
                        {program.details}
                      </p>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm font-semibold text-primary mb-2">
                          Key Focus Areas
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Practical skill development</li>
                          <li>• Market linkage support</li>
                          <li>• Mentorship & guidance</li>
                          <li>• Community engagement</li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
