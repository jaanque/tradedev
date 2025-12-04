import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding" style={{background: 'var(--bg-section-alt)'}}>
      <div className="container">
        <div className="grid-cols-2">
          <div>
            <h2 style={{marginBottom: '2rem'}}>Sobre Nosotros</h2>
            <p style={{marginBottom: '1.5rem'}}>
              TradeDev nació de una idea simple: el talento es el recurso más valioso del siglo XXI, pero carece de liquidez.
            </p>
            <p>
              Estamos construyendo el NASDAQ para las personas. Una plataforma donde los desarrolladores pueden levantar capital para sus carreras y los inversores pueden participar en el éxito de la próxima generación de innovadores tecnológicos.
            </p>
          </div>
          <div style={{height: '400px', background: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <span style={{color: 'var(--text-muted)', fontWeight: 600}}>Imagen de la Misión</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
