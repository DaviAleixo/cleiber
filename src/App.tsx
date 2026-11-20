import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyModal } from './components/PrivacyModal';

function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#c5a059]/20 selection:text-slate-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Problems />
        <HowItWorks />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyModalOpen(true)} />
      <WhatsAppButton />
      <CookieBanner onOpenPrivacy={() => setIsPrivacyModalOpen(true)} />
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}

export default App;
