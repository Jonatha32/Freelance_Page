import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const servicePillars = [
    {
      id: 'desarrollo',
      icon: '🚀',
      title: 'Desarrollo & Tecnología',
      subtitle: 'Código que cobra vida',
      description: 'Transformo ideas en experiencias digitales potentes y escalables.',
      gradient: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Desarrollo Web Frontend',
          description: 'Sitios modernos que convierten visitantes en clientes.',
          price: 'Desde $800',
          includes: ['Diseño responsive', 'Optimización SEO', 'Animaciones suaves', 'Soporte 30 días']
        },
        {
          name: 'Aplicaciones React',
          description: 'Web apps escalables que crecen con tu negocio.',
          price: 'Desde $1,200',
          includes: ['Arquitectura sólida', 'Estado global', 'APIs integradas', 'Testing completo']
        },
        {
          name: 'E-commerce Épico',
          description: 'Tiendas online que venden mientras duermes.',
          price: 'Desde $1,500',
          includes: ['Carrito inteligente', 'Pagos seguros', 'Panel admin', 'Analytics avanzado']
        },
        {
          name: 'Backend & APIs',
          description: 'Arquitectura sólida y segura para tus datos.',
          price: 'Desde $1,000',
          includes: ['Base de datos', 'Autenticación', 'APIs REST', 'Documentación']
        }
      ]
    },
    {
      id: 'diseno',
      icon: '🎨',
      title: 'Diseño & Experiencia',
      subtitle: 'Belleza que funciona',
      description: 'Diseño que no solo se ve bien, sino que convierte y enamora.',
      gradient: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'UX/UI Design',
          description: 'Interfaces que tus usuarios van a amar usar.',
          price: 'Desde $600',
          includes: ['Research UX', 'Wireframes', 'Prototipos', 'Design system']
        },
        {
          name: 'Branding Digital',
          description: 'Identidad visual que hace ruido en el mercado.',
          price: 'Desde $700',
          includes: ['Logo épico', 'Paleta de colores', 'Tipografías', 'Manual de marca']
        },
        {
          name: 'Product Design',
          description: 'De la idea al prototipo que funciona.',
          price: 'Desde $900',
          includes: ['Concepto', 'MVP design', 'User testing', 'Iteraciones']
        },
        {
          name: 'Diseño Gráfico Creativo',
          description: 'Gráficos que cuentan historias y generan engagement.',
          price: 'Desde $400',
          includes: ['Posts redes', 'Banners web', 'Infografías', 'Material digital']
        }
      ]
    },
    {
      id: 'contenido',
      icon: '✍️',
      title: 'Estrategia & Contenido',
      subtitle: 'Palabras que venden',
      description: 'Copywriting que conecta, convence y convierte como un imán.',
      gradient: 'from-green-500 to-teal-500',
      services: [
        {
          name: 'Copywriting que Convierte',
          description: 'Textos que transforman lectores en compradores.',
          price: 'Desde $300',
          includes: ['Headlines épicos', 'CTAs potentes', 'Email sequences', 'Landing copy']
        },
        {
          name: 'UX Writing',
          description: 'Microtextos que guían y mejoran la experiencia.',
          price: 'Desde $250',
          includes: ['Botones claros', 'Mensajes de error', 'Onboarding', 'Tooltips']
        },
        {
          name: 'Storytelling & Guiones',
          description: 'Narrativas que enganchan y no se olvidan.',
          price: 'Desde $400',
          includes: ['Brand story', 'Guiones video', 'Case studies', 'Testimoniales']
        },
        {
          name: 'Content Strategy',
          description: 'Estrategia de contenido que posiciona tu marca.',
          price: 'Desde $500',
          includes: ['Calendario editorial', 'Pilares de contenido', 'SEO strategy', 'Métricas']
        }
      ]
    },
    {
      id: 'marketing',
      icon: '📈',
      title: 'Estrategia & Marketing',
      subtitle: 'Crecimiento inteligente',
      description: 'Estrategias que hacen crecer tu marca de forma sostenible.',
      gradient: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Brand Strategy',
          description: 'Posicionamiento que te diferencia de la competencia.',
          price: 'Desde $800',
          includes: ['Análisis competencia', 'Propuesta valor', 'Positioning', 'Roadmap']
        },
        {
          name: 'Community Building',
          description: 'Construye una tribu leal alrededor de tu marca.',
          price: 'Desde $600',
          includes: ['Estrategia comunidad', 'Content plan', 'Engagement', 'Growth hacking']
        },
        {
          name: 'Consultoría Digital',
          description: 'Optimiza tu presencia digital y stack tecnológico.',
          price: '$120/hora',
          includes: ['Auditoría completa', 'Plan de acción', 'Tech stack', 'Implementación']
        },
        {
          name: 'Campañas Digitales',
          description: 'Campañas que generan resultados medibles.',
          price: 'Desde $700',
          includes: ['SEO strategy', 'Performance ads', 'Analytics', 'Optimización']
        }
      ]
    },
    {
      id: 'educacion',
      icon: '🌟',
      title: 'Educación & Mentoría',
      subtitle: 'Conocimiento que transforma',
      description: 'Comparto lo que sé para que puedas brillar con luz propia.',
      gradient: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Mentorías Creativas',
          description: 'Sesiones 1:1 para potenciar tu creatividad y técnica.',
          price: '$80/hora',
          includes: ['Sesión personalizada', 'Plan de crecimiento', 'Recursos', 'Seguimiento']
        },
        {
          name: 'Tutorías Tech',
          description: 'Aprende desarrollo, diseño y herramientas digitales.',
          price: '$60/hora',
          includes: ['Clases prácticas', 'Proyectos reales', 'Feedback', 'Certificado']
        },
        {
          name: 'Workshop Creativos',
          description: 'Talleres grupales de arte + tecnología + storytelling.',
          price: 'Desde $200',
          includes: ['Taller grupal', 'Material didáctico', 'Proyecto final', 'Networking']
        },
        {
          name: 'Consultoría Marca Personal',
          description: 'Construye una marca personal que abra puertas.',
          price: 'Desde $500',
          includes: ['Análisis personal', 'Estrategia', 'Content plan', 'Implementación']
        }
      ]
    }
  ];

  const packs = [
    {
      name: 'Pack Raíz',
      subtitle: 'Para empezar con fuerza',
      price: '$1,200',
      originalPrice: '$1,500',
      description: 'Landing page + branding básico + copywriting',
      includes: ['Landing page responsive', 'Logo + paleta', 'Copywriting persuasivo', 'SEO básico'],
      gradient: 'from-green-400 to-green-600',
      popular: false
    },
    {
      name: 'Pack Presencia',
      subtitle: 'Presencia digital completa',
      price: '$2,800',
      originalPrice: '$3,500',
      description: 'Web completa + branding + estrategia de contenido',
      includes: ['Sitio web completo', 'Branding épico', 'Estrategia contenido', 'Consultoría 3 meses'],
      gradient: 'from-blue-400 to-blue-600',
      popular: true
    },
    {
      name: 'Pack Fuego',
      subtitle: 'La experiencia completa',
      price: '$4,500',
      originalPrice: '$6,000',
      description: 'E-commerce + branding + marketing + mentoría',
      includes: ['E-commerce completo', 'Branding premium', 'Estrategia marketing', 'Mentoría 6 meses'],
      gradient: 'from-red-400 to-red-600',
      popular: false
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gradient text-black-600/90">
              SERVICIOS
            </span>
            <br />
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            🎨 <span className="font-bold text-coral-600">Creatividad artística</span> + 
            ⚡ <span className="font-bold text-gold-600">excelencia técnica</span> + 
            🚀 <span className="font-bold text-mint-600">estrategia que funciona</span>
          </motion.p>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-coral-500 to-gold-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Packs Destacados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">🔥 PACKS </h2>
            <p className="text-xl text-gray-600">Combos que maximizan tu inversión y resultados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 border-2 hover:scale-105 transition-all duration-300 ${
                  pack.popular ? 'border-gold-400 shadow-2xl' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-2 rounded-full font-bold text-sm">
                      🌟 MÁS POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-black mb-2 bg-gradient-to-r ${pack.gradient} bg-clip-text text-transparent`}>
                    {pack.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pack.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-gray-900">{pack.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pack.originalPrice}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{pack.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pack.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r ${pack.gradient} hover:scale-105 hover:shadow-lg`}>
                  🚀 Elegir Pack
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Pillars */}
        <div className="space-y-16">
          {servicePillars.map((pillar, pillarIndex) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + pillarIndex * 0.2 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500"
            >
              {/* Pillar Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${pillar.gradient} text-4xl mb-6`}>
                  {pillar.icon}
                </div>
                <h2 className={`text-4xl font-black mb-3 bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                  {pillar.title}
                </h2>
                <p className="text-xl font-bold text-gray-700 mb-4">{pillar.subtitle}</p>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{pillar.description}</p>
              </div>
              
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pillar.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + pillarIndex * 0.2 + serviceIndex * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <div className={`text-2xl font-black bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                        {service.price}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">✨ Incluye:</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-gray-700">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 bg-gradient-to-r ${pillar.gradient} hover:scale-105 hover:shadow-md`}>
                      Solicitar Cotización
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom Épico */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Efectos de fondo */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-coral-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gold-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className=" from-coral-400">
                ¿NO ENCUENTRAS
              </span>
              <br />
              <span className="text-white">LO QUE BUSCAS?</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
              🎯 Cada proyecto es único, como una obra de arte digital.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Conversemos sobre tu visión y creemos algo épico juntos. 
              <span className="text-coral-300 font-bold"> Sin límites, sin moldes, solo resultados.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-coral-500 to-gold-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                🚀 Consulta Personalizada
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                💬 Hablemos por WhatsApp
              </button>
            </div>
            
            <div className="mt-8 flex justify-center items-center space-x-6 text-white/70">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Respuesta en 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🎨</span>
                <span className="font-medium">Propuesta personalizada</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">⚡</span>
                <span className="font-medium">Sin compromiso</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;