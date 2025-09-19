import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'lp1',
    title: 'Landing Page Profissional 1',
    description: 'Landing page de alta conversão com design moderno e otimizado para resultados.',
    image: '/assets/LP1.jpg',
    tags: ['Landing Page', 'Conversão', 'Design Moderno']
  },
  {
    id: 'lp2',
    title: 'Landing Page Profissional 2',
    description: 'Página de vendas otimizada com foco em captação de leads qualificados.',
    image: '/assets/LP2.jpg',
    tags: ['Landing Page', 'Vendas', 'Lead Generation']
  },
  {
    id: 'lp3',
    title: 'Landing Page Profissional 3',
    description: 'Design responsivo e estratégico para maximizar conversões e engajamento.',
    image: '/assets/LP3.jpg',
    tags: ['Landing Page', 'Responsivo', 'Engajamento']
  },
  {
    id: 'lp4',
    title: 'Landing Page Profissional 4',
    description: 'Solução completa com integração de sistemas e automações avançadas.',
    image: '/assets/LP4.jpg',
    tags: ['Landing Page', 'Integração', 'Automação']
  },
  {
    id: 'lp5',
    title: 'Landing Page Profissional 5',
    description: 'Interface moderna com foco em experiência do usuário e performance.',
    image: '/assets/LP5.jpg',
    tags: ['Landing Page', 'UX/UI', 'Performance']
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
      <div className="relative h-[600px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="min-w-full h-full relative">
              {/* Browser mockup container */}
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
                  {/* Landing page image */}
                  <div className="relative h-full">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                      style={{
                        objectPosition: 'center top',
                        maxHeight: '100%'
                      }}
                    />
                    
                    {/* Overlay with project info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90 mb-4 line-clamp-2">{item.description}</p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="bg-teal-500/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* GORK branding */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-sm font-bold text-gray-800">GORK TECNOLOGIA</span>
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