import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleRemove = () => {
    navigate("/remove-background");
  };

  const handleChange = () => {
    navigate("/change-format");
  };

  const handleCompress = () => {
    navigate("/compress");
  };

  const handleTools = () => {
    navigate("/remove-background");
  };

  const handleStart = () => {
    navigate("/");
  };

  return (
    <div className="remove-background">
    <nav className="navbar2">
      <div className="container-2-2">
        <div className="logo-artify-2">
          <img
            className="logo-artify-2"
            src="logoArtify.png"
            alt="Logo Artify"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="remover-fondo1">
          <span className="span-1" onClick={() => navigate("/remove-background")}>
            Remover fondo
          </span>
        </div>
        <div className="cambiar-formato1">
          <span className="span-1" onClick={() => navigate("/change-format")}>
            Cambiar formato
          </span>
        </div>
        <div className="comprimir1">
          <span className="span-1" onClick={() => navigate("/compress")}>
            Comprimir
          </span>
        </div>
        <div className="todas-las-herramientas1">
          <span className="span-1" onClick={() => navigate("/tools")}>
            Todas las herramientas
          </span>
        </div>
        <img className="polygon-1" src="polygon_11_x2m.png" alt="polygon" />
      </div>
      <img className="ellipse-1" src="ellipse_11_x2.png" alt="ellipse" />
    </nav>
    </div>
  );
};

export default Nav;
