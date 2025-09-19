import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import PortfolioSlider from './PortfolioSlider';

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-blue-950">
      <div className="space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projetos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Alta Performance</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Cada projeto é estrategicamente desenvolvido para <strong className="text-white">maximizar sua receita</strong> e acelerar o crescimento do seu negócio. Utilizamos tecnologia de ponta, design persuasivo e automações inteligentes para transformar visitantes em clientes e processos manuais em máquinas de vendas automatizadas.
          </p>
        </div>
        
        <PortfolioSlider />
        
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