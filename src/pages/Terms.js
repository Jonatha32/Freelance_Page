import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de términos</h2>
              <p className="text-gray-600 mb-4">
                Al acceder y utilizar este sitio web y nuestros servicios freelance, aceptas estar sujeto a estos Términos y Condiciones y a nuestra Política de Privacidad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Servicios ofrecidos</h2>
              <p className="text-gray-600 mb-4">
                Ofrecemos servicios de desarrollo web, branding digital, consultoría tecnológica y servicios relacionados. Los detalles específicos de cada proyecto se acordarán mediante contrato separado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Proceso de contratación</h2>
              <div className="text-gray-600 space-y-4">
                <p><strong>3.1 Consulta inicial:</strong> Evaluación gratuita de necesidades y alcance del proyecto.</p>
                <p><strong>3.2 Propuesta:</strong> Entrega de cotización detallada con timeline y entregables.</p>
                <p><strong>3.3 Contrato:</strong> Firma de acuerdo específico antes del inicio del trabajo.</p>
                <p><strong>3.4 Desarrollo:</strong> Ejecución del proyecto según cronograma acordado.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pagos y facturación</h2>
              <div className="text-gray-600 space-y-4">
                <p><strong>4.1 Estructura de pagos:</strong> Generalmente 50% al inicio y 50% al completar el proyecto.</p>
                <p><strong>4.2 Métodos de pago:</strong> Transferencia bancaria, PayPal o métodos acordados.</p>
                <p><strong>4.3 Retrasos:</strong> Pagos atrasados pueden resultar en suspensión temporal del trabajo.</p>
                <p><strong>4.4 Reembolsos:</strong> Política de reembolsos según términos específicos del contrato.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propiedad intelectual</h2>
              <div className="text-gray-600 space-y-4">
                <p><strong>5.1 Trabajo personalizado:</strong> El cliente obtiene derechos completos sobre el trabajo final una vez completado el pago.</p>
                <p><strong>5.2 Código base:</strong> Frameworks, librerías y herramientas de terceros mantienen sus licencias originales.</p>
                <p><strong>5.3 Portfolio:</strong> Nos reservamos el derecho de mostrar el trabajo en nuestro portfolio.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Responsabilidades del cliente</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Proporcionar contenido, imágenes y materiales necesarios</li>
                <li>Revisar y aprobar entregables en tiempo oportuno</li>
                <li>Comunicar cambios o feedback de manera clara</li>
                <li>Realizar pagos según cronograma acordado</li>
                <li>Proporcionar acceso a sistemas cuando sea necesario</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitación de responsabilidad</h2>
              <p className="text-gray-600 mb-4">
                Nuestros servicios se proporcionan "tal como están". No garantizamos resultados específicos de negocio y nuestra responsabilidad se limita al valor del contrato específico.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificaciones y cancelaciones</h2>
              <div className="text-gray-600 space-y-4">
                <p><strong>8.1 Cambios de alcance:</strong> Modificaciones significativas pueden requerir ajustes de precio y timeline.</p>
                <p><strong>8.2 Cancelación por cliente:</strong> Posible con compensación por trabajo completado.</p>
                <p><strong>8.3 Cancelación por proveedor:</strong> En casos de incumplimiento del cliente o circunstancias extraordinarias.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Soporte y mantenimiento</h2>
              <p className="text-gray-600 mb-4">
                El soporte post-lanzamiento se especifica en cada contrato. Generalmente incluimos 30 días de soporte básico. El mantenimiento continuo requiere acuerdo separado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Resolución de disputas</h2>
              <p className="text-gray-600 mb-4">
                Cualquier disputa se resolverá primero mediante negociación directa. Si no es posible, se procederá según las leyes aplicables en nuestra jurisdicción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contacto</h2>
              <p className="text-gray-600 mb-4">
                Para preguntas sobre estos términos:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  Email: <a href="mailto:tu@email.com" className="text-primary-600 hover:text-primary-700">tu@email.com</a><br />
                  WhatsApp: <a href="https://wa.me/1234567890" className="text-primary-600 hover:text-primary-700">+1 (234) 567-8900</a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;