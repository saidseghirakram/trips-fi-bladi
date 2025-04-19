'use client';

import { useState, useEffect } from 'react';
import Card from './Card';

const advantagesData = [
  {
    icon: "#location",
    title: "Voyage sur mesure et simplifié",
    bottomText: "Votre voyage personnalisé selon vos préférences."
  },
  {
    icon: "#globe",
    title: "Expériences uniques et immersives",
    bottomText: "Découvrez des expériences authentiques et mémorables."
  },
  {
    icon: "#money-bag",
    title: "Meilleur rapport qualité-prix",
    bottomText: "Des séjours sur mesure, sans frais cachés, aux meilleurs tarifs."
  },
  {
    icon: "#eco",
    title: "Tourisme durable et responsable",
    bottomText: "Voyagez de manière éthique et respectueuse de l'environnement."
  },
  {
    icon: "#clock",
    title: "Plateforme innovante",
    bottomText: "Une plateforme moderne pour une expérience utilisateur optimale."
  }
];

export default function AdvantagesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % advantagesData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-40 pb-20 bg-[#1a1a1a] relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 relative">
        {/* Content */}
        <div className="relative" style={{ zIndex: 1 }}>
          <h2 className="text-5xl font-medium text-center text-[#F9F7BE] mb-40">
            Avantages de Notre Agence
          </h2>

          {/* Background Text */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0" style={{ zIndex: 0 }}>
            <p 
              className=" hidden md:block md:text-[200px] sm:font-normal   md:font-bold text-center whitespace-nowrap"
              style={{ 
                color: '#242424',
                opacity: 0.4,
                letterSpacing: '-0.05em'
              }}
            >
              TRIPS FI BLADI
            </p>
          </div>

          {/* Desktop Layout (lg:) */}
          <div className="hidden lg:flex justify-between items-start max-w-[1400px] mx-auto">
            <div className="flex justify-center">
              <Card {...advantagesData[0]} />
            </div>
            <div className="flex justify-center mt-20">
              <Card {...advantagesData[1]} />
            </div>
            <div className="flex justify-center">
              <Card {...advantagesData[2]} />
            </div>
            <div className="flex justify-center mt-32">
              <Card {...advantagesData[3]} />
            </div>
            <div className="flex justify-center mt-16">
              <Card {...advantagesData[4]} />
            </div>
          </div>

          {/* Tablet Layout (md: to lg:) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 max-w-3xl mx-auto">
            {advantagesData.map((advantage, index) => (
              <div key={index} className={index === advantagesData.length - 1 ? "col-span-2" : ""}>
                <Card {...advantage} />
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex justify-center">
              <Card {...advantagesData[currentSlide]} />
            </div>
            
            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {advantagesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-[#2B5E2E]' : 'bg-[#F9F7BE] opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 