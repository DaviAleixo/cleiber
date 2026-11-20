import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Home,
  User,
  Briefcase,
  ChevronRight,
  Clock,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/5531984221327?text=Olá! Gostaria de falar sobre meu benefício do INSS.',
      '_blank'
    );
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? 'bg-[#fcf9f4] border-b border-[#ebdcc7] py-3.5'
          : isScrolled
          ? 'bg-[#faf4ec]/95 backdrop-blur-md shadow-sm border-b border-[#ebdcc7] py-3 sm:py-3.5'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('inicio')}
            className="cursor-pointer group select-none text-left"
          >
            <h1 className="font-serif font-bold text-xl sm:text-2xl text-[#0c1524] tracking-tight leading-none group-hover:text-slate-700 transition-colors">
              Cleiber Amarilo
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-[0.15em] uppercase mt-1">
              Advocacia Previdenciária
            </p>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-slate-700 hover:text-[#0c1524] transition-colors font-medium text-sm tracking-wide"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-slate-700 hover:text-[#0c1524] transition-colors font-medium text-sm tracking-wide"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-slate-700 hover:text-[#0c1524] transition-colors font-medium text-sm tracking-wide"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#1b6b3a] hover:bg-[#155a30] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Contato
            </button>
          </nav>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir Menu"
            className={`lg:hidden p-2.5 rounded-xl text-[#0c1524] transition-all duration-200 active:scale-95 ${
              isMobileMenuOpen || isScrolled
                ? 'bg-white/90 hover:bg-white border border-[#e8dac6] shadow-xs'
                : 'bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-[#e8dac6]/70 shadow-xs'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay & Drawer Redesenhado */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[58px] sm:top-[66px] bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-[#fcf9f4] border-b border-[#ebdcc7] shadow-2xl rounded-b-3xl px-5 pt-4 pb-6 space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top-3 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Links com ícones refinados e setas douradas */}
            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => scrollToSection('inicio')}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-[#efe5d5] text-slate-800 transition-all duration-200 group active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#faf2e6] border border-[#f2e5d0] text-[#b0874a] flex items-center justify-center">
                    <Home className="w-4 h-4" />
                  </div>
                  <span className="font-serif font-bold text-base text-[#0c1524]">Início</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#b0874a] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('sobre')}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-[#efe5d5] text-slate-800 transition-all duration-200 group active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#faf2e6] border border-[#f2e5d0] text-[#b0874a] flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="font-serif font-bold text-base text-[#0c1524]">Sobre</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#b0874a] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('servicos')}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-[#efe5d5] text-slate-800 transition-all duration-200 group active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#faf2e6] border border-[#f2e5d0] text-[#b0874a] flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="font-serif font-bold text-base text-[#0c1524]">Serviços</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#b0874a] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Ações principais em harmonia com o Hero */}
            <div className="pt-2 space-y-2.5">
              {/* Botão de Contato Pílula Verde Idêntico ao Hero */}
              <button
                onClick={() => scrollToSection('contato')}
                className="relative w-full py-3.5 px-6 rounded-full bg-[#1b6b3a] hover:bg-[#155a30] active:scale-[0.99] text-white font-bold text-base shadow-md shadow-emerald-950/20 flex items-center justify-center transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Contato com a Equipe</span>
                </div>
                <ArrowRight className="w-4 h-4 absolute right-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Botão secundário de WhatsApp direto */}
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 px-4 rounded-full bg-white hover:bg-[#fbf7f0] border border-[#e8dac6] text-slate-800 font-semibold text-sm flex items-center justify-center gap-2.5 transition-colors active:scale-[0.99]"
              >
                <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center p-1">
                  <img src="/wpp.png" alt="WhatsApp" className="w-full h-full object-contain" />
                </div>
                <span>Conversar no WhatsApp</span>
              </button>
            </div>

            {/* Rodapé do Menu com Horário e Segurança */}
            <div className="pt-3 border-t border-[#ede2d2] flex items-center justify-between text-[11px] text-slate-500 font-medium px-1">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#b0874a]" />
                <span>Seg a Sex: 10h às 18h</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Atendimento Seguro</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
