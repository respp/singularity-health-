import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks';
import { useEffect, useState } from 'react';
import { LoginPage, NotFoundPage, HomePage } from '../views';
import {SpinnerComponent} from '../components'

const AppRoutes: React.FC = () => {
  const { status, checkAuthToken } = useAuthStore();
  const [_loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    checkAuthToken();
  }, []);

  useEffect(() => {
    if (status !== 'checking') {
      // Después de que se haya realizado la verificación, esperamos un poco antes de quitar el spinner
      setTimeout(() => setLoading(false), 1000);  // 1 segundo de retraso
    }
  }, [status]);

  if (status === 'checking') return <SpinnerComponent />;

  return (
    <Routes>
      {status === 'not-authenticated' ? (
        <>
          {/* Ruta de login */}
          <Route path="/auth/login" element={<LoginPage />} />

          {/* Redireccionar cualquier otra ruta a NotFoundPage */}
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          {/* Ruta para el Home una vez autenticado */}
          <Route path="/" element={<HomePage />} />

          {/* Si intenta acceder a /auth/login estando autenticado, redireccionar al Home con replace */}
          <Route path="/auth/login" element={<Navigate to="/" replace />} />

          {/* Redireccionar cualquier otra ruta a NotFoundPage */}
          <Route path="*" element={<NotFoundPage />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
