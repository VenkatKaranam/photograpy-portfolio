import Marquee from "react-fast-marquee"
import image1 from '@/assets/images/Frame1.png'

const GallaryMarquee = () => {
  return (
    <div className="images-marquee">
        <Marquee autoFill='true'>
            <img src={image1.src} />
            <img src={image1.src} />
            <img src={image1.src} />
            <img src={image1.src} />
            <img src={image1.src} />
            <img src={image1.src} />

        </Marquee>
        <Marquee autoFill='true' direction='right'>
            <img src={image1.src} />
            <img src={image1.src} />
            <img src={image1.src} />
            <img src={image1.src} />
            <img src={image1.src} />
            <img src={image1.src} />
            <img src={image1.src} />
            <img src={image1.src} />
        </Marquee>
    </div>
  )
}

export default GallaryMarquee