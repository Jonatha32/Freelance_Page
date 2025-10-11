import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageSelector';
import { submitProposal, validateProposalData } from '../services/proposalService';

const Services = () => {
  const { language } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const openModal = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowModal(true);
    setCurrentStep(0);
    setFormData({});
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
    setCurrentStep(0);
    setFormData({});
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmitProposal = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Prepare data for services form
      const dataToSubmit = {
        nombre: formData.name,
        email: formData.email,
        telefono: formData.phone || '',
        pais: formData.country || '',
        descripcionProyecto: formData.step_0 || '',
        estadoProyecto: formData.step_1 || '',
        presupuesto: formData.step_2 || '',
        tiempoEntrega: formData.step_3 || '',
        categoria: selectedCategory
      };
      
      // Basic validation
      if (!dataToSubmit.nombre || !dataToSubmit.email || !dataToSubmit.descripcionProyecto) {
        setSubmitError(language === 'es' 
          ? 'Por favor completa los campos obligatorios'
          : 'Please complete the required fields'
        );
        setIsSubmitting(false);
        return;
      }
      
      // Submit proposal
      const result = await submitProposal(dataToSubmit, formData.files, 'services');
      
      if (result.success) {
        alert(language === 'es' 
          ? '¡Propuesta enviada exitosamente! Te contactaremos en 24h.' 
          : 'Proposal sent successfully! We will contact you in 24h.'
        );
        closeModal();
      }
    } catch (error) {
      console.error('Error submitting proposal:', error);
      setSubmitError(language === 'es' 
        ? 'Error al enviar la propuesta. Por favor, intenta nuevamente.'
        : 'Error sending proposal. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const universalFormQuestions = [
    {
      question: language === 'es' ? "Contame brevemente qué querés lograr con este proyecto" : "Tell me briefly what you want to achieve with this project",
      type: "text",
      placeholder: language === 'es' ? "Ej: Aumentar ventas online, mejorar mi imagen profesional, automatizar procesos..." : "Ex: Increase online sales, improve my professional image, automate processes...",
      required: true
    },
    {
      question: language === 'es' ? "¿En qué estado está tu proyecto?" : "What stage is your project in?",
      type: "choice",
      options: language === 'es' 
        ? ["Tengo una idea, pero aún no lo desarrollé", "Ya tengo algo hecho, quiero mejorarlo", "Necesito comenzar de cero", "No estoy seguro"]
        : ["I have an idea, but haven't developed it yet", "I already have something done, I want to improve it", "I need to start from scratch", "I'm not sure"],
      required: false
    },
    {
      question: language === 'es' ? "¿Tenés un presupuesto definido o querés que te ayude a estimarlo?" : "Do you have a defined budget or do you want me to help you estimate it?",
      type: "choice",
      options: language === 'es'
        ? ["Necesito cotización personalizada", "Estoy dentro del rango de precios que figura en tu web", "No tengo idea aún"]
        : ["I need a personalized quote", "I'm within the price range on your website", "I have no idea yet"],
      required: false
    },
    {
      question: language === 'es' ? "¿Cuándo necesitas el proyecto terminado?" : "When do you need the project completed?",
      type: "choice",
      options: language === 'es'
        ? ["Lo antes posible", "En 1 mes", "En 2-3 meses", "Tengo flexibilidad"]
        : ["As soon as possible", "In 1 month", "In 2-3 months", "I have flexibility"],
      required: false
    },
    {
      question: language === 'es' ? "Datos personales" : "Personal information",
      type: "personal"
    },
    {
      question: language === 'es' ? "¿Querés adjuntar algún archivo o referencia visual?" : "Do you want to attach any file or visual reference?",
      type: "file",
      placeholder: language === 'es' ? "Logo actual, web de inspiración, bocetos, etc." : "Current logo, inspiration website, sketches, etc.",
      required: false
    },
    {
      question: language === 'es' ? "Consentimiento" : "Consent",
      type: "consent"
    }
  ];

  const formQuestions = {
    desarrollo: universalFormQuestions,
    diseno: universalFormQuestions,
    contenido: universalFormQuestions,
    marketing: universalFormQuestions,
    educacion: universalFormQuestions,
    'pack-raiz': universalFormQuestions,
    'pack-presencia': universalFormQuestions,
    'pack-fuego': universalFormQuestions
  };
  const servicePillars = [
    {
      id: 'desarrollo',
      icon: '🚀',
      title: language === 'es' ? 'Desarrollo & Tecnología' : 'Development & Technology',
      subtitle: language === 'es' ? 'Código que cobra vida' : 'Code that comes to life',
      description: language === 'es' ? 'Transformo ideas en experiencias digitales potentes y escalables.' : 'I transform ideas into powerful and scalable digital experiences.',
      gradient: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: language === 'es' ? 'Desarrollo Web Frontend' : 'Frontend Web Development',
          description: language === 'es' ? 'Sitios modernos que convierten visitantes en clientes.' : 'Modern sites that convert visitors into clients.',
          price: language === 'es' ? 'Desde $800' : 'From $800',
          includes: language === 'es' 
            ? ['Diseño responsive', 'Optimización SEO', 'Animaciones suaves', 'Soporte 30 días']
            : ['Responsive design', 'SEO optimization', 'Smooth animations', '30-day support']
        },
        {
          name: language === 'es' ? 'Aplicaciones React' : 'React Applications',
          description: language === 'es' ? 'Web apps escalables que crecen con tu negocio.' : 'Scalable web apps that grow with your business.',
          price: language === 'es' ? 'Desde $1,200' : 'From $1,200',
          includes: language === 'es'
            ? ['Arquitectura sólida', 'Estado global', 'APIs integradas', 'Testing completo']
            : ['Solid architecture', 'Global state', 'Integrated APIs', 'Complete testing']
        },
        {
          name: language === 'es' ? 'E-commerce Épico' : 'Epic E-commerce',
          description: language === 'es' ? 'Tiendas online que venden mientras duermes.' : 'Online stores that sell while you sleep.',
          price: language === 'es' ? 'Desde $1,500' : 'From $1,500',
          includes: language === 'es'
            ? ['Carrito inteligente', 'Pagos seguros', 'Panel admin', 'Analytics avanzado']
            : ['Smart cart', 'Secure payments', 'Admin panel', 'Advanced analytics']
        },
        {
          name: 'Backend & APIs',
          description: language === 'es' ? 'Arquitectura sólida y segura para tus datos.' : 'Solid and secure architecture for your data.',
          price: language === 'es' ? 'Desde $1,000' : 'From $1,000',
          includes: language === 'es'
            ? ['Base de datos', 'Autenticación', 'APIs REST', 'Documentación']
            : ['Database', 'Authentication', 'REST APIs', 'Documentation']
        }
      ]
    },
    {
      id: 'diseno',
      icon: '🎨',
      title: language === 'es' ? 'Diseño & Experiencia' : 'Design & Experience',
      subtitle: language === 'es' ? 'Belleza que funciona' : 'Beauty that works',
      description: language === 'es' ? 'Diseño que no solo se ve bien, sino que convierte y enamora.' : 'Design that not only looks good, but converts and captivates.',
      gradient: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'UX/UI Design',
          description: language === 'es' ? 'Interfaces que tus usuarios van a amar usar.' : 'Interfaces your users will love to use.',
          price: language === 'es' ? 'Desde $600' : 'From $600',
          includes: language === 'es' 
            ? ['Research UX', 'Wireframes', 'Prototipos', 'Design system']
            : ['UX Research', 'Wireframes', 'Prototypes', 'Design system']
        },
        {
          name: language === 'es' ? 'Branding Digital' : 'Digital Branding',
          description: language === 'es' ? 'Identidad visual que hace ruido en el mercado.' : 'Visual identity that makes noise in the market.',
          price: language === 'es' ? 'Desde $700' : 'From $700',
          includes: language === 'es'
            ? ['Logo épico', 'Paleta de colores', 'Tipografías', 'Manual de marca']
            : ['Epic logo', 'Color palette', 'Typography', 'Brand manual']
        },
        {
          name: 'Product Design',
          description: language === 'es' ? 'De la idea al prototipo que funciona.' : 'From idea to working prototype.',
          price: language === 'es' ? 'Desde $900' : 'From $900',
          includes: language === 'es'
            ? ['Concepto', 'MVP design', 'User testing', 'Iteraciones']
            : ['Concept', 'MVP design', 'User testing', 'Iterations']
        },
        {
          name: language === 'es' ? 'Diseño Gráfico Creativo' : 'Creative Graphic Design',
          description: language === 'es' ? 'Gráficos que cuentan historias y generan engagement.' : 'Graphics that tell stories and generate engagement.',
          price: language === 'es' ? 'Desde $400' : 'From $400',
          includes: language === 'es'
            ? ['Posts redes', 'Banners web', 'Infografías', 'Material digital']
            : ['Social posts', 'Web banners', 'Infographics', 'Digital material']
        }
      ]
    },
    {
      id: 'contenido',
      icon: '✍️',
      title: language === 'es' ? 'Estrategia & Contenido' : 'Strategy & Content',
      subtitle: language === 'es' ? 'Palabras que venden' : 'Words that sell',
      description: language === 'es' ? 'Copywriting que conecta, convence y convierte como un imán.' : 'Copywriting that connects, convinces and converts like a magnet.',
      gradient: 'from-green-500 to-teal-500',
      services: [
        {
          name: language === 'es' ? 'Copywriting que Convierte' : 'Converting Copywriting',
          description: language === 'es' ? 'Textos que transforman lectores en compradores.' : 'Texts that transform readers into buyers.',
          price: language === 'es' ? 'Desde $300' : 'From $300',
          includes: language === 'es'
            ? ['Headlines épicos', 'CTAs potentes', 'Email sequences', 'Landing copy']
            : ['Epic headlines', 'Powerful CTAs', 'Email sequences', 'Landing copy']
        },
        {
          name: 'UX Writing',
          description: language === 'es' ? 'Microtextos que guían y mejoran la experiencia.' : 'Microtexts that guide and improve the experience.',
          price: language === 'es' ? 'Desde $250' : 'From $250',
          includes: language === 'es'
            ? ['Botones claros', 'Mensajes de error', 'Onboarding', 'Tooltips']
            : ['Clear buttons', 'Error messages', 'Onboarding', 'Tooltips']
        },
        {
          name: language === 'es' ? 'Storytelling & Guiones' : 'Storytelling & Scripts',
          description: language === 'es' ? 'Narrativas que enganchan y no se olvidan.' : 'Narratives that hook and are not forgotten.',
          price: language === 'es' ? 'Desde $400' : 'From $400',
          includes: language === 'es'
            ? ['Brand story', 'Guiones video', 'Case studies', 'Testimoniales']
            : ['Brand story', 'Video scripts', 'Case studies', 'Testimonials']
        },
        {
          name: 'Content Strategy',
          description: language === 'es' ? 'Estrategia de contenido que posiciona tu marca.' : 'Content strategy that positions your brand.',
          price: language === 'es' ? 'Desde $500' : 'From $500',
          includes: language === 'es'
            ? ['Calendario editorial', 'Pilares de contenido', 'SEO strategy', 'Métricas']
            : ['Editorial calendar', 'Content pillars', 'SEO strategy', 'Metrics']
        }
      ]
    },
    {
      id: 'marketing',
      icon: '📈',
      title: language === 'es' ? 'Estrategia & Marketing' : 'Strategy & Marketing',
      subtitle: language === 'es' ? 'Crecimiento inteligente' : 'Smart growth',
      description: language === 'es' ? 'Estrategias que hacen crecer tu marca de forma sostenible.' : 'Strategies that grow your brand sustainably.',
      gradient: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Brand Strategy',
          description: language === 'es' ? 'Posicionamiento que te diferencia de la competencia.' : 'Positioning that differentiates you from the competition.',
          price: language === 'es' ? 'Desde $800' : 'From $800',
          includes: language === 'es'
            ? ['Análisis competencia', 'Propuesta valor', 'Positioning', 'Roadmap']
            : ['Competition analysis', 'Value proposition', 'Positioning', 'Roadmap']
        },
        {
          name: 'Community Building',
          description: language === 'es' ? 'Construye una tribu leal alrededor de tu marca.' : 'Build a loyal tribe around your brand.',
          price: language === 'es' ? 'Desde $600' : 'From $600',
          includes: language === 'es'
            ? ['Estrategia comunidad', 'Content plan', 'Engagement', 'Growth hacking']
            : ['Community strategy', 'Content plan', 'Engagement', 'Growth hacking']
        },
        {
          name: language === 'es' ? 'Consultoría Digital' : 'Digital Consulting',
          description: language === 'es' ? 'Optimiza tu presencia digital y stack tecnológico.' : 'Optimize your digital presence and tech stack.',
          price: language === 'es' ? '$120/hora' : '$120/hour',
          includes: language === 'es'
            ? ['Auditoría completa', 'Plan de acción', 'Tech stack', 'Implementación']
            : ['Complete audit', 'Action plan', 'Tech stack', 'Implementation']
        },
        {
          name: language === 'es' ? 'Campañas Digitales' : 'Digital Campaigns',
          description: language === 'es' ? 'Campañas que generan resultados medibles.' : 'Campaigns that generate measurable results.',
          price: language === 'es' ? 'Desde $700' : 'From $700',
          includes: language === 'es'
            ? ['SEO strategy', 'Performance ads', 'Analytics', 'Optimización']
            : ['SEO strategy', 'Performance ads', 'Analytics', 'Optimization']
        }
      ]
    },
    {
      id: 'educacion',
      icon: '🌟',
      title: language === 'es' ? 'Educación & Mentoría' : 'Education & Mentoring',
      subtitle: language === 'es' ? 'Conocimiento que transforma' : 'Knowledge that transforms',
      description: language === 'es' ? 'Comparto lo que sé para que puedas brillar con luz propia.' : 'I share what I know so you can shine with your own light.',
      gradient: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: language === 'es' ? 'Mentorías Creativas' : 'Creative Mentoring',
          description: language === 'es' ? 'Sesiones 1:1 para potenciar tu creatividad y técnica.' : '1:1 sessions to boost your creativity and technique.',
          price: language === 'es' ? '$80/hora' : '$80/hour',
          includes: language === 'es'
            ? ['Sesión personalizada', 'Plan de crecimiento', 'Recursos', 'Seguimiento']
            : ['Personalized session', 'Growth plan', 'Resources', 'Follow-up']
        },
        {
          name: language === 'es' ? 'Tutorías Tech' : 'Tech Tutoring',
          description: language === 'es' ? 'Aprende desarrollo, diseño y herramientas digitales.' : 'Learn development, design and digital tools.',
          price: language === 'es' ? '$60/hora' : '$60/hour',
          includes: language === 'es'
            ? ['Clases prácticas', 'Proyectos reales', 'Feedback', 'Certificado']
            : ['Practical classes', 'Real projects', 'Feedback', 'Certificate']
        },
        {
          name: language === 'es' ? 'Workshop Creativos' : 'Creative Workshops',
          description: language === 'es' ? 'Talleres grupales de arte + tecnología + storytelling.' : 'Group workshops of art + technology + storytelling.',
          price: language === 'es' ? 'Desde $200' : 'From $200',
          includes: language === 'es'
            ? ['Taller grupal', 'Material didáctico', 'Proyecto final', 'Networking']
            : ['Group workshop', 'Educational material', 'Final project', 'Networking']
        },
        {
          name: language === 'es' ? 'Consultoría Marca Personal' : 'Personal Brand Consulting',
          description: language === 'es' ? 'Construye una marca personal que abra puertas.' : 'Build a personal brand that opens doors.',
          price: language === 'es' ? 'Desde $500' : 'From $500',
          includes: language === 'es'
            ? ['Análisis personal', 'Estrategia', 'Content plan', 'Implementación']
            : ['Personal analysis', 'Strategy', 'Content plan', 'Implementation']
        }
      ]
    }
  ];

  const packs = [
    {
      name: language === 'es' ? 'Pack Raíz' : 'Root Pack',
      subtitle: language === 'es' ? 'Para empezar con fuerza' : 'To start strong',
      price: '$1,200',
      originalPrice: '$1,500',
      description: language === 'es' ? 'Landing page + branding básico + copywriting' : 'Landing page + basic branding + copywriting',
      includes: language === 'es' 
        ? ['Landing page responsive', 'Logo + paleta', 'Copywriting persuasivo', 'SEO básico']
        : ['Responsive landing page', 'Logo + palette', 'Persuasive copywriting', 'Basic SEO'],
      gradient: 'from-green-400 to-green-600',
      popular: false
    },
    {
      name: language === 'es' ? 'Pack Presencia' : 'Presence Pack',
      subtitle: language === 'es' ? 'Presencia digital completa' : 'Complete digital presence',
      price: '$2,800',
      originalPrice: '$3,500',
      description: language === 'es' ? 'Web completa + branding + estrategia de contenido' : 'Complete website + branding + content strategy',
      includes: language === 'es'
        ? ['Sitio web completo', 'Branding épico', 'Estrategia contenido', 'Consultoría 3 meses']
        : ['Complete website', 'Epic branding', 'Content strategy', '3-month consulting'],
      gradient: 'from-blue-400 to-blue-600',
      popular: true
    },
    {
      name: language === 'es' ? 'Pack Fuego' : 'Fire Pack',
      subtitle: language === 'es' ? 'La experiencia completa' : 'The complete experience',
      price: '$4,500',
      originalPrice: '$6,000',
      description: language === 'es' ? 'E-commerce + branding + marketing + mentoría' : 'E-commerce + branding + marketing + mentoring',
      includes: language === 'es'
        ? ['E-commerce completo', 'Branding premium', 'Estrategia marketing', 'Mentoría 6 meses']
        : ['Complete e-commerce', 'Premium branding', 'Marketing strategy', '6-month mentoring'],
      gradient: 'from-red-400 to-red-600',
      popular: false
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gradient text-black-600/90">
              {language === 'es' ? 'SERVICIOS' : 'SERVICES'}
            </span>
            <br />
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {language === 'es' 
              ? <>🎨 <span className="font-bold text-coral-600">Creatividad artística</span> + ⚡ <span className="font-bold text-gold-600">excelencia técnica</span> + 🚀 <span className="font-bold text-mint-600">estrategia que funciona</span></>
              : <>🎨 <span className="font-bold text-coral-600">Artistic creativity</span> + ⚡ <span className="font-bold text-gold-600">technical excellence</span> + 🚀 <span className="font-bold text-mint-600">strategy that works</span></>
            }
          </motion.p>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-coral-500 to-gold-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Packs Destacados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {language === 'es' ? '🔥 PACKS' : '🔥 PACKAGES'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'es' ? 'Combos que maximizan tu inversión y resultados' : 'Combos that maximize your investment and results'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 border-2 hover:scale-105 transition-all duration-300 ${
                  pack.popular ? 'border-gold-400 shadow-2xl' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r px-6 py-0 rounded font-bold text-20px font-sans shadow-lg">
                      {language === 'es' ? ' MÁS POPULAR' : 'MOST POPULAR'}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-black mb-2 bg-gradient-to-r ${pack.gradient} bg-clip-text text-transparent`}>
                    {pack.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pack.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-gray-900">{pack.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pack.originalPrice}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{pack.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pack.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    const packKey = (pack.name === 'Pack Raíz' || pack.name === 'Root Pack') ? 'pack-raiz' : 
                                   (pack.name === 'Pack Presencia' || pack.name === 'Presence Pack') ? 'pack-presencia' : 
                                   (pack.name === 'Pack Fuego' || pack.name === 'Fire Pack') ? 'pack-fuego' : 'general';
                    openModal(packKey);
                  }}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r ${pack.gradient} hover:scale-105 hover:shadow-lg`}
                >
                  {language === 'es' ? '📝 Solicitar Propuesta' : '📝 Request Proposal'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Pillars */}
        <div className="space-y-16">
          {servicePillars.map((pillar, pillarIndex) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + pillarIndex * 0.2 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500"
            >
              {/* Pillar Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${pillar.gradient} text-4xl mb-6`}>
                  {pillar.icon}
                </div>
                <h2 className={`text-4xl font-black mb-3 bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                  {pillar.title}
                </h2>
                <p className="text-xl font-bold text-gray-700 mb-4">{pillar.subtitle}</p>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{pillar.description}</p>
              </div>
              
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pillar.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + pillarIndex * 0.2 + serviceIndex * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <div className={`text-2xl font-black bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                        {service.price}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">{language === 'es' ? '✨ Incluye:' : '✨ Includes:'}</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-gray-700">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      onClick={() => openModal(pillar.id)}
                      className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 bg-gradient-to-r ${pillar.gradient} hover:scale-105 hover:shadow-md group-hover:shadow-lg`}
                    >
                      {language === 'es' ? '📝 Solicitar Propuesta' : '📝 Request Proposal'}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom Épico */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Efectos de fondo */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-coral-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gold-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className=" from-coral-400">
                {language === 'es' ? '¿NO ENCUENTRAS' : 'CAN\'T FIND'}
              </span>
              <br />
              <span className="text-white">{language === 'es' ? 'LO QUE BUSCAS?' : 'WHAT YOU\'RE LOOKING FOR?'}</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
              {language === 'es' ? '🎯 Cada proyecto es único, como una obra de arte digital.' : '🎯 Every project is unique, like a digital work of art.'}
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {language === 'es' 
                ? 'Conversemos sobre tu visión y creemos algo épico juntos.'
                : 'Let\'s talk about your vision and create something epic together.'
              }
              <p className="text-coral-300 font-bold">
                {language === 'es' ? ' Sin límites, sin moldes, solo resultados.' : ' No limits, no molds, just results.'}
              </p>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contacto" className="bg-gradient-to-r from-coral-500 to-gold-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl inline-block">
                {language === 'es' ? '📝 Solicitar Propuesta Gratuita' : '📝 Request Free Proposal'}
              </a>
              <a href="https://wa.me/1234567890?text=Hola%20Jona,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios" target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 inline-block">
                {language === 'es' ? '💬 Consulta Rápida WhatsApp' : '💬 Quick WhatsApp Consultation'}
              </a>
            </div>
            
            <div className="mt-8 flex justify-center items-center space-x-6 text-white/70">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">{language === 'es' ? 'Respuesta en 24h' : 'Response in 24h'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🎨</span>
                <span className="font-medium">{language === 'es' ? 'Propuesta personalizada' : 'Personalized proposal'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">⚡</span>
                <span className="font-medium">{language === 'es' ? 'Sin compromiso' : 'No commitment'}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modal Typeform */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {language === 'es' ? 'Solicitar Propuesta' : 'Request Proposal'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'es' ? `Paso ${currentStep + 1} de` : `Step ${currentStep + 1} of`} {selectedCategory && formQuestions[selectedCategory] ? formQuestions[selectedCategory].length : 7}
                    </p>
                  </div>
                  <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                    ✕
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                  <div 
                    className="bg-gradient-to-r from-coral-500 to-wine-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / (selectedCategory && formQuestions[selectedCategory] ? formQuestions[selectedCategory].length : 5)) * 100}%` }}
                  ></div>
                </div>

                {/* Question */}
                {selectedCategory && formQuestions[selectedCategory] && formQuestions[selectedCategory][currentStep] && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      {formQuestions[selectedCategory][currentStep].question}
                      {!formQuestions[selectedCategory][currentStep].required && <span className="text-gray-400 text-sm ml-2">{language === 'es' ? '(opcional)' : '(optional)'}</span>}
                    </h4>

                    {formQuestions[selectedCategory][currentStep].type === 'choice' && (
                      <div className="space-y-3">
                        {formQuestions[selectedCategory][currentStep].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              updateFormData(`step_${currentStep}`, option);
                              setTimeout(nextStep, 300);
                            }}
                            className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-coral-400 hover:bg-coral-50 transition-all duration-200"
                          >
                            {option}
                          </button>
                        ))}
                        {!formQuestions[selectedCategory][currentStep].required && (
                          <button
                            onClick={nextStep}
                            className="w-full p-4 text-center border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 transition-all duration-200"
                          >
                            {language === 'es' ? 'Omitir esta pregunta →' : 'Skip this question →'}
                          </button>
                        )}
                      </div>
                    )}

                    {formQuestions[selectedCategory][currentStep].type === 'text' && (
                      <div>
                        <textarea
                          placeholder={formQuestions[selectedCategory][currentStep].placeholder}
                          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-coral-400 focus:outline-none resize-none h-32"
                          value={formData[`step_${currentStep}`] || ''}
                          onChange={(e) => updateFormData(`step_${currentStep}`, e.target.value)}
                        />
                        <button
                          onClick={nextStep}
                          disabled={formQuestions[selectedCategory][currentStep].required && !formData[`step_${currentStep}`]}
                          className="mt-4 bg-coral-500 text-white px-6 py-2 rounded-lg hover:bg-coral-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {language === 'es' ? 'Continuar →' : 'Continue →'}
                        </button>
                      </div>
                    )}

                    {formQuestions[selectedCategory][currentStep].type === 'personal' && (
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder={language === 'es' ? "Nombre completo *" : "Full name *"}
                          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-coral-400 focus:outline-none"
                          value={formData.name || ''}
                          onChange={(e) => updateFormData('name', e.target.value)}
                        />
                        <input
                          type="email"
                          placeholder={language === 'es' ? "Correo electrónico *" : "Email address *"}
                          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-coral-400 focus:outline-none"
                          value={formData.email || ''}
                          onChange={(e) => updateFormData('email', e.target.value)}
                        />
                        <input
                          type="tel"
                          placeholder={language === 'es' ? "Número de teléfono (opcional)" : "Phone number (optional)"}
                          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-coral-400 focus:outline-none"
                          value={formData.phone || ''}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder={language === 'es' ? "País *" : "Country *"}
                          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-coral-400 focus:outline-none"
                          value={formData.country || ''}
                          onChange={(e) => updateFormData('country', e.target.value)}
                        />
                        <button
                          onClick={nextStep}
                          disabled={!formData.name || !formData.email}
                          className="mt-4 bg-coral-500 text-white px-6 py-2 rounded-lg hover:bg-coral-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {language === 'es' ? 'Continuar →' : 'Continue →'}
                        </button>
                      </div>
                    )}

                    {formQuestions[selectedCategory][currentStep].type === 'file' && (
                      <div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-coral-400 transition-colors">
                          <div className="text-4xl mb-4">📁</div>
                          <p className="text-gray-600 mb-4">{formQuestions[selectedCategory][currentStep].placeholder}</p>
                          <input
                            type="file"
                            multiple
                            accept="image/*,.pdf,.doc,.docx"
                            className="hidden"
                            id="file-upload-services"
                            onChange={(e) => updateFormData('files', e.target.files)}
                          />
                          <label
                            htmlFor="file-upload-services"
                            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                          >
                            {language === 'es' ? 'Seleccionar archivos' : 'Select files'}
                          </label>
                          {formData.files && formData.files.length > 0 && (
                            <div className="mt-3 text-sm text-gray-600">
                              {formData.files.length} {language === 'es' ? 'archivo(s) seleccionado(s)' : 'file(s) selected'}
                            </div>
                          )}
                        </div>
                        <button
                          onClick={nextStep}
                          className="mt-4 bg-coral-500 text-white px-6 py-2 rounded-lg hover:bg-coral-600"
                        >
                          {language === 'es' ? 'Continuar →' : 'Continue →'}
                        </button>
                      </div>
                    )}

                    {formQuestions[selectedCategory][currentStep].type === 'consent' && (
                      <div className="space-y-6">
                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="consent"
                            className="mt-1 w-5 h-5 text-coral-500 border-2 border-gray-300 rounded focus:ring-coral-400"
                            checked={formData.consent || false}
                            onChange={(e) => updateFormData('consent', e.target.checked)}
                          />
                          <label htmlFor="consent" className="text-gray-700 leading-relaxed">
                            {language === 'es' 
                              ? 'Autorizo que Jonathan Pérez reciba mi solicitud y me contacte por correo o WhatsApp para brindarme información sobre sus servicios.'
                              : 'I authorize Jonathan Pérez to receive my request and contact me by email or WhatsApp to provide information about his services.'
                            }
                          </label>
                        </div>
                        {submitError && (
                          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {submitError}
                          </div>
                        )}
                        <button
                          onClick={handleSubmitProposal}
                          disabled={!formData.consent || isSubmitting}
                          className="w-full bg-gradient-to-r from-coral-500 to-wine-500 text-white py-4 rounded-lg font-bold hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting 
                            ? (language === 'es' ? '⏳ Enviando...' : '⏳ Sending...')
                            : (language === 'es' ? '🚀 Solicitar Propuesta Personalizada' : '🚀 Request Personalized Proposal')
                          }
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation */}
                {currentStep > 0 && formQuestions[selectedCategory][currentStep].type !== 'choice' && (
                  <button
                    onClick={prevStep}
                    className="text-gray-500 hover:text-gray-700 font-medium"
                  >
                    {language === 'es' ? '← Anterior' : '← Previous'}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;