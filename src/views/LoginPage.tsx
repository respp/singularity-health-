import LoginForm from "../components/auth/LoginForm";
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Fondo decorativo con gradiente */}
      <div className="background-gradient"></div>

      <div className="login-container">
        <div className="login-box">
          <h3>Ingreso</h3>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
