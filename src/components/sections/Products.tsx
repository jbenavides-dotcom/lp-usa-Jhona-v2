import { PRODUCTS, TIERS } from '../../constants/products';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ProductCard } from '../ui/ProductCard';

export function Products() {
  return (
    <section id="products" className="bg-rosa-empaque py-20">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Section header */}
        <div className="text-center mb-12 flex flex-col items-center gap-3">
          <p className="section-subtitle">Roasted Series</p>
          <h2 className="section-title font-display">Our Coffees</h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each coffee tells a story of terroir, process, and craft. Roasted at origin
            in our cloud forest farm.
          </p>

          {/* Extended intro */}
          <p className="font-body text-gray-500 text-sm max-w-3xl mx-auto text-center mt-2 leading-relaxed">
            From our ultra-premium Legendary Geisha — with its explosive jasmine and citrus profile
            scoring 90+ on the SCA scale — to the accessible everyday luxury of our Palma Blend,
            each coffee is roasted on our Stronghold S8X roaster just 50 meters from where it was
            grown.
          </p>
        </div>

        {/* Tier groups */}
        {TIERS.map((tier, tierIndex) => {
          const tierProducts = PRODUCTS.filter((p) => p.tier === tier.id);
          if (tierProducts.length === 0) return null;

          return (
            <div key={tier.id}>
              <ScrollReveal delay={tierIndex * 100} className="mb-16">
                {/* Tier header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-gray-200" />
                  <div className="text-center shrink-0">
                    <span className="font-display text-2xl font-bold text-dark">
                      {tier.name}
                    </span>
                    <span className="font-body text-gold italic"> — </span>
                    <span className="font-body text-gold italic text-lg">
                      {tier.subtitle}
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tierProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </ScrollReveal>

            </div>
          );
        })}


      </div>
    </section>
  );
}
