import React from 'react';
import { useLanguage } from '../components/LanguageSelector';
import { translations } from '../utils/translations';

const LeRaffine = () => {
  const { language } = useLanguage();
  const t = translations[language].leRaffine;
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header className="py-4 px-4 fixed w-full z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(50, 35, 29, 0.95)' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 px-6 py-3 rounded-xl" style={{ backgroundColor: 'rgba(179, 175, 172, 0.1)' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-lg opacity-50" style={{ backgroundColor: '#b3afac' }}></div>
              <div className="relative w-16 h-16 rounded-full flex items-center justify-center border-2 shadow-2xl hover:scale-110 transition-all duration-300" style={{ borderColor: '#b3afac', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <img src="/El texto del párrafo-Photoroom (1).png" alt="Le Raffiné" className="w-12 h-12 object-contain drop-shadow-lg" />
              </div>
              </div>
              <span className="text-white text-2xl font-light tracking-wider drop-shadow-lg">Le Raffiné</span>
              </div>

          <nav className="hidden md:flex space-x-10">
            <a href="#menu" className="text-white hover:text-opacity-70 transition-all duration-300 font-light tracking-wide">{t.nav.menu}</a>
            <a href="#about" className="text-white hover:text-opacity-70 transition-all duration-300 font-light tracking-wide">{t.nav.about}</a>
            <a href="#reservations" className="text-white hover:text-opacity-70 transition-all duration-300 font-light tracking-wide">{t.nav.reservations}</a>
            <a href="#contact" className="text-white hover:text-opacity-70 transition-all duration-300 font-light tracking-wide">{t.nav.contact}</a>
          </nav>
          <a 
            href="https://www.behance.net/gallery/235320955/Le-Raffin-Branding?" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-opacity-70 transition-all duration-300 text-sm font-light border border-white/30 px-4 py-2 rounded-full hover:bg-white/10"
          >
            {t.nav.viewBranding}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(50, 35, 29, 0.7)' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-7xl md:text-9xl font-thin mb-8 text-white tracking-wider">
            Le Raffiné
          </h1>
          <div className="w-24 h-px mx-auto mb-8" style={{ backgroundColor: '#b3afac' }}></div>
          <p className="text-xl md:text-3xl mb-12 font-light text-white/90 tracking-wide">
            {t.hero.subtitle}
          </p>
          <button 
            className="px-12 py-4 text-white font-light hover:bg-opacity-90 transition-all duration-300 border border-white/30 hover:bg-white/10 tracking-wider text-lg"
            style={{ backgroundColor: 'rgba(50, 35, 29, 0.8)' }}
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-thin mb-6 tracking-wide" style={{ color: '#32231d' }}>
              {t.about.title}
            </h2>
            <div className="w-24 h-px mx-auto" style={{ backgroundColor: '#b3afac' }}></div>
          </div>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <p className="text-xl leading-relaxed font-light" style={{ color: '#635651' }}>
                {t.about.description1}
              </p>
              <p className="text-xl leading-relaxed font-light" style={{ color: '#635651' }}>
                {t.about.description2}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-thin mb-2" style={{ color: '#32231d' }}>15+</div>
                  <div className="text-sm font-light" style={{ color: '#635651' }}>{t.about.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-thin mb-2" style={{ color: '#32231d' }}>★★★★★</div>
                  <div className="text-sm font-light" style={{ color: '#635651' }}>{t.about.michelin}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Executive chef"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Gourmet dish"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-32 px-4" style={{ backgroundColor: '#635651' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-thin mb-6 text-white tracking-wide">
              {t.menu.title}
            </h2>
            <div className="w-24 h-px mx-auto" style={{ backgroundColor: '#b3afac' }}></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                name: 'Foie Gras', 
                desc: t.menu.dishes.foieGras, 
                price: '€45',
                image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
              },
              { 
                name: 'Bouillabaisse', 
                desc: t.menu.dishes.bouillabaisse, 
                price: '€38',
                image: 'https://littleferrarokitchen.com/wp-content/uploads/2023/05/Easy-French-seafood-stew-bouillabaisse.jpg'
              },
              { 
                name: 'Côte de Bœuf', 
                desc: t.menu.dishes.beef, 
                price: '€65',
                image: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
              }
            ].map((dish, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-thin mb-4 text-white tracking-wide">{dish.name}</h3>
                  <p className="mb-6 font-light leading-relaxed" style={{ color: '#b3afac' }}>{dish.desc}</p>
                  <span className="text-2xl font-light text-white">{dish.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section id="reservations" className="py-32 px-4 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin mb-6 tracking-wide" style={{ color: '#32231d' }}>
              {t.reservations.title}
            </h2>
            <div className="w-24 h-px mx-auto mb-8" style={{ backgroundColor: '#b3afac' }}></div>
            <p className="text-xl font-light" style={{ color: '#635651' }}>
              {t.reservations.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(179, 175, 172, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#32231d' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-4" style={{ color: '#32231d' }}>{t.reservations.phone}</h3>
              <p className="text-lg font-light" style={{ color: '#635651' }}>+34 91 234 5678</p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(179, 175, 172, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#32231d' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-4" style={{ color: '#32231d' }}>{t.reservations.email}</h3>
              <p className="text-lg font-light" style={{ color: '#635651' }}>reservas@leraffine.es</p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(179, 175, 172, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#32231d' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-4" style={{ color: '#32231d' }}>{t.reservations.location}</h3>
              <p className="text-lg font-light" style={{ color: '#635651' }} dangerouslySetInnerHTML={{ __html: t.reservations.address }}></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4" style={{ backgroundColor: '#32231d' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-thin mb-6 text-white tracking-wider">Le Raffiné</h3>
              <p className="font-light leading-relaxed mb-6" style={{ color: '#b3afac' }}>
                {t.footer.description}
              </p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-5 h-5" style={{ color: '#b3afac' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-5 h-5" style={{ color: '#b3afac' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-5 h-5" style={{ color: '#b3afac' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6 text-white">{t.footer.hours}</h3>
              <div className="space-y-2 font-light" style={{ color: '#b3afac' }} dangerouslySetInnerHTML={{ __html: t.footer.schedule }}>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6 text-white">{t.footer.contact}</h3>
              <div className="space-y-4 font-light" style={{ color: '#b3afac' }}>
                <p dangerouslySetInnerHTML={{ __html: t.reservations.address.replace('Madrid, Spain', '28001 Madrid, Spain') }}></p>
                <p>+34 91 234 5678</p>
                <p>reservas@leraffine.es</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center" style={{ borderColor: '#635651' }}>
            <p className="font-light" style={{ color: '#b3afac' }}>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeRaffine;