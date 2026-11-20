import {
  ArrowRight,
  Shield,
  Heart,
  FileText,
  Users,
  Lock,
  Calendar,
  ShieldCheck,
  Scale,
} from "lucide-react";
import { openWhatsApp } from "@/lib/analytics";

function Hero1() {
  const handleWhatsAppClick = () =>
    openWhatsApp(
      "hero_falar_whatsapp",
      "Olá! Gostaria de saber mais sobre aposentadoria e benefícios do INSS."
    );

  const highlights = [
    {
      icon: Shield,
      title: "Aposentadoria",
      description: "Garanta dos seus direitos previdenciários.",
    },
    {
      icon: Heart,
      title: "BPC/LOAS",
      description: "Benefício assistencial para quem precisa.",
    },
    {
      icon: FileText,
      title: "Revisões",
      description: "Revisão da vida toda e outros benefícios.",
    },
    {
      icon: Users,
      title: "Pensões",
      description: "Direitos de dependentes assegurados.",
    },
  ];

  return (
    <div className="w-full relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl lg:max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-center">
          
          {/* Coluna de Conteúdo (Esquerda no Desktop | Topo no Mobile) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Badge de especialidade */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fbf6ed]/95 border border-[#ede2d0] text-slate-800 text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block mr-0.5" />
              <Scale className="w-3.5 h-3.5 text-[#b0874a] inline-block mr-0.5" />
              <span className="font-medium text-slate-800">Especialista em Direito Previdenciário</span>
            </div>

            {/* Título principal com tipografia editorial */}
            <h1 className="font-serif font-bold text-[34px] sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-1">
              <span className="text-[#0c1524] block">Advogado</span>
              <span className="text-[#b89053] block">Previdenciário</span>
              <span className="text-[#0c1524] text-2xl sm:text-3xl lg:text-4xl block mt-2 font-bold">
                Dr. Cleiber Amarilo
              </span>
            </h1>

            {/* Barra dourada decorativa */}
            <div className="w-12 h-1 bg-[#b89053] rounded-full my-3 mx-auto lg:mx-0" />

            {/* Subtítulo */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-sm sm:max-w-md lg:max-w-xl leading-relaxed mb-6 font-normal">
              Defesa ágil e especializada para aposentadorias, auxílios e reversão de negativas junto ao INSS.
            </p>

            {/* Cards informativos em 2 colunas */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 w-full max-w-xl lg:max-w-none mb-6 lg:mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-xs border border-[#eee5d8] rounded-2xl p-3 sm:p-3.5 text-left shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-start gap-2.5 transition-all duration-200"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#faf3e7] border border-[#f0e4d2] text-[#b0874a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif font-bold text-slate-900 text-xs sm:text-sm leading-tight mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botão WhatsApp & Pilares de Confiança no Desktop (Ocultos no mobile aqui) */}
            <div className="hidden lg:flex lg:flex-col lg:items-start w-full">
              <button
                onClick={handleWhatsAppClick}
                className="relative inline-flex items-center justify-between gap-4 py-4 px-8 rounded-full bg-[#1b6b3a] hover:bg-[#155a30] active:scale-[0.99] text-white font-bold text-base lg:text-lg shadow-lg shadow-emerald-950/20 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <img src="/wpp.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                  <span>Falar no WhatsApp</span>
                </div>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform ml-2" />
              </button>

              <div className="grid grid-cols-3 divide-x divide-slate-200/80 max-w-lg w-full pt-4 mt-2">
                <div className="flex items-center gap-2 pr-3 text-left">
                  <Lock className="w-4 h-4 text-[#b0874a] flex-shrink-0" />
                  <div className="text-[11px] leading-tight text-slate-600 font-medium">
                    <p className="text-slate-800 font-semibold">Atendimento</p>
                    <p>sigiloso</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 text-left">
                  <Calendar className="w-4 h-4 text-[#b0874a] flex-shrink-0" />
                  <div className="text-[11px] leading-tight text-slate-600 font-medium">
                    <p className="text-slate-800 font-semibold">Consulta inicial</p>
                    <p>sem burocracia</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pl-3 text-left">
                  <ShieldCheck className="w-4 h-4 text-[#b0874a] flex-shrink-0" />
                  <div className="text-[11px] leading-tight text-slate-600 font-medium">
                    <p className="text-slate-800 font-semibold">Orientação</p>
                    <p>especializada</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Coluna do Vídeo VSL (Centro no Mobile | Direita no Desktop) */}
          <div className="lg:col-span-5 w-full flex flex-col items-center my-6 lg:my-0">
            <div className="w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[360px] mx-auto">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200/90 bg-black aspect-[9/16]">
                <video
                  src="/assets/VLS.mp4"
                  poster="/assets/video-capa.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain block"
                >
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
            </div>
          </div>

          {/* Botão WhatsApp & Pilares de Confiança no Mobile (Abaixo do vídeo) */}
          <div className="lg:hidden w-full flex flex-col items-center">
            <div className="w-full max-w-xl mx-auto">
              <button
                onClick={handleWhatsAppClick}
                className="relative w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#1b6b3a] hover:bg-[#155a30] active:scale-[0.99] text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-950/20 flex items-center justify-center transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <img src="/wpp.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                  <span>Falar no WhatsApp</span>
                </div>
                <ArrowRight className="w-5 h-5 absolute right-6 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-3 divide-x divide-slate-200/80 max-w-xl w-full mx-auto pt-4 pb-2 mt-1">
              <div className="flex items-center justify-center gap-2 px-1 sm:px-2 text-left">
                <Lock className="w-4 h-4 text-[#b0874a] flex-shrink-0" />
                <div className="text-[10px] sm:text-[11px] leading-tight text-slate-600 font-medium">
                  <p className="text-slate-800 font-semibold">Atendimento</p>
                  <p>sigiloso</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 px-1 sm:px-2 text-left">
                <Calendar className="w-4 h-4 text-[#b0874a] flex-shrink-0" />
                <div className="text-[10px] sm:text-[11px] leading-tight text-slate-600 font-medium">
                  <p className="text-slate-800 font-semibold">Consulta inicial</p>
                  <p>sem burocracia</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 px-1 sm:px-2 text-left">
                <ShieldCheck className="w-4 h-4 text-[#b0874a] flex-shrink-0" />
                <div className="text-[10px] sm:text-[11px] leading-tight text-slate-600 font-medium">
                  <p className="text-slate-800 font-semibold">Orientação</p>
                  <p>especializada</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export { Hero1 };
