import React from 'react';
import { Heart, Users, Shield, FileText, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: 'Auxílio-Doença',
      description: 'Auxílio-Doença concedido rapidamente',
      detail: 'Para quem está temporariamente incapacitado para o trabalho devido a doença ou acidente.'
    },
    {
      icon: Users,
      title: 'Pensão',
      description: 'Pensão garantida por lei',
      detail: 'Benefício para dependentes de segurados falecidos, com direito assegurado.'
    },
    {
      icon: Shield,
      title: 'LOAS',
      description: 'LOAS para quem precisa',
      detail: 'Benefício assistencial para idosos e pessoas com deficiência em vulnerabilidade.'
    },
    {
      icon: FileText,
      title: 'Aposentadoria',
      description: 'Defesa dos seus direitos',
      detail: 'Análise completa do seu caso para garantir a melhor aposentadoria possível.'
    }
  ];

  const handleWhatsAppClick = (service: string) => {
    window.open(`https://wa.me/5531984221327?text=Olá! Gostaria de saber mais sobre ${service}.`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Nossos Benefícios
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Especialistas em conquistar os direitos que você tem, mas o INSS não reconhece
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-md transition-all duration-300 flex flex-col h-full">
                {/* Ícone */}
                <div className="bg-white p-3 rounded-lg w-fit mb-4 border border-slate-200">
                  <Icon className="w-6 h-6 text-slate-700" />
                </div>
                
                {/* Título */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                
                {/* Descrição breve */}
                <p className="text-slate-700 font-medium mb-3">
                  {service.description}
                </p>
                
                {/* Detalhes */}
                <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-1">
                  {service.detail}
                </p>

                {/* Botão de ação */}
                <button 
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium py-3 px-4 rounded transition-colors flex items-center justify-between mt-auto"
                >
                  <span>Solicitar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Seção de garantia */}
        <div className="mt-16 bg-slate-50 rounded-lg p-8 text-center border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Atendimento Jurídico Especializado
          </h3>
          <p className="text-slate-700 mb-6 text-lg max-w-3xl mx-auto">
            Nossa experiência e dedicação garantem o melhor resultado para conquistar seus direitos previdenciários.
          </p>
          
          <button 
            onClick={() => window.open('https://wa.me/5531984221327?text=Olá! Quero conversar sobre meu caso previdenciário.', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Conversar Sobre Meu Caso
          </button>
        </div>
      </div>
    </section>
  );
};