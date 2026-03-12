import { useEffect } from 'react';
import { img } from '../lib/cloudinary';
import { SHOPIFY, shopifyUrl } from '../lib/shopify';
import { Footer } from '../components/layout/Footer';

// ─── Types ───────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
}

interface ProductCard {
  name: string;
  price: string;
  originalPrice?: string;
  tasting: string;
  image: string;
  url: string;
  ctaLabel: string;
  badge?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS: StatItem[] = [
  { value: 'World Barista Champion', label: '2019 · WBC Athens' },
  { value: 'SCA 86 – 90+', label: 'Specialty Grade Every Lot' },
  { value: '$303 / lb', label: 'Record Auction Price — Legendary Geisha' },
  { value: '200+', label: 'Farming Families Supported' },
];

const COLLECTION_CARDS: ProductCard[] = [
  {
    name: 'GEISHA',
    price: '$65',
    tasting: 'Jasmine, peach nectar, bright bergamot',
    image: 'images/productos/geisha-bag.png',
    url: SHOPIFY.collections,
    ctaLabel: 'geisha-collection',
    badge: 'Rare Varietal',
  },
  {
    name: 'E.V. SIDRA NATURAL',
    price: '$55',
    tasting: 'Tropical fruit, red berry, silky body',
    image: 'images/productos/sidra-bag.png',
    url: SHOPIFY.tucanBlend,
    ctaLabel: 'sidra-collection',
    badge: 'Exquisite Series',
  },
  {
    name: 'PALMA BLEND',
    price: '$42',
    tasting: 'Dark chocolate, hazelnut, caramel finish',
    image: 'images/productos/palma-blend-bag.png',
    url: SHOPIFY.palmaBlend,
    ctaLabel: 'palma-collection',
  },
  {
    name: 'TUCÁN BLEND',
    price: '$45',
    tasting: 'Brown sugar, toasted almond, stone fruit',
    image: 'images/productos/tucan-blend-bag.png',
    url: SHOPIFY.tucanBlend,
    ctaLabel: 'tucan-collection',
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span className="text-white/60 text-xs uppercase tracking-[0.3em] font-body">Scroll</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/60"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gold uppercase tracking-[0.35em] text-xs font-body font-semibold mb-4">
      {children}
    </p>
  );
}

function StoryHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl text-dark leading-snug mb-6">
      {children}
    </h2>
  );
}

function ProductCardItem({ card }: { card: ProductCard }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 bg-rosa-blush flex items-center justify-center p-6">
        {card.badge && (
          <span className="absolute top-3 left-3 bg-gold text-white text-[10px] uppercase tracking-wider font-body font-semibold px-2 py-1 rounded-full">
            {card.badge}
          </span>
        )}
        <img
          src={img(card.image, 'product')}
          alt={card.name}
          className="h-40 w-auto object-contain drop-shadow-md"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="font-display text-lg text-dark tracking-wide mb-1">{card.name}</p>
        <p className="text-gray-500 text-sm font-body italic leading-relaxed flex-1">
          {card.tasting}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-body text-dark font-bold text-xl">{card.price}</span>
          <a
            href={shopifyUrl(card.url, 'lp-story', card.ctaLabel)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark text-white text-xs uppercase tracking-wider font-body font-semibold px-4 py-2 rounded-full hover:bg-gold transition-colors duration-200"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function LandingStory() {
  useEffect(() => {
    document.title = 'La Palma & El Tucán | Colombian Specialty Coffee — Farm to Cup';

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Discover how La Palma & El Tucán grows world-class Geisha coffee at 1,800m in Colombia\'s cloud forest. From farm to cup — order specialty coffee roasted at origin.');

    // Canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://jbenavides-dotcom.github.io/lp-usa-Jhona-v2/story');

    // OG tags
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://jbenavides-dotcom.github.io/lp-usa-Jhona-v2/story');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'La Palma & El Tucán | Colombian Specialty Coffee — Farm to Cup');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'Discover how La Palma & El Tucán grows world-class Geisha coffee at 1,800m in Colombia\'s cloud forest. From farm to cup — order specialty coffee roasted at origin.');

    // Keywords
    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement('meta');
      keywords.setAttribute('name', 'keywords');
      document.head.appendChild(keywords);
    }
    keywords.setAttribute('content', 'colombian specialty coffee, farm to cup coffee, la palma el tucan, cloud forest coffee, geisha coffee colombia, origin roasted coffee');

    // Hreflang
    const hreflangEn = document.querySelector('link[hreflang="en-us"]');
    if (hreflangEn) hreflangEn.setAttribute('href', 'https://jbenavides-dotcom.github.io/lp-usa-Jhona-v2/story');
  }, []);

  const handleScrollToOrigin = () => {
    const el = document.getElementById('origin');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="font-body overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════
          1. HERO — FULLSCREEN
      ═══════════════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${img('images/sostenibilidad/finca_vista_panoramica.jpg', 'hero')})`,
        }}
        aria-label="Hero — From Colombia's Cloud Forest to Your Morning Ritual"
      >
        {/* Dark overlay — layered for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Pre-title */}
          <p className="text-gold font-body uppercase tracking-[0.4em] text-xs md:text-sm">
            Zipacón, Cundinamarca · Colombia · 1,800 m.a.s.l.
          </p>

          {/* Main title */}
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight max-w-3xl">
            From Colombia's Cloud Forest to Your Morning Ritual
          </h1>

          {/* Subtitle */}
          <p className="font-body text-cream/80 text-lg md:text-xl max-w-xl leading-relaxed">
            A journey that begins at 1,800 meters above sea level — where cloud, soil, and obsession
            converge into a single perfect cup.
          </p>

          {/* CTA scroll */}
          <button
            onClick={handleScrollToOrigin}
            className="mt-4 text-white font-body text-sm uppercase tracking-[0.3em] border-b border-white/50 pb-1 hover:border-white hover:text-cream transition-colors duration-200 cursor-pointer bg-transparent"
            aria-label="Scroll to origin story"
          >
            Discover Our Story ↓
          </button>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </section>

      {/* ═══════════════════════════════════════════════════
          2A. STORY BLOCK 1 — THE ORIGIN
      ═══════════════════════════════════════════════════ */}
      <section
        id="origin"
        className="bg-cream py-20 md:py-28"
        aria-labelledby="origin-heading"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image — LEFT */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold opacity-40" />
            <img
              src={img('images/sostenibilidad/finca_vista_panoramica.jpg', 'hero')}
              alt="Panoramic view of La Palma y El Tucán farm in the Colombian cloud forest"
              className="w-full h-80 md:h-[480px] object-cover rounded-xl shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold opacity-40" />
          </div>

          {/* Text — RIGHT */}
          <div>
            <Eyebrow>The Origin</Eyebrow>
            <StoryHeading id="origin-heading">
              In 2012, a Vision Was Born
            </StoryHeading>
            <div className="space-y-5 text-dark/80 font-body leading-relaxed text-base md:text-lg">
              <p>
                Most coffee travels thousands of miles through a chain of strangers before it
                reaches your cup. Farmers sell to middlemen, who sell to importers, who sell to
                roasters, who sell to you — and somewhere along that journey, the story gets
                lost. In 2012, Felipe Sardi decided to break that chain entirely.
              </p>
              <p>
                Nestled in the cloud forests of Zipacón, Cundinamarca, at 1,800 meters above
                sea level, La Palma y El Tucán was founded on a single, radical idea: control
                every step from seed to cup, on the same piece of land. No compromises. No
                hand-offs. Just one farm, one roaster, one story.
              </p>
              <p>
                The microclimate here is extraordinary — persistent cloud cover, volcanic soil,
                and dramatic day-to-night temperature swings that force coffee cherries to
                develop slowly, concentrating their sugars and complexity into something the
                world rarely tastes. This was the land. This was the dream. What came next
                would change Colombian coffee forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2B. STORY BLOCK 2 — THE FARM (reversed layout)
      ═══════════════════════════════════════════════════ */}
      <section
        className="bg-beige-natural py-20 md:py-28"
        aria-labelledby="farm-heading"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text — LEFT (order-2 on mobile to appear after image) */}
          <div className="order-2 md:order-1">
            <Eyebrow>The Farm</Eyebrow>
            <StoryHeading id="farm-heading">
              1,800 Meters Above Sea Level
            </StoryHeading>
            <div className="space-y-5 text-dark/80 font-body leading-relaxed text-base md:text-lg">
              <p>
                Nineteen hectares. Twenty-seven species per hectare. Zero synthetic chemicals.
                The farm is not a monoculture — it is a living ecosystem. Banana trees shade
                young coffee plants. Native timber species anchor the soil. Grazing cattle
                enrich the land naturally. Every decision flows from one philosophy: the forest
                feeds the coffee, and the coffee feeds the forest.
              </p>
              <p>
                The Palma de Cera — Colombia's national tree, classified as endangered — grows
                here. So does the Emerald Toucan, whose brilliant plumage became our emblem.
                We practice regenerative agriculture not as a marketing label but as a survival
                instinct: the land that sustains us must flourish for the next hundred years.
              </p>
              <p>
                Through our <em className="font-semibold text-dark">Mejores Vecinos</em> program,
                we share what we've learned with over 200 neighboring farming families — bringing
                organic practices, financial literacy, and specialty-grade processing to an
                entire community. A cup of our coffee is a vote for that community's future.
              </p>
              <p className="text-dark font-semibold text-sm mt-4 bg-amarillo-miel/30 px-4 py-3 rounded-lg">
                Founded in 2012, La Palma & El Tucán manages 40 hectares of specialty coffee across multiple microlots in Colombia's Western Andes. The farm's terroir — cloud forest conditions, volcanic soil, and 1,800m elevation — creates natural conditions for complex flavor development.
              </p>
            </div>
          </div>

          {/* Image — RIGHT (order-1 on mobile to appear first) */}
          <div className="relative order-1 md:order-2">
            <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-gold opacity-40" />
            <img
              src={img('images/proceso/proceso_01_cultivo_cafetales.jpg', 'hero')}
              alt="Coffee plantations growing at La Palma y El Tucán farm"
              className="w-full h-80 md:h-[480px] object-cover rounded-xl shadow-xl"
              loading="lazy"
            />
            {/* Inset detail image */}
            <div className="absolute -bottom-6 -left-6 hidden md:block w-36 h-36 rounded-xl overflow-hidden shadow-lg border-4 border-beige-natural">
              <img
                src={img('images/sostenibilidad/biodiversidad_ganado.jpg', 'thumb')}
                alt="Biodiversity and cattle on the farm"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-gold opacity-40 hidden md:block" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2C. STORY BLOCK 3 — THE COFFEE
      ═══════════════════════════════════════════════════ */}
      <section
        className="bg-rosa-empaque py-20 md:py-28"
        aria-labelledby="coffee-heading"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image — LEFT */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-burgundy opacity-30" />
            <img
              src={img('images/proceso/proceso_03_cereza_madura.jpg', 'hero')}
              alt="Ripe coffee cherries hand-picked at La Palma y El Tucán"
              className="w-full h-80 md:h-[480px] object-cover rounded-xl shadow-xl"
              loading="lazy"
            />
            {/* Inset: Felipe at processing */}
            <div className="absolute -bottom-6 -right-6 hidden md:block w-36 h-36 rounded-xl overflow-hidden shadow-lg border-4 border-rosa-empaque">
              <img
                src={img('images/equipo/equipo_felipe_beneficio.jpg', 'thumb')}
                alt="Felipe Sardi overseeing coffee processing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-burgundy opacity-30 hidden md:block" />
          </div>

          {/* Text — RIGHT */}
          <div>
            <Eyebrow>The Coffee</Eyebrow>
            <StoryHeading id="coffee-heading">
              Geisha, Sidra &amp; Rare Varietals
            </StoryHeading>
            <div className="space-y-5 text-dark/80 font-body leading-relaxed text-base md:text-lg">
              <p>
                We grow varietals that most farms in the world never dare attempt. Ten thousand,
                three hundred and thirty-two Geisha plants — the aristocrat of coffee. Sidra, a
                mutation so rare it was once thought mythical. SL-28 from Kenya's highlands.
                Mokka, the ancient Yemeni dwarf. Each one demanding, each one extraordinary.
              </p>
              <p>
                But growing the right seed is only half the story. What happens after the cherry
                is picked determines everything. Our proprietary processing methods — Lactic
                Fermentation, Bio-Innovation, and pH Clarity — are the result of years of
                scientific rigor and sensory obsession. We inoculate fermentation chambers with
                specific microorganisms. We monitor pH hour by hour. We control what most farms
                leave to chance.
              </p>
              <p>
                The coffee is then roasted on our Stronghold S8X roaster, just 50 meters from
                the cultivation plots — possibly the shortest seed-to-roast distance of any
                specialty producer on earth. The result is a cup that carries the exact
                signature of this cloud forest, this soil, this season. Nothing added.
                Nothing lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. SOCIAL PROOF STATS BAR
      ═══════════════════════════════════════════════════ */}
      <section className="bg-dark py-16" aria-label="Awards and achievements">
        <div className="max-w-6xl mx-auto px-6">
          {/* Eyebrow */}
          <p className="text-center text-gold font-body uppercase tracking-[0.35em] text-xs mb-12 opacity-80">
            Recognized by the World's Best
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center text-center gap-2"
              >
                <span className="font-display text-2xl md:text-3xl text-white leading-tight">
                  {stat.value}
                </span>
                <span className="font-body text-gold text-xs uppercase tracking-widest leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider quote */}
          <p className="text-center font-display text-white/30 text-lg md:text-xl mt-14 max-w-2xl mx-auto leading-relaxed italic">
            "The most complete coffee farm I have ever visited."
            <span className="block text-sm font-body text-white/20 not-italic mt-2 tracking-wider">
              — World Barista Champion Judge
            </span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROCESS STRIP — 4 IMAGES CINEMATIC
      ═══════════════════════════════════════════════════ */}
      <section className="bg-dark" aria-label="Coffee processing journey">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            {
              src: 'images/proceso/proceso_bio_washed.jpg',
              caption: 'Bio-Washed Processing',
            },
            {
              src: 'images/proceso/proceso_02_vivero_secaderos.jpg',
              caption: 'Nursery & Drying Beds',
            },
            {
              src: 'images/proceso/proceso_04_secado_natural.jpg',
              caption: 'Natural Sun Drying',
            },
            {
              src: 'images/tostadora/tostadora_nueva.jpg',
              caption: 'Stronghold S8X Roaster',
            },
          ].map((item) => (
            <div key={item.src} className="relative group overflow-hidden h-48 md:h-64">
              <img
                src={img(item.src, 'card')}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-300" />
              <p className="absolute bottom-3 left-3 right-3 text-white/80 font-body text-xs uppercase tracking-widest">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. PRODUCT HERO — LEGENDARY GEISHA
      ═══════════════════════════════════════════════════ */}
      <section
        className="bg-cream py-20 md:py-28"
        aria-labelledby="legendary-heading"
      >
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Pre-title badge */}
          <span className="inline-block bg-gold/15 text-gold font-body text-xs uppercase tracking-[0.35em] px-4 py-2 rounded-full mb-8">
            Our Flagship — SCA 90+
          </span>

          {/* Product image */}
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl scale-75" />
            <img
              src={img('images/productos/legendary-geisha-bag.png', 'product')}
              alt="LEGENDARY Geisha — La Palma y El Tucán ultra-premium specialty coffee bag"
              className="relative h-72 md:h-96 w-auto object-contain drop-shadow-2xl mx-auto"
              loading="eager"
            />
          </div>

          {/* Name */}
          <h2
            id="legendary-heading"
            className="font-display text-4xl md:text-5xl text-dark tracking-wide mb-3"
          >
            LEGENDARY Geisha
          </h2>

          {/* Attributes */}
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-5">
            Ultra Premium &nbsp;·&nbsp; SCA 90+ &nbsp;·&nbsp; Lactic Process
          </p>

          {/* Tasting notes */}
          <p className="text-gray-600 font-body italic text-lg md:text-xl leading-relaxed max-w-xl mb-8">
            "Bursting with ripe citrus, exotic stone fruits, and jasmine perfume — a cup that
            rewards every sip with something new."
          </p>

          {/* Workers quote */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={img('images/equipo/equipo_trabajador_cafe.jpg', 'thumb')}
                alt="La Palma y El Tucán farm worker"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-dark/60 font-body text-sm text-left leading-relaxed">
              Hand-picked at peak ripeness by our team,<br />
              every cherry selected with the same care<br />
              as the first one we ever harvested.
            </p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-8">
            <span className="font-body text-burgundy text-4xl font-bold">$85</span>
            <span className="font-body text-gray-400 text-xl line-through">$95</span>
            <span className="bg-burgundy/10 text-burgundy text-xs font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              Save $10
            </span>
          </div>

          {/* Primary CTA */}
          <a
            href={shopifyUrl(SHOPIFY.legendaryGeisha, 'lp-story', 'legendary-hero')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dark text-cream font-body font-semibold uppercase tracking-wider text-sm px-10 py-4 rounded-full hover:bg-gold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Order Legendary Geisha — $85
          </a>

          {/* Trust note */}
          <p className="text-dark/40 font-body text-xs mt-5 tracking-wide">
            Free US Shipping on orders over $50 &nbsp;·&nbsp; Roasted to order
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. OTHER COFFEES — COLLECTION GRID
      ═══════════════════════════════════════════════════ */}
      <section
        className="bg-beige-natural py-20 md:py-28"
        aria-labelledby="collection-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-14">
            <Eyebrow>The Full Collection</Eyebrow>
            <h2
              id="collection-heading"
              className="font-display text-3xl md:text-4xl text-dark"
            >
              Explore Our Coffees
            </h2>
            <p className="font-body text-dark/60 text-base mt-4 max-w-md mx-auto leading-relaxed">
              From competition-grade Geisha to our beloved daily blends — every bag carries
              the same obsession that built this farm.
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLECTION_CARDS.map((card) => (
              <ProductCardItem key={card.name} card={card} />
            ))}
          </div>

          {/* Browse all CTA */}
          <div className="text-center mt-12">
            <a
              href={shopifyUrl(SHOPIFY.collections, 'lp-story', 'collection-browse-all')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dark text-dark font-body text-sm uppercase tracking-wider px-8 py-3 rounded-full hover:bg-dark hover:text-cream transition-colors duration-300"
            >
              Browse All Coffees
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. FOOTER CTA — BURGUNDY
      ═══════════════════════════════════════════════════ */}
      <section
        className="bg-burgundy py-20 md:py-24 text-white text-center"
        aria-labelledby="final-cta-heading"
      >
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-6">
          {/* Decorative line */}
          <div className="w-12 h-px bg-white/40" />

          <h2
            id="final-cta-heading"
            className="font-display text-4xl md:text-5xl text-white leading-tight"
          >
            Begin Your Journey
          </h2>

          <p className="font-body text-white/80 text-lg leading-relaxed max-w-md">
            Every cup tells the story of our cloud forest farm — the soil, the hands, the
            obsession that grew it. Your morning ritual deserves that story.
          </p>

          <a
            href={shopifyUrl(SHOPIFY.collections, 'lp-story', 'final')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-white text-burgundy font-body font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-cream transition-colors duration-300 shadow-lg"
          >
            Shop Our Coffees — Free US Shipping
          </a>

          {/* Sub-note */}
          <p className="text-white/50 font-body text-xs tracking-wider">
            Roasted at origin · Shipped from Miami, FL · All 50 US States + Puerto Rico
          </p>

          {/* Decorative line */}
          <div className="w-12 h-px bg-white/40 mt-2" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INTERNAL LINKS + EEAT
      ═══════════════════════════════════════════════════ */}
      <section className="bg-cream py-12 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-dark/60 font-body text-sm">
            Explore more from La Palma & El Tucán
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/lp-usa-Jhona-v2/geisha-coffee" className="text-burgundy font-semibold text-sm hover:underline">
              What Makes Geisha Special? →
            </a>
            <span className="text-dark/20">|</span>
            <a href="/lp-usa-Jhona-v2/shop" className="text-burgundy font-semibold text-sm hover:underline">
              Shop All Coffees →
            </a>
          </div>
          <div className="pt-4 border-t border-dark/10">
            <p className="text-dark/50 text-xs leading-relaxed">
              Roasted and shipped directly by La Palma & El Tucán — producer-roasters since 2012.<br />
              Winner: World Barista Championship 2019 · SCA Score 86–90+ · Rainforest Alliance Certified
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <Footer />
    </main>
  );
}
