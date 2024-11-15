import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './routes/AppRouter';  // Asegúrate de que la importación sea la correcta

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />  {/* Usamos AppRouter para gestionar las rutas */}
    </Provider>
  );
};

export default App;
