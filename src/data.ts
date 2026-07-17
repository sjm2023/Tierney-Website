import { Service, Testimonial, ValueProp, ShowcaseImage } from './types';

export const LOGO_URL = 'https://static.wixstatic.com/media/c56cf0_6648ea9d6fd540669db3b914660118de~mv2.jpg/v1/crop/x_18,y_333,w_908,h_342/fill/w_400,h_151,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tierney%20Logo.jpg';

export const SERVICES: Service[] = [
  {
    id: 'loft-conversions',
    name: 'Loft Conversions',
    description: 'Transform unused attic space into functional, beautiful bedrooms, offices, or living areas.',
    category: 'Conversions',
    details: ['Structural reinforcement', 'Velux or dormer window installations', 'Insulation & boarding', 'Custom staircase integration']
  },
  {
    id: 'garage-conversions',
    name: 'Garage Conversions',
    description: 'Convert underutilized garage space into full-fledged home gyms, playrooms, annexes, or workspace.',
    category: 'Conversions',
    details: ['Floor leveling & damp proofing', 'Wall insulation & plastering', 'Window and door fitting', 'Custom storage solutions']
  },
  {
    id: 'staircases',
    name: 'Custom Staircases',
    description: 'Bespoke hand-crafted staircases designed for space optimization, elegance, and durability.',
    category: 'Fittings & Structures',
    details: ['Traditional oak staircases', 'Modern floating staircases', 'Spindle & balustrade upgrades', 'Integrated under-stairs storage']
  },
  {
    id: 'joinery-first-second-fix',
    name: 'First & Second Fix Joinery',
    description: 'Complete joinery services ranging from structural frameworks to fine finishing details.',
    category: 'Renovations & Outdoor',
    details: ['Stud walls & joists (1st fix)', 'Roof timbers & truss fitting', 'Architraves, skirtings & mouldings (2nd fix)', 'Stunning, clean-mitered finishings']
  },
  {
    id: 'media-walls',
    name: 'Bespoke Media Walls',
    description: 'Custom-built living room features designed to house television, audio systems, fireplaces, and decorative displays.',
    category: 'Bespoke Furniture',
    details: ['Integrated LED accent lighting', 'Seamless cable management', 'Built-in fireplaces (electric) & soundbar recesses', 'Custom cabinetry and open shelving']
  },
  {
    id: 'fitted-furniture',
    name: 'Bespoke Fitted Furniture',
    description: 'Tailor-made alcove units, bookshelves, sideboards, and desk spaces that fit your rooms perfectly.',
    category: 'Bespoke Furniture',
    details: ['Made-to-measure alcove shelving', 'Floating credenzas & drawers', 'Integrated home study solutions', 'Premium hardwood & spray-finished MDF options']
  },
  {
    id: 'fitted-wardrobes',
    name: 'Fitted Wardrobes',
    description: 'Maximize your bedroom storage space with sleek, custom floor-to-ceiling wardrobes.',
    category: 'Bespoke Furniture',
    details: ['Sliding or hinged door designs', 'Custom internal layout (shelves, drawers, rails)', 'Integrated dressing tables', 'Mirror doors or solid timber finishes']
  },
  {
    id: 'timber-cladding',
    name: 'Timber Cladding',
    description: 'Enhance your interior or exterior walls with premium, natural wood paneling for a modern, architectural feel.',
    category: 'Renovations & Outdoor',
    details: ['Slat wall paneling systems', 'Acoustic oak felt-backed slats', 'External weather-resistant cladding', 'Custom feature walls']
  },
  {
    id: 'doors-windows',
    name: 'Doors & Window Fitting',
    description: 'Precision hanging of internal and external doors, timber windows, and modern security fittings.',
    category: 'Fittings & Structures',
    details: ['Solid oak internal doors', 'External composite or timber doors', 'Sash window restorations', 'High-quality ironmongery fitting']
  },
  {
    id: 'property-renovations',
    name: 'Property Renovations',
    description: 'Complete home refurbishment services with a high-end carpenter’s eye for structural details and finishing.',
    category: 'Renovations & Outdoor',
    details: ['Full kitchen installations', 'Wall-removal & structural timber headers', 'Floorboards & premium real-wood laminate fitting', 'Complete room re-design']
  },
  {
    id: 'outdoor-structures',
    name: 'Outdoor Timber Structures',
    description: 'Extend your living space outdoors with hand-built garden buildings, decking, pergolas, and fencing.',
    category: 'Renovations & Outdoor',
    details: ['Custom timber garden rooms / home offices', 'Bespoke pergolas & gazebos', 'Hardwood or softwood garden decking', 'Premium slatted contemporary fencing']
  }
];

export const SHOWCASE_IMAGES: ShowcaseImage[] = [
  {
    url: 'https://static.wixstatic.com/media/c56cf0_65377b15f2d64818b24706010028cf44~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChatGPT%20Image%20Jun%2027%2C%202026%2C%2002_43_23%20PM_.jpg',
    title: 'Custom Inframe Kitchen Cabinetry',
    description: 'Precision handcrafted cabinetry featuring bespoke timber drawers and solid wood construction in Tadcaster.',
    category: 'Bespoke Furniture'
  },
  {
    url: 'https://static.wixstatic.com/media/c56cf0_0b12a8b783754b4cb4e68ef3376b628f~mv2.png/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChatGPT%20Image%20Jun%2027%2C%202026%2C%2002_50_34%20PM.png',
    title: 'Bespoke Fitted Wardrobes',
    description: 'Elegant bedroom storage designed to maximize space with custom compartments, soft-close doors, and a satin paint finish.',
    category: 'Bespoke Furniture'
  },
  {
    url: 'https://static.wixstatic.com/media/c56cf0_16e59595b6214419bd9547eb41d8a2b0~mv2.png/v1/crop/x_204,y_0,w_1128,h_1024/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChatGPT%20Image%20Jun%2027%2C%202026%2C%2002_52_21%20PM.png',
    title: 'Integrated Under-Stairs Storage',
    description: 'Clever pull-out drawers and cabinet spaces seamlessly built into a contemporary oak staircase.',
    category: 'Fittings & Structures'
  },
  {
    url: 'https://static.wixstatic.com/media/c56cf0_54c53cdd9f3b4eb8a8b2741564b21e91~mv2.png/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChatGPT%20Image%20Jun%2027%2C%202026%2C%2002_54_33%20PM.png',
    title: 'Bespoke Decking & Outdoor Pergola',
    description: 'Premium softwood decking paired with a hand-jointed modern timber frame pergola for outdoor entertaining.',
    category: 'Renovations & Outdoor'
  },
  {
    url: 'https://static.wixstatic.com/media/c56cf0_8eb2cd86ae1c469eb1b91aa2771e83de~mv2.png/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c56cf0_8eb2cd86ae1c469eb1b91aa2771e83de~mv2.png',
    title: 'Custom Slatted Media Wall',
    description: 'Modern slate-backed TV media wall featuring integrated warm-LED backlighting and dynamic handleless cupboards.',
    category: 'Bespoke Furniture'
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Expertise',
    description: "Our team's expertise ensures that every project is completed with precision and care. We are dedicated to delivering high-quality results that exceed expectations."
  },
  {
    title: 'Customer Satisfaction',
    description: "Customer satisfaction is our priority. We go the extra mile to ensure that our clients are happy with the results and the service they receive."
  },
  {
    title: 'Reliability',
    description: "You can rely on us for all your repair and home improvement needs. Our dependable service and commitment to excellence make us the ideal choice for your projects."
  },
  {
    title: 'Attention to Detail',
    description: "We pay close attention to every detail to ensure that the final outcome meets the highest standards. Our meticulous approach guarantees a job well done."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "We hired mark to do a media wall great communication and quality work would highly reccomend",
    author: "Alex Young",
    location: "Leeds"
  },
  {
    quote: "Mark built a beautiful media wall for our living room. From start to finish, his attention to detail was incredible. No messy cables, perfect lighting, and the paint finish looks factory-made. Highly recommend to anyone in North Yorkshire!",
    author: "Sarah & David",
    location: "Tadcaster"
  },
  {
    quote: "We had a full loft conversion completed by Tierney Craft Joinery. Mark was reliable, hard-working, and completed the first-fix and final stairs work with absolute perfection. He turned a dusty attic into our favorite room in the house.",
    author: "James Peterson",
    location: "York"
  }
];

export const CONTACT_INFO = {
  address: 'Tadcaster, UK',
  phone: '+44 7368 137795',
  email: 'Mark@Tierneycraftjoinery.co.uk',
  operatingHours: 'Monday - Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM',
  facebook: 'https://www.facebook.com/wix', // Wix default placeholders, but styled
  instagram: 'https://www.instagram.com/wix',
  linkedin: 'https://www.linkedin.com/company/wix-com'
};
