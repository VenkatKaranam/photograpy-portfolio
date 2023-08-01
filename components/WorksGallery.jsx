import { worksgallery } from "@/shared/works"
import { motion } from "framer-motion";
import { useEffect, useState } from "react"
import Image from "next/image";
import ModalImage from "react-modal-image";


const WorksGallery = ({tab}) => {
  const [isOpen,setIsOpen] = useState(true);
  const [images,setImages] = useState(worksgallery[`baby_shoot`]);
  useEffect(()=>{
    setIsOpen(false);
    setTimeout(() => {setIsOpen(true); setImages(worksgallery[tab]) }, 500);
  },[tab])
  return (
    <motion.div 
    initial="hidden"
    whileInView= {isOpen ? "visible" : "hidden"}
    viewport={{once: true, amount: 0.2}}
    transition={{delay:0 ,duration: 0.7}}
    variants={{
        hidden : {opacity : 0, y: 50},
        visible : {opacity : 1, y: 0},
    }}
    className="works-gallery">
      <div className="works-grid">{
      images.map((item,key)=>(
        <ModalImage key={key} small={item.src} large={item.src} className="works-image" alt='works'/>
      ))}
      </div>
    </motion.div>
  )
}

export default WorksGallery