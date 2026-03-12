import { TreePine, Bird, Leaf, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SUSTAINABILITY_STATS } from '../../constants/config';
import { ScrollReveal } from '../ui/ScrollReveal';

const BASE = import.meta.env.BASE_URL;

const ICON_MAP: Record<string, LucideIcon> = {
  TreePine,
  Bird,
  Leaf,
  Users,
};

export function Sustainability() {
  return (
    <section id="sustainability" className="bg-verde-finca py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column — content */}
          <ScrollReveal delay={0}>
            <div>
              {/* Eyebrow */}
              <p className="text-green font-body uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                REGENERATIVE AGRICULTURE
              </p>

              {/* Title */}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dark leading-tight">
                Coffee That Gives Back
              </h2>

              {/* Description */}
              <p className="text-dark font-body leading-relaxed mt-4">
                100% organic and agroecological. We removed 20,000 trees to eliminate monoculture,
                planting 27 species per hectare in a polyculture system. Our farm captures over
                11,000 tons of CO₂ annually while supporting more than 55 native species —
                including the endangered Palma de Cera and the Emerald Toucan that inspired our
                name.
              </p>

              <p className="text-dark font-body leading-relaxed mt-4">
                Our circular economy means nothing goes to waste. Coffee pulp becomes compost,
                which feeds the soil that nurtures new trees. We provide one kilogram of organic
                fertilizer to neighboring farmers for every kilogram of cherry they sell us, creating
                a virtuous cycle that elevates the entire community around Zipacón.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                {SUSTAINABILITY_STATS.map((stat) => {
                  const Icon = ICON_MAP[stat.icon] ?? Leaf;
                  return (
                    <div key={stat.label} className="flex flex-col gap-3">
                      <div className="w-12 h-12 bg-white/50 border border-dark/10 rounded-lg flex items-center justify-center">
                        <Icon size={22} className="text-gold" />
                      </div>
                      <p className="font-display text-2xl font-bold text-dark">{stat.value}</p>
                      <p className="text-dark font-body text-sm leading-snug">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* La Amistad Program */}
              <div className="mt-8 bg-white/50 border border-dark/10 rounded-xl p-6">
                <h3 className="font-display font-bold text-dark">La Amistad Program</h3>
                <p className="text-dark font-body text-sm mt-2 leading-relaxed">
                  Partnership with 200+ neighboring families. Fair prices, organic fertilizer, and
                  technical training for every farmer.
                </p>
              </div>

              {/* Biodiversity image */}
              <img
                src={`${BASE}images/sostenibilidad/biodiversidad_ganado.jpg`}
                alt="Cattle grazing among native trees as part of the regenerative agriculture system at La Palma & El Tucán"
                loading="lazy"
                width="600"
                height="192"
                className="mt-6 rounded-xl w-full h-48 object-cover opacity-80"
              />
            </div>
          </ScrollReveal>

          {/* Right column — image */}
          <ScrollReveal delay={150}>
            <div className="rounded-xl overflow-hidden min-h-[400px]">
              <img
                src={`${BASE}images/sostenibilidad/finca_vista_panoramica.jpg`}
                alt="Panoramic view of La Palma & El Tucán coffee farm in the cloud forest of Zipacón, Colombia"
                loading="lazy"
                width="600"
                height="400"
                className="object-cover w-full h-full min-h-[400px]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
