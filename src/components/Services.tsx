import { useState } from 'react';
import {
  Home,
  Tv,
  Layers,
  Hammer,
  DoorOpen,
  FolderClosed,
  Columns3,
  Building2,
  TreePine,
  CheckCircle2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Conversions', 'Bespoke Furniture', 'Fittings & Structures', 'Renovations & Outdoor'];

  const getIcon = (id: string) => {
    switch (id) {
      case 'loft-conversions':
        return <Home className="w-6 h-6" />;
      case 'garage-conversions':
        return <Building2 className="w-6 h-6" />;
      case 'staircases':
        return <Layers className="w-6 h-6" />;
      case 'joinery-first-second-fix':
        return <Hammer className="w-6 h-6" />;
      case 'media-walls':
        return <Tv className="w-6 h-6" />;
      case 'fitted-furniture':
        return <Sparkles className="w-6 h-6" />;
      case 'fitted-wardrobes':
        return <FolderClosed className="w-6 h-6" />;
      case 'timber-cladding':
        return <Columns3 className="w-6 h-6" />;
      case 'doors-windows':
        return <DoorOpen className="w-6 h-6" />;
      case 'property-renovations':
        return <Building2 className="w-6 h-6" />;
      case 'outdoor-structures':
        return <TreePine className="w-6 h-6" />;
      default:
        return <Hammer className="w-6 h-6" />;
    }
  };

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-warmgray-100 border-y border-warmgray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-mono text-xs tracking-widest uppercase font-semibold block mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-warmgray-900 tracking-tight mb-4">
            Specialist Joinery & Carpentry
          </h2>
          <p className="text-warmgray-600 font-light leading-relaxed">
            From architectural structural work to high-precision bespoke furniture, we cover all aspects of carpentry and joinery with a hallmark of exceptional quality in Tadcaster.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-sm text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'bg-white text-warmgray-600 hover:text-warmgray-900 border border-warmgray-200/70 hover:border-warmgray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-sm border border-warmgray-200/80 hover:border-brand-300/60 shadow-xs hover:shadow-md transition-all duration-300 p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-brand-50 text-brand-500 flex items-center justify-center border border-brand-100 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-400 transition-all duration-300">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-warmgray-400 bg-warmgray-100 px-2.5 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-warmgray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="text-warmgray-500 text-sm font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Details (Bullet list) */}
                <div className="space-y-2 mb-8">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start text-xs text-warmgray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.name)}
                className="w-full py-3 border border-warmgray-200 group-hover:border-brand-300 bg-warmgray-50 group-hover:bg-brand-50 text-warmgray-700 group-hover:text-brand-600 font-medium text-xs tracking-wider uppercase rounded-sm transition-all duration-200 flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>Request Quote</span>
                <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Project Prompt Box */}
        <div className="mt-16 bg-white border border-brand-200 rounded-sm p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between shadow-xs">
          <div className="mb-6 md:mb-0 max-w-2xl">
            <h4 className="text-lg font-bold text-warmgray-900 mb-2 flex items-center">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-500 mr-2" />
              Have a bespoke request not listed here?
            </h4>
            <p className="text-warmgray-500 text-sm font-light leading-relaxed">
              As specialized joiners, we custom build almost anything made of timber. Contact us with your sketches, drawings, or ideas, and we’ll bring them to life.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Bespoke Architectural Project')}
            className="bg-warmgray-900 hover:bg-brand-500 text-white hover:text-white px-6 py-3.5 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
          >
            Discuss Your Idea
          </button>
        </div>

      </div>
    </section>
  );
}
