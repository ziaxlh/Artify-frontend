import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/remove-background');
  };

  return (
    <div className="home">
      <nav className="navbar">
          <div className="container-2">
            <div className="logo-artify-1">
              <img className="logo-artify-1" src="logoArtify.png" alt="Logo Artify" />
            </div>
            <div className="remover-fondo">
              <span onClick={() => handleNavigate("/remove-background")}>Remover fondo</span>
            </div>
            <div className="cambiar-formato">
              <span onClick={() => handleNavigate("#")}>Cambiar formato</span>
            </div>
            <div className="comprimir">
              <span onClick={() => handleNavigate("#")}>Comprimir</span>
            </div>
            <div className="todas-las-herramientas">
              <span onClick={() => handleNavigate("#")}>Todas las herramientas</span>
            </div>
          </div>
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
              <span className="empieza-ahora">
                Empieza ahora
              </span>
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
