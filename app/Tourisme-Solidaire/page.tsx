import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#98BB63] pt-16 relative pb-40">

        <Image 
          src="/images/tourismeSolidaire/curve.svg" 
          alt="curve" 
          width={900}
          height={400}
          className=" h-auto absolute top-0 left-0"
        />
        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-20 sm:pt-24 md:pt-28 pb-12 md:pb-16">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            {/* Left content */}
            <div className="md:w-1/2">
              <h1 className="text-[#2B5E2E] text-4xl md:text-5xl font-bold mb-4">
                Voyage Solidaire En Algérie
              </h1>
              <h2 className="text-[#2B5E2E] text-3xl md:text-4xl font-bold mb-6">
                Explore, Aide, Et Fais La Différence !
              </h2>
              <p className="text-[#2B5E2E]/90 text-lg md:text-xl mb-8">
                Venez découvrir l&apos;Algérie autrement en vous impliquant dans des projets solidaires.
                Profitez de l&apos;occasion pour explorer des paysages magnifiques tout en apportant votre
                aide aux communautés locales. Un voyage qui allie découverte, engagement et impact
                positif
              </p>
            </div>

            {/* Right image */}
            <div className="md:w-1/2">
              <Image
                src="/images/volunteering.png"
                alt="Volunteering illustration"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#222222] py-12 min-h-[700px] relative">
      {/* Stats section with black background */}
        <div className="container mx-auto px-4 ">
          <div className="h-[102px] sm:h-[300px] w-full flex justify-center items-center gap-4 sm:gap-16 absolute left-0 top-[-51px] sm:top-[-150px]">
            <div className="text-center w-[102px] h-[102px] sm:w-[300px] sm:h-[300px] flex flex-col gap-1 sm:gap-2 justify-center items-center bg-[#2E2E2E]">
              <div className="text-xl sm:text-4xl font-bold text-[#98BB63]">+530</div>
              <div className="text-[#98BB63]/80 text-xs sm:text-base font-semibold">Projects</div>
            </div>
            <div className="text-center w-[102px] h-[102px] sm:w-[300px] sm:h-[300px] flex flex-col gap-1 sm:gap-2 justify-center items-center bg-[#2E2E2E]">
              <div className="text-xl sm:text-4xl font-bold text-[#98BB63]">+450</div>
              <div className="text-[#98BB63]/80 text-xs sm:text-base font-semibold">Client</div>
            </div>
            <div className="text-center w-[102px] h-[102px] sm:w-[300px] sm:h-[300px] flex flex-col gap-1 sm:gap-2 justify-center items-center bg-[#2E2E2E]">
              <div className="text-xl sm:text-4xl font-bold text-[#98BB63]">+150</div>
              <div className="text-[#98BB63]/80 text-xs sm:text-base font-semibold">Organizations</div>
            </div>
          </div>
        </div>
        
        {/* Voyager autrement en Algérie section */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-40 sm:pt-64 pb-16">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left content */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#F9F7BE]">
                Voyager autrement en Algérie
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-4 opacity-90 text-[#F9F7BE] leading-8">
                Participez à des projets de solidarité tout en découvrant les trésors culturels.
                Profitez véritablement de chaque voyage pour découvrir des régions inconnues et de
                participer activement à des actions qui font la différence. Engagez-vous pour un
                voyage signifiant, où chaque pas compte pour un avenir meilleur
              </p>
            </div>
            
            {/* Right image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/images/tourismeSolidaire/men.svg"
                alt="Homme plantant un arbre"
                width={400}
                height={400}
                className="w-full max-w-[300px] md:max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
 