import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Boutique',
      category: 'desarrollo',
      description: 'Tienda online completa con carrito de compras y pasarela de pagos.',
      technologies: ['React', 'Node.js', 'Stripe'],
      result: '300% aumento en ventas',
      github: 'https://github.com/Jonatha32/EcoWalk',
      demo: 'https://jonatha32.github.io/EcoWalk/',
      image: 'https://github.com/Jonatha32/EcoWalk/blob/main/public/EcoWalk.png?raw=true'
    },
    {
      id: 2,
      title: 'Identidad Visual Restaurante',
      category: 'branding',
      description: 'Branding completo para cadena de restaurantes gourmet.',
      technologies: ['Adobe Creative', 'Figma', 'Brand Guidelines'],
      result: 'Reconocimiento +80%',
      github: null,
      demo: '/le-raffine',
      image: '/El texto del párrafo-Photoroom (1).png'
    },
    {
      id: 3,
      title: 'App de Compra y Venta de Productos en desuso',
      category: 'desarrollo',
      description: 'Aplicación web para compra y venta de productos electrónicos en desuso.',
      technologies: ['Flutter', 'React', 'Firebase'],
      result: 'Tiempo de gestión -60%',
      github: 'https://github.com/RodrigoNovelli/Cass-',
      demo: 'https://jonatha32.github.io/Casse_Landing_Page/',
      image: 'https://github.com/Jonatha32/Casse_Landing_Page/blob/main/images/Cass%C3%A9.png?raw=true'
    },
    {
      id: 4,
      title: 'Campaña Digital Startup - Bytech',
      category: 'branding',
      description: 'Estrategia visual y digital para lanzamiento de startup tech.',
      technologies: ['Brand Strategy', 'Social Media', 'Web Design'],
      result: '1M+ impresiones',
      github: null,
      demo: 'https://jonatha32.github.io/Startup_App/',
      image: '/22.png'
    },
    {
      id: 5,
      title: 'Portfolio Arquitecto',
      category: 'desarrollo',
      description: 'Sitio web showcase para estudio de arquitectura.',
      technologies: ['Next.js', 'Framer Motion', 'Sanity CMS'],
      result: 'Clientes premium +200%',
      github: 'https://github.com/tu-usuario/architect-portfolio',
      demo: 'https://jonatha32.github.io/Portfolio_showcase/',
      image: '/El texto del párrafo-Photoroom(2).png'
    },
    {
      id: 6,
      title: 'Rebrand Empresa Familiar',
      category: 'branding',
      description: 'Renovación completa de identidad para empresa de 50 años.',
      technologies: ['Brand Research', 'Logo Design', 'Guidelines'],
      result: 'Percepción moderna +90%',
      github: null,
      demo: '/empresa-familiar',
      image: '/wine.png'
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
                  <div className="w-full h-full bg-gradient-to-br from-coral-400 to-coral-600 items-center justify-center hidden">
                    <span className="text-white text-lg font-semibold">{project.title}</span>
                  </div>
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
                  
                  <div className="mb-4">
                    <div className="flex items-center text-green-600 mb-4">
                      <span className="mr-2">✓</span>
                      <span className="text-sm font-medium">{project.result}</span>
                    </div>
                    
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                      
                      {(project.id === 2 || project.id === 6) ? (
                        <Link
                          to={project.demo}
                          className="flex items-center gap-2 px-4 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Ver Demo
                        </Link>
                      ) : (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Ver Demo
                        </a>
                      )}
                    </div>
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
      <section className="py-20 bg-coral-600">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="text-coral-100 mb-8 max-w-2xl mx-auto">
            Conversemos sobre tu visión y creemos algo extraordinario juntos.
          </p>
          <button className="inline-flex items-center bg-coral-500 hover:bg-coral-900 text-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
            Iniciar Proyecto
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;