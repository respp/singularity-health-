import React, { useEffect, useState } from 'react';
import { useAuthStore, useForm } from '../../hooks';

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
      console.log('error en autenticación', errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <form onSubmit={loginSubmit}>
      <div className="form-group mb-2">
        <input
          type="email"
          className="form-control"
          placeholder="Correo"
          name="loginEmail"
          value={loginEmail}
          onChange={onLoginInputChange}
          required
        />
      </div>
      <div className="form-group mb-2">
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          name="loginPassword"
          value={loginPassword}
          onChange={onLoginInputChange}
          required
        />
      </div>
      <div className="d-grid gap-2">
        <input
          type="submit"
          className="btnSubmit"
          value="Login"
          disabled={!isFormValid} 
        />
      </div>

      {localError && (
        <div className="alert alert-danger mt-3">
          {localError}
        </div>
      )}
    </form>
  );
};


