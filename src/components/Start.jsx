import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const handleRemove = () => {
    navigate('/remove-background');
  };

  const handleChange = () => {
    navigate('/change-format');
  };

  const handleCompress = () => {
    navigate('/compress');
  };

  const handleTools = () => {
    navigate('/remove-background');
  };

  const handleStart = () => {
    navigate('/');
  };

  return (
    <div className="home">
      <nav className="navbar">
          <div className="container-2">
            <div className="logo-artify-1">
            <img className="logo-artify-1" src="logoArtify.png" alt="Logo Artify" onClick={handleStart} />
            </div>
            <div className="remover-fondo">
              <span onClick={() => handleRemove("/remove-background")}>Remover fondo</span>
            </div>
            <div className="cambiar-formato">
              <span onClick={() => handleChange("/change-format")}>Cambiar formato</span>
            </div>
            <div className="comprimir">
              <span onClick={() => handleCompress("/compress")}>Comprimir</span>
            </div>
            <div className="todas-las-herramientas">
              <span onClick={() => handleTools("#")}>Todas las herramientas</span>
              </div>
            <img className="polygon" src="polygon_11_x2m.png" />
          </div>
          <img className="ellipse" src="ellipse_11_x2.png" />
        </nav>
      <div className="start">
        <div className="container">
          <div className="container-1">
            <span className="da-vida-atu-creatividad-con-artify">
              Da vida a tu creatividad<br/> con Artify
            </span>
          </div>
          <div className="container-4">
            <div className="container-3">
              <div className="txt-1">
                Edita tus fotos rápido, fácil y sin<br/> complicaciones. Cambia el formato de tus<br/> imágenes con solo unos clics. Recorta y ajusta<br/> las dimensiones según tus necesidades y<br/> mucho más.<br />
                ¡Explora tu creatividad sin límites con Artify!
              </div>
            </div>
            
            <div className="container-6">
              <img className="figuras" src="Figuras.png"/>
                <div className="container-7">
                  <span className="empieza-ahora">
                    Empieza ahora
                  </span>
                </div>
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
