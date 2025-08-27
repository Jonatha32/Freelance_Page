import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí integrarías con tu backend o servicio de email
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! Te contactaré pronto.');
  };

  return (
    <div>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hablemos de tu proyecto</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada gran proyecto comienza con una conversación. Cuéntame tu visión y exploremos cómo hacerla realidad.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cuéntame sobre tu proyecto</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de proyecto
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="web-development">Desarrollo Web</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="branding">Branding</option>
                      <option value="app-development">Aplicación Web</option>
                      <option value="consulting">Consultoría</option>
                      <option value="maintenance">Mantenimiento</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Presupuesto estimado
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000+">$5,000+</option>
                      <option value="discuss">Prefiero discutirlo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntame más sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Describe tu proyecto, objetivos, timeline, y cualquier detalle relevante..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Otras formas de contacto</h2>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600 mb-2">Respuesta rápida para consultas urgentes</p>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        Enviar mensaje →
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-lg">
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600 mb-2">Para propuestas detalladas y documentos</p>
                      <a
                        href="mailto:tu@email.com"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        tu@email.com →
                      </a>
                    </div>
                  </div>

                  {/* Calendly */}
                  <div className="flex items-start space-x-4 p-4 bg-salmon-50 rounded-lg">
                    <div className="w-12 h-12 bg-salmon-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Agenda una llamada</h3>
                      <p className="text-gray-600 mb-2">Conversación de 30 min para conocer tu proyecto</p>
                      <button className="text-salmon-600 hover:text-salmon-700 font-medium">
                        Próximamente →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proceso */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Qué sigue después?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Respuesta en 24h</h4>
                      <p className="text-gray-600 text-sm">Te contacto para agendar una llamada inicial</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Análisis del proyecto</h4>
                      <p className="text-gray-600 text-sm">Conversamos sobre objetivos, alcance y timeline</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Propuesta personalizada</h4>
                      <p className="text-gray-600 text-sm">Recibe una cotización detallada en 48h</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;