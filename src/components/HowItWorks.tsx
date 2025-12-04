import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="steps-section">
      <div className="container">
        <div className="section-header">
          <h2>Tu camino a la IPO</h2>
          <p>De Junior a Unicornio en 3 pasos.</p>
        </div>

        <div className="steps-container">
          <div className="steps-connector"></div>

          <div className="step-item">
            <div className="step-number">1</div>
            <h3>Codea & Publica</h3>
            <p>Conecta tu GitHub. Cada commit, cada proyecto cuenta para tu valoración inicial.</p>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <h3>Gana Tracción</h3>
            <p>Atrae inversores tempranos. Cumple retos para demostrar tus habilidades.</p>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <h3>Recibe Inversión</h3>
            <p>Usa el capital para financiar tus proyectos o reinvertir en la comunidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
