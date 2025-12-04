import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="methodology" className="methodology-section section-padding">
      <div className="container">
        <div className="grid-cols-2">
          <div>
            <h2 style={{marginBottom: '1.5rem'}}>Nuestra Metodología</h2>
            <p style={{color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '450px'}}>
              Desde el listado inicial hasta la IPO, nuestro proceso está diseñado para maximizar el valor tanto para el talento como para los inversores. Aseguramos un crecimiento sostenible a través de hitos verificados.
            </p>
            <div style={{marginTop: '2rem'}}>
                <button className="btn btn-primary">Descargar Whitepaper</button>
            </div>
          </div>

          <div style={{paddingTop: '1rem'}}>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Tokenización de Activos</h3>
                <p>Los desarrolladores conectan sus repositorios. Nuestro algoritmo calcula un precio de oferta inicial basado en la calidad y velocidad del código.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Creación de Mercado</h3>
                <p>Los primeros inversores proporcionan liquidez. El activo (desarrollador) utiliza el capital para capacitarse o financiar proyectos, impulsando la apreciación del valor.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Dividendos y Salida</h3>
                <p>Los proyectos exitosos generan dividendos en tokens. Los desarrolladores de primer nivel pueden recomprar su capital o cotizar en mercados secundarios.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
