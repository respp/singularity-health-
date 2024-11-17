import { Home } from '../../components'
import { NavbarComponent } from '../../components'
import { OurServices } from '../../components'
import { TestimonialSlider } from '../../components'
import { HowWorks } from '../../components/home/how-works/HowWorks'

import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="home-page">
        <NavbarComponent />
        <Home />
        <OurServices />
        <TestimonialSlider />
        <HowWorks />
    </div>
  )
}
