import React from 'react';
import { Shield, Eye, Lock, FileText, X, Cookie } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal Card */}
        <div className="relative inline-block w-full max-w-3xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#c5a059] flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#c5a059]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Política de Privacidade
                </h2>
                <p className="text-xs text-slate-500">
                  Conformidade com a Lei Geral de Proteção de Dados (LGPD)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar modal"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conteúdo scrollável */}
          <div className="px-6 py-6 max-h-[70vh] overflow-y-auto space-y-6 text-slate-700 text-sm">
            
            {/* 1. Informações que Coletamos */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Eye className="w-5 h-5 text-[#b08a46]" />
                <h3 className="font-bold text-base sm:text-lg text-slate-900">
                  1. Informações que Coletamos
                </h3>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 mb-2">Dados Pessoais Fornecidos:</h4>
                <ul className="text-slate-600 space-y-1 mb-4">
                  <li>• Nome completo</li>
                  <li>• Endereço de e-mail</li>
                  <li>• Número de telefone/WhatsApp</li>
                  <li>• Informações sobre seu caso jurídico</li>
                </ul>

                <h4 className="font-semibold text-slate-900 mb-2">Dados Técnicos Automáticos:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Endereço IP</li>
                  <li>• Tipo de navegador e dispositivo</li>
                  <li>• Páginas visitadas e tempo de navegação</li>
                  <li>• Cookies e tecnologias similares</li>
                </ul>
              </div>
            </div>

            {/* 2. Como Usamos suas Informações */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <FileText className="w-5 h-5 text-[#b08a46]" />
                <h3 className="font-bold text-base sm:text-lg text-slate-900">
                  2. Como Usamos suas Informações
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <h4 className="font-semibold text-slate-900 mb-2">Finalidades Principais:</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Prestar serviços jurídicos</li>
                    <li>• Responder suas consultas</li>
                    <li>• Agendar consultas</li>
                    <li>• Enviar atualizações do caso</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <h4 className="font-semibold text-slate-900 mb-2">Melhorias do Serviço:</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Melhorar nosso site</li>
                    <li>• Analisar preferências</li>
                    <li>• Personalizar conteúdo</li>
                    <li>• Enviar comunicações relevantes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Segurança dos Dados */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Lock className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-base sm:text-lg text-slate-900">
                  3. Segurança dos Dados
                </h3>
              </div>
              <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-4">
                <p className="text-slate-700 mb-3 text-sm">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-xs sm:text-sm">Técnicas:</h4>
                    <ul className="text-slate-600 text-xs space-y-1">
                      <li>• Criptografia SSL/TLS</li>
                      <li>• Servidores seguros</li>
                      <li>• Backups regulares</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-xs sm:text-sm">Organizacionais:</h4>
                    <ul className="text-slate-600 text-xs space-y-1">
                      <li>• Acesso restrito</li>
                      <li>• Treinamento da equipe</li>
                      <li>• Políticas internas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Seus Direitos (LGPD) */}
            <div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-3">
                4. Seus Direitos (LGPD)
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { title: 'Acesso', desc: 'Saber quais dados temos sobre você' },
                  { title: 'Retificação', desc: 'Corrigir dados incorretos' },
                  { title: 'Exclusão', desc: 'Solicitar remoção dos dados' },
                  { title: 'Portabilidade', desc: 'Transferir dados para outro fornecedor' },
                  { title: 'Oposição', desc: 'Opor-se ao processamento' },
                  { title: 'Revogação', desc: 'Retirar consentimento a qualquer momento' },
                ].map((right, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-3 border border-slate-200/70">
                    <h4 className="font-semibold text-slate-900 text-xs sm:text-sm mb-1">{right.title}</h4>
                    <p className="text-slate-500 text-xs">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Cookies */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Cookie className="w-5 h-5 text-[#b08a46]" />
                <h3 className="font-bold text-base sm:text-lg text-slate-900">
                  5. Cookies
                </h3>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70">
                <p className="text-slate-700 mb-3 text-sm">
                  Utilizamos cookies para melhorar sua experiência. Você pode gerenciar suas preferências:
                </p>
                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <div className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-xs font-semibold mb-1 inline-block">
                      Essenciais
                    </div>
                    <p className="text-slate-500">Necessários para funcionamento básico</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <div className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-semibold mb-1 inline-block">
                      Analíticos
                    </div>
                    <p className="text-slate-500">Para entender como você usa o site</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <div className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs font-semibold mb-1 inline-block">
                      Marketing
                    </div>
                    <p className="text-slate-500">Para personalizar conteúdo e anúncios</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer do Modal */}
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Última atualização: Janeiro de 2025
            </span>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  window.open(
                    'https://wa.me/5531984221327?text=Olá! Tenho dúvidas sobre a política de privacidade.',
                    '_blank'
                  );
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <img src="/wpp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
