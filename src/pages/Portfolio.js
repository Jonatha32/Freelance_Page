import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Boutique',
      category: 'desarrollo',
      image: '/api/placeholder/400/300',
      description: 'Tienda online completa con carrito de compras y pasarela de pagos.',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      results: ['300% aumento en ventas', '50% mejora en conversión'],
      link: '#'
    },
    {
      id: 2,
      title: 'Identidad Visual Restaurante',
      category: 'branding',
      image: '/api/placeholder/400/300',
      description: 'Branding completo para cadena de restaurantes gourmet.',
      technologies: ['Adobe Creative', 'Figma', 'Brand Guidelines'],
      results: ['Reconocimiento de marca +80%', 'Engagement +120%'],
      link: '#'
    },
    {
      id: 3,
      title: 'App de Gestión Médica',
      category: 'desarrollo',
      image: '/api/placeholder/400/300',
      description: 'Aplicación web para gestión de citas y historiales médicos.',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'AWS'],
      results: ['Tiempo de gestión -60%', 'Satisfacción pacientes 95%'],
      link: '#'
    },
    {
      id: 4,
      title: 'Campaña Digital Startup',
      category: 'branding',
      image: '/api/placeholder/400/300',
      description: 'Estrategia visual y digital para lanzamiento de startup tech.',
      technologies: ['Brand Strategy', 'Social Media', 'Web Design'],
      results: ['1M+ impresiones', '15K nuevos usuarios'],
      link: '#'
    },
    {
      id: 5,
      title: 'Portfolio Arquitecto',
      category: 'desarrollo',
      image: '/api/placeholder/400/300',
      description: 'Sitio web showcase para estudio de arquitectura.',
      technologies: ['Next.js', 'Framer Motion', 'Sanity CMS'],
      results: ['Clientes premium +200%', 'Tiempo de carga <2s'],
      link: '#'
    },
    {
      id: 6,
      title: 'Rebrand Empresa Familiar',
      category: 'branding',
      image: '/api/placeholder/400/300',
      description: 'Renovación completa de identidad para empresa de 30 años.',
      technologies: ['Brand Research', 'Logo Design', 'Guidelines'],
      results: ['Percepción moderna +90%', 'Nuevos mercados +3'],
      link: '#'
    }
  ];

  const filters = [
    { key: 'todos', label: 'Todos los Proyectos' },
    { key: 'desarrollo', label: 'Desarrollo Web' },
    { key: 'branding', label: 'Branding & Diseño' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const testimonials = [
    {
      name: 'María González',
      company: 'Boutique Elena',
      text: 'El e-commerce que desarrolló superó todas nuestras expectativas. Las ventas se triplicaron en los primeros 3 meses.',
      rating: 5
    },
    {
      name: 'Dr. Carlos Ruiz',
      company: 'Clínica Salud+',
      text: 'La aplicación de gestión médica revolucionó nuestro flujo de trabajo. Altamente recomendado.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      company: 'Estudio AM Arquitectura',
      text: 'Mi nuevo portfolio web ha atraído clientes de alto nivel que antes no podía alcanzar. Excelente trabajo.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio & Casos de Estudio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proyectos reales con resultados medibles. Cada caso representa una historia de éxito y crecimiento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{project.title}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Resultados:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full btn-primary">
                    Ver Caso de Estudio
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen mis clientes</h2>
            <p className="text-gray-600">Testimonios reales de proyectos exitosos</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Tu proyecto será el próximo caso de éxito?
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Conversemos sobre tu visión y cómo podemos crear algo extraordinario juntos.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Iniciar Proyecto
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;