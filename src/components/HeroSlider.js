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
      title: language === 'es' ? 'Hey, soy Jona — diseñador, creador digital y artista en construcción.' : 'Hey, I\'m Jona — designer, digital creator and artist in construction.',
      subtitle: language === 'es' ? 'Construyo sitios web con intención, emoción y propósito.' : 'I build websites with intention, emotion and purpose.',
      description: language === 'es' ? 'Donde el diseño se encuentra con la historia.' : 'Where design meets story.',
      button: language === 'es' ? 'Ver mis trabajos' : 'View my work',
      buttonLink: '/portfolio',
      bg: 'bg-gradient-to-br from-gray-50 via-white to-coral-50',
      textColor: 'text-gray-900'
    },
    {
      id: 'services',
      title: language === 'es' ? 'Tu marca merece más que un sitio bonito.' : 'Your brand deserves more than a pretty site.',
      subtitle: language === 'es' ? 'Diseño webs rápidas, claras y con mensajes que convierten.' : 'I design fast, clear websites with messages that convert.',
      description: language === 'es' ? 'Performance, contenido y emoción: todo en un mismo lugar.' : 'Performance, content and emotion: all in one place.',
      button: language === 'es' ? 'Pedir cotización' : 'Request quote',
      buttonLink: '/contacto',
      bg: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
      textColor: 'text-white'
    },
    {
      id: 'artistic',
      title: language === 'es' ? 'El arte también tiene código.' : 'Art also has code.',
      subtitle: language === 'es' ? 'Soy músico, compositor y soñador.' : 'I\'m a musician, composer and dreamer.',
      description: language === 'es' ? 'Cada pixel que creo lleva ritmo, emoción y verdad.' : 'Every pixel I create carries rhythm, emotion and truth.',
      button: language === 'es' ? 'Escuchar mis canciones' : 'Listen to my songs',
      buttonLink: '/sobre-mi',
      bg: 'bg-gradient-to-br from-purple-600 via-violet-700 to-purple-800',
      textColor: 'text-white'
    },
    {
      id: 'innovation',
      title: language === 'es' ? 'IA + Creatividad: el futuro del diseño ya llegó.' : 'AI + Creativity: the future of design is here.',
      subtitle: language === 'es' ? 'Implemento inteligencia artificial para optimizar contenido.' : 'I implement artificial intelligence to optimize content.',
      description: language === 'es' ? 'Genero ideas y creo experiencias únicas.' : 'I generate ideas and create unique experiences.',
      button: language === 'es' ? 'Ver cómo trabajo' : 'See how I work',
      buttonLink: '/servicios',
      bg: 'bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800',
      textColor: 'text-white'
    },
    {
      id: 'connect',
      title: language === 'es' ? 'Más que un diseñador, un aliado en tu visión.' : 'More than a designer, an ally in your vision.',
      subtitle: language === 'es' ? 'Cada proyecto es personal.' : 'Every project is personal.',
      description: language === 'es' ? 'Si tu marca sueña en grande, hablemos.' : 'If your brand dreams big, let\'s talk.',
      button: language === 'es' ? 'Hablemos' : 'Let\'s talk',
      buttonLink: '/contacto',
      bg: 'bg-gradient-to-br from-coral-100 via-coral-50 to-white',
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
    <section className="relative h-[70vh] min-h-[525px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute inset-0 ${slides[currentSlide].bg}`}
        >
          {/* Sophisticated background elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 right-0 w-1/3 h-full opacity-5"
              style={{
                background: `radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)`
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Geometric patterns */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-current rounded-full animate-pulse" />
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-current rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-current rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.h1
                      className={`text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight ${slides[currentSlide].textColor}`}
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {slides[currentSlide].title}
                    </motion.h1>

                    <motion.p
                      className={`text-xl lg:text-2xl mb-4 font-medium opacity-90 ${slides[currentSlide].textColor}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>

                    <motion.p
                      className={`text-lg mb-8 opacity-80 max-w-2xl leading-relaxed ${slides[currentSlide].textColor}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {slides[currentSlide].description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Link
                        to={slides[currentSlide].buttonLink}
                        className={`group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                          slides[currentSlide].textColor === 'text-gray-900'
                            ? 'bg-coral-500 text-white hover:bg-coral-600'
                            : 'bg-white text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {slides[currentSlide].button}
                          <motion.span
                            className="inline-block"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </span>
                      </Link>

                      <Link
                        to="/portfolio"
                        className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                          slides[currentSlide].textColor === 'text-gray-900'
                            ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                            : 'border-white text-white hover:bg-white hover:text-gray-900'
                        }`}
                      >
                        {language === 'es' ? 'Ver trabajos' : 'View work'}
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Stats/Info Panel */}
                <div className="lg:col-span-4">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <div className="space-y-4">
                      {[
                        { label: language === 'es' ? 'Proyectos completados' : 'Projects completed', value: '50+' },
                        { label: language === 'es' ? 'Clientes satisfechos' : 'Happy clients', value: '98%' },
                        { label: language === 'es' ? 'Años de experiencia' : 'Years experience', value: '5+' }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm opacity-80">{stat.label}</span>
                          <span className="text-xl font-bold text-coral-400">
                            {stat.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Minimal Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-20">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60 w-2'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all duration-200"
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
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <motion.div
          className="h-full bg-coral-500"
          initial={{ width: '0%' }}
          animate={{ width: isPlaying ? '100%' : '0%' }}
          transition={{ duration: isPlaying ? 7 : 0, ease: 'linear' }}
          key={`${currentSlide}-${isPlaying}`}
        />
      </div>
    </section>
  );
};

export default HeroSlider;