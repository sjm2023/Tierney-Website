import { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { SHOWCASE_IMAGES } from '../data';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_IMAGES.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_IMAGES.length) % SHOWCASE_IMAGES.length);
  };

  const activeImage = SHOWCASE_IMAGES[activeIndex];

  return (
    <section id="gallery" className="py-24 bg-warmgray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-mono text-xs tracking-widest uppercase font-semibold block mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-warmgray-900 tracking-tight mb-4">
            Recent Work Gallery
          </h2>
          <p className="text-warmgray-600 font-light leading-relaxed">
            Real custom carpentry projects designed, crafted, and installed in York, Tadcaster, and Leeds. Explore the quality of our woodwork.
          </p>
        </div>

        {/* Interactive Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Visual Display (Large Card) - 7 cols */}
          <div className="lg:col-span-7 relative group">
            <div className="overflow-hidden aspect-4/3 bg-warmgray-900 rounded-sm border border-warmgray-200/60 shadow-md relative">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
              />
              
              {/* Overlay with CTA & Zoom button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity" />
              
              {/* Zoom Lightbox Trigger */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 right-4 p-3 bg-white/90 hover:bg-white text-warmgray-900 rounded-full shadow-md transition-all hover:scale-105 cursor-pointer z-10"
                title="Zoom image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Navigation Arrows inside Image */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prevImage}
                  className="p-2.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Category indicator overlay */}
              <div className="absolute bottom-4 left-4 inline-flex items-center space-x-1.5 bg-brand-500 text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm">
                <Compass className="w-3.5 h-3.5" />
                <span>{activeImage.category}</span>
              </div>
            </div>
          </div>

          {/* Details & Thumbnails - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
            <div>
              {/* Small Counter */}
              <span className="text-brand-500 font-mono text-xs tracking-wider">
                Project {activeIndex + 1} of {SHOWCASE_IMAGES.length}
              </span>

              {/* Active Image Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-warmgray-900 tracking-tight mt-2 mb-4">
                {activeImage.title}
              </h3>
              <p className="text-warmgray-600 font-light leading-relaxed mb-8 text-sm sm:text-base">
                {activeImage.description}
              </p>
            </div>

            {/* Thumbnail Navigation List */}
            <div>
              <h4 className="text-xs font-mono tracking-wider uppercase text-warmgray-400 mb-3.5">
                Explore Workpieces
              </h4>
              <div className="grid grid-cols-5 gap-2">
                {SHOWCASE_IMAGES.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`aspect-square overflow-hidden rounded-xs border-2 transition-all cursor-pointer ${
                      activeIndex === index
                        ? 'border-brand-500 scale-102 shadow-sm'
                        : 'border-transparent hover:border-warmgray-300 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Full Screen Lightbox Modal */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-xs">
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 bg-warmgray-900/50 hover:bg-warmgray-850 text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Carousel Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-6 p-4 bg-warmgray-900/40 hover:bg-warmgray-800 text-white rounded-full transition-colors cursor-pointer hidden sm:block"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-6 p-4 bg-warmgray-900/40 hover:bg-warmgray-800 text-white rounded-full transition-colors cursor-pointer hidden sm:block"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Zoomed Image Container */}
            <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain rounded-sm"
              />
              <div className="text-center mt-6 text-white max-w-2xl px-4">
                <span className="text-brand-300 text-[10px] font-mono tracking-wider uppercase">
                  {activeImage.category}
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">{activeImage.title}</h3>
                <p className="text-warmgray-400 text-xs font-light mt-1.5 leading-relaxed">
                  {activeImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
