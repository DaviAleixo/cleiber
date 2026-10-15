import React from 'react';
import { Hero1 } from './ui/hero-with-text-and-two-button';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen w-screen bg-white">
      <Hero1 />
    </section>
  );
};