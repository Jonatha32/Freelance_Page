import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageSelector';

const PaymentMethods = ({ className = "", variant = "default" }) => {
  const { language } = useLanguage();

  const isFooter = variant === 'footer';
  const containerClass = isFooter 
    ? `bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 ${className}`
    : `bg-coral-50 rounded-2xl p-6 border border-coral-100 ${className}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={containerClass}
    >
      <div className="text-center mb-6">
        <motion.h3 
          className={`text-xl font-bold mb-3 ${
            isFooter ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {language === 'es' ? 'Métodos de Pago' : 'Payment Methods'}
        </motion.h3>
        
        <motion.p 
          className={`text-base mb-2 ${
            isFooter ? 'text-gray-300' : 'text-gray-700'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {language === 'es' ? 'Trabajo con clientes de todo el mundo' : 'I work with clients worldwide'}
        </motion.p>
        
        <motion.p 
          className={`text-sm ${
            isFooter ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {language === 'es' 
            ? 'Los pagos se coordinan directamente luego de acordar tu proyecto.' 
            : 'Payments are coordinated directly after agreeing on your project.'}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PayPal - Internacional */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className={`rounded-xl p-4 border transition-all duration-300 ${
            isFooter 
              ? 'bg-white/10 border-white/20 hover:bg-white/15' 
              : 'bg-white border-coral-200 hover:border-coral-300 hover:shadow-md'
          }`}
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isFooter ? 'bg-white/20' : 'bg-blue-50'
            }`}>
              <svg className={`w-5 h-5 ${
                isFooter ? 'text-white' : 'text-blue-600'
              }`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-semibold ${
                    isFooter ? 'text-white' : 'text-gray-900'
                  }`}>PayPal</h4>
                  <p className={`text-xs ${
                    isFooter ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {language === 'es' ? 'Internacional' : 'International'}
                  </p>
                </div>
                <img 
                  src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" 
                  alt="PayPal" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mercado Pago - Latinoamérica */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className={`rounded-xl p-4 border transition-all duration-300 ${
            isFooter 
              ? 'bg-white/10 border-white/20 hover:bg-white/15' 
              : 'bg-white border-coral-200 hover:border-coral-300 hover:shadow-md'
          }`}
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isFooter ? 'bg-white/20' : 'bg-blue-50'
            }`}>
              <svg className={`w-5 h-5 ${
                isFooter ? 'text-white' : 'text-blue-600'
              }`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-semibold ${
                    isFooter ? 'text-white' : 'text-gray-900'
                  }`}>Mercado Pago</h4>
                  <p className={`text-xs ${
                    isFooter ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {language === 'es' ? 'Latinoamérica' : 'Latin America'}
                  </p>
                </div>
                <img 
                         src="/mercado-pago-logo-png_seeklogo-198430.png" 
                  alt="Logo Mercado Pago"
                  className={`h-14 w-auto`}
                  loading="lazy"
                 />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className={`mt-4 p-4 rounded-lg border ${
          isFooter 
            ? 'bg-white/5 border-white/10' 
            : 'bg-coral-100 border-coral-200'
        }`}
      >
        <div className="flex items-start space-x-3">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
            isFooter ? 'bg-white/20' : 'bg-coral-500'
          }`}>
            <svg className={`w-3 h-3 ${
              isFooter ? 'text-white' : 'text-white'
            }`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 ${
              isFooter ? 'text-white' : 'text-coral-900'
            }`}>
              {language === 'es' ? 'Proceso Personalizado' : 'Personalized Process'}
            </p>
            <p className={`text-sm ${
              isFooter ? 'text-gray-300' : 'text-coral-700'
            }`}>
              {language === 'es' 
                ? 'Después de nuestra consulta inicial, coordinaremos los detalles de pago específicos para tu proyecto.' 
                : 'After our initial consultation, we\'ll coordinate specific payment details for your project.'}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentMethods;