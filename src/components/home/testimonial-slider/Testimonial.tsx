import './testimonial.css'
import { SlideTestimonial } from './slider/SlideTestimonial'

export const TestimonialSlider = () => {
  return (
    <section className="testimonial-section">
      <h2>Here's what pet owners have to <br /> say about Fetch! Pet Care...</h2>

      {/* <Slider /> */}
      <SlideTestimonial />
    </section>
  )
}
