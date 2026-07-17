import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { LOGO_URL, CONTACT_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Banner Contact Details */}
      <div className="bg-warmgray-900 text-brand-100 text-xs py-2 px-4 hidden sm:block border-b border-warmgray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-warmgray-400">
              <Phone className="w-3 h-3 mr-1.5 text-brand-300" />
              {CONTACT_INFO.phone}
            </span>
            <span className="flex items-center text-warmgray-400">
              <Mail className="w-3 h-3 mr-1.5 text-brand-300" />
              {CONTACT_INFO.email}
            </span>
          </div>
          <div className="text-warmgray-400 text-[11px] font-mono tracking-wider uppercase">
            {CONTACT_INFO.address} • Professional Carpentry & Joinery
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-warmgray-50/95 backdrop-blur-md shadow-sm border-b border-warmgray-200/50 py-3'
            : 'bg-warmgray-50 py-4 border-b border-warmgray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={LOGO_URL}
                alt="Tierney Craft Joinery"
                referrerPolicy="no-referrer"
                className="h-10 sm:h-12 w-auto object-contain object-left mix-blend-multiply"
                onError={(e) => {
                  // Fallback to stylized text logo if image fails
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const sibling = document.getElementById('text-logo-fallback');
                  if (sibling) sibling.style.display = 'block';
                }}
              />
              <div id="text-logo-fallback" style={{ display: 'none' }} className="flex flex-col items-start leading-none">
                <span className="font-display font-bold tracking-tight text-lg text-warmgray-900 uppercase">TIERNEY</span>
                <span className="font-display font-medium tracking-widest text-[10px] text-brand-500 uppercase">CRAFT JOINERY</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-warmgray-600 hover:text-brand-500 font-medium text-sm tracking-wide transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-warmgray-600 hover:text-brand-500 font-medium text-sm tracking-wide transition-colors cursor-pointer"
              >
                Showcase
              </button>
              <button
                onClick={() => scrollToSection('areas')}
                className="text-warmgray-600 hover:text-brand-500 font-medium text-sm tracking-wide transition-colors cursor-pointer"
              >
                Areas Covered
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="text-warmgray-600 hover:text-brand-500 font-medium text-sm tracking-wide transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-warmgray-600 hover:text-brand-500 font-medium text-sm tracking-wide transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('quote')}
                className="bg-brand-500 text-white hover:bg-brand-600 px-5 py-2.5 rounded-sm font-medium text-sm tracking-wide transition-all shadow-sm cursor-pointer"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-warmgray-600 hover:text-brand-500 hover:bg-warmgray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isOpen && (
          <div className="md:hidden border-b border-warmgray-200 bg-warmgray-50/98 backdrop-blur-md">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-warmgray-700 hover:text-brand-500 hover:bg-warmgray-100 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-warmgray-700 hover:text-brand-500 hover:bg-warmgray-100 transition-colors"
              >
                Showcase
              </button>
              <button
                onClick={() => scrollToSection('areas')}
                className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-warmgray-700 hover:text-brand-500 hover:bg-warmgray-100 transition-colors"
              >
                Areas Covered
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-warmgray-700 hover:text-brand-500 hover:bg-warmgray-100 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-warmgray-700 hover:text-brand-500 hover:bg-warmgray-100 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('quote')}
                className="block w-full text-center mt-4 bg-brand-500 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-brand-600 transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
