import emailjs from '@emailjs/browser';

// Configuración EmailJS
const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

// Inicializar EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

// Función para enviar email
export const sendEmail = async (formData, formType = 'contact') => {
  try {
    // Preparar datos para el template
    const templateParams = {
      from_name: formData.nombre || formData.name,
      from_email: formData.email,
      phone: formData.telefono || formData.phone || 'No proporcionado',
      country: formData.pais || formData.country || 'No proporcionado',
      form_type: formType,
      project_description: formData.descripcionProyecto || formData.message,
      project_type: formData.tipoProyecto || formData.project || 'No especificado',
      budget: formData.presupuesto || formData.budget || 'No especificado',
      timeline: formData.tiempoEntrega || formData.timeline || 'No especificado',
      contact_method: formData.opcionContacto || formData.contactMethod || 'Email',
      custom_project: formData.customProject || '',
      // Campos específicos de servicios
      project_status: formData.estadoProyecto || '',
      category: formData.categoria || '',
      // Información adicional
      submission_date: new Date().toLocaleString('es-ES'),
      user_agent: navigator.userAgent,
      page_url: window.location.href
    };

    // Enviar email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    return {
      success: true,
      messageId: response.text
    };

  } catch (error) {
    console.error('Error enviando email:', error);
    return {
      success: false,
      error: error.message || 'Error desconocido'
    };
  }
};

// reCAPTCHA pausado hasta deploy público
// export const validateRecaptcha = () => {
//   return new Promise((resolve) => {
//     if (window.grecaptcha) {
//       window.grecaptcha.ready(() => {
//         window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY, { action: 'submit' })
//           .then((token) => {
//             resolve({ success: true, token });
//           })
//           .catch((error) => {
//             resolve({ success: false, error: error.message });
//           });
//       });
//     } else {
//       resolve({ success: false, error: 'reCAPTCHA no disponible' });
//     }
//   });
// };