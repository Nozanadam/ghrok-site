import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Eye, Link as LinkIcon } from 'lucide-react';

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

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter 
    ? portfolioItems.filter(item => item.type === filter)
    : portfolioItems;

  return (
    <Section id="portfolio" className="bg-blue-950">
      <div className="space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Portfólio</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Conheça alguns dos nossos projetos recentes e veja como ajudamos empresas a alcançarem seus objetivos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === null
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                  : 'bg-blue-900/30 text-gray-300 hover:bg-blue-900/50 hover:text-white'
              }`}
              onClick={() => setFilter(null)}
            >
              Todos
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'landing-page'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                  : 'bg-blue-900/30 text-gray-300 hover:bg-blue-900/50 hover:text-white'
              }`}
              onClick={() => setFilter('landing-page')}
            >
              Landing Pages
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'automation'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                  : 'bg-blue-900/30 text-gray-300 hover:bg-blue-900/50 hover:text-white'
              }`}
              onClick={() => setFilter('automation')}
            >
              Automações
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'ai-integration'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                  : 'bg-blue-900/30 text-gray-300 hover:bg-blue-900/50 hover:text-white'
              }`}
              onClick={() => setFilter('ai-integration')}
            >
              Integrações IA
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-blue-900/20 border border-blue-800/30 hover:border-teal-500/30 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveItem(item)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    icon={<Eye size={16} />}
                    iconPosition="left"
                    className="bg-black/30 border-white/30 backdrop-blur-sm"
                    onClick={() => setActiveItem(item)}
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex space-x-2 mb-3">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-blue-900/50 text-teal-400 py-1 px-2 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="text-xs bg-blue-900/50 text-teal-400 py-1 px-2 rounded">
                      +{item.tags.length - 2}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">Nenhum projeto encontrado para este filtro.</p>
            <Button 
              onClick={() => setFilter(null)} 
              className="mt-4"
              variant="secondary"
            >
              Ver todos os projetos
            </Button>
          </div>
        )}
        
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-gradient-to-b from-blue-900 to-blue-950 border border-blue-800/30 rounded-xl max-w-4xl w-full overflow-hidden animate-scaleIn shadow-2xl">
              <div className="relative aspect-video">
                <img 
                  src={activeItem.image} 
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                  onClick={() => setActiveItem(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeItem.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-blue-900/50 text-teal-400 py-1 px-2 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{activeItem.title}</h3>
                <p className="text-gray-300 mb-6">{activeItem.description}</p>
                
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    icon={<LinkIcon size={16} />}
                    iconPosition="left"
                    onClick={() => setActiveItem(null)}
                  >
                    Ver Projeto Completo
                  </Button>
                  <Button 
                    href="#contact"
                    onClick={() => setActiveItem(null)}
                  >
                    Solicitar Projeto Similar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center pt-8">
          <Button 
            href="#contact" 
            size="lg"
            className="shadow-xl hover:shadow-teal-500/20 transition-all duration-300"
          >
            Quero um projeto personalizado
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;