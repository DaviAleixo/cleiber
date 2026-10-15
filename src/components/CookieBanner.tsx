import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 shadow-lg z-50 border-t-4 border-green-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="bg-slate-700 p-2 rounded-lg mt-1">
              <Cookie className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Cookies e Privacidade</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Utilizamos cookies para melhorar sua experiência em nosso site, analisar o tráfego e personalizar conteúdo. 
                Ao continuar navegando, você concorda com nossa{' '}
                <button 
                  onClick={() => {
                    const element = document.getElementById('privacy-policy');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-green-400 hover:text-green-300 underline"
                >
                  Política de Privacidade
                </button>.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 rounded-lg transition-colors text-sm"
            >
              Recusar
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              Aceitar Todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};