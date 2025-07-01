import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/devDouglasN', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/douglascloudsec', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:douglas.cloudsec@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
    { to: '/privacy', label: 'Privacy' },
  ];

  return (
    <footer className="bg-cyber-secondary border-t border-cyber-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-green">
                <Shield className="h-6 w-6 text-cyber-primary" />
              </div>
              <span className="text-xl font-bold font-mono neon-text">
                Douglas<span className="text-cyber-neon-green">Sec</span>
              </span>
            </div>
            <p className="text-cyber-text-secondary mb-6 max-w-md">
              Estudante de Segurança da Informação e Analista SOC N1 em início de carreira, 
              apaixonado por proteger ambientes digitais.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-cyber-accent text-cyber-text-secondary hover:text-cyber-neon-cyan hover:bg-cyber-border transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-cyber-text-primary mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-cyber-text-secondary hover:text-cyber-neon-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-cyber-text-primary mb-4">
              Contato
            </h3>
            <div className="space-y-2 text-cyber-text-secondary">
              <p>São Paulo, SP - Brasil</p>
              <p>
                <a
                  href="mailto:douglas.cloudsec@gmail.com"
                  className="hover:text-cyber-neon-cyan transition-colors duration-300"
                >
                  douglas.cloudsec@gmail.com
                </a>
              </p>
              <p>Conecte-se para trocar conhecimento técnico</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cyber-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cyber-text-secondary text-sm mb-4 md:mb-0">
              © {currentYear} Douglas Nascimento. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-1 text-cyber-text-secondary text-sm">
              <span>Desenvolvido com</span>
              <Heart className="h-4 w-4 text-cyber-neon-green" />
              <span>usando React + TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};