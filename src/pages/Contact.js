import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    customProject: '',
    budget: '',
    message: '',
    files: null,
    contactMethod: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: e.target.files
    });
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hablemos de tu idea</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Podés contarme sobre tu idea, tus objetivos o el tipo de proyecto que querés desarrollar.
            </p>
            <p className="text-lg text-coral-600 font-medium">
              Le doy atención personal a cada mensaje.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contame tu idea</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de proyecto
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="web-development">Desarrollo Web</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="branding">Branding & Diseño</option>
                    <option value="app-development">Aplicación Web</option>
                    <option value="consulting">Consultoría</option>
                    <option value="content">Contenido & Copy</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                {formData.project === 'other' && (
                  <div>
                    <label htmlFor="customProject" className="block text-sm font-medium text-gray-700 mb-2">
                      Describe tu idea
                    </label>
                    <input
                      type="text"
                      id="customProject"
                      name="customProject"
                      value={formData.customProject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                      placeholder="Contame brevemente tu idea"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Tenés un presupuesto estimado o querés que te ayude a definirlo?
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="defined">Ya tengo definido</option>
                    <option value="guidance">Quiero orientación</option>
                    <option value="no-idea">No tengo idea aún</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Contame sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent resize-none"
                    placeholder="¿Qué querés construir, mejorar o lanzar? Contame lo que tengas en mente, incluso si es solo una idea suelta."
                    maxLength={2000}
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/2000 caracteres
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Archivos o referencias (opcional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-coral-400 transition-colors">
                    <div className="text-4xl mb-2">📎</div>
                    <p className="text-gray-600 mb-3">Podés subir imágenes, bocetos o webs que te inspiren</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="bg-coral-100 text-coral-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-coral-200 transition-colors"
                    >
                      Seleccionar archivos
                    </label>
                    {formData.files && formData.files.length > 0 && (
                      <div className="mt-3 text-sm text-gray-600">
                        {formData.files.length} archivo(s) seleccionado(s)
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Cómo preferís que te contacte?
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="email">Email</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="call">Llamada / Videollamada</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Cuándo querés empezar?
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="asap">Lo antes posible</option>
                      <option value="1-2weeks">Dentro de 1-2 semanas</option>
                      <option value="later">Más adelante / No hay apuro</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-coral-500 to-wine-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  🚀 Listo para empezar
                </button>
              </form>
            </motion.div>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              >
                <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¡Gracias por escribirme!
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Te responderé en menos de 24 horas (posiblemente antes). 
                    Mientras tanto, podés seguirme en redes para conocer más mi trabajo y proceso creativo.
                  </p>
                  
                  <div className="flex justify-center space-x-4 mb-6">
                    <a
                      href="https://linktr.ee/jonaperez10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-green-100 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300"
                      title="Linktree"
                    >
                      <i className="fas fa-link text-green-600 hover:text-white text-xl"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/jonathan_perez018/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-pink-100 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram text-pink-600 hover:text-white text-xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jonathanperez-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-100 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin text-blue-600 hover:text-white text-xl"></i>
                    </a>
                  </div>
                  
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-coral-500 text-white px-6 py-2 rounded-lg hover:bg-coral-600 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            )}

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Otras formas de contacto</h2>
                <p className="text-gray-600 mb-6">Elegí la forma que más te guste para conectar</p>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl border border-green-100 hover:border-green-200 transition-colors">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center">
                      <i className="fab fa-whatsapp text-green-600 text-xl w-12 h-12 bg-green-200 rounded-full flex items-center justify-center transition-all duration-300"></i>

                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                      <p className="text-gray-600 mb-3">Respuesta rápida para consultas urgentes</p>
                      <a
                        href="https://wa.me/59892934394"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                      >
                        Enviar mensaje
                        <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-6 bg-coral-50 rounded-xl border border-coral-100 hover:border-coral-200 transition-colors">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center">
                    <i className="fas fa-envelope text-black text-xl text-blue-600 text-xl w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 mb-3">Para propuestas detalladas y documentos</p>
                      <a
                        href="mailto:jonaperez.dev@gmail.com"
                        className="inline-flex items-center text-coral-600 hover:text-coral-700 font-semibold transition-colors"
                      >
                        jonaperez.dev@gmail.com
                        <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Redes Sociales */}
                  <div className="p-6 bg-wine-50 rounded-xl border border-wine-100">
                    <h3 className="font-bold text-gray-900 mb-3">Seguime en redes</h3>
                    <p className="text-gray-600 mb-4">Conocé mi proceso creativo y trabajos</p>
                    <div className="flex space-x-3">
                      <a
                      href="https://linktr.ee/jonaperez10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-green-200 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300"
                      title="Linktree"
                    >
                      <i className="fa fa-link text-green-600 hover:text-white text-xl"></i>
                    </a>
                      <a
                      href="https://www.instagram.com/jonathan_perez018/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-pink-200 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram text-pink-600 hover:text-white text-xl"></i>
                    </a>
                      <a
                      href="https://www.linkedin.com/in/jonathanperez-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-200 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin text-blue-600 hover:text-white text-xl"></i>
                    </a>
                    </div>
                  </div>

                  {/* Calendly */}
                  <div className="flex items-start space-x-4 p-4 bg-salmon-50 rounded-lg">
                    <div className="w-12 h-12 bg-salmon-500 rounded-lg flex items-center justify-center">
                      <a
                      href="https://www.linkedin.com/in/jonathanperez-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                      title="LinkedIn"
                    >
                      <i className="fa-solid fa-calendar textblack text-xl"></i>
                    </a>
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