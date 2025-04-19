import Image from "next/image";
import Link from "next/link";
import AdvantagesSection from "./components/AdvantagesSection";
import OffresSection from "./components/OffresSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 -z-10">
        <Image
            src="/images/home/hero_section_image.png"
            alt="Hero background"
            fill
            className="object-cover"
          priority
        />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#737373] to-transparent opacity-40" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 sm:p-6 md:p-8">
          <div className="text-black text-2xl sm:text-3xl md:text-4xl font-bold">
            logo
          </div>
          <button className="group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F9F7BE" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 group-hover:stroke-white transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
              Voyage autrement
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 md:mb-6">
              et Lasser un impact
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl">
              Explorez autrement, impactez durablement !
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 flex gap-3 sm:gap-4">
          <Link href="#" className="group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-6 sm:h-6 fill-[#F9F7BE] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </Link>
          <Link href="#" className="group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-6 sm:h-6 fill-[#F9F7BE] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </Link>
          <Link href="#" className="group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-6 sm:h-6 fill-[#F9F7BE] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </Link>
        </div>

        {/* "Qui sommes nous" link */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
          <Link href="#" className="text-white hover:text-gray-200 text-sm sm:text-base md:text-lg">
            Qui sommes nous
          </Link>
    </div>
      </section>

      {/* Advantages Section */}
      <AdvantagesSection />

      {/* Offres Section */}
      <OffresSection />
    </>
  );
}
