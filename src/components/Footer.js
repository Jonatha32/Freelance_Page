import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-gray-700">
      <div className="container-max py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Descripción */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-coral-400 bg-clip-text text-transparent">
                Jona Pérez
              </h3>
              <p className="text-coral-400 text-sm font-medium">Desarrollador Web Full Stack</p>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Especializado en crear experiencias web modernas y efectivas que 
              impulsan el crecimiento de tu negocio digital.
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
                   className={`w-12 h-12 bg-gray-800/50 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-gray-700/50`}
                   title={social.label}>
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Navegación</h4>
            <ul className="space-y-3">
              {[
                { name: 'Servicios', href: '/servicios' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Sobre mí', href: '/sobre-mi' },
                { name: 'Blog', href: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} 
                        className="text-gray-400 hover:text-coral-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contacto</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Email</p>
                <a href="mailto:jonaperez.dev@gmail.com" 
                   className="text-gray-300 hover:text-coral-400 transition-colors duration-300 text-sm">
                  jonaperez.dev@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">WhatsApp</p>
                <a href="https://wa.me/59892934394" 
                   className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm">
                  Respuesta rápida
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0 text-sm">
              © 2025 Jona Pérez. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <Link to="/privacidad" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
                  Privacidad
                </Link>
                <Link to="/terminos" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
                  Términos
                </Link>
              </div>
              
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-medium">Disponible para proyectos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;