import { Compass, Hammer, ShieldCheck, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, SHOWCASE_IMAGES } from '../data';
// @ts-expect-error - image asset import
import brandLogo from '../assets/images/tierney_logo_1783101701335.jpg';

export default function Hero() {
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

  // Use the high-res custom kitchen cabinetry image from Wix static as background
  const heroBg = SHOWCASE_IMAGES[0].url;

  return (
    <>
      {/* Brand Signage Banner */}
      <div className="w-full bg-[#0a0a0a] py-6 sm:py-8 border-b border-warmgray-950 shadow-2xl relative z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <img
              src={brandLogo}
              alt="Tierney Craft Joinery - Bespoke Carpentry"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[160px] sm:max-h-[220px] md:max-h-[260px] object-contain mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-warmgray-900 overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Bespoke cabinetry background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45 transform scale-105 filter saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warmgray-950 via-warmgray-900/90 to-warmgray-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-warmgray-950 via-transparent to-transparent" />
      </div>

      {/* Decorative Warm Accent Light */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-300/20 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-300 animate-pulse" />
            <span className="text-brand-300 text-xs font-mono tracking-wider uppercase font-medium">
              Bespoke Carpenter & Joiner
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
            Crafting Exceptional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-200 to-white">
              Timber & Joinery
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-warmgray-300 font-light leading-relaxed mb-10 max-w-2xl">
            Providing exceptional joinery and carpentry services for custom woodworking, door & window fitting, kitchen installations, repairs, and home renovations in Tadcaster, North Yorkshire and beyond.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-14">
            <button
              onClick={() => scrollToSection('quote')}
              className="group bg-brand-400 hover:bg-brand-500 text-white px-8 py-4 rounded-sm font-medium tracking-wide transition-all duration-200 shadow-md flex items-center justify-center cursor-pointer"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="border border-warmgray-400 hover:border-white text-warmgray-200 hover:text-white px-8 py-4 rounded-sm font-medium tracking-wide transition-colors flex items-center justify-center bg-warmgray-900/40 backdrop-blur-sm cursor-pointer"
            >
              Our Services
            </button>
          </div>

          {/* Trust Flags */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 pt-8 border-t border-warmgray-800/80">
            <div className="flex items-center space-x-3.5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500/10 border border-brand-300/15 flex items-center justify-center">
                <Hammer className="w-5 h-5 text-brand-300" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold tracking-wide">Fine Craftsmanship</h4>
                <p className="text-warmgray-400 text-xs">Meticulous attention to detail</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500/10 border border-brand-300/15 flex items-center justify-center">
                <Compass className="w-5 h-5 text-brand-300" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold tracking-wide">Fully Bespoke</h4>
                <p className="text-warmgray-400 text-xs">Designed tailored to your home</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500/10 border border-brand-300/15 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-brand-300" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold tracking-wide">Reliable & Insured</h4>
                <p className="text-warmgray-400 text-xs">Based locally in Tadcaster, UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
