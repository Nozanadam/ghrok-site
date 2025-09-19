import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `Olá, gostaria de obter mais informações sobre ${getServiceLabel(formData.service)} oferecidas pela GORK TECNOLOGIA.

Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Serviço de interesse: ${getServiceLabel(formData.service)}

${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/553193288605?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setFormSubmitted(true);
    setFormData(initialFormData);
    
    // Reset success message after a delay
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const getServiceLabel = (value: string) => {
    const serviceLabels: { [key: string]: string } = {
      'automation': 'as soluções em Automação com n8n',
      'landing-page': 'as soluções em Landing Pages',
      'ai-integration': 'as soluções em Integração com IA',
      'cloud': 'as soluções em Cloud',
      'website': 'as soluções em Sites Institucionais',
      'crm-erp': 'as soluções em CRM/ERP',
      'mobile-app': 'as soluções em Aplicativos Android',
      'gcp-services': 'as soluções em Google Cloud',
      'other': 'outras soluções'
    };
    return serviceLabels[value] || 'as soluções';
  };

  return (
    <Section id="contact" className="bg-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Contato</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Estamos prontos para ajudar você a transformar sua ideia em realidade. Entre em contato e vamos conversar sobre seu projeto.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-blue-800/30 border border-blue-700/30 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6">Envie sua Mensagem</h3>
            
            {formSubmitted ? (
              <div className="bg-teal-900/50 border border-teal-800 rounded-lg p-4 text-teal-300 animate-fadeIn">
                <p className="font-medium">Mensagem enviada com sucesso!</p>
                <p className="text-sm mt-1">Agradecemos seu contato. Nossa equipe retornará em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 appearance-none"
                  >
                    <option value="" disabled>Selecione um serviço</option>
                    <option value="automation">Automação com n8n</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="ai-integration">Integração com IA</option>
                    <option value="cloud">Soluções Cloud</option>
                    <option value="website">Site Institucional</option>
                    <option value="crm-erp">CRM/ERP</option>
                    <option value="mobile-app">Aplicativo Android</option>
                    <option value="gcp-services">Serviços Google Cloud</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full"
                  icon={<Send size={16} />}
                  iconPosition="right"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;