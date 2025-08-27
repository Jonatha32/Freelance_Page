import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Hero Artístico */}
      <section className="bg-gradient-to-br from-wine-50 to-salmon-50 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Del arte a la <span className="text-wine-600">tecnología</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Mi viaje comenzó con la música y la creatividad, evolucionando hacia el desarrollo digital sin perder esa esencia artística que define cada proyecto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia Personal */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-wine-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-wine-700 mb-6">🎵 Raíces Artísticas</h2>
                <p className="text-gray-700 mb-4">
                  Mi historia comienza en el mundo de la música, donde aprendí que cada nota tiene su propósito y cada silencio su significado. Esta sensibilidad artística se convirtió en la base de mi enfoque creativo.
                </p>
                <p className="text-gray-700 mb-4">
                  La música me enseñó sobre ritmo, armonía y la importancia de crear experiencias que conecten emocionalmente con las personas. Estos principios ahora guían cada línea de código que escribo.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="bg-wine-100 text-wine-700 px-3 py-1 rounded-full text-sm">Composición</span>
                  <span className="bg-wine-100 text-wine-700 px-3 py-1 rounded-full text-sm">Producción</span>
                  <span className="bg-wine-100 text-wine-700 px-3 py-1 rounded-full text-sm">Creatividad</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-salmon-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-salmon-700 mb-6">🌱 Evolución Personal</h2>
                <p className="text-gray-700 mb-4">
                  La transición hacia la tecnología no fue un abandono del arte, sino una expansión. Descubrí que el código puede ser tan expresivo como una melodía, y que las interfaces pueden emocionar como una canción.
                </p>
                <p className="text-gray-700 mb-4">
                  Cada proyecto es una oportunidad de fusionar mi sensibilidad artística con soluciones técnicas innovadoras, creando experiencias digitales que no solo funcionan, sino que inspiran.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="bg-salmon-100 text-salmon-700 px-3 py-1 rounded-full text-sm">Innovación</span>
                  <span className="bg-salmon-100 text-salmon-700 px-3 py-1 rounded-full text-sm">Empatía</span>
                  <span className="bg-salmon-100 text-salmon-700 px-3 py-1 rounded-full text-sm">Crecimiento</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transición Profesional */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-700 mb-4">💼 Enfoque Profesional</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hoy combino mi trasfondo artístico con expertise técnico para ofrecer soluciones digitales que destacan por su calidad y creatividad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Desarrollo Frontend',
                skills: ['React', 'JavaScript', 'TailwindCSS', 'Next.js'],
                color: 'primary'
              },
              {
                title: 'Diseño & UX',
                skills: ['Figma', 'Adobe Creative', 'Prototipado', 'User Research'],
                color: 'wine'
              },
              {
                title: 'Herramientas',
                skills: ['Git', 'APIs', 'Databases', 'Cloud Services'],
                color: 'salmon'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`bg-${category.color}-50 p-6 rounded-xl`}
              >
                <h3 className={`text-xl font-semibold text-${category.color}-700 mb-4`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`bg-${category.color}-100 text-${category.color}-700 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofía de Trabajo */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mi Filosofía</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                "Creo que la mejor tecnología es aquella que se siente humana. Cada línea de código debe servir a un propósito mayor: crear conexiones, facilitar experiencias y hacer la vida un poco más bella."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Creatividad</h3>
                  <p className="text-gray-600 text-sm">Cada proyecto es una obra de arte digital</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Excelencia</h3>
                  <p className="text-gray-600 text-sm">Código limpio y soluciones robustas</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Colaboración</h3>
                  <p className="text-gray-600 text-sm">Tu visión, mi expertise técnico</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;