import React from 'react';
import { ShieldCheck, BarChart3, Briefcase, Globe2 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="solutions" className="features-section section-padding">
      <div className="container">
        <div style={{marginBottom: '4rem'}}>
          <h2>Infraestructura de Grado Institucional</h2>
          <p style={{marginTop: '1rem', maxWidth: '600px', color: 'var(--text-muted)'}}>
             Proporcionamos el marco regulatorio y el fondo de liquidez necesarios para comerciar capital humano a escala. Sin fricción. Transparencia total.
          </p>
        </div>

        <div className="grid-cols-4">
          <div className="feature-card">
            <div className="feature-icon">
              <ShieldCheck size={24} />
            </div>
            <h3 className="feature-title">Talento Verificado</h3>
            <p className="feature-desc">Due diligence rigurosa en cada activo listado. Verificamos habilidades, historial y potencial.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BarChart3 size={24} />
            </div>
            <h3 className="feature-title">Valoración en Tiempo Real</h3>
            <p className="feature-desc">Modelos de precios dinámicos basados en actividad de GitHub, finalización de proyectos y sentimiento del mercado.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Globe2 size={24} />
            </div>
            <h3 className="feature-title">Liquidez Global</h3>
            <p className="feature-desc">Ejecución instantánea en más de 50 mercados. Intercambia acciones de talento sin barreras geográficas.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Briefcase size={24} />
            </div>
            <h3 className="feature-title">Portafolios Diversos</h3>
            <p className="feature-desc">Cobertura de riesgos. Construye un índice equilibrado de ingenieros Junior, Senior y Principal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
