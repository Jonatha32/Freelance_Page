import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageSelector';
import PaymentMethods from './PaymentMethods';

const Footer = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white border-t border-gray-700/30">
      <div className="container-max py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Descripción */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-coral-400 to-wine-400 bg-clip-text text-white">
                Jonathan Pérez
              </h3>
              <p className="text-coral-300 text-sm font-medium">
                {language === 'es' ? 'Artista Digital & Desarrollador Creativo' : 'Digital Artist & Creative Developer'}
              </p>
            </div>
            
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              {language === 'es'
                ? 'Fusiono arte, tecnología y estrategia para crear experiencias digitales que conectan, convierten y trascienden.'
                : 'I merge art, technology and strategy to create digital experiences that connect, convert and transcend.'
              }
            </p>
            
            {/* Redes Sociales */}
            <div className="flex space-x-3">
              {[
                { href: 'mailto:jonaperez.dev@gmail.com', icon: '📧', color: 'hover:bg-red-600', label: 'Email' },
                { href: 'https://wa.me/59892934394', icon: '💬', color: 'hover:bg-green-600', label: 'WhatsApp' },
                { href: '#', icon: '💼', color: 'hover:bg-blue-600', label: 'LinkedIn' },
                { href: '#', icon: '⚡', color: 'hover:bg-purple-600', label: 'GitHub' }
              ].map((social) => (
                <a key={social.label}
                   href={social.href} 
                   className={`w-12 h-12 bg-gray-800/30 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-gray-600/20 hover:border-coral-400/30`}
                   title={social.label}>
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {[
                { name: language === 'es' ? 'Servicios' : 'Services', href: '/servicios' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: language === 'es' ? 'Sobre mí' : 'About', href: '/sobre-mi' },
                { name: 'Blog', href: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} 
                        className="text-gray-300 hover:text-coral-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white text-sm mb-1">Email</p>
                <a href="mailto:jonaperez.dev@gmail.com" 
                   className="text-gray-300 hover:text-coral-400 transition-colors duration-300 text-sm">
                  jonaperez.dev@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white text-sm mb-1">WhatsApp</p>
                <a href="https://wa.me/59892934394" target='_blank' rel='noreferrer'
                   className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm">
                  {language === 'es' ? 'Respuesta rápida' : 'Quick response'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-16">
          <PaymentMethods variant="footer" />
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-700/30 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 text-sm">
              {language === 'es' 
                ? '© 2025 Jona Pérez. Todos los derechos reservados.'
                : '© 2025 Jona Pérez. All rights reserved.'
              }
            </p>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <Link to="/privacidad" className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  {language === 'es' ? 'Privacidad' : 'Privacy'}
                </Link>
                <Link to="/terminos" className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  {language === 'es' ? 'Términos' : 'Terms'}
                </Link>
              </div>
              
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-coral-500/10 to-wine-500/10 border border-coral-400/20 rounded-full">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                <span className="text-coral-300 text-xs font-medium">
                  {language === 'es' ? 'Disponible para proyectos' : 'Available for projects'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;