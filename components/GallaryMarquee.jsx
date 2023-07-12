import Marquee from "react-fast-marquee"
import image1 from '@/assets/images/Frame1.png'
import Image from 'next/image'


const GallaryMarquee = () => {
  return (
    <div className="images-marquee">
        <Marquee autoFill='true'>
            <Image src={image1} alt='marquee-image'/>
            <Image src={image1} alt='marquee-image'/>
            <Image src={image1} alt='marquee-image' />
            <Image src={image1} alt='marquee-image' />
            <Image src={image1} alt='marquee-image' />
            <Image src={image1} alt='marquee-image' />
        </Marquee>
        <Marquee autoFill='true' direction='right'>
            <Image src={image1} alt='marquee-image'/>
            <Image src={image1} alt='marquee-image'/>
            <Image src={image1} alt='marquee-image' />
            <Image src={image1} alt='marquee-image' />
            <Image src={image1} alt='marquee-image' />
            <Image src={image1} alt='marquee-image' />
        </Marquee>
    </div>
  )
}

export default GallaryMarquee