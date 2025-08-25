import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Link } from './ui/Link';
import { Button } from './ui/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              GORK TECNOLOGIA
            </div>
            
            <p className="text-gray-400">
              Transformando ideias em soluções tecnológicas que geram resultados reais para o seu negócio.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#n8n" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Automações com n8n
                </Link>
              </li>
              <li>
                <Link href="#landing-pages" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="#ai-integrations" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Integrações com IA
                </Link>
              </li>
              <li>
                <Link href="#cloud" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Soluções Cloud
                </Link>
              </li>
              <li>
                <Link href="#sites" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Sites Institucionais
                </Link>
              </li>
              <li>
                <Link href="#integrations" className="text-gray-400 hover:text-teal-400 transition-colors">
                  CRM e ERP
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400">
              Inscreva-se para receber nossas atualizações, dicas e novidades.
            </p>
            
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2.5 bg-blue-900/50 border border-blue-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
              />
              <Button variant="primary" className="w-full">
                Inscrever-se
              </Button>
            </div>
            
            <div className="flex items-center space-x-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Precisa de ajuda?</p>
                <p className="text-white">contato@gorktecnologia.com.br</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} GORK TECNOLOGIA. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
              Desenvolvido com ❤️ pela equipe GORK
            </Link>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Float Button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;