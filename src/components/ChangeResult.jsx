import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChangeResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedFile } = location.state || {};
  const [selectedFormat, setSelectedFormat] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [convertedFilePath, setConvertedFilePath] = useState('');
  const [showFormatSelection, setShowFormatSelection] = useState(true);

  useEffect(() => {
    if (!selectedFile) {
      navigate('/');
    }
  }, [selectedFile, navigate]);

  const handleFormatChange = (format) => {
    setSelectedFormat(format);
  };

  const handleConvert = async () => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('format', selectedFormat);

    try {
      const formatResponse = await axios.post(
        'http://localhost:8000/convert/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (formatResponse.data.new_file_path) {
        setConvertedFilePath(formatResponse.data.new_file_path);
        setShowFormatSelection(false);
      } else {
        setError('No se pudo obtener la ruta del archivo convertido.');
      }
    } catch (error) {
      console.error('Error al convertir el formato:', error);
      setError(error.response?.data?.detail || 'Ocurrió un error desconocido.');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = `http://localhost:8000/download/?file_path=${encodeURIComponent(convertedFilePath)}`;
    link.setAttribute('download', `converted_image.${selectedFormat}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="change-format-result">
      <nav className="navbar6">
        <div className="container-2-6">
          <div className="logo-artify-6">
            <img className="logo-artify-6" src="logoArtify.png" alt="Logo Artify" />
          </div>
          <div className="remover-fondo6">
            <span className="span-6">Remover fondo</span>
          </div>
          <div className="cambiar-formato6">
            <span className="span-6">Cambiar formato</span>
          </div>
          <div className="comprimir6">
            <span className="span-6">Comprimir</span>
          </div>
          <div className="todas-las-herramientas6">
            <span className="span-6">Todas las herramientas</span>
          </div>
          <img className="polygon-6" src="polygon_11_x2m.png" alt="Polygon" />
        </div>
        <img className="ellipse-6" src="ellipse_11_x2.png" alt="Ellipse" />
      </nav>
      <div className="container-6-6-1">
        {showFormatSelection && selectedFile && (
          <div className="format-selection-overlay">
            <div>
              <h2>Imagen seleccionada:</h2>
              <p>{selectedFile.name}</p>
              <h2>Seleccionar formato:</h2>
              <select onChange={(e) => setSelectedFormat(e.target.value)}>
                <option value="">Selecciona un formato</option>
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="gif">GIF</option>
                <option value="bmp">BMP</option>
              </select>
              <br />
              <button onClick={handleConvert} disabled={!selectedFormat || isLoading}>
                Convertir
              </button>
            </div>
          </div>
        )}
        <div className="rectangle-9-6">
          {!showFormatSelection && convertedFilePath && (
            <img src={`http://localhost:8000/download/?file_path=${encodeURIComponent(convertedFilePath)}`} alt="Imagen convertida" />
          )}
        </div>
        <div className="menu1">
          {error && <div className="error-message">{error}</div>}
          <div className="container-Descargar">
            {!showFormatSelection && (
              <span className="Descargar-6" onClick={downloadFile}>
                Descargar
              </span>
            )}
            {!showFormatSelection && (
              <button className="convertir" onClick={handleConvert} disabled={!selectedFormat || isLoading}>
                Convertir
              </button>
            )}
          </div>
        </div>
      </div>
      {isLoading && <div className="loading-spinner">Cargando...</div>}
    </div>
  );
};

export default ChangeResult;
