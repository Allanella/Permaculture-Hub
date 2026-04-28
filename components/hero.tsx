import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="font-serif font-bold text-5xl md:text-6xl text-foreground leading-tight">
                Empowering Communities Through Sustainable Agriculture
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Permaculture Hub Northern Uganda is a youth-led organization dedicated to transforming communities through climate-smart farming, sustainable agriculture practices, and green entrepreneurship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-accent text-primary-foreground rounded-full px-8 h-12 text-base"
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 rounded-full px-8 h-12 text-base"
              >
                Get Involved
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground">Youth Trained</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Women Empowered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Communities</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260428-WA0016-YgJ9RfxTduCOqB2XqIQX9zKZ3njbGe.jpg"
              alt="Community farming initiative"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
