import React from 'react';
import { ArrowRight, Bot, Globe, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { Container } from './ui/Container';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl parallax" data-speed="0.3"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl parallax" data-speed="0.5"></div>
        <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-purple-500/20 rounded-full blur-xl parallax" data-speed="0.2"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      <Container className="relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-900/30 border border-blue-800/50 rounded-full text-sm font-medium text-teal-400 backdrop-blur-sm animate-fadeIn slide-in-up">
              Transformação Digital para o seu Negócio
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white slide-in-left">
              Soluções <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">inovadoras</span> que impulsionam resultados
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl slide-in-left">
              Especialistas em automações com n8n, landing pages de alta conversão e integrações com IA para otimizar seus processos e aumentar seus resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 slide-in-left">
              <Button 
                href="#contact" 
                size="lg" 
                icon={<ArrowRight size={20} />} 
                iconPosition="right"
              >
                Comece Agora
              </Button>
              <Button 
                href="#services" 
                variant="outline" 
                size="lg"
              >
                Conheça Nossos Serviços
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 slide-in-up">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-900/50 flex items-center justify-center">
                  <Bot size={20} className="text-teal-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Automações Inteligentes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                  <Globe size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Soluções Web</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center">
                  <Zap size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Integrações IA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative slide-in-right">
            <div className="relative bg-gradient-to-tr from-blue-950/80 to-teal-950/80 rounded-2xl p-1 shadow-2xl animate-float backdrop-blur-sm">
              <div className="bg-gradient-to-br from-blue-900/30 to-teal-900/30 backdrop-blur-sm rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8088451/pexels-photo-8088451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="IA and Automation" 
                  className="w-full h-auto rounded-xl mix-blend-luminosity opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg blur-2xl opacity-20 parallax" data-speed="0.8"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 parallax" data-speed="0.6"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;