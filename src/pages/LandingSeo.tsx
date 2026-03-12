import { useEffect, useState } from 'react';
import { img } from '../lib/cloudinary';
import { SHOPIFY, shopifyUrl } from '../lib/shopify';
import { Footer } from '../components/layout/Footer';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FaqItem {
  question: string;
  answer: string;
}

interface BrewMethod {
  name: string;
  icon: string;
  temp: string;
  grind: string;
  ratio: string;
  time: string;
  tip: string;
}

interface SeoProduct {
  id: string;
  name: string;
  tagline: string;
  price: number;
  scaScore: string;
  process: string;
  altitude: string;
  tastingNotes: string;
  image: string;
  badge: string | null;
  shopifyUrl: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

const SEO_PRODUCTS: SeoProduct[] = [
  {
    id: 'legendary-geisha',
    name: 'LEGENDARY Geisha',
    tagline: 'The rarest cup we produce',
    price: 85,
    scaScore: '90+',
    process: 'Lactic Process',
    altitude: '1,760 m.a.s.l.',
    tastingNotes: 'Ripe citrus, exotic stone fruits, and jasmine perfume',
    image: img('images/productos/legendary-geisha-bag.png', 'product'),
    badge: 'Limited Release',
    shopifyUrl: shopifyUrl(SHOPIFY.legendaryGeisha, 'lp-seo', 'product-legendary'),
    description:
      'Our ultra-premium Geisha, processed using a proprietary lactic fermentation method that amplifies the variety\'s signature florals. Scores 90+ on the SCA scale — reserved for the most extraordinary coffees on earth.',
  },
  {
    id: 'geisha-single-origin',
    name: 'GEISHA Single Origin',
    tagline: 'The definitive Geisha experience',
    price: 65,
    scaScore: '88',
    process: 'Bio-Washed Process',
    altitude: '1,763 m.a.s.l.',
    tastingNotes: 'Blood orange, night-blooming jasmine, and crystallized honey',
    image: img('images/productos/geisha-bag.png', 'product'),
    badge: null,
    shopifyUrl: shopifyUrl(SHOPIFY.collections, 'lp-seo', 'product-geisha'),
    description:
      'Our classic Colombian Geisha coffee, bio-washed to preserve every floral nuance the variety is celebrated for. Grown at nearly 1,800 metres in Zipacón\'s cloud forest, this is specialty coffee at its most expressive.',
  },
  {
    id: 'sidra-single-origin',
    name: 'SIDRA Single Origin',
    tagline: 'World Barista Championship lineage',
    price: 55,
    scaScore: '89',
    process: 'pH Clarity Process',
    altitude: '1,792 m.a.s.l.',
    tastingNotes: 'Ripe strawberry, raspberry compote, and raw cane sweetness',
    image: img('images/productos/sidra-bag.png', 'product'),
    badge: 'Best Seller',
    shopifyUrl: shopifyUrl(SHOPIFY.tucanBlend, 'lp-seo', 'product-sidra'),
    description:
      'The Sidra variety catapulted La Palma & El Tucán onto the world stage when Diego Campos used it to win the 2019 World Barista Championship. Produced using our pH Clarity process for a uniquely clean, fruit-forward profile.',
  },
  {
    id: 'palma-blend',
    name: 'PALMA Blend',
    tagline: 'Everyday luxury, zero compromise',
    price: 42,
    scaScore: '86',
    process: 'Honey Process',
    altitude: '1,700 m.a.s.l.',
    tastingNotes: 'Caramel, milk chocolate, roasted almonds, and brown sugar',
    image: img('images/productos/palma-blend-bag.png', 'product'),
    badge: null,
    shopifyUrl: shopifyUrl(SHOPIFY.palmaBlend, 'lp-seo', 'product-palma'),
    description:
      'A honey-processed blend of traditional and exotic Colombian varieties, crafted for those who want exceptional specialty coffee every single morning. Balanced, sweet, and incredibly approachable.',
  },
  {
    id: 'tucan-blend',
    name: 'TUCÁN Blend',
    tagline: 'Vibrant, exotic, and endlessly complex',
    price: 45,
    scaScore: '87',
    process: 'Natural Process',
    altitude: '1,700 m.a.s.l.',
    tastingNotes: 'Strawberry, passion fruit, tangerine, and cocoa nibs',
    image: img('images/productos/tucan-blend-bag.png', 'product'),
    badge: null,
    shopifyUrl: shopifyUrl(SHOPIFY.collections, 'lp-seo', 'product-tucan'),
    description:
      'Naturally processed on raised beds under the Colombian sun, this blend captures the wild, fruit-driven character that makes our region\'s coffees so sought-after by specialty roasters worldwide.',
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How much does Geisha coffee cost?',
    answer:
      'Geisha coffee typically ranges from $45 to $150+ per 12oz bag depending on the producer, processing method, and SCA score. At La Palma & El Tucán, our Geisha Single Origin starts at $65 and our ultra-premium LEGENDARY Geisha — scored 90+ by SCA — is $85. Because we roast at origin and ship directly to the US, you receive farm-fresh quality without the additional margins added by importers and distributors.',
  },
  {
    question: 'Where can I buy Colombian Geisha coffee in the US?',
    answer:
      'You can buy Colombian Geisha coffee directly from La Palma & El Tucán\'s online store, which ships across the entire United States. Ordering direct from the producer guarantees you receive coffee roasted within 48 hours of dispatch — far fresher than retail options. All orders ship from Colombia with standard delivery to the US taking 5–8 business days.',
  },
  {
    question: 'What does Geisha coffee taste like?',
    answer:
      'Geisha coffee has a flavor profile unlike any other variety. Expect delicate floral notes of jasmine and orange blossom, bright citrus acidity (bergamot, blood orange), tropical fruit sweetness (lychee, peach, mango), and a silky, tea-like body. The finish is long and clean with a honey-like sweetness. Our Colombian Geisha, grown at 1,760 metres in Zipacón\'s cloud forest, expresses these characteristics with exceptional clarity thanks to the mineral-rich volcanic soil and high-altitude growing conditions.',
  },
  {
    question: 'Is Geisha coffee worth the price?',
    answer:
      'For specialty coffee lovers, Geisha is absolutely worth the investment. It consistently scores among the highest of any coffee variety on the SCA scale (88–94 points), which places it alongside the world\'s finest wines and artisan cheeses in terms of complexity. A single 12oz bag makes roughly 20–24 cups — bringing the per-cup cost to $3–4, comparable to a standard café latte but delivering a sensory experience in a completely different league. If you\'ve never tried Geisha, our $65 Single Origin is the ideal entry point.',
  },
  {
    question: 'What is the difference between Geisha and regular coffee?',
    answer:
      'Geisha (also spelled Gesha) is a specific coffee variety originally from the Gesha region of Ethiopia, not a processing method or roast level. It differs from regular Arabica coffee in several key ways: its genetic makeup produces unusually high concentrations of aromatic compounds, it requires very high altitudes (1,600–2,000 metres) to express its full potential, yields are extremely low compared to commercial varieties, and the SCA scores it achieves are consistently 2–5 points higher than conventional specialty coffees. Regular specialty coffee scores 80–85 on the SCA scale; Geisha routinely hits 88–92+.',
  },
  {
    question: 'How should I store specialty coffee?',
    answer:
      'Store your specialty coffee in an airtight container away from heat, light, and moisture. Avoid the refrigerator — condensation destroys delicate aromatic compounds. The ideal storage temperature is room temperature (60–75°F / 15–24°C). Whole beans stay fresh for 4–6 weeks after roasting; ground coffee loses peak flavor within 1–2 weeks. All our bags include one-way degassing valves that let CO₂ escape without letting oxygen in — store them sealed until you\'re ready to brew.',
  },
];

const BREW_METHODS: BrewMethod[] = [
  {
    name: 'Pour Over',
    icon: '☕',
    temp: '195–200°F (90–93°C)',
    grind: 'Medium-fine (table salt consistency)',
    ratio: '1:15 coffee to water',
    time: '3:30–4:00 minutes',
    tip:
      'Pour Over is the gold standard for Geisha coffee. The controlled extraction highlights every floral and citrus nuance. Use a Hario V60 or Chemex, bloom for 30 seconds with twice the coffee weight in water, then pour in slow concentric circles.',
  },
  {
    name: 'French Press',
    icon: '🫖',
    temp: '200°F (93°C)',
    grind: 'Coarse (sea salt consistency)',
    ratio: '1:12 coffee to water',
    time: '4:00 minutes steep',
    tip:
      'French Press produces a full-bodied, rich cup that showcases Geisha\'s stone fruit sweetness. Use a coarser grind to prevent over-extraction and bitterness. Press slowly and pour immediately — don\'t let the coffee sit on the grounds.',
  },
  {
    name: 'AeroPress',
    icon: '🧪',
    temp: '185–190°F (85–88°C)',
    grind: 'Medium (coarser than espresso)',
    ratio: '1:13 coffee to water',
    time: '2:00–2:30 minutes',
    tip:
      'AeroPress works brilliantly with Geisha at slightly lower temperatures. The inverted method gives you full control over steep time. Expect a concentrated, intensely aromatic cup. Dilute with 60ml of hot water for a filter-style experience.',
  },
];

const DIFFERENTIATORS = [
  {
    icon: '🌱',
    title: 'Seed to Cup',
    body: 'We control every step of production — from nursery and cultivation to fermentation, drying, milling, roasting, and packaging. No middlemen. No compromises.',
  },
  {
    icon: '🏔️',
    title: '1,800m Elevation',
    body: 'Our cloud forest terroir in Zipacón, Cundinamarca sits between 1,700 and 1,800 metres. The altitude, volcanic soil, and constant cloud cover create the slow cherry maturation that concentrates Geisha\'s aromatic complexity.',
  },
  {
    icon: '🏆',
    title: 'WBC 2019 Champion',
    body: 'Our Sidra variety powered Diego Campos to victory at the 2019 World Barista Championship — the Olympics of specialty coffee. This is the farm that competes at the highest level on the global stage.',
  },
  {
    icon: '📦',
    title: 'Roasted at Origin',
    body: 'Most Colombian coffee is exported as green beans and roasted abroad. We roast every batch at our on-farm roastery and ship within 48 hours — delivering a freshness that imported-then-roasted coffee simply cannot match.',
  },
];

// ---------------------------------------------------------------------------
// Schema data for JSON-LD
// ---------------------------------------------------------------------------

function buildProductSchema() {
  return SEO_PRODUCTS.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${p.name} — Colombian Specialty Coffee`,
    description: p.description,
    image: p.image,
    brand: {
      '@type': 'Brand',
      name: 'La Palma & El Tucán',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: p.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      url: p.shopifyUrl,
      seller: {
        '@type': 'Organization',
        name: 'La Palma & El Tucán',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: p.scaScore.replace('+', ''),
      reviewCount: '1',
      bestRating: '100',
    },
  }));
}

function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-burgundy uppercase tracking-[0.3em] text-xs font-semibold mb-3">
      {children}
    </p>
  );
}

function SeoProductCard({ product }: { product: SeoProduct }) {
  return (
    <article className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative bg-rosa-blush h-60 flex items-center justify-center overflow-hidden group">
        <img
          src={product.image}
          alt={`${product.name} — ${product.process} Colombian Specialty Coffee by La Palma & El Tucán`}
          width="400"
          height="240"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-burgundy text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-3 left-3 bg-white/90 border border-gray-200 text-[11px] font-bold px-2 py-1 rounded-sm">
          SCA <span className="text-burgundy">{product.scaScore}</span>
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="text-gold text-[10px] font-bold uppercase tracking-widest">
          {product.process} &nbsp;&middot;&nbsp; {product.altitude}
        </p>

        <h3 className="font-display text-xl font-bold text-dark leading-tight">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm italic leading-relaxed">
          {product.tastingNotes}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>

        <div className="flex-1" />

        <div className="flex items-center justify-between mt-1">
          <span className="text-burgundy text-2xl font-bold">${product.price}</span>
          <span className="text-gray-400 text-xs">12oz / 340g</span>
        </div>

        <a
          href={product.shopifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm text-center block w-full mt-1"
        >
          Buy Now — ${product.price}
        </a>
      </div>
    </article>
  );
}

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="bg-white">
          <button
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-cream/60 transition-colors duration-150"
          >
            <span className="font-body font-semibold text-dark text-base leading-snug">
              {item.question}
            </span>
            <span
              className="text-gold text-xl font-light flex-shrink-0 transition-transform duration-200"
              style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
              aria-hidden="true"
            >
              +
            </span>
          </button>

          {openIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export function LandingSeo() {
  // Document title
  useEffect(() => {
    document.title =
      'Geisha Coffee | Buy Colombian Geisha Coffee Online — La Palma & El Tucán';
  }, []);

  // Inject structured data (Product + FAQ schema)
  useEffect(() => {
    const productSchemas = buildProductSchema();
    const faqSchema = buildFaqSchema();

    const scriptElements: HTMLScriptElement[] = [];

    // One script per product for max compatibility
    productSchemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.setAttribute('data-schema', 'product-lp-seo');
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // FAQ schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqSchema);
    faqScript.setAttribute('data-schema', 'faq-lp-seo');
    document.head.appendChild(faqScript);
    scriptElements.push(faqScript);

    // Cleanup on unmount
    return () => {
      scriptElements.forEach((el) => {
        if (document.head.contains(el)) {
          document.head.removeChild(el);
        }
      });
    };
  }, []);

  return (
    <div className="font-body text-dark">

      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO SEO                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>La Palma &amp; El Tucán — Zipacón, Colombia</SectionLabel>

          <h1 className="font-display text-4xl md:text-5xl text-dark leading-tight mb-6">
            Geisha Coffee: The World's Most Extraordinary Coffee,
            <span className="text-burgundy"> Roasted at Origin in Colombia</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Experience award-winning Colombian specialty coffee from La Palma &amp; El
            Tucán — producer-roasted Geisha, Sidra &amp; rare varietals shipped directly
            to the US. SCA scores from 86 to 90+. Roasted within 48 hours of your order.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={shopifyUrl(SHOPIFY.collections, 'lp-seo', 'hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4"
            >
              Shop Geisha Coffee
            </a>
            <a
              href={shopifyUrl(SHOPIFY.legendaryGeisha, 'lp-seo', 'hero-legendary')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-10 py-4"
            >
              View LEGENDARY Geisha — $85
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 font-semibold uppercase tracking-widest mb-12">
            <span>SCA Scored 86–90+</span>
            <span className="text-gray-300">|</span>
            <span>WBC 2019 Champion Farm</span>
            <span className="text-gray-300">|</span>
            <span>Roasted at Origin</span>
            <span className="text-gray-300">|</span>
            <span>Ships to USA</span>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto">
            <img
              src={img('images/sostenibilidad/finca_vista_panoramica.jpg', 'medium')}
              alt="La Palma & El Tucán cloud forest farm in Zipacón, Colombia — where our Geisha and specialty coffees are grown"
              width="1000"
              height="560"
              className="w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. WHAT IS GEISHA COFFEE?                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <SectionLabel>Coffee Education</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl text-dark mb-6 leading-tight">
                What is Geisha Coffee?
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-dark">Geisha coffee</strong> — also spelled
                  Gesha — is a specific Arabica variety originally discovered in the Gesha
                  region of southwestern Ethiopia in the 1930s. It was brought to Central
                  America in the 1950s and largely forgotten until Hacienda La Esmeralda
                  in Panama reintroduced it to the specialty coffee world in 2004, where it
                  promptly set auction records and redefined what coffee could taste like.
                </p>

                <p>
                  What makes Geisha so extraordinary is its genetic profile. The variety
                  produces unusually high concentrations of aromatic compounds — particularly
                  linalool, which is responsible for its characteristic jasmine and bergamot
                  florals — combined with bright citrus acidity (bergamot, blood orange,
                  lemon blossom) and a silky, tea-like body. Tasting notes typical of
                  <strong className="text-dark"> Colombian Geisha coffee</strong> include
                  tropical fruits (lychee, peach, mango), stone fruits (white peach,
                  apricot), and a long, honey-sweet finish.
                </p>

                <p>
                  On the{' '}
                  <strong className="text-dark">
                    Specialty Coffee Association (SCA) scoring system
                  </strong>
                  , coffees must score 80+ to qualify as specialty grade. Most excellent
                  coffees sit between 84 and 87. Geisha routinely scores 88–94, placing it
                  among the most complex and prized beverages in the world — comparable in
                  prestige to Grand Cru Burgundy wines or single-origin dark chocolate.
                </p>

                <p>
                  Growing <strong className="text-dark">specialty coffee</strong> of this
                  caliber demands specific conditions: elevations above 1,600 metres,
                  volcanic soil with excellent drainage, significant temperature variation
                  between day and night, and meticulous hand-harvesting of only fully ripe
                  cherries. Our farm in Zipacón, Cundinamarca — at 1,760 metres above sea
                  level in a cloud forest microclimate — provides precisely these conditions,
                  which is why our Geisha expresses its varietal character with such
                  exceptional intensity.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={img('images/proceso/proceso_03_cereza_madura.jpg', 'card')}
                alt="Ripe Geisha coffee cherries ready for harvest at La Palma & El Tucán farm in Colombia"
                width="800"
                height="600"
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="bg-beige-natural px-5 py-4">
                <p className="text-xs text-gray-500 italic">
                  Hand-selected ripe Geisha cherries at our Zipacón farm. Only cherries at
                  perfect Brix levels are harvested — never green, never overripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. WHY LA PALMA & EL TUCÁN                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-beige-natural py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Our Difference</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-dark leading-tight">
              Why La Palma &amp; El Tucán Geisha is Different
            </h2>
            <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Hundreds of farms grow Geisha. Very few control every variable from seed to
              shipment — and even fewer have won the World Barista Championship doing it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-5 items-start"
              >
                <span className="text-3xl flex-shrink-0 mt-0.5">{d.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark mb-2">
                    {d.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Process image strip */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden">
              <img
                src={img('images/proceso/proceso_01_cultivo_cafetales.jpg', 'card')}
                alt="Coffee cultivation at La Palma & El Tucán cloud forest farm"
                width="800"
                height="500"
                loading="lazy"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={img('images/proceso/proceso_bio_washed.jpg', 'card')}
                alt="Bio-washed processing method for Colombian specialty coffee"
                width="800"
                height="500"
                loading="lazy"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={img('images/tostadora/tostadora_nueva.jpg', 'card')}
                alt="On-farm roastery at La Palma & El Tucán — roasted at origin in Colombia"
                width="800"
                height="500"
                loading="lazy"
                className="w-full h-52 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. PRODUCTS                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-20 px-4" id="shop">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Shop Online — Ships to USA</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-dark leading-tight">
              Our Colombian Specialty Coffees
            </h2>
            <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Every coffee is grown on our family farm, processed using our proprietary
              methods, roasted at origin, and shipped fresh — scored from 86 to 90+ by
              SCA-certified judges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SEO_PRODUCTS.map((product) => (
              <SeoProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={shopifyUrl(SHOPIFY.collections, 'lp-seo', 'view-all')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              View Full Collection
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. HOW TO BREW GEISHA COFFEE                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-verde-finca py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Brewing Guide</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-dark leading-tight">
              How to Brew Geisha Coffee at Home
            </h2>
            <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Geisha coffee rewards careful brewing. Because the variety is so delicate and
              aromatic, small adjustments in water temperature, grind size, and brew ratio
              make a significant difference in the cup. Here are our recommended methods
              for getting the most out of your{' '}
              <strong>Colombian specialty coffee</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {BREW_METHODS.map((method, index) => (
              <div
                key={method.name}
                className="bg-white rounded-xl p-7 shadow-sm flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{method.icon}</span>
                  <div>
                    <p className="text-[10px] text-gold font-bold uppercase tracking-widest">
                      Method {index + 1}
                    </p>
                    <h3 className="font-display text-xl font-bold text-dark">
                      {method.name}
                    </h3>
                  </div>
                </div>

                {/* Parameters */}
                <div className="space-y-2 border-t border-gray-100 pt-4">
                  {[
                    { label: 'Water Temp', value: method.temp },
                    { label: 'Grind Size', value: method.grind },
                    { label: 'Ratio', value: method.ratio },
                    { label: 'Brew Time', value: method.time },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-3 text-sm">
                      <span className="text-gray-400 font-semibold">{label}</span>
                      <span className="text-dark text-right">{value}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {method.tip}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/70 rounded-xl p-6 mt-10 max-w-3xl mx-auto text-center">
            <p className="text-dark text-sm leading-relaxed">
              <strong>Pro tip:</strong> Always use filtered water when brewing specialty
              coffee. Chlorine and minerals in tap water can mute the delicate aromatics
              that make Geisha so extraordinary. A total dissolved solids (TDS) level of
              120–150 ppm is ideal for highlighting{' '}
              <strong>Colombian Geisha coffee's</strong> jasmine and bergamot notes. Grind
              fresh immediately before brewing — pre-ground Geisha loses 60% of its aroma
              within 15 minutes of grinding.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. FAQ                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-cream py-20 px-4" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-dark leading-tight">
              Frequently Asked Questions About Geisha Coffee
            </h2>
            <p className="text-gray-500 text-base mt-4 leading-relaxed">
              Everything you need to know before buying Colombian specialty coffee online.
            </p>
          </div>

          <FaqAccordion items={FAQ_ITEMS} />

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">
              Still have questions about our specialty coffee?
            </p>
            <a
              href="mailto:info@lapalmayeltucan.com"
              className="text-burgundy font-semibold text-sm hover:underline"
            >
              Contact us at info@lapalmayeltucan.com
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 7. FINAL CTA                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-burgundy py-24 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/70 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            La Palma &amp; El Tucán — Zipacón, Colombia
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
            Ready to Taste the World's Most Extraordinary Coffee?
          </h2>

          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Join thousands of specialty coffee lovers across the US who receive
            producer-fresh Geisha, Sidra, and rare Colombian varietals — roasted at origin
            and shipped directly from our cloud forest farm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={shopifyUrl(SHOPIFY.collections, 'lp-seo', 'final')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-burgundy font-bold uppercase tracking-wider px-10 py-4 text-base hover:bg-cream transition-colors duration-200"
            >
              Shop All Coffees
            </a>
            <a
              href={shopifyUrl(SHOPIFY.legendaryGeisha, 'lp-seo', 'final-legendary')}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold uppercase tracking-wider px-10 py-4 text-base hover:bg-white/10 transition-colors duration-200"
            >
              LEGENDARY Geisha — $85
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/60 text-xs font-semibold uppercase tracking-widest mt-12">
            <span>Free Shipping on $80+</span>
            <span className="text-white/30">|</span>
            <span>Roasted Within 48 Hours</span>
            <span className="text-white/30">|</span>
            <span>Secure Checkout</span>
            <span className="text-white/30">|</span>
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
