import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import GallaryMarquee from '@/components/GallaryMarquee'
import HomeMain from '@/components/HomeMain'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Teasers from '@/components/Teasers'
import Testimonials from '@/components/Testimonials'
import Works from '@/components/Works'

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HomeMain/>
      <GallaryMarquee/>
      <Stats/>
      <Services/>
      <Works/>
      <Teasers/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  )
}
