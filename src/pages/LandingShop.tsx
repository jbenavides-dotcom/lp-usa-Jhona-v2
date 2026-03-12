import { useEffect } from 'react';
import { img } from '../lib/cloudinary';
import { SHOPIFY, shopifyUrl } from '../lib/shopify';
import { Footer } from '../components/layout/Footer';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ShopProduct {
  id: string;
  name: string;
  price: number;
  badge: string | null;
  badgeBg: string;
  tastingNotes: string;
  scaScore: string;
  imagePath: string;
  shopifyHref: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PRODUCTS: ShopProduct[] = [
  {
    id: 'legendary-geisha',
    name: 'Legendary Geisha',
    price: 85,
    badge: 'BEST SELLER',
    badgeBg: 'bg-burgundy',
    tastingNotes: 'Jasmine, Citrus, Stone Fruit',
    scaScore: 'SCA 90+',
    imagePath: 'images/productos/legendary-geisha-bag.png',
    shopifyHref: shopifyUrl(SHOPIFY.legendaryGeisha, 'lp-shop', 'legendary'),
  },
  {
    id: 'sidra-natural',
    name: 'Sidra Natural',
    price: 55,
    badge: null,
    badgeBg: '',
    tastingNotes: 'Strawberry, Raspberry, Raw Cane',
    scaScore: 'SCA 89',
    imagePath: 'images/productos/sidra-bag.png',
    shopifyHref: shopifyUrl(SHOPIFY.tucanBlend, 'lp-shop', 'sidra'),
  },
  {
    id: 'palma-blend',
    name: 'Palma Blend',
    price: 42,
    badge: 'MOST POPULAR',
    badgeBg: 'bg-green',
    tastingNotes: 'Caramel, Chocolate, Almond',
    scaScore: 'SCA 86',
    imagePath: 'images/productos/palma-blend-bag.png',
    shopifyHref: shopifyUrl(SHOPIFY.palmaBlend, 'lp-shop', 'palma'),
  },
];

const TRUST_BADGES = [
  'World Barista Champion',
  'SCA 86–90+',
  'Free US Shipping',
  'Roasted at Origin',
] as const;

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section
      className="relative bg-dark overflow-hidden"
      aria-label="Hero — Buy Colombian Specialty Coffee"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img('images/hero/hero-lifestyle.png', 'hero')})`,
        }}
        role="presentation"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-dark/70"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-36 flex flex-col items-center text-center gap-6">
        {/* Eyebrow */}
        <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-rose">
          La Palma &amp; El Tuc&aacute;n &mdash; Zipac&oacute;n, Colombia
        </p>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
          Colombian Specialty Coffee
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl text-cream max-w-xl leading-relaxed">
          Roasted at Origin, Shipped Free to Your Door
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href={shopifyUrl(SHOPIFY.collections, 'lp-shop', 'hero-main')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-4 whitespace-nowrap"
          >
            Shop Coffees &mdash; From $42
          </a>
          <a
            href={shopifyUrl(SHOPIFY.subscription, 'lp-shop', 'hero-sub')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-semibold uppercase tracking-wider px-10 py-4 border border-white text-white transition-colors duration-200 hover:bg-white hover:text-dark whitespace-nowrap"
          >
            Try Subscription &mdash; From $2/day
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustBadgesSection() {
  return (
    <section
      className="bg-cream"
      aria-label="Trust badges"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <ul className="flex flex-wrap justify-center items-center gap-0">
          {TRUST_BADGES.map((badge, index) => (
            <li key={badge} className="flex items-center">
              <span className="font-body text-sm font-semibold text-dark text-center px-4 py-2">
                {badge}
              </span>
              {index < TRUST_BADGES.length - 1 && (
                <span
                  className="text-rose font-bold text-base select-none"
                  aria-hidden="true"
                >
                  ✦
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: ShopProduct }) {
  return (
    <article className="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative bg-beige-natural flex items-center justify-center h-48 overflow-hidden">
        <img
          src={img(product.imagePath, 'product')}
          alt={`${product.name} — Colombian Specialty Coffee by La Palma & El Tucán`}
          width="300"
          height="192"
          className="h-full w-full object-contain py-2 transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 ${product.badgeBg} text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm`}
          >
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-3 right-3 bg-white border border-gray-200 text-[11px] font-bold px-2 py-1 rounded-sm text-dark">
          {product.scaScore}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-display text-xl font-bold text-dark leading-tight">
          {product.name}
        </h3>

        <p className="font-body text-2xl font-bold text-burgundy">
          ${product.price}
        </p>

        <p className="font-body text-sm italic text-gray-600 leading-relaxed">
          {product.tastingNotes}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <a
          href={product.shopifyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body bg-rose text-white w-full py-3 uppercase tracking-wider font-semibold text-sm text-center transition-colors duration-200 hover:bg-rose-dark block rounded-sm"
        >
          Buy Now &mdash; ${product.price}
        </a>

        {product.price >= 50 && (
          <p className="font-body text-xs font-semibold text-green text-center">
            Free Shipping
          </p>
        )}
      </div>
    </article>
  );
}

function ProductGridSection() {
  return (
    <section
      className="bg-white"
      aria-label="Coffee products"
      id="shop-products"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-burgundy mb-3">
            Producer-Direct
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark">
            Select Your Coffee
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <a
            href={shopifyUrl(SHOPIFY.collections, 'lp-shop', 'grid-view-all')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-semibold uppercase tracking-wider text-rose hover:text-rose-dark transition-colors duration-200 border-b border-rose pb-0.5"
          >
            View All Coffees &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function UrgencySection() {
  return (
    <section
      className="bg-dark text-white"
      aria-label="Guarantee and urgency"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20 flex flex-col items-center text-center gap-6">
        {/* Divider ornament */}
        <span className="text-rose text-xl select-none" aria-hidden="true">
          ✦
        </span>

        {/* Headline */}
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug">
          Limited roast batches. 100% satisfaction guarantee.
        </h2>

        {/* Body */}
        <p className="font-body text-base text-white/80 leading-relaxed max-w-xl">
          Each batch is roasted to order at our farm in Colombia&apos;s cloud forest.
          If you&apos;re not completely satisfied, we&apos;ll refund your purchase.
        </p>

        {/* CTA */}
        <a
          href={shopifyUrl(SHOPIFY.collections, 'lp-shop', 'final')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base px-10 py-4 mt-2"
        >
          Shop All Coffees
        </a>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page export
// ---------------------------------------------------------------------------

export function LandingShop() {
  useEffect(() => {
    document.title =
      'Buy Colombian Specialty Coffee | Geisha, Sidra & Blends — La Palma & El Tucán';
  }, []);

  return (
    <>
      <main>
        <HeroSection />
        <TrustBadgesSection />
        <ProductGridSection />
        <UrgencySection />
      </main>
      <Footer />
    </>
  );
}
