import React from 'react';
import { Hero1 } from './ui/hero-with-text-and-two-button';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="w-full relative overflow-hidden bg-[#faf4ec] bg-[url('/assets/backgroundmobile.png')] bg-no-repeat bg-top bg-[length:100%_auto] lg:bg-[url('/assets/backgrounddesktop.png')] lg:bg-cover lg:bg-center pt-16 sm:pt-20 lg:pt-28 pb-10 sm:pb-16 lg:pb-24"
    >
      <Hero1 />
    </section>
  );
};
