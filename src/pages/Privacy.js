import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
            <p className="text-gray-600">Última actualización: Octubre 2025</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {/* Introducción */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Valoramos y respetamos su privacidad. Esta política describe cómo 
                recopilamos, utilizamos, almacenamos y protegemos su información personal cuando 
                utiliza nuestros servicios o visita nuestro sitio web.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta 
                política de privacidad.
              </p>
            </section>

            {/* Información que Recopilamos */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Información Personal</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Nombre completo y datos de contacto</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Información de la empresa (si aplica)</li>
                  <li>Detalles del proyecto y requerimientos</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Información Técnica</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Dirección IP y ubicación geográfica</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas y tiempo de navegación</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </div>
            </section>

            {/* Cómo Utilizamos la Información */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Utilizamos su Información</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>3.1 Prestación de servicios:</strong> Para proporcionar, mantener y mejorar nuestros servicios profesionales.</p>
                <p><strong>3.2 Comunicación:</strong> Para responder consultas, enviar propuestas y mantener comunicación del proyecto.</p>
                <p><strong>3.3 Facturación:</strong> Para procesar pagos y generar facturas.</p>
                <p><strong>3.4 Mejora del sitio:</strong> Para analizar el uso del sitio web y mejorar la experiencia del usuario.</p>
                <p><strong>3.5 Marketing:</strong> Para enviar información relevante sobre servicios (solo con su consentimiento).</p>
              </div>
            </section>

            {/* Compartir Información */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir su Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros, 
                excepto en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Herramientas necesarias para la prestación del servicio (hosting, email, etc.)</li>
                <li><strong>Requerimientos legales:</strong> Cuando sea requerido por ley o autoridades competentes</li>
                <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos, propiedad o seguridad</li>
                <li><strong>Consentimiento explícito:</strong> Cuando usted nos dé permiso específico</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies y Tecnologías Similares</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
                  <li><strong>Cookies de rendimiento:</strong> Para analizar cómo se utiliza el sitio</li>
                  <li><strong>Cookies de funcionalidad:</strong> Para recordar sus preferencias</li>
                </ul>
                <p>
                  Puede controlar las cookies a través de la configuración de su navegador.
                </p>
              </div>
            </section>

            {/* Seguridad */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad de la Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                su información personal contra acceso no autorizado, alteración, divulgación o destrucción:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cifrado SSL/TLS para transmisión de datos</li>
                <li>Acceso restringido a información personal</li>
                <li>Copias de seguridad regulares</li>
                <li>Monitoreo de seguridad continuo</li>
                <li>Actualización regular de sistemas de seguridad</li>
              </ul>
            </section>

            {/* Retención de Datos */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retención de Datos</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Conservamos su información personal solo durante el tiempo necesario para:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cumplir con los propósitos para los cuales fue recopilada</li>
                  <li>Cumplir con obligaciones legales y contractuales</li>
                  <li>Resolver disputas y hacer cumplir nuestros acuerdos</li>
                </ul>
                <p>
                  Generalmente, conservamos los datos del proyecto durante 3 años después de la finalización 
                  del servicio, salvo requerimientos legales específicos.
                </p>
              </div>
            </section>

            {/* Derechos del Usuario */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Usted tiene los siguientes derechos respecto a su información personal:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Acceso:</strong> Solicitar una copia de la información que tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de información inexacta</li>
                <li><strong>Eliminación:</strong> Solicitar la eliminación de su información personal</li>
                <li><strong>Portabilidad:</strong> Solicitar la transferencia de sus datos</li>
                <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del procesamiento</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para ejercer estos derechos, contáctenos a través de los medios indicados al final de esta política.
              </p>
            </section>

            {/* Servicios de Terceros */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Servicios de Terceros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables 
                de las prácticas de privacidad de estos sitios. Le recomendamos revisar las políticas 
                de privacidad de cualquier sitio web que visite.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos servicios de terceros confiables como Google Analytics, que tienen sus 
                propias políticas de privacidad.
              </p>
            </section>

            {/* Cambios en la Política */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cambios en esta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos 
                sobre cambios significativos publicando la nueva política en nuestro sitio web 
                y actualizando la fecha de "última actualización". Le recomendamos revisar 
                periódicamente esta política.
              </p>
            </section>

            {/* Contacto */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, 
                puede contactarnos:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> jonaperez.dev@gmail.com</p>
                <p className="text-gray-700"><strong>WhatsApp:</strong> +598 92 934 394</p>
                <p className="text-gray-700"><strong>Tiempo de respuesta:</strong> Máximo 72 horas</p>
              </div>
            </section>

            {/* Navegación */}
            <div className="border-t pt-8 mt-12">
              <div className="flex justify-between items-center">
                <Link 
                  to="/terminos" 
                  className="text-coral-600 hover:text-coral-700 font-medium transition-colors"
                >
                  ← Términos y Condiciones
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

export default Privacy;