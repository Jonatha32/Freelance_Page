import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Hero Épico */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white section-padding overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-coral-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mint-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-coral-400 via-gold-400 to-mint-400 bg-clip-text text-white">
                DE ARTISTA
              </span>
              <br />
              <span className="text-white">A CREADOR DIGITAL</span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 mb-8 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              🎵 Transformo ideas en experiencias digitales memorables,
              <span className="text-mint-300 font-bold"> combinando sensibilidad artística con excelencia técnica.</span>
            </motion.p>
            
            <motion.div
              className="w-40 h-1 bg-gradient-to-r from-coral-500 via-gold-500 to-mint-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Storytelling Épico */}
      <section className="section-padding bg-gradient-to-br from-white to-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              🎼 MI HISTORIA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La música me enseñó que cada detalle importa: una nota, un silencio, un ritmo. 
              <span className="font-bold text-gray-800">Hoy aplico esa filosofía al diseño y al código, creando proyectos que no solo funcionan, sino que emocionan.</span>
            </p>
          </motion.div>

          <div className="space-y-20">
            {/* Capítulo 1: Raíces */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="bg-gradient-to-br from-coral-50 to-coral-100 p-10 rounded-3xl border border-coral-200">
                <div className="text-6xl mb-6">🎵</div>
                <h3 className="text-3xl font-black text-coral-700 mb-6">CAPÍTULO 1: LAS RAÍCES</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Todo comenzó con un piano y la obsesión por crear algo que <span className="font-bold text-coral-600">tocara el alma</span>. 
                  En el mundo de la música aprendí que <span className="font-bold">cada nota importa, cada pausa tiene significado</span>, 
                  y que la verdadera magia sucede cuando la técnica se encuentra con la emoción.
                </p>
                <div className="bg-coral-200/50 p-4 rounded-xl border-l-4 border-coral-500">
                  <p className="text-coral-800 font-semibold italic">
                    "La música me enseñó que la perfección técnica sin alma es solo ruido. 
                    Hoy aplico esa filosofía a cada línea de código."
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900">⚡ Qué aporto a tu proyecto</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Experiencias digitales con conexión emocional</h5>
                      <p className="text-gray-600">No solo interfaces bonitas, sino experiencias que tus usuarios recordarán y amarán.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Código limpio, escalable y flexible</h5>
                      <p className="text-gray-600">Arquitectura sólida que crece con tu negocio, como una buena composición musical.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Diseños con ritmo, fluidez y atención obsesiva al detalle</h5>
                      <p className="text-gray-600">Cada pixel, animación e interacción orquestada para crear la experiencia perfecta.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Capítulo 2: Transformación */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1 space-y-6">
                <h4 className="text-2xl font-bold text-gray-900">🎯 Resultados concretos</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Innovación sin perder funcionalidad</h5>
                      <p className="text-gray-600">Creatividad disruptiva con bases técnicas sólidas para resultados extraordinarios.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Diferenciación de marca auténtica</h5>
                      <p className="text-gray-600">Tu proyecto no será uno más del montón. Será esa melodía digital que no se olvida.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Soluciones escalables que evolucionan</h5>
                      <p className="text-gray-600">Como un músico que improvisa, creo sistemas flexibles que crecen con tu visión.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 bg-gradient-to-br from-gold-50 to-gold-100 p-10 rounded-3xl border border-gold-200">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-3xl font-black text-gold-700 mb-6">CAPÍTULO 2: LA TRANSFORMACIÓN</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  El día que descubrí que <span className="font-bold text-gold-600">el código podía ser tan expresivo como una canción</span>, 
                  todo cambió. No abandoné el arte, lo expandí. Ahora cada proyecto es una sinfonía digital donde 
                  <span className="font-bold"> la creatividad y la tecnología danzan juntas</span>.
                </p>
                <div className="bg-gold-200/50 p-4 rounded-xl border-l-4 border-gold-500">
                  <p className="text-gold-800 font-semibold italic">
                    "Descubrí que la mejor tecnología es invisible. Como una buena canción, 
                    simplemente te hace sentir algo especial."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Capítulo 3: El Presente */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center bg-gradient-to-br from-mint-50 to-mint-100 p-12 rounded-3xl border border-mint-200"
            >
              <div className="text-6xl mb-6">🎆</div>
              <h3 className="text-4xl font-black text-mint-700 mb-8">CAPÍTULO 3: EL PRESENTE</h3>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Hoy, cada proyecto es una oportunidad de crear algo único. 
                <span className="font-bold text-mint-600">No hago sitios web, compongo experiencias digitales</span>. 
                No escribo código, <span className="font-bold text-mint-700">creo sinfonías interactivas que conectan marcas con personas de formas auténticas y memorables</span>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎨</span>
                  </div>
                  <h4 className="font-black text-gray-900 mb-2">EXPERIENCIAS MEMORABLES</h4>
                  <p className="text-gray-600">Cada proyecto es una sinfonía digital única que emociona</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h4 className="font-black text-gray-900 mb-2">CÓDIGO LIMPIO & ESCALABLE</h4>
                  <p className="text-gray-600">Arquitectura sólida que evoluciona con tu visión</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-mint-500 to-mint-500 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h4 className="font-black text-gray-900 mb-2">DIFERENCIACIÓN AUTÉNTICA</h4>
                  <p className="text-gray-600">Tu marca sonará diferente en el mundo digital</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-coral-400 to-gold-400 bg-clip-text text-transparent">
                🎹 STACK FAVORITO
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Las herramientas que uso para orquestar sinfonías digitales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                category: 'Frontend',
                icon: '⚡',
                tools: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                category: 'Backend',
                icon: '🛠️',
                tools: ['Node.js', 'PostgreSQL', 'APIs REST', 'Supabase'],
                gradient: 'from-green-500 to-teal-500'
              },
              {
                category: 'Diseño',
                icon: '🎨',
                tools: ['Figma', 'Adobe CC', 'Framer', 'Canva'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                category: 'DevOps',
                icon: '🚀',
                tools: ['Git', 'Vercel', 'Docker', 'CI/CD'],
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stack.gradient} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stack.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre Aspiracional Épico */}
      <section className="relative section-padding bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral-500 via-gold-500 to-mint-500 animate-pulse"></div>
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-coral-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mint-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-coral-400 via-white to-coral-400-400 bg-clip-text text-white">
                CONSTRUYAMOS
              </span>
              <br />
              <span className="text-white">TU PRÓXIMA</span>
              <br />
              <span className="bg-gradient-to-r from-mint-400 via-gold-400 to-coral-400 bg-clip-text text-white">
                SINFONÍA DIGITAL
              </span>
            </h2>
            
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              🚀 Tu marca no será una más: será esa melodía que tus usuarios recordarán.
              <br className="hidden md:block" />
              <span className="text-coral-300 font-bold">Cada gran proyecto comienza con una conversación.</span>
              <br className="hidden md:block" />
              <span className="text-gold-300 font-bold">¿Listo para crear algo extraordinario juntos?</span>
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button className="bg-gradient-to-r from-coral-500 via-gold-500 to-mint-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                🎵 CREAR JUNTOS
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300">
                🎨 VER PORTFOLIO
              </button>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">SENSIBILIDAD ARTÍSTICA</h3>
                <p className="text-white/70">Donde la creatividad musical se encuentra con el código</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">EXCELENCIA TÉCNICA</h3>
                <p className="text-white/70">Código limpio que funciona como una sinfonía perfecta</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-mint-500 to-mint-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🎆</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">MARCA MEMORABLE</h3>
                <p className="text-white/70">Tu proyecto será esa melodía digital que no se olvida</p>
              </div>
            </motion.div>
            
            <motion.div
              className="mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
            >
              <p className="text-xl text-white/90 italic font-medium">
                "La música me enseñó que cada detalle importa: una nota, un silencio, un ritmo. 
                <br className="hidden md:block" />
                Hoy aplico esa sensibilidad artística al mundo digital. 
                <span className="text-coral-300 font-bold">Tu proyecto puede ser la próxima sinfonía digital que emocione y convierta.</span>"
              </p>
              <div className="mt-6">
                <span className="text-gold-400 font-bold text-lg">- Jonathan Pérez</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coral-500 via-gold-500 to-mint-500 animate-pulse"></div>
      </section>
    </div>
  );
};

export default About;