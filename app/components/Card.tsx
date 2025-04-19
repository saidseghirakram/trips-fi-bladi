interface CardProps {
  icon: string;
  title: string;
  bottomText: string;
}

export default function Card({ icon, title, bottomText }: CardProps) {
  return (
    <div className="group relative w-full lg:w-[240px]">
      {/* Glow effect background */}
      <div className="absolute inset-0 scale-[1.8] bg-[#F9F7BE] rounded-lg blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-300 -z-10"></div>
      
      {/* Desktop layout */}
      <div className="hidden lg:flex relative bg-[#F9F7BE] hover:bg-[#2B5E2E] rounded-lg p-8 transition-all duration-500 ease-in-out h-[300px] flex-col items-center justify-center gap-8 group-hover:shadow-[0_0_60px_rgba(249,247,190,0.3)]">
        <div className="w-16 h-16 relative">
          <svg className="w-full h-full fill-current text-[#2B5E2E] group-hover:text-[#F9F7BE] transition-colors duration-500">
            <use href={`/images/icons/sprite.svg${icon}`} />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-[#2B5E2E] group-hover:text-[#F9F7BE] text-center transition-colors duration-500 max-w-[180px] leading-tight">
          {title}
        </h3>
        <div className="absolute -bottom-24 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white px-4 text-sm">
          {bottomText}
        </div>
      </div>

      {/* Tablet/Mobile layout */}
      <div className="lg:hidden flex bg-[#F9F7BE] hover:bg-[#2B5E2E] rounded-lg p-10 transition-all duration-500 ease-in-out items-center gap-6 group-hover:shadow-[0_0_60px_rgba(249,247,190,0.3)]">
        <div className="w-14 h-14 relative flex-shrink-0">
          <svg className="w-full h-full fill-current text-[#2B5E2E] group-hover:text-[#F9F7BE] transition-colors duration-500">
            <use href={`/images/icons/sprite.svg${icon}`} />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-[#2B5E2E] group-hover:text-[#F9F7BE] transition-colors duration-500 leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}