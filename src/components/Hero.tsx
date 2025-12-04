import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Convierte tu Código en Acciones</h1>
        <p className="hero-subtitle">
          La red social donde los desarrolladores no tienen seguidores, tienen <strong>accionistas</strong>.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Empezar a Invertir</button>
          <button className="btn-secondary">Presentar Proyecto</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
