import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Programs } from '@/components/programs'
import { Impact } from '@/components/impact'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Contact />
      <Footer />
    </>
  )
}
