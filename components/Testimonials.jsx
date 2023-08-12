import { testimonialsData } from "@/shared/testimonialsData"
const Testimonials = () => {
  return (
    <div className='section testimonials max-width-container'>
        <p className='section-heading'> What our customers say about us </p>
        <div className='testimonials-container'>
            {testimonialsData && (
                testimonialsData.map((item,key)=>(
                    <div key={key} className='testimonial-block'>
                    <p className='review'>
                        {item.review}
                    </p>
                    <p className="name">{item.name}</p>
                </div>
                ))
            )}
        </div>

    </div>
  )
}

export default Testimonials