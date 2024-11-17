import Carousel from 'react-bootstrap/Carousel';
import './slider.css'

export const Slider =()=> {
  return (
    <Carousel 
        style={{ width: '80%', maxWidth: '600px', margin: '0 auto' }} 
        interval={null} 
        pause="hover"
    >
    {/* first slide */}
      <Carousel.Item>
        <img src='/images/card-blue.webp' alt='first slide' className='carrousel-card' />
        <Carousel.Caption>
          <h3>Kenned Dsouza</h3>
          <p>" I like that I got to meet the dog Walker who is walking 
            my dog daily and consult with her. I also appreciate the
             daily communication I get about the dog
              and how my dog is doing"</p>
        </Carousel.Caption>
      </Carousel.Item>


    {/* second slide */}
      <Carousel.Item>
        <img src='/images/card-red.webp' alt='second slide' className='carrousel-card' />
        <Carousel.Caption>
        <h3>Kenned Dsouza</h3>
          <p>" I like that I got to meet the dog Walker who is walking 
            my dog daily and consult with her. I also appreciate the
             daily communication I get about the dog
              and how my dog is doing"</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}