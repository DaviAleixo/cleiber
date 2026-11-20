import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-[#050e18] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Coluna 1: Logo e Descrição (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="font-serif font-bold text-2xl text-white tracking-tight">
                Cleiber Amarilo
              </h3>
              <p className="text-xs text-[#d8b577] font-mono tracking-widest uppercase mt-0.5">
                Advocacia Previdenciária
              </p>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
              Especialista em Direito Previdenciário, dedicado a conquistar e resguardar os direitos que você tem junto ao INSS com rigor técnico e humanização.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Atendimento ético em estrita conformidade com a OAB</span>
            </div>
          </div>

          {/* Coluna 2: Serviços (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-white text-base mb-4 sm:mb-5">
              Nossos Serviços
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li className="hover:text-[#d8b577] transition-colors">Aposentadoria por Idade</li>
              <li className="hover:text-[#d8b577] transition-colors">Aposentadoria por Invalidez</li>
              <li className="hover:text-[#d8b577] transition-colors">BPC / LOAS</li>
              <li className="hover:text-[#d8b577] transition-colors">Revisão da Vida Toda</li>
              <li className="hover:text-[#d8b577] transition-colors">Auxílio-Doença</li>
              <li className="hover:text-[#d8b577] transition-colors">Pensão por Morte</li>
            </ul>
          </div>

          {/* Coluna 3: Contato (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif font-bold text-white text-base mb-4 sm:mb-5">
              Contato
            </h4>
            <div className="space-y-3.5 text-slate-400 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-1" />
                <span className="leading-relaxed text-xs sm:text-sm">
                  Avenida Professor Manoel Martins, N° 491, 2° Andar, Sala 222, Bairro Campo Alegre, Conselheiro Lafaiete – MG, CEP: 36.400-110
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <a
                  href="https://wa.me/5531984221327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: (31) 98422-1327
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <a
                  href="mailto:cleiberpereiraadv@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  cleiberpereiraadv@gmail.com
                </a>
              </div>
            </div>

            {/* Horários */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <h5 className="font-mono text-xs uppercase tracking-wider text-[#d8b577] mb-1">
                Horário de Atendimento:
              </h5>
              <p className="text-slate-300 text-sm">Segunda à Sexta: 10h às 18h</p>
            </div>
          </div>

        </div>

        {/* Linha divisória e Créditos */}
        <div className="border-t border-white/10 pt-8 mt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center sm:text-left">
            <div>
              <p>© 2025 Cleiber Amarilo Advocacia e Consultoria Jurídica. Todos os direitos reservados.</p>
              <p className="mt-1">
                Desenvolvido por{' '}
                <a
                  href="https://instagram.com/davialeixo_nogueira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white font-medium underline underline-offset-2"
                >
                  Davi Aleixo
                </a>{' '}
                | 31982607426
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-slate-400 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
              >
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
