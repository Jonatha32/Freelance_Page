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
              <br />Construyo sitios web rápidos y con intención para marcas que quieren <span className="text-wine-500">sonar fuerte</span> en Internet.
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Sitios limpios, mensajes claros y funnels que convierten. Diseño, contenido y performance en un mismo lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                Pedir cotización
              </Link>
              <Link to="/portfolio" className="border-2 border-wine-500 text-wine-500 hover:bg-wine-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Ver trabajos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="section-padding bg-white">
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
                description: '+90 Lighthouse',
                icon: '⚡',
                color: 'gold'
              },
              {
                title: 'Mensajes claros',
                description: 'UX/Copy',
                icon: '💬',
                color: 'tech'
              },
              {
                title: 'Listos para vender',
                description: 'SEO/Analytics',
                icon: '📈',
                color: 'coral'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-${item.color}-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
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
              { step: '1', title: 'Descubrimiento', description: 'Entendemos tu negocio y objetivos' },
              { step: '2', title: 'Wireframe & Copy', description: 'Estructura y mensajes que convierten' },
              { step: '3', title: 'Diseño & Dev', description: 'Iteraciones hasta el resultado perfecto' },
              { step: '4', title: 'Lanzamiento & Medición', description: 'Deploy optimizado y métricas claras' }
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

      {/* Testimonios */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Lo que dicen mis clientes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                text: "Jona no solo creó nuestro sitio, transformó completamente cómo nos ven nuestros clientes. Las ventas aumentaron 200% en 3 meses.",
                author: "María González",
                company: "Boutique Elena"
              },
              {
                text: "Su enfoque artístico combinado con conocimiento técnico es único. Entregó exactamente lo que necesitábamos para destacar.",
                author: "Carlos Ruiz",
                company: "Estudio Creativo"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-black">{testimonial.author}</div>
                  <div className="text-coral-500 text-sm">{testimonial.company}</div>
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