import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Services & Scope",
    question: "Do you offer bespoke design drawings before initiating carpentry work?",
    answer: "Yes, absolutely. For high-ticket items like bespoke media walls, fitted wardrobes, and custom staircases, we provide full layout designs and wood material suggestions. This ensures that you can visualize the scale, cable management ports, and exact color finishes before we start cutting the timber."
  },
  {
    category: "Pricing & Quotes",
    question: "Is there a charge for site visits and custom design consultations in Tadcaster?",
    answer: "No, all our site visits, initial design consultations, and detailed price quotes are completely free of charge. We cover Tadcaster, York, Leeds, and surrounding North Yorkshire villages with no obligation whatsoever."
  },
  {
    category: "Materials",
    question: "What types of wood and materials do you typically work with?",
    answer: "We work with a wide spectrum of premium materials selected specifically for durability and final aesthetic. This includes premium solid hardwoods like English Oak, Walnut, and Ash, as well as high-density moisture-resistant MDF (perfect for sleek, painted modern media walls and wardrobes), and pressure-treated Scandinavian softwoods for external pergolas and decking."
  },
  {
    category: "Timelines",
    question: "How long does a typical custom media wall or fitted wardrobe installation take?",
    answer: "The majority of our bespoke fitted furniture projects are completed within 2 to 4 working days on-site. We perform as much pre-cutting, routing, and assembly as possible in our workshop to keep noise, dust, and disruption in your home to an absolute minimum."
  },
  {
    category: "Quality Assurance",
    question: "Are your structural works like loft and garage conversions fully insured?",
    answer: "Yes, Tierney Craft Joinery is fully backed by comprehensive Public Liability Insurance. All structural work, framing, and second-fix carpentry align with local UK building regulations. If structural calculations or architectural sign-offs are required, we work seamlessly alongside structural engineers to provide a fully certified handover."
  },
  {
    category: "Logistics",
    question: "What areas do you actively serve outside of Tadcaster?",
    answer: "While we are proudly based in Tadcaster, we regularly take on bespoke commissions and carpentry renovations across the golden triangle: Leeds, Harrogate, Wetherby, Boston Spa, York, Sherburn-in-Elmet, and the wider West/North Yorkshire areas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-warmgray-50 border-t border-warmgray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-mono text-xs tracking-widest uppercase font-semibold block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-warmgray-900 tracking-tight mb-4 font-sans animate-fade-in" id="faq-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-warmgray-600 font-light leading-relaxed">
            Everything you need to know about our custom carpentry process, material options, lead times, and structural certifications.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-white rounded-sm border transition-all duration-300 ${
                  isOpen 
                    ? 'border-brand-500 shadow-md ring-1 ring-brand-500/10' 
                    : 'border-warmgray-200/80 hover:border-warmgray-300 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between space-x-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-brand-500 font-bold block mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-warmgray-950 tracking-tight">
                      {item.question}
                    </h3>
                  </div>
                  <div className="mt-1 flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-500 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-warmgray-400 hover:text-warmgray-600 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-warmgray-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 sm:p-6 bg-warmgray-50/40 text-sm sm:text-base text-warmgray-600 font-light leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic SEO local credentials banner */}
        <div className="mt-14 p-6 bg-brand-50 rounded-sm border border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-brand-600" />
            </div>
            <div>
              <h4 className="font-bold text-warmgray-900 text-sm sm:text-base">Proudly Serving North & West Yorkshire</h4>
              <p className="text-xs sm:text-sm text-warmgray-600 font-light mt-0.5">Free design consults and pricing estimates in Tadcaster, Leeds, and York.</p>
            </div>
          </div>
          <a
            href="#quote"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-mono text-xs tracking-wider uppercase font-semibold rounded-sm transition-all shadow-sm"
          >
            Request Free Visit
          </a>
        </div>

      </div>
    </section>
  );
}
