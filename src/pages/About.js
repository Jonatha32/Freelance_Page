import React from 'react';
import { useLanguage } from '../components/LanguageSelector';
import { translations } from '../utils/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container-max text-center">
          <div className="text-4xl mb-6">🚀</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-coral-400 to-salmon-400 bg-clip-text text-white">
              {language === 'es' ? 'De Artista' : 'From Artist'}
            </span>
            <br />
            <span className="bg-gradient-to-r from-wine-400 to-coral-400 bg-clip-text text-white">
              {language === 'es' ? 'a Creador Digital' : 'to Digital Creator'}
            </span>
          </h1>
          
          <p className="text-xl text-white-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            {t.about.hero.subtitle}
          </p>
          <p className="text-lg text-white-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.about.hero.description}
          </p>
          
          <div className="w-32 h-1 bg-coral-900 mx-auto rounded-full" />
        </div>
      </section>

      {/* Mi Historia */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-4xl font-bold text-black-900 mb-6">{t.about.story.title}</h2>
            <p className="text-xl text-black-600 max-w-3xl mx-auto mb-4">
              {t.about.story.subtitle}
            </p>
            <p className="text-lg text-black-600 max-w-3xl mx-auto">
              {t.about.story.description}
            </p>
            <div className="mt-8 p-6 bg-black-50 rounded-xl max-w-2xl mx-auto border-l-4 border-coral-500">
              <p className="text-black-800 italic font-medium">
                "{t.about.story.quote}"
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {/* Las Raíces */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-coral-50 to-salmon-50 p-8 rounded-2xl border border-coral-100">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-coral-700 mb-4">
                  {language === 'es' ? 'Las Raíces' : 'The Roots'}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {language === 'es' 
                    ? 'Todo comenzó con un micrófono. Quería crear algo que tocara el alma, y terminé descubriendo que el arte también puede vivir en el código.'
                    : 'It all started with a microphone. I wanted to create something that touched the soul, and I ended up discovering that art can also live in code.'
                  }
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {language === 'es'
                    ? 'No abandoné la música: la expandí. Ahora cada proyecto es una composición donde la lógica y la emoción se encuentran.'
                    : 'I didn\'t abandon music: I expanded it. Now each project is a composition where logic and emotion meet.'
                  }
                </p>
                <div className="bg-coral-100 p-4 rounded-lg border-l-4 border-coral-400">
                  <p className="text-coral-800 italic font-medium">
                    "{language === 'es' 
                      ? 'El código también puede tener ritmo, y el diseño también puede tener alma.'
                      : 'Code can also have rhythm, and design can also have soul.'
                    }"
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">
                  {language === 'es' ? 'Lo que aporto' : 'What I bring'}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        {language === 'es' ? 'Experiencias con conexión emocional' : 'Emotionally connected experiences'}
                      </h5>
                      <p className="text-gray-600 text-sm">
                        {language === 'es' 
                          ? 'Diseños y flujos que hacen sentir. Interfaces que tus usuarios recordarán y amarán.'
                          : 'Designs and flows that make you feel. Interfaces your users will remember and love.'
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        {language === 'es' ? 'Código limpio y escalable' : 'Clean and scalable code'}
                      </h5>
                      <p className="text-gray-600 text-sm">
                        {language === 'es'
                          ? 'Arquitectura sólida, mantenible y lista para crecer con tu visión.'
                          : 'Solid, maintainable architecture ready to grow with your vision.'
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        {language === 'es' ? 'Atención obsesiva al detalle' : 'Obsessive attention to detail'}
                      </h5>
                      <p className="text-gray-600 text-sm">
                        {language === 'es'
                          ? 'Cada pixel orquestado como parte de una melodía visual.'
                          : 'Every pixel orchestrated as part of a visual melody.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* La Transformación */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-4">
                <h4 className="text-xl font-bold text-gray-900">
                  {language === 'es' ? 'Resultados' : 'Results'}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-wine-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        {language === 'es' ? 'Innovación funcional' : 'Functional innovation'}
                      </h5>
                      <p className="text-gray-600 text-sm">
                        {language === 'es'
                          ? 'Creatividad sustentada en bases técnicas sólidas'
                          : 'Creativity supported by solid technical foundations'
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-wine-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        {language === 'es' ? 'Diferenciación auténtica' : 'Authentic differentiation'}
                      </h5>
                      <p className="text-gray-600 text-sm">
                        {language === 'es'
                          ? 'Tu marca contará su historia con una voz única'
                          : 'Your brand will tell its story with a unique voice'
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-wine-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        {language === 'es' ? 'Soluciones escalables' : 'Scalable solutions'}
                      </h5>
                      <p className="text-gray-600 text-sm">
                        {language === 'es'
                          ? 'Sistemas que evolucionan contigo y con tu visión'
                          : 'Systems that evolve with you and your vision'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 bg-gradient-to-br from-wine-50 to-coral-50 p-8 rounded-2xl border border-wine-100">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold text-wine-700 mb-4">
                  {language === 'es' ? 'La Transformación' : 'The Transformation'}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {language === 'es'
                    ? 'Descubrí que la tecnología no tenía por qué ser fría. El diseño puede emocionar, el desarrollo puede inspirar, y un buen sitio web puede ser una experiencia sensorial.'
                    : 'I discovered that technology didn\'t have to be cold. Design can excite, development can inspire, and a good website can be a sensory experience.'
                  }
                </p>
                <div className="bg-wine-100 p-4 rounded-lg border-l-4 border-wine-400">
                  <p className="text-wine-800 italic font-medium">
                    "{language === 'es'
                      ? 'La mejor tecnología es invisible —como una buena canción, simplemente te hace sentir algo especial.'
                      : 'The best technology is invisible —like a good song, it simply makes you feel something special.'
                    }"
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
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-coral-400 to-salmon-400 bg-clip-text text-white">
                {language === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}
              </span>
            </h2>
            <p className="text-gray-300">
              {language === 'es' ? 'Herramientas para crear experiencias digitales' : 'Tools to create digital experiences'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Frontend',
                icon: '⚛️',
                tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
              },
              {
                category: 'Backend',
                icon: '🔧',
                tools: ['Node.js', 'Firebase', 'REST APIs', 'Python']
              },
              {
                category: language === 'es' ? 'Diseño' : 'Design',
                icon: '🎨',
                tools: ['Figma', 'Adobe CC', 'Framer', 'Canva']
              },
              {
                category: 'DevOps',
                icon: '🚀',
                tools: ['Git', 'Vercel', 'Docker', 'CI/CD']
              }
            ].map((stack, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl border-2 border-gray-700 hover:border-wine-700 hover:border-2 transition-all duration-300 group"
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{stack.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{stack.category}</h3>
                </div>
                <div className="space-y-2">
                  {stack.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-gray-700 px-3 py-2 rounded-lg text-sm text-gray-300 text-center group-hover:bg-gray-600 transition-colors"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Conectemos' : 'Let\'s Connect'}
            </h2>
            <p className="text-gray-600">
              {language === 'es' 
                ? 'Sígueme en mis redes y conocé mi proceso creativo'
                : 'Follow me on social media and discover my creative process'
              }
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linktr.ee/jonaperez10"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:border-green-300 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-600 transition-colors">
                <i className="fa fa-link text-white text-xl"></i>
              </div>
              <span className="font-semibold text-gray-900">Linktree</span>
              <span className="text-sm text-gray-600">
                {language === 'es' ? 'Todos mis enlaces' : 'All my links'}
              </span>
            </a>

            <a
              href="https://www.instagram.com/jonathan_perez018/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mb-3 group-hover:from-pink-600 group-hover:to-rose-600 transition-all">
                <i className="fab fa-instagram text-white text-xl"></i>
              </div>
              <span className="font-semibold text-gray-900">Instagram</span>
              <span className="text-sm text-gray-600">
                {language === 'es' ? 'Proceso creativo' : 'Creative process'}
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/jonathanperez-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-700 transition-colors">
                <i className="fab fa-linkedin text-white text-xl"></i>
              </div>
              <span className="font-semibold text-gray-900">LinkedIn</span>
              <span className="text-sm text-gray-600">
                {language === 'es' ? 'Red profesional' : 'Professional network'}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Frase Final */}
      <section className="py-20 bg-coral-900 text-white">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-6">💫</div>
            <blockquote className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              {language === 'es' 
                ? '"No construyo sitios web. Construyo emociones digitales."'
                : '"I don\'t build websites. I build digital emotions."'
              }
            </blockquote>
            <cite className="text-lg text-gray-300">— Jona</cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;