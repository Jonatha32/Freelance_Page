import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageSelector';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  const { language } = useLanguage();
  
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Servicios Principales */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              {language === 'es' ? 'Un universo creativo completo' : 'A complete creative universe'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'es' 
                ? 'Diseño, código, escritura y estrategia. Todo lo que necesitas para que tu marca sea memorable.'
                : 'Design, code, writing and strategy. Everything you need to make your brand memorable.'
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: language === 'es' ? 'Diseño & Branding' : 'Design & Branding',
                icon: '🎨',
                color: 'coral',
                services: language === 'es' 
                  ? ['UX/UI Designer', 'Product Designer', 'Diseño gráfico & Logo', 'Brand Strategist']
                  : ['UX/UI Designer', 'Product Designer', 'Graphic Design & Logo', 'Brand Strategist'],
              },
              {
                title: language === 'es' ? 'Escritura & Creatividad' : 'Writing & Creativity',
                icon: '✍️',
                color: 'coral',
                services: language === 'es'
                  ? ['UX Writer', 'Copywriter creativo', 'Escritor de eBooks', 'Creador de contenido']
                  : ['UX Writer', 'Creative Copywriter', 'eBook Writer', 'Content Creator'],
              },
              {
                title: language === 'es' ? 'Tecnología & Desarrollo' : 'Technology & Development',
                icon: '💻',
                color: 'coral',
                services: language === 'es'
                  ? ['Frontend Developer', 'Backend Developer', 'Web Developer', 'Tutor freelance']
                  : ['Frontend Developer', 'Backend Developer', 'Web Developer', 'Freelance Tutor'],
              },
              {
                title: language === 'es' ? 'Comunidades & Estrategia' : 'Communities & Strategy',
                icon: '🌐',
                color: 'coral',
                services: language === 'es'
                  ? ['Community Builder', 'Community Manager', 'Estrategias de contenido', 'Growth Marketing']
                  : ['Community Builder', 'Community Manager', 'Content Strategies', 'Growth Marketing'],
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
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link to="/servicios" className="inline-flex items-center text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
              {language === 'es' ? 'Ver todos los servicios' : 'View all services'}
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
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
            <h2 className="text-3xl font-bold text-black mb-4">
              {language === 'es' ? 'Resultados, no solo páginas' : 'Results, not just pages'}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-gray-200 py-8">
            {[
              {
                title: language === 'es' ? 'Velocidad' : 'Speed',
                description: language === 'es' ? '+90 en Lighthouse garantizado' : '+90 Lighthouse score guaranteed',
                icon: '⚡',
                color: 'gold'
              },
              {
                title: language === 'es' ? 'Mensajes claros' : 'Clear messages',
                description: language === 'es' ? 'UX writing y copy que venden' : 'UX writing and copy that sells',
                icon: '💬',
                color: 'tech'
              },
              {
                title: language === 'es' ? 'Diseño con intención' : 'Intentional design',
                description: language === 'es' ? 'Branding, UI y storytelling en un mismo lugar' : 'Branding, UI and storytelling in one place',
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
            <h2 className="text-3xl font-bold text-black mb-4">
              {language === 'es' ? 'Trabajos recientes' : 'Recent work'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: language === 'es' ? 'App de Compra y Venta de Productos en desuso' : 'Buy and Sell Used Products App',
                category: language === 'es' ? 'Desarrollo Web' : 'Web Development',
                color: 'coral',
                image: 'https://github.com/Jonatha32/Casse_Landing_Page/blob/main/images/Cass%C3%A9.png?raw=true',
                demo: 'https://jonatha32.github.io/Casse_Landing_Page/'
              },
              {
                title: language === 'es' ? 'Portfolio Arquitecto' : 'Architect Portfolio',
                category: language === 'es' ? 'Sitio Web' : 'Website',
                color: 'wine',
                image: '/El texto del párrafo-Photoroom(2).png',
                demo: 'https://jonatha32.github.io/Portfolio_showcase/'
              },
              {
                title: language === 'es' ? 'Rebrand Empresa Familiar' : 'Family Business Rebrand',
                category: 'Branding',
                color: 'tech',
                image: '/wine.png',
                demo: '/empresa-familiar'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group bg-white border-2 border-gray-100 hover:border-${project.color}-300 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300`}
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full items-center justify-center hidden`}>
                    <span className="text-white text-lg font-semibold">{project.title}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className={` text-sm font-medium mb-2`}>{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  
                  {project.demo.startsWith('http') ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-medium transition-colors duration-200`}
                    >
                      {language === 'es' ? 'Ver proyecto' : 'View project'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      to={project.demo}
                      className={`inline-flex items-center gap-2 font-medium transition-colors duration-200`}
                    >
                      {language === 'es' ? 'Ver proyecto' : 'View project'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/portfolio" className="inline-flex items-center text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
              {language === 'es' ? 'Ver más trabajos' : 'View more work'}
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              {language === 'es' ? 'Proceso en 4 pasos' : '4-step process'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '1', 
                title: language === 'es' ? 'Descubrimiento' : 'Discovery', 
                description: language === 'es' ? 'charlamos sobre tu visión y objetivos.' : 'we talk about your vision and goals.' 
              },
              { 
                step: '2', 
                title: 'Wireframe & Story', 
                description: language === 'es' ? 'estructura clara + mensajes que conecten.' : 'clear structure + messages that connect.' 
              },
              { 
                step: '3', 
                title: language === 'es' ? 'Diseño & Desarrollo' : 'Design & Development', 
                description: language === 'es' ? 'lo visual y lo técnico caminan juntos.' : 'visual and technical walk together.' 
              },
              { 
                step: '4', 
                title: language === 'es' ? 'Lanzamiento & Evolución' : 'Launch & Evolution', 
                description: language === 'es' ? 'Deploy, métricas y crecimiento continuo.' : 'Deploy, metrics and continuous growth.' 
              }
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
      <section className="section-padding bg-coral-900  text-lg transition-colors duration-200 relative overflow-hidden">
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
              {language === 'es' 
                ? <><span className="text-white">Hola, </span><span className="text-white">Soy </span><span className="text-white">Jona</span></>
                : <><span className="text-white">Hi, </span><span className="text-white">I'm </span><span className="text-white">Jona</span></>
              } 
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-white leading-relaxed mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {language === 'es'
                ? <>Fusiono <span className="text-white font-medium">arte</span>, <span className="text-gold-400 font-medium">escritura</span> y <span className="text-mint-400 font-medium">tecnología</span> para crear experiencias digitales con alma.</>
                : <>I merge <span className="text-white font-medium">art</span>, <span className="text-gold-400 font-medium">writing</span> and <span className="text-mint-400 font-medium">technology</span> to create digital experiences with soul.</>
              }
            </motion.p>
            
            <motion.p 
              className="text-lg text-white mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {language === 'es'
                ? <>Cuando no estoy diseñando, compongo música o escribo historias. <span className="text-coral-300">Tu proyecto no es un número, es parte de mi universo.</span></>
                : <>When I'm not designing, I compose music or write stories. <span className="text-coral-300">Your project is not a number, it's part of my universe.</span></>
              }
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
                <span className="text-white text-sm font-medium">{language === 'es' ? 'Diseño' : 'Design'}</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-400/30 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  ✍️
                </div>
                <span className="text-white text-sm font-medium">{language === 'es' ? 'Escritura' : 'Writing'}</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-mint-500/20 to-mint-600/20 border border-mint-400/30 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  🎵
                </div>
                <span className="text-white text-sm font-medium">{language === 'es' ? 'Música' : 'Music'}</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-tech-500/20 to-tech-600/20 border border-tech-400/30 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  💻
                </div>
                <span className="text-white text-sm font-medium">{language === 'es' ? 'Código' : 'Code'}</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link 
                to="/sobre-mi" 
                className="inline-flex items-center text-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
              >
                {language === 'es' ? 'Conoce mi historia' : 'Know my story'}
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
            <h2 className="text-3xl font-bold text-black mb-4">
              {language === 'es' ? 'Mi filosofía' : 'My philosophy'}
            </h2>
            <p className="text-gray-600">
              {language === 'es' ? 'Algunas cosas en las que creo profundamente' : 'Some things I deeply believe in'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                text: language === 'es' 
                  ? "Creo que un proyecto no es solo entregar, es transformar cómo te ven."
                  : "I believe a project is not just delivering, it's transforming how they see you.",
                context: language === 'es' ? "Sobre el impacto" : "About impact"
              },
              {
                text: language === 'es'
                  ? "El mejor código es el que no necesita explicación. El mejor diseño es el que se siente inevitable."
                  : "The best code needs no explanation. The best design feels inevitable.",
                context: language === 'es' ? "Sobre la simplicidad" : "About simplicity"
              },
              {
                text: language === 'es'
                  ? "Cada marca tiene una historia única. Mi trabajo es encontrarla y hacerla brillar."
                  : "Every brand has a unique story. My job is to find it and make it shine.",
                context: language === 'es' ? "Sobre el storytelling" : "About storytelling"
              },
              {
                text: language === 'es'
                  ? "La creatividad sin estrategia es arte. La estrategia sin creatividad es aburrida. Necesitas ambas."
                  : "Creativity without strategy is art. Strategy without creativity is boring. You need both.",
                context: language === 'es' ? "Sobre el equilibrio" : "About balance"
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
            <h2 className="text-3xl font-bold text-black mb-4">
              {language === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: language === 'es' ? "¿Cuánto tiempo toma un proyecto?" : "How long does a project take?",
                a: language === 'es' 
                  ? "Depende del alcance, pero típicamente entre 2-6 semanas desde el brief hasta el lanzamiento."
                  : "It depends on the scope, but typically 2-6 weeks from brief to launch."
              },
              {
                q: language === 'es' ? "¿Incluyes el contenido y copywriting?" : "Do you include content and copywriting?",
                a: language === 'es'
                  ? "Sí, el copy estratégico está incluido. Trabajamos juntos para crear mensajes que conviertan."
                  : "Yes, strategic copy is included. We work together to create messages that convert."
              },
              {
                q: language === 'es' ? "¿Qué pasa después del lanzamiento?" : "What happens after launch?",
                a: language === 'es'
                  ? "Incluyo 30 días de soporte y ajustes. También ofrezco planes de mantenimiento mensual."
                  : "I include 30 days of support and adjustments. I also offer monthly maintenance plans."
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
      <section className="section-padding bg-coral-900 font-semibold">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              {language === 'es' 
                ? '¿Listo para que tu marca suene fuerte en Internet?'
                : 'Ready to make your brand sound strong on the Internet?'
              }
            </h2>
            <p className="text-wine-100 mb-8 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Conversemos sobre tu proyecto. Te respondo en menos de 24 horas con una propuesta personalizada.'
                : 'Let\'s talk about your project. I respond in less than 24 hours with a personalized proposal.'
              }
            </p>
            <Link to="/contacto" className="inline-flex items-center text-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
              {language === 'es' ? 'Empezar mi proyecto' : 'Start my project'}
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;