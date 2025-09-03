import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Boutique',
      category: 'desarrollo',
      description: 'Tienda online completa con carrito de compras y pasarela de pagos.',
      technologies: ['React', 'Node.js', 'Stripe'],
      result: '300% aumento en ventas'
    },
    {
      id: 2,
      title: 'Identidad Visual Restaurante',
      category: 'branding',
      description: 'Branding completo para cadena de restaurantes gourmet.',
      technologies: ['Adobe Creative', 'Figma', 'Brand Guidelines'],
      result: 'Reconocimiento +80%'
    },
    {
      id: 3,
      title: 'App de Gestión Médica',
      category: 'desarrollo',
      description: 'Aplicación web para gestión de citas y historiales médicos.',
      technologies: ['React', 'TypeScript', 'PostgreSQL'],
      result: 'Tiempo de gestión -60%'
    },
    {
      id: 4,
      title: 'Campaña Digital Startup',
      category: 'branding',
      description: 'Estrategia visual y digital para lanzamiento de startup tech.',
      technologies: ['Brand Strategy', 'Social Media', 'Web Design'],
      result: '1M+ impresiones'
    },
    {
      id: 5,
      title: 'Portfolio Arquitecto',
      category: 'desarrollo',
      description: 'Sitio web showcase para estudio de arquitectura.',
      technologies: ['Next.js', 'Framer Motion', 'Sanity CMS'],
      result: 'Clientes premium +200%'
    },
    {
      id: 6,
      title: 'Rebrand Empresa Familiar',
      category: 'branding',
      description: 'Renovación completa de identidad para empresa de 30 años.',
      technologies: ['Brand Research', 'Logo Design', 'Guidelines'],
      result: 'Percepción moderna +90%'
    }
  ];

  const filters = [
    { key: 'todos', label: 'Todos' },
    { key: 'desarrollo', label: 'Desarrollo' },
    { key: 'branding', label: 'Branding' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const testimonials = [
    {
      name: 'María González',
      company: 'Boutique Elena',
      text: 'El e-commerce superó todas nuestras expectativas. Las ventas se triplicaron en 3 meses.'
    },
    {
      name: 'Dr. Carlos Ruiz',
      company: 'Clínica Salud+',
      text: 'La aplicación de gestión médica revolucionó nuestro flujo de trabajo. Altamente recomendado.'
    },
    {
      name: 'Ana Martínez',
      company: 'Estudio AM Arquitectura',
      text: 'Mi nuevo portfolio web ha atraído clientes de alto nivel que antes no podía alcanzar.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proyectos reales con resultados medibles
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-max">
          <div className="flex justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.key
                    ? 'bg-coral-500 text-white'
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
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-coral-200 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-coral-400 to-coral-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{project.title}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-600">
                      <span className="mr-2">✓</span>
                      <span className="text-sm font-medium">{project.result}</span>
                    </div>
                    <button className="text-coral-500 hover:text-coral-600 font-medium text-sm transition-colors">
                      Ver más →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonios</h2>
            <p className="text-gray-600">Lo que dicen mis clientes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-coral-500">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="text-coral-100 mb-8 max-w-2xl mx-auto">
            Conversemos sobre tu visión y creemos algo extraordinario juntos.
          </p>
          <button className="bg-white text-coral-500 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
            Iniciar Proyecto
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;