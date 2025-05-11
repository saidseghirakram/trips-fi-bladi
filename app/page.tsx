import AdvantagesSection from "./components/AdvantagesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import OffresSection from "./components/OffresSection";
import AutreServices from "./components/AutreServices";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection 
        backgroundGradient={{
          color1: "#737373",
          color2: "transparent",
          color3: "transparent"
        }}
        title="Voyage autrement"
        subtitle="et Lasser un impact"
        description="Explorez autrement, impactez durablement !"
        height="min-h-screen"
        backgroundImage="/images/home/hero_section_image.png"
        showSocialLinks={true}
        additionalLinks={[
          {
            href: "/who_are_we",
            text: "Qui sommes nous",
            position: "right"
          }
        ]}
      />

      {/* Advantages Section */}
      <AdvantagesSection />
      
      {/* Offres Section */}
      <OffresSection 
        backgroundColor="#1a1a1a"
        title="Nos offres"
        subtitle="Trouvez votre expérience idéale et laissez-vous guider en toute sérénité"
      />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Autre Services Section */}
      <AutreServices />

      {/* Contact Section */}
      <ContactSection />

      {/* Spacer Section */}
      <section className="w-full h-[250px] md:h-[150px] bg-[#222]" />

      {/* Footer */}
      <Footer />
    </>
  );
}
