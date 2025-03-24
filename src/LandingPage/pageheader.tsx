import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from "/Logo.svg";

const PageHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="text-white flex justify-between items-center px-6 py-4 shadow-md border-b-4 border-[#D9D9D9]/90 relative">
      {/* Directly using the logo */}
      <button>
        <img src={Logo} alt="AC Logo" className="w-10 h-6" />
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8 mr-8">
        {['about', 'skills', 'experience', 'project'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="font-sunflower font-bold text-white/80 hover:text-white"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden text-white transition-transform duration-300 ease-in-out"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#18424E] flex flex-col items-center space-y-4 py-4 pb-8 md:hidden border-b-4 border-[#D9D9D9]/90 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        {['about', 'skills', 'experience', 'project'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="font-sunflower font-bold text-white/80 hover:text-white"
            onClick={toggleMobileMenu}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default PageHeader;
