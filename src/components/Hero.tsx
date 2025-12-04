import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>
            Capital Humano.<br />
            Activos Líquidos.
          </h1>
          <p className="hero-subtitle">
            El primer mercado global de talento desarrollador. Titulizamos la producción profesional, permitiéndote invertir en carreras de alto crecimiento con la precisión de un instrumento financiero.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Empezar a Operar</button>
            <button className="btn btn-secondary">Ver Datos de Mercado</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
