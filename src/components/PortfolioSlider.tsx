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
    id: 'figspace-ecommerce',
    title: 'Loja Virtual Profissional - Figspace',
    description: 'Landing page de alta conversão para e-commerce com design moderno e otimizado para vendas.',
    image: 'https://images.pexels.com/photos/7567570/pexels-photo-7567570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['E-commerce', 'Landing Page', 'Conversão', 'Design Moderno'],
    type: 'landing-page'
  },
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
              {/* Render different layouts based on item */}
              {item.id === 'figspace-ecommerce' ? (
                /* Figspace E-commerce Layout */
                <div className="absolute inset-4 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-xl shadow-2xl overflow-hidden">
                  <div className="h-full relative">
                    {/* Top section with gradient background */}
                    <div className="relative h-1/2 p-8 flex items-center">
                      {/* Left content */}
                      <div className="w-1/2 text-white space-y-6">
                        <div className="text-xs uppercase tracking-wider opacity-90">
                          ESSA É A OPORTUNIDADE DE VOCÊ TER SEU PRÓPRIO NEGÓCIO
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-white font-bold text-4xl">figspace</div>
                          <div className="text-sm uppercase tracking-wide opacity-90">
                            VENDA SEUS PRIMEIROS
                          </div>
                          <div className="text-4xl font-bold leading-tight">
                            50 mil em até 30<br />
                            dias com uma<br />
                            loja altamente<br />
                            profissional
                          </div>
                        </div>
                        
                        {/* Features list */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="text-xs mr-2">→</span>
                              <span>90 produtos com copywriting otimizado por especialistas</span>
                            </div>
                            <div className="flex items-start">
                              <span className="text-xs mr-2">→</span>
                              <span>Tema com carregamento ultra-rápido</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="text-xs mr-2">→</span>
                              <span>Curso passo a passo + Mentoria Semanal de 90 dias</span>
                            </div>
                            <div className="flex items-start">
                              <span className="text-xs mr-2">→</span>
                              <span>Tema com carregamento ultra-rápido</span>
                            </div>
                          </div>
                        </div>
                        
                        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold py-3 px-8 rounded-lg text-sm">
                          QUERO MINHA LOJA PROFISSIONAL
                        </button>
                      </div>
                      
                      {/* Right content - Video placeholder */}
                      <div className="w-1/2 flex justify-center">
                        <div className="relative">
                          <div className="w-80 h-48 bg-black/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 text-white text-sm">
                            ▶ Assistir vídeo
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom section */}
                    <div className="h-1/2 bg-black p-8">
                      <div className="flex items-start space-x-8 h-full">
                        {/* Left content */}
                        <div className="w-1/2 text-white space-y-4">
                          <div className="text-xs uppercase tracking-wider text-green-400">
                            GARANTIA DE ENTREGA
                          </div>
                          
                          <div className="space-y-2">
                            <div className="text-3xl font-bold leading-tight">
                              Receba sua loja<br />
                              em <span className="text-green-400">5 dias úteis</span> ou<br />
                              tenha o seu<br />
                              dinheiro de volta
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-300 leading-relaxed">
                            Conheça algumas lojas de alta performance<br />
                            entregues a clientes que começaram do zero e hoje<br />
                            faturam milhões
                          </p>
                        </div>
                        
                        {/* Right content - Store examples */}
                        <div className="w-1/2 grid grid-cols-2 gap-4">
                          {/* Store example 1 */}
                          <div className="bg-orange-500 rounded-lg p-4 text-white relative overflow-hidden">
                            <div className="text-xs font-bold mb-2">ESTAS</div>
                            <div className="text-xs">Loja de decoração</div>
                            <div className="absolute bottom-2 right-2 text-xs">🏪</div>
                          </div>
                          
                          {/* Store example 2 */}
                          <div className="bg-green-600 rounded-lg p-4 text-white relative overflow-hidden">
                            <div className="text-xs font-bold mb-2">PLUS</div>
                            <div className="text-xs">Loja de eletrônicos</div>
                            <div className="absolute bottom-2 right-2 text-xs">📱</div>
                          </div>
                          
                          {/* Store example 3 */}
                          <div className="bg-blue-600 rounded-lg p-4 text-white relative overflow-hidden">
                            <div className="text-xs font-bold mb-2">LINHA</div>
                            <div className="text-xs">Pet shop online</div>
                            <div className="absolute bottom-2 right-2 text-xs">🐕</div>
                          </div>
                          
                          {/* Store example 4 */}
                          <div className="bg-purple-600 rounded-lg p-4 text-white relative overflow-hidden">
                            <div className="text-xs font-bold mb-2">BRASIL</div>
                            <div className="text-xs">Moda e acessórios</div>
                            <div className="absolute bottom-2 right-2 text-xs">👕</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Default Browser Layout for other items */
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
              )}
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