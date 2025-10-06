import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Términos y Condiciones</h1>
            <p className="text-gray-600">Última actualización: Octubre 2025</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {/* Introducción */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estos términos y condiciones rigen el uso de los servicios ofrecidos por Jonathan Pérez 
                (en adelante "el Proveedor") a través de este sitio web y cualquier contrato de servicios 
                profesionales establecido entre las partes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Al contratar nuestros servicios o utilizar este sitio web, usted acepta estar sujeto 
                a estos términos y condiciones en su totalidad.
              </p>
            </section>

            {/* Servicios */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Servicios Ofrecidos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El Proveedor ofrece servicios de:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Desarrollo web frontend y backend</li>
                <li>Diseño UX/UI y branding</li>
                <li>Copywriting y estrategia de contenido</li>
                <li>Consultoría digital y mentoría</li>
                <li>Otros servicios creativos y tecnológicos relacionados</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Los detalles específicos de cada servicio se establecerán en propuestas individuales 
                y contratos específicos para cada proyecto.
              </p>
            </section>

            {/* Proceso de Contratación */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Proceso de Contratación</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>3.1 Consulta inicial:</strong> Gratuita y sin compromiso.</p>
                <p><strong>3.2 Propuesta:</strong> Se enviará una propuesta detallada con alcance, tiempos y costos.</p>
                <p><strong>3.3 Contrato:</strong> Los servicios se formalizan mediante contrato específico.</p>
                <p><strong>3.4 Pago inicial:</strong> Se requiere 50% de adelanto para iniciar el proyecto.</p>
                <p><strong>3.5 Desarrollo:</strong> Ejecución según cronograma acordado.</p>
                <p><strong>3.6 Entrega:</strong> Entrega final contra pago del 50% restante.</p>
              </div>
            </section>

            {/* Pagos */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pagos y Facturación</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>4.1 Estructura de pagos:</strong> 50% adelanto, 50% contra entrega (salvo acuerdo diferente).</p>
                <p><strong>4.2 Métodos de pago:</strong> Transferencia bancaria, PayPal, o métodos acordados.</p>
                <p><strong>4.3 Moneda:</strong> Todos los precios están en USD salvo indicación contraria.</p>
                <p><strong>4.4 Retrasos:</strong> Pagos con más de 15 días de retraso pueden suspender el proyecto.</p>
                <p><strong>4.5 Reembolsos:</strong> No se realizan reembolsos una vez iniciado el trabajo, salvo incumplimiento del Proveedor.</p>
              </div>
            </section>

            {/* Derechos de Autor */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>5.1 Transferencia:</strong> Los derechos del trabajo final se transfieren al cliente una vez completado el pago.</p>
                <p><strong>5.2 Portfolio:</strong> El Proveedor se reserva el derecho de mostrar el trabajo en su portfolio.</p>
                <p><strong>5.3 Código base:</strong> Frameworks, librerías y código reutilizable permanecen como propiedad del Proveedor.</p>
                <p><strong>5.4 Materiales del cliente:</strong> El cliente garantiza tener derechos sobre todos los materiales proporcionados.</p>
              </div>
            </section>

            {/* Responsabilidades */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilidades</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>6.1 Del Proveedor:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Entregar el trabajo según especificaciones acordadas</li>
                  <li>Cumplir con los plazos establecidos</li>
                  <li>Mantener confidencialidad de la información del cliente</li>
                  <li>Proporcionar soporte técnico según lo acordado</li>
                </ul>
                <p><strong>6.2 Del Cliente:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Proporcionar información y materiales necesarios</li>
                  <li>Realizar pagos según cronograma acordado</li>
                  <li>Proporcionar feedback oportuno</li>
                  <li>Respetar los derechos de propiedad intelectual</li>
                </ul>
              </div>
            </section>

            {/* Limitaciones */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitaciones de Responsabilidad</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  El Proveedor no será responsable por daños indirectos, pérdida de beneficios, 
                  o daños consecuenciales que puedan surgir del uso de los servicios proporcionados.
                </p>
                <p>
                  La responsabilidad máxima del Proveedor se limita al monto total pagado por el cliente 
                  por el servicio específico en cuestión.
                </p>
              </div>
            </section>

            {/* Modificaciones */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                Estos términos pueden ser modificados en cualquier momento. Las modificaciones 
                entrarán en vigor inmediatamente después de su publicación en este sitio web. 
                Es responsabilidad del usuario revisar periódicamente estos términos.
              </p>
            </section>

            {/* Contacto */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para cualquier consulta sobre estos términos y condiciones, puede contactarnos:
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
                  ← Política de Privacidad
                </Link>
                <Link 
                  to="/" 
                  className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Volver al Inicio
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