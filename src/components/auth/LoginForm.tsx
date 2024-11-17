import React, { useEffect, useState } from 'react';
import { useAuthStore, useForm } from '../../hooks';
import './login-form.css'
import { CustomButton } from '../common/Button/CustomButton';

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

export const LoginForm: React.FC = () => {
  const { startLogin, errorMessage } = useAuthStore();

  const { formState: { loginEmail, loginPassword }, onInputChange: onLoginInputChange, isFormValid } = useForm(loginFormFields, {
    loginEmail: [(value: string) => value.includes('@'), 'El correo electrónico es inválido'],
    loginPassword: [(value: string) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres']
  });

  const [localError, setLocalError] = useState<string | null>(null);

  const loginSubmit = (e: any) => {
    e.preventDefault();
    startLogin({
      email: loginEmail,
      password: loginPassword
    });
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
      setLocalError(errorMessage); 

      const timer = setTimeout(() => {
        setLocalError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <form onSubmit={loginSubmit}>

    <div className="form-inputs">
          <input
            type="email"
            className="form-control"
            placeholder="EMAIL"
            name="loginEmail"
            value={loginEmail}
            onChange={onLoginInputChange}
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder="CONTRASEÑA"
            name="loginPassword"
            value={loginPassword}
            onChange={onLoginInputChange}
            required
            />
          <p>¿Olvidaste tu contraseña?</p>
        </div>


        <div className="log-panel">
          <CustomButton content='INICIAR SESIÓN' disabledData={!isFormValid} fontSize='.9rem' />
          <p>AÚN NO TENGO CUENTA <a href="">REGISTRARSE</a></p>
        </div>

      {localError && (
        <div className="alert alert-danger mt-3">
          {localError}
        </div>
      )}
      </form>
  );
};


