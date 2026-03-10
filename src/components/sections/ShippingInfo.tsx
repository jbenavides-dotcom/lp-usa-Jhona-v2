import { Truck, Clock, Zap, MapPin, Package } from 'lucide-react';
import { SHIPPING } from '../../constants/config';
import { ScrollReveal } from '../ui/ScrollReveal';

const BASE = import.meta.env.BASE_URL;

const shippingItems = [
  {
    Icon: Truck,
    text: `Free shipping on all orders over $${SHIPPING.freeThreshold} USD`,
  },
  {
    Icon: Clock,
    text: `Standard delivery: ${SHIPPING.standard.days} via ${SHIPPING.standard.carrier}`,
  },
  {
    Icon: Zap,
    text: `Express delivery: ${SHIPPING.express.days} via ${SHIPPING.express.carrier} ($${SHIPPING.express.price})`,
  },
  {
    Icon: MapPin,
    text: `Ships to ${SHIPPING.coverage.join(' and ')}`,
  },
  {
    Icon: Package,
    text: SHIPPING.freshness,
  },
];

export function ShippingInfo() {
  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — image */}
          <ScrollReveal delay={0}>
            <img
              src={`${BASE}images/banners/lineup-clean.png`}
              alt="La Palma & El Tucán Roasted Series lineup"
              className="rounded-xl w-full shadow-sm object-cover"
            />
          </ScrollReveal>

          {/* RIGHT — content */}
          <ScrollReveal delay={150}>
            <p className="section-subtitle">SHIPPING &amp; FRESHNESS</p>

            <h2 className="font-display text-3xl font-bold text-dark mt-3">
              Roasted Fresh. Shipped Fast.
            </h2>

            <p className="text-gray-600 font-body leading-relaxed mt-4">
              Every bag is roasted within 48 hours of your order and shipped directly from our
              fulfillment center in Miami, Florida. We use USPS Priority Mail to ensure your
              coffee arrives fresh, with full flavor intact.
            </p>

            <p className="text-gray-600 font-body leading-relaxed mt-3">
              Every 12oz bag is sealed with a one-way degassing valve to preserve peak freshness
              during transit. Whether you choose our ultra-premium Legendary Geisha or the everyday
              luxury of our Palma Blend, your coffee arrives at its absolute best — with full
              traceability from our farm in Zipacón to your doorstep.
            </p>

            {/* Shipping details list */}
            <ul className="mt-6 space-y-4">
              {shippingItems.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-rose flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700 font-body text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
