import React from 'react';

const ChangeFormat = () => {
    return (
      <div class="change-format">
      <div class="navbar">
          <div class="container-2">
            <div class="logo-artify-1">
            <img class="logo-artify-1" src="logoArtify.png" />
            </div>
            <div class="remover-fondo">
              Remover fondo
            </div>
            <div class="cambiar-formato">
              Cambiar formato
            </div>
            <div class="comprimir">
              Comprimir
            </div>
            <div class="todas-las-herramientas">
              Todas las herramientas
            </div>
          </div>
        </div>
      <div class="container-2">
        <div class="cambiar-formato-de-una-imagen">
          Cambiar formato de una imagen
          </div>
        <div class="cambia-formato">
          Cambia el formato de tu imagen a png, jpg o gif según lo que necesites
        </div>
        <div class="container">
          <span class="seleccionar-archivo">
            Seleccionar archivo
          </span>
        </div>
        <span class="oarrastra-ysuelta-aqui">
          o arrastra y suelta aquí
        </span>
      </div>
    </div>
    );
}
export default ChangeFormat;