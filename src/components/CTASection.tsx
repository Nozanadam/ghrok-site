import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CheckCircle, Calendar, X, Sparkles } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  availableTime: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  availableTime: '',
};

const CTASection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*Agendamento de Demonstração - GORK TECNOLOGIA*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Horário Disponível:* ${getTimeLabel(formData.availableTime)}

*Solicitação:* Demonstração gratuita e personalizada

---
Enviado através do site gorktecnologia.com.br`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/5531932886055?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setFormSubmitted(true);
    setFormData(initialFormData);
    
    // Reset success message and close form after delay
    setTimeout(() => {
      setFormSubmitted(false);
      setShowForm(false);
    }, 3000);
  };

  const getTimeLabel = (value: string) => {
    const timeLabels: { [key: string]: string } = {
      'manha': 'Manhã (09:00 - 12:00)',
      'tarde': 'Tarde (13:00 - 17:00)',
      'noite': 'Noite (18:00 - 20:00)',
      'flexivel': 'Horário flexível'
    };
    return timeLabels[value] || value;
  };

  const openForm = () => {
    setShowForm(true);
    setFormSubmitted(false);
  };

  const closeForm = () => {
    setShowForm(false);
    setFormData(initialFormData);
    setFormSubmitted(false);
  };

  return (
    <>
      <Section className="bg-gradient-to-br from-teal-900 via-blue-900 to-blue-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl parallax" data-speed="0.3"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl parallax" data-speed="0.5"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-xl parallax" data-speed="0.2"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto slide-in-up">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-teal-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Descubra como a automação pode transformar o seu negócio
              </h2>
              <Sparkles className="w-6 h-6 text-teal-400" />
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Quer visualizar, na prática, como nossas soluções funcionariam no seu dia a dia?
              Agende uma apresentação gratuita e personalizada — adaptada às dores e necessidades que você já compartilhou.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Demonstração prática do CRM/ERP ou Landing Page</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Soluções aplicadas ao seu cenário real</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Sem custo, sem compromisso</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Insights para otimizar processos e reduzir custos</span>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              onClick={openForm}
              size="lg"
              className="text-lg px-10 py-4 shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105"
              icon={<Calendar size={20} />}
              iconPosition="left"
            >
              👉 Agendar minha demonstração gratuita
            </Button>
          </div>
        </div>
      </Section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-gradient-to-b from-blue-900 to-blue-950 border border-blue-800/30 rounded-xl max-w-md w-full p-6 md:p-8 animate-scaleIn shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Agendar Demonstração</h3>
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={closeForm}
              >
                <X size={24} />
              </button>
            </div>
            
            {formSubmitted ? (
              <div className="bg-teal-900/50 border border-teal-800 rounded-lg p-6 text-center animate-fadeIn">
                <CheckCircle className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <p className="font-medium text-teal-300 mb-2">Demonstração agendada com sucesso!</p>
                <p className="text-sm text-teal-400">
                  Nossa equipe entrará em contato em breve para confirmar o horário.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="availableTime" className="block text-sm font-medium text-gray-300 mb-2">
                    Horário Disponível *
                  </label>
                  <select
                    id="availableTime"
                    name="availableTime"
                    required
                    value={formData.availableTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 appearance-none"
                  >
                    <option value="" disabled>Selecione o melhor horário</option>
                    <option value="manha">Manhã (09:00 - 12:00)</option>
                    <option value="tarde">Tarde (13:00 - 17:00)</option>
                    <option value="noite">Noite (18:00 - 20:00)</option>
                    <option value="flexivel">Horário flexível</option>
                  </select>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <Button 
                    type="submit"
                    className="flex-1"
                    disabled={isSubmitting}
                    icon={<Calendar size={16} />}
                    iconPosition="left"
                  >
                    {isSubmitting ? 'Agendando...' : 'Confirmar Agendamento'}
                  </Button>
                  <Button 
                    type="button"
                    variant="secondary" 
                    onClick={closeForm}
                    className="px-6"
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CTASection;