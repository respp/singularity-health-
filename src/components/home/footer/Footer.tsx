import './Footer.css';
import { FormSearch } from '../../common/form-search/FormSearch';

export const Footer = () => {
  return (
    <footer>
        <div className="column-footer">
            <a href="" className="subtitle">About</a>
            <a href="">Locations</a>
            <a href="">Franchise With Us</a>
            <a href="">Partners</a>
            <a href="">About Us</a>
            <a href="">Make Fetch Happen!</a>
        </div>
        <div className="column-footer">
            <a href="" className="subtitle">Resources</a>
            <a href="">Reviews</a>
            <a href="">Pet Resource Center</a>
            <a href="">Media Fact Sheet</a>
            <a href="">Blog</a>
            <a href="">News</a>

        </div>
        <div className="column-footer">
            <a href="" className="none">_</a>
            <a href="">Gift Cards</a>
            <a href="">Services</a>
            <a href="">Franchisee Login</a>
            <a href="">Term of Use</a>
            <a href="">Privacy Policy</a>
        </div>
        <div className="column-footer">
        <a href="" className="subtitle">NewsLetter</a>
        <p>Sign Up to receive the Fetch! <br /> Family Newsletter</p>
        <FormSearch content='Email Adress' 
        style={{ width: '16rem', padding: '10px', fontSize: '18px' }} 
        />  

        </div>

    </footer>
  )
}
