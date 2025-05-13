import Footer from "../components/Footer";
import Image from "next/image";

export default function WhoAreWe() {
  return (
    <div className="min-h-screen bg-[#222222] flex flex-col overflow-x-hidden pt-22">
      {/* Qui sommes-nous ? Section */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between bg-[#2B5E2E] rounded-xl m-0 md:mx-auto mt-8 p-4 sm:p-6 md:p-10 max-w-full md:max-w-4xl lg:max-w-6xl gap-4 md:gap-x-10 overflow-hidden">
        {/* Left: Text */}
        <div className="w-full md:flex-1 text-left px-1 sm:px-2 md:px-0 mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#98BB63]">Qui sommes-nous ?</h2>
          <p className="text-white text-base md:text-lg">
            <span className="font-bold">Trips Fi Bladi</span> est une plateforme innovante qui transforme le voyage en une expérience immersive, intelligente et engagée. Nous réinventons le tourisme en alliant exploration, valorisation du patrimoine et soutien aux communautés locales. À travers notre approche durable et nos solutions technologiques, nous simplifions l&apos;expérience des voyageurs tout en créant un impact positif sur chaque destination
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="w-full flex justify-center md:justify-end mb-4 md:mb-0 md:max-w-md">
          <Image
            src="/images/who_we_are.png"
            alt="Qui sommes-nous illustration"
            width={350}
            height={300}
            className="object-contain w-full h-auto max-w-xs md:max-w-md"
            priority
          />
        </div>
      </section>

      {/* Nos Valeurs Section */}
      <section className="mt-16 mb-10 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-[#F9F7BE]">Nos Valeurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Écologie */}
          <div className="bg-[#2B5E2E] rounded-xl p-6 flex flex-col items-center text-center text-white">
            <span className="mb-3">
              {/* Plant Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path stroke="#98BB63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 21V12m0 0C9.5 12 7 10.5 7 7c0-3.5 5-6 5-6s5 2.5 5 6c0 3.5-2.5 5-5 5Z"/></svg>
            </span>
            <h3 className="text-lg font-bold mb-2 text-[#98BB63]">Écologie</h3>
            <p className="text-sm">Respecter la nature et promouvoir des pratiques de voyage durables.</p>
          </div>
          {/* Solidarité */}
          <div className="bg-[#2B5E2E] rounded-xl p-6 flex flex-col items-center text-center text-white">
            <span className="mb-3">
              {/* Heart Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path stroke="#98BB63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-4.35-6-10A6 6 0 0 1 12 5a6 6 0 0 1 6 6c0 5.65-6 10-6 10Z"/></svg>
            </span>
            <h3 className="text-lg font-bold mb-2 text-[#98BB63]">Solidarité</h3>
            <p className="text-sm">Soutenir l&apos;économie locale et les initiatives communautaires.</p>
          </div>
          {/* Authenticité */}
          <div className="bg-[#2B5E2E] rounded-xl p-6 flex flex-col items-center text-center text-white">
            <span className="mb-3">
              {/* Pin/Culture Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path stroke="#98BB63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5" stroke="#98BB63" strokeWidth="2"/></svg>
            </span>
            <h3 className="text-lg font-bold mb-2 text-[#98BB63]">Authenticité</h3>
            <p className="text-sm">Valoriser le patrimoine culturel et artisanal de chaque région.</p>
          </div>
          {/* Accessibilité */}
          <div className="bg-[#2B5E2E] rounded-xl p-6 flex flex-col items-center text-center text-white">
            <span className="mb-3">
              {/* Accessibility Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="7" r="3" stroke="#98BB63" strokeWidth="2"/><path stroke="#98BB63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 10v7m0 0l-4 4m4-4l4 4"/></svg>
            </span>
            <h3 className="text-lg font-bold mb-2 text-[#98BB63]">Accessibilité</h3>
            <p className="text-sm">Rendre le voyage responsable accessible à tous.</p>
          </div>
        </div>
      </section>

      {/* Nos Ambitions Section */}
      <section className="mt-24 mb-24 px-4 w-full ">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#98BB63]">Nos Ambitions</h2>
        <div className="flex flex-col gap-10 max-w-3xl lg:max-w-6xl mx-auto">
          <div className="bg-[#F9F7BE] rounded-lg p-6 text-center text-[#2B5E2E] font-semibold text-lg shadow-sm">
            Développer des expériences de voyage éco-responsables et enrichissantes.
          </div>
          <div className="bg-[#F9F7BE] rounded-lg p-6 text-center text-[#2B5E2E] font-semibold text-lg shadow-sm">
            Créer une plateforme mettant en avant les artisans et producteurs locaux.
          </div>
          <div className="bg-[#F9F7BE] rounded-lg p-6 text-center text-[#2B5E2E] font-semibold text-lg shadow-sm">
            Éduquer les voyageurs sur les bonnes pratiques d&apos;un tourisme durable.
          </div>
          <div className="bg-[#F9F7BE] rounded-lg p-6 text-center text-[#2B5E2E] font-semibold text-lg shadow-sm">
            Faciliter l&apos;accès à des destinations uniques et respectueuses de l&apos;environnement.
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 


