
export const NotFound: React.FC = () => {
  return(
    <div className="not-found-content">
      <div className="balls-bg">
      <div className="ball blue-ball"></div>
      <div className="ball yellow-ball"></div>
          <div className="error-message">
              <h1 className="title-404">404</h1>
              <div className="split-text">
                  <span>La página no ha sido encontrada, verifica que la URL </span>
                  <span>sea correcta o regresa al inicio para seguir navegando.</span>
              </div>

          </div>

      </div>
    </div>
  )
};

