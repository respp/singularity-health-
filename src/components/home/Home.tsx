import { Button } from 'react-bootstrap';
import './home.css'

export const Home: React.FC = () => {
  return (
    <div className="home">
        <div className='home-content'>
      <h1 className="home-title">We Get Pet Care!</h1>
      <p>For over 17 Years, Fetch! Pet Care Has been a trusted <br />
      partner in keeping pets healthy and happy! </p>

      <div className="options">
      <Button 
        variant="primary" 
        className="rounded-pill" 
        size="lg" 
        style={{ 
          fontFamily: 'Open Sans', // Aplica la fuente Open Sans
          fontWeight: '700', // Usa el peso bold (700)
          fontSize: '.9rem', 
          padding: '0.85rem 2rem', 
          backgroundColor: '#4487FF', 
          borderColor: '#4487FF' 
        }}
      >
        Schedule Service
      </Button>

        {/* <Button className='custom-button'>Schedule Service</Button> */}
        <a href="">Or Call 866.338.2463</a>
      </div>
    </div>
  </div>
  );
};


