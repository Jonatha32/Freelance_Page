import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageSelector';

const Terms = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
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
                  ? 'Estos términos y condiciones rigen el uso de los servicios ofrecidos por Jonathan Pérez (en adelante "el Proveedor") a través de este sitio web y cualquier contrato de servicios profesionales establecido entre las partes.'
                  : 'These terms and conditions govern the use of services offered by Jonathan Pérez (hereinafter "the Provider") through this website and any professional services contract established between the parties.'
                }
              </p>
              <p className="text-gray-700 leading-relaxed">
                {language === 'es'
                  ? 'Al contratar nuestros servicios o utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones en su totalidad.'
                  : 'By contracting our services or using this website, you agree to be bound by these terms and conditions in their entirety.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '2. Servicios Ofrecidos' : '2. Services Offered'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es' ? 'El Proveedor ofrece servicios de:' : 'The Provider offers services in:'}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>{language === 'es' ? 'Desarrollo web frontend y backend' : 'Frontend and backend web development'}</li>
                <li>{language === 'es' ? 'Diseño UX/UI y branding' : 'UX/UI design and branding'}</li>
                <li>{language === 'es' ? 'Copywriting y estrategia de contenido' : 'Copywriting and content strategy'}</li>
                <li>{language === 'es' ? 'Consultoría digital y mentoría' : 'Digital consulting and mentoring'}</li>
                <li>{language === 'es' ? 'Otros servicios creativos y tecnológicos relacionados' : 'Other related creative and technological services'}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                {language === 'es'
                  ? 'Los detalles específicos de cada servicio se establecerán en propuestas individuales y contratos específicos para cada proyecto.'
                  : 'Specific details of each service will be established in individual proposals and specific contracts for each project.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '3. Proceso de Contratación' : '3. Contracting Process'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>{language === 'es' ? '3.1 Consulta inicial:' : '3.1 Initial consultation:'}</strong> {language === 'es' ? 'Gratuita y sin compromiso.' : 'Free and without commitment.'}</p>
                <p><strong>{language === 'es' ? '3.2 Propuesta:' : '3.2 Proposal:'}</strong> {language === 'es' ? 'Se enviará una propuesta detallada con alcance, tiempos y costos.' : 'A detailed proposal with scope, timeline and costs will be sent.'}</p>
                <p><strong>{language === 'es' ? '3.3 Contrato:' : '3.3 Contract:'}</strong> {language === 'es' ? 'Los servicios se formalizan mediante contrato específico.' : 'Services are formalized through specific contract.'}</p>
                <p><strong>{language === 'es' ? '3.4 Pago inicial:' : '3.4 Initial payment:'}</strong> {language === 'es' ? 'Se requiere 50% de adelanto para iniciar el proyecto.' : '50% advance payment required to start the project.'}</p>
                <p><strong>{language === 'es' ? '3.5 Desarrollo:' : '3.5 Development:'}</strong> {language === 'es' ? 'Ejecución según cronograma acordado.' : 'Execution according to agreed schedule.'}</p>
                <p><strong>{language === 'es' ? '3.6 Entrega:' : '3.6 Delivery:'}</strong> {language === 'es' ? 'Entrega final contra pago del 50% restante.' : 'Final delivery against payment of remaining 50%.'}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '4. Pagos y Facturación' : '4. Payments and Billing'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>{language === 'es' ? '4.1 Estructura de pagos:' : '4.1 Payment structure:'}</strong> {language === 'es' ? '50% adelanto, 50% contra entrega (salvo acuerdo diferente).' : '50% advance, 50% on delivery (unless otherwise agreed).'}</p>
                <p><strong>{language === 'es' ? '4.2 Métodos de pago:' : '4.2 Payment methods:'}</strong> {language === 'es' ? 'Transferencia bancaria, PayPal, o métodos acordados.' : 'Bank transfer, PayPal, or agreed methods.'}</p>
                <p><strong>{language === 'es' ? '4.3 Moneda:' : '4.3 Currency:'}</strong> {language === 'es' ? 'Todos los precios están en USD salvo indicación contraria.' : 'All prices are in USD unless otherwise indicated.'}</p>
                <p><strong>{language === 'es' ? '4.4 Retrasos:' : '4.4 Delays:'}</strong> {language === 'es' ? 'Pagos con más de 15 días de retraso pueden suspender el proyecto.' : 'Payments more than 15 days late may suspend the project.'}</p>
                <p><strong>{language === 'es' ? '4.5 Reembolsos:' : '4.5 Refunds:'}</strong> {language === 'es' ? 'No se realizan reembolsos una vez iniciado el trabajo, salvo incumplimiento del Proveedor.' : 'No refunds are made once work has started, except for Provider breach.'}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '5. Propiedad Intelectual' : '5. Intellectual Property'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>{language === 'es' ? '5.1 Transferencia:' : '5.1 Transfer:'}</strong> {language === 'es' ? 'Los derechos del trabajo final se transfieren al cliente una vez completado el pago.' : 'Rights to the final work are transferred to the client once payment is completed.'}</p>
                <p><strong>{language === 'es' ? '5.2 Portfolio:' : '5.2 Portfolio:'}</strong> {language === 'es' ? 'El Proveedor se reserva el derecho de mostrar el trabajo en su portfolio.' : 'The Provider reserves the right to display the work in their portfolio.'}</p>
                <p><strong>{language === 'es' ? '5.3 Código base:' : '5.3 Base code:'}</strong> {language === 'es' ? 'Frameworks, librerías y código reutilizable permanecen como propiedad del Proveedor.' : 'Frameworks, libraries and reusable code remain the property of the Provider.'}</p>
                <p><strong>{language === 'es' ? '5.4 Materiales del cliente:' : '5.4 Client materials:'}</strong> {language === 'es' ? 'El cliente garantiza tener derechos sobre todos los materiales proporcionados.' : 'The client guarantees having rights to all materials provided.'}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '6. Responsabilidades' : '6. Responsibilities'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>{language === 'es' ? '6.1 Del Proveedor:' : '6.1 Provider:'}</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>{language === 'es' ? 'Entregar el trabajo según especificaciones acordadas' : 'Deliver work according to agreed specifications'}</li>
                  <li>{language === 'es' ? 'Cumplir con los plazos establecidos' : 'Meet established deadlines'}</li>
                  <li>{language === 'es' ? 'Mantener confidencialidad de la información del cliente' : 'Maintain confidentiality of client information'}</li>
                  <li>{language === 'es' ? 'Proporcionar soporte técnico según lo acordado' : 'Provide technical support as agreed'}</li>
                </ul>
                <p><strong>{language === 'es' ? '6.2 Del Cliente:' : '6.2 Client:'}</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>{language === 'es' ? 'Proporcionar información y materiales necesarios' : 'Provide necessary information and materials'}</li>
                  <li>{language === 'es' ? 'Realizar pagos según cronograma acordado' : 'Make payments according to agreed schedule'}</li>
                  <li>{language === 'es' ? 'Proporcionar feedback oportuno' : 'Provide timely feedback'}</li>
                  <li>{language === 'es' ? 'Respetar los derechos de propiedad intelectual' : 'Respect intellectual property rights'}</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '7. Limitaciones de Responsabilidad' : '7. Liability Limitations'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {language === 'es'
                    ? 'El Proveedor no será responsable por daños indirectos, pérdida de beneficios, o daños consecuenciales que puedan surgir del uso de los servicios proporcionados.'
                    : 'The Provider will not be responsible for indirect damages, loss of profits, or consequential damages that may arise from the use of the services provided.'
                  }
                </p>
                <p>
                  {language === 'es'
                    ? 'La responsabilidad máxima del Proveedor se limita al monto total pagado por el cliente por el servicio específico en cuestión.'
                    : 'The Provider\'s maximum liability is limited to the total amount paid by the client for the specific service in question.'
                  }
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '8. Modificaciones' : '8. Modifications'}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {language === 'es'
                  ? 'Estos términos pueden ser modificados en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web. Es responsabilidad del usuario revisar periódicamente estos términos.'
                  : 'These terms may be modified at any time. Modifications will take effect immediately after publication on this website. It is the user\'s responsibility to periodically review these terms.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? '9. Contacto' : '9. Contact'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'es'
                  ? 'Para cualquier consulta sobre estos términos y condiciones, puede contactarnos:'
                  : 'For any questions about these terms and conditions, you can contact us:'
                }
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> jonaperez.dev@gmail.com</p>
                <p className="text-gray-700"><strong>WhatsApp:</strong> +598 92 934 394</p>
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

export default Terms;