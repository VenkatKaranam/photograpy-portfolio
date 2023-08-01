import Marquee from "react-fast-marquee"
import image1 from '@/assets/images/Marquee_images/1.jpg'
import image2 from '@/assets/images/Marquee_images/2.jpg'
import image3 from '@/assets/images/Marquee_images/3.jpg'
import image4 from '@/assets/images/Marquee_images/4.jpg'
import image5 from '@/assets/images/Marquee_images/5.jpg'
import image6 from '@/assets/images/Marquee_images/6.jpg'
import image7 from '@/assets/images/Marquee_images/7.jpg'
import image8 from '@/assets/images/Marquee_images/8.jpg'
import image9 from '@/assets/images/Marquee_images/9.jpg'
import image10 from '@/assets/images/Marquee_images/10.jpg'
import image11 from '@/assets/images/Marquee_images/11.jpg'
import image12 from '@/assets/images/Marquee_images/12.jpg'
import image13 from '@/assets/images/Marquee_images/13.jpg'
import image14 from '@/assets/images/Marquee_images/14.jpg'

import Image from 'next/image'


const GallaryMarquee = () => {
  return (
    <div className="images-marquee">
        <Marquee autoFill='true'>
            <Image src={image1} alt='marquee-image'/>
            <Image src={image2} alt='marquee-image'/>
            <Image src={image3} alt='marquee-image' />
            <Image src={image4} alt='marquee-image' />
            <Image src={image5} alt='marquee-image' />
            <Image src={image6} alt='marquee-image' />
            <Image src={image7} alt='marquee-image' />
        </Marquee>
        <Marquee autoFill='true' direction='right'>
        <Image src={image1} alt='marquee-image'/>
            <Image src={image8} alt='marquee-image'/>
            <Image src={image9} alt='marquee-image' />
            <Image src={image10} alt='marquee-image' />
            <Image src={image11} alt='marquee-image' />
            <Image src={image12} alt='marquee-image' />
            <Image src={image13} alt='marquee-image' />
            <Image src={image14} alt='marquee-image' />
        </Marquee>
    </div>
  )
}

export default GallaryMarquee