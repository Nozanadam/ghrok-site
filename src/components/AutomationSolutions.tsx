import React from 'react';
import { Section } from './ui/Section';
import { Clock, Users, Target, TrendingUp, Calendar, MessageSquare, Heart, Gift } from 'lucide-react';

interface Solution {
  pain: string;
  solution: string;
  icon: React.ReactNode;
  color: string;
}

const solutions: Solution[] = [
  {
    pain: "Atendimento limitado a horário comercial",
    solution: "Atendimento automatizado 24/7",
    icon: <Clock className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500"
  },
  {
    pain: "Acúmulo de demandas em dias críticos (ex.: segunda-feira)",
    solution: "Gestão proativa de fluxo, com redistribuição inteligente",
    icon: <Users className="w-6 h-6" />,
    color: "from-teal-500 to-emerald-500"
  },
  {
    pain: "Dificuldade em entender o que o cliente procura",
    solution: "Segmentação automática por tipo de interesse/serviço",
    icon: <Target className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    pain: "Perda de clientes que entram em contato mas não convertem",
    solution: "Campanhas automatizadas por gatilhos (não agendou, cancelou, não compareceu)",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-orange-500 to-red-500"
  },
  {
    pain: "Esquecimento de reagendar ou acompanhar interações",
    solution: "Reagendamento automático e acompanhamento pós-atendimento",
    icon: <Calendar className="w-6 h-6" />,
    color: "from-green-500 to-teal-500"
  },
  {
    pain: "Falta de comunicação eficiente com equipe e clientes",
    solution: "Notificações dinâmicas e personalizadas (SMS, e-mail, app)",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500"
  },
  {
    pain: "Baixa fidelização pós-atendimento",
    solution: "Envio automático de instruções, vídeos e materiais personalizados",
    icon: <Heart className="w-6 h-6" />,
    color: "from-rose-500 to-pink-500"
  },
  {
    pain: "Relacionamento pouco humanizado",
    solution: "Mensagens automatizadas em datas especiais (ex.: aniversários)",
    icon: <Gift className="w-6 h-6" />,
    color: "from-violet-500 to-purple-500"
  }
];

const AutomationSolutions: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl parallax" data-speed="0.3"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl parallax" data-speed="0.5"></div>
      </div>
      
      <div className="relative z-10 space-y-16">
        <div className="text-center space-y-4 max-w-4xl mx-auto slide-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Transforme <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Dores</span> em <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Soluções</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Veja como nossas automações resolvem os principais desafios que sua empresa enfrenta no dia a dia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className="group bg-blue-900/30 border border-blue-800/30 rounded-xl p-6 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300 slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-sm font-medium text-red-400 mb-2">❌ Dor Comum:</h3>
                    <p className="text-gray-300">{item.pain}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-teal-400 mb-2">✅ Nossa Solução:</h3>
                    <p className="text-white font-medium">{item.solution}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-6 slide-in-up">
          <div className="bg-gradient-to-r from-teal-900/50 to-blue-900/50 border border-teal-800/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para Automatizar seu Negócio?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossas automações com n8n podem resolver essas dores e muito mais. 
              Agende uma conversa gratuita e descubra como podemos transformar seus processos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Agendar Consulta Gratuita
              </a>
              <a
                href="#n8n"
                className="px-8 py-3 bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500/10 font-medium rounded-lg transition-all duration-300"
              >
                Ver Demo do WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AutomationSolutions;