import React from 'react';
import { Link } from 'react-router-dom';

const EmpresaFamiliar = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - Storytelling */}
      <section className="py-20 bg-gradient-to-br from-wine-600 to-wine-600 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Rebrand Empresa Familiar
            </h1>
            <p className="text-xl mb-8 text-wine-100 leading-relaxed">
              Una empresa con 50 años de historia necesitaba modernizar su imagen para conectar con nuevas generaciones sin perder su esencia. Mi desafío fue crear una identidad que honrara el legado familiar y al mismo tiempo le diera frescura y relevancia en la era digital.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block">
              <div className="text-3xl font-bold text-coral-300 mb-2">+90%</div>
              <div className="text-wine-100">Percepción moderna mejorada</div>
            </div>
          </div>
        </div>
      </section>

      {/* El Antes */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">El Antes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Identidad Original</h3>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="text-gray-400 mb-2">Logo Anterior</div>
                  <div className="w-32 h-16 bg-gray-200 rounded mx-auto flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Logo Tradicional</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Paleta de Colores Original</h4>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg"></div>
                    <div className="w-12 h-12 bg-blue-900 rounded-lg"></div>
                    <div className="w-12 h-12 bg-yellow-600 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Comunicación Anterior</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="text-gray-400 mb-4">Screenshot Comunicación</div>
                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Diseño desactualizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Desafío */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">El Desafío</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-coral-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-coral-600 mb-4">Modernizar la identidad</h3>
                <p className="text-gray-700">Actualizar la imagen visual sin perder la esencia de 30 años</p>
              </div>
              <div className="bg-wine-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-wine-600 mb-4">Atraer nuevas generaciones</h3>
                <p className="text-gray-700">Conectar con audiencias más jóvenes y digitales</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Mantener el legado</h3>
                <p className="text-gray-700">Preservar la seriedad y confianza de la marca familiar</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Mejorar presencia digital</h3>
                <p className="text-gray-700">Optimizar la marca para plataformas digitales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Proceso */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">El Proceso</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Research</h3>
              <p className="text-gray-600 text-sm">Análisis de historia, valores y percepción actual</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Moodboard</h3>
              <p className="text-gray-600 text-sm">Exploración visual y conceptual de la nueva dirección</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Exploración</h3>
              <p className="text-gray-600 text-sm">Iteraciones de logo, tipografía y paleta de colores</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementación</h3>
              <p className="text-gray-600 text-sm">Aplicación en todos los puntos de contacto</p>
            </div>
          </div>
        </div>
      </section>

      {/* El Resultado */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">El Resultado</h2>
          
          {/* Nuevo Branding */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Nueva Identidad</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-gray-600 mb-2 text-sm">Nuevo Logo (Minimalista)</div>
                  <div className="w-40 h-20 bg-gradient-to-r from-coral-400 to-coral-600 rounded mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">LOGO</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Nueva Paleta (#ff7e70 + complementarios)</h4>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-lg" style={{backgroundColor: '#ff7e70'}}></div>
                    <div className="w-12 h-12 bg-gray-800 rounded-lg"></div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg border"></div>
                    <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Tipografía (Inter/Poppins)</h4>
                  <div className="bg-white rounded p-4">
                    <div className="font-bold text-lg">Aa Bb Cc</div>
                    <div className="text-sm text-gray-600">Clean, modern typography</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Moodboard</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gradient-to-br from-coral-200 to-coral-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">Moderno</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">Elegante</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">Confiable</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">Fresco</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mockups */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Mockups</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <div className="w-full h-32 bg-white rounded-lg mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-gray-500 text-sm">Tarjetas de Presentación</span>
                </div>
                <h4 className="font-medium text-gray-900">Papelería</h4>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <div className="w-full h-32 bg-white rounded-lg mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-gray-500 text-sm">Packaging</span>
                </div>
                <h4 className="font-medium text-gray-900">Empaques</h4>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <div className="w-full h-32 bg-white rounded-lg mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-gray-500 text-sm">Redes Sociales</span>
                </div>
                <h4 className="font-medium text-gray-900">Digital</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusión - Impacto */}
      <section className="py-20 bg-gradient-to-r from-wine-600 to-coral-600 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Impacto del Rebrand</h2>
            <p className="text-xl mb-12 text-white/90 leading-relaxed">
              El rebrand logró posicionar a la empresa como una opción moderna y confiable, manteniendo su esencia familiar pero conectando efectivamente with nuevas generaciones. La percepción de modernidad aumentó un 90% y se incrementó significativamente la atracción de clientes jóvenes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-coral-300 mb-2">+90%</div>
                <div className="text-white/90">Percepción moderna</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-coral-300 mb-2">+65%</div>
                <div className="text-white/90">Nuevos clientes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-coral-300 mb-2">100%</div>
                <div className="text-white/90">Satisfacción</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-white text-wine-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Consulta
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-wine-600 transition-colors"
              >
                Ver Más Proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpresaFamiliar;