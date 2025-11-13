import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageSelector';

const RefundPolicy = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Política de Reembolso' : 'Refund Policy'}
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
                  ? 'Esta política de reembolso establece las condiciones bajo las cuales se pueden solicitar y procesar reembolsos para los servicios profesionales ofrecidos por Jonathan Pérez.'
                  : 'This refund policy establishes the conditions under which refunds can be requested and processed for professional services offered by Jonathan Pérez.'
                }
              </p>
              <p className="text-gray-700 leading-relaxed">
                {language === 'es'
                  ? 'Al contratar nuestros servicios, usted acepta los términos de esta política de reembolso.'
                  : 'By contracting our services, you agree to the terms of this refund policy.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '2. Política General' : '2. General Policy'}
              </h2>
              <div className="bg-coral-50 border border-coral-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-coral-900 mb-3">
                  {language === 'es' ? 'Principio Fundamental' : 'Fundamental Principle'}
                </h3>
                <p className="text-coral-800">
                  {language === 'es'
                    ? 'Debido a la naturaleza personalizada de nuestros servicios creativos y de desarrollo, no ofrecemos reembolsos una vez que el trabajo ha comenzado, excepto en circunstancias específicas detalladas en esta política.'
                    : 'Due to the personalized nature of our creative and development services, we do not offer refunds once work has begun, except under specific circumstances detailed in this policy.'
                  }
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '3. Casos Elegibles para Reembolso' : '3. Cases Eligible for Refund'}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {language === 'es' ? '3.1 Antes del Inicio del Proyecto' : '3.1 Before Project Start'}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>{language === 'es' ? 'Reembolso completo (100%):' : 'Full refund (100%):'}</strong> {language === 'es' ? 'Si el proyecto se cancela antes de comenzar el trabajo' : 'If the project is cancelled before work begins'}</li>
                    <li><strong>{language === 'es' ? 'Plazo:' : 'Timeframe:'}</strong> {language === 'es' ? 'Hasta 48 horas después del pago inicial' : 'Up to 48 hours after initial payment'}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {language === 'es' ? '3.2 Incumplimiento del Proveedor' : '3.2 Provider Breach'}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>{language === 'es' ? 'Falta de entrega sin justificación válida' : 'Failure to deliver without valid justification'}</li>
                    <li>{language === 'es' ? 'Incumplimiento grave de las especificaciones acordadas' : 'Serious breach of agreed specifications'}</li>
                    <li>{language === 'es' ? 'Abandono del proyecto por parte del proveedor' : 'Project abandonment by the provider'}</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">
                    {language === 'es' 
                      ? '*Reembolso proporcional según el trabajo completado'
                      : '*Proportional refund based on completed work'
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {language === 'es' ? '3.3 Circunstancias Extraordinarias' : '3.3 Extraordinary Circumstances'}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>{language === 'es' ? 'Fuerza mayor que impida la continuación del proyecto' : 'Force majeure preventing project continuation'}</li>
                    <li>{language === 'es' ? 'Cambios legales que afecten la viabilidad del proyecto' : 'Legal changes affecting project viability'}</li>
                    <li>{language === 'es' ? 'Situaciones de emergencia médica o familiar' : 'Medical or family emergency situations'}</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">
                    {language === 'es' 
                      ? '*Evaluación caso por caso'
                      : '*Case-by-case evaluation'
                    }
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '4. Casos NO Elegibles para Reembolso' : '4. Cases NOT Eligible for Refund'}
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ul className="list-disc list-inside text-red-800 space-y-2">
                  <li>{language === 'es' ? 'Cambio de opinión del cliente después de iniciar el trabajo' : 'Client change of mind after work has started'}</li>
                  <li>{language === 'es' ? 'Insatisfacción con el resultado cuando cumple las especificaciones acordadas' : 'Dissatisfaction with result when it meets agreed specifications'}</li>
                  <li>{language === 'es' ? 'Retrasos causados por falta de colaboración del cliente' : 'Delays caused by lack of client collaboration'}</li>
                  <li>{language === 'es' ? 'Cambios en el alcance del proyecto después del inicio' : 'Changes in project scope after start'}</li>
                  <li>{language === 'es' ? 'Problemas técnicos en el lado del cliente (hosting, dominio, etc.)' : 'Technical issues on client side (hosting, domain, etc.)'}</li>
                  <li>{language === 'es' ? 'Cancelación por parte del cliente una vez iniciado el trabajo' : 'Cancellation by client once work has started'}</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '5. Proceso de Solicitud de Reembolso' : '5. Refund Request Process'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-coral-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'es' ? 'Contacto Inicial' : 'Initial Contact'}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {language === 'es' 
                        ? 'Enviar solicitud por email a jonaperez.dev@gmail.com con detalles del caso'
                        : 'Send request by email to jonaperez.dev@gmail.com with case details'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-coral-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'es' ? 'Evaluación' : 'Evaluation'}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {language === 'es' 
                        ? 'Revisión del caso en un plazo máximo de 5 días hábiles'
                        : 'Case review within a maximum of 5 business days'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-coral-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'es' ? 'Resolución' : 'Resolution'}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {language === 'es' 
                        ? 'Comunicación de la decisión y procesamiento del reembolso si aplica'
                        : 'Decision communication and refund processing if applicable'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '6. Tiempos de Procesamiento' : '6. Processing Times'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">PayPal</h4>
                  <p className="text-blue-800 text-sm">
                    {language === 'es' ? '3-5 días hábiles' : '3-5 business days'}
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">
                    {language === 'es' ? 'Transferencia Bancaria' : 'Bank Transfer'}
                  </h4>
                  <p className="text-green-800 text-sm">
                    {language === 'es' ? '5-10 días hábiles' : '5-10 business days'}
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '7. Alternativas al Reembolso' : '7. Alternatives to Refund'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Antes de procesar un reembolso, exploraremos alternativas que puedan resolver la situación:'
                  : 'Before processing a refund, we will explore alternatives that may resolve the situation:'
                }
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{language === 'es' ? 'Revisiones adicionales sin costo' : 'Additional revisions at no cost'}</li>
                <li>{language === 'es' ? 'Extensión de plazos de entrega' : 'Extension of delivery deadlines'}</li>
                <li>{language === 'es' ? 'Modificación del alcance del proyecto' : 'Modification of project scope'}</li>
                <li>{language === 'es' ? 'Crédito para servicios futuros' : 'Credit for future services'}</li>
                <li>{language === 'es' ? 'Mediación para resolver diferencias' : 'Mediation to resolve differences'}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '8. Contacto' : '8. Contact'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Para solicitar un reembolso o consultar sobre esta política:'
                  : 'To request a refund or inquire about this policy:'
                }
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> jonaperez.dev@gmail.com</p>
                <p className="text-gray-700"><strong>WhatsApp:</strong> +598 92 934 394</p>
                <p className="text-gray-700"><strong>{language === 'es' ? 'Asunto:' : 'Subject:'}</strong> {language === 'es' ? 'Solicitud de Reembolso - [Nombre del Proyecto]' : 'Refund Request - [Project Name]'}</p>
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

export default RefundPolicy;