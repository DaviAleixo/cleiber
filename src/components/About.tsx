import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Building2,
  UserCheck,
  ArrowRight,
} from 'lucide-react';
import { openWhatsApp } from '@/lib/analytics';

export const About: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const officeImages = [
    { id: 1, src: '/assets/cleiber2.jpg', alt: 'Dr. Cleiber no Escritório', label: 'Atendimento Especializado' },
    { id: 2, src: '/assets/botelli.jpg', alt: 'Ambiente de Atendimento', label: 'Sala de Consultoria Previdenciária' },
    { id: 3, src: '/assets/Cleiber3.jpg', alt: 'Ambiente de Trabalho', label: 'Biblioteca Jurídica e Análise' },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % officeImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + officeImages.length) % officeImages.length);
  };

  const handleWhatsAppClick = (context: string) => {
    openWhatsApp(
      context,
      'Olá Dr. Cleiber! Conheci seu trabalho pelo site e gostaria de agendar uma consulta sobre meu benefício.'
    );
  };

  return (
    <>
      {/* SEÇÃO 1: Quem é Cleiber - Autoridade Estilo Verum (Dark Navy Elegante) */}
      <section id="sobre" className="py-16 sm:py-24 bg-[#071322] text-white relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Foto do Dr. Cleiber com tratamento editorial estilo Verum (5 cols) */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#091627] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                <div className="relative aspect-[4/5] w-full">
                  <img
                    src="/assets/cleiber.jpg"
                    alt="Dr. Cleiber Amarilo - Advogado Previdenciário"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradiente de fusão estilo Verum */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 relative z-10 bg-[#091627]/95 backdrop-blur-md border-t border-white/10">
                  <p className="font-serif font-bold text-white text-xl">
                    Dr. Cleiber Amarilo
                  </p>
                  <p className="text-xs text-[#d8b577] font-mono uppercase tracking-wider mt-1">
                    Advocacia Previdenciária Especializada
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium mt-3 pt-3 border-t border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Atuação ética, estratégica e focada no cliente</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo Institucional & Credenciais Estilo Verum (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-[#d8b577] uppercase mb-4 backdrop-blur-sm">
                <UserCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>CONHEÇA O ADVOGADO</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4 text-center lg:text-left">
                Quem é o Dr. Cleiber Amarilo
              </h2>

              {/* Linha dourada estilo Verum */}
              <div className="h-[2px] w-12 bg-[#c5a059] mb-6 mx-auto lg:mx-0" />

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-light text-center lg:text-left max-w-xl lg:max-w-none">
                Advogado especialista em Direito Previdenciário, dedicado a defender os direitos de trabalhadores, aposentados e beneficiários que buscam segurança, agilidade e o valor justo perante o INSS.
              </p>

              {/* Lista de Credenciais em Cards de Vidro estilo Verum */}
              <div className="w-full space-y-3.5 mb-8 text-left">
                
                <div className="flex items-center justify-between p-4.5 rounded-2xl border border-white/10 bg-[#091627]/80 hover:bg-[#0d1f36] transition-all backdrop-blur-sm group">
                  <div className="flex items-start gap-4">
                    <div className="text-[11px] font-mono px-2.5 py-1 rounded border border-white/10 bg-white/5 font-bold text-[#d8b577] shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-white text-base group-hover:text-[#d8b577] transition-colors">
                        Formação Acadêmica
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                        Graduado em Direito pela Faculdade de Direito de Conselheiro Lafaiete — FDCL.
                      </p>
                    </div>
                  </div>
                  <GraduationCap className="w-5 h-5 text-slate-400 group-hover:text-[#c5a059] transition-colors shrink-0 ml-3" />
                </div>

                <div className="flex items-center justify-between p-4.5 rounded-2xl border border-white/10 bg-[#091627]/80 hover:bg-[#0d1f36] transition-all backdrop-blur-sm group">
                  <div className="flex items-start gap-4">
                    <div className="text-[11px] font-mono px-2.5 py-1 rounded border border-white/10 bg-white/5 font-bold text-[#d8b577] shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-white text-base group-hover:text-[#d8b577] transition-colors">
                        Experiência Comprovada
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                        Centenas de processos administrativos e judiciais concluídos com sucesso e concessões de benefícios.
                      </p>
                    </div>
                  </div>
                  <Award className="w-5 h-5 text-slate-400 group-hover:text-[#c5a059] transition-colors shrink-0 ml-3" />
                </div>

                <div className="flex items-center justify-between p-4.5 rounded-2xl border border-white/10 bg-[#091627]/80 hover:bg-[#0d1f36] transition-all backdrop-blur-sm group">
                  <div className="flex items-start gap-4">
                    <div className="text-[11px] font-mono px-2.5 py-1 rounded border border-white/10 bg-white/5 font-bold text-[#d8b577] shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-white text-base group-hover:text-[#d8b577] transition-colors">
                        Atendimento Diferenciado
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                        Assessoria humanizada, transparente e estratégica, com comunicação clara em cada etapa.
                      </p>
                    </div>
                  </div>
                  <Users className="w-5 h-5 text-slate-400 group-hover:text-[#c5a059] transition-colors shrink-0 ml-3" />
                </div>

              </div>

              <button
                onClick={() => handleWhatsAppClick('about_falar_cleiber')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1b6b3a] hover:bg-[#155a30] text-white font-bold text-base shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group"
              >
                <img src="/wpp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                <span>Conversar com Dr. Cleiber</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 2: Nosso Escritório & Estrutura Física / Online (Tom Claro Harmonioso) */}
      <section className="py-16 sm:py-24 bg-[#faf6f0] relative border-b border-[#ebdcc7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c5a059]/30 bg-[#fbf6ed] px-4 py-1.5 text-[11px] font-semibold tracking-widest text-[#8e6b33] uppercase mb-4 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#b0874a]" />
              <span>ESTRUTURA & ATENDIMENTO</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1524] tracking-tight leading-tight mb-4">
              Nosso Escritório
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Estrutura preparada para receber você presencialmente ou com a máxima comodidade pelo atendimento 100% online em todo o Brasil.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Textos descritivos do escritório (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-lg sm:text-xl text-[#0c1524] mb-4 font-serif font-bold leading-snug text-center lg:text-left">
                Com anos de atuação em Direito Previdenciário, construímos uma advocacia baseada na seriedade, no rigor técnico e na proximidade com cada cliente.
              </p>

              <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed text-center lg:text-left">
                Aqui você encontra atendimento humanizado, análise minuciosa de cada documento e acompanhamento constante — do primeiro protocolo até o pagamento dos valores.
              </p>

              <div className="w-full space-y-3.5 mb-8 text-left">
                <div className="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-[#ebdcc7]/70 shadow-2xs">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 shrink-0" />
                  <span className="text-[#0c1524] font-medium text-sm sm:text-base">
                    Centenas de clientes atendidos com transparência e ética
                  </span>
                </div>

                <div className="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-[#ebdcc7]/70 shadow-2xs">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 shrink-0" />
                  <span className="text-[#0c1524] font-medium text-sm sm:text-base">
                    Atendimento flexível: 100% online ou presencial em Conselheiro Lafaiete/MG
                  </span>
                </div>

                <div className="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-[#ebdcc7]/70 shadow-2xs">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 shrink-0" />
                  <span className="text-[#0c1524] font-medium text-sm sm:text-base">
                    Especialistas em concessão, revisões e reversão de benefícios negados pelo INSS
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleWhatsAppClick('about_escritorio_falar_conosco')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1b6b3a] hover:bg-[#155a30] text-white font-bold text-base shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group"
              >
                <img src="/wpp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                <span>Falar Conosco no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Carousel Fotográfico do Escritório (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#ebdcc7] shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif font-bold text-[#0c1524] text-lg sm:text-xl">
                    Ambiente e Estrutura
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#8e6b33] bg-[#fbf6ed] px-3 py-1 rounded-full border border-[#ebdcc7]">
                    {currentImage + 1} / {officeImages.length}
                  </span>
                </div>

                {/* Container do Slide */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 shadow-inner group">
                  <img
                    src={officeImages[currentImage].src}
                    alt={officeImages[currentImage].alt}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />

                  {/* Legenda */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0c1524]/90 via-[#0c1524]/50 to-transparent text-white text-xs sm:text-sm font-medium">
                    {officeImages[currentImage].label}
                  </div>

                  {/* Botões de navegação */}
                  <button
                    onClick={prevImage}
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition-all active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextImage}
                    aria-label="Próxima foto"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition-all active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Marcadores */}
                <div className="flex justify-center items-center space-x-2 mt-5">
                  {officeImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Ir para foto ${index + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImage ? 'w-8 bg-[#c5a059]' : 'w-2 bg-[#ebdcc7] hover:bg-[#c5a059]/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
