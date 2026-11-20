import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { openWhatsApp } from '@/lib/analytics';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const testimonials = [
    {
      name: 'João Oliveira',
      city: 'Conselheiro Lafaiete - MG',
      text: 'O INSS havia negado meu pedido de aposentadoria alegando falta de tempo rural. Procurei o Dr. Cleiber e em poucos meses conseguimos comprovar tudo e a concessão saiu com todos os atrasados pagos!',
      initials: 'JO',
      tag: 'Aposentadoria Concedida',
    },
    {
      name: 'Ana Santos',
      city: 'Ouro Branco - MG',
      text: 'Atendimento extremamente humano, atencioso e transparente. O Dr. Cleiber tirou todas as minhas dúvidas e acompanhou meu processo de revisão da vida toda até o final.',
      initials: 'AS',
      tag: 'Reversão de Negativa',
    },
    {
      name: 'Pedro Costa',
      city: 'Congonhas - MG',
      text: 'Conquistei o BPC/LOAS para minha mãe graças à dedicação e agilidade do Dr. Cleiber. Eu já estava desanimado com tanta burocracia, mas ele resolveu tudo com maestria.',
      initials: 'PC',
      tag: 'Benefício BPC/LOAS',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  const handleWhatsAppClick = () => {
    openWhatsApp(
      'testimonials_quero_direito',
      'Olá Dr. Cleiber! Vi os depoimentos e casos no site e gostaria de agendar uma análise para o meu caso.'
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-[#faf6f0] relative border-b border-[#ebdcc7]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho no Estilo Verum */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c5a059]/30 bg-[#fbf6ed] px-4 py-1.5 text-[11px] font-semibold tracking-widest text-[#8e6b33] uppercase mb-4 shadow-2xs">
            <span>RESULTADOS QUE COMPROVAM</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1524] tracking-tight leading-tight mb-4">
            Histórias de Quem Conquistou Seus Direitos
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Pessoas e famílias que enfrentaram os obstáculos do INSS e conquistaram a estabilidade financeira com nossa defesa jurídica.
          </p>
        </div>

        {/* VERSÃO MOBILE: CARROSSEL COM SUPORTE A SWIPE (ARRASTAR) E BOTÕES */}
        <div className="block md:hidden">
          <div
            className="relative touch-pan-y select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Card Ativo com Animação */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ebdcc7] shadow-md min-h-[340px] flex flex-col justify-between transition-all duration-300">
              <div>
                {/* Topo do Card: Aspas + 5 Estrelas Douradas */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#faf3e7] border border-[#ebdcc7] text-[#8e6b33] flex items-center justify-center">
                    <Quote className="w-5 h-5 fill-current opacity-80" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Badge do caso conquistado */}
                <span className="inline-block px-3 py-1 rounded-md bg-[#faf3e7] border border-[#ebdcc7] text-[#8e6b33] text-[11px] font-mono uppercase font-bold tracking-wider mb-3">
                  {testimonials[currentIndex].tag}
                </span>

                {/* Depoimento */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>

              {/* Informações do Cliente */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#0c1524] text-[#d8b577] font-serif font-bold text-sm flex items-center justify-center shadow-xs shrink-0">
                  {testimonials[currentIndex].initials}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#0c1524] text-base leading-tight">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-xs text-slate-500">{testimonials[currentIndex].city}</p>
                  <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Benefício Homologado</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Controles de Navegação do Carrossel Mobile */}
            <div className="flex items-center justify-between mt-5 px-2">
              <button
                onClick={prevSlide}
                aria-label="Depoimento anterior"
                className="w-10 h-10 rounded-full bg-white border border-[#ebdcc7] text-[#0c1524] flex items-center justify-center shadow-xs active:scale-95 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicadores de bolinha e contador */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      idx === currentIndex ? 'w-7 bg-[#c5a059]' : 'w-2 bg-[#ebdcc7]'
                    }`}
                  />
                ))}
                <span className="text-xs font-mono text-slate-500 font-bold ml-2">
                  {currentIndex + 1} / {testimonials.length}
                </span>
              </div>

              <button
                onClick={nextSlide}
                aria-label="Próximo depoimento"
                className="w-10 h-10 rounded-full bg-white border border-[#ebdcc7] text-[#0c1524] flex items-center justify-center shadow-xs active:scale-95 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* VERSÃO DESKTOP: GRADE DE 3 COLUNAS */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#ebdcc7] shadow-sm hover:border-[#c5a059] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Cabeçalho do Card: Aspas + 5 Estrelas Douradas */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#faf3e7] border border-[#ebdcc7] text-[#8e6b33] flex items-center justify-center">
                    <Quote className="w-5 h-5 fill-current opacity-80" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Badge do caso conquistado */}
                <span className="inline-block px-3 py-1 rounded-md bg-[#faf3e7] border border-[#ebdcc7] text-[#8e6b33] text-[11px] font-mono uppercase font-bold tracking-wider mb-4">
                  {item.tag}
                </span>

                {/* Depoimento */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              {/* Informações do Cliente */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#0c1524] text-[#d8b577] font-serif font-bold text-sm flex items-center justify-center shadow-xs shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#0c1524] text-sm sm:text-base leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-slate-500">{item.city}</p>
                  <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Benefício Homologado</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Final da Seção Estilo Verum */}
        <div className="mt-12 sm:mt-16 bg-[#091627] text-white rounded-3xl p-8 sm:p-12 text-center border border-[#c5a059]/20 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 tracking-tight text-white">
              Seja o Próximo a Conquistar Seu Benefício
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
              Diga adeus à insegurança e à espera interminável do INSS. Nossa assessoria cuida de cada detalhe do seu processo.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1b6b3a] hover:bg-[#155a30] text-white font-bold text-base shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group"
            >
              <img src="/wpp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
              <span>Garantir Meus Direitos Também</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
