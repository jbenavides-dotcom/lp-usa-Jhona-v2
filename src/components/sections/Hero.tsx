import { Truck, Clock, Award, ChevronDown } from 'lucide-react';
import { SHOPIFY_COLLECTIONS } from '../../constants/config';

const BASE = import.meta.env.BASE_URL;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image + dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BASE}images/hero/hero-lifestyle.png)` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full text-white text-center px-4 flex flex-col items-center gap-6">
        {/* 1. Real achievements bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-white/80">
          <span className="flex items-center gap-1.5">
            <Award size={13} className="text-gold" />
            <span className="font-semibold text-white">World Barista Champion 2019</span>
          </span>
          <span className="text-white/40 hidden sm:inline">|</span>
          <span>SCA 86-90+</span>
          <span className="text-white/40 hidden sm:inline">|</span>
          <span>Record $303 USD/lb</span>
        </div>

        {/* 2. Eyebrow */}
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold">
          Producer-Roasted in Colombia&apos;s Cloud Forest
        </p>

        {/* 3. Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
          <span className="text-white">Specialty Coffee</span>
          <br />
          <span className="text-cream">From Our Farm to Your Cup</span>
        </h1>

        {/* 4. Subheadline */}
        <p className="font-body text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Geisha, Sidra &amp; rare varietals roasted at origin in Zipacón, Colombia.
          From $42 USD.
        </p>

        {/* 5. CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
          <a
            href={SHOPIFY_COLLECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm md:text-base px-10 py-4 rounded-sm"
          >
            Shop Our Coffees — From $42
          </a>
          <a
            href="#process"
            className="font-body text-sm md:text-base uppercase tracking-wider font-semibold px-10 py-4 border-2 border-white text-white rounded-sm transition-colors duration-200 hover:bg-white hover:text-dark"
          >
            See Our Process
          </a>
        </div>

        {/* 6. Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-2 text-white/70 text-xs md:text-sm">
          <span className="flex items-center gap-1.5">
            <Truck size={15} />
            Ships from Miami
          </span>
          <span className="text-white/30">|</span>
          <span className="flex items-center gap-1.5">
            <Clock size={15} />
            Roasted Fresh to Order
          </span>
        </div>

      </div>

      {/* 8. Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
