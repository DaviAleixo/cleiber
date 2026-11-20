import React from 'react';
import { FileSearch, Scale, Shield, Headphones, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '@/lib/analytics';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: FileSearch,
      title: 'Planejamento e Análise',
      description:
        'A aposentadoria começa com um diagnóstico detalhado: análise do seu tempo de contribuição, idade, regras de transição e conferência completa do CNIS.',
    },
    {
      step: '02',
      icon: Scale,
      title: 'Reconhecimento de Direitos',
      description:
        'Todo trabalhador tem direito ao melhor benefício, mas com frequência o INSS desconsidera períodos especiais, vínculos rurais ou contribuições antigas.',
    },
    {
      step: '03',
      icon: Shield,
      title: 'Blindagem e Proteção',
      description:
        'A assessoria jurídica previne erros, contesta negativas injustas e impede prejuízos financeiros que durariam pelo resto da sua vida.',
    },
    {
      step: '04',
      icon: Headphones,
      title: 'Acompanhamento Integral',
      description:
        'Suporte contínuo desde a análise documental até a implantação definitiva do benefício e o recebimento dos valores retroativos devidos.',
    },
  ];

  const handleWhatsAppClick = () => {
    openWhatsApp(
      'how_it_works_garantir_direitos',
      'Olá Dr. Cleiber! Quero entender como funciona o processo para garantir minha aposentadoria/benefício.'
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-[#071322] text-white relative overflow-hidden">
      {/* Luz ambiente de fundo estilo Verum */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho estilo Verum */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-[#d8b577] uppercase backdrop-blur-sm">
            CONSULTORIA ESPECIALIZADA
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Como Funciona a Conquista da Sua Aposentadoria
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Entenda cada etapa do processo e conquiste seus direitos previdenciários com máxima segurança jurídica.
          </p>
        </div>

        {/* Grade de 4 Pilares estilo Verum com números no canto */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between bg-[#091627] p-7 sm:p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-[#0d1f36] hover:border-[#c5a059]/40 hover:-translate-y-1 group"
              >
                {/* Número no canto superior esquerdo estilo Verum */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-mono font-bold text-[#d8b577] rounded">
                    {item.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#d8b577] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#d8b577] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center text-xs font-semibold text-slate-400 group-hover:text-[#d8b577] transition-colors">
                  <span>Etapa essencial</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Card Estilo Verum */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#0c1b30] via-[#091627] to-[#0c1b30] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-[#c5a059]/30">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 tracking-tight text-white">
              Pronto para Garantir Seus Direitos?
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
              Não deixe para depois. Cada mês de atraso pode significar perdas financeiras irreversíveis na sua renda mensal.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1b6b3a] hover:bg-[#155a30] text-white font-bold text-base shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group"
            >
              <img src="/wpp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
              <span>Falar com Especialista Agora</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
