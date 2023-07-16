import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import GallaryMarquee from '@/components/GallaryMarquee'
import HomeMain from '@/components/HomeMain'
import Intro from '@/components/Intro'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Teasers from '@/components/Teasers'
import Testimonials from '@/components/Testimonials'
import Works from '@/components/Works'
import { useState,useEffect } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black text-white">
      {isLoading ?
      <Intro/>
      :
      <div>
      <HomeMain/>
      <GallaryMarquee/>
      <Stats/>
      <Services/>
      <Works/>
      <Teasers/>
      <Testimonials/>
      <Contact/>
      <Footer/> 
      </div>
      }
    </main>
  )
}
