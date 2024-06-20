import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangeFormat = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [convertedFile, setConvertedFile] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState('');

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
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleConvert = async () => {
    if (!selectedFile) {
      alert("Por favor, seleccione una imagen primero.");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('format', selectedFormat);

    try {
      const response = await axios.post('http://localhost:8000/convert/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
      });

      const convertedUrl = URL.createObjectURL(response.data);
      setConvertedFile(convertedUrl);
    } catch (error) {
      console.error("Error al convertir la imagen:", error);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = convertedFile;
    link.setAttribute('download', `converted_image.${selectedFormat}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="change-format">
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
        <div className="cambiar-formato-de-una-imagen">
          Cambiar formato de una<br /> imagen
        </div>
        <div className="cambia-formato">
          Cambia el formato de tu imagen a png, jpg o<br /> gif según lo que necesites
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
      </div>
      {selectedFile && (
        <div>
          <h2>Selected Image:</h2>
          <p>{selectedFile.name}</p>
          <h2>Select Format:</h2>
          <select onChange={(e) => setSelectedFormat(e.target.value)}>
            <option value="">Select format</option>
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
            <option value="gif">GIF</option>
            <option value="bmp">BMP</option>
          </select>
          <br />
          <button onClick={handleConvert}>Convert</button>
        </div>
      )}
      {convertedFile && (
        <div>
          <h2>Converted Image:</h2>
          <img src={convertedFile} alt="converted" />
          <br />
          <button onClick={handleDownload}>Download</button>
        </div>
      )}
    </div>
  );
}

export default ChangeFormat;