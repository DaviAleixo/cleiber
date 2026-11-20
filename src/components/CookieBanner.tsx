import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Delay slightly for smooth initial page impression
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
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
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl border border-slate-700/80 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-slate-800 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-700">
          <Cookie className="w-5 h-5 text-[#c5a059]" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-white text-sm">Cookies e Privacidade</h3>
            <button
              onClick={handleDecline}
              aria-label="Fechar"
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-slate-300 text-xs sm:text-xs leading-relaxed mb-4">
            Utilizamos cookies para melhorar sua experiência em nosso site, analisar o tráfego e personalizar conteúdo.
            Ao continuar navegando, você concorda com nossa{' '}
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-[#e5be6b] hover:underline font-medium"
            >
              Política de Privacidade
            </button>
            .
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDecline}
              className="flex-1 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-xl transition-colors text-center"
            >
              Recusar
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-3 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors shadow-md text-center"
            >
              Aceitar Todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
