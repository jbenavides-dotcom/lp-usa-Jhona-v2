export const SHOPIFY_URL = 'https://lapalmayeltucan.com';
export const SHOPIFY_COLLECTIONS = `${SHOPIFY_URL}/collections/all`;
export const DISCOUNT_URL = `${SHOPIFY_URL}/discount/WELCOME10`;

export const SHIPPING = {
  freeThreshold: 50,
  standard: { price: 8, days: '5-7 business days', carrier: 'USPS Priority Mail' },
  express: { price: 15, days: '2-3 business days', carrier: 'USPS Express' },
  origin: 'Miami, FL',
  coverage: ['All 50 US States', 'Puerto Rico'],
  freshness: 'Roasted within 48 hours of shipping',
};

export const SOCIAL_PROOF = {
  rating: 4.9,
  totalReviews: 847,
  customersServed: '2,500+',
  featuredIn: ['Sprudge', 'Perfect Daily Grind', 'Barista Magazine'],
};

export const TRUST_BADGES = [
  { icon: 'Truck', text: 'Free Shipping $50+', color: 'green' },
  { icon: 'Clock', text: 'Roasted Fresh to Order', color: 'green' },
  { icon: 'Award', text: 'SCA Score 86-90+', color: 'green' },
];

export const FARM_STATS = {
  founded: '2012',
  hectares: '19',
  coffeeLots: '14',
  altitude: '1,700 m.a.s.l.',
  location: 'Zipacón, Cundinamarca, Colombia',
};

export const SUSTAINABILITY_STATS = [
  { value: '11,418', label: 'Tons CO₂ Captured', icon: 'TreePine' },
  { value: '55+', label: 'Species on Farm', icon: 'Bird' },
  { value: '9%', label: 'Soil Organic Matter', icon: 'Leaf' },
  { value: '200+', label: 'Neighbor Families', icon: 'Users' },
];

export const SOCIAL = {
  instagram: 'https://www.instagram.com/lapalmayeltucan/',
  instagramHandle: '@lapalmayeltucan',
} as const;

export const CONTACT = {
  email: 'green@lapalmayeltucan.com',
  location: 'Zipacón, Cundinamarca, Colombia',
} as const;
