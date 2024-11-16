import Form from 'react-bootstrap/Form';
import { Circle } from './Circle';
import './form-search.css'

interface FormSearchProps {
  content: string;
  style?: React.CSSProperties;
}

export const FormSearch = ({ content, style }: FormSearchProps) => {
  return (
    <Form>
      <Form.Group
        className="mb-3"
        controlId={content}
        style={{ position: 'relative', width: style?.width }} // Usamos el ancho pasado por props
      >
        {/* Input con estilos personalizados */}
        <Form.Control
          type="input"
          placeholder={content}
          className='form-control'
          style={{
            borderRadius: '100px',
            fontSize: style?.fontSize || '16px',
            ...style, 
          }}
        />
        <div
          className='circle-container'
        >
          <Circle />
        </div>
      </Form.Group>
    </Form>
  );
};
