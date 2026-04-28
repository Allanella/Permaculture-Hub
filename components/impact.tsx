'use client';

export function Impact() {
  const images = [
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0014-Kc1033ALnuPCwyPxWfK07yb6PKlvuZ.jpg',
      alt: 'Community tree-planting training session',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0011-T3KbpeD1La2rdURJQD6PnOG9Y5fsxH.jpg',
      alt: 'Youth training in sustainable farming practices',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0018-6o2s9uaxZTVR0bxyoPsKHuOfK8PaB6.jpg',
      alt: 'Mushroom farming enterprise',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0020-rX0wSby5Pq8D5rLzWbkQfqEgMfj9kb.jpg',
      alt: 'Tomato harvest from household gardens',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0019-cxZcMnayguxuwYdpNtWzJi50LA4T81.jpg',
      alt: 'Youth harvesting in sustainable gardens',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0032-7SHa4wH5udhJESLjzuZ2io83hDmZm1.jpg',
      alt: 'Women entrepreneurs with sewing machines',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0023-kr2Ba1SrLiGJAgA3gamXDK4mX8JRfD.jpg',
      alt: 'Okra harvest from sustainable farming',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0030-y398eVuoDTrcQwMrCnCMVinG1bCVlx.jpg',
      alt: 'Mushroom farming success story',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0029-bxJlKikQb8GWiEepHBBKhlSPv8n5uH.jpg',
      alt: 'Community women group with bio-products',
    },
  ];

  const metrics = [
    {
      value: '200+',
      label: 'Youth Trained',
      description: 'In sustainable agriculture practices',
    },
    {
      value: '150+',
      label: 'Women Empowered',
      description: 'Through skills and business support',
    },
    {
      value: '50+',
      label: 'Communities Reached',
      description: 'Across Northern Uganda',
    },
    {
      value: '500+',
      label: 'Hectares Impacted',
      description: 'Through sustainable farming',
    },
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Impact Metrics */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-primary/5 border border-primary/10 rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
              >
                <p className="font-serif font-bold text-4xl text-primary mb-2">{metric.value}</p>
                <p className="font-semibold text-foreground text-sm mb-1">{metric.label}</p>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="font-serif font-bold text-3xl text-foreground mb-8 text-center">
            Community in Action
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="font-serif font-bold text-2xl text-foreground mb-3">Join Our Movement</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Together, we're building a sustainable future for Northern Uganda. Whether through
            volunteering, partnerships, or donations, your support helps us transform lives and
            communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-full font-semibold transition-colors"
              onClick={() =>
                window.open(
                  'mailto:bnakafeero14@gmail.com?subject=Partnership Inquiry - Permaculture Hub'
                )
              }
            >
              Become a Partner
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
