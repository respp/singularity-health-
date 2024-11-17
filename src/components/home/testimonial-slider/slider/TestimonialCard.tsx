import './slide-testimonial.css'
import { Testimonial } from './SlideTestimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
  position: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, position }) => {
    return (
        <div
        key={testimonial.id}
        className={`card ${testimonial.cardType}`}
        style={{
          transform: `translateX(${position * 0}%) scale(${position === 0 ? 1.2 : 0.9})`,  // Ajusta la distancia y escala
          zIndex: position === 0 ? 2 : 1,
          opacity: Math.abs(position) > 1 ? 0 : 1,
          backgroundImage: `url(${testimonial.image})`, 
          backgroundSize: 'auto', 
          backgroundPosition: 'center', // Centra la imagen
          backgroundRepeat: 'no-repeat', // No repetir la imagen
        }}
      >
          <div className="profile-image-container">
            <img
              src='images/profile.png'
              className="profile"
              alt="Kenned Dsouza avatar"
            />
          </div>

          <h3 className="name">{testimonial.name}</h3>
          <p>&quot;{testimonial.quote}&quot;</p>
        </div>
      )
};
