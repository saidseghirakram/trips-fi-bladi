import Footer from "../components/Footer";

export default function WhoAreWe() {
  return (
    <div className="min-h-screen bg-[#222222]">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 sm:p-6 md:p-8">
        <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          logo
        </div>
        <button className="group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F9F7BE" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 group-hover:stroke-white transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
      </nav>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-200px)]">
        <h1 className="text-4xl font-bold text-center py-8">Who Are We</h1>
        <div className="container mx-auto px-4">
          {/* Add your content here */}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 


