import Image from 'next/image';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="relative bg-[#222] h-[806px] md:h-[706px]">
      {/* Gray Rectangle Background */}
      <div className="absolute top-0 left-0 right-0 h-full bg-[#2E2E2E]" />
      
      {/* Background Image Container - Right Side */}
      <div className="absolute top-0 right-0 w-[634.878px] h-full z-10 hidden md:block">
        <Image
          src="/images/home/contact.png"
          alt="Contact background"
          fill
          className="object-cover"
          style={{
            backgroundPosition: '50%',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Green overlay */}
        <div className="absolute inset-0 bg-[#2B5E2E]/40 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-20 h-full">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Content */}
          <div className="w-full md:w-1/2 px-4 md:px-0 flex flex-col justify-center pt-8 md:pt-0">
            <h2 className="text-[40px] font-light text-[#F9F7BE] mb-4">Restons En Contact</h2>
            <div className="text-[#F9F7BE]/70 space-y-1 mb-12">
              <p>Une Question, Une Suggestion Ou Un Avis ?</p>
              <p>Écrivez-Nous Et Partagez Votre Expérience</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F9F7BE" className="w-6 h-6">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#F9F7BE]/70">+213(123-45-67-89)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F9F7BE" className="w-6 h-6">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <span className="text-[#F9F7BE]/70">Example@Gmail.Com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mb-16 md:mb-0">
              <Link href="#" className="text-[#F9F7BE] hover:text-[#F9F7BE]/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </Link>
              <Link href="#" className="text-[#F9F7BE] hover:text-[#F9F7BE]/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="text-[#F9F7BE] hover:text-[#F9F7BE]/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="w-full md:w-1/2 relative z-30 flex items-center">
            <div className="w-full md:w-[500px] bg-[#2B5E2E] rounded-lg p-6 md:p-10 mx-4 md:mx-0 md:absolute md:left-0 md:top-[-15px] h-auto md:h-[736px]">
              <h3 className="text-[#F9F7BE] text-xl md:text-2xl mb-4 md:mb-8 text-center">Écrivez-Nous, On Vous Écoute</h3>
              <form className="space-y-3 md:space-y-6">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full p-3 md:p-4 rounded-md bg-[#ACD1A3] placeholder-[#1C1C1C] text-[#1C1C1C] focus:outline-none text-base"
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  className="w-full p-3 md:p-4 rounded-md bg-[#ACD1A3] placeholder-[#1C1C1C] text-[#1C1C1C] focus:outline-none text-base"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="w-full p-3 md:p-4 rounded-md bg-[#ACD1A3] placeholder-[#1C1C1C] text-[#1C1C1C] focus:outline-none text-base"
                />
                <textarea
                  placeholder="Votre Message"
                  rows={4}
                  className="w-full p-3 md:p-4 rounded-md bg-[#ACD1A3] placeholder-[#1C1C1C] text-[#1C1C1C] focus:outline-none resize-none text-base"
                />
                <p className="text-center text-[#F9F7BE] text-sm">
                  Envoyez-Nous Un Message, On Vous Répond Avec Plaisir
                </p>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#F9F7BE] text-[#1C1C1C] rounded-md hover:bg-[#F9F7BE]/90 transition-colors text-base font-medium"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;  