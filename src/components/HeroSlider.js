import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageSelector';

const HeroSlider = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [typingText, setTypingText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const motivationalPhrases = useMemo(() => language === 'es' ? [
    "Excelencia en cada detalle.",
    "Innovación que transforma.",
    "Creatividad sin límites.",
    "Resultados extraordinarios.",
    "Visión profesional.",
    "Calidad garantizada.",
    "Experiencias memorables.",
    "Soluciones inteligentes."
  ] : [
    "Excellence in every detail.",
    "Innovation that transforms.",
    "Creativity without limits.",
    "Extraordinary results.",
    "Professional vision.",
    "Quality guaranteed.",
    "Memorable experiences.",
    "Smart solutions."
  ], [language]);

  const slides = useMemo(() => [
    {
      id: 'intro',
      title: language === 'es' ? "Hola, soy Jona — Desarrollador Web y Artista Digital." : "Hi, I'm Jona — Web Developer & Digital Artist.",
      subtitle: language === 'es' ? "Construyo sitios web rápidos e intencionales y creo arte que conecta." : "I build fast, intentional websites and create art that connects.",
      buttons: language === 'es' ? ["Ver mi trabajo", "Pedir cotización"] : ["See my work", "Get a quote"],
      buttonLinks: ["/portfolio", "/contacto"],
      bg: 'bg-gradient-to-br from-purple-300 via-pink-200 to-rose-400',
      textColor: 'text-gray-800'
    },
    {
      id: 'services',
      title: language === 'es' ? "Tu marca merece más que solo un sitio bonito." : "Your brand deserves more than just a pretty site.",
      subtitle: language === 'es' ? "Diseño con propósito, rendimiento y corazón." : "I design with purpose, performance, and heart.",
      buttons: language === 'es' ? ["Construyamos algo genial"] : ["Let's build something great"],
      buttonLinks: ["/contacto"],
      bg: 'bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-200',
      textColor: 'text-gray-800'
    },
    {
      id: 'artistic',
      title: language === 'es' ? "Donde el arte se encuentra con el código." : "Where art meets code.",
      subtitle: language === 'es' ? "Escribo, canto y traigo creatividad a cada pixel." : "I write, sing, and bring creativity into every pixel.",
      buttons: language === 'es' ? ["Escuchar mis canciones", "Ver mi arte"] : ["Listen to my songs", "See my artwork"],
      buttonLinks: ["/sobre-mi", "/portfolio"],
      bg: 'bg-gradient-to-br from-purple-200 via-pink-200 to-rose-300',
      textColor: 'text-gray-800'
    },
    {
      id: 'blog',
      title: language === 'es' ? "Pensamientos, experimentos e ideas." : "Thoughts, experiments & ideas.",
      subtitle: language === 'es' ? "Visita mi blog — donde comparto ideas sobre tecnología, creatividad y vida." : "Visit my blog — where I share insights on tech, creativity, and life.",
      buttons: language === 'es' ? ["Leer mi blog"] : ["Read my blog"],
      buttonLinks: ["/blog"],
      bg: 'bg-gradient-to-br from-green-100 via-emerald-100 to-teal-200',
      textColor: 'text-gray-800',
      typing: true
    },
    {
      id: 'connect',
      title: language === 'es' ? "Conectemos." : "Let's connect.",
      subtitle: language === 'es' ? "Sigue mi viaje o envíame un mensaje." : "Follow my journey or drop a message.",
      buttons: language === 'es' ? ["Ponerse en contacto"] : ["Get in touch"],
      buttonLinks: ["/contacto"],
      bg: 'bg-gradient-to-br from-orange-100 via-amber-200 to-yellow-300',
      textColor: 'text-gray-800',
      social: true
    }
  ], [language]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, isPlaying]);

  useEffect(() => {
    if (slides[currentSlide].typing) {
      const text = slides[currentSlide].title;
      let i = 0;
      setTypingText('');
      const typeTimer = setInterval(() => {
        if (i < text.length) {
          setTypingText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeTimer);
        }
      }, 100);
      return () => clearInterval(typeTimer);
    }
  }, [currentSlide, slides]);

  useEffect(() => {
    const phraseTimer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % motivationalPhrases.length);
    }, 3000);
    return () => clearInterval(phraseTimer);
  }, [motivationalPhrases.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const socialIcons = [
    { 
      name: 'Instagram', 
      url: '#',
      color: 'from-pink-500 to-purple-600',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'X', 
      url: '#',
      color: 'from-gray-700 to-black',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      url: '#',
      color: 'from-red-500 to-red-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: '#',
      color: 'from-blue-500 to-blue-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative min-h-[543px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute inset-0 ${slides[currentSlide].bg}`}
        >
          {/* Background Effects */}
          {slides[currentSlide].id === 'artistic' && (
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          )}

          {slides[currentSlide].id === 'services' && (
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/20 rounded-full" />
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-300/20 rounded-full" />
            </div>
          )}

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.h1
                      className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${slides[currentSlide].textColor}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {slides[currentSlide].typing ? typingText : slides[currentSlide].title}
                      {slides[currentSlide].typing && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="inline-block ml-1"
                        >
                          |
                        </motion.span>
                      )}
                    </motion.h1>

                    <motion.p
                      className={`text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl ${slides[currentSlide].textColor}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      {slides[currentSlide].buttons.map((button, index) => (
                        <Link
                          key={index}
                          to={slides[currentSlide].buttonLinks[index]}
                          className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                            index === 0 ? 'bg-gray-800 text-white hover:bg-gray-900' : 'border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                          }`}
                        >
                          {button}
                        </Link>
                      ))}
                    </motion.div>

                    {slides[currentSlide].social && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex gap-4 mt-8"
                      >
                        {socialIcons.map((social, index) => (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                            whileHover={{ 
                              scale: 1.1, 
                              rotate: [0, -5, 5, 0],
                              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/20 rounded-xl"
                              initial={{ scale: 0, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                            <motion.div
                              className="relative z-10"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {social.icon}
                            </motion.div>
                            <motion.div
                              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-bottom-10 transition-all duration-300"
                            >
                              {social.name}
                            </motion.div>
                          </motion.a>
                        ))} 
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Inspirational Text Sidebar */}
                <div className="lg:col-span-4">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className=""
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPhrase}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.8 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className={`text-center ${slides[currentSlide].textColor} opacity-90`}
                      >
                        <motion.div
                          animate={{ 
                            textShadow: [
                              "0 0 0px rgba(255,255,255,0)",
                              "0 0 10px rgba(255,255,255,0.3)",
                              "0 0 0px rgba(255,255,255,0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-lg font-medium"
                        >
                          {motivationalPhrases[currentPhrase]}
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-20">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/20 hover:bg-black/30 text-white backdrop-blur-sm transition-all duration-200"
        >
          ←
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-black scale-125' : 'bg-black/40 hover:bg-black/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/20 hover:bg-black/30 text-white backdrop-blur-sm transition-all duration-200"
        >
          →
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 rounded-full bg-black/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all duration-200"
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <motion.div
          className="h-full bg-black"
          initial={{ width: '0%' }}
          animate={{ width: isPlaying ? '100%' : '0%' }}
          transition={{ duration: isPlaying ? 6 : 0, ease: 'linear' }}
          key={`${currentSlide}-${isPlaying}`}
        />
      </div>
    </section>
  );
};

export default HeroSlider;