import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Tools() {
    const navigate = useNavigate();

  const handleRemove = () => {
    navigate('/remove-background');
  };

  const handleChange = () => {
    navigate('/change-format');
  };

  const handleCompress = () => {
    navigate('/compress');
  };
  
  return (
    <div className="tools">
      <div className="options">
        {/* <img className="figuras2" src="imagen_2024-06-20_063620312_no_bg.png" /> */}
        <div className="remove12">
          <div className="remover-fondo-de-una-imagen">
            Remover fondo de una imagen
          </div>
          <div className="elimina-fondos">
            Elimina fondos de tus imágenes con precisión y facilidad, dejando el
            sujeto principal en primer plano.
          </div>
          <div className="remover-f">
            <img className="RemoverF" src="RemoverF.png" />
          </div>
          <div className="EmpezAr"onClick={() => handleRemove("/remove-background")}>
            <span className="empezar">Empezar</span>
          </div>
        </div>
        <div className="change">
          <div className="cambiar-formato-de-una-imagen">
            Cambiar formato de una imagen
          </div>
          <div className="transforma-imgenes">
            Transforma imágenes rápidamente a diversos formatos, adaptándolas a
            las necesidades de tu proyecto.
          </div>
          <div className="cambiar-f">
            <img className="CambiarF" src="CambiarF.png" />
          </div>
          <div className="EmpezAr-2" onClick={() => handleChange("/change-format")}>
            <span className="empezar-2">Empezar</span>
          </div>
        </div>
        <div className="compressS">
          <div className="comprimir-el-peso-de-una-imagen">
            Comprimir el peso de una imagen
          </div>
          <div className="optimiza-tamao">
            Optimiza el tamaño de tus imágenes reduciendo su peso, reduciendo el
            consumo de datos.
          </div>
          <div className="comprimir-f">
            <img className="ComprimirF" src="Comprimir.png" />
          </div>
          <div className="EmpezAr-3" onClick={() => handleCompress("/compress")}>
            <span className="empezar-1">Empezar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
