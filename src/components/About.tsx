import React, { useState } from 'react';
import { GraduationCap, Award, Users, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Placeholder para as 3 fotos do escritório
  const officeImages = [
    { id: 1, alt: "Escritório - Vista 1", description: "Recepção do escritório" },
    { id: 2, alt: "Escritório - Vista 2", description: "Sala de atendimento" },
    { id: 3, alt: "Escritório - Vista 3", description: "Ambiente de trabalho" }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % officeImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + officeImages.length) % officeImages.length);
  };

  return (
    <>
      {/* Seção Nosso Escritório */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <span className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border">
              Conheça Nosso Trabalho
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Nosso Escritório
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Conteúdo sobre o escritório */}
            <div>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                Com anos de experiência em Direito Previdenciário, ajudamos centenas de brasileiros a garantir sua aposentadoria e benefícios do INSS.
              </p>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Aqui, você tem atendimento humanizado, análise detalhada do seu caso e acompanhamento completo – do início ao fim do processo.
              </p>

              {/* Características do escritório */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Diversos clientes satisfeitos</span>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Atendimento 100% online ou presencial</span>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Especialistas em aposentadorias, revisões e benefícios negados</span>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://wa.me/5531984221327?text=Olá! Quero conhecer mais sobre o escritório.', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar Conosco</span>
              </button>
            </div>

            {/* Carousel de Fotos do Escritório */}
            <div className="relative">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Nosso Ambiente</h3>
                
                {/* Carousel Container */}
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="w-full h-64 bg-slate-200 flex items-center justify-center">
                    <img 
                      src={currentImage === 0 ? '/assets/cleiber2.jpg' : currentImage === 1 ? '/assets/botelli.jpg' : '/assets/Cleiber3.jpg'}
                      alt={officeImages[currentImage].alt}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  
                  {/* Botões de navegação */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center space-x-2">
                  {officeImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImage ? 'bg-green-500' : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Quem é Cleiber */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <span className="inline-block bg-white text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border">
              Conheça o Profissional
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Quem é Cleiber
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Foto do Dr. Cleiber */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="w-full h-96 bg-slate-200 rounded-xl overflow-hidden mb-6">
                  <img 
                    src="/assets/cleiber.jpg" 
                    alt="Dr. Cleiber Amarilo" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Dr. Cleiber Amarilo</h3>
                  <p className="text-slate-600 font-medium">Especialista em Direito Previdenciário</p>
                </div>
              </div>
            </div>

            {/* Informações sobre o Dr. Cleiber */}
            <div className="order-1 lg:order-2">
              <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                Especialista em Direito Previdenciário, o Dr. Cleiber atua ajudando pessoas como você a conquistar seus direitos junto ao INSS.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-slate-200">
                  <div className="bg-slate-100 p-2 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-slate-700 font-semibold mb-1">Formação Acadêmica</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Formado em Direito pela Faculdade de Direito de Conselheiro Lafaiete - FDCL
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-slate-200">
                  <div className="bg-slate-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-slate-700 font-semibold mb-1">Experiência Comprovada</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Diversos processos concluídos com sucesso
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-slate-200">
                  <div className="bg-slate-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-slate-700 font-semibold mb-1">Atendimento Diferenciado</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Atendimento humanizado e estratégico, com foco em resultados
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://wa.me/5531984221327?text=Olá Dr. Cleiber! Gostaria de conversar sobre meu caso.', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar com Dr. Cleiber</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};