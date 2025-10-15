import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageSelector';
import { submitProposal, validateProposalData } from '../services/proposalService';

const Contact = () => {
  const { language } = useLanguage();
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Prepare data for contact form
      const contactData = {
        nombre: formData.name,
        email: formData.email,
        descripcionProyecto: formData.message,
        tipoProyecto: formData.project || formData.customProject,
        presupuesto: formData.budget,
        tiempoEntrega: formData.timeline,
        opcionContacto: formData.contactMethod
      };
      
      // Basic validation
      if (!contactData.nombre || !contactData.email || !contactData.descripcionProyecto) {
        setSubmitError(language === 'es' 
          ? 'Por favor completa los campos obligatorios'
          : 'Please complete the required fields'
        );
        setIsSubmitting(false);
        return;
      }
      
      // Submit proposal
      const result = await submitProposal(contactData, formData.files, 'contact');
      
      if (result.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting contact:', error);
      setSubmitError(language === 'es' 
        ? 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
        : 'Error sending message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Hablemos de tu idea' : 'Let\'s talk about your idea'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              {language === 'es'
                ? 'Podés contarme sobre tu idea, tus objetivos o el tipo de proyecto que querés desarrollar.'
                : 'You can tell me about your idea, your goals or the type of project you want to develop.'
              }
            </p>
            <p className="text-lg text-coral-600 font-medium">
              {language === 'es' ? 'Le doy atención personal a cada mensaje.' : 'I give personal attention to every message.'}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'es' ? 'Contame tu idea' : 'Tell me your idea'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'es' ? 'Nombre completo *' : 'Full name *'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    placeholder={language === 'es' ? 'Tu nombre completo' : 'Your full name'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'es' ? 'Correo electrónico *' : 'Email address *'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'}
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'es' ? 'Tipo de proyecto' : 'Project type'}
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  >
                    <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
                    <option value="web-development">{language === 'es' ? 'Desarrollo Web' : 'Web Development'}</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="branding">{language === 'es' ? 'Branding & Diseño' : 'Branding & Design'}</option>
                    <option value="app-development">{language === 'es' ? 'Aplicación Web' : 'Web Application'}</option>
                    <option value="consulting">{language === 'es' ? 'Consultoría' : 'Consulting'}</option>
                    <option value="content">{language === 'es' ? 'Contenido & Copy' : 'Content & Copy'}</option>
                    <option value="other">{language === 'es' ? 'Otro' : 'Other'}</option>
                  </select>
                </div>

                {formData.project === 'other' && (
                  <div>
                    <label htmlFor="customProject" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'es' ? 'Describe tu idea' : 'Describe your idea'}
                    </label>
                    <input
                      type="text"
                      id="customProject"
                      name="customProject"
                      value={formData.customProject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                      placeholder={language === 'es' ? 'Contame brevemente tu idea' : 'Tell me briefly about your idea'}
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'es' 
                      ? '¿Tenés un presupuesto estimado o querés que te ayude a definirlo?'
                      : 'Do you have an estimated budget or would you like me to help you define it?'
                    }
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  >
                    <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
                    <option value="defined">{language === 'es' ? 'Ya tengo definido' : 'I already have it defined'}</option>
                    <option value="guidance">{language === 'es' ? 'Quiero orientación' : 'I want guidance'}</option>
                    <option value="no-idea">{language === 'es' ? 'No tengo idea aún' : 'I have no idea yet'}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'es' ? 'Contame sobre tu proyecto *' : 'Tell me about your project *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent resize-none"
                    placeholder={language === 'es' 
                      ? '¿Qué querés construir, mejorar o lanzar? Contame lo que tengas en mente, incluso si es solo una idea suelta.'
                      : 'What do you want to build, improve or launch? Tell me what you have in mind, even if it\'s just a loose idea.'
                    }
                    maxLength={2000}
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/2000 {language === 'es' ? 'caracteres' : 'characters'}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'es' ? 'Archivos o referencias (opcional)' : 'Files or references (optional)'}
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-coral-400 transition-colors">
                    <div className="text-4xl mb-2">📎</div>
                    <p className="text-gray-600 mb-3">
                      {language === 'es' 
                        ? 'Podés subir imágenes, bocetos o webs que te inspiren'
                        : 'You can upload images, sketches or websites that inspire you'
                      }
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload-contact"
                    />
                    <label
                      htmlFor="file-upload-contact"
                      className="bg-coral-100 text-coral-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-coral-200 transition-colors"
                    >
                      {language === 'es' ? 'Seleccionar archivos' : 'Select files'}
                    </label>
                    {formData.files && formData.files.length > 0 && (
                      <div className="mt-3 text-sm text-gray-600">
                        {formData.files.length} {language === 'es' ? 'archivo(s) seleccionado(s)' : 'file(s) selected'}
                      </div>
                    )}
                  </div>
                </div>

                {/* Honeypot - Campo oculto para detectar spam */}
                <input
                  type="text"
                  name="website"
                  value={formData.website || ''}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'es' ? '¿Cómo preferís que te contacte?' : 'How would you prefer me to contact you?'}
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    >
                      <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
                      <option value="email">Email</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="call">{language === 'es' ? 'Llamada / Videollamada' : 'Call / Video call'}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'es' ? '¿Cuándo querés empezar?' : 'When do you want to start?'}
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    >
                      <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
                      <option value="asap">{language === 'es' ? 'Lo antes posible' : 'As soon as possible'}</option>
                      <option value="1-2weeks">{language === 'es' ? 'Dentro de 1-2 semanas' : 'Within 1-2 weeks'}</option>
                      <option value="later">{language === 'es' ? 'Más adelante / No hay apuro' : 'Later / No rush'}</option>
                    </select>
                  </div>
                </div>

                {submitError && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {submitError}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-coral-500 to-wine-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting 
                    ? (language === 'es' ? '⏳ Enviando...' : '⏳ Sending...')
                    : (language === 'es' ? '🚀 Listo para empezar' : '🚀 Ready to start')
                  }
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
                    {language === 'es' ? '¡Gracias por escribirme!' : 'Thanks for writing to me!'}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === 'es'
                      ? 'Te responderé en menos de 24 horas (posiblemente antes). Mientras tanto, podés seguirme en redes para conocer más mi trabajo y proceso creativo.'
                      : 'I will respond in less than 24 hours (possibly sooner). In the meantime, you can follow me on social media to learn more about my work and creative process.'
                    }
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
                    {language === 'es' ? 'Cerrar' : 'Close'}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'es' ? 'Otras formas de contacto' : 'Other ways to contact'}
                </h2>
                <p className="text-gray-600 mb-6">
                  {language === 'es' ? 'Elegí la forma que más te guste para conectar' : 'Choose the way you like best to connect'}
                </p>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl border border-green-100 hover:border-green-200 transition-colors">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center">
                      <i className="fab fa-whatsapp text-green-600 text-xl w-12 h-12 bg-green-200 rounded-full flex items-center justify-center transition-all duration-300"></i>

                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                      <p className="text-gray-600 mb-3">
                        {language === 'es' ? 'Respuesta rápida para consultas urgentes' : 'Quick response for urgent inquiries'}
                      </p>
                      <a
                        href="https://wa.me/59892934394"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                      >
                        {language === 'es' ? 'Enviar mensaje' : 'Send message'}
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
                      <p className="text-gray-600 mb-3">
                        {language === 'es' ? 'Para propuestas detalladas y documentos' : 'For detailed proposals and documents'}
                      </p>
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
                    <h3 className="font-bold text-gray-900 mb-3">
                      {language === 'es' ? 'Seguime en redes' : 'Follow me on social media'}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {language === 'es' ? 'Conocé mi proceso creativo y trabajos' : 'Discover my creative process and work'}
                    </p>
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
                      <h3 className="font-semibold text-gray-900">
                        {language === 'es' ? 'Agenda una llamada' : 'Schedule a call'}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {language === 'es' ? 'Conversación de 30 min para conocer tu proyecto' : '30-min conversation to learn about your project'}
                      </p>
                      <button className="text-salmon-600 hover:text-salmon-700 font-medium">
                        {language === 'es' ? 'Próximamente →' : 'Coming soon →'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proceso */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === 'es' ? '¿Qué sigue después?' : 'What happens next?'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {language === 'es' ? 'Respuesta en 24h' : 'Response in 24h'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'es' ? 'Te contacto para agendar una llamada inicial' : 'I contact you to schedule an initial call'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {language === 'es' ? 'Análisis del proyecto' : 'Project analysis'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'es' ? 'Conversamos sobre objetivos, alcance y timeline' : 'We discuss objectives, scope and timeline'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {language === 'es' ? 'Propuesta personalizada' : 'Personalized proposal'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'es' ? 'Recibe una cotización detallada en 48h' : 'Receive a detailed quote in 48h'}
                      </p>
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