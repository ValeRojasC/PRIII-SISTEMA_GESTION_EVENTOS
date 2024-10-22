import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/LogoUticket.png'; 
import '../components/Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="login-background">
            <div className="login-container">
                <div className="logo-section">
                    <img src={logo} alt="Logo Utickets" />
                </div>

                <div className="form-section">
                    <h2>Bienvenido a <span className="highlight">UTICKET</span></h2>
                    
                    <button className="social-login google">Login with Google</button>
                    <button className="social-login facebook">Login with Facebook</button>

                    {/*<div className="divider">
                        <span>OR</span>
                    </div>*/}

                    <form onSubmit={handleLogin}>
                        <div className="input-container">
                            <input
                                type="email"
                                placeholder="Correo Electronico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-options">
                            <div className="remember-me">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Recuerdame</label>
                            </div>
                            <Link to="/forgot-password" className="forgot-password">Olvide mi contraseña</Link>
                        </div>

                        <button type="submit" className="login-button">Ingresar</button>
                    </form>

                    <p className="register-option">
                        No tienes cuenta? <Link to="/register">Registrarse</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
