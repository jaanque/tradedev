import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="logo">
          <span style={{color: 'var(--primary)'}}>⚡</span> TradeDev
        </div>
        <div className="nav-links">
          <a href="#features" className="nav-link">Características</a>
          <a href="#market" className="nav-link">Mercado</a>
          <a href="#community" className="nav-link">Comunidad</a>
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
          <button className="btn btn-ghost">Entrar</button>
          <button className="btn btn-primary">Unirse</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
