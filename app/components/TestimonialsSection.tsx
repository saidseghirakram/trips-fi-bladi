'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    image: "/images/home/comments/1.png",
    quote: "Un vrai coup de cœur pour Trips Fi Bladi ! 🌟 Une agence qui fait rimer voyage et respect de la nature. Chaque aventure est magique, bien organisée et éco-responsable. Je recommande les yeux fermés ! 🌍✨🌿",
    name: "Alexandre Martin",
    role: "Voyageur Aventurier"
  },
  {
    id: 2,
    image: "/images/home/comments/2.png",
    quote: "Trips Fi Bladi, un voyage éco-responsable et inoubliable ! 🌍 Nature préservée, organisation au top. Je recommande à 100% ! ✨🌿",
    name: "Sarah Benali",
    role: "Guide Touristique"
  },
  {
    id: 3,
    image: "/images/home/comments/3.png",
    quote: "Une expérience magique avec Trips Fi Bladi ! 🌟 À conseiller pour les paysages à couper le souffle et les rencontres authentiques dans le respect de la nature. 🌍✨ Je recommande !",
    name: "Karim Hadj",
    role: "Photographe Voyageur"
  }
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setIsAnimating(true);
    }
  }, []);

  return (
    <section className="py-20 bg-[#98BB63] overflow-hidden">
     

      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden px-[70px]"
      >
        <div 
          className={`flex gap-24 ${
            isAnimating ? 'animate-[scroll_40s_linear_infinite] md:animate-[scroll_35s_linear_infinite] sm:animate-[scroll_30s_linear_infinite]' : ''
          } hover:pause-animation`}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[558px] h-[240px] bg-[#2B5E2E] rounded-[20px] relative"
            >
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[140px] h-[140px]">
                  <div className="absolute inset-0 rounded-full border-4 border-[#F9F7BE]/30" />
                  <Image
                    src={testimonial.image}
                    alt="Testimonial"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="ml-[170px] flex items-center h-full flex-1 pr-8">
                <p className="text-[#F9F7BE] text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 