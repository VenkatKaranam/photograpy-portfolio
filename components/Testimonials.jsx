import { testimonialsData } from "@/shared/testimonialsData"
const Testimonials = () => {
  return (
    <div className='testimonials max-width-container'>
        <p className='section-heading'> What our customers say about us </p>
        <div className='testimonials-container'>
            {testimonialsData && (
                testimonialsData.map((item,key)=>(
                    <div key={key} className='testimonial-block'>
                    <p className='review'>
                        {item.review}
                    </p>
                    <p className="name">{item.name}</p>
                    <p className="designation">{item.designation}</p>
                </div>
                ))
            )}
        </div>

    </div>
  )
}

export default Testimonials