import { Home } from '../../components'
import { NavbarComponent } from '../../components'
import { OurServices } from '../../components'
import { TestimonialSlider } from '../../components'
import { HowWorks } from '../../components'
import { MakeFetch } from '../../components'
import { Footer } from '../../components'

import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="home-page">
        <NavbarComponent />
        <Home />
        <OurServices />
        <TestimonialSlider />
        <HowWorks />
        <MakeFetch />
        <Footer />
    </div>
  )
}
