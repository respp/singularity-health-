import { Button } from 'react-bootstrap';
import './button.css'

interface CustomButtonProps {
  content: string;
  disabledData: boolean;
  fontSize: string;
}

export const CustomButton = ({ content, disabledData, fontSize }: CustomButtonProps) => {
  return (
    <Button
        type="submit"
        variant="primary" 
        className="rounded-pill custom-button" 
        size="lg" 
        disabled={disabledData}
        style={{ fontSize: fontSize, fontWeight: '700', fontFamily: 'Open Sans' }}
      >
        {content}
      </Button>
  )
}
