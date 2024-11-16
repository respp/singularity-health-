import { FormSearch } from "../common/FormSearch"
import { Card } from "./Card"
import './our-services.css'

export const OurServices = () => {
  return (
    <div className="section-our-service">
        <div className="our-services-content">
            <h2>Our Services</h2>
            <p>National Brand With a Local Feel.<br /> Experience the Fetch! Difference</p>
            <h3>Enter Your Location and Fetch Our Services</h3>
            <FormSearch 
              content="Zip Code" 
              style={{ width: '170px', padding: '10px', fontSize: '18px' }} 
            />
        </div>
        <div className="services-cards">
          <Card image="/images/dog.png" alt="perro feliz" description="Dog Walking" />
          <Card image="/images/cat.png" alt="perro feliz" description="Pet Sitting" />
          <Card image="/images/house.png" alt="perro feliz" description="Overnight Care" />
          <Card image="/images/huella.png" alt="perro feliz" description="Other Services" />
        </div>
    </div>
  )
}
