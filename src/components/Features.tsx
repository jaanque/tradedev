import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <h2>Una Nueva Economía para Devs</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>👥 Accionistas vs Followers</h3>
          <p>Olvídate de los likes. Aquí construyes una comunidad de inversores que creen en tu potencial y crecen contigo.</p>
        </div>
        <div className="feature-card">
          <h3>🪙 Gana Tokens</h3>
          <p>Mantén tu racha de código, cumple retos diarios e interactúa con la comunidad para ganar tokens de inversión.</p>
        </div>
        <div className="feature-card">
          <h3>📈 Invierte en Talento</h3>
          <p>Usa tus tokens para comprar acciones de otros desarrolladores. Si ellos crecen, tu portafolio también.</p>
        </div>
        <div className="feature-card">
          <h3>🚀 Presenta Proyectos</h3>
          <p>Muestra tus side-projects al mundo. El feedback real y la inversión validarán tu trabajo.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
