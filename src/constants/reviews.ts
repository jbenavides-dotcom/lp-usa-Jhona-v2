export interface Review {
  name: string;
  location: string;
  product: string;
  rating: number;
  text: string;
  verified: boolean;
  date: string;
}

export const REVIEWS: Review[] = [
  {
    name: 'Michael T.',
    location: 'Portland, OR',
    product: 'SIDRA',
    rating: 5,
    text: "Most complex cup I've ever had at home. The strawberry notes are incredible.",
    verified: true,
    date: '2026-01-15',
  },
  {
    name: 'Sarah K.',
    location: 'Austin, TX',
    product: 'LEGENDARY Geisha',
    rating: 5,
    text: 'Worth every penny. The jasmine aroma alone is an experience.',
    verified: true,
    date: '2026-02-03',
  },
  {
    name: 'James L.',
    location: 'Seattle, WA',
    product: 'PALMA Blend',
    rating: 5,
    text: "Perfect everyday coffee that's miles above anything else in this price range.",
    verified: true,
    date: '2026-02-20',
  },
];
