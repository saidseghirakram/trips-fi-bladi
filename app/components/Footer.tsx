import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#2B5E2E]">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-8 py-6">
          <div className="flex justify-between items-start">
            {/* Left Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-[#F9F7BE]">TRIPS FI BLADI</h3>
              <p className="text-sm text-[#F9F7BE]/70 max-w-md">
                Explorez l&apos;Algérie à travers un écosystème de voyages durables, authentiques et respectueux de l&apos;environnement
              </p>
              <div className="flex gap-4">
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

            {/* Middle Section */}
            <div>
              <h4 className="text-[#F9F7BE] mb-4">Liens utiles</h4>
              <ul className="space-y-2 text-[#F9F7BE]/70">
                <li><Link href="#" className="hover:text-[#F9F7BE]">Nos offres</Link></li>
                <li><Link href="#" className="hover:text-[#F9F7BE]">Marketplace</Link></li>
                <li><Link href="#" className="hover:text-[#F9F7BE]">Bibliothèque</Link></li>
              </ul>
            </div>

            {/* Right Section */}
            <div>
              <h4 className="text-[#F9F7BE] mb-4">Contact Us</h4>
              <div className="space-y-2 text-[#F9F7BE]/70">
                <p>Example@gmail.com</p>
                <p>+213(123-45-67-89)</p>
                <p>+213(123-45-67-89)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F9F7BE]/10">
          <div className="container mx-auto px-8 py-4 flex justify-between items-center text-sm text-[#F9F7BE]/70">
            <p>©TRIPS_FI_BLADI. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#F9F7BE]">Conditions d&apos;utilisation</Link>
              <Link href="#" className="hover:text-[#F9F7BE]">politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="md:hidden px-6 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-[#F9F7BE]">TRIPS FI BLADI</h3>
          <p className="text-sm text-[#F9F7BE]/70">
            Explorez l&apos;Algérie à travers un écosystème de voyages durables, authentiques et respectueux de l&apos;environnement
          </p>
          <div className="flex gap-4">
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

        {/* Links Section */}
        <div className="space-y-6">
          <div>
            <h4 className="text-[#F9F7BE] mb-3">Liens utiles</h4>
            <ul className="space-y-2 text-[#F9F7BE]/70">
              <li><Link href="#" className="hover:text-[#F9F7BE]">Nos offres</Link></li>
              <li><Link href="#" className="hover:text-[#F9F7BE]">Marketplace</Link></li>
              <li><Link href="#" className="hover:text-[#F9F7BE]">Bibliothèque</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F9F7BE] mb-3">Contact Us</h4>
            <div className="space-y-2 text-[#F9F7BE]/70">
              <p>Example@gmail.com</p>
              <p>+213(123-45-67-89)</p>
              <p>+213(123-45-67-89)</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-[#F9F7BE]/10 space-y-4">
          <p className="text-sm text-[#F9F7BE]/70">©TRIPS_FI_BLADI. Tous droits réservés.</p>
          <div className="flex flex-col gap-2 text-sm text-[#F9F7BE]/70">
            <Link href="#" className="hover:text-[#F9F7BE]">Conditions d&apos;utilisation</Link>
            <Link href="#" className="hover:text-[#F9F7BE]">politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 