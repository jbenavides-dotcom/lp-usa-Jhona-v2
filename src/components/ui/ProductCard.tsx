import type { Product } from '../../constants/products';
import { TierBadge } from './TierBadge';

interface ProductCardProps {
  product: Product;
}

const IMAGE_BG: Record<string, string> = {
  legendary: 'bg-dark',
  heroes: 'bg-stone-100',
  warrior: 'bg-stone-50',
};

export function ProductCard({ product }: ProductCardProps) {
  const BASE = import.meta.env.BASE_URL;

  const imageBg = IMAGE_BG[product.tier] ?? 'bg-stone-50';
  const showStockWarning = product.stock < 50;
  const showFreeShipping = product.price >= 50;

  return (
    <article className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image area */}
      <div className={`relative ${imageBg} flex items-center justify-center h-96 overflow-hidden group`}>
        <img
          src={`${BASE}${product.image}`}
          alt={product.name}
          className="h-full w-full object-cover scale-110 transition-transform duration-500 group-hover:scale-125"
          loading="lazy"
        />

        {/* Badge — top left */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-burgundy text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
            {product.badge}
          </span>
        )}

        {/* Tag — top right */}
        <span className="absolute top-3 right-3 text-gold text-[10px] font-bold uppercase tracking-widest">
          {product.tag}
        </span>

        {/* SCA Score — bottom left */}
        <span className="absolute bottom-3 left-3 bg-white border border-gray-200 text-[11px] font-bold px-2 py-1 rounded-sm">
          SCA{' '}
          <span className="text-burgundy">{product.scaScore}</span>
        </span>
      </div>

      {/* Info area */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Tier badge */}
        <TierBadge tier={product.tier} />

        {/* Name */}
        <h3 className="font-display text-xl font-bold text-dark leading-tight">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          {product.comparePrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.comparePrice}
            </span>
          )}
          <span className="text-burgundy text-xl font-bold">${product.price}</span>
        </div>

        {/* Process + altitude */}
        <p className="text-gold text-[11px] font-semibold uppercase tracking-wider">
          {product.process} &nbsp;&middot;&nbsp; {product.altitude}
        </p>

        {/* Weight */}
        <p className="text-gray-400 text-xs">{product.weight}</p>

        {/* Tasting notes */}
        <p className="text-gray-600 text-sm italic leading-relaxed">
          {product.tastingNotes}
        </p>

        {/* Stock warning */}
        {showStockWarning && (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
            <span className="text-red-600 text-xs font-semibold">
              Only {product.stock} bags left
            </span>
          </div>
        )}

        {/* Spacer to push CTA to bottom */}
        <div className="flex-1" />

        {/* CTA button */}
        <a
          href={product.shopifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm text-center block w-full"
        >
          Buy Now — ${product.price}
        </a>

        {/* Free shipping note */}
        {showFreeShipping && (
          <p className="text-green text-xs font-semibold text-center">
            Free Shipping
          </p>
        )}
      </div>
    </article>
  );
}
