// Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  // Atalhos do menu
  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/about' },
    { name: 'Serviços', path: '/services' },
    { name: 'Contato', path: '/contact' }
  ];

  // Redes sociais
  const socialLinks = [
    { name: 'Instagram', icon: '', url: 'https://instagram.com' },
    { name: 'Facebook', icon: '', url: 'https://facebook.com' },
    { name: 'Twitter', icon: '', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: '', url: 'https://linkedin.com' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna Esquerda - Nome do Site */}
        <div className="footer-col footer-col-left">
          <h3 className="site-name">Organo</h3>
          <p className="site-description">
            Criando soluções inovadoras para o sua empresa.
          </p>
        </div>

        {/* Coluna Centro - Redes Sociais */}
        <div className="footer-col footer-col-center">
          <h4 className="col-title">Redes Sociais</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Coluna Direita - Botões do Menu */}
        <div className="footer-col footer-col-right">
          <h4 className="col-title">Menu</h4>
          <div className="menu-buttons">
            {menuLinks.map((link, index) => (
              <a key={index} href={link.path} className="menu-button">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divisor e Copyright */}
      <div className="footer-bottom">
        <div className="divider"></div>
        <p className="copyright">
          © {new Date().getFullYear()} Organo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;