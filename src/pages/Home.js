import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mint-50 to-white section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Jona — <span className="text-coral-500">artista y creador digital</span>.
              <br />Diseño experiencias, escribo historias y construyo sitios web <span className="text-wine-500">con intención.</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Un solo universo creativo: diseño, código, escritura y música. Trabajo para marcas que quieren ser memorables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                Empezar mi proyecto 
              </Link>
              <Link to="/portfolio" className="border-2 border-wine-500 text-wine-500 hover:bg-wine-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Ver trabajos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-4">Un universo creativo completo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Diseño, código, escritura y estrategia. Todo lo que necesitas para que tu marca sea memorable.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Diseño & Branding',
                icon: '🎨',
                color: 'coral',
                services: ['UX/UI Designer', 'Product Designer', 'Diseño gráfico & Logo', 'Brand Strategist']
              },
              {
                title: 'Escritura & Creatividad',
                icon: '✍️',
                color: 'coral',
                services: ['UX Writer', 'Copywriter creativo', 'Escritor de eBooks', 'Creador de contenido']
              },
              {
                title: 'Tecnología & Desarrollo',
                icon: '💻',
                color: 'tech',
                services: ['Frontend Developer', 'Backend Developer', 'Web Developer', 'Tutor freelance']
              },
              {
                title: 'Comunidades & Estrategia',
                icon: '🌐',
                color: 'gold',
                services: ['Community Builder', 'Community Manager', 'Estrategias de contenido', 'Growth Marketing']
              }
            ].map((cluster, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group bg-white border-2 border-gray-100 hover:border-${cluster.color}-300 p-6 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className={`w-16 h-16 bg-${cluster.color}-100 group-hover:bg-${cluster.color}-500 rounded-xl flex items-center justify-center text-2xl mb-4 transition-all duration-300`}>
                  <span className={`group-hover:scale-110 transition-transform duration-300`}>{cluster.icon}</span>
                </div>
                
                <h3 className={`text-xl font-bold text-black group-hover:text-${cluster.color}-600 mb-4 transition-colors duration-300`}>
                  {cluster.title}
                </h3>
                
                <ul className="space-y-2">
                  {cluster.services.map((service, serviceIndex) => (
                    <motion.li
                      key={serviceIndex}
                      className="text-gray-600 group-hover:text-gray-700 text-sm flex items-center transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (serviceIndex * 0.05) }}
                    >
                      <span className={`w-1.5 h-1.5 bg-${cluster.color}-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                      {service}
                    </motion.li>
                  ))}
                </ul>
                
                <div className={`mt-6 pt-4 border-t border-gray-100 group-hover:border-${cluster.color}-200 transition-colors duration-300`}>
                  <span className={`text-${cluster.color}-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Ver más →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link to="/servicios" className="bg-gradient-to-r from-coral-500 to-wine-500 hover:from-coral-600 hover:to-wine-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Ver todos los servicios
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="section-padding bg-mint-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black mb-4">Resultados, no solo páginas</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Velocidad',
                description: '+90 en Lighthouse garantizado',
                icon: '⚡',
                color: 'gold'
              },
              {
                title: 'Mensajes claros',
                description: 'UX writing y copy que venden',
                icon: '💬',
                color: 'tech'
              },
              {
                title: 'Diseño con intención',
                description: 'Branding, UI y storytelling en un mismo lugar',
                icon: '🎨',
                color: 'coral'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white border-2 border-${item.color}-100 hover:border-${item.color}-300 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 group`}
              >
                <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
                <h3 className={`text-xl font-bold text-${item.color}-700 mb-2`}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Portfolio */}
      <section className="section-padding bg-mint-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Trabajos recientes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'E-commerce Boutique', category: 'Tienda Online', color: 'coral' },
              { title: 'Estudio Creativo', category: 'Portfolio', color: 'wine' },
              { title: 'SaaS Platform', category: 'Web App', color: 'tech' }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`h-48 bg-${project.color}-100 flex items-center justify-center`}>
                  <span className={`text-${project.color}-600 font-semibold`}>{project.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/portfolio" className="bg-wine-500 hover:bg-wine-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Ver más trabajos
            </Link>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Proceso en 4 pasos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Descubrimiento', description: 'charlamos sobre tu visión y objetivos.' },
              { step: '2', title: 'Wireframe & Story', description: 'estructura clara + mensajes que conecten.' },
              { step: '3', title: 'Diseño & Desarrollo', description: 'lo visual y lo técnico caminan juntos.' },
              { step: '4', title: 'Lanzamiento & Evolución', description: 'Deploy, métricas y crecimiento continuo.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí Teaser */}
      <section className="section-padding bg-gradient-to-br from-black via-wine-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-mint-500/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container-max relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white">Soy </span>
              <span className="text-white">Jona</span> 
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Fusiono <span className="text-coral-400 font-medium">arte</span>, <span className="text-gold-400 font-medium">escritura</span> y <span className="text-mint-400 font-medium">tecnología</span> para crear experiencias digitales con alma.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Cuando no estoy diseñando, compongo música o escribo historias. <span className="text-coral-300">Tu proyecto no es un número, es parte de mi universo.</span>
            </motion.p>
            
            {/* Creative elements */}
            <motion.div 
              className="flex justify-center items-center space-x-8 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-500/20 to-coral-600/20 border border-coral-400/30 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  🎨
                </div>
                <span className="text-coral-400 text-sm font-medium">Diseño</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-400/30 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  ✍️
                </div>
                <span className="text-gold-400 text-sm font-medium">Escritura</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-mint-500/20 to-mint-600/20 border border-mint-400/30 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  🎵
                </div>
                <span className="text-mint-400 text-sm font-medium">Música</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-tech-500/20 to-tech-600/20 border border-tech-400/30 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  💻
                </div>
                <span className="text-tech-400 text-sm font-medium">Código</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link 
                to="/sobre-mi" 
                className="inline-flex items-center bg-gradient-to-r from-coral-500 to-wine-500 hover:from-coral-600 hover:to-wine-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
              >
                Conoce mi historia
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="section-padding bg-gradient-to-br from-wine-50 to-coral-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Mi filosofía</h2>
            <p className="text-gray-600">Algunas cosas en las que creo profundamente</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                text: "Creo que un proyecto no es solo entregar, es transformar cómo te ven.",
                context: "Sobre el impacto"
              },
              {
                text: "El mejor código es el que no necesita explicación. El mejor diseño es el que se siente inevitable.",
                context: "Sobre la simplicidad"
              },
              {
                text: "Cada marca tiene una historia única. Mi trabajo es encontrarla y hacerla brillar.",
                context: "Sobre el storytelling"
              },
              {
                text: "La creatividad sin estrategia es arte. La estrategia sin creatividad es aburrida. Necesitas ambas.",
                context: "Sobre el equilibrio"
              }
            ].map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-coral-100 hover:border-coral-300 transition-all duration-300 group"
              >
                <div className="text-4xl text-coral-500 mb-4 group-hover:scale-110 transition-transform duration-300">“</div>
                <p className="text-gray-800 text-lg leading-relaxed mb-6 italic">{quote.text}</p>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-coral-500 to-wine-500 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-wine-600">Jona</div>
                    <div className="text-coral-500 text-sm">{quote.context}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Preguntas frecuentes</h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto tiempo toma un proyecto?",
                a: "Depende del alcance, pero típicamente entre 2-6 semanas desde el brief hasta el lanzamiento."
              },
              {
                q: "¿Incluyes el contenido y copywriting?",
                a: "Sí, el copy estratégico está incluido. Trabajamos juntos para crear mensajes que conviertan."
              },
              {
                q: "¿Qué pasa después del lanzamiento?",
                a: "Incluyo 30 días de soporte y ajustes. También ofrezco planes de mantenimiento mensual."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 pb-6"
              >
                <h3 className="text-lg font-semibold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-wine-500">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para que tu marca suene fuerte en Internet?
            </h2>
            <p className="text-wine-100 mb-8 max-w-2xl mx-auto">
              Conversemos sobre tu proyecto. Te respondo en menos de 24 horas con una propuesta personalizada.
            </p>
            <Link to="/contacto" className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Empezar mi proyecto
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;