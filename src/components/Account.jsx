import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountDetails = () => {
  return (
    <div className="account-container">
      <div className="account-sidebar">
        <div className="profile-section">
          <img src={`${process.env.PUBLIC_URL}/2.jpg`} alt="Avatar" className="avatar" />
          <p className="status">Registrado</p>
          <p className="user-name">Ziaxlh</p>
        </div>
        <div className="menuAc">
          <a href="#mi-cuenta" className="menu-link">Mi cuenta</a>
          <a href="#seguridad" className="menu-link">Seguridad</a>
          <a href="#actividades" className="menu-link">Últimas tareas</a>
        </div>
      </div>
      <div className="account-content">
        <div className="profile-info">
          <h2 className="profile-info-title">Mi cuenta</h2>
          <div className="profile-details">
            <div className="profile-item">
                <h3 className="profile-item-title">Perfil</h3>
              <p className="user">Usuario:</p>
              <p className="Numero">Numero:</p>
              <p className="cerrar-sesion">Cerrar sesión</p>
            </div>
            <div className="social-links">
              <h3 className="social-links-title">Redes sociales enlazadas</h3>
              <p>Conecta tus cuentas sociales para acceder desde Facebook o Google.</p>
              <p className="email">Email:</p>
              <a href="#enlazar-redes" className="social-links-link">Enlaza más redes sociales</a>
            </div>
            <div className="email-section">
              <h3 className="email-section-title">Email</h3>
              <p className="Mail">Mail actual:</p>
              <a href="#cambiar-email" className="email-section-link">Cambiar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Account = () => {
  const navigate = useNavigate();
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

  const handleStart = () => {
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="home">
      <nav className="navbar">
        <div className="container-2">
          <div className="logo-artify-1">
            <img className="logo-artify-1" src={`${process.env.PUBLIC_URL}/logoArtify.png`}  alt="Logo Artify" onClick={handleStart} />
          </div>
          <div className="remover-fondo">
            <span onClick={handleRemove}>Remover fondo</span>
          </div>
          <div className="cambiar-formato">
            <span onClick={handleChange}>Cambiar formato</span>
          </div>
          <div className="comprimir">
            <span onClick={handleCompress}>Comprimir</span>
          </div>
          <div 
            className="todas-las-herramientas" 
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
          <img className="polygon" onMouseEnter={toggleDropdown} 
            onMouseLeave={closeDropdown} src="polygon_11_x2m.png" />
        </div>
        <img className="ellipse" src={`${process.env.PUBLIC_URL}/ellipse_11_x2.png`} />
      </nav>
      <div className="start">
        <AccountDetails />
      </div>
    </div>
  );
}

export default Account;
