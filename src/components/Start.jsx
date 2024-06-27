import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();
  const toolsRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
    if (toolsRef.current) {
      toolsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStart = () => {
    navigate('/');
  };

  const handleScrollToTools = () => {
    if (toolsRef.current) {
      toolsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="home">
      <nav className="navbar">
        <div className="container-2">
          <div className="logo-artify-1">
            <img className="logo-artify-1" src={`${process.env.PUBLIC_URL}/logoArtify.png`}  alt="Logo Artify" onClick={handleStart} />
          </div>
          <div className="remover-fondo">
            <span onClick={handleRemove}>Remover fondo</span>
          </div>
          <div className="cambiar-formato">
            <span onClick={handleChange}>Cambiar formato</span>
          </div>
          <div className="comprimir">
            <span onClick={handleCompress}>Comprimir</span>
          </div>
          <div 
            className="todas-las-herramientas" 
            onMouseEnter={toggleDropdown} 
            onMouseLeave={closeDropdown}
          >
            <span>Todas las herramientas</span>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <span onClick={handleRemove}>Remover fondo</span>
                <span onClick={handleChange}>Cambiar formato</span>
                <span onClick={handleCompress}>Comprimir</span>
              </div>
            )}
          </div>
          <img className="polygon" onMouseEnter={toggleDropdown} 
            onMouseLeave={closeDropdown} src="polygon_11_x2m.png" />
        </div>
        {/* <img className="ellipse" src={`${process.env.PUBLIC_URL}/ellipse_11_x2.png`}/> */}
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
            <img className="figuras" src={`${process.env.PUBLIC_URL}/Figuras.png`} alt="Logo Artify" />
              <div className="container-7" onClick={handleScrollToTools}>
                <span className="empieza-ahora">
                  Empieza ahora
                </span>
              </div>
            </div>   
          </div>
        </div>
      </div>
      <div className="tools" ref={toolsRef}>
        <div className="options">
          <div className="remove12">
            <div className="remover-fondo-de-una-imagen">
              Remover fondo de una imagen
            </div>
            <div className="elimina-fondos">
              Elimina fondos de tus imágenes con precisión y facilidad, dejando el
              sujeto principal en primer plano.
            </div>
            <div className="remover-f">
              <img className="RemoverF" src="RemoverF.png" />
            </div>
            <div className="EmpezAr-1" onClick={handleRemove}>
              <span className="empezar">Empezar</span>
            </div>
          </div>
          <div className="change">
            <div className="cambiar-formato-de-una-imagen">
              Cambiar formato de una imagen
            </div>
            <div className="transforma-imgenes">
              Transforma imágenes rápidamente a diversos formatos, adaptándolas a
              las necesidades de tu proyecto.
            </div>
            <div className="cambiar-f">
              <img className="CambiarF" src="CambiarF.png" />
            </div>
            <div className="EmpezAr-2" onClick={handleChange}>
              <span className="empezar-2">Empezar</span>
            </div>
          </div>
          <div className="compressS">
            <div className="comprimir-el-peso-de-una-imagen">
              Comprimir el peso de una imagen
            </div>
            <div className="optimiza-tamao">
              Optimiza el tamaño de tus imágenes reduciendo su peso, reduciendo el
              consumo de datos.
            </div>
            <div className="comprimir-f">
              <img className="ComprimirF" src="Comprimir.png" />
            </div>
            <div className="EmpezAr-3" onClick={handleCompress}>
              <span className="empezar-1">Empezar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
