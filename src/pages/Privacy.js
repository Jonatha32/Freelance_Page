import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que recopilamos</h2>
              <p className="text-gray-600 mb-4">
                Recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Completas formularios de contacto</li>
                <li>Te suscribes a nuestro newsletter</li>
                <li>Nos contactas por email o WhatsApp</li>
                <li>Participas en consultas o proyectos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cómo utilizamos tu información</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Responder a tus consultas y solicitudes</li>
                <li>Proporcionar servicios freelance</li>
                <li>Enviar actualizaciones sobre proyectos</li>
                <li>Mejorar nuestros servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Compartir información</h2>
              <p className="text-gray-600 mb-4">
                No vendemos, intercambiamos ni transferimos tu información personal a terceros, excepto:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Cuando sea necesario para proporcionar servicios solicitados</li>
                <li>Para cumplir con la ley o procesos legales</li>
                <li>Para proteger nuestros derechos o seguridad</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies y tecnologías similares</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Seguridad de datos</h2>
              <p className="text-gray-600 mb-4">
                Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Tus derechos</h2>
              <p className="text-gray-600 mb-4">
                Tienes derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contacto</h2>
              <p className="text-gray-600 mb-4">
                Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  Email: <a href="mailto:tu@email.com" className="text-primary-600 hover:text-primary-700">tu@email.com</a><br />
                  WhatsApp: <a href="https://wa.me/1234567890" className="text-primary-600 hover:text-primary-700">+1 (234) 567-8900</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cambios a esta política</h2>
              <p className="text-gray-600">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página con una fecha de actualización revisada.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;