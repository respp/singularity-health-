import ReactDOM from 'react-dom/client';  // Importar desde 'react-dom/client'
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/store';

// Crear un root usando ReactDOM.createRoot (React 18 y versiones posteriores)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
