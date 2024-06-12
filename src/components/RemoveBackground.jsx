import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RemoveBackground = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

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
      console.log("Generated Image URL:", outputUrl); // Verificar la URL generada
      navigate('/remove-result', { state: { imageUrl: outputUrl } });
    } catch (error) {
      console.error("Error al remover el fondo:", error);
    }
  };

  return (
    <div className="remove-background">
      <nav className="navbar2">
        <div className="container-2-2">
          <div className="logo-artify-2">
            <img className="logo-artify-2" src="logoArtify.png" alt="Logo Artify" onClick={() => navigate('/')} />
          </div>
          <div className="remover-fondo1">
            <span className="span-1" onClick={() => navigate('/remove-background')}>Remover fondo</span>
          </div>
          <div className="cambiar-formato1">
            <span className="span-1" onClick={() => navigate('/change-format')}>Cambiar formato</span>
          </div>
          <div className="comprimir1">
            <span className="span-1" onClick={() => navigate('/compress')}>Comprimir</span>
          </div>
          <div className="todas-las-herramientas1">
            <span className="span-1" onClick={() => navigate('/tools')}>Todas las herramientas</span>
          </div>
          <img className="polygon-1" src="polygon_11_x2m.png" />
        </div>
        <img className="ellipse-1" src="ellipse_11_x2.png" />
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
      </div>
    </div>
  );
}

export default RemoveBackground;
