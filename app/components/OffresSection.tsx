'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface OffresSectionProps {
  backgroundColor: string;
  title?: string;
  subtitle?: string;
}

const offresData = [
  {
    id: 1,
    title: "Sur Mesure",
    description: "Votre aventure algérienne, conçue selon vos envies",
    image: "/images/home/offres/1.png",
  },
  {
    id: 2,
    title: "Nature & Exploration",
    description: "L'Algérie sauvage vous attend, explorez l'inexploré !",
    image: "/images/home/offres/2.png",
  },
  {
    id: 3,
    title: "Tourisme Solidaire",
    description: "Voyagez en Algérie, soutenez les communautés, créez du sens",
    image: "/images/home/offres/3.png",
  },
  {
    id: 4,
    title: "Historique & Culturel",
    description: "Un voyage dans le temps au cœur du patrimoine algérien",
    image: "/images/home/offres/4.png",
  }
];

export default function OffresSection({ 
  backgroundColor = "#1a1a1a",
  title = "Nos offres",
  subtitle = "Trouvez votre expérience idéale et laissez-vous guider en toute sérénité"
}: OffresSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offresData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-40`} style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-medium text-[#F9F7BE] mb-14">
            {title}
          </h2>
          <p className="text-xl text-[#F9F7BE]/80">
            {subtitle}
          </p>
        </div>

        {/* Desktop Grid (4 columns) */}
        <div className="mt-10 hidden lg:grid grid-cols-4 gap-x-8 gap-y-16 max-w-7xl mx-auto">
          {offresData.map((offre) => (
            <OffreCard key={offre.id} offre={offre} />
          ))}
        </div>

        {/* Tablet Grid (2x2) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 max-w-3xl mx-auto">
          {offresData.map((offre) => (
            <OffreCard key={offre.id} offre={offre} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="max-w-sm mx-auto">
            <OffreCard offre={offresData[currentSlide]} />
            
            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {offresData.map((_, index) => (
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

// Card Component
function OffreCard({ offre }: { offre: typeof offresData[0] }) {
  const router = useRouter();

  const handleClick = () => {
    const route = offre.title.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_');
    router.push(`/${route}`);
  };

  return (
    <div className="flex flex-col" onClick={handleClick}>
      {/* Card with Image */}
      <div className="group relative overflow-hidden rounded-lg cursor-pointer h-[400px] shadow-lg">
        {/* Image Container */}
        <div className="absolute inset-0">
          <Image
            src={offre.image}
            alt={offre.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />
        </div>

        {/* Title Container */}
        <div className="absolute inset-x-0 transition-all duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[160px]">
          <div className="bg-[#2B5E2E] py-4">
            <h3 className="text-2xl font-medium text-[#F9F7BE] text-center">
              {offre.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Description below card */}
      <div className="mt-4 text-center">
        <p className="text-[#F9F7BE] text-lg leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          {offre.description}
        </p>
      </div>
    </div>
  );
} 