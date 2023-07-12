import Marquee from "react-fast-marquee"
import image1 from '@/assets/images/Frame1.png'
import Image from 'next/image'


const GallaryMarquee = () => {
  return (
    <div className="images-marquee">
        <Marquee autoFill='true'>
            <Image src={image1} />
            <Image src={image1} />
            <Image src={image1} />
            <Image src={image1} />
            <Image src={image1} />
            <Image src={image1} />

        </Marquee>
        <Marquee autoFill='true' direction='right'>
            <Image src={image1} />
            <Image src={image1} />
            <Image src={image1} />
            <Image src={image1} />
            <Image src={image1} />
            <Image src={image1} />
        </Marquee>
    </div>
  )
}

export default GallaryMarquee