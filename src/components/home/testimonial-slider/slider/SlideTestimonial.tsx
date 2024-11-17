import { useState } from 'react'
import './slide-testimonial.css'
import { TestimonialCard } from './TestimonialCard'

export interface Testimonial {
  id: number
  name: string
  image: string
  quote: string
  cardType: 'red' | 'blue'
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Kenned Dsouza',
    image: '/images/card-red.webp',
    quote: 'I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing',
    cardType: 'red'
  },
  {
    id: 2,
    name: 'Kenned Dsouza',
    image: '/images/card-blue.webp',
    quote: 'I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing',
    cardType: 'blue'
  },
  {
    id: 3,
    name: 'Kenned Dsouza',
    image: '/images/card-red.webp',
    quote: 'I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing',
    cardType: 'red'
  },
]

export const SlideTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(1)

  // Funciones de navegación con bucle infinito
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className="container-slider">
      <button onClick={handlePrevious} className="navigation-button left-arrow">
        <h2 className='arrow'>←</h2>
      </button>

      <div className="cards-container">
        {testimonials.map((testimonial, index) => {
          // Ajuste para calcular la posición relativa con un bucle infinito
          const position = (index - currentIndex + testimonials.length) % testimonials.length - 1;
          return <TestimonialCard key={testimonial.id} testimonial={testimonial} position={position} />
        })}
      </div>

      <button onClick={handleNext} className="navigation-button right-arrow">
        <h2 className='arrow'>→</h2>
      </button>
    </div>
  )
}
