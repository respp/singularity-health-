import { LoginForm } from "../../components";
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="circle-pet-icon">
          <img src="/icons/pet.svg" alt="" className="pet-icon" />
        </div>
      </div>

      <div className="second-container">
        <div className="login-box">
            <h3 className="heading">
              <span className="line"></span>Bienvenido
            </h3>
          <LoginForm />
        </div>
      </div>

    </div>
  );
};
