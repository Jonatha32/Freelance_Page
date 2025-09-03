import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">
              De Artista
            </span>
            <br />
            <span className="text-white">a Creador Digital</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformo ideas en experiencias digitales memorables, 
            combinando sensibilidad artística con excelencia técnica.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-coral-500 to-gold-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Mi Historia */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mi Historia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La música me enseñó que cada detalle importa. 
              Hoy aplico esa sensibilidad al mundo digital.
            </p>
          </div>

          <div className="space-y-16">
            {/* Las Raíces */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-coral-50 p-8 rounded-2xl border border-coral-100">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-2xl font-bold text-coral-700 mb-4">Las Raíces</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Todo comenzó con un piano y la obsesión por crear algo que tocara el alma. 
                  En la música aprendí que cada nota importa y que la magia sucede cuando 
                  la técnica se encuentra con la emoción.
                </p>
                <div className="bg-coral-100 p-4 rounded-lg border-l-4 border-coral-400">
                  <p className="text-coral-800 italic">
                    "La perfección técnica sin alma es solo ruido. 
                    Hoy aplico esa filosofía a cada línea de código."
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">Lo que aporto</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Experiencias con conexión emocional</h5>
                      <p className="text-gray-600 text-sm">Interfaces que tus usuarios recordarán y amarán</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Código limpio y escalable</h5>
                      <p className="text-gray-600 text-sm">Arquitectura que crece con tu negocio</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Atención obsesiva al detalle</h5>
                      <p className="text-gray-600 text-sm">Cada pixel orquestado para la experiencia perfecta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* La Transformación */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-4">
                <h4 className="text-xl font-bold text-gray-900">Resultados</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Innovación funcional</h5>
                      <p className="text-gray-600 text-sm">Creatividad con bases técnicas sólidas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Diferenciación auténtica</h5>
                      <p className="text-gray-600 text-sm">Tu proyecto será memorable</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Soluciones escalables</h5>
                      <p className="text-gray-600 text-sm">Sistemas que crecen con tu visión</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 bg-gold-50 p-8 rounded-2xl border border-gold-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gold-700 mb-4">La Transformación</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Descubrí que el código podía ser tan expresivo como una canción. 
                  No abandoné el arte, lo expandí. Ahora cada proyecto es una sinfonía 
                  donde creatividad y tecnología danzan juntas.
                </p>
                <div className="bg-gold-100 p-4 rounded-lg border-l-4 border-gold-400">
                  <p className="text-gold-800 italic">
                    "La mejor tecnología es invisible. Como una buena canción, 
                    simplemente te hace sentir algo especial."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-coral-400 to-gold-400 bg-clip-text text-white font-extrabold">
                Stack Tecnológico
              </span>
            </h2>
            <p className="text-gray-300">Herramientas para crear experiencias digitales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                category: 'Frontend',
                icon: '⚡',
                tools: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                category: 'Backend',
                icon: '🛠️',
                tools: ['Node.js', 'PostgreSQL', 'APIs REST', 'Supabase'],
                color: 'from-green-500 to-teal-500'
              },
              {
                category: 'Diseño',
                icon: '🎨',
                tools: ['Figma', 'Adobe CC', 'Framer', 'Canva'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                category: 'DevOps',
                icon: '🚀',
                tools: ['Git', 'Vercel', 'Docker', 'CI/CD'],
                color: 'from-orange-500 to-red-500'
              }
            ].map((stack) => (
              <div
                key={stack.category}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stack.color} rounded-lg flex items-center justify-center text-xl mb-4`}>
                  {stack.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-coral-500 text-black">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para tu próximo proyecto?
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
            Tu marca no será una más: será memorable. 
            Cada gran proyecto comienza con una conversación.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-coral-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Crear Juntos
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Ver Portfolio
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-black">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl ">🎨</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Sensibilidad Artística</h3>
              <p className=" text-sm text-black">Creatividad musical aplicada al código</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Excelencia Técnica</h3>
              <p className="text-black text-sm">Código limpio y escalable</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎆</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Marca Memorable</h3>
              <p className="text-black text-sm">Proyectos que no se olvidan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;