import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';
import { LoginPage, NotFoundPage, HomePage } from '../views';

const AppRoutes: React.FC = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  // Mostrar un estado de carga mientras se verifica el token de autenticación
  if (status === 'checking') return <h3>Loading...</h3>;

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
