import { FormSearch } from "../../common/form-search/FormSearch"
import { Card } from "../card/Card"
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
              style={{ width: '180px', padding: '10px', fontSize: '18px' }} 
            />
        </div>
        <div className="services-cards">
          <Card image="/images/dog.png" alt="Dog Happy" description="Dog Walking" />
          <Card image="/images/cat.png" alt="Cat Happy" description="Pet Sitting" />
          <Card image="/images/house.png" alt="house" description="Overnight Care" />
          <Card image="/images/huella.png" alt="Other" description="Other Services" />
        </div>
    </div>
  )
}
