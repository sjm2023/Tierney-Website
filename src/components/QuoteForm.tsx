import { useState, useRef, DragEvent, ChangeEvent, FormEvent, useEffect } from 'react';
import { Upload, X, Hammer, FileText, Check, ArrowRight, Calculator } from 'lucide-react';
import { SERVICES } from '../data';

interface QuoteFormProps {
  preselectedService: string;
}

export default function QuoteForm({ preselectedService }: QuoteFormProps) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');

  // Estimator State
  const [woodType, setWoodType] = useState('oak');
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(2);
  const [estimatedPrice, setEstimatedPrice] = useState<{ min: number; max: number } | null>(null);

  // File Upload State
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update selected service when a user clicks a button in Services
  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
      // Smooth scroll to the form
      const element = document.getElementById('quote');
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
    }
  }, [preselectedService]);

  // Recalculate price estimation
  useEffect(() => {
    if (!selectedService) {
      setEstimatedPrice(null);
      return;
    }

    // Base rates in GBP for Tadcaster UK
    let basePrice = 250;
    let factor = 1.0;

    const sName = selectedService.toLowerCase();
    if (sName.includes('loft')) {
      basePrice = 8500;
      factor = 1.5;
    } else if (sName.includes('garage')) {
      basePrice = 5500;
      factor = 1.3;
    } else if (sName.includes('staircase')) {
      basePrice = 1200;
      factor = 1.4;
    } else if (sName.includes('media')) {
      basePrice = 800;
      factor = 1.3;
    } else if (sName.includes('wardrobe')) {
      basePrice = 900;
      factor = 1.25;
    } else if (sName.includes('fitted furniture') || sName.includes('bespoke fitted')) {
      basePrice = 450;
      factor = 1.2;
    } else if (sName.includes('cladding')) {
      basePrice = 300;
      factor = 1.1;
    } else if (sName.includes('door') || sName.includes('window')) {
      basePrice = 180;
      factor = 1.1;
    } else if (sName.includes('outdoor') || sName.includes('pergola')) {
      basePrice = 750;
      factor = 1.2;
    }

    // Material multiplier
    let materialMultiplier = 1.0;
    switch (woodType) {
      case 'oak':
        materialMultiplier = 1.5;
        break;
      case 'walnut':
        materialMultiplier = 1.8;
        break;
      case 'pine':
        materialMultiplier = 0.95;
        break;
      case 'mdf':
        materialMultiplier = 0.8;
        break;
      case 'softwood':
        materialMultiplier = 0.9;
        break;
    }

    // Dimension multiplier
    const area = width * height;
    const dimensionMultiplier = Math.max(0.6, Math.min(area / 4, 3.5));

    const calculatedMin = Math.round(basePrice * factor * materialMultiplier * dimensionMultiplier * 0.9);
    const calculatedMax = Math.round(basePrice * factor * materialMultiplier * dimensionMultiplier * 1.15);

    setEstimatedPrice({
      min: Math.max(120, calculatedMin),
      max: Math.max(150, calculatedMax)
    });
  }, [selectedService, woodType, width, height]);

  // Handle Drag Events
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  };

  // Handle Manual File Upload Selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileSelection = () => {
    fileInputRef.current?.click();
  };

  // Form Submit Handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a production app, we would pack fields and files into a FormData object
    // and send to `/api/quote` or standard backend.
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setSelectedService('');
    setMessage('');
    setFiles([]);
    setEstimatedPrice(null);
    setIsSubmitted(false);
  };

  return (
    <section id="quote" className="py-24 bg-warmgray-50 border-t border-warmgray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-mono text-xs tracking-widest uppercase font-semibold block mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-warmgray-900 tracking-tight mb-4">
            Request a Free Quote
          </h2>
          <p className="text-warmgray-600 font-light leading-relaxed">
            Fill out the form below with your project details, and Mark will get in touch to discuss a consultation or provide an estimate.
          </p>
        </div>

        {isSubmitted ? (
          /* Submission Success State Banner */
          <div className="max-w-3xl mx-auto bg-white border-2 border-brand-300 rounded-sm p-10 text-center shadow-lg transform transition-all">
            <div className="w-16 h-16 bg-brand-50 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-200">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-warmgray-900 mb-3">
              Quote Request Received!
            </h3>
            <p className="text-warmgray-600 text-sm font-light leading-relaxed mb-6 max-w-lg mx-auto">
              Thank you, <strong className="font-semibold text-warmgray-900">{name}</strong>. Your request for <strong className="font-semibold text-warmgray-900">{selectedService || 'Joinery Services'}</strong> has been sent directly to Mark. We will review your attachments and contact you within 24-48 business hours.
            </p>
            <div className="bg-warmgray-50 rounded-sm p-4 border border-warmgray-200 max-w-md mx-auto mb-8 text-left text-xs text-warmgray-500">
              <div className="font-semibold text-warmgray-800 uppercase mb-2">Quote Summary:</div>
              <div>• <strong>Service:</strong> {selectedService}</div>
              {estimatedPrice && (
                <div>• <strong>Instant Estimate Range:</strong> £{estimatedPrice.min.toLocaleString()} - £{estimatedPrice.max.toLocaleString()}</div>
              )}
              {files.length > 0 && (
                <div>• <strong>Uploaded Attachments:</strong> {files.length} file(s) included</div>
              )}
            </div>
            <button
              onClick={handleReset}
              className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3.5 rounded-sm text-sm font-medium tracking-wide transition-all cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          /* Form Content Row */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Inputs (7 columns) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-warmgray-200 rounded-sm shadow-xs">
              <h3 className="text-2xl font-bold text-warmgray-900 mb-8 flex items-center">
                <FileText className="w-5 h-5 text-brand-500 mr-2.5" />
                Project Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold tracking-wider text-warmgray-600 uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Young"
                      className="w-full px-4 py-3 border border-warmgray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold tracking-wider text-warmgray-600 uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 border border-warmgray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold tracking-wider text-warmgray-600 uppercase mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +44 7123 456789"
                      className="w-full px-4 py-3 border border-warmgray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-xs font-semibold tracking-wider text-warmgray-600 uppercase mb-2">
                      Location / Postcode *
                    </label>
                    <input
                      type="text"
                      id="location"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Tadcaster, York, Leeds"
                      className="w-full px-4 py-3 border border-warmgray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold tracking-wider text-warmgray-600 uppercase mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 border border-warmgray-200 rounded-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all cursor-pointer"
                  >
                    <option value="">-- Select a Joinery Service --</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Bespoke Architectural Project">Bespoke Architectural Project</option>
                    <option value="General Home Repairs">General Woodwork / Repairs</option>
                  </select>
                </div>

                {/* Project Brief */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold tracking-wider text-warmgray-600 uppercase mb-2">
                    Briefly Describe the Project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details such as dimensions, design preferences, and special requirements..."
                    className="w-full px-4 py-3 border border-warmgray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all"
                  />
                </div>

                {/* File Upload Zone - Implements Drag & Drop */}
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-warmgray-600 uppercase mb-2">
                    Upload Inspiration Photos or Sketches
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={triggerFileSelection}
                    className={`border-2 border-dashed rounded-sm p-6 text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                      isDragging
                        ? 'border-brand-500 bg-brand-50/50'
                        : 'border-warmgray-250 bg-warmgray-50 hover:bg-warmgray-100/60 hover:border-warmgray-300'
                    }`}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx"
                    />
                    <Upload className="w-8 h-8 text-warmgray-400 mb-2.5" />
                    <p className="text-sm font-medium text-warmgray-700">
                      Drag and drop your plans here, or <span className="text-brand-500 underline font-semibold">browse files</span>
                    </p>
                    <p className="text-[11px] text-warmgray-400 mt-1">
                      Supports PNG, JPG, JPEG, or PDF up to 10MB
                    </p>
                  </div>

                  {/* Uploaded Files List */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <h4 className="text-[11px] font-mono tracking-wider uppercase text-warmgray-400">Selected Files ({files.length}):</h4>
                      <div className="grid grid-cols-1 gap-1.5">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between px-3 py-2 bg-warmgray-100/70 border border-warmgray-200 rounded-xs text-xs"
                          >
                            <div className="flex items-center space-x-2 truncate">
                              <Hammer className="w-3.5 h-3.5 text-brand-400" />
                              <span className="font-medium text-warmgray-700 truncate">{file.name}</span>
                              <span className="text-[10px] text-warmgray-400">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(index);
                              }}
                              className="text-warmgray-400 hover:text-red-500 p-1 rounded-full transition-colors cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-brand-400 hover:bg-brand-500 text-white py-4 font-semibold text-sm tracking-wider uppercase rounded-sm transition-colors shadow-sm cursor-pointer flex items-center justify-center group"
                >
                  <span>Request Custom Estimate</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Price Estimator Widget Column (5 columns) */}
            <div className="lg:col-span-5 bg-warmgray-900 text-white p-8 sm:p-10 border border-warmgray-850 rounded-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#bd9b70/3,transparent_40%)] pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                  <Calculator className="w-5 h-5 text-brand-300 mr-2.5" />
                  Visual Price Estimator
                </h3>
                <p className="text-warmgray-400 text-xs font-light leading-relaxed mb-8">
                  Get a rough, real-time cost estimation for typical carpentry setups in North Yorkshire. Perfect for budgeting your dream build!
                </p>

                {/* Estimator Form Fields */}
                <div className="space-y-6">
                  {/* Selected service warning */}
                  {!selectedService ? (
                    <div className="p-4 bg-brand-500/10 border border-brand-300/15 rounded-sm text-xs text-brand-200 leading-relaxed text-center">
                      Please select a <strong>Service Required</strong> in the form on the left to activate the dynamic pricing calculations.
                    </div>
                  ) : (
                    <>
                      {/* Wood / Timber Type */}
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider text-warmgray-400 uppercase mb-2">
                          Timber / Material Type
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'oak', label: 'Solid Oak' },
                            { id: 'walnut', label: 'Walnut' },
                            { id: 'pine', label: 'Red Pine' },
                            { id: 'mdf', label: 'Satin MDF' },
                            { id: 'softwood', label: 'Softwood' }
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setWoodType(item.id)}
                              className={`py-2 px-1 text-center text-xs font-semibold rounded-xs border transition-all cursor-pointer ${
                                woodType === item.id
                                  ? 'border-brand-300 bg-brand-500/10 text-brand-200 shadow-xs'
                                  : 'border-warmgray-800 hover:border-warmgray-700 text-warmgray-400'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Dimensions slider */}
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-warmgray-400 uppercase mb-1.5">
                            <span>Approx. Width</span>
                            <span className="text-brand-300 font-semibold">{width} Meters</span>
                          </div>
                          <input
                            type="range"
                            min="0.5"
                            max="8"
                            step="0.5"
                            value={width}
                            onChange={(e) => setWidth(parseFloat(e.target.value))}
                            className="w-full accent-brand-400 bg-warmgray-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-warmgray-400 uppercase mb-1.5">
                            <span>Approx. Height</span>
                            <span className="text-brand-300 font-semibold">{height} Meters</span>
                          </div>
                          <input
                            type="range"
                            min="0.5"
                            max="5"
                            step="0.5"
                            value={height}
                            onChange={(e) => setHeight(parseFloat(e.target.value))}
                            className="w-full accent-brand-400 bg-warmgray-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Estimate Calculation Display */}
              {estimatedPrice && (
                <div className="relative z-10 mt-10 p-6 bg-warmgray-950/90 border border-warmgray-800 rounded-sm">
                  <div className="text-center">
                    <span className="text-[10px] font-mono tracking-widest text-brand-300 uppercase block mb-1">
                      Estimated Project Range
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-3">
                      £{estimatedPrice.min.toLocaleString()} - £{estimatedPrice.max.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-warmgray-400 block leading-relaxed">
                      *Includes raw timber materials and standard fitting labor rates in York/Leeds. Subject to physical site evaluation.
                    </span>
                  </div>
                </div>
              )}

              {/* Extra Local Service Trust Badge */}
              <div className="relative z-10 border-t border-warmgray-850 pt-6 mt-8 text-center sm:text-left text-xs text-warmgray-400 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-300/15 flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-5 h-5 text-brand-300" />
                </div>
                <p className="leading-relaxed">
                  Mark guarantees <strong>fair local pricing</strong> with zero hidden fees. Written quotes are fully transparent and itemized.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
