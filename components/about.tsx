export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-xl overflow-hidden order-2 md:order-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0023-kr2Ba1SrLiGJAgA3gamXDK4mX8JRfD.jpg"
              alt="Fresh vegetable harvest"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower youth and women in Northern Uganda with sustainable agriculture knowledge, climate-smart farming techniques, and green entrepreneurship skills that transform livelihoods and protect the environment.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif font-bold text-2xl text-foreground">
                Our Vision
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                A thriving Northern Uganda where communities practice regenerative agriculture, build resilient food systems, and create sustainable green enterprises that benefit current and future generations.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="font-serif font-bold text-xl text-foreground mb-4">
                Our Values
              </h3>
              <ul className="space-y-3">
                {[
                  'Sustainability & Environmental Stewardship',
                  'Youth Leadership & Empowerment',
                  'Community Collaboration',
                  'Innovation in Agriculture',
                  'Gender Equality',
                ].map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
