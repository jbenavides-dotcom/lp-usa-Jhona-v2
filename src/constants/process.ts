import { img } from '../lib/cloudinary';

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Nursery',
    description: 'Geisha, Sidra, and SL-28 seeds germinate in our nursery for 6-8 months before transplanting. We maintain over 10,332 Geisha plants across 5 dedicated lots.',
    image: img('images/proceso/proceso_01_cultivo_cafetales.jpg', 'card'),
  },
  {
    step: 2,
    title: 'Planting',
    description: 'Young plants are transplanted to shade-grown lots between 1,650 and 1,800 meters above sea level, within a polyculture system of 27 species per hectare.',
    image: img('images/proceso/proceso_02_vivero_secaderos.jpg', 'card'),
  },
  {
    step: 3,
    title: 'Cultivation',
    description: 'Each tree grows 3-4 years under native forest canopy with zero chemical fertilizers. Our 100% organic, agroecological approach builds 9% soil organic matter.',
    image: img('images/proceso/proceso_01_cultivo_cafetales.jpg', 'card'),
  },
  {
    step: 4,
    title: 'Harvest',
    description: 'Every cherry is hand-picked at peak ripeness by our team and neighboring families in the Mejores Vecinos program — over 200 families who receive fair pay and technical training.',
    image: img('images/proceso/proceso_03_cereza_madura.jpg', 'card'),
  },
  {
    step: 5,
    title: 'Fermentation',
    description: 'Proprietary fermentation methods define our coffees: Lactic Process uses anaerobic bacteria for intense sweetness, Bio-Innovation employs buried clay vessels for 100-hour cycles, and pH Clarity delivers pristine acidity.',
    image: img('images/proceso/proceso_05_lavado_washed.jpg', 'card'),
  },
  {
    step: 6,
    title: 'Drying',
    description: 'Beans dry on African raised beds for 15-25 days with meticulous documentation of every lot, ensuring consistent quality and full traceability from cherry to parchment.',
    image: img('images/proceso/proceso_04_secado_natural.jpg', 'card'),
  },
  {
    step: 7,
    title: 'Roasting',
    description: 'Roasted on our Stronghold S8X roaster just 50 meters from where each tree grew. Every roast profile is designed from intimate knowledge of that lot\'s terroir and fermentation.',
    image: img('images/tostadora/tostadora_nueva.jpg', 'card'),
  },
];
