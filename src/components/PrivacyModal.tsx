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
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-4xl px-6 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="bg-slate-100 p-2 rounded-full">
                <Shield className="w-6 h-6 text-slate-700" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Política de Privacidade</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="mt-6 max-h-96 overflow-y-auto">
            <div className="space-y-6">
              {/* Informações Gerais */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-5 h-5 text-slate-600" />
                  <h3 className="text-lg font-bold text-slate-900">1. Informações que Coletamos</h3>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-sm">
                  <h4 className="font-semibold text-slate-900 mb-2">Dados Pessoais Fornecidos:</h4>
                  <ul className="text-slate-700 space-y-1 mb-3">
                    <li>• Nome completo</li>
                    <li>• Endereço de e-mail</li>
                    <li>• Número de telefone/WhatsApp</li>
                    <li>• Informações sobre seu caso jurídico</li>
                  </ul>
                  
                  <h4 className="font-semibold text-slate-900 mb-2">Dados Técnicos Automáticos:</h4>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Endereço IP</li>
                    <li>• Tipo de navegador e dispositivo</li>
                    <li>• Páginas visitadas e tempo de navegação</li>
                    <li>• Cookies e tecnologias similares</li>
                  </ul>
                </div>
              </div>

              {/* Como Usamos */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-5 h-5 text-slate-600" />
                  <h3 className="text-lg font-bold text-slate-900">2. Como Usamos suas Informações</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4 text-sm">
                    <h4 className="font-semibold text-slate-900 mb-2">Finalidades Principais:</h4>
                    <ul className="text-slate-700 space-y-1">
                      <li>• Prestar serviços jurídicos</li>
                      <li>• Responder suas consultas</li>
                      <li>• Agendar consultas</li>
                      <li>• Enviar atualizações do caso</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4 text-sm">
                    <h4 className="font-semibold text-slate-900 mb-2">Melhorias do Serviço:</h4>
                    <ul className="text-slate-700 space-y-1">
                      <li>• Melhorar nosso site</li>
                      <li>• Analisar preferências</li>
                      <li>• Personalizar conteúdo</li>
                      <li>• Enviar comunicações relevantes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Segurança */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-5 h-5 text-slate-600" />
                  <h3 className="text-lg font-bold text-slate-900">3. Segurança dos Dados</h3>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                  <p className="text-slate-700 mb-3 text-sm">
                    Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-sm">Técnicas:</h4>
                      <ul className="text-slate-700 text-xs space-y-1">
                        <li>• Criptografia SSL/TLS</li>
                        <li>• Servidores seguros</li>
                        <li>• Backups regulares</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-sm">Organizacionais:</h4>
                      <ul className="text-slate-700 text-xs space-y-1">
                        <li>• Acesso restrito</li>
                        <li>• Treinamento da equipe</li>
                        <li>• Políticas internas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seus Direitos */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">4. Seus Direitos (LGPD)</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { title: 'Acesso', desc: 'Saber quais dados temos sobre você' },
                    { title: 'Retificação', desc: 'Corrigir dados incorretos' },
                    { title: 'Exclusão', desc: 'Solicitar remoção dos dados' },
                    { title: 'Portabilidade', desc: 'Transferir dados para outro fornecedor' },
                    { title: 'Oposição', desc: 'Opor-se ao processamento' },
                    { title: 'Revogação', desc: 'Retirar consentimento a qualquer momento' }
                  ].map((right, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-3">
                      <h4 className="font-semibold text-slate-900 mb-1 text-sm">{right.title}</h4>
                      <p className="text-slate-600 text-xs">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cookies */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Cookie className="w-5 h-5 text-slate-600" />
                  <h3 className="text-lg font-bold text-slate-900">5. Cookies</h3>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700 mb-3 text-sm">
                    Utilizamos cookies para melhorar sua experiência. Você pode gerenciar suas preferências:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 text-xs">
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mb-1">
                        Essenciais
                      </div>
                      <p className="text-slate-600">Necessários para funcionamento básico</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mb-1">
                        Analíticos
                      </div>
                      <p className="text-slate-600">Para entender como você usa o site</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium mb-1">
                        Marketing
                      </div>
                      <p className="text-slate-600">Para personalizar conteúdo e anúncios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer do Modal */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => {
                  window.open('https://wa.me/5531984221327?text=Olá! Tenho dúvidas sobre a política de privacidade.', '_blank');
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                WhatsApp
              </button>
              <button 
                onClick={onClose}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Fechar
              </button>
            </div>
            <div className="text-center mt-3 text-gray-500 text-xs">
              <p>Última atualização: Janeiro de 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};