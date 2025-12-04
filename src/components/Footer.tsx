import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">&copy; {new Date().getFullYear()} TradeDev Inc. El mercado de valores del talento.</p>
      </div>
    </footer>
  );
};

export default Footer;
