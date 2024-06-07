import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RemoveBackground = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [outputImage, setOutputImage] = useState(null)

  const handleNavigate = (path) => {
    navigate(path);
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
    <div className="remove-background">
      <nav className="navbar2">
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
      <div 
        className={`container-3-1 ${isDragOver ? 'drag-over' : ''}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="remover-fondo-de-una-imagen">
          Remover fondo de una<br /> imagen
        </div>
        <div className="remueve-fondo">
          Remueve y modifica el fondo de tu imagen en<br/> segundos con tan solo un click
        </div>
        <div className="container-1-2">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange}
            style={{ display: 'none' }} 
            id="file-upload"
          />
          <label htmlFor="file-upload" className="seleccionar-archivo">
            Seleccionar archivo
          </label>
        </div>
        <span className="oarrastra-ysuelta-aqui">
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

export default RemoveBackground;
