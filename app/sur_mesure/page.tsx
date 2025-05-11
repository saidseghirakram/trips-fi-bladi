import Footer from "../components/Footer";
import OffresSection from "../components/OffresSection";
import HeroSection from "../components/HeroSection";

export default function SurMesure() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <HeroSection 
        backgroundGradient={{
          color1: "#2B5E2E",
          color2: "#7ABC54",
          color3: "#C0D59E"
        }}
        title="Planifiez Votre Voyage Personnalisé"
        description="Personnalisez chaque détail de votre voyage pour une expérience unique et sur-mesure. Choisissez les destinations, les activités et les hébergements qui correspondent à vos envies, et laissez-nous faire le reste !"
      />

      {/* Second Section - Light Green Background */}
      <section className="relative bg-[#98BB63] h-[700px] sm:h-[700px]">
        {/* Form Container */}
        <div className="absolute top-[-250px] left-1/2 transform -translate-x-1/2 w-full px-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-[1000px] mx-auto">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Nom */}
                <div>
                  <label className="text-[#2B5E2E] text-sm mb-1 block">Nom</label>
                  <input
                    type="text"
                    placeholder="Entrez Votre Nom"
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded bg-white placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label className="text-[#2B5E2E] text-sm mb-1 block">E-mail</label>
                  <input
                    type="email"
                    placeholder="Entrez Votre E-Mail"
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded bg-white placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className="text-[#2B5E2E] text-sm mb-1 block">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="Entrez Votre Numéro De Téléphone"
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded bg-white placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>

                {/* Durée */}
                <div>
                  <label className="text-[#2B5E2E] text-sm mb-1 block">Durée</label>
                  <input
                    type="text"
                    placeholder="Durée De Voyage"
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded bg-white placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>

                {/* Période */}
                <div>
                  <label className="text-[#2B5E2E] text-sm mb-1 block">Période</label>
                  <input
                    type="text"
                    placeholder="Ex: Mai, Juin, Mois Spécifique"
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded bg-white placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="text-[#2B5E2E] text-sm mb-1 block">Destination</label>
                  <input
                    type="text"
                    placeholder="Entrez Une Ville Ou Une Région"
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded bg-white placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>

                {/* Nombre De Personnes */}
                <div>
                  <label className="text-[#2B5E2E] text-sm mb-1 block">Nombre De Personnes</label>
                  <input
                    type="number"
                    placeholder="Nombre De Voyageurs"
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded bg-white placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>

                {/* Âge */}
                <div>
                  <label className="text-[#2B5E2E] text-sm mb-1 block">Âge</label>
                  <input
                    type="text"
                    placeholder="Votre Âge"
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded bg-white placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Confirmation D&apos;identification */}
              <div>
                <label className="text-[#2B5E2E] text-sm mb-1 block">Confirmation D&apos;identification</label>
                <input
                  type="text"
                  placeholder="Entrez Votre Numéro D&apos;identification"
                  className="w-full p-2 sm:p-3 border border-gray-200 rounded bg-white placeholder-gray-400 text-sm sm:text-base"
                />
              </div>

              {/* Parlez-Nous De Vous Et De Vos Envies */}
              <div>
                <label className="text-[#2B5E2E] text-sm mb-1 block">Parlez-Nous De Vous Et De Vos Envies</label>
                <textarea
                  rows={4}
                  placeholder="Décrivez Vos Attentes Pour Ce Voyage"
                  className="w-full p-2 sm:p-3 border border-gray-200 rounded bg-white placeholder-gray-400 resize-none text-sm sm:text-base"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4 sm:pt-6">
                <button
                  type="submit"
                  className="bg-[#2B5E2E] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-[#234B25] transition-colors duration-300"
                >
                  Lancez Votre Aventure
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Offres Section */}
      <OffresSection 
        backgroundColor="#98BB63"
        title="Découvrez Nos Voyages Planifiés et Laissez-Vous Inspirer"
        subtitle=""
      />

      {/* Footer */}
      <Footer />
    </div>
  );
} 



