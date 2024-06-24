import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'ionicons';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3w2gQaPP03kfnQcuVM42HWi9yMFwY1_I",
  authDomain: "artify-4454d.firebaseapp.com",
  projectId: "artify-4454d",
  storageBucket: "artify-4454d.appspot.com",
  messagingSenderId: "461004472985",
  appId: "1:461004472985:web:90183850ac241f9e876e08",
  measurementId: "G-VVFBFN8KJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // State for success messages
  const [showRegister, setShowRegister] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const navigate = useNavigate();
  const registerRef = useRef(null);
  const loginRef = useRef(null);
  const resetPasswordRef = useRef(null);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 3000); // Hide the success message after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [successMessage]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario autenticado:', user);
        setSuccessMessage('Inicio de sesión exitoso');
        setError(null);
        setEmail('');
        setPassword('');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate('/');
        }, 1000); // Navigate after 1 second to allow message display
      })
      .catch((error) => {
        setError('Error al iniciar sesión: ' + error.message);
      });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario registrado:', user);
        setSuccessMessage('Registro exitoso');
        setShowRegister(false);
        setError(null);
        setEmail('');
        setPassword('');
        setTimeout(() => {
          if (loginRef.current) {
            loginRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000); // Scroll after 1 second to allow message display
      })
      .catch((error) => {
        setError('Error al registrar: ' + error.message);
      });
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Correo de restablecimiento de contraseña enviado');
        setError('Correo de restablecimiento de contraseña enviado');
        setEmail(''); // Clear email after reset password
      })
      .catch((error) => {
        setError('Error al enviar correo de restablecimiento: ' + error.message);
      });
  };

  const handleScrollToRegister = () => {
    setShowRegister(true);
    setShowResetPassword(false);
    setError(null);
    setSuccessMessage(null);
    setTimeout(() => {
      if (registerRef.current) {
        registerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleScrollToLogin = () => {
    setShowRegister(false);
    setShowResetPassword(false);
    setError(null);
    setSuccessMessage(null);
    setEmail('');
    setPassword('');
    setTimeout(() => {
      if (loginRef.current) {
        loginRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleScrollToResetPassword = () => {
    setShowResetPassword(true);
    setShowRegister(false);
    setError(null);
    setSuccessMessage(null);
    setTimeout(() => {
      if (resetPasswordRef.current) {
        resetPasswordRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div 
      className="login-container" 
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imagen_2024-06-20_063620312_no_bg.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="login-card">
        {showResetPassword ? (
          <div ref={resetPasswordRef}>
            <h2>Restablecer Contraseña</h2>
            <form onSubmit={handleResetPasswordSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="login-button">Enviar Correo de Restablecimiento</button>
            </form>
            <p className="register-link">
              ¿Ya tienes una cuenta? <a href="#" onClick={handleScrollToLogin}>Iniciar Sesión</a>
            </p>
          </div>
        ) : showRegister ? (
          <div ref={registerRef}>
            <h2>Registrarse</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
              <button type="submit" className="login-button">Registrarse</button>
            </form>
            <p className="register-link">
              ¿Ya tienes una cuenta? <a href="#" onClick={handleScrollToLogin}>Iniciar Sesión</a>
            </p>
          </div>
        ) : (
          <div ref={loginRef}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="remember-forgot">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  Recuérdame
                </label>
                <a href="#" className="forgot-password" onClick={handleScrollToResetPassword}>¿Olvidaste tu contraseña?</a>
              </div>
              {error && <p className="error-message">{error}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
              <button type="submit" className="login-button">Iniciar Sesión</button>
            </form>
            <p className="register-link">
              ¿No tienes una cuenta? <a href="#" onClick={handleScrollToRegister}>Regístrate</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
