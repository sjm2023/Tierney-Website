import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import AreasCovered from './components/AreasCovered';
import FAQ from './components/FAQ';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    
    // Clear the selection after a brief delay so the user can click it again if they want
    setTimeout(() => {
      setSelectedService('');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-warmgray-50 flex flex-col antialiased">
      {/* Premium Header/Nav */}
      <Navbar />

      {/* Hero Welcome banner */}
      <Hero />

      {/* Services offering cards */}
      <Services onSelectService={handleSelectService} />

      {/* Interactive image slider of Wix site assets */}
      <Gallery />

      {/* Trust factors and core values */}
      <WhyChooseUs />

      {/* Interactive Map & Service Reach Details */}
      <AreasCovered />

      {/* Fully-detailed Local SEO Frequently Asked Questions */}
      <FAQ />

      {/* Request a Quote and pricing estimator form */}
      <QuoteForm preselectedService={selectedService} />

      {/* Footer and Map */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
