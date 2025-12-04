import React from 'react';
import { Users, TrendingUp, Code2, Award } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Una Economía de Talento</h2>
          <p>TradeDev cambia las reglas del juego. Deja de buscar likes y empieza a buscar capital.</p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <Users size={24} />
            </div>
            <h3>Accionistas vs Followers</h3>
            <p>Construye una base de inversores reales. Cuando tú ganas, ellos ganan.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <Award size={24} />
            </div>
            <h3>Gana Tokens</h3>
            <p>Mantén tu racha de commits, resuelve bugs y completa retos diarios para minar tokens.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <TrendingUp size={24} />
            </div>
            <h3>Market Cap Personal</h3>
            <p>Tu valor fluctúa en tiempo real basado en tu actividad y la confianza de la comunidad.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <Code2 size={24} />
            </div>
            <h3>Portafolio de Devs</h3>
            <p>Diversifica invirtiendo en Junior prometedores o Seniors consolidados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
