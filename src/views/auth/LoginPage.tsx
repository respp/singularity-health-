import { LoginForm } from "../../components";
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Fondo decorativo con gradiente */}
      {/* <div className="background-gradient">bsdb</div> */}

      {/* Primer div: Formulario de login */}
      <div className="login-container">
        
      </div>

      {/* Segundo div: Puede ser para otro contenido */}
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
