import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../pages/Spinner";

const RemoveBackground = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (selectedFile) {
      handleSubmit();
    }
  }, [selectedFile]);

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

  const handleContainerClick = () => {
    document.getElementById("file-upload").click();
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8000/remove-background/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.output_path) {
        navigate("/remove-result", {
          state: { imageUrl: response.data.output_path },
        });
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error("Error removing background:", error);
      alert(error.response?.data?.error || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="remove-background">
      <div
        className={`container-3-1 ${isDragOver ? "drag-over" : ""}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="remover-fondo-de-una-imagen">
          Remover fondo de una
          <br /> imagen
        </div>
        <div className="remueve-fondo">
          Remueve y modifica el fondo de tu imagen en
          <br /> segundos con tan solo un click
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="container-1-2" onClick={handleContainerClick}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="file-upload"
              />
              <label className="seleccionar-archivo">
                Seleccionar archivo
              </label>
            </div>
            <span className="oarrastra-ysuelta-aqui">
              o arrastra y suelta aquí
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default RemoveBackground;
