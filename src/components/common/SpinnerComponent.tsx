import Spinner from 'react-bootstrap/Spinner';
import './loader.css'

export const SpinnerComponent =()=> {
  return (
  <div className="loader-bg">
      <Spinner animation="border" variant='light' />;
  </div>
  )
}
