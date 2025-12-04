import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TradeDev</div>
      <div className="navbar-links">
        <a href="#features">Cómo funciona</a>
        <a href="#about">Nosotros</a>
        <button className="btn-login">Iniciar Sesión</button>
        <button className="btn-signup">Unirse</button>
      </div>
    </nav>
  );
};

export default Navbar;
