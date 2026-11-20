import React from 'react';
import { Heart, Users, Shield, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '@/lib/analytics';

export const Services: React.FC = () => {
  const services = [
    {
      num: '01',
      icon: Heart,
      title: 'Auxílio-Doença',
      subtitle: 'Incapacidade Temporária',
      detail: 'Para quem está temporariamente impossibilitado de exercer sua atividade profissional por motivo de doença ou acidente de qualquer natureza.',
      points: ['Preparação e conferência de laudos', 'Recurso contra perícia desfavorável', 'Acompanhamento até a concessão'],
    },
    {
      num: '02',
      icon: Users,
      title: 'Pensão por Morte',
      subtitle: 'Proteção aos Dependentes',
      detail: 'Garantia de amparo financeiro aos dependentes do segurado falecido (cônjuge, filhos ou dependentes econômicos comprovados).',
      points: ['Comprovação de união estável e dependência', 'Cálculo da cota correta de rateio', 'Reversão de indeferimentos injustos'],
    },
    {
      num: '03',
      icon: Shield,
      title: 'BPC / LOAS',
      subtitle: 'Benefício Assistencial',
      detail: 'Um salário mínimo mensal pago a idosos com 65 anos ou mais e pessoas com deficiência em situação de vulnerabilidade, sem exigência de contribuição prévia.',
      points: ['Adequação aos critérios do CadÚnico', 'Comprovação da vulnerabilidade e deficiência', 'Agilidade administrativa e judicial'],
    },
    {
      num: '04',
      icon: FileText,
      title: 'Aposentadorias e Revisões',
      subtitle: 'Conquista do Melhor Valor',
      detail: 'Análise minuciosa de idade, tempo de contribuição, regras de transição favoráveis e revisão de cálculos de benefícios já concedidos.',
      points: ['Aposentadoria por tempo, idade ou especial', 'Conversão de período insalubre e rural', 'Revisão da vida toda e cálculos de RMI'],
    },
  ];

  const handleWhatsAppClick = (service: string) => {
    openWhatsApp(
      `services_${service.toLowerCase().replace(/\s+/g, '_')}`,
      `Olá Dr. Cleiber! Gostaria de consultar sobre o benefício de ${service}.`
    );
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#faf6f0] relative border-b border-[#ebdcc7]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho no Estilo Verum */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c5a059]/30 bg-[#fbf6ed] px-4 py-1.5 text-[11px] font-semibold tracking-widest text-[#8e6b33] uppercase mb-4 shadow-2xs">
            <span>ÁREAS DE ATUAÇÃO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1524] tracking-tight leading-tight mb-4">
            Benefícios Previdenciários Conquistados com Segurança
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Atuação técnica especializada para conquistar os direitos que você trabalhou a vida toda para ter.
          </p>
        </div>

        {/* Grade de 4 Serviços com Cartões Elegantes Estilo Verum */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-7 border border-[#ebdcc7] shadow-sm hover:border-[#c5a059] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Cabeçalho do Card com número no canto estilo Verum */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#faf3e7] border border-[#ebdcc7] text-[#8e6b33] group-hover:bg-[#0c1524] group-hover:text-[#c5a059] group-hover:border-[#0c1524] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono font-bold text-xs px-2.5 py-1 rounded bg-[#fbf6ed] border border-[#ebdcc7] text-[#8e6b33]">
                      {item.num}
                    </span>
                  </div>

                  {/* Título & Subtítulo */}
                  <h3 className="font-serif font-bold text-xl text-[#0c1524] mb-1 group-hover:text-[#b0874a] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8e6b33] font-semibold mb-4">
                    {item.subtitle}
                  </p>

                  {/* Descrição */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {item.detail}
                  </p>

                  {/* Tópicos de Destaque */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão de Análise de Caso */}
                <button
                  onClick={() => handleWhatsAppClick(item.title)}
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-[#faf3e7] hover:bg-[#1b6b3a] border border-[#ebdcc7] hover:border-[#1b6b3a] text-[#0c1524] hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-between group/btn"
                >
                  <span>Consultar Benefício</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
