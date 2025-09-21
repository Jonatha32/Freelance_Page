import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  
  const posts = [
    {
      id: 1,
      title: 'Del Arte al Código: Mi Transición Creativa',
      excerpt: 'Cómo mi trasfondo musical influyó en mi enfoque del desarrollo web y por qué la creatividad es clave en la tecnología.',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Personal',
      type: 'article',
      content: `
        <h2>El momento del cambio</h2>
        <p>Todo comenzó una tarde de invierno, frente al piano. Llevaba años componiendo, pero algo había cambiado. Las melodías que antes fluían naturalmente ahora se sentían forzadas.</p>
        
        <h2>Descubriendo el código</h2>
        <p>Mi primer "Hello World" fue como tocar mi primera canción completa. Esa sensación de crear algo de la nada, de dar vida a una idea abstracta.</p>
        
        <h2>La conexión inesperada</h2>
        <p>Pronto me di cuenta de que programar y componer tenían más en común de lo que pensaba:</p>
        <ul>
          <li>Ambos requieren estructura y creatividad</li>
          <li>Los patrones son fundamentales</li>
          <li>La práctica constante es clave</li>
          <li>El resultado debe emocionar al usuario/oyente</li>
        </ul>
        
        <h2>Mi filosofía actual</h2>
        <p>Hoy aplico los principios musicales a cada proyecto web. Cada interfaz tiene su ritmo, cada interacción su melodía. El resultado son experiencias que no solo funcionan, sino que conectan emocionalmente.</p>
      `
    },
    {
      id: 2,
      title: 'React vs Vue: La Batalla de 2024 (y cuál elegir según tu proyecto)',
      excerpt: 'Pros, contras y en qué proyectos usar cada uno. Análisis real sin marketing, solo experiencia práctica.',
      date: '2024-01-10',
      readTime: '8 min',
      category: 'Desarrollo',
      type: 'pdf',
      pdfUrl: '/pdfs/react-vs-vue-2024.pdf'
    },
    {
      id: 3,
      title: 'Tu marca no es tu logo: Cómo construir un branding que conecte',
      excerpt: 'Por qué una identidad digital exitosa va mucho más allá del diseño y cómo crear conexión real con usuarios.',
      date: '2024-01-05',
      readTime: '6 min',
      category: 'Diseño',
      type: 'pdf',
      pdfUrl: '/pdfs/branding-que-conecta.pdf'
    },
    {
      id: 4,
      title: 'Un sitio lento es un cliente menos: Cómo acelerar tu web y vender más',
      excerpt: 'Técnicas prácticas para mejorar el rendimiento de tu sitio web y convertir más visitantes en clientes.',
      date: '2023-12-28',
      readTime: '7 min',
      category: 'SEO',
      type: 'article',
      content: `
        <h2>La realidad de la velocidad web</h2>
        <p>Cada segundo de carga adicional puede costarte hasta un 7% de conversiones. En e-commerce, esto se traduce directamente en pérdidas económicas.</p>
        
        <h2>Técnicas que realmente funcionan</h2>
        <h3>1. Optimización de imágenes</h3>
        <p>Usa formatos modernos como WebP y comprime sin perder calidad. Una imagen de 2MB puede reducirse a 200KB sin diferencias visuales.</p>
        
        <h3>2. Lazy loading inteligente</h3>
        <p>Carga solo lo que el usuario ve. Implementa intersection observers para un control preciso.</p>
        
        <h3>3. Caché estratégico</h3>
        <p>Configura headers de caché apropiados. Los recursos estáticos pueden cachearse por meses.</p>
        
        <h2>Herramientas esenciales</h2>
        <ul>
          <li>Google PageSpeed Insights</li>
          <li>GTmetrix para análisis detallado</li>
          <li>WebPageTest para testing real</li>
        </ul>
      `
    },
    {
      id: 5,
      title: 'El Futuro del Freelancing Tech',
      excerpt: 'Tendencias emergentes en el trabajo freelance y cómo adaptarse a un mercado en constante evolución.',
      date: '2023-12-20',
      readTime: '4 min',
      category: 'Freelance',
      type: 'pdf',
      pdfUrl: '/pdfs/futuro-freelancing-tech.pdf'
    },
    {
      id: 6,
      title: 'UX Writing: Palabras que Guían',
      excerpt: 'La importancia de la escritura en la experiencia de usuario y cómo crear microcopy efectivo.',
      date: '2023-12-15',
      readTime: '5 min',
      category: 'UX & Writing',
      type: 'pdf',
      pdfUrl: '/pdfs/ux-writing-guia.pdf'
    }
  ];

  const handlePostClick = (post) => {
    if (post.type === 'pdf') {
      // Descargar PDF
      const link = document.createElement('a');
      link.href = post.pdfUrl;
      link.download = `${post.title.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`;
      link.click();
    } else {
      // Mostrar artículo completo
      setSelectedPost(post);
      window.scrollTo(0, 0);
    }
  };

  const categories = [
    { name: 'Todos', emoji: '🌟' },
    { name: 'Desarrollo', emoji: '💻' },
    { name: 'Diseño', emoji: '🎨' },
    { name: 'UX & Writing', emoji: '✍️' },
    { name: 'SEO', emoji: '📈' },
    { name: 'Freelance', emoji: '🚀' },
    { name: 'Personal', emoji: '🌱' }
  ];

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container-max py-20">
          <button 
            onClick={() => {
              setSelectedPost(null);
              window.scrollTo(0, 0);
            }}
            className="mb-8 flex items-center text-coral-600 hover:text-coral-700 transition-colors"
          >
            ← Volver al blog
          </button>
          
          <article className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
              <div className="mb-4">
                <span className="bg-coral-100 text-coral-700 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
              <div className="flex items-center justify-center space-x-4 text-gray-500">
                <span>{new Date(selectedPost.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </header>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-coral-50 to-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-coral-500 to-gold-500 bg-clip-text text-transparent">
                Entre Notas y Código 🎵💻
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un espacio donde el arte y la tecnología se encuentran. Reflexiones, tutoriales y hacks para darle alma a tus proyectos digitales.
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
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-coral-100 hover:text-coral-700 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span>{category.emoji}</span>
                {category.name}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-coral-500 to-wine-600 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-coral-100 text-coral-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-coral-600 transition-colors">
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
                    <button 
                      onClick={() => handlePostClick(post)}
                      className="text-coral-600 hover:text-coral-700 font-medium text-sm flex items-center gap-1"
                    >
                      {post.type === 'pdf' ? (
                        <>
                          <span>📄</span>
                          Descargar PDF →
                        </>
                      ) : (
                        'Leer más →'
                      )}
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
              ¿Querés estar un paso adelante?
            </h2>
            <p className="text-gray-600 mb-8">
              Suscribite y recibí ideas frescas directo en tu inbox. Sin spam, solo valor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-coral-500 to-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap">
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
      <section className="section-padding bg-gradient-to-br from-gold-600 to-coral-700">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Lo que se viene 👀
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Estoy cocinando contenido que no vas a encontrar en otro lado:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">🎥 Video-tutoriales paso a paso</h3>
                <p className="text-white/80 text-sm">Sin bla-bla, solo práctica</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">📚 Recursos descargables</h3>
                <p className="text-white/80 text-sm">Templates y guías prácticas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">🎙️ Podcast semanal</h3>
                <p className="text-white/80 text-sm">Conversaciones reales sobre freelancing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default Blog;