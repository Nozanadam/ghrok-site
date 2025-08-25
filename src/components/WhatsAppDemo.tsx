import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Send, CheckCheck, Bot, RefreshCw, AreaChart } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Olá! eu sou Marcelo sou atendente da GORK TECNOLOGIA. Como posso ajudar você hoje?",
    sender: 'bot',
    timestamp: new Date(),
  }
];

const responseOptions = [
  "Tenho interesse em automações com n8n para minha empresa",
  "Quero desenvolver uma landing page de alta conversão",
  "Preciso de um orçamento para integração com IA"
];

const WhatsAppDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSendMessage = (text: string = newMessage) => {
    if (!text.trim()) return;
    
    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    setSelectedOption(null);
    
    // Bot responds after a delay to simulate typing
    setTimeout(() => {
      let response = '';
      
      if (text.toLowerCase().includes('automação') || text.toLowerCase().includes('n8n')) {
        response = "Ótimo! Nossas automações com n8n podem aumentar a eficiência da sua empresa em até 70%. Podemos integrar sistemas, automatizar tarefas repetitivas e criar fluxos de trabalho personalizados. Gostaria de agendar uma demonstração?";
      } else if (text.toLowerCase().includes('landing') || text.toLowerCase().includes('página')) {
        response = "Nossas landing pages são projetadas para alta conversão, com layout otimizado, tempos de carregamento rápidos e CTA eficientes. Em média, nossos clientes veem um aumento de 30% nas taxas de conversão. Posso enviar alguns exemplos do nosso portfólio?";
      } else if (text.toLowerCase().includes('ia') || text.toLowerCase().includes('inteligência')) {
        response = "Trabalhamos com integrações de IA usando Google Gemini, ChatGPT e outros modelos para criar soluções personalizadas. Desde chatbots inteligentes até sistemas de análise preditiva. Como você imagina usar IA no seu negócio?";
      } else if (text.toLowerCase().includes('orçamento') || text.toLowerCase().includes('preço')) {
        response = "Para fornecer um orçamento preciso, precisamos entender melhor suas necessidades. Posso agendar uma conversa com nossa equipe de consultoria? Eles poderão avaliar seu projeto e fornecer uma proposta detalhada.";
      } else {
        response = "Obrigado pelo seu contato! Para melhor atendê-lo, poderia me contar um pouco mais sobre seu projeto ou necessidade? Ou, se preferir, posso conectá-lo com um especialista da nossa equipe.";
      }
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    handleSendMessage(option);
  };

  const resetChat = () => {
    setMessages(initialMessages);
    setNewMessage('');
    setIsTyping(false);
    setSelectedOption(null);
  };

  return (
    <section id="n8n" className="py-20 bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Automações com <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">WhatsApp</span> Humanizado
          </h2>
          <p className="text-gray-300 text-lg">
            Veja como funciona na prática uma automação de WhatsApp que parece uma conversa humana, mas é totalmente automatizada com n8n.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Benefícios das Automações n8n</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-900/30 border border-blue-800/30 rounded-lg p-5 backdrop-blur-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-900/50 flex items-center justify-center mr-4">
                    <Bot size={20} className="text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Chatbots Humanizados</h4>
                    <p className="text-gray-300">
                      Atendimento 24/7 com respostas naturais que simulam a conversa humana, utilizando processamento de linguagem natural.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-900/30 border border-blue-800/30 rounded-lg p-5 backdrop-blur-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-4">
                    <RefreshCw size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Fluxos Automatizados</h4>
                    <p className="text-gray-300">
                      Integração com CRM, agendamento de reuniões, qualificação de leads e acompanhamento automático de clientes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-900/30 border border-blue-800/30 rounded-lg p-5 backdrop-blur-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-4">
                    <AreaChart size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Métricas e Análises</h4>
                    <p className="text-gray-300">
                      Acompanhe o desempenho de suas automações com dashboards detalhados e relatórios em tempo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto max-w-xs md:max-w-sm">
            {/* Smartphone frame */}
            <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800">
              {/* Screen */}
              <div className="relative bg-gray-100 rounded-2xl h-[600px] overflow-hidden">
                {/* WhatsApp header */}
                <div className="bg-teal-600 text-white p-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center">
                      <span className="text-xl font-semibold">G</span>
                    </div>
                    <div>
                      <p className="font-semibold">GORK TECNOLOGIA</p>
                      <p className="text-xs text-teal-200">{isTyping ? 'digitando...' : 'online'}</p>
                    </div>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="bg-[url('https://i.pinimg.com/originals/97/c0/07/97c00759d90d786d9b6096d274ad3e07.png')] h-[480px] overflow-y-auto p-3 space-y-3">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-green-100 ml-auto rounded-tr-none' 
                          : 'bg-white mr-auto rounded-tl-none'
                      }`}
                    >
                      <p className={message.sender === 'user' ? 'text-gray-800' : 'text-gray-800'}>
                        {message.text}
                      </p>
                      <div className="flex justify-end items-center mt-1 space-x-1">
                        <p className="text-xs text-gray-500">
                          {`${message.timestamp.getHours().toString().padStart(2, '0')}:${message.timestamp.getMinutes().toString().padStart(2, '0')}`}
                        </p>
                        {message.sender === 'user' && (
                          <CheckCheck size={14} className="text-blue-500" />
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="max-w-[80%] bg-white rounded-lg rounded-tl-none p-3 mr-auto animate-pulse">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Quick replies */}
                {!selectedOption && !isTyping && messages.length < 4 && (
                  <div className="absolute bottom-[60px] left-0 right-0 px-3 space-y-2">
                    {responseOptions.map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left bg-white text-gray-800 rounded-full py-2 px-4 text-sm border border-gray-300 hover:bg-gray-100 transition-colors"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Input area */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-200 p-2 flex items-center">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Digite uma mensagem..."
                    className="flex-1 bg-white rounded-full py-2 px-4 text-gray-800 focus:outline-none"
                  />
                  <button 
                    onClick={() => handleSendMessage()}
                    className="ml-2 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Demo controls */}
            <div className="mt-4 flex justify-center">
              <button 
                onClick={resetChat}
                className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
              >
                <RefreshCw size={16} className="mr-2" />
                Reiniciar demo
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatsAppDemo;