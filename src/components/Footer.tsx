import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{marginBottom: '2rem'}}>
           <span style={{fontSize: '1.5rem', fontWeight: '800'}}>TradeDev<span>.</span></span>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap'}}>
            <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Mercados</a>
            <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Índices</a>
            <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Screeners</a>
            <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>API</a>
            <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Legal</a>
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()} TradeDev Inc. Todos los derechos reservados. Regulado por la Global Talent Exchange Commission.</p>
      </div>
    </footer>
  );
};

export default Footer;
