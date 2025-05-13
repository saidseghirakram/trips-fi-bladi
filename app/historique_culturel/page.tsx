import React from 'react';
import Image from 'next/image';

const HistoriqueCulturel = () => {
  return (
    <div className="min-h-[140vh] bg-[#222222] pt-18 py-10  sm:px-6 ">
      <div className="max-w-8xl mx-auto">
        {/* Hero Section */}
        <div className="bg-[#70B050] rounded-lg shadow-lg p-6 pb-20 sm:pb-4 min-h-[580px] relative">
          {/* Content Container */}
          <div className="flex flex-col items-start justify-center mx-auto py-20 relative z-10 text-center sm:text-left">
            {/* Title */}
            <h1 className="text-2xl font-bold sm:text-5xl font-serif text-[#F9F7BE] mb-6 w-full sm:w-fit">
              Historique & Culturel
            </h1>

            {/* Description */}
            <p className="text-xl text-[#F9F7BE] mb-12 max-w-2xl">
              Plongez dans l&apos;histoire fascinante de l&apos;Algérie et explorez un patrimoine culturel
              unique, riche en traditions et en merveilles anciennes
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mt-10">
              <div className="bg-[#2B5E2E] p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-[#F9F7BE]">+200</div>
                <div className="text-[#F9F7BE] text-sm">Destination</div>
              </div>
              <div className="bg-[#2B5E2E] p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-[#F9F7BE]">+500</div>
                <div className="text-[#F9F7BE] text-sm">Voyages</div>
              </div>
              <div className="bg-[#2B5E2E] p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-[#F9F7BE]">+350</div>
                <div className="text-[#F9F7BE] text-sm">Client</div>
              </div>
            </div>
          </div>

          {/* Stamp Images */}
          <div className="w-[177px] sm:w-[280px] md:w-[320px] lg:w-[345.83px] 
                h-[207px] sm:h-[330px] md:h-[370px] lg:h-[404.217px] 
                transform absolute 
                bottom-[-100px] sm:bottom-[-40px] md:bottom-0 
                sm:top-[-6%] md:top-[-8%] lg:top-[-10%] 
                right-6">
            <Image
              src="/images/historique/stiker2.png"
              alt="Historic stamp 2"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-[177px] sm:w-[300px] md:w-[380px] lg:w-[468px] 
                h-[207px] sm:h-[320px] md:h-[420px] lg:h-[534px] 
                transform absolute 
                bottom-[-100px] sm:bottom-[-80px] md:bottom-[-60px] lg:bottom-[-10%] 
                right-[40%] sm:right-[30%] md:right-[15%] lg:right-20">
            <Image
              src="/images/historique/sticker1.png"
              alt="Historic stamp 1"
              fill
              className="object-contain"
            />
          </div>
        </div>

     
      </div>
         {/* Heritage Section */}
         <div className="bg-[#222222] mt-20 py-16 w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="max-w-2xl lg:w-1/2 order-2 lg:order-1 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-serif text-[#F9F7BE] mb-6">
                  Sur les Traces de Notre Héritage
                </h2>
                <p className="text-sm am:text-lg  text-[#F9F7BE]/90 leading-6">
                  Partez à la découverte de notre patrimoine culturel à travers des voyages authentiques 
                  et historiques qui éveilleront les sens et nourrissent l&apos;esprit. Chaque destination est 
                  une page unique de notre histoire. Chaque rencontre une immersion dans une 
                  tradition vivante. Nous sommes les gardiens de ces récits, les passeurs de cette 
                  transmission, et où chaque pas renforce le lien entre passé et présent.
                </p>
              </div>

              {/* Image Container */}
              <div className="lg:w-1/2 relative order-1 lg:order-2">
                <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] mx-auto">
                  <Image
                    src="/images/historique/cup.png"
                    alt="Traditional Algerian Teapot"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HistoriqueCulturel; 