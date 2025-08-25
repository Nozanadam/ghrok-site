import React, { useState } from 'react';
import { Bot, Code, Globe, BrainCircuit, ArrowUpRight, RefreshCw, AreaChart, Cloud, Database, Smartphone, Building2, Server } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'n8n',
    title: 'Automações com n8n',
    description: 'Automatize processos repetitivos e integre seus sistemas com soluções personalizadas.',
    icon: <Bot className="w-6 h-6" />,
    color: 'from-teal-500 to-emerald-500',
    features: [
      'Chatbots de WhatsApp humanizados',
      'Automação de processos de negócio',
      'Integração entre múltiplas plataformas',
      'Redução de tarefas manuais e erros'
    ]
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages de Alta Conversão',
    description: 'Desenvolva páginas otimizadas para converter visitantes em leads e clientes.',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
    features: [
      'Design focado em conversão',
      'Otimização para dispositivos móveis',
      'Testes A/B para maximizar resultados',
      'Integração com ferramentas de análise'
    ]
  },
  {
    id: 'ai-integrations',
    title: 'Integrações com IA',
    description: 'Potencialize seu negócio com soluções inteligentes usando Gemini, ChatGPT e outros modelos.',
    icon: <BrainCircuit className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Assistentes virtuais personalizados',
      'Análise preditiva de dados',
      'Processamento de linguagem natural',
      'Sistemas de recomendação inteligentes'
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Aplicativos Android',
    description: 'Desenvolvimento de aplicativos Android nativos e multiplataforma com as últimas tecnologias.',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    features: [
      'Apps nativos Android',
      'Desenvolvimento React Native',
      'Integração com APIs RESTful',
      'Push notifications e geolocalização'
    ]
  },
  {
    id: 'crm-erp',
    title: 'Sistemas CRM e ERP',
    description: 'Soluções personalizadas de CRM e ERP para otimizar seus processos empresariais.',
    icon: <Building2 className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    features: [
      'Gestão de relacionamento com clientes',
      'Controle financeiro e estoque',
      'Automação de processos internos',
      'Relatórios e dashboards personalizados'
    ]
  },
  {
    id: 'gcp-services',
    title: 'Serviços Google Cloud',
    description: 'Implementação e gerenciamento de soluções na Google Cloud Platform.',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-blue-600 to-blue-400',
    features: [
      'Computação em nuvem',
      'Big Data e análise',
      'Machine Learning com Vertex AI',
      'Soluções serverless'
    ]
  },
  {
    id: 'corporate-websites',
    title: 'Sites Institucionais',
    description: 'Websites profissionais e modernos que representam a identidade da sua empresa.',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    features: [
      'Design responsivo e moderno',
      'Otimização para SEO',
      'Integração com redes sociais',
      'Painel administrativo personalizado'
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Infraestrutura Cloud',
    description: 'Arquitetura e implementação de soluções em nuvem escaláveis e seguras.',
    icon: <Server className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    features: [
      'Arquitetura de microsserviços',
      'Containerização com Docker',
      'Orquestração com Kubernetes',
      'CI/CD e DevOps'
    ]
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <Section id="services" className="relative overflow-hidden bg-blue-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Soluções</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Combinamos tecnologia de ponta com estratégias inovadoras para criar soluções que impulsionam o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-gradient-to-b from-blue-900/50 to-blue-950/50 border border-blue-800/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-sm hover:-translate-y-1"
              onClick={() => setSelectedService(service)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <Button 
                variant="text" 
                className="inline-flex items-center text-teal-400 hover:text-teal-300 group-hover:translate-x-1 transition-transform duration-300"
                icon={<ArrowUpRight size={16} />}
                iconPosition="right"
                onClick={() => setSelectedService(service)}
              >
                Saiba mais
              </Button>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-gradient-to-b from-blue-900 to-blue-950 border border-blue-800/30 rounded-xl max-w-2xl w-full p-6 md:p-8 animate-scaleIn shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedService.color} flex items-center justify-center`}>
                    {selectedService.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                </div>
                <button 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => setSelectedService(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-300 mb-6">{selectedService.description}</p>
              
              <h4 className="text-lg font-semibold text-white mb-4">Recursos Principais:</h4>
              <ul className="space-y-3 mb-6">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 text-teal-400 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex space-x-4">
                <Button href="#contact" icon={<ArrowUpRight size={16} />} iconPosition="right">
                  Solicitar Proposta
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => setSelectedService(null)}
                >
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Services;