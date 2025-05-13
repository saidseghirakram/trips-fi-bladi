import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';

const HistoriqueCulturel = () => {
  return (
    <div className="min-h-[140vh] bg-[#222222] pt-18   sm:px-6 ">
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

        {/* Lieux qui racontent Section */}
        <div className="bg-[#222222] mt-20 py-16 w-full">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F9F7BE] mb-12 text-center">
              Lieux qui racontent
            </h2>

            {/* Timgad Card */}
            <div className="bg-[#70B050] rounded-lg p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Image */}
                <div className="w-full lg:w-5/12">
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/historique/artial.png"
                      alt="Timgad cité romaine"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-7/12">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-4 text-center lg:text-left">
                    Timgad, cité romaine en plein cœur des Aurès
                  </h3>
                  <p className="text-sm sm:text-base text-[#222222] leading-relaxed text-center lg:text-left">
                    Nichée aux portes des Aurès, la cité antique de Timgad est l&apos;un des joyaux 
                    archéologiques les plus fascinants d&apos;Algérie. Fondée par l&apos;empereur romain 
                    Trajan en l&apos;an 100 après J.-C., cette ville romaine a été conçue selon un plan 
                    parfaitement orthogonal, véritable chef-d&apos;œuvre d&apos;urbanisme antique.
                  </p>
                  <p className="text-sm sm:text-base text-[#222222] leading-relaxed mt-4 text-center lg:text-left">
                    Timgad impressionne par son état de conservation exceptionnel : ses rues 
                    pavées, ses thermes, son forum, sa bibliothèque et surtout son majestueux 
                    théâtre, qui pouvait accueillir jusqu&apos;à 3 500 spectateurs, plongent les 
                    visiteurs dans le quotidien d&apos;une ville florissante de l&apos;Empire romain.
                  </p>
                  <p className="text-sm sm:text-base text-[#222222] leading-relaxed mt-4 text-center lg:text-left">
                    Classée au patrimoine mondial de l&apos;UNESCO depuis 1982, Timgad est bien 
                    plus qu&apos;un site archéologique. C&apos;est une invitation à remonter le temps, à 
                    découvrir l&apos;ingéniosité romaine, et à s&apos;émerveiller devant un passé qui 
                    continue de vivre sous le ciel algérien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-[#222222] py-25 w-full">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center justify-center text-center ">
              <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-sans text-[#F9F7BE] mb-8 max-w-6xl">
                Prêt à faire vibrer l&apos;Histoire et révéler les cultures
              </h2>
              <button 
                className="bg-[#70B050] text-[#F9F7BE] px-8 py-3 rounded-lg 
                          text-lg font-semibold hover:bg-[#2B5E2E] 
                          transition-colors duration-300 
                          transform hover:scale-105 cursor-pointer"
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HistoriqueCulturel; 