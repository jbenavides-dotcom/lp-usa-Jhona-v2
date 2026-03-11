import { useState } from 'react';
import { Copy, Truck, Clock } from 'lucide-react';
import { SHOPIFY_COLLECTIONS, DISCOUNT_URL } from '../../constants/config';
import { ScrollReveal } from '../ui/ScrollReveal';

const BASE = import.meta.env.BASE_URL;

export function CtaFinal() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText('WELCOME10').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section className="relative bg-burgundy py-20 text-white overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 bg-burgundy/80"
        style={{
          backgroundImage: `url(${BASE}images/banners/lineup-detail.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          {/* Eyebrow */}
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-body">
            READY TO TASTE THE DIFFERENCE?
          </p>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
            Your First Bag, 10% Off
          </h2>

          {/* Description */}
          <p className="text-white/70 mt-4 max-w-xl mx-auto font-body">
            Experience the difference of producer-roasted specialty coffee. From our ultra-premium
            Legendary Geisha scoring 90+ on the SCA scale to the accessible everyday luxury of
            our Palma Blend, every 12oz bag is roasted to order on our farm in Zipacón, Colombia
            and shipped fresh from Miami. Use code WELCOME10 at checkout for 10% off your first
            order. Free shipping on orders over $50.
          </p>

          {/* Discount code box */}
          <div className="mt-8 inline-flex items-center bg-white/10 backdrop-blur border border-white/20 rounded-lg px-6 py-3">
            <span className="font-mono text-2xl font-bold text-rose tracking-wider">
              WELCOME10
            </span>
            <button
              onClick={handleCopy}
              aria-label="Copy discount code"
              className="ml-4 flex items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <Copy className="w-5 h-5" />
              <span className="text-xs font-body font-medium transition-opacity duration-200">
                {copied ? 'Copied!' : 'Copy'}
              </span>
            </button>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SHOPIFY_COLLECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-lg inline-block"
            >
              Shop Now — From $42
            </a>
            <a
              href={DISCOUNT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-lg inline-block"
            >
              Shop with 10% Off
            </a>
          </div>

          {/* Trust reminder */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm font-body">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4" aria-hidden="true" />
              Free Shipping $50+
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              Roasted Fresh
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
