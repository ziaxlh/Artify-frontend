import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CompressComponent = () => {
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
      <div class="compress">
        <nav className="navbar4">
            <div className="container-2-4">
              <div className="logo-artify-4">
                <img className="logo-artify-4" src="logoArtify.png" alt="Logo Artify" onClick={handleStart} />
              </div>
              <div className="remover-fondo3">
                <span className="span-3" onClick={() => handleRemove("/remove-background")}>Remover fondo</span>
              </div>
              <div className="cambiar-formato3">
                <span className="span-3" onClick={() => handleChange("/change-format")}>Cambiar formato</span>
              </div>
              <div className="comprimir3">
                <span className="span-3" onClick={() => handleCompress("/compress")}>Comprimir</span>
              </div>
              <div className="todas-las-herramientas3">
                <span className="span-3" onClick={() => handleTools("#")}>Todas las herramientas</span>
              </div>
              <img className="polygon-3" src="polygon_11_x2m.png" />
            </div>
            <img className="ellipse-3" src="ellipse_11_x2.png" />
          </nav>
          <div 
            className={`container-3-3 ${isDragOver ? 'drag-over' : ''}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}>
                <div class="comprimir-peso-de-una-imagen">
                Comprimir el peso de<br/> una imagen
                </div>
            <div className="comprime-tu-imagen">
            Comprime tu imagen para que sea mucho<br/> mas liviana
            </div>
            <div className="container-1-3">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange}
                style={{ display: 'none' }} 
                id="file-upload"
              />
              <label htmlFor="file-upload" className="seleccionar-archivo2">
                Seleccionar archivo
              </label>
            </div>
            <span className="oarrastra-ysuelta-aqui2">
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
export default CompressComponent;