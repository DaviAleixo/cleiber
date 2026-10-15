import React, { useState, useRef } from 'react';
import { MessageCircle, Clock, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5531984221327?text=Olá! Quero falar sobre meus direitos previdenciários.', '_blank');
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsLoading(true);
    
    // Configure essas variáveis no EmailJS:
    // SERVICE_ID: seu service ID do EmailJS
    // TEMPLATE_ID: seu template ID do EmailJS  
    // PUBLIC_KEY: sua public key do EmailJS
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Substitua pelo seu Service ID
      'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Substitua pela sua Public Key
    )
    .then(() => {
      setMessage('Mensagem enviada com sucesso! Retornaremos em breve.');
      form.current?.reset();
      setIsLoading(false);
    })
    .catch(() => {
      setMessage('Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.');
      setIsLoading(false);
    });
  };

  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Não perca mais tempo! Cada dia conta quando se trata dos seus direitos previdenciários.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-slate-200">
              <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <MessageCircle className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">WhatsApp</h3>
                <p className="text-slate-600">Atendimento direto e rápido</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-slate-200">
              <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <Clock className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Horário de Atendimento</h3>
                <p className="text-slate-600">Segunda à Sexta: 10h às 18h</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-slate-200">
              <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <MapPin className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Endereço</h3>
                <p className="text-slate-600">Avenida Professor Manoel Martins, N° 491, 2° Andar, Sala 222</p>
                <p className="text-slate-600">Bairro Campo Alegre, Conselheiro Lafaiete – MG</p>
                <p className="text-slate-600">CEP: 36.400-110</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-slate-200">
              <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <Phone className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Resposta Rápida</h3>
                <p className="text-slate-600">Retornamos em minutos</p>
              </div>
            </div>

            {/* Call to Action WhatsApp */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Atendimento Imediato
              </h3>
              <p className="text-slate-600 mb-4">
                Para casos urgentes, fale diretamente no WhatsApp
              </p>
              
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="bg-white rounded-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Envie uma Mensagem
            </h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="user_phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  id="user_phone"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                  placeholder="Descreva sua situação ou dúvida sobre direitos previdenciários..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
              
              {message && (
                <div className={`p-4 rounded-lg text-center ${
                  message.includes('sucesso') 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};