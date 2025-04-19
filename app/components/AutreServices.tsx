import Image from 'next/image';
import Link from 'next/link';

const AutreServices = () => {
  return (
    <section className="py-16 bg-[#1C1C1C]">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <h2 className="text-5xl font-light text-[#F9F7BE] text-center mb-4">Autre services</h2>
        <p className="text-center mb-16 max-w-[902px] mx-auto text-[#F9F7BE]/70">
          Accédez à notre <span className="text-[#F9F7BE]">Marketplace</span> artisanale et à une <span className="text-[#F9F7BE]">Bibliothèque</span> riche en savoirs
        </p>

        <div className="space-y-24">
          {/* Marketplace Section */}
          <div className="flex flex-col lg:flex-row items-start gap-32 mx-auto">
            <div className="w-full lg:w-auto flex-shrink-0 mb-4 lg:mb-0">
              <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[373px] lg:w-[582px]">
                <Image
                  src="/images/home/market_place_image.png"
                  alt="Marketplace"
                  fill
                  className="rounded-[5px] object-cover"
                  style={{
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-[24px] lg:text-[32px] font-extralight text-[#F9F7BE] mb-4 lg:mb-6 font-poppins">Marketplace</h3>
              <p className="text-[#F9F7BE]/70 mb-6 lg:mb-8 max-w-[902px] text-sm lg:text-lg mx-auto lg:mx-0">
                Sur Trips Fi Bladi, explorez une sélection unique de produits artisanaux algériens : bijoux, poterie, tapis, tenues traditionnelles et bien plus. Soutenez les artisans locaux et célébrez un savoir-faire authentique
              </p>
              <div className="flex justify-center lg:justify-end">
                <Link href="/marketplace">
                  <button className="inline-flex items-center justify-center gap-2.5 bg-[#2B5E2E] text-[#F9F7BE] px-[20px] py-[10px] lg:px-[29px] lg:py-[14px] rounded-md hover:bg-[#234B25] transition-colors text-sm lg:text-base">
                    Explore Plus
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bibliothèque Section */}
          <div className="flex flex-col lg:flex-row items-start gap-32 mx-auto">
            <div className="order-2 lg:order-1 flex-1 text-center lg:text-left">
              <h3 className="text-[24px] lg:text-[32px] font-extralight text-[#F9F7BE] mb-4 lg:mb-6 font-poppins">Bibliothèque</h3>
              <p className="text-[#F9F7BE]/70 mb-6 lg:mb-8 max-w-[902px] text-sm lg:text-lg mx-auto lg:mx-0">
                Sur Trips Fi Bladi, explorez une sélection unique de produits artisanaux algériens : bijoux, poterie, tapis, tenues traditionnelles et bien plus. Soutenez les artisans locaux et célébrez un savoir-faire authentique
              </p>
              <div className="flex justify-center lg:justify-end">
                <Link href="/bibliotheque">
                  <button className="inline-flex items-center justify-center gap-2.5 bg-[#2B5E2E] text-[#F9F7BE] px-[20px] py-[10px] lg:px-[29px] lg:py-[14px] rounded-md hover:bg-[#234B25] transition-colors text-sm lg:text-base">
                    Explore Plus
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto flex-shrink-0 mb-4 lg:mb-0">
              <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[373px] lg:w-[582px]">
                <Image
                  src="/images/home/bib_image.png"
                  alt="Bibliothèque"
                  fill
                  className="rounded-[5px] object-cover"
                  style={{
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutreServices; 