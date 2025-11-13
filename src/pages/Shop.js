import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageSelector';

const Shop = () => {
  const { language } = useLanguage();

  const products = [
    {
      id: 1,
      title: language === 'es' ? 'Guía Completa de Desarrollo Web' : 'Complete Web Development Guide',
      description: language === 'es' ? 'Todo lo que necesitas saber para crear sitios web profesionales' : 'Everything you need to know to create professional websites',
      price: '$29',
      type: language === 'es' ? 'E-book' : 'E-book',
      icon: '📚'
    },
    {
      id: 2,
      title: language === 'es' ? 'Curso de React Avanzado' : 'Advanced React Course',
      description: language === 'es' ? 'Domina React con proyectos reales y técnicas avanzadas' : 'Master React with real projects and advanced techniques',
      price: '$89',
      type: language === 'es' ? 'Curso' : 'Course',
      icon: '🎓'
    },
    {
      id: 3,
      title: language === 'es' ? 'Templates Premium' : 'Premium Templates',
      description: language === 'es' ? 'Plantillas profesionales listas para usar' : 'Professional templates ready to use',
      price: '$49',
      type: language === 'es' ? 'Plantillas' : 'Templates',
      icon: '🎨'
    },
    {
      id: 4,
      title: language === 'es' ? 'Kit de Herramientas del Freelancer' : 'Freelancer Toolkit',
      description: language === 'es' ? 'Recursos esenciales para freelancers exitosos' : 'Essential resources for successful freelancers',
      price: '$39',
      type: language === 'es' ? 'Kit Digital' : 'Digital Kit',
      icon: '🛠️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-coral-50 to-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'es' ? 'Tienda Digital' : 'Digital Shop'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {language === 'es'
                ? 'Recursos digitales, cursos y herramientas para potenciar tu carrera en desarrollo web'
                : 'Digital resources, courses and tools to boost your web development career'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-br from-coral-500 to-wine-600 text-white rounded-3xl p-12 mb-12">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl mb-6"
              >
                🚀
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'es' ? '¡Próximamente!' : 'Coming Soon!'}
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {language === 'es'
                  ? 'Estoy preparando contenido increíble para ayudarte a crecer como desarrollador. Mantente atento a las novedades.'
                  : 'I\'m preparing amazing content to help you grow as a developer. Stay tuned for updates.'
                }
              </p>
            </div>
          </motion.div>

          {/* Preview Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 bg-coral-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {language === 'es' ? 'Próximamente' : 'Soon'}
                </div>

                <div className="text-4xl mb-4">{product.icon}</div>
                <div className="text-sm text-coral-600 font-semibold mb-2">{product.type}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-coral-600">{product.price}</span>
                  <button 
                    disabled
                    className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg font-semibold text-sm cursor-not-allowed"
                  >
                    {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'es' ? 'Sé el primero en saberlo' : 'Be the first to know'}
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Regístrate para recibir notificaciones cuando lance nuevos productos y obtén descuentos exclusivos.'
                : 'Sign up to receive notifications when I launch new products and get exclusive discounts.'
              }
            </p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-500"
              />
              <button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300">
                {language === 'es' ? 'Notificarme' : 'Notify Me'}
              </button>
            </div>
          </motion.div>

          {/* Features Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'es' ? 'Contenido Premium' : 'Premium Content'}
              </h4>
              <p className="text-gray-600">
                {language === 'es'
                  ? 'Recursos de alta calidad basados en experiencia real'
                  : 'High-quality resources based on real experience'
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'es' ? 'Enfoque Práctico' : 'Practical Focus'}
              </h4>
              <p className="text-gray-600">
                {language === 'es'
                  ? 'Aprende con proyectos reales y casos de estudio'
                  : 'Learn with real projects and case studies'
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'es' ? 'Actualizaciones Constantes' : 'Constant Updates'}
              </h4>
              <p className="text-gray-600">
                {language === 'es'
                  ? 'Contenido siempre actualizado con las últimas tendencias'
                  : 'Content always updated with the latest trends'
                }
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;