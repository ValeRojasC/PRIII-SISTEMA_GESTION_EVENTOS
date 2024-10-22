import React, { useState } from 'react';
import './Register.css'; 
import logo from '../img/LogoUticket.png';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    cedula: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Registro:', formData);
  };

  return ( <div className="register-background">
    <div className="register-container">
      <div className='form-section'>
      <h2> Crear cuenta</h2>
      <p>
        Si eres nuevo crea tu cuenta, sino{' '}
        <Link to="/login">inicia sesión aquí</Link>.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Ingresa tus apellidos"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="celular"
          placeholder="Ej: 7777777"
          value={formData.celular}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cedula"
          placeholder="Ej: 1234567"
          value={formData.cedula}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
    <div className="logo-section">
          <img src={logo} alt="Logo Utickets" />
        </div>
    </div>
  </div>
  );
};

export default Register;
