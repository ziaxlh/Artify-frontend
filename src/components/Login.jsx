import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'ionicons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log({ email, password, rememberMe });
    // Redirigir al usuario después del login
    navigate('/dashboard');
  };

  return (
    <section className="login-section">
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit} className="login-form">
            <h2 className="login-title">Login</h2>
            <div className="inputbox email-box">
              <ion-icon name="mail-outline" className="icon-mail"></ion-icon>
              <input
                type="email"
                className="input-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="label-email">Email</label>
            </div>
            <div className="inputbox password-box">
              <ion-icon name="lock-closed-outline" className="icon-lock"></ion-icon>
              <input
                type="password"
                className="input-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label-password">Contraseña</label>
            </div>
            <div className="forget">
              <label className="remember-me">
                <input
                  type="checkbox"
                  className="checkbox-remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Recuerdame
              </label>
              <a href="#" className="forgot-password">Olvide mi contraseña</a>
            </div>
            <button type="submit" className="login-button">Iniciar sesion</button>
            <div className="register">
              <p className="register-text">
                No tienes cuenta? <a href="#" className="register-link">Registrate</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
