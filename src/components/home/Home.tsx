import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const [content, setContent] = useState('Bienvenido a la Home');
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  const handleMenuClick = (text: string) => {
    setContent(text);
    navigate(`/${text.toLowerCase().replace(/\s+/g, '-')}`); // Navegamos con navigate
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleMenuClick('Contenido 1')}>Contenido 1</button>
        <button onClick={() => handleMenuClick('Contenido 2')}>Contenido 2</button>
        <button onClick={() => handleMenuClick('Contenido 3')}>Contenido 3</button>
      </nav>
      <div>{content}</div>
    </div>
  );
};


