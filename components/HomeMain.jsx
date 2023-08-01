import { motion } from 'framer-motion'
import React from 'react'
import instagram from '@/assets/images/socialmedia/instagram.png'
import facebook from '@/assets/images/socialmedia/facebook.png'
import Image from 'next/image'
import AnchorLink from "react-anchor-link-smooth-scroll"


const HomeMain = () => {
  return (
    <section id='home' className='section home max-width-container'>
        <nav className='navbar'>
            <p className='logo'>VJ RISHI</p>
            <div className='socialmedia-logos'>
              <a target='_blank' href='https://www.instagram.com/' ><Image src={instagram} alt='instagram'/></a>
              <a target='_blank' href='https://www.facebook.com/' ><Image src={facebook} alt='facebook'/></a>
            </div>
        </nav>
        <motion.div className='greeting-container'
         initial = 'hidden'
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.7}}
                variants={{
                    hidden : {opacity : 0, y: 50},
                    visible : {opacity : 1, y: 0},
                }}>
          <p className='greeting-text'>Let&apos;s make magic together and create
          <span className='highlighted'> unforgettable</span> memories</p>
        </motion.div>
        <motion.div className='greeting-ctas'
          initial="hidden"
           whileInView="visible"
           viewport={{once: true, amount: 0.5}}
           transition={{delay:0.2 ,duration: 0.7}}
           variants={{
               hidden : {opacity : 0, y: 50},
               visible : {opacity : 1, y: 0},
           }}>
            <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLScFKvkrOfUmUwfC2JCifzJrHxPmIU7A1WMrufEuSGJcEfsWPg/viewform' className='cta book-cta'>Book Now</a>
            <AnchorLink href='#stats' className='cta'>Learn More</AnchorLink>
        </motion.div>
    </section>
  )
}

export default HomeMain