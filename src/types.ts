export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'Conversions' | 'Fittings & Structures' | 'Bespoke Furniture' | 'Renovations & Outdoor';
  details: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface ShowcaseImage {
  url: string;
  title: string;
  description: string;
  category: string;
}
