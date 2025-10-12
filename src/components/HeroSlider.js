import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageSelector';

const HeroSlider = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 'intro',
      title: language === 'es' ? 'Hola, soy Jona — artista y creador digital.' : 'Hi, I\'m Jona — artist and digital creator.',
      subtitle: language === 'es' ? 'Diseño, construyo y elevo marcas con propósito, arte y estrategia.' : 'I design, build and elevate brands with purpose, art and strategy.',
      button: language === 'es' ? 'Conocé mi historia' : 'Know my story',
      buttonLink: '/sobre-mi',
      bg: 'linear-gradient(135deg, #1a1a1a 0%, #1a1a1a 100%)',
      textColor: 'text-white'
    },
    {
      id: 'branding',
      title: language === 'es' ? '¿Tu marca no refleja lo que querés transmitir?' : 'Your brand doesn\'t reflect what you want to convey?',
      subtitle: language === 'es' ? 'Rediseñemos su esencia. Te ayudo a construir una identidad visual que hable por vos.' : 'Let\'s redesign its essence. I help you build a visual identity that speaks for you.',
      button: language === 'es' ? 'Agendá tu consultoría gratuita' : 'Schedule your free consultation',
      buttonLink: '/contacto',
      bg: 'linear-gradient(135deg, #d4af37 20%)',
      textColor: 'text-gray-900'
    },
    {
      id: 'web',
      title: language === 'es' ? 'Sitios web rápidos, limpios y con intención.' : 'Fast, clean and intentional websites.',
      subtitle: language === 'es' ? 'Diseño, contenido y performance en un mismo lugar. Resultados, no promesas.' : 'Design, content and performance in one place. Results, not promises.',
      button: language === 'es' ? 'Ver mis trabajos' : 'View my work',
      buttonLink: '/portfolio',
      bg: 'linear-gradient(135deg, #000000, #2d2d2d 100%)',
      textColor: 'text-white'
    },
    {
      id: 'music',
      title: language === 'es' ? 'También hago música. Es mi otra forma de contar historias.' : 'I also make music. It\'s my other way of telling stories.',
      subtitle: language === 'es' ? 'Escuchá mis canciones y descubrí el universo detrás de cada letra.' : 'Listen to my songs and discover the universe behind each lyric.',
      button: 'Spotify',
      buttonLink: '#',
      secondButton: 'YouTube',
      secondButtonLink: '#',
      bg: 'linear-gradient(135deg, #ff4d4d 0%, #cc3333 50%, #ff4d4d 100%)',
      textColor: 'text-white'
    },
    {
      id: 'connect',
      title: language === 'es' ? 'Conectemos.' : 'Let\'s connect.',
      subtitle: language === 'es' ? 'Seguime en redes o escribime si querés crear algo grande.' : 'Follow me on social media or write to me if you want to create something big.',
      bg: 'linear-gradient(135deg, #d4af37 50%)',
      textColor: 'text-gray-900'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length, isPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ background: slides[currentSlide].bg }}
        >
          <div className="absolute inset-0 bg-black/10" />
          
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="container-max">
              <div className="max-w-4xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className={`text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight tracking-tight ${slides[currentSlide].textColor}`}
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`text-lg lg:text-xl mb-8 leading-relaxed max-w-3xl ${slides[currentSlide].textColor} opacity-90`}
                  style={{ letterSpacing: '0.01em' }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  {slides[currentSlide].button && (
                    <Link
                      to={slides[currentSlide].buttonLink}
                      className={`group relative overflow-hidden px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                        slides[currentSlide].textColor === 'text-white'
                          ? 'bg-white text-gray-900 hover:bg-gray-100'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      <span className="relative z-10">{slides[currentSlide].button}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </Link>
                  )}

                  {slides[currentSlide].secondButton && (
                    <Link
                      to={slides[currentSlide].secondButtonLink}
                      className={`px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                        slides[currentSlide].textColor === 'text-white'
                          ? 'border-white text-white hover:bg-white hover:text-gray-900'
                          : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                      }`}
                    >
                      {slides[currentSlide].secondButton}
                    </Link>
                  )}

                  {slides[currentSlide].id === 'connect' && (
                    <div className="w-full mt-6">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl">
                        {[
                          { name: 'Instagram', link: '#', icon: 'fab fa-instagram', color: 'from-purple-500 to-pink-500' },
                          { name: 'Linktree', link: '#', icon: 'fas fa-link', color: 'from-green-400 to-green-600' },
                          { name: 'TikTok', link: '#', icon: 'fab fa-tiktok', color: 'from-black to-gray-800' },
                          { name: 'YouTube', link: '#', icon: 'fab fa-youtube', color: 'from-red-500 to-red-600' }
                        ].map((social, index) => (
                          <motion.a
                            key={index}
                            href={social.link}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            className={`bg-gradient-to-br ${social.color} text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center text-center min-h-[120px] group`}
                          >
                            <i className={`${social.icon} text-3xl mb-3 group-hover:scale-110 transition-transform duration-300`}></i>
                            <span className="font-semibold text-sm group-hover:scale-105 transition-transform duration-300">{social.name}</span>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-6 right-6 z-20 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        {isPlaying ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-12 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60 w-2'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-white via-yellow-200 to-white"
          initial={{ width: '0%' }}
          animate={{ width: isPlaying ? '100%' : '0%' }}
          transition={{ duration: isPlaying ? 7 : 0, ease: 'linear' }}
          key={`${currentSlide}-${isPlaying}`}
        />
      </div>

      <motion.div
        className="absolute right-8 bottom-20 text-white/60 text-sm z-20"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {language === 'es' ? 'desliza →' : 'swipe →'}
      </motion.div>
    </section>
  );
};

export default HeroSlider;