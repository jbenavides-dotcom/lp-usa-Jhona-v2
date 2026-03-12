export type Tier = 'legendary' | 'heroes' | 'warrior';

export interface Product {
  id: string;
  name: string;
  tier: Tier;
  variety: string;
  process: string;
  altitude: string;
  terroir: string;
  scaScore: string;
  price: number;
  comparePrice: number | null;
  weight: string;
  roastLevel: string;
  tastingNotes: string;
  location: string;
  stock: number;
  badge: string | null;
  tag: string;
  shopifyUrl: string;
  image: string;
  labelImage: string | null;
}

export interface TierInfo {
  id: Tier;
  name: string;
  subtitle: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'legendary-geisha',
    name: 'LEGENDARY Geisha',
    tier: 'legendary',
    variety: 'Geisha',
    process: 'Lactic Process',
    altitude: '1,760 m.a.s.l.',
    terroir: '#1',
    scaScore: '90+',
    price: 85,
    comparePrice: 95,
    weight: '12oz (340g)',
    roastLevel: 'Light Medium Roast',
    tastingNotes: 'Bursting with ripe citrus, exotic stone fruits, and jasmine perfume',
    location: 'Zipacón, Cundinamarca',
    stock: 12,
    badge: 'Limited Release',
    tag: 'ULTRA PREMIUM',
    shopifyUrl: 'https://lapalmayeltucan.com/collections/all',
    image: '/images/productos/legendary-geisha-bag.png',
    labelImage: '/images/productos/legendary-geisha-label.png',
  },
  {
    id: 'geisha-single-origin',
    name: 'GEISHA',
    tier: 'heroes',
    variety: 'Geisha',
    process: 'Bio-Washed Process',
    altitude: '1,763 m.a.s.l.',
    terroir: '#4',
    scaScore: '88',
    price: 65,
    comparePrice: null,
    weight: '12oz (340g)',
    roastLevel: 'Light Medium Roast',
    tastingNotes: 'Blood orange, night-blooming jasmine, and crystallized honey',
    location: 'Zipacón, Cundinamarca',
    stock: 45,
    badge: null,
    tag: 'SINGLE ORIGIN',
    shopifyUrl: 'https://lapalmayeltucan.com/collections/all',
    image: '/images/productos/geisha-bag.png',
    labelImage: null,
  },
  {
    id: 'sidra-single-origin',
    name: 'SIDRA',
    tier: 'heroes',
    variety: 'Sidra',
    process: 'pH Clarity Process',
    altitude: '1,792 m.a.s.l.',
    terroir: '#13',
    scaScore: '89',
    price: 55,
    comparePrice: null,
    weight: '12oz (340g)',
    roastLevel: 'Light Medium Roast',
    tastingNotes: 'Ripe strawberry, raspberry compote, and raw cane sweetness',
    location: 'Zipacón, Cundinamarca',
    stock: 38,
    badge: 'Best Seller',
    tag: 'SINGLE ORIGIN',
    shopifyUrl: 'https://lapalmayeltucan.com/collections/all',
    image: '/images/productos/sidra-bag.png',
    labelImage: '/images/productos/sidra-label.png',
  },
  {
    id: 'palma-blend',
    name: 'PALMA Blend',
    tier: 'warrior',
    variety: 'Traditional & Exotic Varieties',
    process: 'Honey Process',
    altitude: '1,700 m.a.s.l.',
    terroir: '',
    scaScore: '86',
    price: 42,
    comparePrice: null,
    weight: '12oz (340g)',
    roastLevel: 'Light Medium Roast',
    tastingNotes: 'Caramel, Milk Chocolate, Roasted Almonds, Brown Sugar',
    location: 'Zipacón, Cundinamarca',
    stock: 120,
    badge: null,
    tag: 'EVERYDAY LUXURY',
    shopifyUrl: 'https://lapalmayeltucan.com/collections/all',
    image: '/images/productos/palma-blend-bag.png',
    labelImage: null,
  },
  {
    id: 'tucan-blend',
    name: 'TUCÁN Blend',
    tier: 'warrior',
    variety: 'Traditional & Exotic Varieties',
    process: 'Natural Process',
    altitude: '1,700 m.a.s.l.',
    terroir: '',
    scaScore: '87',
    price: 45,
    comparePrice: null,
    weight: '12oz (340g)',
    roastLevel: 'Light Medium Roast',
    tastingNotes: 'Strawberry, Passion Fruit, Tangerine, Cocoa Nibs',
    location: 'Zipacón, Cundinamarca',
    stock: 95,
    badge: null,
    tag: 'EXOTIC BLEND',
    shopifyUrl: 'https://lapalmayeltucan.com/collections/all',
    image: '/images/productos/tucan-blend-bag.png',
    labelImage: '/images/productos/tucan-blend-label.png',
  },
];

export const TIERS: TierInfo[] = [
  {
    id: 'legendary',
    name: 'LEGENDARY',
    subtitle: 'Ultra Premium',
    description: 'Our rarest and highest-scoring coffees. SCA 90+.',
  },
  {
    id: 'heroes',
    name: 'SINGLE ORIGIN',
    subtitle: 'Premium Single Origin',
    description: 'Distinctive single-origin coffees with exceptional character. SCA 88-89.',
  },
  {
    id: 'warrior',
    name: 'ROASTED SERIES',
    subtitle: 'Accessible Excellence',
    description: 'Expertly blended coffees for everyday enjoyment. SCA 86-87.',
  },
];
