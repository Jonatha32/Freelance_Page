import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageSelector';

const Header = () => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: language === 'es' ? 'Inicio' : 'Home', href: '/' },
    { name: language === 'es' ? 'Servicios' : 'Services', href: '/servicios' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: language === 'es' ? 'Tienda' : 'Shop', href: '/tienda' },
    { name: language === 'es' ? 'Sobre mí' : 'About', href: '/sobre-mi' },
    { name: 'Blog', href: '/blog' },
    { name: language === 'es' ? 'Contacto' : 'Contact', href: '/contacto' },
  ];

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <style jsx global>{`
        body {
          padding-top: 90px;
        }
        @media (max-width: 1024px) {
          body {
            padding-top: 85px;
          }
        }
      `}</style>
      
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? 'bg-white/25 backdrop-blur-xl shadow-2xl border-b border-white/30' 
            : 'bg-white/15 backdrop-blur-lg'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
      <nav className="container-max">
        <div className="flex justify-between items-center py-5">
          <Link to="/" className="group relative" aria-label="Ir al inicio">
            <motion.div
              className="relative flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-gray-900/10 via-gray-700/10 to-gray-900/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative">
                <motion.img 
                  src="/logoo.png" 
                  alt="Jonathan - Desarrollador Web" 
                  className="w-14 object-contain filter drop-shadow-lg"
                  whileHover={{ rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>
              
              <div className="hidden sm:block">
                <motion.h1 
                  className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Jonathan Pérez
                </motion.h1>
                <motion.p 
                  className="text-xs text-gray-600 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {language === 'es' ? 'Desarrollador Web' : 'Web Developer'}
                </motion.p>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2" role="navigation">
            {navigation.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-5 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-400 group ${
                      isActive
                        ? 'text-gray-900 bg-white/40 shadow-lg backdrop-blur-sm'
                        : 'text-gray-800 hover:text-gray-900 hover:bg-white/30'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-xl border border-white/40"
                        layoutId="activeNavItem"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm" />
                  </Link>
                </motion.div>
              );
            })}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="ml-6"
            >
              <Link
                to="/contacto"
                className="relative px-5 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-400 group bg-coral-500/80 hover:bg-coral-600/90 text-white shadow-lg backdrop-blur-sm border border-coral-400/50 hover:border-coral-500"
              >
                <span className="relative z-10">{language === 'es' ? 'Hablemos' : 'Let\'s Talk'}</span>
                
                <div className="absolute inset-0 bg-coral-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm" />
              </Link>
            </motion.div>
          </nav>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 border border-white/30"
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <motion.span 
                className="bg-gray-800 block h-0.5 w-5 rounded-full"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 5 : -1.5
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.span 
                className="bg-gray-800 block h-0.5 w-5 rounded-full my-1"
                animate={{ opacity: isMenuOpen ? 0 : 1, scale: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="bg-gray-800 block h-0.5 w-5 rounded-full"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -5 : 1.5
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:hidden overflow-hidden bg-white/30 backdrop-blur-xl rounded-2xl mx-4 mb-6 border border-white/40 shadow-2xl"
        >
          <nav className="p-6 space-y-3" role="navigation">
            {navigation.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ 
                    x: isMenuOpen ? 0 : -30, 
                    opacity: isMenuOpen ? 1 : 0 
                  }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className={`block py-4 px-5 rounded-xl font-semibold text-base transition-all duration-300 ${
                      isActive
                        ? 'text-gray-900 bg-white/60 shadow-lg backdrop-blur-sm border border-white/50'
                        : 'text-gray-800 hover:text-gray-900 hover:bg-white/40'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
            
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ 
                x: isMenuOpen ? 0 : -30, 
                opacity: isMenuOpen ? 1 : 0 
              }}
              transition={{ delay: navigation.length * 0.08, duration: 0.4 }}
              className="pt-4 border-t border-white/30"
            >
              <Link
                to="/contacto"
                onClick={closeMenu}
                className="block w-full text-center bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white py-4 px-5 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {language === 'es' ? 'Cotizar Proyecto' : 'Get Quote'}
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      </nav>
    </motion.header>
    </>
  );
};

export default Header;