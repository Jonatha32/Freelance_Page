import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Del Arte al Código: Mi Transición Creativa',
      excerpt: 'Cómo mi trasfondo musical influyó en mi enfoque del desarrollo web y por qué la creatividad es clave en la tecnología.',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Personal',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'React vs Vue: ¿Cuál Elegir en 2024?',
      excerpt: 'Análisis comparativo de los frameworks más populares, con casos de uso reales y recomendaciones basadas en experiencia.',
      date: '2024-01-10',
      readTime: '8 min',
      category: 'Desarrollo',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Branding Digital: Más Allá del Logo',
      excerpt: 'Por qué una identidad digital exitosa requiere coherencia en cada punto de contacto con el usuario.',
      date: '2024-01-05',
      readTime: '6 min',
      category: 'Diseño',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Optimización Web: Velocidad que Convierte',
      excerpt: 'Técnicas prácticas para mejorar el rendimiento de tu sitio web y aumentar las conversiones.',
      date: '2023-12-28',
      readTime: '7 min',
      category: 'SEO',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'El Futuro del Freelancing Tech',
      excerpt: 'Tendencias emergentes en el trabajo freelance y cómo adaptarse a un mercado en constante evolución.',
      date: '2023-12-20',
      readTime: '4 min',
      category: 'Freelance',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'UX Writing: Palabras que Guían',
      excerpt: 'La importancia de la escritura en la experiencia de usuario y cómo crear microcopy efectivo.',
      date: '2023-12-15',
      readTime: '5 min',
      category: 'UX',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['Todos', 'Desarrollo', 'Diseño', 'Personal', 'SEO', 'Freelance', 'UX'];

  return (
    <div>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Reflexiones</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pensamientos sobre desarrollo, diseño, creatividad y la intersección entre arte y tecnología.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-8 bg-white border-b">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                      Leer más →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              No te pierdas las actualizaciones
            </h2>
            <p className="text-gray-600 mb-8">
              Recibe los nuevos artículos directamente en tu email. Sin spam, solo contenido de valor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Suscribirse
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              Puedes cancelar tu suscripción en cualquier momento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Próximamente */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Próximamente: Más Contenido
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Estoy preparando una serie de tutoriales prácticos, casos de estudio detallados y recursos gratuitos para la comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">🎥 Video Tutoriales</h3>
                <p className="text-primary-100 text-sm">Desarrollo paso a paso</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">📚 Guías Completas</h3>
                <p className="text-primary-100 text-sm">Recursos descargables</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">🎙️ Podcast</h3>
                <p className="text-primary-100 text-sm">Conversaciones tech</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;