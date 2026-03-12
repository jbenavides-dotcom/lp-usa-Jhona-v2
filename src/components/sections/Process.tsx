import { PROCESS_STEPS } from '../../constants/process';
import { ScrollReveal } from '../ui/ScrollReveal';

const BASE = import.meta.env.BASE_URL;

export function Process() {
  return (
    <section id="process" className="bg-cream py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-rosa-empaque to-cream" />
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle mb-3">OUR PROCESS</p>
          <h2 className="section-title font-display">From Seed to Cup</h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto mt-4 leading-relaxed">
            Every step happens on our farm in Zipacón, Colombia — from the moment a seed germinates
            in our nursery to the final roast on our Stronghold S8X. We control the entire journey
            because we believe the best coffee comes from a single vision, executed with precision at
            every stage. Our innovative processing methods — Lactic fermentation, Bio-Innovation, and
            pH Clarity — are what set our coffees apart.
          </p>
        </div>

        {/* Steps grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                <div className={`relative h-56 overflow-hidden ${step.step === 7 ? 'bg-cream flex items-center justify-center' : ''}`}>
                  <img
                    src={`${BASE}${step.image.replace(/^\//, '')}`}
                    alt={`${step.title} — Step ${step.step} of the coffee production process at La Palma & El Tucán farm, Zipacón Colombia`}
                    loading="lazy"
                    width="400"
                    height="224"
                    className={`${step.step === 7 ? 'w-full h-full object-contain p-2' : 'w-full h-full object-cover hover:scale-105'} transition-transform duration-500 rounded-t-lg`}
                  />
                  {/* Step number badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 bg-burgundy text-white rounded-full flex items-center justify-center font-bold font-body text-sm">
                    {step.step}
                  </div>
                </div>

                {/* Text */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-dark">{step.title}</h3>
                  <p className="text-gold font-body text-sm mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Innovative Processing — closing section */}
        <ScrollReveal delay={200}>
          <div className="mt-8 grid lg:grid-cols-2 gap-8 items-center">
            <img
              src={`${BASE}images/proceso/proceso_bio_washed.jpg`}
              alt="Bio-Washed coffee processing at La Palma & El Tucán farm in Zipacón, Colombia"
              loading="lazy"
              width="600"
              height="256"
              className="rounded-xl w-full h-64 object-cover"
            />
            <div>
              <h3 className="font-display text-2xl font-bold text-dark">Innovative Processing</h3>
              <p className="text-gray-600 font-body mt-3 leading-relaxed">
                Our proprietary processing methods transform raw cherry into extraordinary coffee.
                The Lactic Process uses anaerobic fermentation with lactobacillus bacteria, creating
                intense sweetness and creamy body. Our Bio-Innovation method employs buried clay
                vessels and natural compost for a 100-hour fermentation cycle. The pH Clarity
                Process delivers pristine acidity and crystal-clear flavor definition.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
