import React, { useState, useContext, createContext } from 'react';

// Context para el idioma
const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-br from-coral-500 to-wine-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        >
          <span className="text-2xl">🌍</span>
        </button>

        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden min-w-[120px]">
            <button
              onClick={() => {
                if (language !== 'es') toggleLanguage();
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2 ${
                language === 'es' ? 'bg-coral-50 text-coral-700' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">🇪🇸</span>
              <span className="font-medium">Español</span>
            </button>
            <button
              onClick={() => {
                if (language !== 'en') toggleLanguage();
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2 ${
                language === 'en' ? 'bg-coral-50 text-coral-700' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">🇺🇸</span>
              <span className="font-medium">English</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;