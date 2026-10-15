import React from 'react';
import { AlertTriangle, MessageCircle } from 'lucide-react';

export const Problems: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5531984221327?text=Olá! Estou enfrentando problemas com meu benefício do INSS e preciso de ajuda.', '_blank');
  };

  const problems = [
    'INSS negou seu benefício?',
    'Está com dúvidas sobre quando ou como se aposentar?',
    'Acha que o valor da sua aposentadoria está errado?',
    'Está em dúvida se tem direito ao benefício BPC/LOAS?',
    'Está inseguro sobre seus direitos?'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Você enfrenta algum desses problemas?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Milhares de pessoas enfrentam os mesmos desafios com o INSS diariamente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Lista de Problemas */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="bg-slate-100 p-2 rounded">
                  <AlertTriangle className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">{problem}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solução */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                A Solução Está Aqui
              </h3>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Milhares de pessoas</span> enfrentam os mesmos problemas todos os dias — mas com apoio jurídico especializado, é possível reverter decisões do INSS.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Você não precisa lidar sozinho.</span> Nosso time está pronto para analisar seu caso e indicar o melhor caminho.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Atendimento especializado</span> direto com advogado previdenciário — rápido, humano e sem enrolação.
              </p>
            </div>

            <button 
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Conversar com Advogado</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};