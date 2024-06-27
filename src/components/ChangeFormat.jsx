import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangeFormat = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [convertedFile, setConvertedFile] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState('');
  const downloadRef = useRef(null);
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
    navigate('/tools');
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
    scrollToDownload();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    scrollToDownload();
  };

  const scrollToDownload = () => {
    if (downloadRef.current) {
      downloadRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
          <div 
            className="todas-las-herramientas2" 
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
          <img className="polygon-2" src="polygon_11_x2m.png" />
        </div>
        {/* <img className="ellipse-2" src="ellipse_11_x2.png" /> */}
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
      <div className="container-6-6-1">
      {convertedFile && (
          <div className="rectangle-9-6">
          <img src={convertedFile} alt="converted" />
          </div>
      )}
      {selectedFile && (
        <div className="menu1">
          <div className="imagen-seleccionada">Imagen seleccionada:</div>
          <p className='name-image'>{selectedFile.name}</p>
          <div className="cambiar-formato-a">Cambiar formato a:</div>
          <br />
          <select className="custom-select" onChange={(e) => setSelectedFormat(e.target.value)}>
            <option value="">Selecciona un formato</option>
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
            <option value="gif">GIF</option>
            <option value="bmp">BMP</option>
          </select>
          <br />
          <div className="container-convertir" onClick={handleConvert}>
          <span className="convertir">Convertir imagen</span>
          </div>
          <div className="container-Descargar" ref={downloadRef} onClick={handleDownload}>
          <span className="Descargar-6">Descargar</span>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default ChangeFormat;
