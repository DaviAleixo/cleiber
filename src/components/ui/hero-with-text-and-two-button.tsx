import { MessageCircle } from "lucide-react";
import { Shield, Heart, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { openWhatsApp } from "@/lib/analytics";

function Hero1() {
  // Função para abrir WhatsApp com rastreamento
  const handleWhatsAppClick = () =>
    openWhatsApp(
      "hero_falar_whatsapp",
      "Olá! Gostaria de saber mais sobre aposentadoria e benefícios do INSS."
    );

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">

          {/* Badge de especialidade */}
          <div>
            <Badge variant="outline" className="gap-2 px-4 py-2 border-slate-300 text-slate-700">
              ⚖️ Especialista em Direito Previdenciário
            </Badge>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular text-slate-900">
            Advogado <span style={{ color: '#A39180' }}>Previdenciário</span>
            <br />
            <span className="whitespace-nowrap">Dr. Cleiber Amarilo</span>
          </h1>

          {/* Cards informativos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full mx-auto">
            <div className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-sm">
              <div className="flex justify-center mb-2">
                <Shield className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Aposentadoria</h3>
              <p className="text-sm text-slate-600">Garantia dos seus direitos previdenciários</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-sm">
              <div className="flex justify-center mb-2">
                <Heart className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">BPC/LOAS</h3>
              <p className="text-sm text-slate-600">Benefício assistencial para quem precisa</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-sm">
              <div className="flex justify-center mb-2">
                <FileText className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Revisões</h3>
              <p className="text-sm text-slate-600">Revisão da vida toda e outros benefícios</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-sm">
              <div className="flex justify-center mb-2">
                <Users className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Pensões</h3>
              <p className="text-sm text-slate-600">Direitos de dependentes assegurados</p>
            </div>
          </div>

          {/* Vídeo VSL */}
          <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <video
              src="/assets/VLS.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto block"
              style={{ aspectRatio: '16/9' }}
            >
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>

          {/* Botão WhatsApp centralizado */}
          <Button
            size="lg"
            className="gap-4 text-white bg-green-600 hover:bg-green-700 transition-colors"
            onClick={handleWhatsAppClick}
          >
            Falar no WhatsApp <MessageCircle className="w-4 h-4" />
          </Button>

        </div>
      </div>
    </div>
  );
}

export { Hero1 };