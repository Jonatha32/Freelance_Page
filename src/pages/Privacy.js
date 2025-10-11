import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageSelector';

const Privacy = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
            </h1>
            <p className="text-gray-600">
              {language === 'es' ? 'Última actualización: Octubre 2025' : 'Last updated: October 2025'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {/* Introducción */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '1. Introducción' : '1. Introduction'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Valoramos y respetamos su privacidad. Esta política describe cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando utiliza nuestros servicios o visita nuestro sitio web.'
                  : 'We value and respect your privacy. This policy describes how we collect, use, store and protect your personal information when you use our services or visit our website.'
                }
              </p>
              <p className="text-gray-700 leading-relaxed">
                {language === 'es'
                  ? 'Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política de privacidad.'
                  : 'By using our services, you agree to the practices described in this privacy policy.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '2. Información que Recopilamos' : '2. Information We Collect'}
              </h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'es' ? '2.1 Información Personal' : '2.1 Personal Information'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{language === 'es' ? 'Nombre completo y datos de contacto' : 'Full name and contact information'}</li>
                  <li>{language === 'es' ? 'Dirección de correo electrónico' : 'Email address'}</li>
                  <li>{language === 'es' ? 'Número de teléfono' : 'Phone number'}</li>
                  <li>{language === 'es' ? 'Información de la empresa (si aplica)' : 'Company information (if applicable)'}</li>
                  <li>{language === 'es' ? 'Detalles del proyecto y requerimientos' : 'Project details and requirements'}</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'es' ? '2.2 Información Técnica' : '2.2 Technical Information'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{language === 'es' ? 'Dirección IP y ubicación geográfica' : 'IP address and geographic location'}</li>
                  <li>{language === 'es' ? 'Tipo de navegador y dispositivo' : 'Browser type and device'}</li>
                  <li>{language === 'es' ? 'Páginas visitadas y tiempo de navegación' : 'Pages visited and browsing time'}</li>
                  <li>{language === 'es' ? 'Cookies y tecnologías similares' : 'Cookies and similar technologies'}</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '3. Cómo Utilizamos su Información' : '3. How We Use Your Information'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>{language === 'es' ? '3.1 Prestación de servicios:' : '3.1 Service provision:'}</strong> {language === 'es' ? 'Para proporcionar, mantener y mejorar nuestros servicios profesionales.' : 'To provide, maintain and improve our professional services.'}</p>
                <p><strong>{language === 'es' ? '3.2 Comunicación:' : '3.2 Communication:'}</strong> {language === 'es' ? 'Para responder consultas, enviar propuestas y mantener comunicación del proyecto.' : 'To respond to inquiries, send proposals and maintain project communication.'}</p>
                <p><strong>{language === 'es' ? '3.3 Facturación:' : '3.3 Billing:'}</strong> {language === 'es' ? 'Para procesar pagos y generar facturas.' : 'To process payments and generate invoices.'}</p>
                <p><strong>{language === 'es' ? '3.4 Mejora del sitio:' : '3.4 Site improvement:'}</strong> {language === 'es' ? 'Para analizar el uso del sitio web y mejorar la experiencia del usuario.' : 'To analyze website usage and improve user experience.'}</p>
                <p><strong>{language === 'es' ? '3.5 Marketing:' : '3.5 Marketing:'}</strong> {language === 'es' ? 'Para enviar información relevante sobre servicios (solo con su consentimiento).' : 'To send relevant information about services (only with your consent).'}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '4. Compartir su Información' : '4. Sharing Your Information'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:'
                  : 'We do not sell, rent or share your personal information with third parties, except in the following circumstances:'
                }
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>{language === 'es' ? 'Proveedores de servicios:' : 'Service providers:'}</strong> {language === 'es' ? 'Herramientas necesarias para la prestación del servicio (hosting, email, etc.)' : 'Tools necessary for service provision (hosting, email, etc.)'}</li>
                <li><strong>{language === 'es' ? 'Requerimientos legales:' : 'Legal requirements:'}</strong> {language === 'es' ? 'Cuando sea requerido por ley o autoridades competentes' : 'When required by law or competent authorities'}</li>
                <li><strong>{language === 'es' ? 'Protección de derechos:' : 'Rights protection:'}</strong> {language === 'es' ? 'Para proteger nuestros derechos, propiedad o seguridad' : 'To protect our rights, property or security'}</li>
                <li><strong>{language === 'es' ? 'Consentimiento explícito:' : 'Explicit consent:'}</strong> {language === 'es' ? 'Cuando usted nos dé permiso específico' : 'When you give us specific permission'}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '5. Cookies y Tecnologías Similares' : '5. Cookies and Similar Technologies'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {language === 'es'
                    ? 'Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web:'
                    : 'We use cookies and similar technologies to improve your experience on our website:'
                  }
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>{language === 'es' ? 'Cookies esenciales:' : 'Essential cookies:'}</strong> {language === 'es' ? 'Necesarias para el funcionamiento básico del sitio' : 'Necessary for basic site functionality'}</li>
                  <li><strong>{language === 'es' ? 'Cookies de rendimiento:' : 'Performance cookies:'}</strong> {language === 'es' ? 'Para analizar cómo se utiliza el sitio' : 'To analyze how the site is used'}</li>
                  <li><strong>{language === 'es' ? 'Cookies de funcionalidad:' : 'Functionality cookies:'}</strong> {language === 'es' ? 'Para recordar sus preferencias' : 'To remember your preferences'}</li>
                </ul>
                <p>
                  {language === 'es'
                    ? 'Puede controlar las cookies a través de la configuración de su navegador.'
                    : 'You can control cookies through your browser settings.'
                  }
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '6. Seguridad de la Información' : '6. Information Security'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción:'
                  : 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure or destruction:'
                }
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{language === 'es' ? 'Cifrado SSL/TLS para transmisión de datos' : 'SSL/TLS encryption for data transmission'}</li>
                <li>{language === 'es' ? 'Acceso restringido a información personal' : 'Restricted access to personal information'}</li>
                <li>{language === 'es' ? 'Copias de seguridad regulares' : 'Regular backups'}</li>
                <li>{language === 'es' ? 'Monitoreo de seguridad continuo' : 'Continuous security monitoring'}</li>
                <li>{language === 'es' ? 'Actualización regular de sistemas de seguridad' : 'Regular security system updates'}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '7. Retención de Datos' : '7. Data Retention'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {language === 'es'
                    ? 'Conservamos su información personal solo durante el tiempo necesario para:'
                    : 'We retain your personal information only for the time necessary to:'
                  }
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>{language === 'es' ? 'Cumplir con los propósitos para los cuales fue recopilada' : 'Fulfill the purposes for which it was collected'}</li>
                  <li>{language === 'es' ? 'Cumplir con obligaciones legales y contractuales' : 'Comply with legal and contractual obligations'}</li>
                  <li>{language === 'es' ? 'Resolver disputas y hacer cumplir nuestros acuerdos' : 'Resolve disputes and enforce our agreements'}</li>
                </ul>
                <p>
                  {language === 'es'
                    ? 'Generalmente, conservamos los datos del proyecto durante 3 años después de la finalización del servicio, salvo requerimientos legales específicos.'
                    : 'Generally, we retain project data for 3 years after service completion, except for specific legal requirements.'
                  }
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '8. Sus Derechos' : '8. Your Rights'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Usted tiene los siguientes derechos respecto a su información personal:'
                  : 'You have the following rights regarding your personal information:'
                }
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>{language === 'es' ? 'Acceso:' : 'Access:'}</strong> {language === 'es' ? 'Solicitar una copia de la información que tenemos sobre usted' : 'Request a copy of the information we have about you'}</li>
                <li><strong>{language === 'es' ? 'Rectificación:' : 'Rectification:'}</strong> {language === 'es' ? 'Solicitar la corrección de información inexacta' : 'Request correction of inaccurate information'}</li>
                <li><strong>{language === 'es' ? 'Eliminación:' : 'Deletion:'}</strong> {language === 'es' ? 'Solicitar la eliminación de su información personal' : 'Request deletion of your personal information'}</li>
                <li><strong>{language === 'es' ? 'Portabilidad:' : 'Portability:'}</strong> {language === 'es' ? 'Solicitar la transferencia de sus datos' : 'Request transfer of your data'}</li>
                <li><strong>{language === 'es' ? 'Oposición:' : 'Opposition:'}</strong> {language === 'es' ? 'Oponerse al procesamiento de sus datos' : 'Object to the processing of your data'}</li>
                <li><strong>{language === 'es' ? 'Limitación:' : 'Limitation:'}</strong> {language === 'es' ? 'Solicitar la limitación del procesamiento' : 'Request limitation of processing'}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                {language === 'es'
                  ? 'Para ejercer estos derechos, contáctenos a través de los medios indicados al final de esta política.'
                  : 'To exercise these rights, contact us through the means indicated at the end of this policy.'
                }
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '9. Servicios de Terceros' : '9. Third-Party Services'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Le recomendamos revisar las políticas de privacidad de cualquier sitio web que visite.'
                  : 'Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites. We recommend reviewing the privacy policies of any website you visit.'
                }
              </p>
              <p className="text-gray-700 leading-relaxed">
                {language === 'es'
                  ? 'Utilizamos servicios de terceros confiables como Google Analytics, que tienen sus propias políticas de privacidad.'
                  : 'We use trusted third-party services like Google Analytics, which have their own privacy policies.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '10. Cambios en esta Política' : '10. Changes to This Policy'}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {language === 'es'
                  ? 'Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de "última actualización". Le recomendamos revisar periódicamente esta política.'
                  : 'We may update this privacy policy occasionally. We will notify you of significant changes by posting the new policy on our website and updating the "last updated" date. We recommend reviewing this policy periodically.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '11. Contacto' : '11. Contact'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, puede contactarnos:'
                  : 'If you have questions about this privacy policy or wish to exercise your rights, you can contact us:'
                }
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> jonaperez.dev@gmail.com</p>
                <p className="text-gray-700"><strong>WhatsApp:</strong> +598 92 934 394</p>
                <p className="text-gray-700"><strong>{language === 'es' ? 'Tiempo de respuesta:' : 'Response time:'}</strong> {language === 'es' ? 'Máximo 72 horas' : 'Maximum 72 hours'}</p>
              </div>
            </section>

            {/* Navegación */}
            <div className="border-t pt-8 mt-12">
              <div className="flex justify-between items-center">
                <Link 
                  to="/terminos" 
                  className="text-coral-600 hover:text-coral-700 font-medium transition-colors"
                >
                  {language === 'es' ? '← Términos y Condiciones' : '← Terms and Conditions'}
                </Link>
                <Link 
                  to="/" 
                  className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Privacy;