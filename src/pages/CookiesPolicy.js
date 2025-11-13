import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageSelector';

const CookiesPolicy = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Política de Cookies' : 'Cookies Policy'}
            </h1>
            <p className="text-gray-600">
              {language === 'es' ? 'Última actualización: Octubre 2025' : 'Last updated: October 2025'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {/* Introducción */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '1. ¿Qué son las Cookies?' : '1. What are Cookies?'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Estas cookies nos ayudan a mejorar su experiencia de navegación, recordar sus preferencias y analizar cómo utiliza nuestro sitio.'
                  : 'Cookies are small text files that are stored on your device when you visit our website. These cookies help us improve your browsing experience, remember your preferences, and analyze how you use our site.'
                }
              </p>
              <p className="text-gray-700 leading-relaxed">
                {language === 'es'
                  ? 'Esta política explica qué cookies utilizamos, por qué las utilizamos y cómo puede controlarlas.'
                  : 'This policy explains what cookies we use, why we use them, and how you can control them.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '2. Tipos de Cookies que Utilizamos' : '2. Types of Cookies We Use'}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    {language === 'es' ? '2.1 Cookies Esenciales' : '2.1 Essential Cookies'}
                  </h3>
                  <p className="text-green-800 mb-3">
                    {language === 'es'
                      ? 'Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar.'
                      : 'These cookies are necessary for the basic functioning of the website and cannot be disabled.'
                    }
                  </p>
                  <ul className="list-disc list-inside text-green-700 space-y-1">
                    <li>{language === 'es' ? 'Preferencias de idioma' : 'Language preferences'}</li>
                    <li>{language === 'es' ? 'Seguridad de la sesión' : 'Session security'}</li>
                    <li>{language === 'es' ? 'Funcionalidad del formulario de contacto' : 'Contact form functionality'}</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    {language === 'es' ? '2.2 Cookies de Rendimiento' : '2.2 Performance Cookies'}
                  </h3>
                  <p className="text-blue-800 mb-3">
                    {language === 'es'
                      ? 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.'
                      : 'They help us understand how visitors interact with our website.'
                    }
                  </p>
                  <ul className="list-disc list-inside text-blue-700 space-y-1">
                    <li>Google Analytics</li>
                    <li>{language === 'es' ? 'Métricas de velocidad de carga' : 'Page load speed metrics'}</li>
                    <li>{language === 'es' ? 'Análisis de navegación' : 'Navigation analysis'}</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">
                    {language === 'es' ? '2.3 Cookies de Funcionalidad' : '2.3 Functionality Cookies'}
                  </h3>
                  <p className="text-purple-800 mb-3">
                    {language === 'es'
                      ? 'Permiten que el sitio web recuerde las opciones que hace para proporcionar una experiencia más personalizada.'
                      : 'Allow the website to remember choices you make to provide a more personalized experience.'
                    }
                  </p>
                  <ul className="list-disc list-inside text-purple-700 space-y-1">
                    <li>{language === 'es' ? 'Configuración de tema (claro/oscuro)' : 'Theme settings (light/dark)'}</li>
                    <li>{language === 'es' ? 'Preferencias de visualización' : 'Display preferences'}</li>
                    <li>{language === 'es' ? 'Información de formularios guardada' : 'Saved form information'}</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">
                    {language === 'es' ? '2.4 Cookies de Marketing (Opcional)' : '2.4 Marketing Cookies (Optional)'}
                  </h3>
                  <p className="text-orange-800 mb-3">
                    {language === 'es'
                      ? 'Solo se utilizan con su consentimiento explícito para mostrar contenido relevante.'
                      : 'Only used with your explicit consent to show relevant content.'
                    }
                  </p>
                  <ul className="list-disc list-inside text-orange-700 space-y-1">
                    <li>{language === 'es' ? 'Seguimiento de conversiones' : 'Conversion tracking'}</li>
                    <li>{language === 'es' ? 'Personalización de contenido' : 'Content personalization'}</li>
                    <li>{language === 'es' ? 'Análisis de comportamiento' : 'Behavior analysis'}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '3. Cookies de Terceros' : '3. Third-Party Cookies'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Utilizamos servicios de terceros confiables que pueden establecer sus propias cookies:'
                  : 'We use trusted third-party services that may set their own cookies:'
                }
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    {language === 'es' ? 'Análisis de tráfico web' : 'Web traffic analysis'}
                  </p>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-coral-600 hover:text-coral-700 text-sm">
                    {language === 'es' ? 'Ver política de privacidad' : 'View privacy policy'}
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Framer Motion</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    {language === 'es' ? 'Animaciones y transiciones' : 'Animations and transitions'}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {language === 'es' ? 'No recopila datos personales' : 'Does not collect personal data'}
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '4. Duración de las Cookies' : '4. Cookie Duration'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-coral-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'es' ? 'Cookies de Sesión' : 'Session Cookies'}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {language === 'es' 
                        ? 'Se eliminan automáticamente cuando cierra su navegador'
                        : 'Automatically deleted when you close your browser'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-coral-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'es' ? 'Cookies Persistentes' : 'Persistent Cookies'}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {language === 'es' 
                        ? 'Permanecen en su dispositivo por un período específico (máximo 2 años)'
                        : 'Remain on your device for a specific period (maximum 2 years)'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '5. Cómo Controlar las Cookies' : '5. How to Control Cookies'}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {language === 'es' ? '5.1 Configuración del Navegador' : '5.1 Browser Settings'}
                  </h3>
                  <p className="text-gray-700 mb-3">
                    {language === 'es'
                      ? 'Puede controlar y eliminar cookies a través de la configuración de su navegador:'
                      : 'You can control and delete cookies through your browser settings:'
                    }
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-center p-3 border border-gray-200 rounded-lg hover:border-coral-300 transition-colors">
                      <div className="text-2xl mb-1">🌐</div>
                      <div className="text-sm font-medium">Chrome</div>
                    </a>
                    <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-center p-3 border border-gray-200 rounded-lg hover:border-coral-300 transition-colors">
                      <div className="text-2xl mb-1">🦊</div>
                      <div className="text-sm font-medium">Firefox</div>
                    </a>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-center p-3 border border-gray-200 rounded-lg hover:border-coral-300 transition-colors">
                      <div className="text-2xl mb-1">🧭</div>
                      <div className="text-sm font-medium">Safari</div>
                    </a>
                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-center p-3 border border-gray-200 rounded-lg hover:border-coral-300 transition-colors">
                      <div className="text-2xl mb-1">🔷</div>
                      <div className="text-sm font-medium">Edge</div>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {language === 'es' ? '5.2 Herramientas de Exclusión' : '5.2 Opt-out Tools'}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-coral-600 hover:text-coral-700">
                        Google Analytics Opt-out
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-coral-600 hover:text-coral-700">
                        Your Online Choices
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '6. Impacto de Deshabilitar Cookies' : '6. Impact of Disabling Cookies'}
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                  {language === 'es' ? 'Importante' : 'Important'}
                </h3>
                <p className="text-yellow-800 mb-3">
                  {language === 'es'
                    ? 'Si deshabilita las cookies, algunas funcionalidades del sitio web pueden no funcionar correctamente:'
                    : 'If you disable cookies, some website functionalities may not work properly:'
                  }
                </p>
                <ul className="list-disc list-inside text-yellow-700 space-y-1">
                  <li>{language === 'es' ? 'Pérdida de preferencias de idioma' : 'Loss of language preferences'}</li>
                  <li>{language === 'es' ? 'Problemas con formularios de contacto' : 'Issues with contact forms'}</li>
                  <li>{language === 'es' ? 'Experiencia de navegación menos personalizada' : 'Less personalized browsing experience'}</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '7. Actualizaciones de esta Política' : '7. Updates to This Policy'}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {language === 'es'
                  ? 'Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestras prácticas o por razones operativas, legales o reglamentarias. Le recomendamos revisar esta página periódicamente.'
                  : 'We may update this cookies policy occasionally to reflect changes in our practices or for operational, legal or regulatory reasons. We recommend reviewing this page periodically.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '8. Contacto' : '8. Contact'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Si tiene preguntas sobre nuestra política de cookies:'
                  : 'If you have questions about our cookies policy:'
                }
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> jonaperez.dev@gmail.com</p>
                <p className="text-gray-700"><strong>WhatsApp:</strong> +598 92 934 394</p>
                <p className="text-gray-700"><strong>{language === 'es' ? 'Asunto:' : 'Subject:'}</strong> {language === 'es' ? 'Consulta sobre Cookies' : 'Cookies Inquiry'}</p>
              </div>
            </section>

            {/* Navegación */}
            <div className="border-t pt-8 mt-12">
              <div className="flex justify-between items-center">
                <Link 
                  to="/privacidad" 
                  className="text-coral-600 hover:text-coral-700 font-medium transition-colors"
                >
                  {language === 'es' ? '← Política de Privacidad' : '← Privacy Policy'}
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

export default CookiesPolicy;