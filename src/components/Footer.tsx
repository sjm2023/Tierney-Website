import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, LOGO_URL } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="bg-warmgray-950 text-white pt-20 pb-10 border-t border-warmgray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-warmgray-900">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
              <img
                src={LOGO_URL}
                alt="Tierney Craft Joinery"
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-warmgray-400 text-xs font-light leading-relaxed max-w-sm">
              Providing exceptional carpentry and joinery services for custom woodwork, door & window fitting, kitchen installations, repairs, and home improvement needs.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-warmgray-900 border border-warmgray-850 flex items-center justify-center text-warmgray-400 hover:text-white hover:bg-brand-500 hover:border-brand-400 transition-all cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-warmgray-900 border border-warmgray-850 flex items-center justify-center text-warmgray-400 hover:text-white hover:bg-brand-500 hover:border-brand-400 transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-warmgray-900 border border-warmgray-850 flex items-center justify-center text-warmgray-400 hover:text-white hover:bg-brand-500 hover:border-brand-400 transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.facebook} // Twitter/X replacement
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-warmgray-900 border border-warmgray-850 flex items-center justify-center text-warmgray-400 hover:text-white hover:bg-brand-500 hover:border-brand-400 transition-all cursor-pointer"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs font-mono tracking-wider uppercase text-brand-300 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-warmgray-400">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors cursor-pointer">
                  Recent Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-white transition-colors cursor-pointer">
                  Core Values
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('quote')} className="hover:text-white transition-colors cursor-pointer">
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs font-mono tracking-wider uppercase text-brand-300 font-semibold">
              Get In Touch
            </h4>
            <ul className="space-y-3.5 text-xs text-warmgray-400">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-brand-300 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 text-brand-300 flex-shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 text-brand-300 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 text-brand-300 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[11px]">{CONTACT_INFO.operatingHours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Region Mini-Map (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs font-mono tracking-wider uppercase text-brand-300 font-semibold">
              Our Service Area
            </h4>
            {/* Visual Custom Yorkshire Region Boundary Widget */}
            <div className="bg-warmgray-900 border border-warmgray-850 rounded-sm p-4 text-center text-xs relative overflow-hidden flex flex-col items-center">
              <div className="w-full h-24 bg-warmgray-950 rounded-xs relative overflow-hidden flex items-center justify-center mb-3">
                {/* Simulated geographic grids and landmarks */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute w-20 h-20 rounded-full border-2 border-brand-300/20 bg-brand-500/5 animate-pulse" />
                <div className="absolute w-3 h-3 rounded-full bg-brand-400 border border-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>
                
                {/* Floating Yorkshire Towns labels */}
                <span className="absolute text-[9px] font-mono text-warmgray-500 top-2 left-4">Harrogate</span>
                <span className="absolute text-[9px] font-mono text-warmgray-500 bottom-2 left-6">Leeds</span>
                <span className="absolute text-[9px] font-mono text-warmgray-500 top-4 right-6">York</span>
                <span className="absolute text-[10px] font-bold font-mono text-brand-300 top-1/2 -translate-y-1/2 mt-3">Tadcaster</span>
              </div>
              <p className="text-warmgray-400 text-[11px] leading-relaxed">
                Serving <strong>Tadcaster</strong> and an active 25-mile radius including York, Leeds, and Harrogate.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] text-warmgray-500 font-mono tracking-wide">
          <div>
            &copy; {new Date().getFullYear()} Tierney Craft Joinery. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span>Powered and secured by Mark Tierney</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
