import { motion } from "framer-motion"


const Stats = () => {
    const stats = [
        {
            name: 'Marriage Shoots',
            value: '70+',
        },
        {
            name: 'Baby Shoots',
            value: '45+',
        },
        {
            name: 'Maternity shoots',
            value: '25+',
        },
        {
            name: 'Birthday Shoots',
            value: '25+',
        }
    ]
    const container = {
        hidden : {},
        visible : {
            transition : {staggerChildren : 0.2}
        }
    }
    const childVariant = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {opacity:1, scale: 1}
     }
  return (
    <section className="max-width-container">   
    <motion.div
    className="stats"
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.5}}
    variants={container}
    >
        {stats && (
            stats.map((item,key) => (
                <motion.div variants={childVariant} key={key} className='stats-block'>
                <p className='stats-number'>{item.value}</p>
                <p className='stats-text'>{item.name}</p>
            </motion.div>
            ))
        )}
    </motion.div>
    </section>
  )
}

export default Stats