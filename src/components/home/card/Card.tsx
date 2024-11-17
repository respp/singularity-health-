import './card.css'

interface CardsProps {
  image: string;
  description: string;
  alt: string;
}

export const Card = ({ image, description, alt }: CardsProps) => {
  return (
    <div className='card-white'>
        <img src={image} alt={alt} />
        <p>{description}</p>
    </div>
  )
}
