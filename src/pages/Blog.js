import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageSelector';

const Blog = () => {
  const { language } = useLanguage();
  const [selectedPost, setSelectedPost] = useState(null);
  
  const posts = [
    {
      id: 1,
      title: language === 'es' ? 'Del Arte al Código: Mi Transición Creativa' : 'From Art to Code: My Creative Transition',
      excerpt: language === 'es' ? 'Cómo mi trasfondo musical influyó en mi enfoque del desarrollo web y por qué la creatividad es clave en la tecnología.' : 'How my musical background influenced my approach to web development and why creativity is key in technology.',
      date: '2025-06-15',
      readTime: '4 min',
      category: language === 'es' ? 'Personal' : 'Personal',
      type: 'article',
      content: language === 'es' ? `
        <h2>Del Arte al Código: Mi Transición Creativa</h2>
        <p>Siempre me he considerado una persona creativa. Antes de entrar de lleno al mundo del desarrollo web, mi vida giraba en torno a la música. Componer, interpretar y explorar sonidos eran mi manera de expresarme y de dar forma a lo que sentía. Con el tiempo, descubrí que esa misma necesidad de crear, de darle estructura a la inspiración, podía transformarse en otro lenguaje: el código.</p>
        <p>Al principio parecía que ambos mundos estaban separados. La música era intuición, emoción y ritmo. La programación, en cambio, se veía como lógica pura, reglas estrictas y sintaxis. Sin embargo, pronto entendí que comparten más similitudes de las que parecen. Una melodía bien compuesta tiene la misma precisión y armonía que un código bien escrito. Ambos requieren disciplina, paciencia y, sobre todo, creatividad.</p>
        <p>Cuando tocas un instrumento o escribes una canción, no basta con seguir escalas o acordes: hay que darles vida, buscar nuevas combinaciones, arriesgarse. Lo mismo ocurre en desarrollo web. Cualquiera puede aprender las bases técnicas, pero la diferencia está en cómo usas esas herramientas para construir experiencias únicas, intuitivas y memorables. Ahí es donde entra en juego la creatividad.</p>
        <p>Mi trasfondo musical me enseñó a pensar de manera no lineal. A veces, la mejor solución no es la más obvia, sino aquella que surge de conectar ideas aparentemente opuestas. Esa mentalidad me ayuda cada día como desarrollador: ya sea al diseñar una interfaz, al resolver un bug complejo o al estructurar un proyecto de forma clara y eficiente.</p>
        <p>Creo firmemente que la tecnología necesita más creatividad. Porque al final, detrás de cada sitio web, aplicación o producto digital, hay personas. Y las personas no solo buscan que algo funcione: buscan que algo las conecte, que las haga sentir, que les resuelva un problema de forma simple pero con un toque humano.</p>
        <p>En mi camino del arte al código he descubierto que la creatividad no es un extra: es la base. La música me dio oído, el código me dio estructura, y ambos mundos se unieron para recordarme que la innovación ocurre cuando nos permitimos mezclar disciplinas.</p>
        <p>Hoy miro atrás y entiendo que no dejé la música para dedicarme al desarrollo web; simplemente cambié de instrumento. Y en lugar de cuerdas o teclas, ahora mi medio de expresión son las líneas de código.</p>
      ` : `
        <h2>From Art to Code: My Creative Transition</h2>
        <p>I've always considered myself a creative person. Before diving fully into the world of web development, my life revolved around music. Composing, performing, and exploring sounds were my way of expressing myself and giving shape to what I felt. Over time, I discovered that this same need to create, to give structure to inspiration, could be transformed into another language: code.</p>
        <p>At first, it seemed like both worlds were separate. Music was intuition, emotion, and rhythm. Programming, on the other hand, appeared to be pure logic, strict rules, and syntax. However, I soon understood that they share more similarities than they seem. A well-composed melody has the same precision and harmony as well-written code. Both require discipline, patience, and above all, creativity.</p>
        <p>When you play an instrument or write a song, it's not enough to follow scales or chords: you have to bring them to life, seek new combinations, take risks. The same happens in web development. Anyone can learn the technical basics, but the difference lies in how you use those tools to build unique, intuitive, and memorable experiences. That's where creativity comes into play.</p>
        <p>My musical background taught me to think non-linearly. Sometimes, the best solution isn't the most obvious one, but the one that emerges from connecting seemingly opposite ideas. This mindset helps me every day as a developer: whether designing an interface, solving a complex bug, or structuring a project clearly and efficiently.</p>
        <p>I firmly believe that technology needs more creativity. Because in the end, behind every website, application, or digital product, there are people. And people don't just look for something that works: they look for something that connects them, makes them feel, solves their problem simply but with a human touch.</p>
        <p>In my journey from art to code, I've discovered that creativity isn't an extra: it's the foundation. Music gave me an ear, code gave me structure, and both worlds came together to remind me that innovation happens when we allow ourselves to mix disciplines.</p>
        <p>Today I look back and understand that I didn't leave music to dedicate myself to web development; I simply changed instruments. And instead of strings or keys, now my medium of expression is lines of code.</p>
      `
    },
    {
      id: 2,
      title: language === 'es' ? 'React vs Vue: La Batalla de 2024 (y cuál elegir según tu proyecto)' : 'React vs Vue: The 2024 Battle (and which to choose for your project)',
      excerpt: language === 'es' ? 'Pros, contras y en qué proyectos usar cada uno. Análisis real sin marketing, solo experiencia práctica.' : 'Pros, cons and which projects to use each one for. Real analysis without marketing, just practical experience.',
      date: '2025-09-21',
      readTime: '8 min',
      category: language === 'es' ? 'Desarrollo' : 'Development',
      type: 'pdf',
      pdfUrl: '/pdfs/React%20vs%20Vue.pdf'
    },
    {
      id: 3,
      title: language === 'es' ? 'Tu marca no es tu logo: Cómo construir un branding que conecte' : 'Your brand is not your logo: How to build branding that connects',
      excerpt: language === 'es' ? 'Por qué una identidad digital exitosa va mucho más allá del diseño y cómo crear conexión real con usuarios.' : 'Why a successful digital identity goes far beyond design and how to create real connection with users.',
      date: '2025-09-22',
      readTime: '4 min',
      category: language === 'es' ? 'Diseño' : 'Design',
      type: 'pdf',
      pdfUrl: '/pdfs/Tu marca.pdf'
    },
    {
      id: 4,
      title: language === 'es' ? 'Un sitio lento es un cliente menos: Cómo acelerar tu web y vender más' : 'A slow site is one less client: How to speed up your web and sell more',
      excerpt: language === 'es' ? 'Técnicas prácticas para mejorar el rendimiento de tu sitio web y convertir más visitantes en clientes.' : 'Practical techniques to improve your website performance and convert more visitors into clients.',
      date: '2025-08-28',
      readTime: '7 min',
      category: 'SEO',
      type: 'article',
      content: language === 'es' ? `
        <h2>Un sitio lento es un cliente menos: Cómo acelerar tu web y vender más</h2>
        <p>Imagina que tu tienda física tiene la puerta atascada. Los clientes tienen que forcejear, empujar y esperar varios segundos con frustración para poder entrar. ¿Cuántos crees que se irían antes de siquiera ver tu producto?

        Eso es exactamente lo que es una web lenta: una puerta atascada en internet.

        Hoy no hablamos de tecnicismos abstractos. Hablamos de dinero. Porque la velocidad de tu sitio web no es una métrica de ingenieros; es el termómetro más fiel de tu negocio online. Cada milisegundo de demora es un cliente que se aleja, un carrito abandonado y una venta que nunca se concretó.</p>
        
        <h2>La Cruda Realidad: Lo Que Pierdes con Cada Segundo de Más</h2>
        <h3>Las cifras no mienten y son brutales:</h3>
        <p>Google lo dejó claro: Más de 3 segundos de carga y el 53% de los usuarios móviles abandona el sitio.</p>

        <p>Amazon calculó que un retraso de solo 100 milisegundos (0.1 segundos) les costaba 1% en ventas. ¿Puedes calcular tu 1%?</p>

        <p>Pinterest recuperó 40% en búsquedas orgánicas tras reducir sus tiempos de espera percibidos.</p>

        <p> Pero esto va más allá de números. Es psicología. Una web rápida transmite confianza, profesionalidad y eficiencia. Una web lenta grita "descuidado, amateur y poco fiable". ¿En qué lado quieres que te pongan tus clientes?</p>


                  
        <h3>Las 5 Palancas que Puedes Tocar HOY para Acelerar tu Web (y tus Ventas)</h3>
        <p>No necesitas ser un genio de la programación. Necesitas ser pragmático. Estas son las técnicas prácticas con mayor impacto, explicadas para humanos.</p>
        
        <h3>1. La Balas Pesadas: Optimiza Tus Imágenes (El Low-Hanging Fruit)</h3>
        <p>Este es el culpable número uno en el 90% de los sitios lentos que audito. Subimos fotos de 4MB tomadas con el móvil directamente a la web.</p>
        <p>¿Qué hacer? ¡No uses un elefante para matar una mosca!</p>
        <p>Acción Práctica: Antes de subir cualquier imagen, pásala por una herramienta de compresión como ShortPixel, TinyPNG o los plugins de tu CMS (WordPress, etc.). Convierte formatos: usa WebP (el formato moderno que pesa un 30% menos) para navegadores modernos, y JPEG para el resto. Esta sola acción puede reducir a la mitad el peso de tu página.</p>

        <h3>2. El Frenazo Invisible: El JavaScript y CSS Bloqueantes</h3>
        <p>Tu navegador lee el código de tu web como un libro. Si se encuentra con un capítulo enorme y complicado (un script pesado), se detiene para leerlo todo antes de seguir. Mientras lo hace, la pantalla está en blanco.</p>
        <p>¿Qué hacer? Quita los obstáculos del camino.</p>
        <p>Acción Práctica: Usa herramientas como Google PageSpeed Insights. Te dirá exactamente qué scripts están bloqueando el renderizado. Luego, con ayuda de un desarrollador o plugins de caching, puedes diferir la carga de esos scripts (cargarlos después de que se muestre el contenido principal) o minificarlos (eliminar espacios y código innecesario). Plugins como WP Rocket o W3 Total Cache hacen gran parte de este trabajo automáticamente.</p>

        <h3>3. La Ventaja Injusta: Usa una CDN (Red de Distribución de Contenidos)</h3>
        <p>Si tu servidor está en Texas y un usuario intenta cargar tu web desde Madrid, la información tiene que cruzar medio planeta. Eso toma tiempo.</p>
        <p>¿Qué hacer? Acerca tu contenido a tu cliente.</p>
        <p>Acción Práctica: Una CDN es una red de servidores alrededor del mundo. Al subir tus imágenes, CSS y JavaScript a una CDN (como Cloudflare – que tiene un plan gratuito excelente –, StackPath, o la de tu hosting), cuando un usuario de Madrid solicita tu web, se sirve esos archivos desde un servidor en Europa, no desde Texas. La mejora de velocidad, especialmente para audiencias globales, es abismal.</p>

        <h3>4. El Código Perezoso: Aplica Lazy Loading</h3>
        <p>¿Por qué cargar una imagen que está al final de la página (y que el usuario quizás nunca vea) al mismo tiempo que el crítico titular principal?</p>
        <p>¿Qué hacer? Sé perezoso, de la manera inteligente.</p>
        <p>Acción Práctica: El Lazy Loading carga los elementos (imágenes, vídeos) solo cuando el usuario se acerca a ellos al hacer scroll. Es nativo en los navegadores modernos, pero para asegurarte, plugins de caching o de optimización de imágenes suelen incluirlo. Actívalo. Liberarás recursos para cargar primero lo importante.</p>

        <h3>5. El Cimiento: Elige un Buen Alojamiento (Hosting)</h3>
        <p>Puedes tener el coche más tuneado del mundo, pero si el motor es de cortacésped, no vas a ninguna parte. Un hosting barato y compartido donde miles de sitios compiten por recursos es el motor de cortacésped.</p>
        <p>¿Qué hacer? Invierte en los cimientos.</p>
        <p>Acción Práctica: Si tu negocio depende de tu web, no escatimes en hosting. Migra a un plan VPS o de hosting gestionado (como Kinsta, WP Engine, SiteGround). Son más caros, pero la diferencia de velocidad, seguridad y soporte es como la noche y el día. Es la mejor inversión que puedes hacer.</p>
        
        <h2>Conclusión: Convierte la Velocidad en tu Mejor Vendedor</h2>
        <p>Acelerar tu web no es una tarea de un día, pero cada cambio tiene un retorno de inversión inmediato. No se trata de alcanzar una puntuación de 100/100, sino de ofrecer una experiencia tan fluida que el usuario se centre en tu producto, no en esperar.</p>
        <p>Empieza hoy. Abre GTMetrix o PageSpeed Insights, pega la URL de tu web y deja que te digan los principales problemas. Elige el más fácil y arréglalo. Luego el siguiente.</p>
        <p>Porque en un mundo donde todos compiten por la atención, la velocidad es el nuevo currency. No dejes que un sitio lento cierre la puerta a tus próximos clientes.</p>
      ` : `
        <h2>A slow site is one less client: How to speed up your web and sell more</h2>
        <p>Imagine your physical store has a stuck door. Customers have to struggle, push and wait several seconds in frustration to get in. How many do you think would leave before even seeing your product?

        That's exactly what a slow website is: a stuck door on the internet.

        Today we're not talking about abstract technicalities. We're talking about money. Because your website speed isn't an engineer's metric; it's the most faithful thermometer of your online business. Every millisecond of delay is a customer walking away, an abandoned cart, and a sale that never happened.</p>
        
        <h2>The Harsh Reality: What You Lose with Every Extra Second</h2>
        <h3>The numbers don't lie and they're brutal:</h3>
        <p>Google made it clear: More than 3 seconds of loading and 53% of mobile users abandon the site.</p>

        <p>Amazon calculated that a delay of just 100 milliseconds (0.1 seconds) cost them 1% in sales. Can you calculate your 1%?</p>

        <p>Pinterest recovered 40% in organic searches after reducing their perceived wait times.</p>

        <p>But this goes beyond numbers. It's psychology. A fast website conveys trust, professionalism, and efficiency. A slow website screams "careless, amateur, and unreliable." Which side do you want your customers to put you on?</p>

        <h3>The 5 Levers You Can Pull TODAY to Speed Up Your Web (and Your Sales)</h3>
        <p>You don't need to be a programming genius. You need to be pragmatic. These are the practical techniques with the greatest impact, explained for humans.</p>
        
        <h3>1. The Heavy Bullets: Optimize Your Images (The Low-Hanging Fruit)</h3>
        <p>This is the number one culprit in 90% of the slow sites I audit. We upload 4MB photos taken with mobile phones directly to the web.</p>
        <p>What to do? Don't use an elephant to kill a fly!</p>
        <p>Practical Action: Before uploading any image, run it through a compression tool like ShortPixel, TinyPNG, or your CMS plugins (WordPress, etc.). Convert formats: use WebP (the modern format that weighs 30% less) for modern browsers, and JPEG for the rest. This single action can halve your page weight.</p>

        <h3>2. The Invisible Brake: Blocking JavaScript and CSS</h3>
        <p>Your browser reads your web code like a book. If it encounters a huge and complicated chapter (a heavy script), it stops to read it all before continuing. While it does, the screen is blank.</p>
        <p>What to do? Remove obstacles from the path.</p>
        <p>Practical Action: Use tools like Google PageSpeed Insights. It will tell you exactly which scripts are blocking rendering. Then, with help from a developer or caching plugins, you can defer loading those scripts (load them after the main content is displayed) or minify them (remove spaces and unnecessary code). Plugins like WP Rocket or W3 Total Cache do much of this work automatically.</p>

        <h3>3. The Unfair Advantage: Use a CDN (Content Distribution Network)</h3>
        <p>If your server is in Texas and a user tries to load your web from Madrid, the information has to cross half the planet. That takes time.</p>
        <p>What to do? Bring your content closer to your customer.</p>
        <p>Practical Action: A CDN is a network of servers around the world. By uploading your images, CSS and JavaScript to a CDN (like Cloudflare – which has an excellent free plan –, StackPath, or your hosting's), when a Madrid user requests your web, those files are served from a server in Europe, not from Texas. The speed improvement, especially for global audiences, is abysmal.</p>

        <h3>4. The Lazy Code: Apply Lazy Loading</h3>
        <p>Why load an image that's at the bottom of the page (and that the user might never see) at the same time as the critical main headline?</p>
        <p>What to do? Be lazy, the smart way.</p>
        <p>Practical Action: Lazy Loading loads elements (images, videos) only when the user approaches them by scrolling. It's native in modern browsers, but to be sure, caching or image optimization plugins usually include it. Activate it. You'll free up resources to load the important stuff first.</p>

        <h3>5. The Foundation: Choose Good Hosting</h3>
        <p>You can have the most tuned car in the world, but if the engine is a lawnmower, you're not going anywhere. Cheap shared hosting where thousands of sites compete for resources is the lawnmower engine.</p>
        <p>What to do? Invest in the foundations.</p>
        <p>Practical Action: If your business depends on your web, don't skimp on hosting. Migrate to a VPS or managed hosting plan (like Kinsta, WP Engine, SiteGround). They're more expensive, but the difference in speed, security and support is like night and day. It's the best investment you can make.</p>
        
        <h2>Conclusion: Turn Speed into Your Best Salesperson</h2>
        <p>Speeding up your web isn't a one-day task, but every change has an immediate return on investment. It's not about reaching a 100/100 score, but about offering such a smooth experience that the user focuses on your product, not on waiting.</p>
        <p>Start today. Open GTMetrix or PageSpeed Insights, paste your web URL and let them tell you the main problems. Choose the easiest one and fix it. Then the next one.</p>
        <p>Because in a world where everyone competes for attention, speed is the new currency. Don't let a slow site close the door on your next customers.</p>
      `
    },
    {
      id: 5,
      title: language === 'es' ? 'El Futuro del Freelancing Tech' : 'The Future of Tech Freelancing',
      excerpt: language === 'es' ? 'Tendencias emergentes en el trabajo freelance y cómo adaptarse a un mercado en constante evolución.' : 'Emerging trends in freelance work and how to adapt to a constantly evolving market.',
      date: '2025-09-12',
      readTime: '4 min',
      category: 'Freelance',
      type: 'pdf',
      pdfUrl: '/pdfs/El Futuro del Freelance.pdf'
    },
    {
      id: 6,
      title: language === 'es' ? 'UX Writing: Palabras que Guían' : 'UX Writing: Words that Guide',
      excerpt: language === 'es' ? 'La importancia de la escritura en la experiencia de usuario y cómo crear microcopy efectivo.' : 'The importance of writing in user experience and how to create effective microcopy.',
      date: '2025-07-15',
      readTime: '5 min',
      category: 'UX & Writing',
      type: 'pdf',
      pdfUrl: '/pdfs/UX Writing.pdf'
    }
  ];

  const handlePostClick = (post) => {
    if (post.type === 'pdf') {
      // Descargar PDF
      const link = document.createElement('a');
      link.href = post.pdfUrl;
      link.download = `${post.title.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`;
      link.click();
    } else {
      // Mostrar artículo completo
      setSelectedPost(post);
      window.scrollTo(0, 0);
    }
  };

  const categories = [
    { name: language === 'es' ? 'Todos' : 'All', emoji: '🌟' },
    { name: language === 'es' ? 'Desarrollo' : 'Development', emoji: '💻' },
    { name: language === 'es' ? 'Diseño' : 'Design', emoji: '🎨' },
    { name: 'UX & Writing', emoji: '✍️' },
    { name: 'SEO', emoji: '📈' },
    { name: 'Freelance', emoji: '🚀' },
    { name: language === 'es' ? 'Personal' : 'Personal', emoji: '🌱' }
  ];

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container-max py-20">
          <button 
            onClick={() => {
              setSelectedPost(null);
              window.scrollTo(0, 0);
            }}
            className="mb-8 flex items-center text-coral-600 hover:text-coral-700 transition-colors"
          >
            {language === 'es' ? '← Volver al blog' : '← Back to blog'}
          </button>
          
          <article className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
              <div className="mb-4">
                <span className="bg-coral-100 text-coral-700 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
              <div className="flex items-center justify-center space-x-4 text-gray-500">
                <span>{new Date(selectedPost.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </header>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-coral-50 to-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-coral-500 to-gold-500 bg-clip-text text-transparent">
                {language === 'es' ? 'Entre Notas y Código 🎵💻' : 'Between Notes and Code 🎵💻'}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Un espacio donde el arte y la tecnología se encuentran. Reflexiones, tutoriales y hacks para darle alma a tus proyectos digitales.'
                : 'A space where art and technology meet. Reflections, tutorials and hacks to give soul to your digital projects.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-8 bg-white border-b">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-coral-100 hover:text-coral-700 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span>{category.emoji}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-coral-500 to-wine-600 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-coral-100 text-coral-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-coral-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <button 
                      onClick={() => handlePostClick(post)}
                      className="text-coral-600 hover:text-coral-700 font-medium text-sm flex items-center gap-1"
                    >
                      {post.type === 'pdf' ? (
                        <>
                          <span>📄</span>
                          {language === 'es' ? 'Descargar PDF →' : 'Download PDF →'}
                        </>
                      ) : (
                        language === 'es' ? 'Leer más →' : 'Read more →'
                      )}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'es' ? '¿Querés estar un paso adelante?' : 'Want to stay one step ahead?'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'es'
                ? 'Suscribite y recibí ideas frescas directo en tu inbox. Sin spam, solo valor.'
                : 'Subscribe and receive fresh ideas directly in your inbox. No spam, just value.'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-coral-500 to-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap">
                {language === 'es' ? 'Suscribirse' : 'Subscribe'}
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              {language === 'es'
                ? 'Puedes cancelar tu suscripción en cualquier momento.'
                : 'You can cancel your subscription at any time.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Próximamente */}
      <section className="section-padding bg-wine-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'es' ? 'Lo que se viene 👀' : 'What\'s coming 👀'}
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Estoy cocinando contenido que no vas a encontrar en otro lado:'
                : 'I\'m cooking content you won\'t find anywhere else:'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">
                  {language === 'es' ? '🎥 Video-tutoriales paso a paso' : '🎥 Step-by-step video tutorials'}
                </h3>
                <p className="text-white/80 text-sm">
                  {language === 'es' ? 'Sin bla-bla, solo práctica' : 'No blah-blah, just practice'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">
                  {language === 'es' ? '📚 Recursos descargables' : '📚 Downloadable resources'}
                </h3>
                <p className="text-white/80 text-sm">
                  {language === 'es' ? 'Templates y guías prácticas' : 'Templates and practical guides'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">
                  {language === 'es' ? '🎙️ Podcast semanal' : '🎙️ Weekly podcast'}
                </h3>
                <p className="text-white/80 text-sm">
                  {language === 'es' ? 'Conversaciones reales sobre freelancing' : 'Real conversations about freelancing'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default Blog;