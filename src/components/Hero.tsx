import React from 'react';
import UserStockCard from './UserStockCard';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-glow"></div>
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>
            Invierte en <br/>
            <span className="text-primary-gradient">Desarrolladores</span>
            <br /> no en Proyectos.
          </h1>
          <p>
            La primera red social donde tu talento define tu valor de mercado.
            Consigue accionistas, cumple retos y haz crecer tu valoración.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Empezar a Invertir</button>
            <button className="btn btn-ghost">Cómo funciona &rarr;</button>
          </div>
        </div>

        <div className="hero-visual">
          <UserStockCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
