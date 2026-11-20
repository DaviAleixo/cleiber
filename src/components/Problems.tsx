import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '@/lib/analytics';

export const Problems: React.FC = () => {
  const handleWhatsAppClick = () => {
    openWhatsApp(
      'problems_conversar_advogado',
      'Olá Dr. Cleiber! Estou enfrentando problemas com meu benefício do INSS e preciso de orientação jurídica.'
    );
  };

  const problems = [
    {
      num: '01',
      title: 'INSS negou seu benefício?',
      desc: 'Muitos indeferimentos ocorrem por falhas de análise do próprio INSS. É possível reverter pela via administrativa ou judicial.',
    },
    {
      num: '02',
      title: 'Dúvidas sobre quando ou como se aposentar?',
      desc: 'Planejamento previdenciário minucioso para identificar o melhor momento e a regra de transição mais vantajosa.',
    },
    {
      num: '03',
      title: 'Acha que o valor da aposentadoria está errado?',
      desc: 'Cálculos incorretos e períodos não computados podem reduzir substancialmente sua renda mensal.',
    },
    {
      num: '04',
      title: 'Dúvidas se tem direito ao BPC/LOAS?',
      desc: 'Benefício assistencial de um salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência.',
    },
    {
      num: '05',
      title: 'Inseguro sobre seus direitos e documentos?',
      desc: 'Análise técnica da sua documentação e CNIS para evitar atrasos e perdas financeiras irreversíveis.',
    },
  ];

  return (
    <section id="problemas" className="py-16 sm:py-24 bg-[#faf6f0] relative border-y border-[#ebdcc7]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho inspirado no estilo Verum */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c5a059]/30 bg-[#fbf6ed] px-4 py-1.5 text-[11px] font-semibold tracking-widest text-[#8e6b33] uppercase mb-4 shadow-2xs">
            <AlertCircle className="w-3.5 h-3.5 text-[#b0874a]" />
            <span>Situações Frequentes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1524] tracking-tight leading-tight mb-4">
            Você enfrenta algum desses problemas com o INSS?
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Milhares de pessoas enfrentam os mesmos desafios diariamente — mas com apoio jurídico especializado, seus direitos são defendidos com rigor técnico.
          </p>
        </div>

        {/* Layout 2 colunas Verum: Grid de Problemas + Card de Solução Premium */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Coluna dos Problemas (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
            {problems.map((item, index) => (
              <div
                key={index}
                className="group relative flex items-start gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-[#ebdcc7]/70 shadow-xs hover:border-[#c5a059] hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#fbf6ed] border border-[#ebdcc7] text-[#8e6b33] font-mono font-bold text-xs flex items-center justify-center group-hover:bg-[#0c1524] group-hover:text-[#c5a059] group-hover:border-[#0c1524] transition-colors">
                  {item.num}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-[#0c1524] text-base sm:text-lg mb-1 group-hover:text-[#b0874a] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="hidden sm:flex self-center">
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#b0874a] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          {/* Coluna da Solução (5 cols) - Card Dark Navy com Estilo Verum */}
          <div className="lg:col-span-5 bg-[#091627] text-white rounded-3xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between border border-[#c5a059]/20 relative overflow-hidden">
            {/* Efeito de brilho de fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[#d8b577] border border-white/10 text-[11px] font-mono uppercase tracking-widest mb-6">
                Proteção Jurídica Especializada
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight text-center lg:text-left">
                A Solução Está Aqui
              </h3>

              <div className="w-12 h-1 bg-[#c5a059] rounded-full mb-6 mx-auto lg:mx-0" />

              <div className="w-full space-y-4 text-slate-300 text-sm leading-relaxed mb-8 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white font-semibold">Análise técnica minuciosa</strong> de todo o seu histórico contributivo e documentos antes de qualquer pedido.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white font-semibold">Reversão de indeferimentos</strong> através de recursos fundamentados na legislação e jurisprudência atualizada.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white font-semibold">Atendimento direto</strong> com advogado previdenciário experiente — com agilidade, transparência e sem burocracia.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#1b6b3a] hover:bg-[#155a30] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg shadow-emerald-950/40 hover:shadow-xl group"
              >
                <img src="/wpp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                <span className="text-sm sm:text-base">Conversar com Advogado</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
