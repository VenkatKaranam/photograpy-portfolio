import { motion } from "framer-motion"

const Intro = () => {
  return (
    <div className='intro flex justify-center items-center h-screen flex-col'>
        <motion.p 
        className="intro-name"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.7}}
                        variants={{
                    hidden : {opacity : 0, y: 50},
                    visible : {opacity : 1, y: 0},
                }}
        >VJ RISHI</motion.p>
        <motion.p 
        className="intro-tagline"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay:0.5,duration: 0.7}}
                        variants={{
                    hidden : {opacity : 0, y: 50},
                    visible : {opacity : 1, y: 0},
                }}
        >Emotions through Photos</motion.p>
    </div>
  )
}

export default Intro