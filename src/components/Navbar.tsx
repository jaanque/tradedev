import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="/" className="logo">
          TradeDev<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#solutions" className="nav-link">Soluciones</a>
          <a href="#benefits" className="nav-link">Beneficios</a>
          <a href="#methodology" className="nav-link">Metodología</a>
          <a href="#about" className="nav-link">Nosotros</a>
        </div>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
          <a href="#login" className="nav-link">Iniciar Sesión</a>
          <button className="btn btn-primary">Obtener Acceso</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
