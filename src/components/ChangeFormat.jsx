import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangeFormat = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [outputImage, setOutputImage] = useState(null)

  // const handleNavigate = (path) => {
  //   navigate(path);
  // };

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

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    // Lógica adicional para manejar el archivo subido
    console.log("Fondo removido")
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRemoveBackground = async () => {  
    if (!selectedFile) {
      alert("Por favor, seleccione una imagen primero.");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:8000/remove-background', formData, {
        responseType: 'blob', // Para manejar la respuesta binaria (imagen)
      });

      const outputUrl = URL.createObjectURL(response.data);
      setOutputImage(outputUrl);
    } catch (error) {
      console.error("Error al remover el fondo:", error);
    }
  };

    return (
      <div class="change-format">
        <nav className="navbar3">
          <div className="container-2-3">
            <div className="logo-artify-3">
              <img className="logo-artify-3" src="logoArtify.png" alt="Logo Artify" onClick={handleStart} />
            </div>
            <div className="remover-fondo2">
              <span className="span-2" onClick={() => handleRemove("/remove-background")}>Remover fondo</span>
            </div>
            <div className="cambiar-formato2">
              <span className="span-2" onClick={() => handleChange("/change-format")}>Cambiar formato</span>
            </div>
            <div className="comprimir2">
              <span className="span-2" onClick={() => handleCompress("/compress")}>Comprimir</span>
            </div>
            <div className="todas-las-herramientas2">
              <span className="span-2" onClick={() => handleTools("#")}>Todas las herramientas</span>
            </div>
            <img className="polygon-2" src="polygon_11_x2m.png" />
          </div>
          <img className="ellipse-2" src="ellipse_11_x2.png" />
        </nav>
      <div 
        className={`container-3-2 ${isDragOver ? 'drag-over' : ''}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}>
            <div class="cambiar-formato-de-una-imagen">
              Cambiar formato de una<br/> imagen
            </div>
        <div className="cambia-formato">
          Cambia el formato de tu imagen a png, jpg o<br/> gif según lo que necesites
        </div>
        <div className="container-1-3">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange}
            style={{ display: 'none' }} 
            id="file-upload"
          />
          <label htmlFor="file-upload" className="seleccionar-archivo1">
            Seleccionar archivo
          </label>
        </div>
        <span className="oarrastra-ysuelta-aqui1">
          o arrastra y suelta aquí
        </span>
        <button onClick={handleRemoveBackground} className='remove-bg-button'>Remover fondo
        </button>
        {outputImage &&(
          <div className='output-image'>
            <img src={outputImage} alt='Output'/>
          </div>
        )}
      </div>
    </div>
    );
}
export default ChangeFormat;