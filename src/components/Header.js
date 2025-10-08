import React, { useState, useEffect } from 'react';
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
    { name: language === 'es' ? 'Sobre mí' : 'About', href: '/sobre-mi' },
    { name: 'Blog', href: '/blog' },
    { name: language === 'es' ? 'Contacto' : 'Contact', href: '/contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-coral-100' 
          : 'bg-white shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo Épico */}
          <Link to="/" className="group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-coral-500/20 via-gold-500/20 to-wine-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo container */}
              <div className="">
                <motion.img 
                  src="/logoo.png" 
                  alt="Logo" 
                  className="w-14 object-contain filter drop-shadow-sm"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Sparkle effects */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-coral-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse" />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    location.pathname === item.href
                      ? 'text-coral-600 bg-coral-50'
                      : 'text-gray-700 hover:text-coral-600 hover:bg-coral-50'
                  }`}
                >
                  {item.name}
                  {/* Active indicator */}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-coral-500 rounded-full"
                      layoutId="activeTab"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{ x: '-50%' }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-coral-500/10 to-wine-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="ml-4"
            >
              <Link
                to="/contacto"
                className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {language === 'es' ? 'Cotizar' : 'Quote'}
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-coral-50 transition-colors duration-200"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span 
                className="bg-coral-600 block h-0.5 w-6 rounded-sm"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : -2
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="bg-coral-600 block h-0.5 w-6 rounded-sm my-1"
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="bg-coral-600 block h-0.5 w-6 rounded-sm"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 2
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-gradient-to-br from-coral-50 to-mint-50 rounded-xl mx-4 mb-4"
        >
          <div className="p-4 space-y-2">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isMenuOpen ? 0 : -20, 
                  opacity: isMenuOpen ? 1 : 0 
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'text-coral-600 bg-white shadow-sm'
                      : 'text-gray-700 hover:text-coral-600 hover:bg-white/50'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: isMenuOpen ? 0 : -20, 
                opacity: isMenuOpen ? 1 : 0 
              }}
              transition={{ delay: navigation.length * 0.1 }}
              className="pt-2"
            >
              <Link
                to="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-coral-500 hover:bg-coral-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                {language === 'es' ? 'Cotizar Proyecto' : 'Get Quote'}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;