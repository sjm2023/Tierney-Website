import { useState } from 'react';
import { MapPin, CheckCircle, Navigation, ShieldCheck, Clock } from 'lucide-react';

interface Town {
  name: string;
  postcodes: string[];
  distance: string; // From Tadcaster
  estTime: string;
  types: string[];
}

const SERVED_TOWNS: Town[] = [
  {
    name: 'Tadcaster',
    postcodes: ['LS24'],
    distance: 'Local Base',
    estTime: 'Immediate',
    types: ['All Services', 'Bespoke Media Walls', 'Conversion Projects', 'Staircases']
  },
  {
    name: 'York',
    postcodes: ['YO1', 'YO10', 'YO23', 'YO24', 'YO30', 'YO31'],
    distance: '10 miles',
    estTime: '15-20 mins',
    types: ['Bespoke Media Walls', 'Fitted Wardrobes', 'Staircases', 'Property Renovations']
  },
  {
    name: 'Leeds',
    postcodes: ['LS1', 'LS2', 'LS8', 'LS17', 'LS25'],
    distance: '15 miles',
    estTime: '20-25 mins',
    types: ['Loft & Garage Conversions', 'Luxury Fitted Furniture', 'First & Second Fix']
  },
  {
    name: 'Wetherby',
    postcodes: ['LS22'],
    distance: '6 miles',
    estTime: '10 mins',
    types: ['Outdoor Structures', 'Bespoke Oak Staircases', 'Property Renovations']
  },
  {
    name: 'Boston Spa',
    postcodes: ['LS23'],
    distance: '4 miles',
    estTime: '8 mins',
    types: ['Fitted Wardrobes', 'Custom TV Media Units', 'High-end Joinery']
  },
  {
    name: 'Sherburn-in-Elmet',
    postcodes: ['LS25'],
    distance: '8 miles',
    estTime: '12 mins',
    types: ['First & Second Fix Joinery', 'Doors & Windows', 'Timber Decking']
  }
];

export default function AreasCovered() {
  const [selectedTown, setSelectedTown] = useState<Town>(SERVED_TOWNS[0]);

  return (
    <section id="areas" className="py-24 bg-white border-t border-warmgray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-mono text-xs tracking-widest uppercase font-semibold block mb-3">
            Service Reach & Logistics
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-warmgray-900 tracking-tight mb-4 font-sans">
            Our Carpentry Service Areas
          </h2>
          <p className="text-warmgray-600 font-light leading-relaxed">
            Based in the heart of Tadcaster, Tierney Craft Joinery is perfectly positioned to serve premium residential woodworking and structural joinery projects across North and West Yorkshire.
          </p>
        </div>

        {/* Dynamic content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: List of areas (interactive selection) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono tracking-wider uppercase text-warmgray-400 font-bold mb-4">
                Select Your Region
              </h3>
              <div className="space-y-2.5">
                {SERVED_TOWNS.map((town) => {
                  const isSelected = selectedTown.name === town.name;
                  return (
                    <button
                      key={town.name}
                      onClick={() => setSelectedTown(town)}
                      className={`w-full p-4 text-left border rounded-sm transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                        isSelected
                          ? 'border-brand-500 bg-brand-50/50 shadow-xs'
                          : 'border-warmgray-200 hover:border-warmgray-300 bg-warmgray-50/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <MapPin className={`w-5 h-5 transition-colors ${isSelected ? 'text-brand-600' : 'text-warmgray-400 group-hover:text-warmgray-600'}`} />
                        <div>
                          <span className={`font-bold text-sm block transition-colors ${isSelected ? 'text-brand-950' : 'text-warmgray-800'}`}>
                            {town.name}
                          </span>
                          <span className="text-[10px] font-mono tracking-wider text-warmgray-400 uppercase">
                            {town.postcodes.join(', ')}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[11px] font-mono text-warmgray-500">{town.distance}</span>
                        <span className="text-[9px] font-mono text-brand-600 font-semibold uppercase tracking-wider">{town.estTime}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Travel trust statement */}
            <div className="mt-8 p-6 bg-warmgray-50 rounded-sm border border-warmgray-200/60 flex items-start space-x-4">
              <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-warmgray-900 block mb-1">Fully Equipped Mobile Workshop</span>
                <p className="text-warmgray-600 font-light leading-relaxed">
                  We transport all heavy-duty carpentry rigs, dust extraction panels, and materials directly to your site, ensuring zero mess and maximum precision on every job.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Coverage Map & Info Cards */}
          <div className="lg:col-span-7 bg-warmgray-50 border border-warmgray-200/80 rounded-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-warmgray-200/80 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-brand-600 font-bold uppercase">Active District Profile</span>
                  <h3 className="text-2xl font-black text-warmgray-950 tracking-tight">{selectedTown.name} Joinery Coverage</h3>
                </div>
                <div className="flex items-center space-x-2 bg-white px-3 py-1.5 border border-warmgray-200 rounded-full shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-brand-500" />
                  <span className="text-xs font-mono text-warmgray-600">{selectedTown.estTime} from workshop</span>
                </div>
              </div>

              {/* Coverage details */}
              <div className="mb-8">
                <p className="text-sm text-warmgray-600 font-light mb-4 leading-relaxed">
                  We carry out high-end, bespoke residential woodworking and general joinery fittings in <strong className="text-warmgray-900">{selectedTown.name}</strong> and neighboring postcodes including <strong className="text-warmgray-900">{selectedTown.postcodes.join(', ')}</strong>.
                </p>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-warmgray-400 mb-3">Popular Services Requested Here:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedTown.types.map((type, i) => (
                    <div key={i} className="flex items-center space-x-2.5 p-3 bg-white border border-warmgray-150 rounded-sm">
                      <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                      <span className="text-xs font-medium text-warmgray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive SVG map element representation */}
            <div className="relative aspect-16/9 bg-warmgray-100 rounded-sm border border-warmgray-200 overflow-hidden flex items-center justify-center group/map">
              {/* Background abstract geographic grid / representation */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Yorkshire Golden Triangle Lines representation */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220" fill="none">
                {/* Connection lines from Tadcaster center */}
                <path d="M 200 110 L 290 60" stroke="#b08d57" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" /> {/* York */}
                <path d="M 200 110 L 100 140" stroke="#b08d57" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" /> {/* Leeds */}
                <path d="M 200 110 L 150 50" stroke="#b08d57" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" /> {/* Wetherby */}
                <path d="M 200 110 L 170 80" stroke="#b08d57" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" /> {/* Boston Spa */}
                <path d="M 200 110 L 210 160" stroke="#b08d57" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" /> {/* Sherburn */}

                {/* Concentric distance rings */}
                <circle cx="200" cy="110" r="45" stroke="#b08d57" strokeWidth="1" strokeDasharray="4,4" opacity="0.15" />
                <circle cx="200" cy="110" r="95" stroke="#b08d57" strokeWidth="1" strokeDasharray="4,4" opacity="0.1" />

                {/* Town plot nodes */}
                <g className="cursor-pointer" onClick={() => setSelectedTown(SERVED_TOWNS[1])}>
                  <circle cx="290" cy="60" r="6" fill={selectedTown.name === 'York' ? '#8b6b3e' : '#b08d57'} />
                  <text x="302" y="64" fill="#1c1917" fontSize="9" fontWeight="bold" fontFamily="sans-serif">York</text>
                </g>
                <g className="cursor-pointer" onClick={() => setSelectedTown(SERVED_TOWNS[2])}>
                  <circle cx="100" cy="140" r="6" fill={selectedTown.name === 'Leeds' ? '#8b6b3e' : '#b08d57'} />
                  <text x="70" y="144" fill="#1c1917" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Leeds</text>
                </g>
                <g className="cursor-pointer" onClick={() => setSelectedTown(SERVED_TOWNS[3])}>
                  <circle cx="150" cy="50" r="5" fill={selectedTown.name === 'Wetherby' ? '#8b6b3e' : '#b08d57'} />
                  <text x="110" y="45" fill="#1c1917" fontSize="9" fontWeight="normal" fontFamily="sans-serif">Wetherby</text>
                </g>
                <g className="cursor-pointer" onClick={() => setSelectedTown(SERVED_TOWNS[4])}>
                  <circle cx="170" cy="80" r="4" fill={selectedTown.name === 'Boston Spa' ? '#8b6b3e' : '#b08d57'} />
                  <text x="115" y="84" fill="#1c1917" fontSize="8" fontWeight="normal" fontFamily="sans-serif">Boston Spa</text>
                </g>
                <g className="cursor-pointer" onClick={() => setSelectedTown(SERVED_TOWNS[5])}>
                  <circle cx="210" cy="160" r="4" fill={selectedTown.name === 'Sherburn-in-Elmet' ? '#8b6b3e' : '#b08d57'} />
                  <text x="218" y="164" fill="#1c1917" fontSize="8" fontWeight="normal" fontFamily="sans-serif">Sherburn</text>
                </g>

                {/* Base Node: Tadcaster */}
                <g className="cursor-pointer" onClick={() => setSelectedTown(SERVED_TOWNS[0])}>
                  <circle cx="200" cy="110" r="8" fill="#8b6b3e" stroke="#fff" strokeWidth="2" className="animate-pulse" />
                  <text x="212" y="114" fill="#8b6b3e" fontSize="10" fontWeight="extrabold" fontFamily="sans-serif">TADCASTER (Base)</text>
                </g>
              </svg>

              {/* Interactive Map Overlay Instructions */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-sm border border-warmgray-200 shadow-xs flex items-center space-x-1.5 pointer-events-none">
                <Navigation className="w-3 h-3 text-brand-600 animate-bounce" />
                <span className="text-[10px] font-semibold text-warmgray-700">Click map pins to swap districts</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
