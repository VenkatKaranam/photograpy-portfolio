import image1 from '@/assets/images/Frame1.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      name: 'Wedding Photography',
      image: image1,
    },
    {
      name: 'Wedding Photography',
      image: image1,
    },
    {
      name: 'Wedding Photography',
      image: image1,
    },
    {
      name: 'Wedding Photography',
      image: image1,
    }
  ]

  const container = {
    hidden : {},
    visible : {
        transition : {staggerChildren : 0.1}
    }
}
const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity:1, scale: 1}
 }
  return (
    <div className='services max-width-container'>
        <motion.div 
        className='service-header'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={{
            hidden : {opacity : 0, y: 50},
            visible : {opacity : 1, y: 0},
        }}
        >
        <p className='pre-heading'>
            Our Services
        </p>
        <p className='section-heading'>Where every <span className='highlighted'>picture </span> tells a story</p>
        </motion.div>
        <motion.div 
        className='services-container'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}>
          {services && (
            services.map((item,key)=>(
              <motion.div className='service' key={key} variants={childVariant}>
              <Image src={item.image} alt='services'/>
              <p>{item.name}</p>
            </motion.div>
            ))
          )}
        </motion.div>
       
    </div>
  )
}

export default Services