import React, { useState, useRef } from 'react';
import { Clock, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { openWhatsApp } from '@/lib/analytics';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
  });

  const handleWhatsAppClick = () => {
    openWhatsApp(
      'contact_falar_whatsapp_imediato',
      'Olá Dr. Cleiber! Gostaria de uma orientação inicial sobre meu caso previdenciário.'
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);
    setStatusMessage(null);

    // Tentativa com EmailJS ou fallback direto para WhatsApp com mensagem estruturada
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        setStatusMessage({
          type: 'success',
          text: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        });
        setFormData({ user_name: '', user_email: '', user_phone: '', message: '' });
        form.current?.reset();
        setIsLoading(false);
      })
      .catch(() => {
        const text = `Olá Dr. Cleiber! Me chamo ${formData.user_name || 'um cliente'}.\nEmail: ${formData.user_email}\nTelefone: ${formData.user_phone}\n\n${formData.message}`;
        openWhatsApp('contact_form_fallback', text);

        setStatusMessage({
          type: 'success',
          text: 'Redirecionando sua mensagem diretamente para o WhatsApp do Dr. Cleiber...',
        });
        setIsLoading(false);
      });
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-[#071322] text-white relative overflow-hidden">
      {/* Luz ambiente de fundo estilo Verum */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho no Estilo Verum */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-[#d8b577] uppercase mb-4 backdrop-blur-sm">
            <span>CANAIS DE ATENDIMENTO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Entre em Contato com Nossa Equipe
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Não perca tempo com a burocracia do INSS. Cada dia é precioso para garantir os seus direitos previdenciários.
          </p>
        </div>

        {/* Layout 2 Colunas Estilo Verum */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Coluna da Esquerda: Cartões de Contato & Informações (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card WhatsApp em Destaque */}
            <div className="p-6 sm:p-7 bg-[#091627] rounded-3xl border border-emerald-500/30 shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 p-2.5">
                  <img src="/wpp.png" alt="WhatsApp" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-lg sm:text-xl">
                    WhatsApp Direto
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">Atendimento ágil com o advogado</p>
                  <p className="text-emerald-400 font-mono font-bold text-base sm:text-lg mt-1">
                    (31) 98422-1327
                  </p>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-[#1b6b3a] hover:bg-[#155a30] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all group"
              >
                <img src="/wpp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                <span>Conversar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Card de Horários */}
            <div className="flex items-start gap-4 p-5 sm:p-6 bg-[#091627] rounded-3xl border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-[#d8b577] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-base mb-1">
                  Horário de Atendimento
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Segunda à Sexta-feira: <strong className="text-white">10h às 18h</strong>
                </p>
                <p className="text-slate-400 text-xs mt-1">Atendimento presencial com hora marcada ou 100% online.</p>
              </div>
            </div>

            {/* Card de Localização */}
            <div className="flex items-start gap-4 p-5 sm:p-6 bg-[#091627] rounded-3xl border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-[#d8b577] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <h3 className="font-serif font-bold text-white text-base mb-1">
                  Endereço do Escritório
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Avenida Professor Manoel Martins, N° 491, 2° Andar, Sala 222
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Bairro Campo Alegre, Conselheiro Lafaiete – MG
                </p>
                <p className="text-[#d8b577] font-mono text-xs mt-1.5">CEP: 36.400-110</p>
              </div>
            </div>

            {/* Garantia de Sigilo */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-xs text-slate-300 leading-tight">
                Seus dados e informações são tratados sob <strong className="text-white">sigilo profissional absoluto</strong> resguardado pela OAB.
              </p>
            </div>

          </div>

          {/* Coluna da Direita: Formulário de Mensagem Estilo Verum (7 cols) */}
          <div className="lg:col-span-7 bg-[#091627] rounded-3xl p-7 sm:p-10 border border-white/10 shadow-2xl relative">
            <h3 className="font-serif font-bold text-2xl text-white mb-2 text-center sm:text-left">
              Envie uma Mensagem
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 text-center sm:text-left">
              Preencha os campos abaixo para receber um contato personalizado do Dr. Cleiber.
            </p>

            {statusMessage && (
              <div
                className={`mb-6 p-4 rounded-2xl text-sm ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-200'
                    : 'bg-red-950/60 border border-red-500/40 text-red-200'
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    WhatsApp ou Telefone *
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    value={formData.user_phone}
                    onChange={handleInputChange}
                    placeholder="(31) 99999-9999"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Seu E-mail (opcional)
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  placeholder="exemplo@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Descreva resumidamente sua situação *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ex: Tive o auxílio-doença cortado pelo INSS e gostaria de saber como recorrer..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 rounded-2xl bg-[#1b6b3a] hover:bg-[#155a30] text-white font-bold text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all duration-200 disabled:opacity-50 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>{isLoading ? 'Enviando Mensagem...' : 'Enviar Mensagem Agora'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
