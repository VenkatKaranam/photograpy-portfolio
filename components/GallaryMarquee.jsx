import Marquee from "react-fast-marquee"
import image1 from '@/assets/images/Marquee_images/1.png'
import image2 from '@/assets/images/Marquee_images/2.png'
import image3 from '@/assets/images/Marquee_images/3.png'
import image4 from '@/assets/images/Marquee_images/4.png'
import image5 from '@/assets/images/Marquee_images/5.png'
import image6 from '@/assets/images/Marquee_images/6.png'
import image7 from '@/assets/images/Marquee_images/7.png'
import image8 from '@/assets/images/Marquee_images/8.png'
import image9 from '@/assets/images/Marquee_images/9.png'
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
            <Image src={image8} alt='marquee-image' />
            <Image src={image9} alt='marquee-image' />
        </Marquee>
        <Marquee autoFill='true' direction='right'>
        <Image src={image1} alt='marquee-image'/>
            <Image src={image2} alt='marquee-image'/>
            <Image src={image3} alt='marquee-image' />
            <Image src={image4} alt='marquee-image' />
            <Image src={image5} alt='marquee-image' />
            <Image src={image6} alt='marquee-image' />
            <Image src={image7} alt='marquee-image' />
            <Image src={image8} alt='marquee-image' />
            <Image src={image9} alt='marquee-image' />
        </Marquee>
    </div>
  )
}

export default GallaryMarquee