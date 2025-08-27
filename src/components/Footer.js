import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Efectos de fondo épicos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral-500 via-gold-500 to-mint-500 animate-pulse"></div>
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-coral-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mint-500/10 rounded-full blur-3xl"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-coral-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-gold-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-mint-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="relative container-max section-padding">
        {/* Hero Section del Footer */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          
        </motion.div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Descripción Épica */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-white text-center mb-6 text-transparent bg-gradient-to-r from-white to-coral-450 bg-clip-text-400 to-gold-400 bg-clip-text">
                ⚡ MISIÓN ÉPICA
              </h3>
              
              <p className="text-xl text-white leading-relaxed mb-6">
                Construyo sitios web <span className="text-coral-400 font-bold">rápidos</span> y con 
                <span className="text-gold-400 font-bold"> intención</span> para marcas que quieren 
                <span className="text-mint-400 font-bold">sonar fuerte</span> en Internet.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-coral-500/20 to-coral-600/20 border border-coral-400/30 rounded-full text-coral-300 font-semibold">
                  🎨 Creatividad Artística
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-gold-500/20 to-gold-600/20 border border-gold-400/30 rounded-full text-gold-300 font-semibold">
                  ⚡ Excelencia Técnica
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-mint-500/20 to-mint-600/20 border border-mint-400/30 rounded-full text-mint-300 font-semibold">
                  🚀 Innovación Digital
                </span>
              </div>

              {/* Redes Sociales Épicas */}
              <div className="flex space-x-4">
                {[
                  { icon: '📧', href: 'mailto:tu@email.com', color: 'from-red-500 to-red-600', label: 'Email' },
                  { icon: '💬', href: 'https://wa.me/1234567890', color: 'from-green-500 to-green-600', label: 'WhatsApp' },
                  { icon: '💼', href: '#', color: 'from-blue-500 to-blue-600', label: 'LinkedIn' },
                  { icon: '⚡', href: '#', color: 'from-purple-500 to-purple-600', label: 'GitHub' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`group relative w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:rotate-12 transition-all duration-500`}
                    whileHover={{ y: -10, rotate: 12 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    <span className="relative z-10 filter drop-shadow-lg">{social.icon}</span>
                    <div className="absolute inset-0 bg-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navegación y Contacto */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Navegación */}
            <div className="bg-gradient-to-br from-coral-500/10 to-coral-600/10 backdrop-blur-sm rounded-2xl p-6 border border-coral-400/20">
              <h3 className="font-black text-2xl mb-6 text-coral-400 flex items-center">
                🎯 <span className="ml-2">NAVEGACIÓN</span>
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Servicios', href: '/servicios', icon: '🛠️' },
                  { name: 'Portfolio', href: '/portfolio', icon: '🎨' },
                  { name: 'Sobre mí', href: '/sobre-mi', icon: '🚀' },
                  { name: 'Blog', href: '/blog', icon: '✍️' }
                ].map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <Link 
                      to={link.href} 
                      className="group flex items-center text-white hover:text-coral-300 transition-all duration-300 font-bold text-lg p-2 rounded-lg hover:bg-coral-500/20"
                    >
                      <span className="mr-3 text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">{link.icon}</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                      <div className="ml-auto w-0 group-hover:w-8 h-1 bg-coral-400 rounded-full transition-all duration-300"></div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/10 backdrop-blur-sm rounded-2xl p-6 border border-gold-400/20">
              <h3 className="font-black text-2xl mb-6 text-gold-400 flex items-center">
                📞 <span className="ml-2">CONTACTO</span>
              </h3>
              <div className="space-y-4">
                <motion.a 
                  href="mailto:tu@email.com" 
                  className="group flex items-center p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl border border-red-400/30 hover:border-red-400/60 transition-all duration-300 hover:scale-105"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Email</div>
                    <div className="text-red-300 font-medium">tu@email.com</div>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://wa.me/1234567890" 
                  className="group flex items-center p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">WhatsApp</div>
                    <div className="text-green-300 font-medium">Respuesta rápida</div>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divisor Épico */}
        <motion.div 
          className="relative my-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 2 }}
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-coral-500 via-gold-500 via-mint-500 to-transparent rounded-full"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-gradient-to-r from-coral-500 via-gold-500 to-mint-500 rounded-full animate-spin"></div>
          </div>
        </motion.div>

        {/* Footer Bottom Épico */}
        <motion.div 
          className="text-center py-8 bg-gradient-to-r from-black/60 via-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="mb-6">
            <p className="text-2xl font-bold text-white mb-2">
              © 2025 JONA - <span className="text-red-400 animate-pulse text-3xl">♥</span> HECHO CON AMOR Y ☕ CAFÉ
            </p>
            <p className="text-lg text-white/80">
              🌟 Creando el futuro digital, un pixel épico a la vez 🌟
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-6">
              <Link to="/privacidad" className="text-white/80 hover:text-coral-400 font-bold transition-all duration-300 hover:scale-110">
                🔒 PRIVACIDAD
              </Link>
              <Link to="/terminos" className="text-white/80 hover:text-coral-400 font-bold transition-all duration-300 hover:scale-110">
                📋 TÉRMINOS
              </Link>
            </div>
            
            <motion.div 
              className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500/30 to-green-600/30 rounded-full border-2 border-green-400/50"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(34, 197, 94, 0.3)',
                  '0 0 40px rgba(34, 197, 94, 0.6)',
                  '0 0 20px rgba(34, 197, 94, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-black text-lg">🚀 DISPONIBLE PARA PROYECTOS ÉPICOS</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Efecto de brillo en bordes */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coral-500 via-gold-500 to-mint-500 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-coral-500 via-gold-500 to-mint-500 opacity-30"></div>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-mint-500 via-gold-500 to-coral-500 opacity-30"></div>
    </footer>
  );
};

export default Footer;