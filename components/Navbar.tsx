
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Blood Tests', href: '#blood-tests' },
    { name: 'Locations', href: '#' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#038f5c] rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
            <div>
              <h1 className={`font-bold leading-none ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>AARTHI</h1>
              <p className={`text-[10px] tracking-widest ${isScrolled ? 'text-[#1a8058]' : 'text-[#1a8058] md:text-slate-200'}`}>SCANS & LABS</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#038f5c] ${isScrolled ? 'text-slate-600' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <button className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md active:scale-95 ${
              isScrolled 
                ? 'bg-[#038f5c] text-white hover:bg-[#1a8058]' 
                : 'bg-white text-[#038f5c] hover:bg-slate-100'
            }`}>
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-slate-900' : 'text-[#038f5c]'}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block text-slate-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-[#038f5c] text-white py-3 rounded-xl font-bold">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
