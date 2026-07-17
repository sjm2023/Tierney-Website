import { Shield, Sparkles, UserCheck, ThumbsUp, Quote } from 'lucide-react';
import { VALUE_PROPS, TESTIMONIALS, SHOWCASE_IMAGES } from '../data';

export default function WhyChooseUs() {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'expertise':
        return <Sparkles className="w-5 h-5 text-brand-500" />;
      case 'customer satisfaction':
        return <ThumbsUp className="w-5 h-5 text-brand-500" />;
      case 'reliability':
        return <UserCheck className="w-5 h-5 text-brand-500" />;
      case 'attention to detail':
        return <Shield className="w-5 h-5 text-brand-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-500" />;
    }
  };

  // Main testimonial is Alex Young
  const alexTestimonial = TESTIMONIALS[0];
  // Side image
  const woodworkImage = SHOWCASE_IMAGES[4].url; // Slatted Media Wall

  return (
    <section id="why-choose-us" className="py-24 bg-warmgray-900 text-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#bd9b70/5,transparent_45%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Image & Highlighted Testimonial */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="relative">
              <div className="overflow-hidden aspect-5/4 rounded-sm border border-warmgray-800 shadow-xl relative">
                <img
                  src={woodworkImage}
                  alt="Precision media wall wood placement"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warmgray-950 via-warmgray-950/20 to-transparent" />
              </div>

              {/* Floating Testimonial Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-warmgray-900/90 backdrop-blur-md border border-warmgray-800 p-6 rounded-sm shadow-lg">
                <Quote className="w-8 h-8 text-brand-300 opacity-20 absolute -top-2 -left-2" />
                <p className="text-warmgray-300 text-xs italic font-light leading-relaxed mb-4 relative z-10">
                  "{alexTestimonial.quote}"
                </p>
                <div className="flex items-center justify-between border-t border-warmgray-800/80 pt-3">
                  <div className="text-sm font-semibold text-white">{alexTestimonial.author}</div>
                  <div className="text-[11px] font-mono tracking-wider text-brand-300 uppercase">{alexTestimonial.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Section Header & Core Values Grid */}
          <div className="lg:col-span-7">
            <div className="max-w-xl">
              <span className="text-brand-300 font-mono text-xs tracking-widest uppercase font-semibold block mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
                Crafting Trust <br />& Long-Lasting Quality
              </h2>
              <p className="text-warmgray-400 font-light leading-relaxed mb-12 text-sm sm:text-base">
                Mark Tierney is a highly professional carpenter serving Tadcaster and surrounding areas. We base our reputation on four main pillars to make your joinery project completely seamless and stress-free.
              </p>
            </div>

            {/* Core Values Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {VALUE_PROPS.map((prop, idx) => (
                <div key={idx} className="flex flex-col space-y-3.5 p-5 rounded-sm bg-warmgray-950/30 border border-warmgray-850 hover:border-brand-400/20 hover:bg-warmgray-950/60 transition-all duration-300">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-sm bg-brand-500/10 border border-brand-300/10 flex items-center justify-center">
                      {getIcon(prop.title)}
                    </div>
                    <span className="text-xs font-mono tracking-widest text-brand-300 uppercase font-medium">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                    <p className="text-warmgray-400 text-xs font-light leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
