import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageSelector';

const Portfolio = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: language === 'es' ? 'E-commerce Boutique' : 'E-commerce Boutique',
      category: 'desarrollo',
      description: language === 'es' ? 'Tienda online completa con carrito de compras y pasarela de pagos.' : 'Complete online store with shopping cart and payment gateway.',
      technologies: ['React', 'Node.js', 'Stripe'],
      result: language === 'es' ? '300% aumento en ventas' : '300% increase in sales',
      github: 'https://github.com/Jonatha32/EcoWalk',
      demo: 'https://jonatha32.github.io/EcoWalk/',
      image: 'https://github.com/Jonatha32/EcoWalk/blob/main/public/EcoWalk.png?raw=true'
    },
    {
      id: 2,
      title: language === 'es' ? 'Identidad Visual Restaurante' : 'Restaurant Visual Identity',
      category: 'branding',
      description: language === 'es' ? 'Branding completo para cadena de restaurantes gourmet.' : 'Complete branding for gourmet restaurant chain.',
      technologies: ['Adobe Creative', 'Figma', 'Brand Guidelines'],
      result: language === 'es' ? 'Reconocimiento +80%' : 'Recognition +80%',
      github: null,
      demo: '/le-raffine',
      image: '/El texto del párrafo-Photoroom (1).png'
    },
    {
      id: 3,
      title: language === 'es' ? 'App de Compra y Venta de Productos en desuso' : 'Used Products Buy & Sell App',
      category: 'desarrollo',
      description: language === 'es' ? 'Aplicación web para compra y venta de productos electrónicos en desuso.' : 'Web application for buying and selling used electronic products.',
      technologies: ['Flutter', 'React', 'Firebase'],
      result: language === 'es' ? 'Tiempo de gestión -60%' : 'Management time -60%',
      github: 'https://github.com/RodrigoNovelli/Cass-',
      demo: 'https://jonatha32.github.io/Casse_Landing_Page/',
      image: 'https://github.com/Jonatha32/Casse_Landing_Page/blob/main/images/Cass%C3%A9.png?raw=true'
    },
    {
      id: 4,
      title: language === 'es' ? 'Campaña Digital Startup - Bytech' : 'Startup Digital Campaign - Bytech',
      category: 'branding',
      description: language === 'es' ? 'Estrategia visual y digital para lanzamiento de startup tech.' : 'Visual and digital strategy for tech startup launch.',
      technologies: ['Brand Strategy', 'Social Media', 'Web Design'],
      result: language === 'es' ? '1M+ impresiones' : '1M+ impressions',
      github: null,
      demo: 'https://jonatha32.github.io/Startup_App/',
      image: '/22.png'
    },
    {
      id: 5,
      title: language === 'es' ? 'Portfolio Arquitecto' : 'Architect Portfolio',
      category: 'desarrollo',
      description: language === 'es' ? 'Sitio web showcase para estudio de arquitectura.' : 'Showcase website for architecture studio.',
      technologies: ['Next.js', 'Framer Motion', 'Sanity CMS'],
      result: language === 'es' ? 'Clientes premium +200%' : 'Premium clients +200%',
      github: 'https://github.com/tu-usuario/architect-portfolio',
      demo: 'https://jonatha32.github.io/Portfolio_showcase/',
      image: '/El texto del párrafo-Photoroom(2).png'
    },
    {
      id: 6,
      title: language === 'es' ? 'Rebrand Empresa Familiar' : 'Family Business Rebrand',
      category: 'branding',
      description: language === 'es' ? 'Renovación completa de identidad para empresa de 50 años.' : 'Complete identity renovation for 50-year-old company.',
      technologies: ['Brand Research', 'Logo Design', 'Guidelines'],
      result: language === 'es' ? 'Percepción moderna +90%' : 'Modern perception +90%',
      github: null,
      demo: '/empresa-familiar',
      image: '/wine.png'
    }
  ];

  const filters = [
    { key: 'todos', label: language === 'es' ? 'Todos' : 'All' },
    { key: 'desarrollo', label: language === 'es' ? 'Desarrollo' : 'Development' },
    { key: 'branding', label: 'Branding' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const projectInsights = [
    {
      projectId: 1,
      title: language === 'es' ? 'E-commerce Boutique' : 'E-commerce Boutique',
      insight: language === 'es' 
        ? 'Este proyecto me permitió integrar tecnologías modernas como React y Stripe para crear una experiencia de compra fluida. El enfoque en UX/UI resultó clave para el incremento significativo en conversiones.'
        : 'This project allowed me to integrate modern technologies like React and Stripe to create a smooth shopping experience. The focus on UX/UI was key to the significant increase in conversions.'
    },
    {
      projectId: 2,
      title: language === 'es' ? 'Identidad Visual Restaurante' : 'Restaurant Visual Identity',
      insight: language === 'es'
        ? 'Desarrollar un branding completo para el sector gastronómico requirió equilibrar elegancia y funcionalidad. La coherencia visual en todos los puntos de contacto fue fundamental para el reconocimiento de marca.'
        : 'Developing complete branding for the gastronomic sector required balancing elegance and functionality. Visual consistency across all touchpoints was fundamental for brand recognition.'
    },
    {
      projectId: 3,
      title: language === 'es' ? 'App Compra/Venta Productos' : 'Buy/Sell Products App',
      insight: language === 'es'
        ? 'La sostenibilidad fue el eje central de este proyecto. Crear una plataforma que facilite la economía circular mientras mantiene una interfaz intuitiva presentó desafíos técnicos interesantes que resolvimos con Firebase.'
        : 'Sustainability was the central axis of this project. Creating a platform that facilitates the circular economy while maintaining an intuitive interface presented interesting technical challenges that we solved with Firebase.'
    },
    {
      projectId: 4,
      title: language === 'es' ? 'Campaña Digital Startup' : 'Startup Digital Campaign',
      insight: language === 'es'
        ? 'Trabajar con una startup tech me permitió explorar estrategias digitales innovadoras. La clave estuvo en crear una identidad visual que transmitiera confianza y modernidad desde el primer contacto.'
        : 'Working with a tech startup allowed me to explore innovative digital strategies. The key was creating a visual identity that conveyed trust and modernity from the first contact.'
    },
    {
      projectId: 5,
      title: language === 'es' ? 'Portfolio Arquitecto' : 'Architect Portfolio',
      insight: language === 'es'
        ? 'Este proyecto demostró cómo un diseño web bien ejecutado puede transformar la percepción profesional. Next.js y Framer Motion fueron esenciales para crear una experiencia visual que refleje la calidad arquitectónica.'
        : 'This project demonstrated how well-executed web design can transform professional perception. Next.js and Framer Motion were essential to create a visual experience that reflects architectural quality.'
    },
    {
      projectId: 6,
      title: language === 'es' ? 'Rebrand Empresa Familiar' : 'Family Business Rebrand',
      insight: language === 'es'
        ? 'Renovar la identidad de una empresa con 50 años de historia requirió sensibilidad especial. El desafío fue modernizar sin perder la esencia familiar, logrando una transición que respetara el legado mientras atraía nuevas generaciones.'
        : 'Renewing the identity of a company with 50 years of history required special sensitivity. The challenge was to modernize without losing the family essence, achieving a transition that respected the legacy while attracting new generations.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'es' ? 'Proyectos reales con resultados medibles' : 'Real projects with measurable results'}
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
                          {language === 'es' ? 'Ver Demo' : 'View Demo'}
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
                          {language === 'es' ? 'Ver Demo' : 'View Demo'}
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

      {/* Reflexiones del Desarrollador */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Reflexiones del Proceso' : 'Process Insights'}
            </h2>
            <p className="text-gray-600">
              {language === 'es' ? 'Mi perspectiva sobre cada proyecto desarrollado' : 'My perspective on each developed project'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectInsights.map((insight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-coral-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {insight.projectId}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{insight.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {insight.insight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-coral-900">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === 'es' ? '¿Listo para tu próximo proyecto?' : 'Ready for your next project?'}
          </h2>
          <p className="text-coral-100 mb-8 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Conversemos sobre tu visión y creemos algo extraordinario juntos.'
              : 'Let\'s talk about your vision and create something extraordinary together.'
            }
          </p>
          <button className="inline-flex items-center text-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
            {language === 'es' ? 'Iniciar Proyecto' : 'Start Project'}
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;