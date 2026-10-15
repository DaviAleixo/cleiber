import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'João Oliveira',
      text: 'Consegui me aposentar graças ao Dr. Cleiber! Processo rápido e resultado excelente.',
      initials: 'JO'
    },
    {
      name: 'Ana Santos',
      text: 'Atendimento humanizado e eficiente. Recomendo para todos que precisam de ajuda com o INSS.',
      initials: 'AS'
    },
    {
      name: 'Pedro Costa',
      text: 'Sempre disponível e atencioso. Conquistei meu BPC/LOAS com a ajuda da equipe.',
      initials: 'PC'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Depoimentos de Clientes
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Veja o que nossos clientes falam sobre nosso trabalho e dedicação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
              {/* Ícone de aspas */}
              <div className="bg-slate-100 p-2 rounded w-fit mb-4">
                <Quote className="w-5 h-5 text-slate-600" />
              </div>

              {/* Avaliação */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-slate-400 fill-current" />
                ))}
              </div>

              {/* Depoimento */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Cliente */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-medium mr-3">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Seja o Próximo Cliente Satisfeito
            </h3>
            <p className="text-slate-600 mb-6 text-lg max-w-2xl mx-auto">
              Junte-se aos centenas de brasileiros que já conquistaram seus direitos previdenciários com nossa ajuda
            </p>
            
            <button 
              onClick={() => window.open('https://wa.me/5531984221327?text=Olá! Vi os depoimentos e quero conquistar meus direitos previdenciários também.', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Quero Meu Direito Também
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};