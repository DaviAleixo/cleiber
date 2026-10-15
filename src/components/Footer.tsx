import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { PrivacyModal } from './PrivacyModal';

export const Footer: React.FC = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-6">
              <h3 className="font-bold text-lg">Cleiber Amarilo</h3>
              <p className="text-slate-300 text-sm">Advocacia Previdenciária</p>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Especialista em Direito Previdenciário, dedicado a conquistar os direitos que você tem junto ao INSS.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Aposentadoria por Idade</li>
              <li>Aposentadoria por Invalidez</li>
              <li>BPC/LOAS</li>
              <li>Revisão da Vida Toda</li>
              <li>Auxílio-Doença</li>
              <li>Pensão por Morte</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Avenida Professor Manoel Martins, N° 491, 2° Andar, Sala 222, Bairro Campo Alegre, Conselheiro Lafaiete – MG, CEP – 36.400-110</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>WhatsApp: (31) 98422-1327</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>cleiberpereiraadv@gmail.com</span>
              </div>
            </div>

            {/* Horários */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">Horário de Atendimento:</h5>
              <div className="text-slate-300 text-sm space-y-1">
                <p>Segunda à Sexta: 10h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-300 text-center md:text-left">
            <div className="text-xs sm:text-sm">
              <p>© 2025 Cleiber Amarilo Advocacia e Consultoria Jurídica. Todos os direitos reservados.</p>
              <p className="mt-1">
                Desenvolvido por{' '}
                <a 
                  href="https://instagram.com/davialeixo_nogueira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-slate-200 font-medium"
                >
                  Davi Aleixo
                </a>
                {' '}| 31982607426
              </p>
              <p className="mt-2">
                <button 
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-green-400 hover:text-green-300 underline text-xs"
                >
                  Política de Privacidade
                </button>
              </p>
            </div>
            

          </div>
        </div>
      </div>
      </footer>
      
      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </>
  );
};