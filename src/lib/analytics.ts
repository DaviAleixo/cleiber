// Utilitário para rastrear cliques no WhatsApp via Google Analytics
// Dispara o evento 'whatsapp_click' com um label identificando o botão clicado

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Abre o WhatsApp e registra o evento no Google Analytics
 * @param label - Identificador do botão clicado (ex: 'hero_falar_whatsapp')
 * @param message - Mensagem pré-preenchida no WhatsApp
 */
export function openWhatsApp(label: string, message: string): void {
  // Dispara o evento no Google Analytics se o gtag estiver disponível
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: label,
    });
  }

  // Abre o WhatsApp com a mensagem pré-preenchida
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/5531984221327?text=${encoded}`, '_blank');
}