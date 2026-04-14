import React from "react";
import './footer.css';

const Footer = () => {

    //criando os atalhos do menu.
    const menuLinks = [
        {name : 'Home', path: '/'},
        {name: 'Sobre', path: 'about'},
        {name: 'Serviços', path: '/services'},
        {name: 'Contato', path: '/contact'}
    ];

    //Redes sociais do site
    const socialLinks = [
        {name: 'Instagram', icon: '', url: 'https://instagram.com'},
        {name: 'Linkedin', icon: '', url: 'https://linkedin.com'},
        {name: 'YouTube', icon: '', url: 'https://youtube.com'},
        {name: 'Twitter(X)', icon: '', url: 'https://x.com'}
    ];

    return (
        <footer className="footer">
            <div className="footer-conteiner">
                {/*Coluna da esquerda - nome do site */}
                <div className="footer-col footer col-left">
                    <h3 className="site-name">Organo</h3>
                    <p className="site-description">
                        Sistema de cadastro empresarial.
                    </p>
                </div>

                {/*coluna central - redes sociais */}
                <div className="footer-col footer-col-center">
                    <h4 className="col-title">Redes sociais</h4>
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

                {/* Coluna da direita - botões do menu */}
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

                {/*Divior e copyright */}
                <div className="footer-bottom">
                    <div className="divider">
                        <p className="copyright">
                            {new Date().getFullYear()} - Organo. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;