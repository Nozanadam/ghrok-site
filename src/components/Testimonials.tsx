import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Silva',
    position: 'CEO',
    company: 'TechSolutions',
    text: 'A automatização do nosso processo de atendimento com n8n revolucionou nossa empresa. Os chatbots humanizados da GORK TECNOLOGIA aumentaram nossa capacidade de atendimento em 300% e melhoraram a satisfação dos clientes.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Ana Ferreira',
    position: 'Diretora de Marketing',
    company: 'Grupo Nexus',
    text: 'As landing pages desenvolvidas pela equipe da GORK superaram todas as nossas expectativas. Nossa taxa de conversão aumentou 40% já no primeiro mês após a implementação. O design é incrível e o suporte técnico é excepcional.',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Marcelo Costa',
    position: 'CTO',
    company: 'InnovateTech',
    text: 'A integração com IA que a GORK implementou em nosso sistema transformou completamente nossa capacidade de análise de dados. A solução personalizada se adaptou perfeitamente às nossas necessidades específicas.',
    image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Juliana Santos',
    position: 'Diretora de Operações',
    company: 'Grupo Evotech',
    text: 'A implementação do ERP customizado pela GORK mudou completamente nossa gestão interna. Processos que demoravam dias agora são feitos em horas. O ROI do projeto foi alcançado em apenas quatro meses.',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Section className="bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">clientes</span> dizem
          </h2>
          <p className="text-gray-300 text-lg">
            Conheça as histórias de sucesso de quem já transformou seu negócio com nossas soluções.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-10 left-10 text-teal-500/20">
            <Quote size={120} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div
              className={`transition-all duration-500 ${
                isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="bg-blue-900/30 border border-blue-800/30 rounded-xl p-8 md:p-10 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-teal-500/20 flex-shrink-0">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-gray-300 text-lg italic mb-6">"{testimonials[activeIndex].text}"</p>
                    
                    <div>
                      <p className="text-white font-semibold">{testimonials[activeIndex].name}</p>
                      <p className="text-teal-400">
                        {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-teal-400 w-8'
                      : 'bg-blue-700 hover:bg-blue-600'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-blue-900/50 text-white hover:bg-teal-900/50 hover:text-teal-400 transition-colors flex items-center justify-center"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-blue-900/50 text-white hover:bg-teal-900/50 hover:text-teal-400 transition-colors flex items-center justify-center"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;