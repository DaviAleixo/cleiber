import React from 'react';
import { FileSearch, Scale, Shield, Headphones } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: FileSearch,
      title: 'Processos',
      description: 'A aposentadoria começa com um bom planejamento: análise do seu tempo de contribuição, idade, tipo de benefício e documentação.',
    },
    {
      icon: Scale,
      title: 'Direitos',
      description: 'Todo trabalhador tem direito à aposentadoria, mas nem sempre o INSS reconhece o que é justo.',
    },
    {
      icon: Shield,
      title: 'Proteção',
      description: 'Ter um advogado é sua maior proteção contra erros, negativas injustas e prejuízos financeiros.',
    },
    {
      icon: Headphones,
      title: 'Suporte',
      description: 'Acompanhamento completo desde a primeira análise até o recebimento do benefício.',
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Como Funciona a Aposentadoria
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Entenda o processo de aposentadoria e garanta seus direitos previdenciários com segurança
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center h-full">
                <div className="bg-slate-100 p-6 rounded-lg mb-6 hover:bg-slate-200 transition-colors h-full flex flex-col">
                  <Icon className="w-8 h-8 text-slate-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Pronto para Garantir Seus Direitos?
            </h3>
            <p className="text-slate-600 mb-6 text-lg max-w-2xl mx-auto">
              Não deixe para depois. Cada dia perdido pode significar menos dinheiro na sua aposentadoria.
            </p>
            
            <button 
              onClick={() => window.open('https://wa.me/5531984221327?text=Olá! Quero garantir meus direitos previdenciários.', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};