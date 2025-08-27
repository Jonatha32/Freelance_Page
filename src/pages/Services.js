import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Desarrollo Web Frontend',
      description: 'Sitios web modernos y responsivos con las últimas tecnologías.',
      process: ['Análisis de requisitos', 'Diseño UI/UX', 'Desarrollo', 'Testing', 'Despliegue'],
      price: 'Desde $800',
      includes: ['Diseño responsive', 'Optimización SEO', 'Integración CMS', 'Soporte 30 días']
    },
    {
      title: 'Aplicaciones React',
      description: 'Aplicaciones web interactivas y escalables con React.',
      process: ['Arquitectura', 'Componentes', 'Estado global', 'APIs', 'Optimización'],
      price: 'Desde $1,200',
      includes: ['Código limpio', 'Documentación', 'Testing unitario', 'Deploy automático']
    },
    {
      title: 'Branding Digital',
      description: 'Identidad visual completa para tu marca digital.',
      process: ['Investigación', 'Concepto', 'Diseño', 'Aplicaciones', 'Manual de marca'],
      price: 'Desde $600',
      includes: ['Logo principal', 'Paleta de colores', 'Tipografías', 'Aplicaciones digitales']
    },
    {
      title: 'E-commerce',
      description: 'Tiendas online completas listas para vender.',
      process: ['Catálogo', 'Pasarela de pago', 'Gestión', 'SEO', 'Analytics'],
      price: 'Desde $1,500',
      includes: ['Carrito de compras', 'Pagos seguros', 'Panel admin', 'Inventario']
    },
    {
      title: 'Consultoría Tech',
      description: 'Asesoramiento técnico para optimizar tu stack tecnológico.',
      process: ['Auditoría', 'Análisis', 'Recomendaciones', 'Roadmap', 'Implementación'],
      price: '$100/hora',
      includes: ['Auditoría completa', 'Plan de acción', 'Documentación', 'Seguimiento']
    },
    {
      title: 'Mantenimiento Web',
      description: 'Soporte continuo para mantener tu sitio actualizado y seguro.',
      process: ['Monitoreo', 'Actualizaciones', 'Backups', 'Seguridad', 'Reportes'],
      price: 'Desde $200/mes',
      includes: ['Updates automáticos', 'Backups diarios', 'Monitoreo 24/7', 'Soporte técnico']
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Servicios Freelance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones digitales completas con enfoque en resultados. Cada proyecto es único y se adapta a tus necesidades específicas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-primary-600">{service.price}</div>
              </div>

              <div className="space-y-6">
                {/* Proceso */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Proceso de trabajo:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.process.map((step, stepIndex) => (
                      <span
                        key={stepIndex}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Incluye */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                  <ul className="space-y-1">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600">
                        <span className="text-primary-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full btn-primary">
                  Solicitar Cotización
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 bg-gray-50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-gray-600 mb-6">
            Cada proyecto es único. Conversemos sobre tus necesidades específicas y creemos una solución personalizada.
          </p>
          <button className="btn-primary">Consulta Personalizada</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;