import { FormSearch } from "../../common/form-search/FormSearch"
import { Card } from "../card/Card"
import './how-works.css'

export const HowWorks = () => {
    return (
        <div className="section-how-works">
            <div className="how-works-cards">
                {/* Dotted curve connecting the cards */}
                <svg className="dotted-curve" viewBox="0 0 350 200">
                    <path 
                        d="M 21 130 Q 200 -216 409 125"  // Aumentamos la altura de la curva para hacerlo más pronunciado
                        stroke="var(--secondary-orange)" 
                        fill="transparent" 
                        strokeWidth="5"
                        strokeDasharray="23" 
                    />
                </svg>

                
                <Card image="/images/calendar.png" alt="Reserve" description="Reserve" />
                <div className="right-card">
                    <Card image="/images/happy.png" alt="Match" description="Match" />
                </div>
                <Card image="/images/chihuahua.png" alt="Relax" description="Relax" />
            </div>

            <div className="how-works-content">
                <h2>How it Works</h2>
                <p>Because finding a good pet sitter shouldn’t be <br />a hassle. With Fetch! It’s as easy as…</p>
                <h3>Enter Your Location and Fetch Our Services</h3>
                <FormSearch 
                  content="Zip Code" 
                  style={{ width: '180px', padding: '10px', fontSize: '18px' }} 
                />
            </div>
        </div>
    );
}
