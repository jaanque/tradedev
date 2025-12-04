import React from 'react';
import { CheckCircle, TrendingUp, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section-padding" style={{background: '#ffffff'}}>
      <div className="container">
        <div style={{maxWidth: '800px', margin: '0 auto 5rem auto', textAlign: 'center'}}>
          <h2>Por qué TradeDev es el Futuro</h2>
          <p style={{fontSize: '1.2rem'}}>
            Un ecosistema donde el código se convierte en capital y el talento en un activo negociable.
          </p>
        </div>

        <div className="grid-cols-3">
          <div style={{padding: '2rem', background: 'var(--bg-section-alt)', borderRadius: '12px'}}>
            <CheckCircle size={32} color="var(--accent)" style={{marginBottom: '1.5rem'}} />
            <h3>Transparencia Total</h3>
            <p>Cada línea de código es verificable. Los inversores ven el progreso real, no solo promesas.</p>
          </div>
          <div style={{padding: '2rem', background: 'var(--bg-section-alt)', borderRadius: '12px'}}>
            <TrendingUp size={32} color="var(--accent)" style={{marginBottom: '1.5rem'}} />
            <h3>Crecimiento Comprobado</h3>
            <p>Los desarrolladores con alto rendimiento ven aumentar su valor de mercado automáticamente.</p>
          </div>
          <div style={{padding: '2rem', background: 'var(--bg-section-alt)', borderRadius: '12px'}}>
            <Users size={32} color="var(--accent)" style={{marginBottom: '1.5rem'}} />
            <h3>Comunidad Global</h3>
            <p>Conecta con inversores y mentores de todo el mundo que apuestan por tu éxito.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
