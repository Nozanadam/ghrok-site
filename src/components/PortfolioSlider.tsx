import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: 'landing-page' | 'automation' | 'ai-integration';
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'lp-finance',
    title: 'Landing Page Financeira',
    description: 'Landing page de alta conversão para empresa de serviços financeiros, com foco em captação de leads qualificados.',
    image: 'https://images.pexels.com/photos/7681087/pexels-photo-7681087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['UI/UX', 'Landing Page', 'Otimização de Conversão'],
    type: 'landing-page'
  },
  {
    id: 'automation-crm',
    title: 'Automação de CRM',
    description: 'Desenvolvimento de automação com n8n para integração entre WhatsApp, CRM e ferramentas de e-mail marketing.',
    image: 'https://images.pexels.com/photos/8088466/pexels-photo-8088466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['n8n', 'Automação', 'CRM', 'WhatsApp'],
    type: 'automation'
  },
  {
    id: 'ai-advisor',
    title: 'Assistente Virtual com IA',
    description: 'Integração de IA para criar um assistente virtual para empresa de consultoria, capaz de responder perguntas e qualificar leads.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['IA', 'ChatGPT', 'Assistente Virtual'],
    type: 'ai-integration'
  },
  {
    id: 'lp-education',
    title: 'Landing Page Educacional',
    description: 'Sistema de landing pages para curso online com páginas de vendas e funil de conversão otimizado.',
    image: 'https://images.pexels.com/photos/8101458/pexels-photo-8101458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Landing Page', 'E-learning', 'Funil de Vendas'],
    type: 'landing-page'
  },
  {
    id: 'automation-inventory',
    title: 'Automação de Estoque',
    description: 'Fluxo automatizado para controle de estoque e compras com integração entre ERP e sistemas de fornecedores.',
    image: 'https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Automação', 'n8n', 'ERP', 'Estoque'],
    type: 'automation'
  },
  {
    id: 'ai-analytics',
    title: 'Análise Preditiva com IA',
    description: 'Sistema de análise preditiva usando IA para prever tendências de mercado e comportamento de clientes.',
    image: 'https://images.pexels.com/photos/7567570/pexels-photo-7567570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['IA', 'Análise Preditiva', 'Big Data'],
    type: 'ai-integration'
  }
];

const PortfolioSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main slider container */}
      <div className="relative h-[600px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="min-w-full h-full relative">
              {/* Browser mockup */}
              <div className="absolute inset-4 bg-white rounded-xl shadow-2xl overflow-hidden">
                {/* Browser header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-sm text-gray-600 ml-4">
                    www.gorktecnologia.com.br/{item.id}
                  </div>
                </div>
                
                {/* Website content */}
                <div className="h-full bg-white relative overflow-hidden">
                  {/* Navigation bar mockup */}
                  <div className="bg-white px-6 py-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-6 text-sm text-gray-600">
                        <span className="text-blue-600 font-medium">Home</span>
                        <span>About</span>
                        <span>Services</span>
                        <span>Contact</span>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                        Login
                      </button>
                    </div>
                  </div>
                  
                  {/* Hero section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content section mockup */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Home</h4>
                        <p className="text-xs text-gray-600">
                          Apresentação da empresa e principais serviços oferecidos.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">About</h4>
                        <p className="text-xs text-gray-600">
                          Nossa história, missão e valores que nos guiam.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Services</h4>
                        <p className="text-xs text-gray-600">
                          Detalhes completos sobre nossas soluções tecnológicas.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
                        <p className="text-xs text-gray-600">
                          Entre em contato conosco para mais informações.
                        </p>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center space-x-3 mt-8">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-teal-400 w-8'
                : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSlider;