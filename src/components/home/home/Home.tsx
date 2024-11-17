import { Button } from 'react-bootstrap';
import './home.css'
import { useSelector } from 'react-redux';


export const Home: React.FC = () => {
  const homeText = useSelector((state: any) => state.homeText.text);
  console.log({homeText})

  return (
    <div className="home">
        <div className='home-content'>
      <h1 className="home-title">We Get Pet Care!</h1>
        <p>{homeText}</p>
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


