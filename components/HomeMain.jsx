import { motion } from 'framer-motion'
import React from 'react'
import instagram from '@/assets/images/socialmedia/instagram.png'
import facebook from '@/assets/images/socialmedia/facebook.png'
import Image from 'next/image'

const HomeMain = () => {
  return (
    <section id='home' className='home max-width-container'>
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
          <p className='greeting-text'>Let's make magic together and create
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
            <button className='cta book-cta'>Book Now</button>
            <button className='cta'>Learn More</button>
        </motion.div>
    </section>
  )
}

export default HomeMain