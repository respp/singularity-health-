// import { Button } from 'react-bootstrap'
import './make-fetch.css'

export const MakeFetch = () => {
  return (
    <div className='make-fetch-section'>
        <img src="images/chiguagua-group.webp" alt="make fetch" />
        <div className="make-fetch-content">
            <h2>Make Fetch! Happen</h2>
            
            <p>If you love pets and want exciting work, apply to be a Fetch! Pet Care Provider! We train every
                team member and provide ongoing support to help you get the most from your</p> {/* experience. */}
            <button
                type="submit"
                className="rounded-pill btn-join" 
                style={{ fontSize: '1rem', fontWeight: '700', fontFamily: 'Open Sans' }}
            >
                Join Now
            </button>
        </div>
    </div>
  )
}
