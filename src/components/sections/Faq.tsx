import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'What makes La Palma & El Tucán coffee different from other specialty coffees?',
    answer:
      'We are one of the few coffee brands in the world that controls every step from seed to roast in a single location. Our coffee is roasted on-site at our farm in Zipacón, Colombia — just 50 meters from where it was cultivated. This allows us to design each roast profile based on intimate knowledge of every lot\'s terroir, fermentation, and drying process.',
  },
  {
    question: 'What is Geisha coffee and why is it so valuable?',
    answer:
      'Geisha (also spelled Gesha) is one of the rarest and most sought-after coffee varietals in the world, known for its extraordinary floral, citrus, and stone fruit flavor profile. Our Legendary Geisha scores 90+ on the SCA cupping scale. We maintain over 10,332 Geisha plants across 5 dedicated lots at altitudes between 1,650 and 1,800 meters above sea level.',
  },
  {
    question: 'What does "roasted at origin" mean?',
    answer:
      'Most specialty coffee brands source green beans from farms and roast them in a separate facility, often in a different country. "Roasted at origin" means our coffee is roasted right here on our farm in Zipacón, Colombia, on our Stronghold S8X roaster. The roaster sits just 50 meters from where the coffee trees grow, giving us unmatched control over quality.',
  },
  {
    question: 'What processing methods do you use?',
    answer:
      'We use proprietary processing methods that define our coffees. The Lactic Process uses anaerobic fermentation with lactobacillus bacteria for intense sweetness. Bio-Innovation employs buried clay vessels and natural compost for 100-hour fermentation cycles. pH Clarity delivers pristine acidity and crystal-clear flavor definition. We also use traditional washed, honey, and natural processes.',
  },
  {
    question: 'How did your coffee win the World Barista Championship?',
    answer:
      'In 2019, Jooyeon Jeon of South Korea won the World Barista Championship (WBC) using our Sidra varietal — a testament to the quality that emerges when the same team that nurtures the soil also controls the roast. Our green coffee has also commanded record prices, reaching $303 USD per pound — the highest price ever paid for Colombian coffee.',
  },
  {
    question: 'Do you ship specialty coffee to the United States?',
    answer:
      'Yes, we ship our Colombian specialty coffee to all 50 US states. Every bag is roasted at origin in Zipacón, Colombia, ensuring you receive the freshest possible coffee with full traceability from our farm to your cup.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">FAQ</p>
            <h2 className="section-title font-display">Frequently Asked Questions</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {FAQ_DATA.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-display font-bold text-dark text-lg leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-burgundy shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 font-body leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
