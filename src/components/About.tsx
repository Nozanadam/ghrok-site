import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle, Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">GORK TECNOLOGIA</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Somos uma empresa especializada em soluções tecnológicas inovadoras que impulsionam o crescimento e a eficiência dos nossos clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Nossa Missão</h3>
            <p className="text-gray-300">
              Transformar ideias em soluções tecnológicas que geram resultados reais. Combinamos criatividade, expertise técnica e conhecimento de negócios para desenvolver tecnologias que impulsionam o crescimento das empresas.
            </p>
            
            <h3 className="text-2xl font-bold text-white">Nossa Visão</h3>
            <p className="text-gray-300">
              Ser referência em inovação tecnológica, criando soluções que antecipam tendências e necessidades do mercado, sempre com foco na geração de valor para nossos clientes.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-white mb-4">Por que nos escolher:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-300">Equipe especializada com ampla experiência em tecnologia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-300">Soluções personalizadas para cada negócio</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-300">Compromisso com resultados mensuráveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-300">Suporte contínuo e acompanhamento de projetos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-300">Uso das tecnologias mais avançadas do mercado</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-900/30 border border-blue-800/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">50+</h4>
                <p className="text-gray-300">Clientes satisfeitos</p>
              </div>
              
              <div className="bg-blue-900/30 border border-blue-800/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">100+</h4>
                <p className="text-gray-300">Projetos entregues</p>
              </div>
              
              <div className="bg-blue-900/30 border border-blue-800/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">5+</h4>
                <p className="text-gray-300">Anos de experiência</p>
              </div>
              
              <div className="bg-blue-900/30 border border-blue-800/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">30%</h4>
                <p className="text-gray-300">Aumento médio em conversões</p>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-blue-900/50 to-teal-900/50 rounded-xl border border-blue-800/30 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-white mb-4">Tecnologias que dominamos</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">n8n</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">React</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">Python</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">GCP</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">AWS</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">TensorFlow</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">OpenAI</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">Firebase</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">MongoDB</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">Supabase</span>
                <span className="bg-blue-800/30 text-teal-400 py-1.5 px-3 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;