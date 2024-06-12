import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ZoomSlider from "./ZoomSlider";

export default function RemoveResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl } = location.state || {};
  const [zoom, setZoom] = useState(1);

  console.log("Image URL:", imageUrl); // Verificar la URL de la imagen

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

  const handleZoomChange = (newZoomLevel) => {
    setZoom(newZoomLevel);
  };

  return (
    <div className="remove-background-result">
      <nav className="navbar5">
        <div className="container-2-5">
          <div className="logo-artify-5">
            <img
              className="logo-artify-5" src="logoArtify.png" alt="Logo Artify" onClick={handleStart}/>
          </div>
          <div className="remover-fondo5">
            <span className="span-5" onClick={() => handleRemove("/remove-background")}>Remover fondo</span>
          </div>
          <div className="cambiar-formato5">
            <span className="span-5" onClick={() => handleChange("/change-format")}>Cambiar formato</span>
          </div>
          <div className="comprimir5">
            <span className="span-5" onClick={() => handleCompress("/compress")}>Comprimir</span>
          </div>
          <div className="todas-las-herramientas5">
            <span className="span-5" onClick={() => handleTools("#")}>Todas las herramientas</span>
          </div>
          <img className="polygon-5" src="polygon_11_x2m.png" />
        </div>
        <img className="ellipse-5" src="ellipse_11_x2.png" />
      </nav>
      <div className="container-6-5">
        <div className="rectangle-9-5">
          {imageUrl ? (
            <img src={imageUrl} alt="Processed" className="processed-image" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="menu">
          <div className="container-3-5">
            <div className="containermasm">
              <img className="mas" src="RecorteIcono2.png"/>
              <ZoomSlider onZoomChange={handleZoomChange} />
              <img className="menos" src="menos.png"/>
            </div>
            <div className="containerwao">
              <img className="recorte-icono-1" src="RecorteIcono1.png"/>
              <span className="recortar">Recortar</span>
            </div>
            <div className="container-4-5">
              <img className="recorte-icono-2" src="RecorteIcono2.png"/>
              <span className="aadir-fondo">Añadir fondo</span>
            </div>
            <div className="container-5-5">
              <img className="recorte-icono-4" src="RecorteIcono4.png"/>
              <span className="aadir-filtro">Añadir filtro</span>
            </div>
            <div className="container-2-5-5">
              <img className="recorte-icono-3" src="RecorteIcono3.png"/>
              <span className="abrir-en-canva">Abrir en canva</span>
            </div>
            <div className="container-1-5">
              <span className="descargar-5">Descargar</span>
            </div>
            <span className="px">612 × 408 px</span>
          </div>
        </div>
      </div>
      <div className="imagenesop">
        <img className="image-1" src="Image1.png"/>
        <img className="image-2" src="Image2.jpg"/>
        <img className="image-3" src="Image3.png"/>
        <img className="image-4" src="Image4.png"/>
      </div>
    </div>
  );
}
